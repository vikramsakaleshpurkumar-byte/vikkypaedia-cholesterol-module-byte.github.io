/* ==========================================================================
   APPLICATION — routing, tier filtering, quiz engine, progress, search
   No framework. No build step. No network calls.
   ========================================================================== */

(function () {
  'use strict';

  const MODS = window.MODULES;
  const C = window.COURSE;

  /* ---------------- persistence (degrades gracefully) ---------------- */
  const store = {
    get(k, d) { try { const v = localStorage.getItem('chol.' + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('chol.' + k, JSON.stringify(v)); } catch (e) { } }
  };

  let state = {
    tiers: store.get('tiers', [1, 2, 3]),
    done: store.get('done', {}),
    quiz: store.get('quiz', {}),
    theme: store.get('theme', 'light'),
    name: store.get('name', '')
  };

  const saveState = () => { store.set('tiers', state.tiers); store.set('done', state.done); store.set('quiz', state.quiz); };

  /* ---------------- helpers ---------------- */
  const el = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const tierOn = (t) => state.tiers.includes(t);
  const badge = (t) => `<span class="badge t${t}">${C.tiers[t].short}</span>`;
  const mod = (n) => MODS.find(m => m.id === n);

  function toast(msg) {
    let t = el('toast');
    if (!t) { t = document.createElement('div'); t.id = 'toast'; t.className = 'toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('on');
    clearTimeout(t._x); t._x = setTimeout(() => t.classList.remove('on'), 2600);
  }

  /* ---------------- progress ---------------- */
  function moduleQuizStats(id) {
    const m = mod(id); if (!m) return { total: 0, correct: 0 };
    const rel = m.quiz.filter(q => tierOn(q.tier));
    const rec = state.quiz[id] || {};
    let correct = 0;
    rel.forEach((q, i) => { const gi = m.quiz.indexOf(q); if (rec[gi] === true) correct++; });
    return { total: rel.length, correct };
  }

  function overallProgress() {
    const total = MODS.length;
    const done = MODS.filter(m => state.done[m.id]).length;
    return { done, total, pct: total ? Math.round(done / total * 100) : 0 };
  }

  function quizScore() {
    let t = 0, c = 0;
    MODS.forEach(m => {
      m.quiz.forEach((q, i) => {
        if (!tierOn(q.tier)) return;
        t++;
        if ((state.quiz[m.id] || {})[i] === true) c++;
      });
    });
    return { t, c, pct: t ? Math.round(c / t * 100) : 0 };
  }

  /* ---------------- sidebar ---------------- */
  function renderSidebar(activeId) {
    const p = overallProgress();
    let h = `<div class="sb-close"><span>Course contents</span><button id="sbCloseBtn" aria-label="Close menu">&times;</button></div>
    <div class="sb-search"><input type="search" id="sbSearch" placeholder="Search the course…" aria-label="Search the course" autocomplete="off"></div>
    <div class="sb-progress">
      <div class="pt">Your progress</div>
      <div class="bar"><i style="width:${p.pct}%"></i></div>
      <div class="pn">${p.done} of ${p.total} modules complete &middot; ${p.pct}%</div>
    </div>`;
    C.parts.forEach(part => {
      h += `<div class="sb-part">Part ${part.roman} &middot; ${esc(part.name)}</div>`;
      MODS.filter(m => m.part === part.n).forEach(m => {
        h += `<a class="sb-link${m.id === activeId ? ' active' : ''}${state.done[m.id] ? ' done' : ''}" href="#/module/${m.id}">
          <span class="sb-num">${state.done[m.id] ? '&#10003;' : m.id}</span><span>${esc(m.title)}</span></a>`;
      });
    });
    h += `<div class="sb-part">Assessment and reference</div>
      <a class="sb-link${activeId === 'capstone' ? ' active' : ''}" href="#/capstone"><span class="sb-num">C</span><span>Capstone case portfolio</span></a>
      <a class="sb-link${activeId === 'certificate' ? ' active' : ''}" href="#/certificate"><span class="sb-num">&#9733;</span><span>Certificate</span></a>
      <a class="sb-link${activeId === 'references' ? ' active' : ''}" href="#/references"><span class="sb-num">R</span><span>Reference library</span></a>
      <a class="sb-link${activeId === 'about' ? ' active' : ''}" href="#/about"><span class="sb-num">i</span><span>About and currency</span></a>
      <div class="sb-foot"><a class="btn ghost sm" href="#/">Course home</a></div>`;
    el('sidebar').innerHTML = h;

    const cb = el('sbCloseBtn');
    if (cb) cb.onclick = closeDrawer;

    // The drawer search shares the header search behaviour, but jumps straight
    // to the result rather than showing a dropdown inside a narrow drawer.
    const ss = el('sbSearch');
    if (ss) ss.oninput = () => {
      const q = ss.value.trim().toLowerCase();
      const list = el('sbSearchOut') || (() => {
        const d = document.createElement('div');
        d.id = 'sbSearchOut'; d.style.padding = '0 14px 6px';
        ss.parentElement.appendChild(d); return d;
      })();
      if (q.length < 2) { list.innerHTML = ''; return; }
      const terms = q.split(/\s+/);
      const hits = buildIndex().filter(r => terms.every(t => r.txt.includes(t))).slice(0, 8);
      list.innerHTML = hits.length
        ? hits.map(r => `<a class="sr-item" style="border-radius:6px;border-bottom:none" href="${r.u}"><b>${esc(r.s)}</b>${esc(r.t.length > 70 ? r.t.slice(0, 70) + '…' : r.t)}</a>`).join('')
        : `<div class="sr-empty" style="padding:8px 2px">No match.</div>`;
      list.querySelectorAll('a').forEach(a => a.onclick = () => { ss.value = ''; list.innerHTML = ''; closeDrawer(); });
    };
  }

  function closeDrawer() {
    el('sidebar').classList.remove('open');
    el('scrim').classList.remove('on');
  }

  /* ---------------- tier bar ---------------- */
  function renderTierBar() {
    const tb = el('tierbar');
    tb.innerHTML = `<span class="lbl">Depth</span>` +
      [1, 2, 3].map(t => `<button class="tier-toggle" data-tier="${t}" aria-pressed="${tierOn(t)}">
        <span class="dot"></span>${C.tiers[t].name}</button>`).join('') +
      `<span class="tier-hint">Toggle to filter every section, objective, reading and quiz item</span>`;
    tb.querySelectorAll('.tier-toggle').forEach(b => {
      b.onclick = () => {
        const t = +b.dataset.tier;
        if (tierOn(t)) { if (state.tiers.length === 1) { toast('At least one depth must stay on'); return; } state.tiers = state.tiers.filter(x => x !== t); }
        else state.tiers = [...state.tiers, t].sort();
        saveState(); renderTierBar(); route();
      };
    });
  }

  /* ---------------- module rendering ---------------- */
  function renderModule(id) {
    const m = mod(id);
    if (!m) return renderHome();
    const part = C.parts.find(p => p.n === m.part);
    const t = m.time, shown = [1, 2, 3].filter(tierOn);
    const mins = shown.reduce((s, x) => s + (t['t' + x] || 0), 0);

    let h = `<div class="wrap">
      <div class="mod-head">
        <div class="eyebrow">Part ${part.roman} &middot; ${esc(part.name)} &middot; Module ${m.id} of ${MODS.length}</div>
        <h1>${esc(m.title)}</h1>
        <p class="lede">${esc(m.tagline)}</p>
        <div class="mod-meta">
          <span class="pill">~${mins} min at current depth</span>
          <span class="pill">${m.quiz.filter(q => tierOn(q.tier)).length} quiz items</span>
          ${[1, 2, 3].filter(x => m.sections.some(s => s.tier === x)).map(x => badge(x)).join(' ')}
        </div>
      </div>

      <div class="hook"><div class="eyebrow">The hook</div><p>${esc(m.hook)}</p></div>

      <h2>Learning objectives</h2>
      <ul class="obj-list">${m.objectives.map(o =>
        `<li class="${tierOn(o.tier) ? '' : 'hide'}">${badge(o.tier)}<span>${esc(o.text)}</span></li>`).join('')}</ul>
    `;

    // on this page — jump list of the sections visible at the current depth
    const visSecs = m.sections
      .map((s, i) => ({ s, i }))
      .filter(x => x.s.h && tierOn(x.s.tier));
    if (visSecs.length > 2) {
      h += `<details class="otp"><summary>On this page &mdash; ${visSecs.length} sections</summary><ol>` +
        visSecs.map(x => `<li><a href="#/module/${m.id}" data-jump="sec-${m.id}-${x.i}"><span class="bd b${x.s.tier}">${C.tiers[x.s.tier].short}</span>${esc(x.s.h)}</a></li>`).join('') +
        `</ol></details>`;
    }

    // sections
    m.sections.forEach((s, si) => {
      if (s.tool) {
        const T = window.TOOLS[s.tool];
        if (!T) return;
        h += `<div class="tool" data-tool="${s.tool}">
          <div class="tool-head">${esc(T.title)}<span class="tag">${esc(T.tag)}</span></div>
          <div class="tool-body">${T.html}</div></div>`;
        return;
      }
      if (s.figure) {
        const F = window.FIGURES[s.figure];
        if (!F) return;
        h += `<figure class="figure">${F.svg}<figcaption>${esc(F.caption)}</figcaption></figure>`;
        return;
      }
      const open = s.tier === 1 ? ' open' : (tierOn(s.tier) ? ' open' : '');
      h += `<div id="sec-${m.id}-${si}" class="tierblock${tierOn(s.tier) ? '' : ' hide'}${open}" data-tier="${s.tier}" style="scroll-margin-top:110px">
        <div class="tb-head" role="button" tabindex="0">${badge(s.tier)}<span>${esc(s.h)}</span><span class="caret">&#9654;</span></div>
        <div class="tb-body">${s.html}</div></div>`;
    });

    // what we still don't know
    if (m.unknown) h += `<div class="unknown"><div class="eyebrow">What we still do not know</div><p>${esc(m.unknown)}</p></div>`;

    // quiz
    const qs = m.quiz.filter(q => tierOn(q.tier));
    if (qs.length) {
      h += `<h2>Check yourself</h2><p class="muted small">Every option carries an explanation, including the wrong ones. That is where most of the learning is.</p>`;
      m.quiz.forEach((q, i) => {
        h += `<div class="quiz${tierOn(q.tier) ? '' : ' hide'}" data-q="${i}" data-mod="${m.id}">
          <div class="q-meta">${badge(q.tier)}<span class="q-count">Question ${i + 1}</span></div>
          <p class="q-stem">${esc(q.q)}</p>
          <ul class="q-opts">${q.opts.map((o, j) =>
            `<li class="q-opt" data-opt="${j}"><span class="key">${'ABCD'[j]}</span><span>${esc(o)}</span></li>`).join('')}</ul>
          <div class="q-fb"></div></div>`;
      });
    }

    // readings
    const rs = m.readings.filter(r => tierOn(r.tier));
    if (rs.length) {
      h += `<h2>Curated reading</h2><ul class="readings">` +
        m.readings.map(r => `<li class="${tierOn(r.tier) ? '' : 'hide'}">${badge(r.tier)}<span>${r.url ? `<a href="${r.url}" target="_blank" rel="noopener">${esc(r.cite)}</a>` : esc(r.cite)}<span class="why">${esc(r.why)}</span></span></li>`).join('') +
        `</ul>`;
    }

    // complete + nav
    const isDone = !!state.done[m.id];
    h += `<div class="btnrow">
      <button class="btn${isDone ? ' ghost' : ' accent'}" id="doneBtn">${isDone ? '&#10003; Marked complete' : 'Mark module complete'}</button>
      <button class="btn ghost" onclick="window.print()">Print this module</button>
    </div>`;

    const prev = mod(m.id - 1), next = mod(m.id + 1);
    h += `<div class="nav-foot">
      ${prev ? `<a href="#/module/${prev.id}"><div class="dir">&larr; Previous</div><div class="ttl">${esc(prev.title)}</div></a>` : `<a href="#/" ><div class="dir">&larr; Back</div><div class="ttl">Course home</div></a>`}
      ${next ? `<a class="next" href="#/module/${next.id}"><div class="dir">Next &rarr;</div><div class="ttl">${esc(next.title)}</div></a>` : `<a class="next" href="#/capstone"><div class="dir">Next &rarr;</div><div class="ttl">Capstone case portfolio</div></a>`}
    </div></div>`;

    el('main').innerHTML = h;
    wireModule(m);
    renderSidebar(m.id);
  }

  function wireModule(m) {
    // "On this page" jump links — open the target block, then scroll to it
    document.querySelectorAll('[data-jump]').forEach(a => {
      a.onclick = (e) => {
        e.preventDefault();
        const target = document.getElementById(a.dataset.jump);
        if (!target) return;
        target.classList.add('open');
        const otp = a.closest('.otp'); if (otp) otp.open = false;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
    });

    // collapsible tier blocks
    document.querySelectorAll('.tb-head').forEach(hd => {
      const toggle = () => hd.parentElement.classList.toggle('open');
      hd.onclick = toggle;
      hd.onkeydown = (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } };
    });

    // quiz
    document.querySelectorAll('.quiz').forEach(box => {
      const qi = +box.dataset.q, mi = +box.dataset.mod, q = mod(mi).quiz[qi];
      const rec = state.quiz[mi] || {};
      const answered = rec[qi] !== undefined;
      const opts = box.querySelectorAll('.q-opt');
      const fb = box.querySelector('.q-fb');

      const reveal = (chosen) => {
        opts.forEach((o, j) => {
          o.classList.add('locked');
          if (j === q.a) o.classList.add('correct');
          else if (j === chosen) o.classList.add('wrong');
        });
        const ok = chosen === q.a;
        fb.className = 'q-fb on ' + (ok ? 'good' : 'bad');
        fb.innerHTML = `<strong>${ok ? 'Correct.' : 'Not quite.'}</strong> ${esc(q.why[chosen])}` +
          (ok ? '' : `<br><br><strong>Why ${'ABCD'[q.a]} is right:</strong> ${esc(q.why[q.a])}`);
      };

      if (answered) {
        // we only stored correctness, so re-reveal against the correct answer
        reveal(rec[qi] === true ? q.a : -1);
        if (rec[qi] !== true) { fb.className = 'q-fb on bad'; fb.innerHTML = `<strong>Previously answered incorrectly.</strong> ${esc(q.why[q.a])}`; }
      }

      opts.forEach((o, j) => {
        o.onclick = () => {
          if (o.classList.contains('locked')) return;
          reveal(j);
          state.quiz[mi] = state.quiz[mi] || {};
          state.quiz[mi][qi] = (j === q.a);
          saveState();
        };
      });
    });

    // tools
    document.querySelectorAll('.tool').forEach(node => {
      const T = window.TOOLS[node.dataset.tool];
      if (T && T.init) { try { T.init(node); } catch (e) { console.warn('tool init failed', node.dataset.tool, e); } }
    });

    // complete
    const btn = el('doneBtn');
    if (btn) btn.onclick = () => {
      state.done[m.id] = !state.done[m.id];
      saveState();
      toast(state.done[m.id] ? 'Module marked complete' : 'Marked incomplete');
      renderModule(m.id);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };
  }

  /* ---------------- home ---------------- */
  function renderHome() {
    const p = overallProgress();
    let h = `<div class="hero">
      <div class="kicker">Self-paced &middot; ${C.currentAsOf} &middot; Free and open</div>
      <h1>${esc(C.title)}</h1>
      <p class="sub">${esc(C.subtitle)}</p>
      <div class="btnrow" style="justify-content:center">
        <a class="btn accent" href="#/module/1">${p.done ? 'Continue the course' : 'Start Module 1'}</a>
        <a class="btn ghost" href="#/about" style="color:#fff;border-color:rgba(255,255,255,.4)">How the tiers work</a>
      </div>
      <div class="hero-stats">
        <div class="hs"><div class="n">14</div><div class="l">Modules</div></div>
        <div class="hs"><div class="n">3</div><div class="l">Depth tiers</div></div>
        <div class="hs"><div class="n">10</div><div class="l">Interactive tools</div></div>
        <div class="hs"><div class="n">${MODS.reduce((s, m) => s + m.quiz.length, 0)}</div><div class="l">Quiz items</div></div>
        <div class="hs"><div class="n">8</div><div class="l">Capstone cases</div></div>
      </div>
    </div>
    <div class="wrap wrap-wide">`;

    h += `<div class="card"><div class="eyebrow">How this course is different</div>
      <p style="margin-bottom:10px">Every screen is tagged <strong>Must know</strong>, <strong>Nice to know</strong> or <strong>Good to know</strong>. Turn the tiers on and off in the bar above and the entire course reshapes itself &mdash; objectives, sections, readings and quiz items all filter together.</p>
      <div class="grid g3" style="margin-top:14px">
        ${[1, 2, 3].map(t => `<div style="padding:12px 14px;border:1.5px solid var(--t${t}-br);background:var(--t${t}-bg);border-radius:8px">
          ${badge(t)}<div style="font-family:var(--sans);font-weight:700;margin:6px 0 4px">${C.tiers[t].name}</div>
          <div class="small" style="color:var(--ink-2)">${esc(C.tiers[t].desc)}</div></div>`).join('')}
      </div>
      <p class="note" style="margin-top:14px">Tier 1 alone is a complete twelve-hour foundation course with its own certificate. Nothing is orphaned when you filter.</p>
    </div>`;

    if (p.done) h += `<div class="card"><div class="eyebrow">Your progress</div>
      <div class="bar" style="margin:8px 0"><i style="width:${p.pct}%"></i></div>
      <p class="small muted" style="margin:0">${p.done} of ${p.total} modules complete. Quiz accuracy at current depth: ${quizScore().pct}%.</p></div>`;

    C.parts.forEach(part => {
      h += `<div class="part-hd">Part ${part.roman} &mdash; ${esc(part.name)} <span style="color:var(--ink-3);font-weight:500;text-transform:none;letter-spacing:0"> &middot; ${esc(part.blurb)}</span></div>
        <div class="grid g3">`;
      MODS.filter(m => m.part === part.n).forEach(m => {
        h += `<a class="modcard${state.done[m.id] ? ' done' : ''}" href="#/module/${m.id}">
          <span class="tick">&#10003;</span>
          <div class="n">Module ${m.id}</div>
          <div class="t">${esc(m.title)}</div>
          <div class="d">${esc(m.tagline)}</div></a>`;
      });
      h += `</div>`;
    });

    h += `<div class="part-hd">Assessment and reference</div><div class="grid g3">
      <a class="modcard" href="#/capstone"><div class="n">Capstone</div><div class="t">Integrated case portfolio</div><div class="d">Eight tier-gated cases, each requiring a written plan with an explicit guideline citation.</div></a>
      <a class="modcard" href="#/certificate"><div class="n">Certificate</div><div class="t">Foundation, Practitioner, Advanced</div><div class="d">Three stackable certificates from one course, gated by depth and quiz accuracy.</div></a>
      <a class="modcard" href="#/references"><div class="n">Library</div><div class="t">Core reference list</div><div class="d">Guidelines, foundational science, landmark trials and the India-specific evidence base.</div></a>
    </div>`;

    h += `<div class="card" style="margin-top:30px"><div class="eyebrow">Evidence currency</div>
      <p class="small" style="margin-bottom:0">${esc(C.evidenceNote)} A published maintenance schedule with named trigger events is in <a href="#/about">About and currency</a>. Lipidology moves faster than course production cycles, so this course states its expiry conditions openly.</p></div>`;

    h += `</div>`;
    el('main').innerHTML = h;
    renderSidebar(null);
  }

  /* ---------------- capstone ---------------- */
  function renderCapstone() {
    let h = `<div class="wrap"><div class="mod-head">
      <div class="eyebrow">Assessment</div><h1>Capstone case portfolio</h1>
      <p class="lede">Eight cases, tier-gated. Each requires a written plan with an explicit guideline citation.</p>
      <div class="mod-meta"><span class="pill">3-4 hours</span><span class="pill">Peer-reviewable</span></div>
    </div>
    <div class="keybox"><div class="eyebrow">How to use these</div>
      <p style="margin-bottom:0">Write your answer before revealing the teaching points. The value is in committing to a plan and then discovering what you left out &mdash; not in reading the answer. Tier 1 learners complete cases 1-3; Tier 2 adds 4-6; Tier 3 completes all eight.</p></div>`;

    window.CAPSTONE.forEach(c => {
      const on = tierOn(c.tier);
      h += `<div class="card${on ? '' : ' hide'}">
        <div class="q-meta">${badge(c.tier)}<span class="q-count">Case ${c.n}</span></div>
        <h3 style="margin-top:4px">${esc(c.title)}</h3>
        <p>${esc(c.stem)}</p>
        <h4>Your task</h4>
        <ol>${c.asks.map(a => `<li>${esc(a)}</li>`).join('')}</ol>
        <details style="margin-top:10px"><summary style="cursor:pointer;font-family:var(--sans);font-size:13.5px;font-weight:600;color:var(--navy-3)">What this case is testing</summary>
        <p class="note" style="margin-top:8px">${esc(c.teaches)}</p></details></div>`;
    });

    h += `<div class="nav-foot"><a href="#/module/14"><div class="dir">&larr; Previous</div><div class="ttl">Module 14</div></a>
      <a class="next" href="#/certificate"><div class="dir">Next &rarr;</div><div class="ttl">Certificate</div></a></div></div>`;
    el('main').innerHTML = h;
    renderSidebar('capstone');
  }

  /* ---------------- certificate ---------------- */
  function renderCertificate() {
    const p = overallProgress(), q = quizScore();
    const active = C.certificates.filter(c => c.tiers.every(t => tierOn(t)) && c.tiers.length === state.tiers.length)[0]
      || C.certificates.find(c => c.tiers.length === state.tiers.length) || C.certificates[0];
    const eligible = p.done === p.total && q.pct >= active.pass;

    let h = `<div class="wrap"><div class="mod-head"><div class="eyebrow">Completion</div>
      <h1>Certificate</h1><p class="lede">Three stackable certificates from one course. Which one you are working toward depends on the depth tiers you have switched on.</p></div>

    <div class="tablewrap"><table><thead><tr><th>Certificate</th><th>Depth</th><th>Pass mark</th><th>For</th></tr></thead><tbody>
      ${C.certificates.map(c => `<tr${c.id === active.id ? ' style="background:var(--accent-soft)"' : ''}>
        <td><strong>${esc(c.name)}</strong></td><td>${c.tiers.map(t => badge(t)).join(' ')}</td>
        <td class="num">${c.pass}%</td><td class="small">${esc(c.desc)}</td></tr>`).join('')}
    </tbody></table></div>

    <div class="card"><div class="eyebrow">Where you stand</div>
      <div class="out-grid" style="margin-top:10px">
        <div class="stat ${p.done === p.total ? 'ok' : ''}"><div class="k">Modules complete</div><div class="v">${p.done}/${p.total}</div></div>
        <div class="stat ${q.pct >= active.pass ? 'ok' : 'hi'}"><div class="k">Quiz accuracy</div><div class="v">${q.pct}</div><div class="u">% of ${q.t} items</div></div>
        <div class="stat"><div class="k">Target</div><div class="v" style="font-size:15px">${esc(active.name)}</div><div class="u">pass ${active.pass}%</div></div>
      </div>
      ${eligible
        ? `<div class="flag ok" style="margin-top:12px"><strong>Eligible.</strong> Enter your name below and print.</div>`
        : `<div class="flag warn" style="margin-top:12px">Complete all ${p.total} modules and reach ${active.pass}% quiz accuracy at this depth to become eligible. You may re-answer any question at any time.</div>`}
    </div>

    <div class="field" style="max-width:420px"><label>Name to appear on the certificate</label>
      <input type="text" id="certName" value="${esc(state.name)}" placeholder="Your full name"></div>

    <div class="cert" id="certBox">
      <div class="ct">Certificate of Completion</div>
      <h2>${esc(C.title)}</h2>
      <div style="font-family:var(--sans);font-size:13px;color:#6a7280">${esc(active.name)}</div>
      <div class="nm" id="certNameOut">${esc(state.name) || '&nbsp;'}</div>
      <div style="font-size:14px;color:#3d454f">has completed ${p.done} of ${p.total} modules at ${active.tiers.map(t => C.tiers[t].name).join(', ')} depth,<br>with a quiz accuracy of ${q.pct}% across ${q.t} assessed items.</div>
      <div class="dt">Issued ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} &middot; Course version ${C.version} &middot; Evidence current to ${esc(C.currentAsOf)}</div>
    </div>

    <div class="btnrow"><button class="btn" onclick="window.print()">Print or save as PDF</button>
      <button class="btn ghost" id="resetBtn">Reset all progress</button></div>

    <p class="note">This certificate is generated locally in your browser and is not verified by any awarding body. If you host this course for a cohort and need verifiable credentials, see the deployment notes in the README.</p>
    </div>`;

    el('main').innerHTML = h;
    const inp = el('certName');
    inp.oninput = () => { state.name = inp.value; store.set('name', state.name); el('certNameOut').innerHTML = esc(state.name) || '&nbsp;'; };
    el('resetBtn').onclick = () => {
      if (!confirm('Clear all progress, quiz answers and your name from this browser?')) return;
      state.done = {}; state.quiz = {}; state.name = '';
      saveState(); store.set('name', '');
      toast('Progress cleared'); renderCertificate();
    };
    renderSidebar('certificate');
  }

  /* ---------------- references ---------------- */
  function renderReferences() {
    let h = `<div class="wrap"><div class="mod-head"><div class="eyebrow">Reference</div>
      <h1>Core reference library</h1><p class="lede">Every source underpinning this course, grouped by function. Links open in a new tab.</p></div>`;
    window.REFERENCES.forEach(g => {
      h += `<h2>${esc(g.group)}</h2><ul class="readings">` +
        g.items.map(i => `<li><span>${i.url ? `<a href="${i.url}" target="_blank" rel="noopener">${esc(i.cite)}</a>` : esc(i.cite)}</span></li>`).join('') + `</ul>`;
    });
    h += `<div class="nav-foot"><a href="#/"><div class="dir">&larr; Back</div><div class="ttl">Course home</div></a>
      <a class="next" href="#/about"><div class="dir">Next &rarr;</div><div class="ttl">About and currency</div></a></div></div>`;
    el('main').innerHTML = h;
    renderSidebar('references');
  }

  /* ---------------- about ---------------- */
  function renderAbout() {
    const V = window.VERIFY_NOTES;
    let h = `<div class="wrap"><div class="mod-head"><div class="eyebrow">About</div>
      <h1>About this course, and when it expires</h1>
      <p class="lede">Lipidology moves faster than course production cycles. This page states openly what has been verified, what is pending, and what will make this content obsolete.</p></div>

    <h2>The tier system</h2>
    <p>Every objective, section, reading and quiz item carries one of three tags. Toggle them in the bar at the top of any page.</p>
    <div class="grid g3">${[1, 2, 3].map(t => `<div style="padding:14px;border:1.5px solid var(--t${t}-br);background:var(--t${t}-bg);border-radius:8px">
      ${badge(t)}<div style="font-family:var(--sans);font-weight:700;margin:7px 0 5px">${C.tiers[t].name}</div>
      <div class="small" style="color:var(--ink-2)">${esc(C.tiers[t].desc)}</div></div>`).join('')}</div>

    <h2>Currency: named trigger events</h2>
    <p>Each of these will require specific modules to be revised. Check status before delivering the affected module.</p>
    <div class="tablewrap"><table><thead><tr><th>Trigger</th><th>Status at ${esc(C.currentAsOf)}</th><th>Modules affected</th></tr></thead><tbody>
      <tr><td><strong>Lp(a)HORIZON (pelacarsen)</strong></td><td>Guided H1 2026; no published result located. <strong>Verify.</strong></td><td>7, 12, 13</td></tr>
      <tr><td><strong>OCEAN(a)-Outcomes (olpasiran)</strong></td><td>Completion expected Q2 2026</td><td>12</td></tr>
      <tr><td><strong>PREVAIL (obicetrapib)</strong></td><td>Completion expected late 2026</td><td>11, 12</td></tr>
      <tr><td><strong>ORION-4 (inclisiran)</strong></td><td>Completing 2026</td><td>11</td></tr>
      <tr><td><strong>VICTORION-2P</strong></td><td>Expected 2027</td><td>11</td></tr>
      <tr><td><strong>CORALreef Outcomes (enlicitide)</strong></td><td>Ongoing, over 14,500 enrolled</td><td>11</td></tr>
      <tr><td><strong>HERMES / ARTEMIS (ziltivekimab)</strong></td><td>Topline H1 2027</td><td>6, 12</td></tr>
      <tr><td><strong>Next ACC/AHA or ESC/EAS update</strong></td><td>The 2026 guideline's own editorial anticipates revision toward a single LDL-C below 55 pathway for all ASCVD</td><td>9, 10, 11, 14</td></tr>
      <tr><td><strong>Next LAI / CSI update</strong></td><td>LAI CS-IV is 2023; CSI is 2024</td><td>13</td></tr>
    </tbody></table></div>

    <h2>What was verified</h2>
    <ul class="small">${V.verified.map(v => `<li>${esc(v)}</li>`).join('')}</ul>

    <h2>What is unresolved</h2>
    <div class="flag warn">${V.pending.map(v => esc(v)).join('<br><br>')}</div>

    <h2>A note on sources</h2>
    <div class="unknown"><p style="font-style:normal">${esc(V.hazard)}</p></div>

    <h2>Licence and reuse</h2>
    <p>Figures and reference cards are intended for reuse in teaching under CC BY-NC attribution. If you adapt this course for another population, Module 13 is the template: substitute your own prevalence data, phenotype, guideline and drug prices, and the reasoning transfers intact.</p>

    <div class="nav-foot"><a href="#/references"><div class="dir">&larr; Previous</div><div class="ttl">Reference library</div></a>
      <a class="next" href="#/"><div class="dir">Next &rarr;</div><div class="ttl">Course home</div></a></div></div>`;
    el('main').innerHTML = h;
    renderSidebar('about');
  }

  /* ---------------- search ---------------- */
  let INDEX = null;
  function buildIndex() {
    if (INDEX) return INDEX;
    INDEX = [];
    MODS.forEach(m => {
      INDEX.push({ t: m.title, s: 'Module ' + m.id, u: `#/module/${m.id}`, txt: (m.title + ' ' + m.tagline + ' ' + m.hook).toLowerCase() });
      m.sections.forEach(sec => {
        if (!sec.h) return;
        INDEX.push({ t: sec.h, s: `Module ${m.id} · ${C.tiers[sec.tier].short}`, u: `#/module/${m.id}`, txt: (sec.h + ' ' + sec.html.replace(/<[^>]+>/g, ' ')).toLowerCase() });
      });
      m.quiz.forEach((q, i) => INDEX.push({ t: q.q, s: `Module ${m.id} · quiz`, u: `#/module/${m.id}`, txt: q.q.toLowerCase() }));
    });
    window.CAPSTONE.forEach(c => INDEX.push({ t: c.title, s: `Capstone case ${c.n}`, u: '#/capstone', txt: (c.title + ' ' + c.stem).toLowerCase() }));
    return INDEX;
  }

  function wireSearch() {
    const inp = el('search'), box = el('searchResults');
    if (!inp) return;
    const run = () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 2) { box.classList.remove('on'); return; }
      const terms = q.split(/\s+/);
      const hits = buildIndex().filter(r => terms.every(t => r.txt.includes(t))).slice(0, 14);
      box.innerHTML = hits.length
        ? hits.map(r => `<a class="sr-item" href="${r.u}"><b>${esc(r.s)}</b>${esc(r.t.length > 110 ? r.t.slice(0, 110) + '…' : r.t)}</a>`).join('')
        : `<div class="sr-empty">No match for “${esc(inp.value)}”.</div>`;
      box.classList.add('on');
    };
    inp.oninput = run;
    inp.onfocus = run;
    document.addEventListener('click', e => { if (!e.target.closest('.hdr-search')) box.classList.remove('on'); });
    box.addEventListener('click', e => { if (e.target.closest('.sr-item')) { box.classList.remove('on'); inp.value = ''; } });
  }

  /* ---------------- after every render ---------------- */
  function afterRender() {
    // Hide the "swipe" hint on tables that already fit
    document.querySelectorAll('.tablewrap').forEach(w => {
      w.classList.toggle('no-scroll', w.scrollWidth <= w.clientWidth + 2);
    });
  }

  /* ---------------- router ---------------- */
  function route() {
    const h = location.hash || '#/';
    const m = h.match(/^#\/module\/(\d+)/);
    window.scrollTo(0, 0);
    closeDrawer();
    if (m) renderModule(+m[1]);
    else if (h.startsWith('#/capstone')) renderCapstone();
    else if (h.startsWith('#/certificate')) renderCertificate();
    else if (h.startsWith('#/references')) renderReferences();
    else if (h.startsWith('#/about')) renderAbout();
    else renderHome();
    // Layout must settle before we can measure table overflow
    requestAnimationFrame(afterRender);
  }

  /* ---------------- PWA: install to home screen, study offline ----------------
     Service workers require HTTPS (GitHub Pages qualifies) or localhost.
     On file:// this whole block quietly does nothing, which is correct.       */
  function initPWA() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('sw.js').catch(e => console.warn('SW registration failed', e));
    }

    // Android / desktop Chrome fire this when the site is installable.
    // iOS Safari does not — hence the manual instructions in the README.
    let deferred = null;
    const bar = el('installBar');
    if (!bar) return;
    if (store.get('installDismissed', false)) return;

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferred = e;
      bar.classList.add('show');
    });

    el('installGo').onclick = async () => {
      bar.classList.remove('show');
      if (!deferred) return;
      deferred.prompt();
      await deferred.userChoice;
      deferred = null;
    };
    el('installNo').onclick = () => {
      bar.classList.remove('show');
      store.set('installDismissed', true);
    };
    window.addEventListener('appinstalled', () => {
      bar.classList.remove('show');
      store.set('installDismissed', true);
      toast('Installed. The course now works offline.');
    });
  }

  /* ---------------- boot ---------------- */
  function boot() {
    document.documentElement.setAttribute('data-theme', state.theme);
    el('themeBtn').onclick = () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      store.set('theme', state.theme);
      document.documentElement.setAttribute('data-theme', state.theme);
      el('themeBtn').innerHTML = state.theme === 'dark' ? '&#9788;' : '&#9789;';
    };
    el('themeBtn').innerHTML = state.theme === 'dark' ? '&#9788;' : '&#9789;';

    el('menuBtn').onclick = () => { el('sidebar').classList.toggle('open'); el('scrim').classList.toggle('on'); };
    el('scrim').onclick = closeDrawer;

    // Back to top — appears once the learner is well down a long module
    const fab = el('topBtn');
    fab.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const onScroll = () => fab.classList.toggle('show', window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    window.addEventListener('resize', () => afterRender(), { passive: true });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

    renderTierBar();
    wireSearch();
    initPWA();
    window.addEventListener('hashchange', route);
    route();

    // keyboard: left/right arrows navigate modules
    document.addEventListener('keydown', e => {
      if (e.target && e.target.matches && e.target.matches('input,textarea,select')) return;
      const m = (location.hash || '').match(/^#\/module\/(\d+)/);
      if (!m) return;
      const id = +m[1];
      if (e.key === 'ArrowLeft' && mod(id - 1)) location.hash = `#/module/${id - 1}`;
      if (e.key === 'ArrowRight' && mod(id + 1)) location.hash = `#/module/${id + 1}`;
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();
