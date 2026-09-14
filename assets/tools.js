/* ==========================================================================
   INTERACTIVE TEACHING TOOLS
   Every tool is a teaching object, not a clinical device. Where a real
   clinical calculator exists, the tool says so and points to it.
   ========================================================================== */

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const num = (el) => parseFloat(el.value) || 0;
const r1 = (n) => Math.round(n * 10) / 10;

window.TOOLS = {

/* ---------------- MODULE 2: rule of 6 ---------------- */
'statin-dose': {
  title: "Dose escalation versus combination therapy",
  tag: "Module 2",
  html: `
<p class="note" style="margin-top:0">Enter a starting LDL-C and a goal. The tool applies the observed dose-response and shows why the arithmetic favours a second mechanism over a bigger dose.</p>
<div class="fields">
  <div class="field"><label>Current LDL-C (mg/dL)</label><input type="number" id="sd-ldl" value="120" min="20" max="400"></div>
  <div class="field"><label>Current therapy</label><select id="sd-cur">
    <option value="0">None</option>
    <option value="37">Atorvastatin 10 mg</option>
    <option value="43">Atorvastatin 20 mg</option>
    <option value="49" selected>Atorvastatin 40 mg</option>
    <option value="55">Atorvastatin 80 mg</option>
    <option value="46">Rosuvastatin 10 mg</option>
    <option value="52">Rosuvastatin 20 mg</option>
    <option value="55">Rosuvastatin 40 mg</option>
  </select></div>
  <div class="field"><label>LDL-C goal (mg/dL)</label><input type="number" id="sd-goal" value="70" min="20" max="200"></div>
</div>
<div class="out"><div class="out-grid" id="sd-out"></div><div id="sd-msg"></div></div>`,
  init(root) {
    const calc = () => {
      const ldl = num($('#sd-ldl', root)), goal = num($('#sd-goal', root));
      const cur = num($('#sd-cur', root));
      const maxStatin = 55;
      const headroom = cur >= maxStatin ? 0 : (1 - (1 - maxStatin / 100) / (1 - cur / 100)) * 100;
      const afterDouble = ldl * (1 - Math.min(headroom, 6) / 100);
      const afterEze = ldl * (1 - 0.22);
      const afterBoth = afterDouble * (1 - 0.22);
      const afterPcsk9 = ldl * (1 - 0.55);
      const cell = (k, v, cls) => `<div class="stat ${cls || ''}"><div class="k">${k}</div><div class="v">${Math.round(v)}</div><div class="u">mg/dL</div></div>`;
      $('#sd-out', root).innerHTML =
        cell('Now', ldl) +
        cell('Double the statin', afterDouble, afterDouble <= goal ? 'ok' : 'hi') +
        cell('Add ezetimibe', afterEze, afterEze <= goal ? 'ok' : 'hi') +
        cell('Both', afterBoth, afterBoth <= goal ? 'ok' : 'hi') +
        cell('Add PCSK9i', afterPcsk9, afterPcsk9 <= goal ? 'ok' : 'hi');
      let msg = '';
      if (afterDouble > goal && afterEze <= goal)
        msg = `<div class="flag ok"><strong>This is the rule of 6 in action.</strong> Doubling the statin gains about ${Math.round(ldl - afterDouble)} mg/dL and misses the goal. Adding ezetimibe gains about ${Math.round(ldl - afterEze)} mg/dL and reaches it — one cheap tablet, no CYP interactions, and outcome evidence from IMPROVE-IT.</div>`;
      else if (afterBoth > goal)
        msg = `<div class="flag warn"><strong>Oral combination is not enough here.</strong> Even maximal statin plus ezetimibe leaves LDL-C at about ${Math.round(afterBoth)}. This patient needs a PCSK9-directed agent. Recall from Module 2 why: the statin raises PCSK9 through SREBP-2, partially antagonising itself.</div>`;
      else if (afterDouble <= goal)
        msg = `<div class="flag ok">Dose escalation alone reaches the goal here. Note how narrow that window is — it only works when you start close.</div>`;
      $('#sd-msg', root).innerHTML = msg;
    };
    $$('#sd-ldl,#sd-goal,#sd-cur', root).forEach(el => el.addEventListener('input', calc));
    calc();
  }
},

/* ---------------- MODULE 3: enterohepatic ---------------- */
'enterohepatic-sim': {
  title: "Enterohepatic circulation simulator",
  tag: "Module 3",
  html: `
<p class="note" style="margin-top:0">Block one node at a time and predict the direction of change before you look. Magnitudes are illustrative teaching values.</p>
<div class="checkgrid" id="eh-opts">
  <label class="chk"><input type="checkbox" value="npc1l1"><span><strong>Block NPC1L1</strong><span class="sub">Ezetimibe</span></span></label>
  <label class="chk"><input type="checkbox" value="asbt"><span><strong>Bind bile acids in lumen</strong><span class="sub">Sequestrant</span></span></label>
  <label class="chk"><input type="checkbox" value="hmgcr"><span><strong>Block HMG-CoA reductase</strong><span class="sub">Statin</span></span></label>
  <label class="chk"><input type="checkbox" value="abcg58"><span><strong>Knock out ABCG5/G8</strong><span class="sub">Sitosterolaemia</span></span></label>
</div>
<div class="out"><div class="out-grid" id="eh-out"></div><div id="eh-msg"></div></div>`,
  init(root) {
    const calc = () => {
      const on = $$('#eh-opts input:checked', root).map(i => i.value);
      $$('#eh-opts .chk', root).forEach(l => l.classList.toggle('on', $('input', l).checked));
      let ldl = 0, tg = 0, cyp = 0, sterol = 0, notes = [];
      if (on.includes('npc1l1')) { ldl -= 18; cyp += 10; notes.push("Ezetimibe halves absorption. Compensatory hepatic synthesis limits monotherapy effect — which is exactly why it pairs so well with a statin."); }
      if (on.includes('asbt')) { ldl -= 20; tg += 18; cyp += 60; notes.push("Sequestrant de-represses CYP7A1. Hepatic cholesterol falls, LDLR rises, LDL-C falls. But SREBP-1c also activates, so triglycerides rise — the reason for the contraindication in hypertriglyceridaemia."); }
      if (on.includes('hmgcr')) { ldl -= 45; notes.push("Statin depletes hepatic cholesterol, SREBP-2 activates, LDL receptors rise. Note that it also raises PCSK9 (Module 2)."); }
      if (on.includes('abcg58')) { sterol += 400; ldl += 8; notes.push("Without ABCG5/G8 the enterocyte cannot pump plant sterols back out. Plasma sitosterol rises 10-25 fold with near-normal cholesterol: sitosterolaemia. It responds to ezetimibe, not statins."); }
      if (on.includes('npc1l1') && on.includes('hmgcr')) notes.push("<strong>Combination logic:</strong> the statin blocks synthesis and the enterocyte compensates by absorbing more; ezetimibe blocks absorption and the liver compensates by synthesising more. Each drug closes the other's escape route.");
      const cell = (k, v, u, good) => `<div class="stat ${v === 0 ? '' : (good ? 'ok' : 'hi')}"><div class="k">${k}</div><div class="v">${v > 0 ? '+' : ''}${v}</div><div class="u">${u}</div></div>`;
      $('#eh-out', root).innerHTML =
        cell('Plasma LDL-C', ldl, '%', ldl < 0) +
        cell('Triglycerides', tg, '%', tg <= 0) +
        cell('CYP7A1 activity', cyp, '%', true) +
        cell('Plasma plant sterols', sterol, '%', sterol === 0);
      $('#eh-msg', root).innerHTML = notes.length ? '<div class="flag warn">' + notes.join('<br><br>') + '</div>' : '<p class="note">Select one or more interventions.</p>';
    };
    $$('#eh-opts input', root).forEach(el => el.addEventListener('change', calc));
    calc();
  }
},

/* ---------------- MODULE 4: particle explorer ---------------- */
'particle-explorer': {
  title: "Atherogenic dyslipidaemia: how one mechanism makes the whole triad",
  tag: "Module 4",
  html: `
<p class="note" style="margin-top:0">Move the triglyceride slider and watch CETP and hepatic lipase produce small dense LDL, low HDL-C, and an apoB that is high out of proportion to LDL-C.</p>
<div class="field" style="max-width:420px">
  <label>Plasma triglycerides: <span id="pe-tgv" style="color:var(--navy-3);font-size:15px">150</span> mg/dL</label>
  <input type="range" id="pe-tg" min="60" max="500" value="150" step="10" style="width:100%">
</div>
<div class="out"><div class="out-grid" id="pe-out"></div><div id="pe-msg"></div></div>`,
  init(root) {
    const calc = () => {
      const tg = num($('#pe-tg', root));
      $('#pe-tgv', root).textContent = tg;
      const ldlC = 110;
      const cetp = Math.min(100, Math.max(0, (tg - 80) / 4.2));
      const hdl = Math.round(58 - cetp * 0.28);
      const sdldl = Math.round(18 + cetp * 0.62);
      const apoB = Math.round(ldlC * (0.78 + cetp * 0.0042) + 8);
      const nonHdl = Math.round(ldlC + tg / 5);
      const cell = (k, v, u, bad) => `<div class="stat ${bad ? 'hi' : ''}"><div class="k">${k}</div><div class="v">${v}</div><div class="u">${u}</div></div>`;
      $('#pe-out', root).innerHTML =
        cell('LDL-C', ldlC, 'mg/dL (unchanged)', false) +
        cell('HDL-C', hdl, 'mg/dL', hdl < 40) +
        cell('Small dense LDL', sdldl, '% of LDL', sdldl > 45) +
        cell('apoB', apoB, 'mg/dL', apoB > 100) +
        cell('Non-HDL-C', nonHdl, 'mg/dL', nonHdl > 130);
      let m;
      if (tg < 150) m = `<div class="flag ok">Normal triglycerides. CETP has little substrate, LDL particles stay large and cholesterol-rich, and LDL-C is a fair proxy for particle number.</div>`;
      else if (tg < 250) m = `<div class="flag warn">CETP exchange is now active. LDL is becoming triglyceride-enriched and hepatic lipase is stripping it down. <strong>Note that LDL-C has not moved</strong> — but apoB has.</div>`;
      else m = `<div class="flag err"><strong>The full atherogenic triad.</strong> High TG, low HDL-C, predominantly small dense LDL, and an apoB substantially discordant from an unremarkable LDL-C of 110. This is the dominant Indian phenotype (Module 13). A clinician reading only total and LDL cholesterol will call this patient low risk. They are not.</div>`;
      $('#pe-msg', root).innerHTML = m;
    };
    $('#pe-tg', root).addEventListener('input', calc);
    calc();
  }
},

/* ---------------- MODULE 6: cumulative exposure ---------------- */
'exposure-sim': {
  title: "Cumulative LDL exposure — the cholesterol-year model",
  tag: "Module 6",
  html: `
<p class="note" style="margin-top:0">Illustrative model based on the Mendelian randomisation literature. It shows the <em>shape</em> of the relationship, which is the teaching point — it is not a clinical risk calculator.</p>
<div class="fields">
  <div class="field"><label>Untreated LDL-C (mg/dL)</label><input type="number" id="ex-ldl" value="160" min="50" max="400"></div>
  <div class="field"><label>Age treatment starts</label><input type="number" id="ex-age" value="55" min="10" max="85"></div>
  <div class="field"><label>Treated LDL-C (mg/dL)</label><input type="number" id="ex-tx" value="70" min="15" max="250"></div>
</div>
<div class="out"><div class="out-grid" id="ex-out"></div><div id="ex-chart" style="margin-top:14px"></div><div id="ex-msg"></div></div>`,
  init(root) {
    const THRESH = 8000;
    const calc = () => {
      const ldl = num($('#ex-ldl', root)), age = num($('#ex-age', root)), tx = num($('#ex-tx', root));
      const crossAge = (L, startAge, treated) => {
        let acc = 0;
        for (let a = 0; a <= 100; a++) { acc += (a < startAge ? L : treated); if (acc >= THRESH) return a; }
        return null;
      };
      const noTx = crossAge(ldl, 999, ldl);
      const withTx = crossAge(ldl, age, tx);
      const early = crossAge(ldl, Math.max(18, age - 15), tx);
      const fmt = v => v === null ? "&gt;100" : v;
      $('#ex-out', root).innerHTML =
        `<div class="stat hi"><div class="k">Untreated</div><div class="v">${fmt(noTx)}</div><div class="u">age at threshold</div></div>` +
        `<div class="stat"><div class="k">Treated from ${age}</div><div class="v">${fmt(withTx)}</div><div class="u">age at threshold</div></div>` +
        `<div class="stat ok"><div class="k">Treated from ${Math.max(18, age - 15)}</div><div class="v">${fmt(early)}</div><div class="u">age at threshold</div></div>`;
      // simple bar chart
      const bars = [['Untreated', noTx, 'var(--err)'], [`From age ${age}`, withTx, 'var(--warn)'], [`From age ${Math.max(18, age - 15)}`, early, 'var(--ok)']];
      $('#ex-chart', root).innerHTML = bars.map(([l, v, c]) => {
        const val = v === null ? 100 : v;
        return `<div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;font-family:var(--sans);font-size:12.5px">
          <span style="width:120px;flex:none;color:var(--ink-3)">${l}</span>
          <span style="flex:1;background:var(--surface-2);border-radius:4px;height:18px;position:relative;border:1px solid var(--border)">
            <span style="display:block;height:100%;width:${val}%;background:${c};border-radius:3px"></span></span>
          <span style="width:56px;flex:none;text-align:right;font-weight:700">${v === null ? '>100' : v + ' yr'}</span></div>`;
      }).join('');
      const gained = (withTx === null ? 100 : withTx) - (noTx === null ? 100 : noTx);
      const extra = (early === null ? 100 : early) - (withTx === null ? 100 : withTx);
      $('#ex-msg', root).innerHTML = `<div class="flag ok">Treating from age ${age} delays the threshold by about <strong>${gained} years</strong>. Starting 15 years earlier buys a further <strong>${extra} years</strong> on top of that. <br><br><strong>This is why ten-year risk underserves the young</strong>, and why the 2026 ACC/AHA guideline now reports 30-year risk and recommends considering therapy in young adults with LDL-C at or above 160 mg/dL.</div>`;
    };
    $$('#ex-ldl,#ex-age,#ex-tx', root).forEach(el => el.addEventListener('input', calc));
    calc();
  }
},

/* ---------------- MODULE 7: lipid calculator ---------------- */
'lipid-calc': {
  title: "LDL-C equation comparator",
  tag: "Module 7",
  html: `
<p class="note" style="margin-top:0">Enter a measured panel. The tool runs all three equations, flags divergence, and computes non-HDL-C and apoB discordance.</p>
<div class="fields">
  <div class="field"><label>Total cholesterol</label><input type="number" id="lc-tc" value="210"></div>
  <div class="field"><label>HDL-C</label><input type="number" id="lc-hdl" value="38"></div>
  <div class="field"><label>Triglycerides</label><input type="number" id="lc-tg" value="320"></div>
  <div class="field"><label>apoB (optional)</label><input type="number" id="lc-apob" placeholder="mg/dL"></div>
</div>
<div class="out"><div class="out-grid" id="lc-out"></div><div id="lc-msg"></div></div>`,
  init(root) {
    const mh = (tg, nonhdl) => {
      // Simplified Martin-Hopkins adjustable factor grid (teaching approximation)
      const t = tg, n = nonhdl;
      let f;
      if (t < 100) f = n < 100 ? 3.5 : n < 160 ? 3.9 : 4.3;
      else if (t < 150) f = n < 100 ? 4.3 : n < 160 ? 4.8 : 5.2;
      else if (t < 200) f = n < 100 ? 4.9 : n < 160 ? 5.4 : 5.9;
      else if (t < 300) f = n < 100 ? 5.5 : n < 160 ? 6.1 : 6.7;
      else if (t < 400) f = n < 100 ? 6.2 : n < 160 ? 6.9 : 7.4;
      else f = n < 160 ? 7.6 : 8.3;
      return f;
    };
    const calc = () => {
      const tc = num($('#lc-tc', root)), hdl = num($('#lc-hdl', root)), tg = num($('#lc-tg', root));
      const apob = num($('#lc-apob', root));
      const nonhdl = tc - hdl;
      const fw = tg > 400 ? null : tc - hdl - tg / 5;
      const f = mh(tg, nonhdl);
      const mhv = nonhdl - tg / f;
      const sam = tg > 800 ? null : (tc / 0.948) - (hdl / 0.971) - ((tg / 8.56) + (tg * nonhdl / 2140) - (tg * tg / 16100)) - 9.44;
      const cell = (k, v, u, cls) => `<div class="stat ${cls || ''}"><div class="k">${k}</div><div class="v">${v === null ? 'n/a' : Math.round(v)}</div><div class="u">${u}</div></div>`;
      $('#lc-out', root).innerHTML =
        cell('Non-HDL-C', nonhdl, 'mg/dL', nonhdl > 130 ? 'hi' : 'ok') +
        cell('Friedewald', fw, tg > 400 ? 'invalid above TG 400' : 'mg/dL') +
        cell('Martin-Hopkins', mhv, 'mg/dL') +
        cell('Sampson-NIH', sam, tg > 800 ? 'invalid' : 'mg/dL');
      const msgs = [];
      if (tg > 400) msgs.push(`<strong>Friedewald is invalid above TG 400 mg/dL.</strong> Use Sampson-NIH (validated to TG 800) or a direct LDL-C assay. Note that non-HDL-C of ${Math.round(nonhdl)} required no equation at all and cannot fail.`);
      if (fw !== null && Math.abs(fw - mhv) >= 8) msgs.push(`<strong>The equations disagree by about ${Math.round(Math.abs(fw - mhv))} mg/dL.</strong> Friedewald reads ${Math.round(fw)}, Martin-Hopkins reads ${Math.round(mhv)}. If a treatment threshold sits between those two numbers, which equation your laboratory uses determines whether this patient gets intensified therapy.`);
      if (fw !== null && fw < mhv - 3) msgs.push(`Friedewald is <strong>underestimating</strong> here — the classic failure mode at low LDL-C with high triglycerides. This is the patient already on a statin, and the Indian phenotype.`);
      if (apob > 0) {
        const est = mhv;
        const expected = est * 0.85 + 15;
        if (apob > expected + 12) msgs.push(`<strong>apoB is discordantly high</strong> at ${apob} mg/dL against an LDL-C of about ${Math.round(est)}. Many small cholesterol-poor particles. Treat to the apoB, not the LDL-C. The 2026 ACC/AHA guideline recommends apoB in exactly this situation.`);
        else msgs.push(`apoB of ${apob} mg/dL is broadly concordant with the calculated LDL-C. Rough equivalence: apoB 80 corresponds to LDL-C about 70; apoB 65 to LDL-C about 55.`);
      }
      $('#lc-msg', root).innerHTML = msgs.length ? '<div class="flag warn">' + msgs.join('<br><br>') + '</div>' : '<div class="flag ok">The three equations agree closely at these values.</div>';
    };
    $$('#lc-tc,#lc-hdl,#lc-tg,#lc-apob', root).forEach(el => el.addEventListener('input', calc));
    calc();
  }
},

/* ---------------- MODULE 8: DLCN ---------------- */
'dlcn': {
  title: "Dutch Lipid Clinic Network score",
  tag: "Module 8",
  html: `
<p class="note" style="margin-top:0">Score only the highest-scoring item within each group. LDL-C and DNA are scored independently.</p>
<div id="dl-groups"></div>
<div class="out"><div class="out-grid" id="dl-out"></div><div id="dl-msg"></div></div>`,
  init(root) {
    const groups = [
      { g: 'Family history (highest only)', name: 'fam', opts: [['None', 0], ['First-degree relative with premature CAD or vascular disease', 1], ['First-degree relative with LDL-C above 95th percentile', 1], ['First-degree relative with tendon xanthoma or arcus', 2], ['Child under 18 with LDL-C above 95th percentile', 2]] },
      { g: 'Clinical history (highest only)', name: 'clin', opts: [['None', 0], ['Premature cerebral or peripheral vascular disease', 1], ['Premature coronary artery disease', 2]] },
      { g: 'Physical examination (highest only)', name: 'phys', opts: [['None', 0], ['Corneal arcus before age 45', 4], ['Tendon xanthoma', 6]] },
      { g: 'LDL-C (mg/dL)', name: 'ldl', opts: [['Below 155', 0], ['155-189', 1], ['190-249', 3], ['250-329', 5], ['330 or above', 8]] },
      { g: 'DNA analysis', name: 'dna', opts: [['Not done or negative', 0], ['Causative mutation in LDLR, APOB or PCSK9', 8]] }
    ];
    $('#dl-groups', root).innerHTML = groups.map(g =>
      `<div class="field" style="margin-bottom:11px"><label>${g.g}</label><select data-dl="${g.name}">${g.opts.map((o, i) => `<option value="${o[1]}">${o[0]}</option>`).join('')}</select></div>`).join('');
    const calc = () => {
      const total = $$('[data-dl]', root).reduce((s, el) => s + num(el), 0);
      let cat, cls, note;
      if (total > 8) { cat = 'DEFINITE FH'; cls = 'hi'; note = 'Treat as familial hypercholesterolaemia. <strong>Initiate cascade screening of all first-degree relatives now</strong> — each has a 50% chance of carrying the variant, and this is the highest-yield activity available to you.'; }
      else if (total >= 6) { cat = 'PROBABLE FH'; cls = 'hi'; note = 'Manage as FH. Cascade screening is indicated. Consider genetic testing primarily to facilitate family screening, not to decide whether to treat.'; }
      else if (total >= 3) { cat = 'POSSIBLE FH'; cls = ''; note = 'Exclude secondary causes (TSH, HbA1c, renal and liver function, urine protein, drug history). Consider family screening and repeat assessment.'; }
      else { cat = 'UNLIKELY FH'; cls = 'ok'; note = 'FH is unlikely on these criteria. Assess cardiovascular risk conventionally, and remember that a negative genetic panel never excludes a clinical phenotype.'; }
      $('#dl-out', root).innerHTML = `<div class="stat ${cls}"><div class="k">Total score</div><div class="v">${total}</div><div class="u">points</div></div><div class="stat ${cls}" style="grid-column:span 2"><div class="k">Category</div><div class="v" style="font-size:17px">${cat}</div></div>`;
      $('#dl-msg', root).innerHTML = `<div class="flag ${cls === 'hi' ? 'err' : cls === 'ok' ? 'ok' : 'warn'}">${note}</div>`;
    };
    $$('[data-dl]', root).forEach(el => el.addEventListener('change', calc));
    calc();
  }
},

/* ---------------- MODULE 9: guideline categorisation ---------------- */
'risk-compare': {
  title: "How three guidelines would categorise this patient",
  tag: "Module 9",
  html: `
<div class="flag warn" style="margin-top:0;margin-bottom:14px"><strong>This is a teaching comparator, not a risk calculator.</strong> It does not compute PREVENT or SCORE2 — those require the official equations. It shows how the same clinical features are <em>categorised</em>, and what LDL-C goal each framework then applies. Use the official tools for actual risk estimation.</div>
<div class="checkgrid" id="rc-opts">
  <label class="chk"><input type="checkbox" value="ascvd"><span><strong>Established ASCVD</strong><span class="sub">MI, ACS, stroke, PAD, revascularisation</span></span></label>
  <label class="chk"><input type="checkbox" value="recurrent"><span><strong>Recurrent event within 2 years</strong><span class="sub">Despite therapy</span></span></label>
  <label class="chk"><input type="checkbox" value="dm"><span><strong>Diabetes</strong></span></label>
  <label class="chk"><input type="checkbox" value="dmtod"><span><strong>Diabetes with target organ damage or 3+ risk factors</strong></span></label>
  <label class="chk"><input type="checkbox" value="fh"><span><strong>Familial hypercholesterolaemia</strong></span></label>
  <label class="chk"><input type="checkbox" value="ckd"><span><strong>CKD stage 3 or higher</strong></span></label>
  <label class="chk"><input type="checkbox" value="cac300"><span><strong>Coronary calcium 300 or above</strong></span></label>
  <label class="chk"><input type="checkbox" value="cacany"><span><strong>Any coronary calcium above zero</strong></span></label>
  <label class="chk"><input type="checkbox" value="southasian"><span><strong>South Asian ancestry</strong><span class="sub">Risk-enhancing factor</span></span></label>
  <label class="chk"><input type="checkbox" value="lpa"><span><strong>Lp(a) above 50 mg/dL or 105 nmol/L</strong></span></label>
</div>
<div id="rc-out" style="margin-top:16px"></div>`,
  init(root) {
    const calc = () => {
      const on = $$('#rc-opts input:checked', root).map(i => i.value);
      $$('#rc-opts .chk', root).forEach(l => l.classList.toggle('on', $('input', l).checked));
      const has = k => on.includes(k);
      let acc, esc, lai, csi;
      if (has('ascvd')) { acc = ['Very high risk', 'LDL-C below 55 mg/dL']; esc = ['Very high risk', 'LDL-C below 55 mg/dL and 50% reduction']; lai = ['Very high risk', 'LDL-C below 50 mg/dL']; csi = ['Very high risk', 'LDL-C below 55 or non-HDL-C below 85']; }
      else if (has('fh') || has('dmtod') || has('ckd')) { acc = ['High risk', 'LDL-C below 70 mg/dL']; esc = ['Very high risk', 'LDL-C below 55 mg/dL']; lai = ['High to very high risk', 'LDL-C below 50-70 mg/dL']; csi = ['High risk', 'LDL-C below 70 mg/dL']; }
      else if (has('dm')) { acc = ['High risk (treat from age 40)', 'LDL-C below 70 mg/dL']; esc = ['High risk', 'LDL-C below 70 mg/dL']; lai = ['High risk', 'LDL-C below 70 mg/dL']; csi = ['High risk', 'LDL-C below 70 mg/dL']; }
      else if (has('cacany') || has('cac300')) { acc = ['Reclassified upward by CAC', has('cac300') ? 'LDL-C below 70 mg/dL' : 'LDL-C below 100 mg/dL']; esc = ['Risk modifier present', 'Consider intensification']; lai = [has('cac300') ? 'Extreme risk category A' : 'Risk enhanced', has('cac300') ? 'LDL-C below 50, optional 30 or below' : 'Intensify']; csi = ['Risk enhanced', 'Intensify']; }
      else { acc = ['Depends on PREVENT', 'Below 100 mg/dL if borderline or intermediate']; esc = ['Depends on SCORE2', 'Below 100 mg/dL if moderate risk']; lai = ['Lifetime risk framework', 'Targets set by lifetime, not 10-year, risk']; csi = ['Indian risk stratification', 'Per CSI 2024 categories']; }

      if (has('recurrent') && has('ascvd')) { esc = ['Extreme risk (second event within 2 years)', 'LDL-C below 40 mg/dL (Class IIb, from 2019)']; lai = ['Extreme risk category B', 'LDL-C at or below 30 mg/dL (recommended)']; }
      if (has('fh') && has('ascvd')) lai = ['Extreme risk category A', 'LDL-C below 50, optional at or below 30 mg/dL'];

      const rows = [
        ['ACC/AHA 2026', acc, 'PREVENT-ASCVD, ages 30-79, 10- and 30-year'],
        ['ESC/EAS 2025', esc, 'SCORE2 / SCORE2-OP, to age 89'],
        ['LAI CS-IV 2023', lai, 'Lifetime risk, not 10-year'],
        ['CSI 2024', csi, 'Indian data; non-fasting sampling']
      ];
      let extra = '';
      if (has('southasian')) extra += `<div class="flag warn"><strong>South Asian ancestry is a recognised risk-enhancing factor</strong>, and no major calculator was derived in an Indian cohort. The Pooled Cohort Equations classified South Asians as White and underestimated risk; PREVENT removed race entirely, correcting the classification problem but not the calibration problem. This is precisely why the LAI uses lifetime risk.</div>`;
      if (has('lpa')) extra += `<div class="flag warn"><strong>Elevated Lp(a)</strong> is a risk modifier in the 2025 ESC/EAS focused update (threshold above 50 mg/dL or above 105 nmol/L) and is to be measured once in adulthood per the 2026 ACC/AHA guideline. There is no approved Lp(a)-lowering therapy as of September 2026; Lp(a)HORIZON's cardiovascular primary endpoint was negative despite biomarker lowering. Intensify everything modifiable and screen the family.</div>`;
      $('#rc-out', root).innerHTML = `<div class="tablewrap"><table><thead><tr><th>Guideline</th><th>Category</th><th>LDL-C goal</th><th>Risk tool</th></tr></thead><tbody>` +
        rows.map(([g, v, t]) => `<tr><td><strong>${g}</strong></td><td>${v[0]}</td><td><strong>${v[1]}</strong></td><td class="muted small">${t}</td></tr>`).join('') +
        `</tbody></table></div>` + extra;
    };
    $$('#rc-opts input', root).forEach(el => el.addEventListener('change', calc));
    calc();
  }
},

/* ---------------- MODULE 10: statin selector ---------------- */
'statin-select': {
  title: "Rational statin selection",
  tag: "Module 10",
  html: `
<p class="note" style="margin-top:0">Select the clinical constraints. The tool ranks agents and shows the interaction reasoning rather than hiding it.</p>
<div class="checkgrid" id="ss-opts">
  <label class="chk"><input type="checkbox" value="cyp3a4"><span><strong>On a CYP3A4 inhibitor</strong><span class="sub">Macrolide, azole, protease inhibitor, verapamil, diltiazem, amiodarone, ciclosporin</span></span></label>
  <label class="chk"><input type="checkbox" value="hiv"><span><strong>On antiretroviral therapy</strong><span class="sub">Ritonavir or cobicistat boosted</span></span></label>
  <label class="chk"><input type="checkbox" value="ckd"><span><strong>eGFR below 30</strong></span></label>
  <label class="chk"><input type="checkbox" value="liver"><span><strong>Chronic liver disease</strong></span></label>
  <label class="chk"><input type="checkbox" value="sams"><span><strong>Previous muscle symptoms</strong></span></label>
  <label class="chk"><input type="checkbox" value="highint"><span><strong>Needs 50% or greater LDL-C reduction</strong></span></label>
  <label class="chk"><input type="checkbox" value="poly"><span><strong>Significant polypharmacy</strong></span></label>
</div>
<div id="ss-out" style="margin-top:16px"></div>`,
  init(root) {
    const S = [
      { n: 'Rosuvastatin', cyp: false, hi: true, renal: 'cap 10 mg if eGFR under 30', note: 'Hydrophilic, minimal CYP, long half-life, dosed any time. High intensity at 20-40 mg.' },
      { n: 'Atorvastatin', cyp: '3A4', hi: true, renal: 'no adjustment', note: 'Lipophilic, CYP3A4 substrate. High intensity at 40-80 mg. No renal adjustment needed.' },
      { n: 'Pitavastatin', cyp: false, hi: false, renal: 'caution', note: 'Minimal CYP (glucuronidation). Excellent in HIV — REPRIEVE used it. Moderate intensity only.' },
      { n: 'Pravastatin', cyp: false, hi: false, renal: 'start low', note: 'Hydrophilic, non-CYP, short half-life so dose in the evening. Moderate intensity at best.' },
      { n: 'Simvastatin', cyp: '3A4', hi: false, renal: 'start 5 mg', note: 'CYP3A4 substrate and the most interaction-prone. Highest SLCO1B1-related myopathy risk at 80 mg.' },
      { n: 'Fluvastatin', cyp: '2C9', hi: false, renal: 'caution', note: 'CYP2C9. Rarely used.' },
      { n: 'Lovastatin', cyp: '3A4', hi: false, renal: 'caution', note: 'CYP3A4. Take with evening food.' }
    ];
    const calc = () => {
      const on = $$('#ss-opts input:checked', root).map(i => i.value);
      $$('#ss-opts .chk', root).forEach(l => l.classList.toggle('on', $('input', l).checked));
      const has = k => on.includes(k);
      const scored = S.map(s => {
        let score = 50, flags = [];
        if ((has('cyp3a4') || has('hiv')) && s.cyp === '3A4') { score -= 45; flags.push('CYP3A4 interaction — avoid'); }
        if (has('hiv') && (s.n === 'Pitavastatin' || s.n === 'Pravastatin')) { score += 25; flags.push('Preferred in HIV'); }
        if (has('poly') && !s.cyp) { score += 15; flags.push('Minimal CYP — good in polypharmacy'); }
        if (has('poly') && s.cyp) score -= 12;
        if (has('ckd') && s.n === 'Rosuvastatin') { score -= 8; flags.push('Cap at 10 mg'); }
        if (has('ckd') && s.n === 'Atorvastatin') { score += 15; flags.push('No renal dose adjustment'); }
        if (has('liver') && s.cyp === '3A4') score -= 15;
        if (has('sams')) { score -= 6; if (s.n === 'Rosuvastatin' || s.n === 'Atorvastatin') { score += 12; flags.push('Long half-life allows alternate-day or twice-weekly dosing'); } }
        if (has('highint')) { if (s.hi) { score += 30; flags.push('Can reach high intensity'); } else { score -= 35; flags.push('Cannot reach 50% reduction at any dose'); } }
        return { ...s, score, flags };
      }).sort((a, b) => b.score - a.score);
      const top = scored.filter(s => s.score > 20).slice(0, 3);
      const avoid = scored.filter(s => s.score <= 20);
      let h = `<h4 style="margin-top:0">Preferred</h4><div class="tablewrap"><table><thead><tr><th>Agent</th><th>Why</th><th>Renal</th></tr></thead><tbody>` +
        (top.length ? top.map(s => `<tr><td><strong>${s.n}</strong></td><td>${s.note}${s.flags.length ? '<br><span class="muted small">' + s.flags.join(' · ') + '</span>' : ''}</td><td class="small">${s.renal}</td></tr>`).join('')
          : `<tr><td colspan="3">No agent scores well against these constraints. Consider a non-statin strategy — see Module 11.</td></tr>`) +
        `</tbody></table></div>`;
      if (avoid.length) h += `<h4>Avoid or use with caution</h4><div class="tablewrap"><table><tbody>` +
        avoid.map(s => `<tr><td><strong>${s.n}</strong></td><td class="small">${s.flags.length ? s.flags.join(' · ') : s.note}</td></tr>`).join('') + `</tbody></table></div>`;
      if (has('sams')) h += `<div class="flag warn"><strong>Before accepting statin intolerance:</strong> check CK and TSH, dechallenge for 2-4 weeks, then rechallenge. Roughly 70-90% of patients labelled intolerant tolerate some regimen. Consider rosuvastatin 5-10 mg twice weekly or atorvastatin 10-20 mg on alternate days. See the SAMSON and StatinWISE evidence in Module 10.</div>`;
      $('#ss-out', root).innerHTML = h;
    };
    $$('#ss-opts input', root).forEach(el => el.addEventListener('change', calc));
    calc();
  }
},

/* ---------------- MODULE 11: combination builder ---------------- */
'combo-builder': {
  title: "Combination therapy builder",
  tag: "Module 11",
  html: `
<p class="note" style="margin-top:0">Reductions are applied multiplicatively to the residual LDL-C, which is how they actually combine. Costs are order-of-magnitude Indian generic estimates for teaching the affordability trade-off, not price quotations.</p>
<div class="fields">
  <div class="field"><label>Baseline untreated LDL-C</label><input type="number" id="cb-ldl" value="165"></div>
  <div class="field"><label>Target LDL-C</label><input type="number" id="cb-goal" value="55"></div>
</div>
<div class="checkgrid" id="cb-opts"></div>
<div class="out"><div class="out-grid" id="cb-out"></div><div id="cb-msg"></div></div>`,
  init(root) {
    const AGENTS = [
      { id: 'stat-mod', n: 'Moderate-intensity statin', r: 0.35, inr: 40, ev: 'Outcome proven', sub: 'e.g. atorvastatin 20 mg' },
      { id: 'stat-hi', n: 'High-intensity statin', r: 0.52, inr: 70, ev: 'Outcome proven', sub: 'atorvastatin 40-80 or rosuvastatin 20-40' },
      { id: 'eze', n: 'Ezetimibe 10 mg', r: 0.22, inr: 60, ev: 'Outcome proven (IMPROVE-IT)', sub: 'NPC1L1 inhibition' },
      { id: 'bemp', n: 'Bempedoic acid', r: 0.18, inr: 1800, ev: 'Outcome proven (CLEAR Outcomes)', sub: 'muscle-sparing by design' },
      { id: 'pcsk9', n: 'PCSK9 monoclonal antibody', r: 0.55, inr: 20000, ev: 'Outcome proven (FOURIER, ODYSSEY, VESALIUS-CV)', sub: 'subcutaneous 2-weekly or monthly' },
      { id: 'oral9', n: 'Enlicitide (oral PCSK9)', r: 0.57, inr: 18000, ev: 'LDL-C only — CORALreef Outcomes ongoing', sub: 'approved 16 July 2026' },
      { id: 'incl', n: 'Inclisiran', r: 0.50, inr: 15000, ev: 'LDL-C only — ORION-4 pending', sub: 'twice yearly' },
      { id: 'bas', n: 'Bile acid sequestrant', r: 0.18, inr: 900, ev: 'Historic (LRC-CPPT)', sub: 'raises triglycerides' }
    ];
    $('#cb-opts', root).innerHTML = AGENTS.map(a =>
      `<label class="chk"><input type="checkbox" data-cb="${a.id}"><span><strong>${a.n}</strong><span class="sub">${a.sub} · about ${a.r * 100}% · ${a.ev}</span></span></label>`).join('');
    const calc = () => {
      const base = num($('#cb-ldl', root)), goal = num($('#cb-goal', root));
      const sel = AGENTS.filter(a => $(`[data-cb="${a.id}"]`, root).checked);
      $$('#cb-opts .chk', root).forEach(l => l.classList.toggle('on', $('input', l).checked));
      let ldl = base, cost = 0;
      sel.forEach(a => { ldl *= (1 - a.r); cost += a.inr; });
      const pct = base ? Math.round((1 - ldl / base) * 100) : 0;
      $('#cb-out', root).innerHTML =
        `<div class="stat"><div class="k">Baseline</div><div class="v">${Math.round(base)}</div><div class="u">mg/dL</div></div>` +
        `<div class="stat ${ldl <= goal ? 'ok' : 'hi'}"><div class="k">Achieved</div><div class="v">${Math.round(ldl)}</div><div class="u">mg/dL</div></div>` +
        `<div class="stat"><div class="k">Total reduction</div><div class="v">${pct}</div><div class="u">%</div></div>` +
        `<div class="stat ${cost > 3000 ? 'hi' : 'ok'}"><div class="k">Approx. monthly cost</div><div class="v">${cost.toLocaleString('en-IN')}</div><div class="u">INR (generic est.)</div></div>`;
      const msgs = [];
      if (!sel.length) msgs.push('Select one or more agents.');
      else if (ldl <= goal) msgs.push(`<strong>Target reached.</strong> LDL-C ${Math.round(ldl)} against a goal of ${goal}.`);
      else msgs.push(`<strong>Short of target by ${Math.round(ldl - goal)} mg/dL.</strong> Add another mechanism rather than escalating a dose — recall the rule of 6.`);
      if (sel.filter(a => a.id.startsWith('stat')).length > 1) msgs.push('You have selected two statin intensities. Choose one.');
      if (sel.filter(a => ['pcsk9', 'oral9', 'incl'].includes(a.id)).length > 1) msgs.push('Combining two PCSK9-directed agents is not rational — they share a target.');
      const unproven = sel.filter(a => a.ev.startsWith('LDL-C only'));
      if (unproven.length) msgs.push(`<strong>Note the evidence status:</strong> ${unproven.map(a => a.n).join(' and ')} ${unproven.length > 1 ? 'have' : 'has'} LDL-C data but no completed cardiovascular outcomes trial. The 2026 ACC/AHA guideline says so explicitly of inclisiran. The CTT relationship predicts benefit; the surrogate-endpoint graveyard in Module 11 counsels waiting for the trial.`);
      if (cost > 3000) msgs.push(`<strong>Affordability check.</strong> At roughly Rs ${cost.toLocaleString('en-IN')} per month this regimen is out of reach for most Indian patients. What is the best achievable LDL-C under Rs 500? Try high-intensity statin plus ezetimibe — around 62% reduction for under Rs 150.`);
      $('#cb-msg', root).innerHTML = '<div class="flag warn">' + msgs.join('<br><br>') + '</div>';
    };
    $$('#cb-opts input,#cb-ldl,#cb-goal', root).forEach(el => el.addEventListener('input', calc));
    calc();
  }
},

/* ---------------- MODULE 13: guideline comparison ---------------- */
'guideline-compare': {
  title: "Four guidelines, side by side",
  tag: "Module 13 · flagship download",
  html: `
<div class="flag warn" style="margin-top:0"><strong>Verify every cell against the primary document before teaching from this table.</strong> It was compiled from society summaries and secondary sources, not from side-by-side reading of the four originals. It is the course's most-shared asset and therefore the one most in need of primary-source checking.</div>
<div class="tablewrap" style="margin-top:14px"><table>
<thead><tr><th></th><th>ACC/AHA 2026</th><th>ESC/EAS 2025</th><th>LAI CS-IV 2023</th><th>CSI 2024</th></tr></thead>
<tbody>
<tr><td><strong>Risk tool</strong></td><td>PREVENT-ASCVD, ages 30-79, 10- and 30-year</td><td>SCORE2 / SCORE2-OP, to age 89</td><td><strong>Lifetime risk</strong> emphasised over 10-year</td><td>Indian-context stratification</td></tr>
<tr><td><strong>Borderline / intermediate</strong></td><td>Below 100 mg/dL</td><td>Moderate risk: below 100 mg/dL</td><td>&mdash;</td><td>&mdash;</td></tr>
<tr><td><strong>High risk</strong></td><td>Below 70 mg/dL</td><td>Below 70 mg/dL</td><td>&mdash;</td><td>Below 70 mg/dL</td></tr>
<tr><td><strong>Very high risk</strong></td><td>Below 55 mg/dL</td><td>Below 55 mg/dL</td><td><strong>Below 50 mg/dL</strong></td><td><strong>Below 55, or non-HDL-C below 85</strong></td></tr>
<tr><td><strong>Extreme risk</strong></td><td>Not a formal category</td><td>Below 40 mg/dL for recurrent events (IIb, from 2019)</td><td><strong>Cat. A: below 50, optional 30 or below. Cat. B: 30 or below recommended</strong></td><td>&mdash;</td></tr>
<tr><td><strong>Lp(a)</strong></td><td>Measure at least once in adulthood</td><td>Once in a lifetime; threshold above 50 mg/dL or above 105 nmol/L</td><td>Recommended; high prevalence in Indians</td><td>Included as a target of interest</td></tr>
<tr><td><strong>Fasting?</strong></td><td>Non-fasting acceptable</td><td>Non-fasting acceptable</td><td>Non-fasting acceptable</td><td><strong>Non-fasting advocated</strong></td></tr>
<tr><td><strong>Upfront combination</strong></td><td>Nonstatins added when goal not met</td><td><strong>Fire to target; statin plus ezetimibe at ACS index hospitalisation (IIa, B)</strong></td><td>Encouraged to reach aggressive targets</td><td>Encouraged</td></tr>
<tr><td><strong>Bempedoic acid</strong></td><td>Among nonstatin options</td><td><strong>Newly included</strong></td><td>Referenced</td><td>Referenced</td></tr>
<tr><td><strong>Inclisiran</strong></td><td><strong>Noted: awaiting outcomes data</strong></td><td>Among LDL-lowering options</td><td>Referenced</td><td>Referenced</td></tr>
<tr><td><strong>Coronary calcium</strong></td><td>Men over 40, women over 45, borderline or intermediate; <strong>any CAC gives goal below 100</strong></td><td>Risk modifier</td><td><strong>CAC 300 or above gives extreme risk category A</strong></td><td>Referenced</td></tr>
<tr><td><strong>Icosapent ethyl</strong></td><td>Statin remains foundation for high TG</td><td><strong>IIa, B for TG 135-499 mg/dL despite statin</strong></td><td>Referenced</td><td>Referenced</td></tr>
<tr><td><strong>apoB</strong></td><td>For residual risk in CKM syndrome, T2D, high TG, known CVD at goal</td><td>Alternative target</td><td>Secondary target</td><td>Addressed explicitly</td></tr>
</tbody></table></div>
<div class="btnrow"><button class="btn ghost sm" onclick="window.print()">Print or save as PDF</button></div>`,
  init() {}
}

};
