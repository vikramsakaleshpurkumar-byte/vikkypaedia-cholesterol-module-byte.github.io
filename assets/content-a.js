/* ==========================================================================
   COURSE CONTENT — PART A (Modules 1-6)
   Data model:
     { id, part, title, tagline, hook, time:{t1,t2,t3},
       objectives:[{tier, text}],
       sections:[{tier, h, html} | {tool:'id'} | {figure:'id'}],
       unknown, readings:[{tier,cite,why,url}],
       quiz:[{tier, q, opts:[], a:index, why:[]}] }
   ========================================================================== */

window.MODULES = [

/* ===================== MODULE 1 ===================== */
{
  id: 1, part: 1,
  title: "What Cholesterol Actually Is, and Why You Would Die Without It",
  tagline: "The sterol nucleus, five essential jobs, and the framing sentence for the whole course.",
  hook: "A patient asks, \"Doctor, can we just get my cholesterol to zero?\" Answer the question properly.",
  time: { t1: 40, t2: 25, t3: 20 },
  objectives: [
    { tier: 1, text: "Describe the sterol nucleus and explain why cholesterol cannot travel free in plasma." },
    { tier: 1, text: "List the five essential physiological roles of cholesterol." },
    { tier: 1, text: "Distinguish cholesterol the molecule from lipoproteins the vehicles." },
    { tier: 2, text: "Explain how the rigid fused-ring structure produces the membrane condensing effect." },
    { tier: 2, text: "Describe free versus esterified cholesterol and the role of ACAT and LCAT." },
    { tier: 3, text: "Discuss cholesterol in Hedgehog signalling and the consequences of synthesis defects." },
    { tier: 3, text: "Explain why the brain synthesises its own cholesterol and what that implies for statin safety." }
  ],
  sections: [
    { tier: 1, h: "The molecule", html: `
<p>Cholesterol is a <strong>27-carbon sterol</strong>: four fused hydrocarbon rings (the cyclopentanoperhydrophenanthrene nucleus), an eight-carbon branched side chain at C17, and a single hydroxyl group at C3.</p>
<p>That lone hydroxyl is the only polar feature on an otherwise thoroughly greasy molecule. Cholesterol is therefore <em>amphipathic in principle and hydrophobic in practice</em>. It will sit happily in a membrane with its hydroxyl poking into water and its rings buried in the lipid interior. It will not dissolve in blood.</p>
<div class="keybox">
  <div class="eyebrow">The engineering problem</div>
  <p>Blood is water. Cholesterol is oil. Every lipoprotein, every apolipoprotein, every receptor and transporter you are about to learn exists to solve that one incompatibility. Keep this in mind and Module 4 will feel inevitable rather than arbitrary.</p>
</div>` },
    { tier: 1, h: "Five jobs you cannot do without", html: `
<div class="tablewrap"><table>
<thead><tr><th>Role</th><th>What happens there</th></tr></thead>
<tbody>
<tr><td><strong>1. Membrane structure</strong></td><td>Up to ~30-40% of plasma membrane lipid. Controls fluidity, thickness and permeability.</td></tr>
<tr><td><strong>2. Steroid hormones</strong></td><td>Sole precursor for glucocorticoids, mineralocorticoids, androgens, oestrogens and progestogens.</td></tr>
<tr><td><strong>3. Bile acids</strong></td><td>The only major route by which the body disposes of cholesterol. Also enables fat absorption.</td></tr>
<tr><td><strong>4. Vitamin D</strong></td><td>7-dehydrocholesterol in skin plus UVB gives cholecalciferol.</td></tr>
<tr><td><strong>5. Myelin and neural membrane</strong></td><td>The brain is ~2% of body weight but holds ~20-25% of body cholesterol.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The framing sentence of this entire course</div>
  <p><strong>Cholesterol is not a poison. The problem is not that it exists, but <em>where</em> it accumulates, <em>in what particle</em>, and <em>for how long</em>.</strong></p>
  <p class="small" style="margin-top:8px">So the honest answer to the patient is: we cannot and must not get your cholesterol to zero. We are going to lower one specific carrier particle, and we are going to keep it low for decades, because the damage is cumulative.</p>
</div>` },
    { figure: 'cholesterol-roles' },
    { tier: 2, h: "Free versus esterified: the storage trick", html: `
<p>Free (unesterified) cholesterol is membrane-active and, in excess, cytotoxic. Cells therefore neutralise surplus by esterifying the C3 hydroxyl with a fatty acid, producing a <strong>cholesteryl ester</strong> — now entirely non-polar, and stashable in a lipid droplet or a lipoprotein core.</p>
<ul>
<li><strong>ACAT-1 / ACAT-2</strong> (acyl-CoA:cholesterol acyltransferase) esterify cholesterol <em>inside</em> cells. ACAT-2 in enterocytes and hepatocytes loads cholesteryl ester into nascent lipoproteins.</li>
<li><strong>LCAT</strong> (lecithin:cholesterol acyltransferase) esterifies cholesterol <em>in plasma</em>, on the surface of HDL, activated by apoA-I. This is what converts a flat discoidal preβ-HDL into a spherical mature particle — the engine of reverse cholesterol transport.</li>
</ul>
<p>You will meet both again: ACAT-2 in Module 3, LCAT in Module 4.</p>` },
    { tier: 2, h: "The membrane condensing effect and lipid rafts", html: `
<p>Cholesterol's fused ring system is planar and rigid. Inserted between phospholipid acyl chains it does two apparently contradictory things at once:</p>
<ul>
<li><strong>Above the phase-transition temperature</strong> it restricts acyl-chain motion, <em>reducing</em> fluidity and increasing packing density (the condensing effect).</li>
<li><strong>Below it</strong> it prevents tight crystalline packing, <em>increasing</em> fluidity.</li>
</ul>
<p>Net result: cholesterol is a <strong>fluidity buffer</strong>, holding the membrane in a liquid-ordered state across a range of temperatures.</p>
<p><strong>Lipid rafts</strong> are cholesterol- and sphingolipid-rich microdomains that concentrate signalling proteins — receptor tyrosine kinases, GPI-anchored proteins, caveolins. Depleting membrane cholesterol disperses rafts and blunts signalling. This is the mechanistic seed of the entire "statin pleiotropy" literature you will critique in Module 10.</p>` },
    { tier: 2, h: "Plasma cholesterol is not tissue cholesterol", html: `
<p>A point that trips up learners at every level. Cellular cholesterol content is homeostatically defended within narrow limits by the SREBP-2 system (Module 2). Plasma cholesterol concentration reflects the amount in <em>transit</em>, in particles, in the extracellular compartment.</p>
<p>Driving plasma LDL-C to 20 mg/dL with a PCSK9 inhibitor does <strong>not</strong> strip cholesterol out of adrenal cells, gonads or neurons. Those tissues have three independent supply routes and a synthesis pathway of their own. This is the physiological reason the very-low-LDL safety data have been reassuring, and it is far more persuasive to a worried patient than simply quoting a trial.</p>` },
    { tier: 3, h: "Cholesterol as a signalling molecule: Hedgehog", html: `
<p>Sonic hedgehog undergoes autoproteolytic cleavage and <strong>covalent attachment of cholesterol to the C-terminus of its N-terminal signalling domain</strong>. The cholesterol moiety governs the range and gradient of Hh diffusion during development. Smoothened, the downstream transducer, is itself regulated by sterols.</p>
<p>This is not a curiosity. It explains why disorders of cholesterol <em>synthesis</em> produce structural malformation, while disorders of cholesterol <em>transport</em> produce vascular disease.</p>` },
    { tier: 3, h: "Smith-Lemli-Opitz syndrome: the natural experiment", html: `
<p>Autosomal recessive deficiency of <strong>7-dehydrocholesterol reductase (DHCR7)</strong>, the final enzyme of the Kandutsch-Russell pathway. Substrate 7-DHC accumulates; cholesterol is low.</p>
<p>Phenotype: microcephaly, intellectual disability, characteristic facies, 2-3 toe syndactyly, cleft palate, genital anomalies, photosensitivity. Severity correlates with residual enzyme activity.</p>
<p>SLOS is the cleanest available proof that cholesterol is developmentally essential — and, incidentally, the reason statins are absolutely contraindicated in pregnancy is far more than theoretical caution.</p>
<p>Related post-squalene defects worth knowing by name: <em>desmosterolosis</em> (DHCR24), <em>lathosterolosis</em> (SC5D), <em>CHILD syndrome</em> and <em>conradi-hunermann</em> (NSDHL, EBP).</p>` },
    { tier: 3, h: "The brain makes its own", html: `
<p>The blood-brain barrier is impermeable to plasma lipoproteins. Essentially all CNS cholesterol is synthesised <em>in situ</em>, predominantly by astrocytes, and delivered to neurons on apoE-containing particles. Turnover is extremely slow — myelin cholesterol has a half-life measured in years.</p>
<p>Elimination occurs by conversion to <strong>24S-hydroxycholesterol</strong> (CYP46A1), which can cross the barrier and is cleared hepatically. Plasma 24S-OHC is therefore a biomarker of brain cholesterol turnover.</p>
<p><strong>Clinical payoff:</strong> this anatomy is the strongest mechanistic argument that systemic LDL lowering should not deplete brain cholesterol — and it aligns with the absence of a consistent cognitive signal in the large outcome trials and their open-label extensions. Teach the anatomy, then the data. Students believe mechanisms.</p>
<p class="muted small">Note the counterpoint honestly: desmosterol and other sterol intermediates are used as research biomarkers, and lipophilic statins do cross into CNS tissue to a limited degree. The argument is strong, not absolute.</p>` }
  ],
  unknown: "Whether the brain's independent cholesterol pool is genuinely untouched across a 30-year exposure to very low plasma LDL-C. The trials are years long; the exposure we now propose is decades long.",
  readings: [
    { tier: 1, cite: "Any standard biochemistry text, sterol chapter", why: "Fix the structure in your head once, visually.", url: "" },
    { tier: 3, cite: "Dietschy JM, Turley SD. Cholesterol metabolism in the brain. Curr Opin Lipidol.", why: "The definitive account of the CNS compartment.", url: "" },
    { tier: 3, cite: "Porter FD. Smith-Lemli-Opitz syndrome. Eur J Hum Genet 2008.", why: "The natural experiment, described by the person who defined it.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Why can cholesterol not circulate free in plasma?",
      opts: ["It is rapidly degraded by plasma esterases", "It is overwhelmingly hydrophobic and would not dissolve", "It is too large to remain in suspension", "It is immediately taken up by erythrocytes"],
      a: 1,
      why: ["Plasma esterases act on cholesteryl esters within lipoproteins, and this is not why free transport is impossible.",
            "Correct. A single C3 hydroxyl on a 27-carbon hydrophobic skeleton is nowhere near enough to confer aqueous solubility. Hence lipoproteins.",
            "Cholesterol is a small molecule (387 Da). Size is not the issue; polarity is.",
            "Erythrocyte membranes do exchange cholesterol, but this is not the reason free plasma transport is impossible."] },
    { tier: 1, q: "Which of the following is NOT a direct physiological product of cholesterol?",
      opts: ["Cortisol", "Cholecalciferol", "Thyroxine", "Chenodeoxycholic acid"],
      a: 2,
      why: ["Cortisol is a steroid hormone, made from cholesterol via pregnenolone.",
            "Vitamin D3 is made from 7-dehydrocholesterol in skin under UVB.",
            "Correct. Thyroxine is synthesised from tyrosine and iodine, not from cholesterol. The other three are all downstream of the sterol nucleus.",
            "Chenodeoxycholic acid is a primary bile acid, made from cholesterol by CYP7A1 and downstream enzymes."] },
    { tier: 2, q: "LCAT esterifies cholesterol in which compartment, and activated by which apolipoprotein?",
      opts: ["Inside enterocytes; activated by apoB-48", "In plasma on HDL; activated by apoA-I", "Inside hepatocytes; activated by apoE", "In plasma on LDL; activated by apoB-100"],
      a: 1,
      why: ["That describes ACAT-2, an intracellular enzyme. LCAT is extracellular.",
            "Correct. LCAT works in plasma on the HDL surface and is activated by apoA-I. This drives discoidal preβ-HDL to mature spherical HDL and is the motive force of reverse cholesterol transport.",
            "Intracellular hepatic esterification is ACAT-2. ApoE is a receptor ligand, not an LCAT activator.",
            "LCAT operates on HDL, not LDL. ApoB-100 is a structural protein and LDLR ligand."] },
    { tier: 2, q: "The 'membrane condensing effect' of cholesterol means that cholesterol:",
      opts: ["Always increases membrane fluidity", "Always decreases membrane fluidity", "Buffers fluidity — decreasing it above the transition temperature and increasing it below", "Has no effect on fluidity but alters thickness only"],
      a: 2,
      why: ["Only true below the phase-transition temperature.",
            "Only true above the phase-transition temperature. This is the answer most learners give and it is half right.",
            "Correct. The rigid planar ring system restricts acyl-chain motion above Tm and prevents crystalline packing below it. Net effect: a liquid-ordered state stable across temperature.",
            "Cholesterol does alter thickness, but it demonstrably alters fluidity too."] },
    { tier: 3, q: "A patient worries that aggressive LDL lowering will 'starve the brain of cholesterol'. The single strongest mechanistic rebuttal is that:",
      opts: ["Statins do not cross the blood-brain barrier at all", "The brain synthesises its own cholesterol behind the blood-brain barrier and does not import plasma lipoproteins", "Brain cholesterol turnover is so fast that any deficit is corrected within hours", "Neurons obtain cholesterol from cerebrospinal fluid LDL"],
      a: 1,
      why: ["Not strictly true — lipophilic statins penetrate to a limited degree. Overstating this weakens your credibility.",
            "Correct. CNS cholesterol is made in situ by astrocytes and delivered on apoE particles; plasma lipoproteins do not cross. Elimination occurs as 24S-hydroxycholesterol. This is an anatomical argument, which is why it persuades.",
            "The opposite. Myelin cholesterol turnover is extremely slow, with half-lives in years.",
            "There is no meaningful CSF LDL pool serving neuronal cholesterol supply."] },
    { tier: 3, q: "Smith-Lemli-Opitz syndrome is caused by deficiency of:",
      opts: ["HMG-CoA reductase", "7-dehydrocholesterol reductase (DHCR7)", "Squalene epoxidase", "Sterol 27-hydroxylase (CYP27A1)"],
      a: 1,
      why: ["HMGCR deficiency would be incompatible with life and is not the SLOS lesion.",
            "Correct. DHCR7 catalyses the final step; 7-DHC accumulates and cholesterol is deficient. The malformation phenotype reflects cholesterol's role in Hedgehog signalling.",
            "Squalene epoxidase acts far upstream and is an emerging drug target, not the SLOS enzyme.",
            "CYP27A1 deficiency causes cerebrotendinous xanthomatosis — a different and also examinable disease."] }
  ]
},

/* ===================== MODULE 2 ===================== */
{
  id: 2, part: 1,
  title: "Making Cholesterol: The Mevalonate Pathway and Its Thermostat",
  tagline: "HMG-CoA reductase, SREBP-2 feedback, and why doubling a statin dose buys so little.",
  hook: "Why does a drug that blocks one enzyme, taken at night, save more lives worldwide than almost any other pill?",
  time: { t1: 45, t2: 35, t3: 30 },
  objectives: [
    { tier: 1, text: "Identify acetyl-CoA as the carbon source and HMG-CoA reductase as the rate-limiting, statin-targeted step." },
    { tier: 1, text: "State that endogenous synthesis exceeds dietary intake in most people, and explain the dosing implication of diurnal rhythm." },
    { tier: 2, text: "Outline the four phases of the pathway and the SREBP-2 / SCAP / INSIG sterol-sensing loop." },
    { tier: 2, text: "Explain LDL receptor upregulation as the true mechanism of statin benefit, and the 'rule of 6'." },
    { tier: 3, text: "Detail sterol-accelerated HMGCR degradation and the non-sterol isoprenoid branch." },
    { tier: 3, text: "Explain why statins raise PCSK9 and why that is the pharmacological argument for combination therapy." }
  ],
  sections: [
    { tier: 1, h: "One sentence you must be able to recite", html: `
<div class="keybox">
  <div class="eyebrow">Core</div>
  <p><strong>Acetyl-CoA &rarr; HMG-CoA &rarr; mevalonate &rarr; ... &rarr; cholesterol.</strong> The committed, rate-limiting step is catalysed by <strong>HMG-CoA reductase (HMGCR)</strong>, an integral protein of the smooth endoplasmic reticulum membrane. <strong>Statins are competitive inhibitors of HMGCR.</strong></p>
</div>
<p>Every carbon atom in cholesterol comes from acetyl-CoA. Thirty-odd enzymatic steps and roughly 18 molecules of ATP later, you have one molecule of a 27-carbon sterol. It is a metabolically expensive molecule, which is itself a clue that the body considers it important.</p>` },
    { tier: 1, h: "How much do we actually make?", html: `
<p>Whole-body synthesis is on the order of <strong>700-1000 mg/day</strong>, against a typical dietary intake of roughly <strong>200-300 mg/day</strong> of which only a fraction is absorbed.</p>
<div class="keybox">
  <div class="eyebrow">Clinical translation</div>
  <p>This is why dietary cholesterol restriction alone is a weak lever, and why the 2015 US dietary guidance removed the 300 mg/day cap. It is also why patients who have "cut out eggs" and seen no change are not lying to you.</p>
</div>
<p>Synthesis is concentrated in liver and intestine, though almost every nucleated cell can make cholesterol.</p>
<p><strong>Diurnal rhythm:</strong> hepatic synthesis peaks in the early hours of the morning. Statins with a short half-life (simvastatin, lovastatin, fluvastatin, pravastatin) should therefore be taken in the evening. Atorvastatin and rosuvastatin, with half-lives of roughly 14 and 19 hours, can be taken at any time — which matters more for adherence than most prescribers appreciate.</p>` },
    { tier: 2, h: "The four phases", html: `
<div class="tablewrap"><table>
<thead><tr><th>Phase</th><th>Conversion</th><th>Key enzymes</th></tr></thead>
<tbody>
<tr><td><strong>1. Mevalonate synthesis</strong></td><td>3 acetyl-CoA &rarr; HMG-CoA &rarr; mevalonate</td><td>Thiolase, HMG-CoA synthase, <strong>HMGCR</strong> (rate-limiting, NADPH-dependent)</td></tr>
<tr><td><strong>2. Isoprenoid activation</strong></td><td>Mevalonate &rarr; IPP &rarr; DMAPP &rarr; GPP &rarr; FPP</td><td>Mevalonate kinase, phosphomevalonate kinase, decarboxylase</td></tr>
<tr><td><strong>3. Squalene formation</strong></td><td>2 x FPP &rarr; squalene</td><td>Squalene synthase</td></tr>
<tr><td><strong>4. Cyclisation and finishing</strong></td><td>Squalene &rarr; lanosterol &rarr; cholesterol (~19 steps)</td><td>Squalene epoxidase, lanosterol synthase, then the Bloch or Kandutsch-Russell route</td></tr>
</tbody></table></div>
<p class="note">Bloch versus Kandutsch-Russell: two routes from lanosterol differing in when the C24 double bond is reduced by DHCR24. Tissue-dependent. Worth knowing that the last enzyme of the K-R route is DHCR7 — the SLOS enzyme from Module 1.</p>` },
    { tier: 2, h: "The thermostat: SREBP-2, SCAP and INSIG", html: `
<p>This is the most useful regulatory circuit in all of lipidology. Learn it once, properly, and Modules 10 and 11 become obvious.</p>
<p><strong>When ER cholesterol is LOW:</strong></p>
<ol>
<li>SCAP (SREBP cleavage-activating protein) no longer binds INSIG.</li>
<li>SCAP escorts SREBP-2 in COPII vesicles from ER to Golgi.</li>
<li>Site-1 and Site-2 proteases cleave SREBP-2, releasing the nuclear form (nSREBP-2).</li>
<li>nSREBP-2 enters the nucleus and binds sterol regulatory elements, transcribing <strong><em>HMGCR</em></strong>, <strong><em>LDLR</em></strong> and — critically — <strong><em>PCSK9</em></strong>.</li>
</ol>
<p><strong>When ER cholesterol is HIGH:</strong> cholesterol binds SCAP, SCAP binds INSIG, the complex is retained in the ER, and transcription of all three genes falls.</p>
<div class="keybox">
  <div class="eyebrow">The single most important consequence</div>
  <p><strong>Statins lower plasma LDL-C mainly by upregulating hepatic LDL receptors, not by reducing cholesterol synthesis as such.</strong> Blocking HMGCR depletes hepatic cholesterol, SREBP-2 activates, LDLR expression rises, and the liver pulls LDL out of plasma more avidly. If you understand only this, you understand statins.</p>
</div>` },
    { tier: 2, h: "The rule of 6", html: `
<p>Because SREBP-2 also upregulates <em>HMGCR</em> itself, the cell fights back against inhibition. The observed consequence is the <strong>rule of 6</strong>: after the starting dose, each doubling of statin dose yields only about a further <strong>6% reduction in LDL-C</strong>, while dose-dependent adverse effects continue to climb.</p>
<div class="tablewrap"><table>
<thead><tr><th>Atorvastatin dose</th><th>Approx. LDL-C reduction</th></tr></thead>
<tbody>
<tr><td class="num">10 mg</td><td class="num">~37%</td></tr>
<tr><td class="num">20 mg</td><td class="num">~43%</td></tr>
<tr><td class="num">40 mg</td><td class="num">~49%</td></tr>
<tr><td class="num">80 mg</td><td class="num">~55%</td></tr>
</tbody></table></div>
<p>This flat dose-response is <strong>the entire pharmacological argument for combination therapy over dose escalation</strong> — and it is precisely what the 2025 ESC/EAS focused update operationalises with its upfront-combination "fire to target" strategy. Adding ezetimibe to any statin dose buys roughly another 20-25%; doubling the statin buys 6%.</p>` },
    { tool: 'statin-dose' },
    { tier: 3, h: "Sterol-accelerated degradation of HMGCR", html: `
<p>Transcriptional control is only half the story. HMGCR is also regulated <strong>post-translationally</strong>. Sterols (particularly lanosterol and oxysterols) promote binding of HMGCR's sterol-sensing domain to INSIG, which recruits the E3 ubiquitin ligases <strong>gp78</strong> and <strong>TRC8</strong>. HMGCR is polyubiquitinated and extracted for proteasomal degradation via ERAD.</p>
<p>Geranylgeraniol accelerates this degradation, linking the non-sterol branch back to enzyme stability. The practical point: the cell has both a slow (transcriptional) and a fast (degradative) brake, and statins engage neither directly — they inhibit catalysis while the cell responds by making more enzyme.</p>` },
    { tier: 3, h: "The isoprenoid branch: pleiotropy and myopathy live here", html: `
<p>Mevalonate is not committed solely to cholesterol. Downstream isoprenoids include:</p>
<ul>
<li><strong>Ubiquinone (CoQ10)</strong> — mitochondrial electron transport. The basis of the CoQ10-depletion hypothesis of statin myopathy. Supplementation trials have been small and largely unconvincing; you may offer it, but do not promise it.</li>
<li><strong>Dolichol</strong> — N-linked glycosylation.</li>
<li><strong>Farnesyl-PP and geranylgeranyl-PP</strong> — prenylation of small GTPases (Ras, Rho, Rac, Rab).</li>
<li><strong>Haem A</strong>, <strong>isopentenyl-tRNA</strong>.</li>
</ul>
<p><strong>Impaired geranylgeranylation of Rab and Rho proteins in myocytes</strong> is currently the leading mechanistic hypothesis for statin-associated muscle symptoms. Reduced Rho/Rac prenylation in endothelium and leucocytes is simultaneously the leading mechanistic hypothesis for statin <em>pleiotropy</em>. The same branch is invoked to explain both the benefit and the harm, which should make you appropriately sceptical of both claims. Module 10 returns to this.</p>` },
    { tier: 3, h: "Why statins raise PCSK9 — and why that matters commercially and clinically", html: `
<p><em>PCSK9</em> is an SREBP-2 target gene, sitting in the same transcriptional programme as <em>LDLR</em>. So when a statin activates SREBP-2:</p>
<ul>
<li>LDL receptor synthesis rises &mdash; the therapeutic effect.</li>
<li><strong>PCSK9 secretion also rises</strong> &mdash; and circulating PCSK9 binds the LDL receptor and directs it to lysosomal degradation instead of recycling.</li>
</ul>
<p>The statin therefore partially antagonises itself. Plasma PCSK9 rises roughly 15-45% on statin therapy depending on agent and dose.</p>
<div class="keybox">
  <div class="eyebrow">Mechanistic payoff</div>
  <p>This is the clean pharmacological rationale for <strong>adding a PCSK9 inhibitor to a statin rather than escalating the statin</strong>: you are removing the brake the statin itself applied. It also explains the striking synergy — PCSK9 monoclonal antibodies produce larger absolute LDL-C reductions on a statin background than as monotherapy.</p>
</div>
<p class="note">Emerging target worth watching: squalene epoxidase (SQLE), a second rate-limiting node, currently of more interest in oncology than in lipidology.</p>` }
  ],
  unknown: "Whether isoprenoid depletion, an immune mechanism, or something else entirely dominates in statin-associated muscle symptoms. After forty years, we still cannot predict who will get them.",
  readings: [
    { tier: 2, cite: "Brown MS, Goldstein JL. A receptor-mediated pathway for cholesterol homeostasis. Science 1986 (Nobel lecture).", why: "The founding document. Short, and still the clearest exposition of the feedback loop.", url: "" },
    { tier: 3, cite: "Goldstein JL, Brown MS. A century of cholesterol and coronaries. Cell 2015;161:161-72.", why: "Fifty years of the field in one narrative, by the people who built it.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "The rate-limiting enzyme of cholesterol biosynthesis is:",
      opts: ["HMG-CoA synthase", "HMG-CoA reductase", "Squalene synthase", "Lanosterol 14-alpha demethylase"],
      a: 1,
      why: ["HMG-CoA synthase forms the substrate for the rate-limiting step, but is not itself rate-limiting.",
            "Correct. HMGCR converts HMG-CoA to mevalonate using two NADPH. It is the committed, rate-limiting, statin-targeted step.",
            "Squalene synthase is the first committed step to sterols specifically (diverting from the isoprenoid branch) but is not rate-limiting overall.",
            "That is a target of azole antifungals in fungal ergosterol synthesis, not the human rate-limiting step."] },
    { tier: 1, q: "A patient takes simvastatin 20 mg. When should it be taken, and why?",
      opts: ["Morning, because absorption is better with breakfast", "Evening, because hepatic cholesterol synthesis peaks overnight and simvastatin has a short half-life", "Any time, because all statins have long half-lives", "Evening, because this reduces myopathy risk"],
      a: 1,
      why: ["Absorption timing is not the governing consideration for simvastatin.",
            "Correct. Synthesis peaks in the early hours. Short half-life statins (simvastatin, lovastatin, fluvastatin, pravastatin) must be timed to cover that window. Atorvastatin and rosuvastatin need not be.",
            "False. Half-lives range from 1-3 hours (pravastatin) to ~19 hours (rosuvastatin).",
            "Evening dosing does not reduce myopathy risk; it improves efficacy for short-acting agents."] },
    { tier: 2, q: "When hepatocyte ER cholesterol falls, which sequence occurs?",
      opts: ["INSIG binds SCAP, SREBP-2 is retained in the ER, LDLR transcription falls", "SCAP escorts SREBP-2 to the Golgi, S1P/S2P cleave it, nSREBP-2 upregulates LDLR, HMGCR and PCSK9", "SREBP-1c is activated, increasing triglyceride synthesis only", "HMGCR is ubiquitinated by gp78 and degraded"],
      a: 1,
      why: ["This is what happens when cholesterol is HIGH, not low.",
            "Correct. This is the core circuit. Note that PCSK9 is in the same transcriptional programme as LDLR — which is why statins raise PCSK9 and why combination therapy is rational.",
            "SREBP-1c principally governs lipogenesis and is not the sterol-sensing arm.",
            "Sterol-accelerated degradation occurs when sterols are HIGH, not low."] },
    { tier: 2, q: "A patient on atorvastatin 40 mg has LDL-C 92 mg/dL; the goal is below 70. Doubling to 80 mg will achieve approximately what further reduction?",
      opts: ["About 6%", "About 15%", "About 25%", "About 35%"],
      a: 0,
      why: ["Correct. The rule of 6. From 92 mg/dL that gets you to roughly 86 — nowhere near goal. Adding ezetimibe (a further 20-25%) would reach approximately 70. This is the arithmetic behind upfront combination therapy.",
            "This overestimates. Statin dose-response is logarithmic, not linear.",
            "This is roughly what adding ezetimibe achieves, not what doubling the statin achieves.",
            "This is roughly what adding a PCSK9 inhibitor achieves."] },
    { tier: 3, q: "Statins increase circulating PCSK9. The mechanism is:",
      opts: ["Direct stabilisation of PCSK9 protein by the statin molecule", "PCSK9 is an SREBP-2 target gene, so it is co-induced with LDLR", "Reduced hepatic clearance of PCSK9 due to LDLR upregulation", "Compensatory intestinal PCSK9 secretion"],
      a: 1,
      why: ["Statins do not bind or stabilise PCSK9.",
            "Correct. PCSK9 and LDLR sit in the same SREBP-2 transcriptional programme, so the statin induces both the receptor and the protein that degrades it. This partial self-antagonism is the mechanistic rationale for adding a PCSK9 inhibitor rather than doubling the statin.",
            "LDLR actually contributes to PCSK9 clearance, so upregulation would tend to lower, not raise, PCSK9.",
            "PCSK9 is predominantly hepatic; intestinal secretion is not the explanation."] },
    { tier: 3, q: "Depletion of geranylgeranyl pyrophosphate by statin therapy is invoked to explain:",
      opts: ["Statin myopathy only", "Statin pleiotropy only", "Both statin myopathy and statin pleiotropy", "Neither; GGPP is unaffected by statins"],
      a: 2,
      why: ["It is invoked for myopathy, but not only for that.",
            "It is invoked for pleiotropy, but not only for that.",
            "Correct — and this should make you sceptical of both claims. Impaired Rab/Rho prenylation in myocytes is the leading myopathy hypothesis; impaired Rho/Rac prenylation in endothelium and leucocytes is the leading pleiotropy hypothesis. The same branch is asked to explain both the harm and a benefit that Mendelian randomisation suggests is largely attributable to LDL lowering anyway.",
            "GGPP is downstream of mevalonate and is reduced by HMGCR inhibition."] }
  ]
},

/* ===================== MODULE 3 ===================== */
{
  id: 3, part: 1,
  title: "Getting Cholesterol In and Out: Absorption, Bile and the Enterohepatic Loop",
  tagline: "NPC1L1, ABCG5/G8, CYP7A1 and the only exit route the body has.",
  hook: "Two patients eat identical diets. One is a hyper-absorber, one a hyper-synthesiser. Their optimal drugs are different.",
  time: { t1: 35, t2: 30, t3: 25 },
  objectives: [
    { tier: 1, text: "Describe micelle formation and NPC1L1-mediated uptake, and name ezetimibe's target." },
    { tier: 1, text: "Draw the enterohepatic circulation of bile acids and state the only major route of cholesterol elimination." },
    { tier: 2, text: "Explain ABCG5/G8 efflux and the absorption/synthesis balance between individuals." },
    { tier: 2, text: "Describe FXR-FGF19-CYP7A1 regulation and explain why bile acid sequestrants raise triglycerides." },
    { tier: 3, text: "Use sitosterolaemia as the genetic proof of ABCG5/G8 function." },
    { tier: 3, text: "Discuss transintestinal cholesterol efflux and microbial sterol metabolism." }
  ],
  sections: [
    { tier: 1, h: "The journey in", html: `
<ol>
<li><strong>Sources.</strong> Dietary cholesterol (~200-300 mg/day) plus <strong>biliary cholesterol (~800-1200 mg/day)</strong>. Note that the biliary contribution is the larger one — a fact that surprises most learners and reframes what "dietary cholesterol" means.</li>
<li><strong>Emulsification.</strong> Bile salts, phospholipids and free cholesterol form <strong>mixed micelles</strong> that ferry sterols across the unstirred water layer to the brush border.</li>
<li><strong>Uptake.</strong> <strong>NPC1L1</strong> (Niemann-Pick C1-Like 1) on the enterocyte apical membrane internalises cholesterol by clathrin-mediated endocytosis. <strong>Ezetimibe blocks NPC1L1.</strong></li>
<li><strong>Esterification.</strong> ACAT-2 converts free cholesterol to cholesteryl ester.</li>
<li><strong>Packaging.</strong> MTP loads cholesteryl ester and triglyceride onto <strong>apoB-48</strong> to form a chylomicron.</li>
<li><strong>Export.</strong> Chylomicrons enter <em>lacteals</em>, travel via the thoracic duct, and enter the systemic circulation at the left subclavian vein — <strong>bypassing hepatic first-pass metabolism entirely</strong>. This is why a fatty meal produces lipaemic serum.</li>
</ol>` },
    { tier: 1, h: "The only way out", html: `
<div class="keybox">
  <div class="eyebrow">Core</div>
  <p>Humans cannot catabolise the sterol ring. <strong>The only quantitatively significant routes of cholesterol elimination are faecal excretion of bile acids and of neutral sterols.</strong> Everything else is redistribution.</p>
</div>
<p><strong>Bile acid synthesis:</strong> cholesterol &rarr; (rate-limiting enzyme <strong>CYP7A1</strong>, 7-alpha-hydroxylase) &rarr; primary bile acids: <em>cholic acid</em> and <em>chenodeoxycholic acid</em>. Conjugated with glycine or taurine, secreted into bile, stored in gallbladder.</p>
<p><strong>Recovery:</strong> around <strong>95%</strong> of bile acids are reabsorbed in the terminal ileum by <strong>ASBT</strong> and return to the liver in the portal vein. The pool cycles 6-10 times a day. Only ~5% is lost per cycle, and that loss is what the liver must replace by consuming cholesterol.</p>` },
    { figure: 'enterohepatic' },
    { tier: 2, h: "ABCG5/G8: the gatekeeper going the other way", html: `
<p>Uptake by NPC1L1 is non-selective — it will take up plant sterols (sitosterol, campesterol) as readily as cholesterol. The enterocyte corrects this with a heterodimeric efflux pump, <strong>ABCG5/ABCG8</strong>, which pumps plant sterols and surplus cholesterol back into the intestinal lumen.</p>
<p>The same heterodimer sits on the hepatocyte canalicular membrane, secreting cholesterol into bile. So ABCG5/G8 governs both the ceiling on absorption and the rate of biliary elimination.</p>
<div class="keybox">
  <div class="eyebrow">Why this is clinically useful</div>
  <p>Fractional cholesterol absorption varies between individuals from roughly <strong>25% to 80%</strong>. Broadly: <strong>hyper-absorbers respond better to ezetimibe; hyper-synthesisers respond better to statins.</strong> We do not routinely phenotype for this (surrogate markers such as campesterol:lathosterol ratios remain a research tool), but it explains a great deal of the unexplained variance in individual drug response that you will meet in clinic.</p>
</div>` },
    { tier: 2, h: "FXR, FGF19 and why sequestrants raise triglycerides", html: `
<p>Bile acids are not just detergents; they are signalling molecules acting on the nuclear receptor <strong>FXR</strong>.</p>
<ul>
<li><strong>Hepatic FXR</strong> activation induces <em>SHP</em>, which represses <em>CYP7A1</em>.</li>
<li><strong>Ileal FXR</strong> activation induces <strong>FGF19</strong> (FGF15 in rodents), which travels in portal blood to hepatic FGFR4/beta-Klotho and also represses <em>CYP7A1</em>.</li>
</ul>
<p>So bile acids switch off their own synthesis by two routes. Now interrupt the loop with a <strong>bile acid sequestrant</strong>:</p>
<ol>
<li>Bile acids are bound in the gut lumen and excreted.</li>
<li>Ileal and hepatic FXR signalling falls; <em>CYP7A1</em> is de-repressed.</li>
<li>The liver consumes cholesterol to make replacement bile acids.</li>
<li>Hepatic cholesterol falls &rarr; SREBP-2 activates &rarr; <strong>LDLR rises &rarr; plasma LDL-C falls 15-25%.</strong></li>
<li><strong>But</strong> SREBP-1c is also activated, driving hepatic lipogenesis and VLDL secretion &rarr; <strong>triglycerides rise.</strong></li>
</ol>
<div class="flag warn"><strong>Clinical rule:</strong> bile acid sequestrants are contraindicated in significant hypertriglyceridaemia (generally TG above ~400 mg/dL) and should be used cautiously above 300. This is not an arbitrary caution — it falls directly out of the mechanism above.</div>` },
    { tool: 'enterohepatic-sim' },
    { tier: 3, h: "Sitosterolaemia: the experiment nature ran for us", html: `
<p>Biallelic loss-of-function in <em>ABCG5</em> or <em>ABCG8</em>. Without the efflux pump:</p>
<ul>
<li>Plant sterol absorption rises from &lt;5% to 15-60%; plasma sitosterol rises 10-25 fold.</li>
<li>Biliary sterol secretion falls.</li>
<li>Phenotype: <strong>tendon and tuberous xanthomas in childhood, premature ASCVD, haemolytic anaemia with stomatocytosis, macrothrombocytopenia</strong> — often with total cholesterol that is normal or only modestly raised.</li>
</ul>
<div class="keybox">
  <div class="eyebrow">The therapeutic punchline</div>
  <p>Sitosterolaemia responds to <strong>ezetimibe and a low plant-sterol diet</strong>, and responds poorly to statins. It is the one hypercholesterolaemia-like syndrome where the reflex statin prescription is the wrong answer. Suspect it in a child with xanthomas and unimpressive cholesterol, or in an apparent FH that will not respond to statins.</p>
</div>` },
    { tier: 3, h: "TICE and the microbiome", html: `
<p><strong>Transintestinal cholesterol efflux (TICE)</strong> is a non-biliary route by which the intestine secretes plasma-derived cholesterol directly into the lumen. In mice it can account for a large share of faecal neutral sterol loss; the human contribution is debated but non-trivial. It is an attractive drug target precisely because it bypasses the liver.</p>
<p><strong>Microbial conversion:</strong> gut bacteria carrying the <em>ismA</em> gene cluster convert cholesterol to <strong>coprostanol</strong>, which is poorly absorbed. Carriage varies widely between individuals and correlates with lower serum cholesterol in metagenomic cohorts. Whether this is causal or a marker is unresolved.</p>
<p><strong>TMAO:</strong> gut microbial metabolism of choline and carnitine yields TMA, oxidised hepatically to TMAO, which has been associated with atherosclerosis. The association is robust; the causal claim in humans is not. Teach it as an open question, not a fact.</p>
<p class="note">FXR agonism (obeticholic acid) and ASBT inhibition (odevixibat, maralixibat) are approved in cholestatic liver disease and are worth knowing as the pharmacological levers on this loop, even though neither is a lipid drug.</p>` }
  ],
  unknown: "Whether deliberately manipulating the sterol-metabolising microbiome — or pharmacologically driving TICE — can be made to lower ASCVD risk in humans.",
  readings: [
    { tier: 2, cite: "Altmann SW et al. NPC1L1 is critical for intestinal cholesterol absorption. Science 2004.", why: "The target identification paper that made ezetimibe make sense.", url: "" },
    { tier: 3, cite: "Berge KE et al. Accumulation of dietary cholesterol in sitosterolemia caused by mutations in adjacent ABC transporters. Science 2000.", why: "Gene discovery through a rare disease — a template for how lipidology advances.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Ezetimibe acts by inhibiting:",
      opts: ["ACAT-2 in the enterocyte", "NPC1L1 at the enterocyte brush border", "ABCG5/G8 efflux", "Microsomal triglyceride transfer protein"],
      a: 1,
      why: ["ACAT-2 esterifies cholesterol after uptake; it is not the ezetimibe target.",
            "Correct. NPC1L1 mediates apical uptake of luminal cholesterol; ezetimibe blocks it, reducing absorption by roughly 50% and lowering LDL-C 15-20% as monotherapy.",
            "ABCG5/G8 pumps sterols back out — inhibiting it would worsen matters. This is the lesion in sitosterolaemia.",
            "MTP is the target of lomitapide, used in homozygous FH."] },
    { tier: 1, q: "Which statement about cholesterol elimination is correct?",
      opts: ["Cholesterol is oxidised to CO2 and water in the liver", "The sterol ring cannot be catabolised; elimination is via faecal bile acids and neutral sterols", "Cholesterol is excreted primarily by the kidney", "Cholesterol is exhaled as volatile sterol derivatives"],
      a: 1,
      why: ["Humans cannot break the fused ring system.",
            "Correct. This is why interrupting the enterohepatic circulation lowers LDL-C, and why the gut is the therapeutic exit door.",
            "Renal excretion of cholesterol is negligible.",
            "Not a real route."] },
    { tier: 2, q: "A bile acid sequestrant lowers LDL-C but raises triglycerides. The mechanism of the triglyceride rise is:",
      opts: ["Direct inhibition of lipoprotein lipase", "Activation of SREBP-1c driving hepatic lipogenesis and VLDL secretion", "Impaired absorption of fat-soluble vitamins", "Increased intestinal ACAT-2 activity"],
      a: 1,
      why: ["Sequestrants do not inhibit LPL.",
            "Correct. De-repressing CYP7A1 lowers hepatic cholesterol, activating SREBP-2 (good — LDLR rises) but also SREBP-1c (unhelpful — lipogenesis and VLDL secretion rise). Hence the contraindication in significant hypertriglyceridaemia.",
            "Fat-soluble vitamin malabsorption is a real adverse effect but does not raise triglycerides.",
            "ACAT-2 is not the driver here."] },
    { tier: 2, q: "Roughly what proportion of the bile acid pool is reabsorbed in the terminal ileum on each cycle?",
      opts: ["About 50%", "About 75%", "About 95%", "About 25%"],
      a: 2,
      why: ["Far too low. If half the pool were lost each cycle, hepatic synthesis could not keep pace.",
            "Still too low. A 25% loss per cycle, over 6-10 cycles a day, would demand a rate of hepatic bile acid synthesis the liver cannot sustain.",
            "Correct. Roughly 95% is recovered by ASBT; only ~5% is lost per cycle and must be replaced from cholesterol. The efficiency of this loop is exactly why interrupting it is therapeutically effective.",
            "Far too low, and the least plausible of the four. Note the direction of the logic: the loop must be highly efficient, which is precisely what makes blocking it a useful drug mechanism."] },
    { tier: 3, q: "A 9-year-old presents with tendon xanthomas, mild anaemia with stomatocytes, large platelets and a total cholesterol of 210 mg/dL. Statins have produced almost no response. The most likely diagnosis and correct treatment are:",
      opts: ["Heterozygous FH; increase statin dose", "Sitosterolaemia; ezetimibe and a low plant-sterol diet", "Homozygous FH; lipoprotein apheresis", "Cerebrotendinous xanthomatosis; chenodeoxycholic acid"],
      a: 1,
      why: ["HeFH would usually give a much higher cholesterol and would respond to statins.",
            "Correct. The triad of childhood xanthomas, haematological abnormalities (stomatocytic haemolysis, macrothrombocytopenia) and unimpressive cholesterol with statin non-response is sitosterolaemia — biallelic ABCG5/G8 loss. Confirm with plasma sitosterol. It responds to ezetimibe.",
            "HoFH gives LDL-C typically above 400-500 mg/dL, not 210, and lacks the haematological features.",
            "CTX gives tendon xanthomas, cataracts and neurological decline with normal or low cholesterol — a genuine differential, but the haematological findings point to sitosterolaemia."] },
    { tier: 3, q: "Ileal FXR activation reduces hepatic bile acid synthesis principally by:",
      opts: ["Direct portal delivery of bile acids to hepatic FXR only", "Inducing FGF19, which signals through hepatic FGFR4/beta-Klotho to repress CYP7A1", "Upregulating ASBT expression", "Inhibiting ABCG5/G8"],
      a: 1,
      why: ["Hepatic FXR-SHP is a real second arm, but the question asks specifically about the ileal limb.",
            "Correct. The ileal enterokine FGF19 (FGF15 in mice) is the endocrine arm of the negative feedback loop. Its therapeutic relevance is growing in cholestatic and metabolic liver disease.",
            "ASBT upregulation would increase reabsorption, not reduce synthesis.",
            "ABCG5/G8 is not the FXR effector in this loop."] }
  ]
},

/* ===================== MODULE 4 ===================== */
{
  id: 4, part: 2,
  title: "The Lipoprotein Traffic System",
  tagline: "The conceptual keystone. Three pathways, one apoB per particle, and the origin of small dense LDL.",
  hook: "Cholesterol is hydrophobic and blood is water. Everything that follows is the solution to that engineering problem.",
  time: { t1: 60, t2: 40, t3: 30 },
  objectives: [
    { tier: 1, text: "Draw and label the generic lipoprotein particle and rank the classes by density and size." },
    { tier: 1, text: "Distinguish the exogenous, endogenous and reverse cholesterol transport pathways." },
    { tier: 1, text: "State the one-apoB-per-particle principle and why it matters." },
    { tier: 2, text: "Assign each major apolipoprotein its function and describe LPL activation and clearance." },
    { tier: 2, text: "Explain CETP-mediated exchange and the genesis of small dense LDL." },
    { tier: 3, text: "Explain the ANGPTL3/4/8 network and apoC-III as therapeutic targets." },
    { tier: 3, text: "Discuss HDL functional heterogeneity and why cholesterol efflux capacity outperforms HDL-C." }
  ],
  sections: [
    { tier: 1, h: "Anatomy of a lipoprotein", html: `
<p>Every lipoprotein has the same architecture:</p>
<ul>
<li><strong>Core</strong> — non-polar cargo: cholesteryl esters and triglyceride.</li>
<li><strong>Shell</strong> — a monolayer of amphipathic phospholipid, free cholesterol, and apolipoproteins, with polar faces outward.</li>
</ul>
<p>The classes differ almost entirely in the <em>ratio of triglyceride to cholesteryl ester in the core</em> and in the <em>apolipoprotein complement on the surface</em>. More triglyceride means bigger and less dense; more protein means smaller and denser.</p>` },
    { figure: 'lipoprotein-classes' },
    { tier: 1, h: "The three pathways", html: `
<h3>1. Exogenous — dietary fat</h3>
<p>Enterocyte assembles a <strong>chylomicron</strong> on apoB-48 &rarr; lymphatics &rarr; blood &rarr; acquires apoC-II and apoE from HDL &rarr; <strong>LPL</strong> on capillary endothelium (adipose, muscle) hydrolyses triglyceride, releasing free fatty acids &rarr; particle shrinks to a <strong>chylomicron remnant</strong> &rarr; cleared by the hepatic remnant receptor / LDLR via apoE.</p>
<h3>2. Endogenous — hepatic export</h3>
<p>Liver assembles <strong>VLDL</strong> on apoB-100 &rarr; LPL strips triglyceride &rarr; <strong>IDL</strong> &rarr; hepatic lipase strips more &rarr; <strong>LDL</strong>, whose core is now almost entirely cholesteryl ester &rarr; taken up by the <strong>hepatic LDL receptor</strong> binding apoB-100, or retained in the arterial intima where it causes disease (Module 6).</p>
<h3>3. Reverse cholesterol transport</h3>
<p>Lipid-poor <strong>apoA-I</strong> accepts cholesterol from peripheral cells via <strong>ABCA1</strong> &rarr; discoidal preβ-HDL &rarr; <strong>LCAT</strong> esterifies &rarr; spherical mature HDL, accepting more cholesterol via <strong>ABCG1</strong> and <strong>SR-B1</strong> &rarr; returns cholesterol to liver either directly (SR-B1 selective uptake) or indirectly (<strong>CETP</strong> swaps HDL cholesteryl ester for VLDL/LDL triglyceride, and the apoB particle is cleared).</p>` },
    { tier: 1, h: "One particle, one apoB", html: `
<div class="keybox">
  <div class="eyebrow">Remember this above everything else in this module</div>
  <p>Every chylomicron, VLDL, IDL, LDL and Lp(a) particle carries <strong>exactly one apoB molecule</strong>, and it is never exchanged. Therefore <strong>plasma apoB is a direct count of atherogenic particles.</strong></p>
  <p class="small" style="margin-top:8px">LDL-C tells you how much cholesterol is being carried. ApoB tells you how many carriers there are. When the two disagree — a common situation in diabetes, metabolic syndrome and the Indian phenotype — the particle count is the better predictor of risk. This single fact is why apoB keeps reappearing in Modules 7, 9, 11 and 13.</p>
</div>` },
    { tier: 2, h: "The apolipoprotein cast list", html: `
<div class="tablewrap"><table>
<thead><tr><th>Apo</th><th>Where</th><th>Function</th></tr></thead>
<tbody>
<tr><td><strong>apoB-48</strong></td><td>Chylomicrons</td><td>Structural. Intestinal; a 48% length product of the same gene via mRNA editing (APOBEC1). Cannot bind LDLR.</td></tr>
<tr><td><strong>apoB-100</strong></td><td>VLDL, IDL, LDL, Lp(a)</td><td>Structural <em>and</em> the LDL receptor ligand. One per particle.</td></tr>
<tr><td><strong>apoA-I</strong></td><td>HDL</td><td>Structural scaffold; activates LCAT; ligand for SR-B1.</td></tr>
<tr><td><strong>apoA-II</strong></td><td>HDL</td><td>Second most abundant HDL protein; modulates hepatic lipase.</td></tr>
<tr><td><strong>apoC-II</strong></td><td>CM, VLDL, HDL</td><td><strong>Activates LPL.</strong> Deficiency causes chylomicronaemia.</td></tr>
<tr><td><strong>apoC-III</strong></td><td>CM, VLDL, HDL</td><td><strong>Inhibits LPL</strong> and impairs remnant clearance. A drug target (olezarsen, plozasiran).</td></tr>
<tr><td><strong>apoE</strong></td><td>CM, VLDL, IDL, HDL</td><td>Ligand for remnant receptor and LDLR. Isoforms E2/E3/E4; E2/E2 predisposes to dysbetalipoproteinaemia.</td></tr>
<tr><td><strong>apo(a)</strong></td><td>Lp(a)</td><td>Kringle-repeat protein disulphide-bonded to apoB-100. Plasminogen homologue.</td></tr>
</tbody></table></div>
<h4>Enzymes and transfer proteins</h4>
<ul>
<li><strong>LPL</strong> — capillary endothelium (anchored by GPIHBP1); hydrolyses TG in chylomicrons and VLDL; activated by apoC-II, inhibited by apoC-III and ANGPTL3/4/8.</li>
<li><strong>Hepatic lipase</strong> — converts IDL to LDL and remodels HDL2 to HDL3.</li>
<li><strong>Endothelial lipase</strong> — phospholipase activity; principal determinant of HDL catabolism.</li>
<li><strong>LCAT</strong> — plasma esterification on HDL.</li>
<li><strong>CETP</strong> — exchanges HDL cholesteryl ester for triglyceride from apoB particles.</li>
<li><strong>ABCA1 / ABCG1 / SR-B1</strong> — the efflux and selective-uptake machinery.</li>
</ul>` },
    { tier: 2, h: "How small dense LDL is born — and why this is the most useful mechanism in the course", html: `
<p>Follow the sequence. It explains an entire clinical phenotype.</p>
<ol>
<li>Insulin resistance or high carbohydrate intake &rarr; hepatic VLDL overproduction &rarr; <strong>plasma triglycerides rise.</strong></li>
<li>Abundant triglyceride-rich particles give <strong>CETP</strong> plenty of substrate. CETP moves TG <em>into</em> LDL and HDL, and cholesteryl ester <em>out</em>.</li>
<li>LDL and HDL are now triglyceride-enriched.</li>
<li><strong>Hepatic lipase</strong> hydrolyses that triglyceride, stripping the particles down.</li>
<li>Result: <strong>small, dense LDL</strong> (more arterially retained, more oxidisable, lower LDLR affinity, longer residence time) and <strong>small, lipid-poor HDL</strong> that is rapidly catabolised and cleared renally &rarr; <strong>HDL-C falls.</strong></li>
</ol>
<div class="keybox">
  <div class="eyebrow">The payoff</div>
  <p>One mechanism generates the entire <strong>atherogenic dyslipidaemia triad: high triglycerides, low HDL-C, small dense LDL</strong> — with an <strong>apoB that is high out of proportion to a bland-looking LDL-C.</strong></p>
  <p style="margin-top:8px">This is the dominant Indian dyslipidaemia phenotype. Module 13 is built on this paragraph. It is also why measuring only total and LDL cholesterol in an Indian clinic systematically under-detects risk.</p>
</div>` },
    { tool: 'particle-explorer' },
    { tier: 3, h: "ANGPTL3 / 4 / 8 — the brakes on LPL", html: `
<p>Angiopoietin-like proteins inhibit LPL and thereby raise triglycerides. Their tissue distribution encodes a nutritional logic:</p>
<ul>
<li><strong>ANGPTL3</strong> (hepatic, endocrine) — inhibits LPL and endothelial lipase. Loss-of-function carriers have low LDL-C, low TG, low HDL-C and reduced CAD risk — <em>familial combined hypolipidaemia</em>. Target of <strong>evinacumab</strong>, which lowers LDL-C in an <strong>LDLR-independent</strong> manner and therefore works in receptor-negative homozygous FH.</li>
<li><strong>ANGPTL4</strong> (adipose, fasting-induced) — directs fuel away from adipose in the fasted state. LOF carriers have lower TG and lower CAD risk.</li>
<li><strong>ANGPTL8</strong> (feeding-induced) — partners with ANGPTL3 and ANGPTL4 to direct postprandial fuel toward adipose.</li>
</ul>
<p><strong>apoC-III</strong> is the other major LPL brake. Heterozygous LOF carriers have ~40% lower triglycerides and ~40% lower CHD risk. Hence olezarsen (antisense) and plozasiran (siRNA).</p>
<p class="note">Note the pattern that recurs throughout modern lipidology: find a human loss-of-function variant with a favourable phenotype, then build a drug that phenocopies it. PCSK9 is the archetype; ANGPTL3 and apoC-III are the sequels.</p>` },
    { tier: 3, h: "HDL is a family, not a molecule", html: `
<p>HDL comprises dozens of subspecies distinguished by size, density, apolipoprotein content and proteome (well over 80 associated proteins, including antioxidant paraoxonase-1 and components of complement and innate immunity).</p>
<p><strong>Cholesterol efflux capacity</strong> — an ex vivo functional assay of how well a subject's apoB-depleted serum accepts cholesterol from macrophages — predicts incident cardiovascular events <em>independently of HDL-C concentration</em>, and generally outperforms it.</p>
<div class="keybox">
  <div class="eyebrow">Why HDL-raising failed</div>
  <p>Every attempt to lower risk by raising HDL-C as a number has failed: niacin (AIM-HIGH, HPS2-THRIVE), CETP inhibitors of the first generation (torcetrapib, dalcetrapib, evacetrapib), and Mendelian randomisation of HDL-C-raising variants shows no protective effect. HDL-C is a <strong>marker of a healthy metabolic state, not a mediator</strong>. Teach this as the field's most instructive collective error — and note that obicetrapib (Module 12) is being tested primarily as an <em>LDL-lowering</em> agent, which is a very different hypothesis.</p>
</div>` },
    { tier: 3, h: "Remnants, and the Lp(a) oddity", html: `
<p><strong>Remnant cholesterol</strong> (approximately TC minus LDL-C minus HDL-C) captures cholesterol in TG-rich lipoprotein remnants. Mendelian randomisation supports remnant cholesterol as causal for ASCVD — and, unlike LDL, also for low-grade inflammation. This is an active frontier and the reason the 2026 ACC/AHA guideline was retitled from "Blood Cholesterol" to "Dyslipidemia".</p>
<p><strong>Lp(a)</strong> = an LDL particle with apo(a) disulphide-linked to apoB-100. Apo(a) contains variable numbers of <strong>kringle IV type-2 repeats</strong>; copy number is inversely related to plasma Lp(a) concentration and explains most of the genetic variance. Because apo(a) is homologous to plasminogen, Lp(a) is hypothesised to be simultaneously atherogenic, prothrombotic and pro-inflammatory (it also carries oxidised phospholipids). Concentration is ~70-90% genetically determined and barely responds to lifestyle.</p>` }
  ],
  unknown: "Whether HDL functionality — as distinct from HDL-C concentration — can be made therapeutically useful. Forty years of trying says probably not by raising a number.",
  readings: [
    { tier: 2, cite: "Sniderman AD et al. Apolipoprotein B particles and cardiovascular disease: a narrative review. JAMA Cardiol 2019.", why: "The clearest case for particle count over cholesterol mass.", url: "" },
    { tier: 3, cite: "Rader DJ, Hovingh GK. HDL and cardiovascular disease. Lancet 2014;384:618-25.", why: "The honest post-mortem on the HDL hypothesis.", url: "" },
    { tier: 3, cite: "Nordestgaard BG, Varbo A. Triglycerides and cardiovascular disease. Lancet 2014;384:626-35.", why: "The remnant hypothesis, argued properly.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Which lipoprotein class carries apoB-48 rather than apoB-100?",
      opts: ["VLDL", "Chylomicrons", "LDL", "Lp(a)"],
      a: 1,
      why: ["VLDL is hepatic and carries apoB-100.",
            "Correct. ApoB-48 is the intestinal form, produced by APOBEC1 mRNA editing of the same gene. It lacks the LDL receptor binding domain, so chylomicron remnants are cleared via apoE instead.",
            "LDL carries apoB-100, which is its LDLR ligand.",
            "Lp(a) is an LDL particle with apo(a) attached to apoB-100."] },
    { tier: 1, q: "Chylomicrons enter the circulation via the lymphatics rather than the portal vein. The main consequence is:",
      opts: ["They are cleared faster", "They bypass hepatic first-pass metabolism", "They cannot acquire apoC-II", "They are not substrates for lipoprotein lipase"],
      a: 1,
      why: ["Route of entry does not itself determine clearance rate.",
            "Correct. Entering at the left subclavian vein means dietary fat reaches peripheral tissues before the liver sees it — which is why a fatty meal produces lipaemic serum and postprandial triglyceridaemia.",
            "They acquire apoC-II and apoE from HDL in the circulation.",
            "They are the principal LPL substrate."] },
    { tier: 2, q: "ApoC-III does what to lipoprotein lipase, and why is it a drug target?",
      opts: ["Activates LPL; targeted to raise triglycerides", "Inhibits LPL and impairs remnant clearance; loss-of-function carriers have lower triglycerides and lower CHD risk", "Has no LPL effect; targeted for its HDL effects", "Activates LPL; loss-of-function causes chylomicronaemia"],
      a: 1,
      why: ["ApoC-II activates LPL; apoC-III inhibits it. This pair is a classic exam confusion.",
            "Correct. Heterozygous apoC-III loss-of-function carriers have roughly 40% lower triglycerides and 40% lower CHD risk — the human genetic validation behind olezarsen and plozasiran.",
            "It has a substantial LPL effect.",
            "That describes apoC-II deficiency, a cause of familial chylomicronaemia syndrome."] },
    { tier: 2, q: "In a patient with high triglycerides, small dense LDL arises because:",
      opts: ["Hepatic lipase directly synthesises smaller LDL particles", "CETP enriches LDL with triglyceride, which hepatic lipase then hydrolyses, shrinking the particle", "LDL receptors preferentially remove large LDL", "Increased LCAT activity depletes LDL cholesteryl ester"],
      a: 1,
      why: ["Hepatic lipase remodels existing particles; it does not synthesise them.",
            "Correct. TG-rich particles give CETP substrate, LDL becomes TG-enriched, hepatic lipase strips the TG, and a small dense remnant is left. The same sequence acting on HDL produces small lipid-poor HDL that is rapidly cleared — hence the low HDL-C. One mechanism, the whole triad.",
            "Not the mechanism, though small dense LDL does have lower LDLR affinity as a consequence.",
            "LCAT acts on HDL, not LDL."] },
    { tier: 2, q: "Plasma apoB is a better risk marker than LDL-C in metabolic syndrome principally because:",
      opts: ["ApoB is measured by a more precise assay", "Each atherogenic particle carries exactly one apoB, so apoB counts particles rather than cholesterol mass", "ApoB is unaffected by fasting status", "ApoB includes HDL particles in the count"],
      a: 1,
      why: ["Assay precision is a minor secondary advantage, not the conceptual reason.",
            "Correct. In metabolic syndrome the particles are cholesterol-depleted (small dense LDL), so a given LDL-C represents many more particles than usual. ApoB captures that; LDL-C does not. This is the discordance that the 2026 ACC/AHA guideline addresses by recommending apoB in exactly these populations.",
            "True and useful, but not the principal conceptual reason.",
            "False. HDL carries apoA-I, not apoB. That is precisely why apoB is specific for atherogenic particles."] },
    { tier: 3, q: "Evinacumab lowers LDL-C in receptor-negative homozygous FH. This is possible because it:",
      opts: ["Upregulates residual LDL receptors", "Targets ANGPTL3, lowering LDL-C by an LDL-receptor-independent mechanism", "Inhibits PCSK9, sparing LDL receptors", "Blocks MTP, reducing apoB particle assembly"],
      a: 1,
      why: ["Receptor-negative patients have essentially no functional LDLR to upregulate — which is exactly why statins and PCSK9 inhibitors disappoint in this group.",
            "Correct. ANGPTL3 blockade lowers LDL-C independently of the LDL receptor (the mechanism involves increased endothelial lipase and VLDL processing), which is why evinacumab works where receptor-dependent agents fail. It is the cleanest illustration in lipidology of why mechanism dictates patient selection.",
            "PCSK9 inhibition is LDLR-dependent and works poorly in receptor-negative HoFH.",
            "That describes lomitapide, a different (and also useful) HoFH agent."] },
    { tier: 3, q: "The strongest argument that HDL-C is a marker rather than a mediator is:",
      opts: ["HDL-C is difficult to measure accurately", "Mendelian randomisation of HDL-C-raising variants shows no protective effect, and pharmacological HDL-C raising has consistently failed to reduce events", "HDL-C varies with fasting status", "HDL particles do not participate in reverse cholesterol transport"],
      a: 1,
      why: ["Measurement is not the issue.",
            "Correct. Genetic variants that raise HDL-C do not confer protection, and niacin, torcetrapib, dalcetrapib and evacetrapib all raised HDL-C without benefit. Efflux capacity — a functional measure — does predict events, which is the crucial distinction.",
            "Minor analytical point, not the argument.",
            "They certainly do; the point is that the concentration of cholesterol in them is not the operative variable."] }
  ]
},

/* ===================== MODULE 5 ===================== */
{
  id: 5, part: 2,
  title: "Cholesterol Physiology: The Useful Life",
  tagline: "Steroidogenesis, vitamin D, bile and myelin — and why very low LDL-C does not break any of them.",
  hook: "The adrenal cortex is one of the most cholesterol-hungry tissues in the body. What happens to steroidogenesis when we drive LDL-C to 20 mg/dL?",
  time: { t1: 45, t2: 30, t3: 20 },
  objectives: [
    { tier: 1, text: "Map cholesterol to its five destinations and describe steroidogenesis from pregnenolone." },
    { tier: 1, text: "Explain vitamin D3 synthesis from 7-dehydrocholesterol." },
    { tier: 2, text: "Describe StAR-mediated mitochondrial import and CYP11A1 side-chain cleavage." },
    { tier: 2, text: "Explain the three-way redundancy in tissue cholesterol supply and its safety implication." },
    { tier: 3, text: "Discuss oxysterols as LXR ligands and 27-hydroxycholesterol as a SERM." }
  ],
  sections: [
    { tier: 1, h: "Where it all goes", html: `
<p>Module 1 listed the five destinations. Here we walk each one.</p>
<h3>Steroid hormones</h3>
<p>Cholesterol &rarr; <strong>pregnenolone</strong> (the universal precursor) &rarr; branching to progestogens, mineralocorticoids, glucocorticoids, androgens and oestrogens. Every steroid hormone in the body descends from this single molecule.</p>
<h3>Vitamin D</h3>
<p>7-dehydrocholesterol in the epidermis + <strong>UVB</strong> &rarr; previtamin D3 &rarr; thermal isomerisation &rarr; <strong>cholecalciferol</strong> &rarr; hepatic 25-hydroxylation &rarr; renal 1-alpha-hydroxylation &rarr; calcitriol.</p>
<h3>Bile acids</h3>
<p>Covered in Module 3. The elimination route and the fat-absorption enabler.</p>
<h3>Membranes and myelin</h3>
<p>Roughly a quarter of body cholesterol sits in the CNS, most of it in myelin, turning over over years.</p>` },
    { tier: 1, h: "The question patients actually ask", html: `
<div class="keybox">
  <div class="eyebrow">Deliver this with the physiology, not as an afterthought</div>
  <p>"If cholesterol makes my hormones, won't lowering it wreck them?"</p>
  <p style="margin-top:8px"><strong>No — and the reason is anatomical, not statistical.</strong> Steroidogenic tissues obtain cholesterol by three independent routes and can synthesise it themselves. Plasma LDL is only one input. Across the large outcome trials, including participants driven to LDL-C below 25 mg/dL for years, no consistent signal of adrenal insufficiency, sex-hormone deficiency or vitamin D deficiency has emerged.</p>
</div>
<p class="note">Teaching tip: patients and students both find the mechanism far more convincing than the trial data. Give them the mechanism first, then say the trials agree.</p>` },
    { tier: 2, h: "StAR: the real rate-limiting step in steroidogenesis", html: `
<p>The bottleneck in making a steroid hormone is not an enzyme reaction. It is <strong>getting cholesterol across the aqueous gap from the outer to the inner mitochondrial membrane</strong>, where CYP11A1 (P450 side-chain cleavage) waits.</p>
<p><strong>StAR</strong> (steroidogenic acute regulatory protein) performs this transfer. It is acutely induced by trophic hormones (ACTH via cAMP/PKA in the adrenal cortex, LH in the gonads) and is the step that makes steroidogenesis <em>acute</em>.</p>
<p><strong>Lipoid congenital adrenal hyperplasia</strong> is StAR deficiency: cholesterol accumulates in the cell, no steroid can be made, and the adrenal becomes lipid-laden. The lesion is transport, not synthesis — an elegant confirmation that the rate-limiting step is physical.</p>` },
    { tier: 2, h: "Three ways in, and why that matters", html: `
<div class="tablewrap"><table>
<thead><tr><th>Route</th><th>Mechanism</th><th>Relative importance</th></tr></thead>
<tbody>
<tr><td><strong>LDL receptor</strong></td><td>Whole-particle endocytosis, lysosomal hydrolysis</td><td>Major in human adrenal and gonad</td></tr>
<tr><td><strong>SR-B1</strong></td><td>Selective uptake of HDL cholesteryl ester without particle internalisation</td><td>Dominant in rodents; substantial in humans</td></tr>
<tr><td><strong>De novo synthesis</strong></td><td>Local mevalonate pathway</td><td>Upregulates when the other two fall</td></tr>
</tbody></table></div>
<p>Plus a fourth reserve: stored cholesteryl ester droplets, mobilised by hormone-sensitive lipase.</p>
<p><strong>This redundancy is the safety argument.</strong> Remove one input and the others compensate, under SREBP-2 control. It is also why patients with abetalipoproteinaemia — who have essentially no apoB particles at all — nonetheless produce steroid hormones.</p>` },
    { tier: 3, h: "Oxysterols: cholesterol as a signalling molecule", html: `
<p>Enzymatically or non-enzymatically oxidised cholesterol derivatives act as high-affinity ligands for the nuclear receptor <strong>LXR</strong> (liver X receptor).</p>
<ul>
<li><strong>LXR activation</strong> upregulates <em>ABCA1</em>, <em>ABCG1</em>, <em>ABCG5/G8</em> and <em>IDOL</em> — a coordinated "get rid of cholesterol" programme. It also induces <em>SREBP-1c</em>, which is why LXR agonists cause hepatic steatosis and hypertriglyceridaemia and have not become drugs.</li>
<li><strong>25-hydroxycholesterol</strong> also promotes INSIG binding, suppressing SREBP-2 — an oxysterol arm of the Module 2 thermostat.</li>
<li><strong>24S-hydroxycholesterol</strong> (CYP46A1) is the brain's export form.</li>
<li><strong>27-hydroxycholesterol</strong> (CYP27A1) is a partial <strong>selective oestrogen receptor modulator</strong>, and has been implicated in oestrogen-receptor-positive breast cancer biology and in linking hypercholesterolaemia to tumour progression. A genuinely interesting frontier.</li>
</ul>
<p><strong>Cerebrotendinous xanthomatosis</strong> — CYP27A1 deficiency — gives tendon xanthomas, juvenile cataracts, chronic diarrhoea and progressive neurological decline with <em>normal or low</em> cholesterol. It is treatable with chenodeoxycholic acid, and it is missed for decades. Keep it in the differential of tendon xanthomas alongside FH and sitosterolaemia.</p>` }
  ],
  unknown: "Whether the SERM activity of 27-hydroxycholesterol is clinically meaningful in humans, and whether it explains any part of the epidemiological link between hypercholesterolaemia and certain cancers.",
  readings: [
    { tier: 2, cite: "Miller WL, Auchus RJ. The molecular biology, biochemistry and physiology of human steroidogenesis. Endocr Rev 2011.", why: "The definitive reference; read the StAR section.", url: "" },
    { tier: 3, cite: "Nelson ER et al. 27-hydroxycholesterol links hypercholesterolemia and breast cancer pathophysiology. Science 2013.", why: "A striking result at the boundary of lipidology and oncology.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "The universal precursor of all steroid hormones is:",
      opts: ["Progesterone", "Pregnenolone", "Dehydroepiandrosterone", "Squalene"],
      a: 1,
      why: ["Progesterone is downstream of pregnenolone and is itself a precursor for some, but not all, branches.",
            "Correct. CYP11A1 cleaves the cholesterol side chain to yield pregnenolone, from which every steroid class branches.",
            "DHEA is an androgen precursor, downstream of pregnenolone.",
            "Squalene is an intermediate in cholesterol synthesis, upstream of cholesterol itself."] },
    { tier: 1, q: "Vitamin D3 synthesis in skin requires:",
      opts: ["Cholesterol and UVA", "7-dehydrocholesterol and UVB", "Ergosterol and UVB", "Lanosterol and UVA"],
      a: 1,
      why: ["UVA does not drive the photolysis; and the substrate is 7-DHC, not cholesterol itself.",
            "Correct. UVB opens the B ring of 7-dehydrocholesterol to give previtamin D3, which thermally isomerises to cholecalciferol. Note that 7-DHC is the substrate of DHCR7 — the SLOS enzyme.",
            "Ergosterol is the fungal/plant precursor of vitamin D2.",
            "Lanosterol is an intermediate of cholesterol synthesis, not a vitamin D precursor."] },
    { tier: 2, q: "The rate-limiting step in acute steroidogenesis is:",
      opts: ["CYP11A1 side-chain cleavage", "StAR-mediated cholesterol transfer to the inner mitochondrial membrane", "LDL receptor-mediated cholesterol uptake", "Cholesteryl ester hydrolysis by hormone-sensitive lipase"],
      a: 1,
      why: ["CYP11A1 performs the first enzymatic step but is not rate-limiting; it waits for substrate.",
            "Correct. The bottleneck is physical transport across the aqueous intermembrane space. StAR is acutely hormone-induced, which is what makes steroidogenesis rapid. Its deficiency causes lipoid congenital adrenal hyperplasia.",
            "One of three redundant supply routes, and not rate-limiting.",
            "A mobilisation step, but not the acute bottleneck."] },
    { tier: 2, q: "A patient on evolocumab has LDL-C of 22 mg/dL and is worried about hormone deficiency. The best mechanistic reassurance is that steroidogenic tissues:",
      opts: ["Do not use cholesterol for hormone synthesis", "Have three independent cholesterol supply routes plus local synthesis, all under SREBP-2 control", "Store enough cholesterol to last a lifetime", "Receive cholesterol from the brain via apoE"],
      a: 1,
      why: ["They absolutely do use cholesterol.",
            "Correct. LDL receptor uptake, SR-B1 selective uptake from HDL, de novo synthesis, and stored cholesteryl ester droplets. Removing one input triggers compensation via the others. Patients with abetalipoproteinaemia, who have essentially no apoB particles, still make steroid hormones.",
            "Stores are meaningful but finite and would not sustain lifelong synthesis alone.",
            "Brain cholesterol does not leave the CNS in that direction; this is backwards."] },
    { tier: 3, q: "A 34-year-old has bilateral Achilles tendon xanthomas, juvenile cataracts, chronic diarrhoea and progressive ataxia. Total cholesterol is 165 mg/dL. The diagnosis is most likely:",
      opts: ["Heterozygous familial hypercholesterolaemia", "Sitosterolaemia", "Cerebrotendinous xanthomatosis (CYP27A1 deficiency)", "Homozygous familial hypercholesterolaemia"],
      a: 2,
      why: ["HeFH does not cause juvenile cataracts, diarrhoea or ataxia, and cholesterol would be substantially higher.",
            "Sitosterolaemia gives xanthomas and haematological abnormalities, but not cataracts and progressive neurological decline.",
            "Correct. CTX is the classic triad-plus: tendon xanthomas, juvenile cataracts, chronic diarrhoea and progressive neurological deterioration, with normal or low cholesterol because the defect is in bile acid synthesis (cholestanol accumulates). Treatable with chenodeoxycholic acid — and routinely missed for a decade or more, which is why it is worth knowing.",
            "HoFH gives LDL-C above 400-500 mg/dL and childhood ASCVD."] },
    { tier: 3, q: "LXR agonists have not become lipid drugs despite upregulating ABCA1 and ABCG1, because they also:",
      opts: ["Cause severe myopathy", "Induce SREBP-1c, producing hepatic steatosis and hypertriglyceridaemia", "Suppress LDL receptor expression", "Are not orally bioavailable"],
      a: 1,
      why: ["Myopathy is not the limiting toxicity.",
            "Correct. LXR activation drives a coordinated cholesterol-efflux programme (desirable) but simultaneously induces SREBP-1c lipogenesis (undesirable). Achieving selectivity between LXR-alpha and LXR-beta effects has been the field's stumbling block.",
            "LXR induces IDOL, which does degrade LDLR — a real problem, but the steatosis is the classic answer.",
            "Bioavailability has not been the principal obstacle."] }
  ]
},

/* ===================== MODULE 6 ===================== */
{
  id: 6, part: 2,
  title: "Applied Physiology: How LDL Builds a Plaque, and How We Know It Is Causal",
  tagline: "The intellectual spine of the course. Response-to-retention, cumulative exposure, and the three-legged proof.",
  hook: "Association is cheap. Causation is expensive. Here is how lipidology paid for it.",
  time: { t1: 55, t2: 45, t3: 35 },
  objectives: [
    { tier: 1, text: "Sequence atherogenesis from endothelial dysfunction to plaque rupture and thrombosis." },
    { tier: 1, text: "State the three-legged argument for LDL causality in plain language." },
    { tier: 2, text: "Explain the response-to-retention hypothesis and the role of proteoglycan binding and scavenger receptors." },
    { tier: 2, text: "Apply the cumulative exposure model and explain why earlier intervention matters disproportionately." },
    { tier: 3, text: "Evaluate the Mendelian randomisation evidence and the log-linear CTT relationship." },
    { tier: 3, text: "Discuss residual inflammatory risk and why direct anti-inflammatory therapy has largely disappointed." }
  ],
  sections: [
    { tier: 1, h: "The sequence", html: `
<ol>
<li><strong>Endothelial dysfunction or injury.</strong> Disturbed flow at branch points and curvatures, plus smoking, hypertension, hyperglycaemia. Reduced nitric oxide bioavailability; increased permeability and adhesion molecule expression.</li>
<li><strong>LDL entry and retention.</strong> ApoB-containing particles cross into the subendothelial intima and are <strong>trapped</strong> by binding to intimal proteoglycans.</li>
<li><strong>Modification.</strong> Retained LDL is oxidised and enzymatically modified. Modified LDL is now immunogenic and pro-inflammatory.</li>
<li><strong>Monocyte recruitment.</strong> VCAM-1, ICAM-1, selectins, MCP-1. Monocytes roll, adhere, transmigrate and differentiate into macrophages.</li>
<li><strong>Foam cell formation.</strong> Macrophages ingest modified LDL through <strong>scavenger receptors (SR-A, CD36, LOX-1)</strong>.</li>
<li><strong>Fatty streak.</strong> Visible in the aorta of many people by their twenties. Still reversible.</li>
<li><strong>Fibrous plaque.</strong> Smooth muscle cells migrate from media to intima and lay down collagen, forming a fibrous cap over a growing lipid core.</li>
<li><strong>Necrotic core.</strong> Foam cells die; failed clearance of apoptotic debris (defective efferocytosis) leaves a lipid-rich, thrombogenic necrotic core.</li>
<li><strong>Rupture or erosion.</strong> A thin cap, inflamed at the shoulders and degraded by matrix metalloproteinases, tears. Or the endothelium erodes without rupture.</li>
<li><strong>Thrombosis.</strong> Tissue factor meets blood. Myocardial infarction or ischaemic stroke.</li>
</ol>
<div class="keybox">
  <div class="eyebrow">Note what step 5 tells you</div>
  <p>The LDL receptor is downregulated when a cell has enough cholesterol. <strong>Scavenger receptors are not.</strong> There is no feedback inhibition on scavenger uptake of modified LDL — which is exactly why macrophages engorge themselves to death rather than stopping when full. Foam cells exist because of a missing brake.</p>
</div>` },
    { figure: 'atherogenesis' },
    { tier: 1, h: "The three legs of the causality argument", html: `
<p>Every clinician should be able to give this in ninety seconds, without notes, to a sceptical patient or a sceptical colleague.</p>
<div class="tablewrap"><table>
<thead><tr><th>Leg</th><th>Plain-language version</th><th>What it rules out</th></tr></thead>
<tbody>
<tr><td><strong>1. Genetics</strong></td><td>People born with naturally lower LDL are protected from heart attacks for their whole lives. People born with high LDL (familial hypercholesterolaemia) have heart attacks in their thirties and forties.</td><td>Reverse causation. Your genotype was fixed at conception; disease cannot have caused it.</td></tr>
<tr><td><strong>2. Trials</strong></td><td>When we lower LDL with a drug, events fall. This has now been shown with statins, ezetimibe, PCSK9 inhibitors, bempedoic acid and bile acid sequestrants — five completely different mechanisms.</td><td>Confounding, and any drug-specific explanation.</td></tr>
<tr><td><strong>3. Dose-response</strong></td><td>The bigger the LDL reduction and the longer it lasts, the bigger the benefit — in a straight line, with no threshold found so far.</td><td>Chance. A graded, reproducible dose-response is very hard to produce by accident.</td></tr>
</tbody></table></div>` },
    { tier: 2, h: "Response to retention", html: `
<p>The dominant modern framework, and a meaningful improvement on the older "response to injury" hypothesis.</p>
<p>The initiating event is not injury but <strong>subendothelial retention of apoB-containing lipoproteins</strong> through ionic interaction between positively charged residues on apoB and negatively charged sulphate groups on intimal proteoglycans (biglycan, decorin, versican).</p>
<p>Three consequences follow, each with a clinical corollary:</p>
<ul>
<li><strong>Retention time matters as much as concentration.</strong> A particle that lingers has more opportunity to be oxidised. This is one reason small dense LDL — which binds proteoglycans more avidly and resides longer — is more atherogenic per particle.</li>
<li><strong>All apoB particles can do this, not just LDL.</strong> Remnants, IDL and Lp(a) are retained by the same mechanism. Hence the shift toward apoB and non-HDL-C as targets, and the retitling of the 2026 ACC/AHA guideline to cover "dyslipidemia" rather than "blood cholesterol".</li>
<li><strong>Below a certain concentration, retention is negligible.</strong> Populations with lifelong LDL-C below roughly 50-70 mg/dL essentially do not develop atherosclerosis. There is no evidence of a lower threshold at which LDL stops mattering.</li>
</ul>` },
    { tier: 2, h: "Cumulative exposure: the cholesterol-year", html: `
<p>Atherosclerosis is a function of <strong>concentration multiplied by time</strong>. Think of it as pack-years for lipids.</p>
<p>Suppose the disease threshold is a notional 8,000 mg-years/dL of LDL exposure:</p>
<div class="tablewrap"><table>
<thead><tr><th>Lifelong LDL-C</th><th>Age at which threshold is crossed</th></tr></thead>
<tbody>
<tr><td class="num">190 mg/dL (untreated FH)</td><td class="num">~42 years</td></tr>
<tr><td class="num">130 mg/dL (typical)</td><td class="num">~62 years</td></tr>
<tr><td class="num">100 mg/dL</td><td class="num">~80 years</td></tr>
<tr><td class="num">70 mg/dL</td><td class="num">Never, within a normal lifespan</td></tr>
</tbody></table></div>
<p class="note">The figures are illustrative, not clinical thresholds, but the shape of the relationship is real and is drawn directly from the Mendelian randomisation data.</p>
<div class="keybox">
  <div class="eyebrow">Why this changes practice</div>
  <p>Two implications, both now embedded in the 2026 ACC/AHA guideline. <strong>First, start earlier.</strong> A 30-year-old treated for 40 years accrues far more benefit than a 70-year-old treated for 10 — which is why that guideline emphasises lifestyle from childhood, pharmacotherapy in young adults with LDL-C at or above 160 mg/dL or a strong family history, and 30-year risk estimation alongside 10-year. <strong>Second, 10-year risk systematically underserves the young.</strong> A 35-year-old with LDL-C 190 has a trivial 10-year risk and a catastrophic lifetime risk. This is precisely the reasoning that led the Lipid Association of India to abandon 10-year risk altogether (Module 13).</p>
</div>` },
    { tool: 'exposure-sim' },
    { tier: 3, h: "Mendelian randomisation, properly understood", html: `
<p>Alleles are assigned at conception, independently of later confounders. A genetic variant that lowers LDL-C therefore functions as a naturally randomised, lifelong trial — nature's own RCT.</p>
<div class="tablewrap"><table>
<thead><tr><th>Gene</th><th>Variant effect</th><th>Observed phenotype</th></tr></thead>
<tbody>
<tr><td><em>PCSK9</em></td><td>Loss of function</td><td>Modestly lower LDL-C lifelong; substantially reduced CHD risk. The observation that launched an entire drug class.</td></tr>
<tr><td><em>HMGCR</em></td><td>Variants mimicking statin effect</td><td>Lower LDL-C, lower CHD risk, and a small increase in body weight and diabetes risk — which predicted the statin-diabetes signal before the trials confirmed it.</td></tr>
<tr><td><em>NPC1L1</em></td><td>Loss of function</td><td>Lower LDL-C, lower CHD risk — predicted IMPROVE-IT.</td></tr>
<tr><td><em>LDLR</em></td><td>Loss of function (FH)</td><td>Markedly higher LDL-C, premature CHD. The causal argument in its purest form.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The crucial quantitative insight</div>
  <p>Per unit of LDL-C lowering, <strong>genetic variants confer roughly three times the risk reduction seen in short-term drug trials.</strong> The variants are not more potent. They act for <em>eighty years</em> rather than five. This is the strongest available proof of the cumulative-exposure model, and it is why the field has moved toward earlier and longer treatment.</p>
</div>
<p class="note">Note also what MR has ruled <em>out</em>: variants raising HDL-C confer no protection. The same method that validated LDL invalidated HDL. That symmetry is what makes it credible.</p>` },
    { tier: 3, h: "The CTT log-linear relationship", html: `
<p>The Cholesterol Treatment Trialists' Collaboration meta-analyses of individual participant data across statin trials established the field's central quantitative law:</p>
<div class="keybox">
  <p><strong>Approximately a 22% proportional reduction in major vascular events per 1 mmol/L (about 39 mg/dL) reduction in LDL-C, per year of treatment</strong> — with benefit accruing progressively over time, and no evidence of a threshold below which further lowering ceases to help.</p>
</div>
<p>Later analyses extended the same relationship to non-statin LDL-lowering agents, supporting the "LDL hypothesis" in its strong form: <em>the mechanism of lowering does not matter; the absolute magnitude and duration of the reduction do.</em></p>
<p>Two caveats a Tier-3 learner should carry:</p>
<ul>
<li>The relationship is proportional, so <strong>absolute benefit depends on baseline absolute risk</strong>. A 22% relative reduction is worth far more to a post-MI patient than to a low-risk 40-year-old.</li>
<li>Benefit accrues with time. First-year benefit is smaller than steady-state benefit — which is why short trials underestimate lifetime effect and why life-expectancy matters in the elderly (Module 14).</li>
</ul>` },
    { tier: 3, h: "Residual inflammatory risk — and the 2026 disappointment", html: `
<p>Even at very low LDL-C, events continue to occur. Elevated hs-CRP identifies patients at higher residual risk. The obvious inference was that treating inflammation directly should help. The record is uncomfortable:</p>
<div class="tablewrap"><table>
<thead><tr><th>Trial</th><th>Agent / target</th><th>Result</th></tr></thead>
<tbody>
<tr><td><strong>JUPITER</strong></td><td>Rosuvastatin in low LDL-C, high hs-CRP</td><td>Positive — but the agent lowers LDL-C too, so the inflammatory contribution is unresolvable.</td></tr>
<tr><td><strong>CANTOS</strong></td><td>Canakinumab, IL-1beta</td><td>Modest MACE reduction without LDL-C change. Proof of principle — but the effect was small and fatal infections increased.</td></tr>
<tr><td><strong>COLCOT / LoDoCo2</strong></td><td>Low-dose colchicine</td><td>Positive. Cheap, generic, and of real interest in low-resource settings.</td></tr>
<tr><td><strong>ZEUS (2026)</strong></td><td>Ziltivekimab, IL-6</td><td><strong>Null. HR 0.99</strong>, despite unambiguous target engagement with the expected falls in IL-6 and hs-CRP.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">Sit with this</div>
  <p>ZEUS is the most instructive result in recent lipidology precisely because it failed. The drug did exactly what it was designed to do at the molecular level, in a population selected for the biomarker, and it did not prevent events. Either the inflammatory hypothesis is wrong, the node in the pathway is wrong, or the population (ASCVD plus CKD) was wrong. <strong>We do not currently know which.</strong> HERMES (heart failure) and ARTEMIS (post-MI) read out in the first half of 2027 and may discriminate.</p>
  <p style="margin-top:8px">Module 12 treats this as a journal club. For now, notice the epistemic lesson: a validated biomarker, a confirmed mechanism, and clean target engagement together still do not guarantee clinical benefit. This is the same lesson that HDL-raising taught, and the field had to learn it twice.</p>
</div>` }
  ],
  unknown: "Why residual risk persists at very low LDL-C, and why direct IL-6 blockade failed in ZEUS after IL-1beta blockade succeeded modestly in CANTOS.",
  readings: [
    { tier: 2, cite: "Ference BA et al. Low-density lipoproteins cause atherosclerotic cardiovascular disease. EAS Consensus Panel. Eur Heart J 2017;38:2459-72.", why: "The single most important paper in the course. Read it twice.", url: "https://pubmed.ncbi.nlm.nih.gov/28444290/" },
    { tier: 2, cite: "Libby P. The changing landscape of atherosclerosis. Nature 2021;592:524-33.", why: "Modern pathobiology from the person who defined much of it.", url: "" },
    { tier: 3, cite: "Cholesterol Treatment Trialists' Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol. Lancet 2010;376:1670-81.", why: "The log-linear law, in its original form.", url: "" },
    { tier: 3, cite: "Tabas I, Williams KJ, Boren J. Subendothelial lipoprotein retention as the initiating process in atherosclerosis. Circulation 2007;116:1832-44.", why: "Response-to-retention, stated definitively.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Macrophages become foam cells rather than stopping when full because:",
      opts: ["LDL receptors are upregulated by cholesterol loading", "Scavenger receptors are not subject to feedback downregulation by cellular cholesterol", "Macrophages cannot esterify cholesterol", "Modified LDL cannot be hydrolysed in lysosomes"],
      a: 1,
      why: ["LDL receptors are downregulated by cholesterol loading — that is the point of the SREBP-2 thermostat.",
            "Correct. SR-A, CD36 and LOX-1 take up modified LDL without feedback inhibition. The missing brake is why the cell engorges to the point of death. This single fact explains foam cell formation.",
            "They can and do esterify it — that is what gives the foamy appearance.",
            "It can be hydrolysed; the problem is the rate of entry, not the processing."] },
    { tier: 1, q: "Which of the following best states the genetic leg of the LDL causality argument?",
      opts: ["Statin trials show fewer events in treated patients", "People born with genetically lower LDL-C have lifelong protection from coronary disease, and people with FH have premature disease", "LDL-C correlates with coronary disease in observational cohorts", "Lowering LDL-C improves endothelial function"],
      a: 1,
      why: ["That is the trial leg, not the genetic leg.",
            "Correct. Because genotype is fixed at conception, this design excludes reverse causation and most confounding. It is the strongest single leg of the three.",
            "That is observational epidemiology, which is exactly what the genetic and trial evidence was needed to upgrade.",
            "A mechanistic surrogate, not a causality argument. Improving a surrogate is what niacin and torcetrapib did."] },
    { tier: 2, q: "A 35-year-old has untreated LDL-C of 190 mg/dL. His 10-year risk score is under 2%. The correct interpretation is:",
      opts: ["He is low risk and needs no treatment", "The 10-year window is the wrong frame; his cumulative exposure is already accruing rapidly and his lifetime risk is very high", "He should be rescreened at age 50", "The score is wrong and should be recalculated"],
      a: 1,
      why: ["This is the error the cumulative-exposure model exists to prevent. Ten-year risk is dominated by age, so it is near-blind in the young.",
            "Correct. At 190 mg/dL he accrues cholesterol-years roughly twice as fast as someone at 100. This reasoning underpins the 2026 ACC/AHA recommendation to consider pharmacotherapy in young adults with LDL-C at or above 160, and the Lipid Association of India's decision to use lifetime rather than 10-year risk.",
            "Waiting 15 years wastes the period in which treatment is most valuable per year given.",
            "The score is arithmetically correct; it is being asked the wrong question."] },
    { tier: 2, q: "Response-to-retention holds that the initiating event in atherosclerosis is:",
      opts: ["Endothelial denudation by shear stress", "Subendothelial retention of apoB-containing lipoproteins by intimal proteoglycans", "Monocyte adhesion to activated endothelium", "Smooth muscle cell proliferation"],
      a: 1,
      why: ["Injury facilitates but does not initiate; frank denudation is not required.",
            "Correct. Ionic binding between apoB and proteoglycan sulphate groups traps the particle, and everything downstream — modification, monocyte recruitment, foam cells — follows from retention. It also explains why all apoB particles, not just LDL, are atherogenic.",
            "This is step 4, downstream of retention and modification.",
            "A later, reparative event that produces the fibrous cap."] },
    { tier: 3, q: "Per unit of LDL-C lowering, Mendelian randomisation studies show roughly three times the risk reduction seen in statin RCTs. The best explanation is:",
      opts: ["Genetic variants lower LDL-C more potently than statins", "Genetic effects operate lifelong, whereas trials run for around five years — confirming the cumulative-exposure model", "RCTs are confounded by non-adherence", "Genetic studies overestimate effects due to population stratification"],
      a: 1,
      why: ["Potency is not the issue; the comparison is already per unit of LDL-C lowering.",
            "Correct. Duration, not magnitude, explains the discrepancy. This is the single strongest quantitative support for the cholesterol-year model and the reason the field has shifted toward earlier and longer treatment.",
            "Non-adherence dilutes trial effects somewhat, but nowhere near threefold.",
            "Modern MR studies control for stratification, and the finding is consistent across many loci and populations."] },
    { tier: 3, q: "The ZEUS trial (2026) found that ziltivekimab lowered IL-6 and hs-CRP as expected but produced a MACE hazard ratio of 0.99. The most defensible conclusion is:",
      opts: ["Inflammation plays no role in atherosclerosis", "hs-CRP is not a valid biomarker of anything", "Target engagement and biomarker reduction do not guarantee clinical benefit; whether the hypothesis, the node, or the population was wrong remains unresolved", "IL-6 inhibition is harmful in ASCVD"],
      a: 2,
      why: ["Too strong. CANTOS, COLCOT and LoDoCo2 all support some role for inflammation.",
            "hs-CRP remains a robust prognostic marker; the failure was of intervention, not of prognostication.",
            "Correct. This is the honest reading, and it is the epistemic lesson of the module. A confirmed mechanism, a validated biomarker and clean target engagement still did not prevent events. HERMES and ARTEMIS in 2027 may discriminate between the competing explanations.",
            "The trial showed a null result, not harm."] }
  ]
}

];
