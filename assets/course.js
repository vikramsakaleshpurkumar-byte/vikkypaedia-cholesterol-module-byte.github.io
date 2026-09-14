/* ==========================================================================
   COURSE METADATA, FIGURES, CAPSTONE, REFERENCES
   ========================================================================== */

window.COURSE = {
  title: "Cholesterol: From Molecule to Management",
  subtitle: "A tiered, evidence-anchored course in lipid biology, dyslipidaemia and lipid-lowering therapy.",
  version: "1.1",
  currentAsOf: "September 2026",
  evidenceNote: "Evidence current to September 2026: 2026 ACC/AHA Dyslipidemia Guideline, 2025 ESC/EAS Focused Update, LAI Consensus Statement IV, CSI 2024, VESALIUS-CV, ZEUS, enlicitide approval, and the negative Lp(a)HORIZON topline result.",
  parts: [
    { n: 1, roman: "I",   name: "The Molecule",          blurb: "Structure, synthesis, absorption." },
    { n: 2, roman: "II",  name: "The Traffic System",    blurb: "Lipoproteins, physiology, atherogenesis." },
    { n: 3, roman: "III", name: "The Clinic",            blurb: "Measurement, disorders, risk." },
    { n: 4, roman: "IV",  name: "The Pharmacology",      blurb: "Statins, non-statins, frontier." },
    { n: 5, roman: "V",   name: "Context and Integration", blurb: "India, special populations, cases." }
  ],
  tiers: {
    1: { name: "Must know",  short: "MUST", desc: "If you forget this, you will make a clinical or conceptual error. Examinable at every level." },
    2: { name: "Nice to know", short: "NICE", desc: "Changes how you reason, not merely what you recall. Needed to individualise therapy." },
    3: { name: "Good to know", short: "GOOD", desc: "Frontier, mechanism-deep or historically illuminating. Needed to teach, to sit a subspecialty exam, or to read a trial critically." }
  },
  certificates: [
    { id: "foundation", name: "Foundation Certificate", tiers: [1], pass: 70,
      desc: "Tier 1 across all 14 modules. An approximately 11-hour grounding for students, interns, allied health and informed learners." },
    { id: "practitioner", name: "Practitioner Certificate", tiers: [1,2], pass: 75,
      desc: "Tiers 1 and 2. For residents, GPs, clinical pharmacists and dietitians who make lipid decisions." },
    { id: "advanced", name: "Advanced Certificate", tiers: [1,2,3], pass: 80,
      desc: "All three tiers plus the capstone. For fellows, faculty, researchers and exam candidates." }
  ]
};

/* ---------- Capstone cases ---------- */
window.CAPSTONE = [
  { n: 1, tier: 1, title: "Incidental hypercholesterolaemia",
    stem: "A 52-year-old accountant, non-smoker, BP 128/78, no diabetes, no family history. Routine LDL-C 165 mg/dL, HDL-C 52, TG 110. He feels well and is unenthusiastic about tablets.",
    asks: ["Estimate his risk. Which tool, and why?", "What additional test would most change your management?", "Draft the two sentences you would use to present the absolute benefit."],
    teaches: "Primary prevention, PREVENT thresholds, coronary calcium, absolute versus relative risk." },
  { n: 2, tier: 1, title: "Three weeks after a myocardial infarction",
    stem: "A 61-year-old, three weeks post-anterior STEMI and PCI. Discharged on atorvastatin 40 mg. LDL-C today 96 mg/dL. He was on no lipid therapy before the event.",
    asks: ["What is his LDL-C goal, under which guideline, and why?", "What is your next therapeutic step, and what does the arithmetic predict?", "What does the 2025 ESC/EAS focused update say about the timing of combination therapy here?"],
    teaches: "Secondary prevention goals, upfront combination, fire-to-target, the rule of 6." },
  { n: 3, tier: 1, title: "A child with tendon xanthomas",
    stem: "A 14-year-old boy. LDL-C 240 mg/dL. His father died of a myocardial infarction at 41. On examination there is thickening of both Achilles tendons.",
    asks: ["Calculate his Dutch Lipid Clinic Network score.", "What is the single highest-yield action after treating him?", "At what age should statin therapy have started, and what is the target?"],
    teaches: "FH diagnosis, DLCN scoring, cascade screening, paediatric treatment." },
  { n: 4, tier: 2, title: "Triglycerides of 1,850",
    stem: "A 47-year-old with poorly controlled type 2 diabetes, drinking most evenings, presents with epigastric pain. TG 1,850 mg/dL. Serum is lipaemic. Amylase mildly raised.",
    asks: ["What is the immediate risk, and is it the same as his ASCVD risk?", "Outline your acute management in order.", "Once stable, how do you distinguish FCS from multifactorial chylomicronaemia, and does it change treatment?"],
    teaches: "Pancreatitis prevention, secondary causes, the FCS/MCS distinction, fibrate versus statin roles." },
  { n: 5, tier: 2, title: "Three statins, three failures",
    stem: "A 58-year-old with established coronary disease has stopped atorvastatin, rosuvastatin and simvastatin, each within six weeks, for generalised aching. CK normal each time. She is convinced statins are the problem. LDL-C 148 mg/dL.",
    asks: ["What must you check before accepting the label of statin intolerance?", "Design a dechallenge-rechallenge plan, including the exact words you would use.", "If she still cannot tolerate a statin, what is your regimen and what outcome evidence supports it?"],
    teaches: "SAMS algorithm, SAMSON and StatinWISE, alternate-day dosing, bempedoic acid and CLEAR Outcomes." },
  { n: 6, tier: 2, title: "At goal, and still worried",
    stem: "A 43-year-old software engineer. LDL-C 95 mg/dL on rosuvastatin 20 mg plus ezetimibe. Non-HDL-C 118. Lp(a) 140 nmol/L. His brother had a myocardial infarction at 44.",
    asks: ["Is he at goal? Under which guideline?", "What does his Lp(a) mean for his risk and for his management today?", "What do you tell him about the Lp(a) drug pipeline, and what do you tell his family?"],
    teaches: "Residual risk, Lp(a) interpretation, honest communication of therapeutic uncertainty, family screening." },
  { n: 7, tier: 3, title: "Coimbatore, on a budget",
    stem: "A 45-year-old man in Coimbatore. TG 280, HDL-C 30, LDL-C 112, apoB 118 mg/dL. BMI 26, waist 96 cm. Father had CABG at 52. He can spend about Rs 500 per month on medication in total.",
    asks: ["Why is his LDL-C misleading, and which number should you act on?", "Which guideline targets apply, and what are they?", "Construct a regimen within his budget, naming specific agents and approximate costs.", "What non-pharmacological intervention has the greatest expected effect in this phenotype, and why?"],
    teaches: "The Indian phenotype, apoB discordance, LAI and CSI targets, Jan Aushadhi economics, refined carbohydrate as the dietary lever." },
  { n: 8, tier: 3, title: "Nine medications and no ASCVD",
    stem: "A 79-year-old woman, no cardiovascular disease, on nine medications including atorvastatin 20 mg started 11 years ago for primary prevention. LDL-C 150 mg/dL. Moderate frailty, early cognitive impairment, recent falls. Her daughter asks whether all these tablets are necessary.",
    asks: ["Is continuing the statin supported by evidence in this patient?", "Frame the deprescribing conversation with the daughter present.", "Which of her nine medications would you address first, and why is the statin not necessarily top of the list?", "How will you document this so the next clinician does not simply restart it?"],
    teaches: "Deprescribing, competing risk, shared decision-making, the limits of the evidence above 75." }
];

/* ---------- Reference library ---------- */
window.REFERENCES = [
  { group: "Guidelines", items: [
    { cite: "2026 ACC/AHA/AACVPR/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA Guideline on the Management of Dyslipidemia. Blumenthal RS, Morris PB, Gaudino M, et al. JACC, published online 13 March 2026. doi:10.1016/j.jacc.2025.11.016", url: "https://www.jacc.org/doi/10.1016/j.jacc.2025.11.016" },
    { cite: "Same guideline in Circulation. doi:10.1161/CIR.0000000000001423", url: "https://www.ahajournals.org/doi/10.1161/CIR.0000000000001423" },
    { cite: "2025 Focused Update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. Eur Heart J 2025;46(42):4359. Evidence base to 31 March 2025.", url: "https://academic.oup.com/eurheartj/article/46/42/4359/8234482" },
    { cite: "Lipid Association of India 2023 update: Consensus Statement IV. J Clin Lipidol 2024. PMID 38485619", url: "https://pubmed.ncbi.nlm.nih.gov/38485619/" },
    { cite: "CSI clinical practice guidelines for dyslipidemia management (Cardiological Society of India, 2024).", url: "https://csi.org.in/frontend/assets/assets/CSI-clinical-practice-guidelines-for-dyslipidemia-_240413_141815.pdf" },
    { cite: "Editorial: Blumenthal RS, Morris PB. JACC 2026. doi:10.1016/j.jacc.2026.02.4869 — on VESALIUS-CV and the future of risk categories.", url: "https://www.jacc.org/doi/10.1016/j.jacc.2026.02.4869" }
  ]},
  { group: "Foundational science", items: [
    { cite: "Ference BA, Ginsberg HN, Graham I, et al. Low-density lipoproteins cause atherosclerotic cardiovascular disease. EAS Consensus Panel. Eur Heart J 2017;38:2459-72.", url: "https://pubmed.ncbi.nlm.nih.gov/28444290/" },
    { cite: "Goldstein JL, Brown MS. A century of cholesterol and coronaries: from plaques to genes to statins. Cell 2015;161:161-72.", url: "" },
    { cite: "Cholesterol Treatment Trialists' Collaboration. Efficacy and safety of more intensive lowering of LDL cholesterol. Lancet 2010;376:1670-81.", url: "" },
    { cite: "Tabas I, Williams KJ, Boren J. Subendothelial lipoprotein retention as the initiating process in atherosclerosis. Circulation 2007;116:1832-44.", url: "" },
    { cite: "Libby P. The changing landscape of atherosclerosis. Nature 2021;592:524-33.", url: "" }
  ]},
  { group: "Landmark and recent trials", items: [
    { cite: "VESALIUS-CV — evolocumab in high-risk primary prevention. Presented AHA, November 2025.", url: "https://www.acc.org/Latest-in-Cardiology/Articles/2025/11/03/16/19/sat-1010am-vesalius-aha-2025" },
    { cite: "FOURIER (evolocumab) and ODYSSEY OUTCOMES (alirocumab) — PCSK9 mAb secondary prevention.", url: "" },
    { cite: "IMPROVE-IT — ezetimibe. Cannon CP et al. NEJM 2015;372:2387-97.", url: "" },
    { cite: "CLEAR Outcomes — bempedoic acid in statin intolerance. Nissen SE et al. NEJM 2023.", url: "" },
    { cite: "REDUCE-IT and STRENGTH — read them together; the discrepancy is the lesson.", url: "" },
    { cite: "JUPITER; CANTOS; COLCOT / LoDoCo2; ZEUS (2026, null) — the inflammation arc.", url: "https://www.tctmd.com/news/zeus-trial-ziltivekimab-fails-reduce-mace-ascvd-patients" },
    { cite: "SAMSON. Wood FA et al. NEJM 2020;383:2182-4; StatinWISE. Herrett E et al. BMJ 2021;372:n135.", url: "https://pubmed.ncbi.nlm.nih.gov/33196154/" },
    { cite: "CORALreef Lipids and CORALreef HeFH — enlicitide. FDA approval 16 July 2026.", url: "https://www.tctmd.com/news/fda-approves-enlicitide-oral-pcsk9-inhibitor-ldl-lowering" },
    { cite: "Lp(a)HORIZON — pelacarsen did not meet its cardiovascular primary endpoint despite lowering Lp(a). Novartis topline announcement, 4 September 2026.", url: "https://www.novartis.com/news/media-releases/novartis-announces-lpahorizon-phase-iii-topline-results-pelacarsen-patients-elevated-lpa-and-established-cardiovascular-disease-cvd" },
    { cite: "AIM-HIGH; HPS2-THRIVE; the torcetrapib / dalcetrapib / evacetrapib series — the surrogate-endpoint cautionary canon.", url: "" }
  ]},
  { group: "India-specific", items: [
    { cite: "ICMR-INDIAB-17. Metabolic non-communicable disease health report of India. Lancet Diabetes Endocrinol 2023;11:474-89.", url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext" },
    { cite: "ICMR-INDIAB-25. Prevalence of dyslipidemia in India. J Clin Lipidol 2026. PMID 42547322", url: "https://pubmed.ncbi.nlm.nih.gov/42547322/" },
    { cite: "Role of Lipoprotein(a) in Atherosclerotic Cardiovascular Disease in South Asian Individuals. J Am Heart Assoc 2025. PMID 40654252", url: "https://pubmed.ncbi.nlm.nih.gov/40654252/" }
  ]}
];

/* ---------- Verification notes (course-author facing) ---------- */
window.VERIFY_NOTES = {
  verified: [
    "ACC/AHA 2026 exists, replaces the 2018 cholesterol guideline, retitled to Dyslipidemia — ACC.org journal scan 13 March 2026.",
    "PREVENT replaces the Pooled Cohort Equations; ages 30-79; 10- and 30-year risk.",
    "Treatment thresholds 3 to under 5 percent (reasonable) and 5 to under 10 percent (recommended).",
    "Restored LDL-C goals: under 100 / under 70 / under 55 mg/dL.",
    "CAC in men over 40 and women over 45; any CAC supports a goal under 100.",
    "Lp(a) once in adulthood; apoB for residual risk in CKM syndrome, T2D, high TG, known CVD.",
    "Inclisiran flagged in the guideline as awaiting outcomes data.",
    "CKD stage 3 or higher / HIV / diabetes at age 40 or over; continue during cancer; defer in pregnancy; TG at or above 1000 mg/dL.",
    "ESC/EAS 2025 risk modifiers now hs-CRP above 2 mg/L, Lp(a) above 50 mg/dL or above 105 nmol/L, subclinical coronary atherosclerosis. AF, LVH and CKD were REMOVED from that list.",
    "ESC/EAS 2025: statin plus ezetimibe at ACS index hospitalisation (IIa, B); bempedoic acid added; icosapent ethyl IIa B for TG 135-499 mg/dL.",
    "VESALIUS-CV numerical results — Amgen release November 2025 and ACC trial summary.",
    "Enlicitide FDA approval 16 July 2026; CORALreef figures.",
    "ZEUS null, HR 0.99, headline 31 July 2026 — Novo Nordisk company announcement.",
    "ICMR-INDIAB-17 prevalence 81.2 percent (77.9-84.5), n = 113,043.",
    "ICMR-INDIAB-25: 213.3 million and 185.7 million.",
    "LAI extreme risk categories A and B with the 30 mg/dL goals — Consensus Statement IV.",
    "CSI 2024: non-fasting advocated; very high risk under 55 mg/dL or non-HDL under 85.",
    "Approximately 25 percent of South Asians with Lp(a) above 50 mg/dL; MI about 10 years earlier; PCE classified South Asians as White.",
    "Lp(a)HORIZON topline result, 4 September 2026: pelacarsen lowered Lp(a) but did not reduce the composite cardiovascular primary endpoint versus placebo; full results remain pending."
  ],
  pending: [
    "Lp(a)HORIZON (pelacarsen) — topline primary endpoint was negative; full peer-reviewed results and prespecified subgroup analyses remain pending.",
    "OCEAN(a)-Outcomes (olpasiran) — confirmed ongoing by Amgen in August 2026; no outcomes result available.",
    "PREVAIL (obicetrapib) — interim analysis planned for Q4 2026, with a result expected in Q1 2027.",
    "ORION-4 (inclisiran) — cardiovascular outcomes remain pending. VICTORION-2P is also ongoing.",
    "CORALreef Outcomes (enlicitide) — ongoing, over 14,500 enrolled.",
    "HERMES and ARTEMIS (ziltivekimab) — topline H1 2027.",
    "LAI extreme-risk sub-categories: one secondary source referenced a category C with an ultra-low 10-15 mg/dL goal. This could not be corroborated and has been deliberately EXCLUDED. Read the CS-IV target table directly before teaching it.",
    "ESC/EAS goal for recurrent events (under 40 mg/dL) is carried forward from the 2019 guideline (Class IIb, second vascular event within two years). Confirm against the focused update's consolidated table.",
    "All guideline-comparison table cells were compiled from society summaries and secondary sources, not from side-by-side reading of the four primary documents. Verify before publication."
  ],
  hazard: "At least one automated summary encountered during research rendered the ESC Lp(a) threshold as 'LDL-cholesterol above 105 mmol/L' — a corrupted reading of 'Lp(a) above 105 nmol/L'. The correct figure (above 50 mg/dL or above 105 nmol/L) was confirmed directly from the ESC document. Treat AI- and aggregator-generated guideline summaries as leads, never as citations."
};

/* ==========================================================================
   FIGURES — inline SVG, consistent lipoprotein colour language
   ========================================================================== */
window.FIGURES = {

'cholesterol-roles': {
  caption: "The five destinations of cholesterol. Note that only bile acid and neutral sterol excretion actually removes cholesterol from the body.",
  svg: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram showing five physiological roles of cholesterol">
  <defs><style>
    .lbl{font:600 12px system-ui,sans-serif;fill:var(--ink)}
    .sub{font:400 10.5px system-ui,sans-serif;fill:var(--ink-3)}
    .ctr{font:700 14px system-ui,sans-serif;fill:#fff}
    .arw{stroke:var(--border-2);stroke-width:1.6;fill:none;marker-end:url(#ah)}
  </style>
  <marker id="ah" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
    <path d="M0,0 L8,4 L0,8 z" fill="var(--border-2)"/></marker></defs>
  <circle cx="350" cy="150" r="52" fill="var(--accent)" opacity="0.9"/>
  <text x="350" y="146" text-anchor="middle" class="ctr">CHOLESTEROL</text>
  <text x="350" y="164" text-anchor="middle" style="font:400 10px system-ui;fill:#fff;opacity:.85">C27 sterol</text>
  <line class="arw" x1="310" y1="112" x2="200" y2="60"/>
  <line class="arw" x1="390" y1="112" x2="500" y2="60"/>
  <line class="arw" x1="298" y1="150" x2="170" y2="150"/>
  <line class="arw" x1="310" y1="188" x2="200" y2="242"/>
  <line class="arw" x1="390" y1="188" x2="500" y2="242"/>
  <text x="190" y="46" text-anchor="end" class="lbl">Membranes</text>
  <text x="190" y="60" text-anchor="end" class="sub">fluidity buffer, lipid rafts</text>
  <text x="510" y="46" class="lbl">Steroid hormones</text>
  <text x="510" y="60" class="sub">via pregnenolone</text>
  <text x="160" y="146" text-anchor="end" class="lbl">Bile acids</text>
  <text x="160" y="160" text-anchor="end" class="sub">the only exit route</text>
  <text x="190" y="248" text-anchor="end" class="lbl">Vitamin D3</text>
  <text x="190" y="262" text-anchor="end" class="sub">7-DHC plus UVB</text>
  <text x="510" y="248" class="lbl">Myelin and neurons</text>
  <text x="510" y="262" class="sub">made in situ in CNS</text>
</svg>`
},

'enterohepatic': {
  caption: "The enterohepatic circulation. About 95% of bile acids return to the liver on each cycle; the ~5% lost is what the liver must replace by consuming cholesterol. Sequestrants exploit this.",
  svg: `<svg viewBox="0 0 700 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Enterohepatic circulation of bile acids">
  <defs><style>
    .box{fill:var(--surface-2);stroke:var(--border-2);stroke-width:1.5;rx:8}
    .t{font:700 12.5px system-ui,sans-serif;fill:var(--ink)}
    .s{font:400 10.5px system-ui,sans-serif;fill:var(--ink-3)}
    .f{stroke:var(--lp-hdl);stroke-width:2.4;fill:none;marker-end:url(#a2)}
    .d{stroke:var(--lp-ldl);stroke-width:2.4;fill:none;marker-end:url(#a3);stroke-dasharray:5 4}
    .drug{font:700 10.5px system-ui,sans-serif;fill:var(--lp-ldl)}
  </style>
  <marker id="a2" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="var(--lp-hdl)"/></marker>
  <marker id="a3" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 z" fill="var(--lp-ldl)"/></marker></defs>

  <rect class="box" x="60" y="30" width="180" height="76"/>
  <text x="150" y="56" text-anchor="middle" class="t">LIVER</text>
  <text x="150" y="74" text-anchor="middle" class="s">cholesterol to bile acids</text>
  <text x="150" y="90" text-anchor="middle" class="s">CYP7A1 (rate-limiting)</text>

  <rect class="box" x="460" y="30" width="180" height="76"/>
  <text x="550" y="56" text-anchor="middle" class="t">GALLBLADDER</text>
  <text x="550" y="74" text-anchor="middle" class="s">storage and</text>
  <text x="550" y="90" text-anchor="middle" class="s">postprandial release</text>

  <rect class="box" x="460" y="180" width="180" height="76"/>
  <text x="550" y="206" text-anchor="middle" class="t">DUODENUM / JEJUNUM</text>
  <text x="550" y="224" text-anchor="middle" class="s">mixed micelles</text>
  <text x="550" y="240" text-anchor="middle" class="s">NPC1L1 uptake</text>

  <rect class="box" x="60" y="180" width="180" height="76"/>
  <text x="150" y="206" text-anchor="middle" class="t">TERMINAL ILEUM</text>
  <text x="150" y="224" text-anchor="middle" class="s">ASBT reabsorption</text>
  <text x="150" y="240" text-anchor="middle" class="s">about 95% recovered</text>

  <path class="f" d="M240 68 L455 68"/>
  <path class="f" d="M550 106 L550 175"/>
  <path class="f" d="M460 218 L245 218"/>
  <path class="f" d="M150 180 L150 111"/>
  <text x="348" y="60" text-anchor="middle" class="s">bile</text>
  <text x="348" y="210" text-anchor="middle" class="s">bile acids in lumen</text>
  <text x="128" y="150" text-anchor="end" class="s">portal vein</text>

  <path class="d" d="M330 256 L330 300"/>
  <text x="340" y="284" class="s">about 5% lost per cycle</text>
  <text x="340" y="300" class="s">faecal excretion — the only exit</text>

  <rect x="255" y="228" width="150" height="24" rx="5" fill="var(--t1-bg)" stroke="var(--lp-ldl)" stroke-width="1.4"/>
  <text x="330" y="245" text-anchor="middle" class="drug">SEQUESTRANT blocks here</text>
</svg>`
},

'lipoprotein-classes': {
  caption: "Lipoprotein classes by size and density. Colours are used identically in every figure in this course. Diameters are approximate and not to scale.",
  svg: `<svg viewBox="0 0 700 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lipoprotein classes by size and density">
  <defs><style>
    .n{font:700 11.5px system-ui,sans-serif;fill:var(--ink);text-anchor:middle}
    .d{font:400 9.5px system-ui,sans-serif;fill:var(--ink-3);text-anchor:middle}
    .ax{font:600 10.5px system-ui,sans-serif;fill:var(--ink-3)}
  </style></defs>
  <line x1="40" y1="192" x2="660" y2="192" stroke="var(--border-2)" stroke-width="1.5"/>
  <text x="40" y="212" class="ax">Larger, less dense, more triglyceride</text>
  <text x="660" y="212" class="ax" text-anchor="end">Smaller, denser, more protein</text>

  <circle cx="95" cy="120" r="46" fill="var(--lp-cm)" opacity=".82"/>
  <text x="95" y="182" class="n">Chylomicron</text><text x="95" y="196" class="d">apoB-48</text>

  <circle cx="215" cy="130" r="34" fill="var(--lp-vldl)" opacity=".82"/>
  <text x="215" y="182" class="n">VLDL</text><text x="215" y="196" class="d">apoB-100</text>

  <circle cx="320" cy="138" r="25" fill="var(--lp-idl)" opacity=".82"/>
  <text x="320" y="182" class="n">IDL</text><text x="320" y="196" class="d">apoB-100, apoE</text>

  <circle cx="415" cy="143" r="20" fill="var(--lp-ldl)" opacity=".9"/>
  <text x="415" y="182" class="n">LDL</text><text x="415" y="196" class="d">apoB-100</text>

  <circle cx="505" cy="146" r="17" fill="var(--lp-lpa)" opacity=".9"/>
  <path d="M505 129 q14 -8 20 4 q-10 10 -20 -4" fill="var(--lp-lpa)" opacity=".6"/>
  <text x="505" y="182" class="n">Lp(a)</text><text x="505" y="196" class="d">plus apo(a)</text>

  <circle cx="595" cy="150" r="13" fill="var(--lp-hdl)" opacity=".9"/>
  <text x="595" y="182" class="n">HDL</text><text x="595" y="196" class="d">apoA-I</text>

  <text x="350" y="34" class="n" style="font-size:12.5px">Same architecture: non-polar core, amphipathic shell</text>
  <text x="350" y="50" class="d">The classes differ in core triglyceride:cholesteryl ester ratio and in surface apolipoproteins</text>
  <rect x="230" y="228" width="240" height="22" rx="5" fill="var(--t1-bg)" stroke="var(--t1-br)"/>
  <text x="350" y="243" class="n" style="fill:var(--t1);font-size:11px">One particle carries exactly one apoB</text>
</svg>`
},

'atherogenesis': {
  caption: "Atherogenesis. Note step 5: scavenger receptors have no feedback inhibition, which is why macrophages engorge to the point of death.",
  svg: `<svg viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stages of atherogenesis">
  <defs><style>
    .t{font:700 11px system-ui,sans-serif;fill:var(--ink);text-anchor:middle}
    .s{font:400 9.5px system-ui,sans-serif;fill:var(--ink-3);text-anchor:middle}
    .num{font:800 11px system-ui,sans-serif;fill:#fff;text-anchor:middle}
  </style></defs>
  <rect x="30" y="60" width="640" height="14" fill="var(--surface-2)" stroke="var(--border-2)"/>
  <text x="20" y="72" style="font:600 9.5px system-ui;fill:var(--ink-3);text-anchor:end">lumen</text>
  <rect x="30" y="74" width="640" height="70" fill="var(--accent-soft)" opacity=".5" stroke="var(--border)"/>
  <text x="20" y="114" style="font:600 9.5px system-ui;fill:var(--ink-3);text-anchor:end">intima</text>
  <rect x="30" y="144" width="640" height="16" fill="var(--surface-2)" stroke="var(--border)"/>
  <text x="20" y="156" style="font:600 9.5px system-ui;fill:var(--ink-3);text-anchor:end">media</text>

  <circle cx="90" cy="52" r="8" fill="var(--lp-ldl)"/>
  <path d="M90 60 L90 88" stroke="var(--lp-ldl)" stroke-width="1.8" marker-end="url(#a4)"/>
  <marker id="a4" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--lp-ldl)"/></marker>
  <circle cx="90" cy="96" r="8" fill="var(--lp-ldl)" opacity=".7"/>
  <circle cx="90" cy="200" r="12" fill="var(--navy)"/><text x="90" y="204" class="num">1-2</text>
  <text x="90" y="228" class="t">Entry and retention</text><text x="90" y="242" class="s">proteoglycan binding</text>

  <circle cx="230" cy="96" r="8" fill="var(--lp-ldl)" opacity=".5" stroke="var(--lp-ldl)" stroke-dasharray="2 2"/>
  <circle cx="248" cy="104" r="6" fill="var(--warn)"/>
  <circle cx="230" cy="200" r="12" fill="var(--navy)"/><text x="230" y="204" class="num">3</text>
  <text x="230" y="228" class="t">Modification</text><text x="230" y="242" class="s">oxidation</text>

  <circle cx="370" cy="52" r="7" fill="var(--lp-idl)"/>
  <path d="M370 60 L370 86" stroke="var(--lp-idl)" stroke-width="1.8"/>
  <circle cx="370" cy="98" r="11" fill="var(--lp-idl)" opacity=".8"/>
  <circle cx="370" cy="200" r="12" fill="var(--navy)"/><text x="370" y="204" class="num">4-5</text>
  <text x="370" y="228" class="t">Monocytes, foam cells</text><text x="370" y="242" class="s">no feedback on SR-A, CD36</text>

  <ellipse cx="510" cy="108" rx="42" ry="26" fill="var(--lp-ldl)" opacity=".28"/>
  <path d="M468 84 Q510 74 552 84" stroke="var(--ink-3)" stroke-width="3" fill="none"/>
  <circle cx="510" cy="200" r="12" fill="var(--navy)"/><text x="510" y="204" class="num">6-8</text>
  <text x="510" y="228" class="t">Plaque, necrotic core</text><text x="510" y="242" class="s">fibrous cap forms</text>

  <ellipse cx="628" cy="110" rx="34" ry="24" fill="var(--lp-ldl)" opacity=".3"/>
  <path d="M600 88 Q614 80 622 86 M636 84 Q648 82 656 90" stroke="var(--ink-3)" stroke-width="3" fill="none"/>
  <circle cx="628" cy="76" r="9" fill="var(--err)"/>
  <circle cx="628" cy="200" r="12" fill="var(--err)"/><text x="628" y="204" class="num">9-10</text>
  <text x="628" y="228" class="t">Rupture, thrombus</text><text x="628" y="242" class="s">MI or stroke</text>

  <text x="350" y="284" class="s" style="font-size:11px;fill:var(--ink-2)">Cumulative exposure — concentration multiplied by time — determines how fast this sequence advances</text>
</svg>`
}

};
