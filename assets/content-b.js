/* ==========================================================================
   COURSE CONTENT — PART B (Modules 7-14)
   ========================================================================== */

window.MODULES.push(

/* ===================== MODULE 7 ===================== */
{
  id: 7, part: 3,
  title: "Measuring Lipids Properly",
  tagline: "Fasting or not, three LDL-C equations, and the two numbers most reports leave you to work out yourself.",
  hook: "The same blood sample, run three ways, gives three different LDL-C values. One of them changes the patient's treatment.",
  time: { t1: 40, t2: 35, t3: 25 },
  objectives: [
    { tier: 1, text: "List the components of a standard lipid panel and calculate non-HDL-C." },
    { tier: 1, text: "State when fasting is and is not required." },
    { tier: 2, text: "Compare Friedewald, Martin-Hopkins and Sampson-NIH and identify where each fails." },
    { tier: 2, text: "State the current indications for apoB and Lp(a) measurement." },
    { tier: 3, text: "Discuss Lp(a) assay standardisation, mg/dL versus nmol/L, and biological variability." }
  ],
  sections: [
    { tier: 1, h: "What is on the report — and what is missing", html: `
<div class="tablewrap"><table>
<thead><tr><th>Measured or calculated</th><th>Component</th><th>Comment</th></tr></thead>
<tbody>
<tr><td>Measured</td><td>Total cholesterol</td><td>Enzymatic assay. Robust.</td></tr>
<tr><td>Measured</td><td>Triglycerides</td><td>The most fasting-sensitive component.</td></tr>
<tr><td>Measured</td><td>HDL-C</td><td>Direct homogeneous assay in most labs.</td></tr>
<tr><td><strong>Calculated</strong></td><td>LDL-C</td><td>Almost never measured directly. Which equation your lab uses matters.</td></tr>
<tr><td><strong>You must calculate</strong></td><td><strong>Non-HDL-C = TC minus HDL-C</strong></td><td>Free. No extra assay. Frequently absent from the printed report.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The single most under-used number in clinical medicine</div>
  <p><strong>Non-HDL-C</strong> captures the cholesterol in <em>every</em> apoB-containing particle — LDL, IDL, VLDL, remnants and Lp(a). It requires no extra test, no fasting, and no equation that can fail. In a patient with high triglycerides it is more informative than LDL-C, and both the Cardiological Society of India and the 2026 ACC/AHA guideline treat it as a co-target.</p>
  <p style="margin-top:8px">A practical rule: <strong>non-HDL-C goal = LDL-C goal + 30 mg/dL.</strong> So an LDL-C goal of 70 corresponds to a non-HDL-C goal of 100; a goal of 55 corresponds to 85.</p>
</div>` },
    { tier: 1, h: "Fasting: the answer has changed", html: `
<p><strong>Non-fasting sampling is now acceptable and preferred for routine screening and monitoring.</strong> This position is endorsed by the ESC/EAS, by the 2026 ACC/AHA guideline, and explicitly by the <strong>Cardiological Society of India 2024 guidelines</strong>, which advocate non-fasting measurement as standard.</p>
<h4>Why the change</h4>
<ul>
<li>Humans are postprandial for most of the waking day; the non-fasting state is the physiologically representative one.</li>
<li>Non-fasting triglycerides predict cardiovascular risk at least as well as fasting values, arguably better.</li>
<li>Fasting requirements cause missed tests, wasted clinic visits and lost follow-up — a substantial practical harm in high-volume, low-resource settings.</li>
</ul>
<h4>When you still need a fasting sample</h4>
<ul>
<li>Non-fasting triglycerides above ~400 mg/dL (4.5 mmol/L) — repeat fasting.</li>
<li>Investigating known or suspected severe hypertriglyceridaemia.</li>
<li>Assessing a patient for pancreatitis risk.</li>
<li>Some genetic dyslipidaemia workups.</li>
</ul>` },
    { tier: 2, h: "Three equations, three failure modes", html: `
<h3>Friedewald (1972)</h3>
<p><code>LDL-C = TC - HDL-C - (TG / 5)</code> &nbsp;(mg/dL; divide TG by 2.2 for mmol/L)</p>
<p>It assumes a fixed TG:VLDL-C ratio of 5:1. That assumption breaks in two directions:</p>
<ul>
<li><strong>Invalid when TG is above 400 mg/dL.</strong> Most labs will refuse to report it.</li>
<li><strong>Systematically underestimates LDL-C when LDL-C is low and TG is high</strong> — which describes precisely the patient already on a statin, and precisely the Indian phenotype. The clinical consequence is a patient falsely reported as at goal.</li>
</ul>
<h3>Martin-Hopkins (2013)</h3>
<p>Replaces the fixed divisor with an <strong>adjustable factor</strong> drawn from a 180-cell table, selected by the patient's own TG and non-HDL-C. Substantially more accurate below LDL-C 70 mg/dL. Increasingly the default in major laboratories.</p>
<h3>Sampson-NIH (2020)</h3>
<p>A regression equation derived against beta-quantification, validated up to <strong>TG 800 mg/dL</strong>. The best choice in hypertriglyceridaemic patients.</p>
<div class="flag warn"><strong>Practical instruction:</strong> find out which equation your laboratory uses, and print it on your clinic's request form. If a patient sits just above or just below a treatment threshold, recalculate by Martin-Hopkins before acting. The tool below does it for you.</div>` },
    { tool: 'lipid-calc' },
    { tier: 2, h: "apoB and Lp(a): when and why", html: `
<h4>Apolipoprotein B</h4>
<p>A direct count of atherogenic particles (Module 4). The <strong>2026 ACC/AHA guideline</strong> positions apoB to assess residual risk and guide treatment in people with <strong>cardiovascular-kidney-metabolic syndrome, type 2 diabetes, hypertriglyceridaemia, or established cardiovascular disease who have already reached their LDL-C and non-HDL-C goals</strong>. In those groups apoB may be a more accurate risk marker than LDL-C.</p>
<p>Rough concordance: apoB 80 mg/dL is approximately LDL-C 70; apoB 65 is approximately LDL-C 55.</p>
<h4>Lipoprotein(a)</h4>
<div class="keybox">
  <div class="eyebrow">A rare point of complete international agreement</div>
  <p><strong>Measure Lp(a) at least once in every adult's lifetime.</strong> The 2026 ACC/AHA guideline and the 2025 ESC/EAS focused update both now say this, and the Lipid Association of India has recommended it for longer given the high prevalence in Indians.</p>
  <p style="margin-top:8px">Lifestyle barely moves it; it is roughly 70-90% genetically determined. Repeat testing is generally unnecessary. A single result stratifies risk for life.</p>
</div>
<p><strong>Risk threshold (2025 ESC/EAS focused update): above 50 mg/dL or above 105 nmol/L.</strong> The focused update lists elevated Lp(a) alongside hs-CRP above 2 mg/L and subclinical coronary atherosclerosis as its refocused risk modifiers — and notably <em>removed</em> atrial fibrillation, left ventricular hypertrophy and chronic kidney disease from that particular list.</p>` },
    { tier: 3, h: "Lp(a) unit chaos", html: `
<p>This causes more clinical confusion than any other lipid measurement, and it is worth understanding rather than memorising a conversion factor.</p>
<ul>
<li><strong>mg/dL</strong> measures particle <em>mass</em>. Because apo(a) isoform size varies enormously with kringle IV type-2 copy number, a given mass can represent very different particle numbers. Isoform-dependent assays over-read in people with large isoforms and under-read in those with small ones.</li>
<li><strong>nmol/L</strong> measures particle <em>number</em> and is isoform-insensitive when performed with a properly calibrated assay. <strong>This is the preferred unit.</strong></li>
<li>There is <strong>no valid universal conversion factor</strong> between them. The frequently quoted 1 mg/dL = 2.5 nmol/L (or 2.0, or 2.4, depending on the source) is an approximation that fails in exactly the patients who matter most.</li>
</ul>
<p>Recommend reporting in nmol/L with an isoform-insensitive assay traceable to the WHO/IFCC reference material. If your laboratory reports mg/dL, note the assay and be consistent.</p>` },
    { tier: 3, h: "Variability, and the trap of the single value", html: `
<p>Intra-individual biological variability, approximate coefficients of variation:</p>
<div class="tablewrap"><table>
<thead><tr><th>Analyte</th><th>Biological CV</th><th>Implication</th></tr></thead>
<tbody>
<tr><td>Total cholesterol</td><td class="num">~6%</td><td>Stable enough for single-value decisions near thresholds.</td></tr>
<tr><td>LDL-C</td><td class="num">~8-10%</td><td>A value of 72 and a value of 66 may be the same patient on the same treatment.</td></tr>
<tr><td>HDL-C</td><td class="num">~7%</td><td>Fairly stable.</td></tr>
<tr><td>Triglycerides</td><td class="num">~20%</td><td>Never make a major decision on one triglyceride value.</td></tr>
</tbody></table></div>
<p>Add analytical variability on top. The practical rule: <strong>confirm before initiating lifelong therapy, and do not chase small fluctuations.</strong> Two measurements, one to four weeks apart, before committing.</p>
<h4>Other methods worth knowing by name</h4>
<ul>
<li><strong>Beta-quantification</strong> — ultracentrifugation plus precipitation. The reference method; research and specialist use only.</li>
<li><strong>Direct LDL-C assays</strong> — homogeneous methods, useful above TG 400, but poorly standardised between manufacturers.</li>
<li><strong>NMR spectroscopy and ion mobility</strong> — give particle number and subfraction distribution. Scientifically interesting, not yet guideline-endorsed for routine use. Do not order them because a patient asked.</li>
<li><strong>Lipoprotein electrophoresis</strong> — largely historical, retained for teaching the Fredrickson phenotypes.</li>
</ul>` }
  ],
  unknown: "Whether routine apoB or particle-number measurement, rather than LDL-C, would improve outcomes at population scale. It almost certainly improves classification; nobody has shown it improves events.",
  readings: [
    { tier: 2, cite: "Martin SS et al. Comparison of a novel method vs the Friedewald equation for estimating LDL-C. JAMA 2013;310:2061-8.", why: "The paper that should have changed your lab's software.", url: "" },
    { tier: 2, cite: "Nordestgaard BG et al. Fasting is not routinely required for a lipid profile. Eur Heart J 2016;37:1944-58.", why: "The joint EAS/EFLM consensus that ended the fasting era.", url: "" },
    { tier: 3, cite: "Sampson M et al. A new equation for calculation of LDL-C in patients with normolipidemia and/or hypertriglyceridemia. JAMA Cardiol 2020.", why: "The equation to use above TG 400.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "A patient has TC 210, HDL-C 38, TG 320 mg/dL. What is the non-HDL-C?",
      opts: ["172 mg/dL", "108 mg/dL", "146 mg/dL", "Cannot be calculated without LDL-C"],
      a: 0,
      why: ["Correct. Non-HDL-C = TC minus HDL-C = 210 minus 38 = 172. No equation, no fasting, no failure mode. With TG this high, this number is more trustworthy than any calculated LDL-C.",
            "This is roughly the Friedewald LDL-C (210 - 38 - 64 = 108), not the non-HDL-C.",
            "Arithmetic error. Subtract HDL-C from total cholesterol and nothing else; triglycerides do not enter the calculation.",
            "Non-HDL-C requires only TC and HDL-C. That is precisely its advantage — it needs no equation and therefore has no failure mode."] },
    { tier: 1, q: "Which patient genuinely requires a fasting lipid profile?",
      opts: ["A 45-year-old attending for routine cardiovascular screening", "A 55-year-old on atorvastatin attending for annual monitoring", "A 38-year-old whose non-fasting triglycerides came back at 620 mg/dL", "A 62-year-old with established coronary disease"],
      a: 2,
      why: ["Non-fasting is now preferred for routine screening.",
            "Non-fasting is entirely adequate for monitoring.",
            "Correct. Non-fasting TG above roughly 400 mg/dL should be repeated fasting, both to characterise the lipid disorder and to assess pancreatitis risk.",
            "Non-fasting is fine, and in a busy clinic it is the reason the test actually gets done."] },
    { tier: 2, q: "The Friedewald equation is most dangerously misleading in which situation?",
      opts: ["High LDL-C with low triglycerides", "Low LDL-C with high triglycerides", "Normal lipids in a healthy adult", "Isolated low HDL-C"],
      a: 1,
      why: ["Friedewald performs acceptably here.",
            "Correct. It systematically underestimates LDL-C when LDL-C is low and TG is high — exactly the patient already on a statin, and exactly the Indian atherogenic phenotype. The patient is reported at goal when they are not, and therapy is not intensified. Use Martin-Hopkins.",
            "Friedewald is fine in this setting.",
            "HDL-C is measured directly and enters the equation as a measured value."] },
    { tier: 2, q: "Which statement about Lp(a) measurement reflects current guidance?",
      opts: ["Measure annually in all adults", "Measure at least once in every adult's lifetime; repeat testing is generally unnecessary", "Measure only in patients with established ASCVD", "Do not measure until an approved Lp(a)-lowering therapy exists"],
      a: 1,
      why: ["Annual measurement is unnecessary and wasteful; the value is largely genetically fixed.",
            "Correct. Both the 2026 ACC/AHA guideline and the 2025 ESC/EAS focused update now recommend once-in-a-lifetime measurement. Lifestyle barely alters it.",
            "Too restrictive. Its value lies substantially in primary prevention risk refinement.",
            "A common but mistaken argument. Knowing Lp(a) changes how aggressively you treat the risk factors you CAN modify, and it triggers family screening."] },
    { tier: 3, q: "Lp(a) reported in mg/dL rather than nmol/L is problematic principally because:",
      opts: ["mg/dL assays are less precise", "Mass-based measurement is confounded by apo(a) isoform size, so a given mass represents variable particle numbers", "mg/dL cannot be measured in non-fasting samples", "The mg/dL scale has no established risk threshold"],
      a: 1,
      why: ["Precision is not the core issue; accuracy across isoforms is.",
            "Correct. Kringle IV type-2 copy number varies enormously between individuals. Isoform-dependent mass assays over-read in large-isoform carriers and under-read in small-isoform carriers — and small isoforms are the higher-risk group. This is why nmol/L with an isoform-insensitive assay is preferred, and why no valid universal conversion factor exists.",
            "Lp(a) is not meaningfully affected by fasting in either unit.",
            "A threshold does exist — the 2025 ESC/EAS focused update cites above 50 mg/dL or above 105 nmol/L."] },
    { tier: 3, q: "A patient's LDL-C was 72 mg/dL in March and 66 mg/dL in June on unchanged therapy. The correct interpretation is:",
      opts: ["The therapy has become more effective", "This difference is within expected biological and analytical variability and should not prompt action", "The March sample was probably non-fasting", "Adherence has improved"],
      a: 1,
      why: ["A single 8% change does not demonstrate increased efficacy.",
            "Correct. Intra-individual biological CV for LDL-C is roughly 8-10%, before analytical variability. A 6 mg/dL difference is noise. Chasing it wastes visits and undermines the patient's confidence in the numbers.",
            "Fasting status has little effect on LDL-C; it principally affects triglycerides.",
            "Possible, but unfalsifiable from these data and not the parsimonious reading."] }
  ]
},

/* ===================== MODULE 8 ===================== */
{
  id: 8, part: 3,
  title: "The Dyslipidaemias",
  tagline: "Familial hypercholesterolaemia, the secondary causes you must exclude, and the pancreatitis emergency.",
  hook: "A 12-year-old with tendon xanthomas. A 30-year-old with milky serum. A 55-year-old with LDL-C of 100 who has already had two stents. Three completely different diseases.",
  time: { t1: 45, t2: 40, t3: 30 },
  objectives: [
    { tier: 1, text: "Recognise familial hypercholesterolaemia clinically and list the secondary causes of dyslipidaemia." },
    { tier: 1, text: "Recognise severe hypertriglyceridaemia as a pancreatitis emergency distinct from ASCVD risk." },
    { tier: 2, text: "Apply the Dutch Lipid Clinic Network criteria and implement cascade screening." },
    { tier: 2, text: "Describe familial combined hyperlipidaemia and dysbetalipoproteinaemia." },
    { tier: 3, text: "Discuss genotype-phenotype correlation in FH and the management of homozygous FH." },
    { tier: 3, text: "Distinguish monogenic from multifactorial chylomicronaemia." }
  ],
  sections: [
    { tier: 1, h: "Always exclude secondary causes first", html: `
<div class="keybox">
  <div class="eyebrow">Before you label anything primary</div>
  <p>Secondary dyslipidaemia is common, often reversible, and routinely missed. Treating the cause may remove the need for a lipid drug entirely — and starting a statin in untreated hypothyroidism materially increases myopathy risk.</p>
</div>
<div class="tablewrap"><table>
<thead><tr><th>Category</th><th>Causes</th><th>Typical pattern</th></tr></thead>
<tbody>
<tr><td><strong>Endocrine</strong></td><td>Hypothyroidism, poorly controlled diabetes, Cushing syndrome, polycystic ovary syndrome, acromegaly</td><td>Hypothyroidism raises LDL-C; diabetes gives the atherogenic triad</td></tr>
<tr><td><strong>Renal</strong></td><td>Nephrotic syndrome, chronic kidney disease</td><td>Nephrotic syndrome causes marked LDL-C elevation</td></tr>
<tr><td><strong>Hepatic</strong></td><td>Cholestasis, primary biliary cholangitis, metabolic dysfunction-associated steatotic liver disease</td><td>Cholestasis raises cholesterol (lipoprotein X)</td></tr>
<tr><td><strong>Lifestyle</strong></td><td>Obesity, alcohol, high refined-carbohydrate intake, physical inactivity</td><td>Predominantly raises triglycerides</td></tr>
<tr><td><strong>Physiological</strong></td><td>Pregnancy</td><td>Physiological rise; do not treat</td></tr>
<tr><td><strong>Drugs</strong></td><td>Thiazides, corticosteroids, oestrogens (oral), retinoids, ciclosporin, tacrolimus, some antiretrovirals, atypical antipsychotics (olanzapine, clozapine), beta-blockers (non-vasodilating), tamoxifen</td><td>Variable; drug review is a five-minute intervention</td></tr>
</tbody></table></div>
<p class="note">Minimum screening workup before labelling a dyslipidaemia primary: TSH, fasting glucose or HbA1c, creatinine and eGFR, urine protein, liver function tests, and a careful medication history.</p>` },
    { tier: 1, h: "Familial hypercholesterolaemia", html: `
<p>Autosomal dominant in the great majority of cases. Prevalence of the heterozygous form is roughly <strong>1 in 250 to 1 in 300</strong> — commoner than type 1 diabetes. It is grossly underdiagnosed worldwide, and dramatically so in India.</p>
<h4>Recognise it by</h4>
<ul>
<li><strong>LDL-C at or above 190 mg/dL</strong> in an adult, or <strong>at or above 160 mg/dL</strong> in a child, without a secondary cause.</li>
<li><strong>Tendon xanthomas</strong> — Achilles tendon and extensor tendons of the hands. Pathognomonic when present. Palpate the Achilles tendon; it takes ten seconds and almost nobody does it.</li>
<li><strong>Corneal arcus before age 45.</strong></li>
<li><strong>Xanthelasma</strong> — suggestive but non-specific.</li>
<li><strong>Premature ASCVD in the patient or family</strong> — men under 55, women under 60.</li>
</ul>
<div class="keybox">
  <div class="eyebrow">The 2026 ACC/AHA position</div>
  <p>Early consideration of pharmacotherapy in <strong>youth with FH</strong>, and in <strong>young adults with LDL-C at or above 160 mg/dL or a strong family history of premature ASCVD</strong>. The cumulative-exposure logic from Module 6 is now explicit guideline policy.</p>
</div>` },
    { tier: 1, h: "Severe hypertriglyceridaemia: a different disease", html: `
<div class="flag err"><strong>Triglycerides at or above 1000 mg/dL (11.3 mmol/L) constitute a pancreatitis risk and are managed for that reason — separately from, and more urgently than, ASCVD risk.</strong> This is stated explicitly in the 2026 ACC/AHA guideline.</div>
<p>Immediate management of very severe hypertriglyceridaemia: nil by mouth or a very low fat diet, absolute alcohol abstinence, tight glycaemic control with insulin if diabetic, fibrate, omega-3 fatty acids, and treatment of any precipitating cause. Apheresis in extremis. Statins are not the acute answer here — although they remain the foundation for the ASCVD risk once the acute picture is controlled.</p>` },
    { tier: 2, h: "Dutch Lipid Clinic Network criteria", html: `
<div class="tablewrap"><table>
<thead><tr><th>Criterion</th><th>Points</th></tr></thead>
<tbody>
<tr><td><strong>Family history</strong></td><td></td></tr>
<tr><td>First-degree relative with premature CAD or vascular disease (men &lt;55, women &lt;60)</td><td class="num">1</td></tr>
<tr><td>First-degree relative with LDL-C above the 95th percentile</td><td class="num">1</td></tr>
<tr><td>First-degree relative with tendon xanthoma or arcus</td><td class="num">2</td></tr>
<tr><td>Child under 18 with LDL-C above the 95th percentile</td><td class="num">2</td></tr>
<tr><td><strong>Clinical history</strong></td><td></td></tr>
<tr><td>Premature coronary artery disease</td><td class="num">2</td></tr>
<tr><td>Premature cerebral or peripheral vascular disease</td><td class="num">1</td></tr>
<tr><td><strong>Physical examination</strong></td><td></td></tr>
<tr><td>Tendon xanthoma</td><td class="num">6</td></tr>
<tr><td>Corneal arcus before age 45</td><td class="num">4</td></tr>
<tr><td><strong>LDL-C (mg/dL)</strong></td><td></td></tr>
<tr><td>330 or above</td><td class="num">8</td></tr>
<tr><td>250-329</td><td class="num">5</td></tr>
<tr><td>190-249</td><td class="num">3</td></tr>
<tr><td>155-189</td><td class="num">1</td></tr>
<tr><td><strong>DNA analysis</strong></td><td></td></tr>
<tr><td>Causative mutation in LDLR, APOB or PCSK9</td><td class="num">8</td></tr>
</tbody></table></div>
<p><strong>Interpretation:</strong> above 8 = definite FH; 6-8 = probable; 3-5 = possible; below 3 = unlikely.</p>
<p class="note">Count only the highest-scoring item within each of the family history, clinical history and physical examination groups.</p>` },
    { tool: 'dlcn' },
    { tier: 2, h: "Cascade screening: the highest-yield act in preventive lipidology", html: `
<div class="keybox">
  <div class="eyebrow">If you do one thing after this course</div>
  <p>Every first-degree relative of an FH index case has a <strong>50% chance</strong> of carrying the variant. Systematic cascade screening typically identifies several affected relatives per index case, at trivial cost — a lipid panel — and each identification prevents decades of untreated exposure.</p>
  <p style="margin-top:8px">In a country where FH detection rates are in the low single-digit percentages, this is not a specialist activity. It is something any clinician can do at the next visit, on paper, with a family tree drawn on the back of the prescription.</p>
</div>
<p><strong>Practical protocol:</strong> confirm the index case &rarr; draw a three-generation pedigree &rarr; test all first-degree relatives (parents, siblings, children) with a lipid panel &rarr; use age- and sex-specific LDL-C cut-points in children &rarr; extend outward to second-degree relatives of anyone who tests positive &rarr; treat and repeat.</p>` },
    { tier: 2, h: "The other primary dyslipidaemias", html: `
<h4>Familial combined hyperlipidaemia</h4>
<p>The commonest genetic dyslipidaemia (roughly 1 in 100 to 1 in 200). Polygenic. Phenotype varies within the same person over time and between family members: raised LDL-C, raised TG, or both. <strong>ApoB is high out of proportion to LDL-C</strong> — the diagnostic clue, and the reason apoB should be measured in this group. Strongly associated with metabolic syndrome and with premature CAD.</p>
<h4>Dysbetalipoproteinaemia (type III, remnant removal disease)</h4>
<p>Requires <strong>apoE2/E2 homozygosity</strong> (present in ~1% of people) <em>plus a second metabolic hit</em> — obesity, diabetes, hypothyroidism, alcohol. Only a minority of E2/E2 individuals ever express it.</p>
<ul>
<li>Total cholesterol and triglycerides both elevated and roughly <strong>equimolar</strong>.</li>
<li><strong>Palmar xanthomas</strong> (yellow-orange discoloration of palmar creases) are near-pathognomonic; tuberoeruptive xanthomas over elbows and knees.</li>
<li>Highly atherogenic — but also strikingly responsive to fibrates, statins and weight loss. A satisfying diagnosis to make.</li>
</ul>
<h4>Elevated Lp(a)</h4>
<p>Roughly 70-90% genetically determined, essentially unresponsive to lifestyle, and the strongest single genetic risk factor for premature coronary disease. No approved specific therapy as of September 2026 (see Module 12). Management is aggressive control of everything else that is modifiable, plus family screening.</p>` },
    { tier: 3, h: "FH genotype and phenotype", html: `
<div class="tablewrap"><table>
<thead><tr><th>Gene</th><th>Inheritance</th><th>Share of monogenic FH</th><th>Note</th></tr></thead>
<tbody>
<tr><td><em>LDLR</em></td><td>Autosomal dominant</td><td>~85-90%</td><td>Over 2,000 reported variants. Receptor-negative (&lt;2% activity) versus receptor-defective (2-25%) determines response to LDLR-dependent drugs.</td></tr>
<tr><td><em>APOB</em></td><td>Autosomal dominant</td><td>~5-10%</td><td>Familial defective apoB-100; ligand-binding domain mutation. Generally milder.</td></tr>
<tr><td><em>PCSK9</em></td><td>Autosomal dominant</td><td>~1-3%</td><td>Gain-of-function. Rare, and severe.</td></tr>
<tr><td><em>LDLRAP1</em></td><td>Autosomal recessive</td><td>&lt;1%</td><td>Autosomal recessive hypercholesterolaemia; adaptor protein defect.</td></tr>
</tbody></table></div>
<p><strong>Roughly 20-40% of patients with a clinical FH phenotype have no identifiable monogenic cause.</strong> Many have a high polygenic risk score for LDL-C. The clinical implication matters: a negative genetic test does not exclude the clinical diagnosis, and the treatment is the same. Do not let a negative panel talk you out of treating an LDL-C of 220.</p>
<h4>Homozygous FH</h4>
<ul>
<li>Prevalence roughly 1 in 250,000 to 1 in 360,000 (higher in founder populations).</li>
<li>Untreated LDL-C typically above 400-500 mg/dL; cutaneous and tendon xanthomas in early childhood; <strong>supravalvular aortic stenosis</strong>; coronary events in the first two decades.</li>
<li>Management: maximal statin plus ezetimibe (limited response in receptor-negative disease), <strong>lipoprotein apheresis</strong> (the mainstay), <strong>lomitapide</strong> (MTP inhibitor), <strong>evinacumab</strong> (ANGPTL3 antibody — works LDLR-independently and is therefore the mechanistically correct choice in receptor-negative disease), and liver transplantation in extremis.</li>
</ul>` },
    { tier: 3, h: "Chylomicronaemia: monogenic versus multifactorial", html: `
<div class="tablewrap"><table>
<thead><tr><th></th><th>Familial chylomicronaemia syndrome (FCS)</th><th>Multifactorial chylomicronaemia syndrome (MCS)</th></tr></thead>
<tbody>
<tr><td><strong>Genetics</strong></td><td>Biallelic loss of function in <em>LPL</em>, <em>APOC2</em>, <em>APOA5</em>, <em>GPIHBP1</em> or <em>LMF1</em></td><td>Polygenic burden plus a secondary factor</td></tr>
<tr><td><strong>Prevalence</strong></td><td>~1 in 1,000,000</td><td>~1 in 500 — far commoner</td></tr>
<tr><td><strong>Onset</strong></td><td>Childhood</td><td>Adulthood</td></tr>
<tr><td><strong>Triglycerides</strong></td><td>Persistently above 880 mg/dL, often far higher</td><td>Fluctuating; falls substantially when the secondary factor is corrected</td></tr>
<tr><td><strong>Response to fibrates/omega-3</strong></td><td>Minimal</td><td>Good</td></tr>
<tr><td><strong>Management</strong></td><td>Extreme fat restriction (under 20 g/day), MCT oil; <strong>olezarsen</strong> (apoC-III antisense), <strong>plozasiran</strong> (apoC-III siRNA)</td><td>Treat the secondary cause; fibrate, omega-3, weight loss, alcohol abstinence, glycaemic control</td></tr>
</tbody></table></div>
<p class="note">The Fredrickson classification (types I, IIa, IIb, III, IV, V) is now taught for exam recognition and for reading older literature. It classifies electrophoretic patterns, not diseases, and has been superseded by aetiological classification. Learn it once; do not reason with it.</p>` }
  ],
  unknown: "Why only a minority of apoE2/E2 homozygotes ever develop dysbetalipoproteinaemia, and what determines who among clinical-FH patients without a monogenic variant will have events.",
  readings: [
    { tier: 1, cite: "Nordestgaard BG et al. Familial hypercholesterolaemia is underdiagnosed and undertreated. EAS Consensus. Eur Heart J 2013;34:3478-90.", why: "Still the clearest statement of the scale of the problem.", url: "" },
    { tier: 3, cite: "Cuchel M et al. Homozygous familial hypercholesterolaemia: new insights and guidance. Eur Heart J 2014 / 2023 update.", why: "Practical management of the extreme end.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Before diagnosing primary hypercholesterolaemia in a 48-year-old with LDL-C 205 mg/dL, the most important single test is:",
      opts: ["Coronary artery calcium score", "TSH", "Lp(a)", "Genetic panel for LDLR"],
      a: 1,
      why: ["Useful for risk refinement later, but it does not address the immediate question of whether this is secondary.",
            "Correct. Hypothyroidism is a common, easily missed and fully reversible cause of raised LDL-C — and untreated hypothyroidism substantially increases statin myopathy risk. TSH, HbA1c, creatinine, urine protein and LFTs plus a drug history is the minimum secondary screen.",
            "Worth measuring once, but it does not exclude a secondary cause.",
            "Premature and expensive. Clinical criteria come first, and a negative panel would not change management."] },
    { tier: 1, q: "Which physical sign is essentially pathognomonic of familial hypercholesterolaemia?",
      opts: ["Xanthelasma", "Corneal arcus at age 70", "Achilles tendon xanthoma", "Palmar crease xanthoma"],
      a: 2,
      why: ["Xanthelasma is suggestive but occurs in normolipidaemic people too.",
            "Arcus after 60 is age-related and non-specific. Before 45 it is significant.",
            "Correct. Tendon xanthoma — classically the Achilles and the extensor tendons of the hands — scores 6 points on the Dutch criteria, the highest single physical finding. Palpating the Achilles tendon takes ten seconds and is almost never done.",
            "Palmar crease xanthoma points to dysbetalipoproteinaemia (apoE2/E2), a different diagnosis."] },
    { tier: 2, q: "A patient scores 9 on the Dutch Lipid Clinic Network criteria. The next most valuable action is:",
      opts: ["Order a coronary angiogram", "Begin high-intensity statin and initiate cascade screening of all first-degree relatives", "Order NMR lipoprotein subfractionation", "Repeat the lipid panel in six months"],
      a: 1,
      why: ["Not indicated in the absence of symptoms or ischaemia.",
            "Correct. A score above 8 is definite FH. Treat, and screen the family — each first-degree relative has a 50% chance of carrying the variant. Cascade screening is the single highest-yield activity in preventive lipidology and requires nothing more than a lipid panel and a pedigree.",
            "Adds cost, not management change.",
            "Delays lifelong therapy in a definite diagnosis, wasting six months of a cumulative-exposure disease."] },
    { tier: 2, q: "A 44-year-old has TC 380 mg/dL, TG 390 mg/dL, palmar crease xanthomas and tuberoeruptive lesions over the elbows. The likely genotype and diagnosis are:",
      opts: ["LDLR mutation; heterozygous FH", "ApoE2/E2 plus a second metabolic hit; dysbetalipoproteinaemia", "LPL deficiency; familial chylomicronaemia syndrome", "ABCG5/G8 deficiency; sitosterolaemia"],
      a: 1,
      why: ["FH does not cause palmar xanthomas and does not typically raise triglycerides to this degree.",
            "Correct. Roughly equimolar elevation of cholesterol and triglycerides plus palmar crease xanthomas is dysbetalipoproteinaemia. It requires E2/E2 homozygosity plus a second hit such as obesity, diabetes, hypothyroidism or alcohol. Highly atherogenic but strikingly responsive to fibrates, statins and weight loss.",
            "FCS presents in childhood with triglycerides far higher and an eruptive, not palmar, xanthoma pattern.",
            "Sitosterolaemia gives tendon xanthomas with unremarkable cholesterol plus haematological abnormalities."] },
    { tier: 3, q: "In receptor-negative homozygous FH (under 2% LDL receptor activity), which agent is mechanistically most likely to work?",
      opts: ["High-dose rosuvastatin", "Evolocumab", "Evinacumab", "Ezetimibe monotherapy"],
      a: 2,
      why: ["Statins work by upregulating LDL receptors. With essentially no functional receptor, there is little to upregulate.",
            "PCSK9 inhibition preserves LDL receptors from degradation — again requiring functional receptors to preserve. Response in receptor-negative disease is poor.",
            "Correct. Evinacumab targets ANGPTL3 and lowers LDL-C by an LDL-receptor-independent mechanism, which is precisely why it works where the receptor-dependent agents fail. Lomitapide (MTP inhibition, reducing apoB particle assembly) is the other receptor-independent option.",
            "Ezetimibe reduces absorption but its LDL-C effect still depends substantially on subsequent receptor-mediated clearance."] },
    { tier: 3, q: "A negative FH genetic panel in a patient with LDL-C 240 mg/dL and tendon xanthomas means:",
      opts: ["FH is excluded and the statin can be stopped", "The clinical diagnosis stands; 20-40% of clinical FH has no identifiable monogenic cause, often reflecting high polygenic burden", "The patient must have sitosterolaemia", "The laboratory result is erroneous"],
      a: 1,
      why: ["A dangerous conclusion. The phenotype and its consequences are unchanged by the genotype.",
            "Correct. Roughly 20-40% of clinical FH phenotypes are polygenic rather than monogenic. Treatment is identical. The value of genetic testing lies mainly in facilitating cascade screening, not in deciding whether to treat.",
            "Possible as a differential if there are haematological features and statin non-response, but not the general inference.",
            "No reason to assume this."] }
  ]
},

/* ===================== MODULE 9 ===================== */
{
  id: 9, part: 3,
  title: "Risk Assessment: Who Actually Needs Treating",
  tagline: "PREVENT, SCORE2, coronary calcium — and why every one of them mis-serves a South Asian patient.",
  hook: "Two 45-year-old men, identical lipid panels. One is Danish, one is from Chennai. Every major calculator gives them the same risk. Every calculator is wrong about at least one of them.",
  time: { t1: 45, t2: 45, t3: 30 },
  objectives: [
    { tier: 1, text: "Define primary and secondary prevention and distinguish absolute from relative risk." },
    { tier: 2, text: "Apply PREVENT and SCORE2 and state the 2026 ACC/AHA treatment thresholds." },
    { tier: 2, text: "Use risk enhancers and coronary artery calcium to reclassify borderline and intermediate risk." },
    { tier: 3, text: "Critique risk calculators, including their systematic failure in South Asians." }
  ],
  sections: [
    { tier: 1, h: "The first question is not a calculation", html: `
<div class="keybox">
  <div class="eyebrow">Before you open any calculator</div>
  <p><strong>Does this patient already have established atherosclerotic cardiovascular disease?</strong> Prior MI, ACS, coronary revascularisation, ischaemic stroke or TIA, peripheral arterial disease, or documented obstructive atherosclerosis on imaging.</p>
  <p style="margin-top:8px">If yes: they are high or very high risk by definition. <strong>No calculator is required or appropriate.</strong> Treat to the secondary-prevention goal. Running a risk score on a post-MI patient is a category error, and it happens constantly.</p>
</div>
<p>Only if the answer is no do you enter the domain of primary prevention risk estimation — which is fundamentally an exercise in deciding how much uncertainty you and the patient will tolerate.</p>` },
    { tier: 1, h: "Absolute versus relative risk", html: `
<p>A treatment that reduces relative risk by 25% delivers:</p>
<ul>
<li>To a patient with a 40% ten-year risk: an absolute reduction of 10 percentage points. Number needed to treat = 10.</li>
<li>To a patient with a 2% ten-year risk: an absolute reduction of 0.5 percentage points. Number needed to treat = 200.</li>
</ul>
<p>Same drug, same relative effect, twenty-fold difference in value. <strong>Absolute risk drives treatment decisions; relative risk drives misunderstanding</strong> — in patients, in the media, and in a fair number of clinicians.</p>
<p class="note">When counselling, always give absolute numbers over a stated time horizon. "This lowers your risk by a quarter" is technically true and practically useless.</p>` },
    { tier: 2, h: "PREVENT — the 2026 ACC/AHA tool", html: `
<p>The <strong>PREVENT</strong> equations (Predicting Risk of cardiovascular disease EVENTs) replace the Pooled Cohort Equations in the 2026 ACC/AHA dyslipidaemia guideline.</p>
<div class="tablewrap"><table>
<thead><tr><th>Feature</th><th>Detail</th></tr></thead>
<tbody>
<tr><td>Age range</td><td>30-79 years</td></tr>
<tr><td>Horizons</td><td><strong>10-year and 30-year</strong> risk</td></tr>
<tr><td>Race</td><td><strong>Removed as an input variable</strong></td></tr>
<tr><td>Inputs</td><td>Age, sex, total and HDL cholesterol, systolic BP, antihypertensive and statin use, diabetes, smoking, <strong>eGFR</strong>, plus optional urine albumin:creatinine, HbA1c and social deprivation index</td></tr>
<tr><td>Outcome</td><td>Total CVD (ASCVD plus heart failure), with ASCVD reported separately</td></tr>
</tbody></table></div>
<h4>The 2026 ACC/AHA thresholds you must know</h4>
<div class="tablewrap"><table>
<thead><tr><th>10-year PREVENT-ASCVD risk</th><th>Category</th><th>Recommendation</th></tr></thead>
<tbody>
<tr><td class="num">Below 3%</td><td>Low</td><td>Lifestyle</td></tr>
<tr><td class="num">3% to under 5%</td><td>Borderline</td><td>LDL-lowering therapy is <strong>reasonable</strong></td></tr>
<tr><td class="num">5% to under 10%</td><td>Intermediate</td><td>LDL-lowering therapy is <strong>recommended</strong> following a clinician-patient discussion</td></tr>
<tr><td class="num">10% or above</td><td>High</td><td>Treat</td></tr>
</tbody></table></div>
<p class="note">Note how much lower these thresholds are than the previous 7.5% intermediate cut-point. The direction of travel across every major guideline is toward earlier treatment — a direct consequence of the cumulative-exposure evidence in Module 6.</p>` },
    { tier: 2, h: "SCORE2 and SCORE2-OP — the European tool", html: `
<p>Used by the ESC/EAS. Region-calibrated across four European risk regions. SCORE2 covers ages 40-69; SCORE2-OP extends to older persons, and the 2025 focused update carries risk estimation <strong>up to age 89</strong>.</p>
<p>Key differences from PREVENT: SCORE2 estimates <strong>fatal plus non-fatal</strong> cardiovascular events (the original SCORE estimated fatal events only), uses non-HDL-C rather than LDL-C, and applies <strong>age-specific</strong> risk thresholds — recognising that a 5% ten-year risk means something quite different at 45 than at 70.</p>
<p><strong>Neither SCORE2 nor PREVENT is calibrated for India.</strong> Applying either to an Indian population produces systematic error, in a direction discussed below and in Module 13.</p>` },
    { tier: 2, h: "Risk enhancers and coronary artery calcium", html: `
<p>For patients who land in the borderline or intermediate zone, the decision is genuinely uncertain and two further inputs help.</p>
<h4>Risk-enhancing factors</h4>
<ul>
<li>Family history of premature ASCVD</li>
<li>Persistently elevated LDL-C at or above 160 mg/dL</li>
<li>Metabolic syndrome</li>
<li>Chronic kidney disease</li>
<li>Chronic inflammatory conditions — rheumatoid arthritis, psoriasis, HIV, SLE</li>
<li>History of preeclampsia or premature menopause</li>
<li><strong>High-risk ethnicity — explicitly including South Asian ancestry</strong></li>
<li>Elevated Lp(a), elevated apoB, hs-CRP at or above 2 mg/L, ankle-brachial index below 0.9</li>
</ul>
<h4>Coronary artery calcium</h4>
<p>Per the 2026 ACC/AHA guideline: selective use of non-contrast CAC scanning is recommended for <strong>men over 40 and women over 45 at borderline or intermediate ten-year risk</strong>.</p>
<div class="keybox">
  <div class="eyebrow">The rule that makes CAC actionable</div>
  <p><strong>Any coronary calcium at all supports an LDL-C goal below 100 mg/dL — with progressively lower goals as the score rises.</strong> A CAC of zero, conversely, has strong negative predictive value and can justify deferring pharmacotherapy in a genuinely borderline patient.</p>
  <p style="margin-top:8px">Caveats: the "power of zero" weakens in the young (plaque may be non-calcified), in patients with very high Lp(a), and in current smokers. A CAC of zero at 38 is much less reassuring than a CAC of zero at 65.</p>
</div>` },
    { tool: 'risk-compare' },
    { tier: 3, h: "Why every calculator fails South Asians", html: `
<p>This is not a minor calibration footnote. It is the central methodological problem for anyone practising in or teaching about South Asia, and it deserves to be understood precisely rather than gestured at.</p>
<h4>1. The Pooled Cohort Equations classified South Asians as White</h4>
<p>The PCE offered only two race categories, White and African American. South Asians were assigned to White — a population with substantially later onset and lower age-specific incidence of coronary disease. The consequence was <strong>systematic underestimation of risk and consequent under-treatment.</strong></p>
<h4>2. PREVENT removed race entirely</h4>
<p>Removing race as a biological variable is the ethically and scientifically correct move — race is a social construct and a poor proxy for the underlying biology. But it solves the classification problem without solving the <strong>calibration</strong> problem: PREVENT was still derived predominantly in US cohorts in which South Asians are a small minority.</p>
<h4>3. No major calculator was derived in an Indian cohort</h4>
<p>Not PREVENT, not SCORE2, not the original Framingham risk score. Their performance in Indian populations is an extrapolation.</p>
<h4>4. The age structure of the disease is different</h4>
<div class="keybox">
  <p>South Asians experience myocardial infarction <strong>approximately a decade earlier</strong> than individuals of European descent, with higher rates of premature and multivessel disease. Ten-year risk estimation is dominated by age. A calculator that keys on age will therefore be least accurate precisely in the population whose disease arrives early.</p>
</div>
<h4>5. The risk factors themselves are differently distributed</h4>
<p>Roughly <strong>25% of South Asians have Lp(a) above 50 mg/dL</strong>, well above Western populations. Insulin resistance appears at lower BMI. The atherogenic triad from Module 4 is the dominant phenotype, and LDL-C — the input the calculators lean on — is frequently unremarkable.</p>
<div class="flag warn"><strong>This is the entire justification for the Lipid Association of India abandoning ten-year risk in favour of lifetime risk.</strong> Not national preference, not guideline chauvinism — a methodological necessity. Module 13 develops the consequences.</div>` },
    { tier: 3, h: "Polygenic risk scores and the 30-year horizon", html: `
<p><strong>Polygenic risk scores</strong> aggregate the effects of millions of common variants. They add modest discrimination over conventional risk factors, are available from conception, and are attractive precisely in the young where conventional scores are least informative. Three problems keep them out of guidelines: they are derived overwhelmingly in European-ancestry cohorts and transport poorly to South Asian populations; no trial has shown that acting on a PRS improves outcomes; and there is no agreed threshold for action.</p>
<p><strong>Thirty-year risk</strong>, newly available in PREVENT, partially addresses the young-patient problem within conventional epidemiology. It is arguably the most consequential quiet change in the 2026 guideline — it lets a clinician show a 35-year-old a number that reflects reality. Note also the August 2026 ACC analysis showing that long-term risk estimation substantially expands statin eligibility under the new guideline.</p>` }
  ],
  unknown: "Whether any risk calculator can be adequately calibrated for the Indian population without a large, contemporary, prospectively followed Indian cohort — which does not currently exist at the required scale.",
  readings: [
    { tier: 2, cite: "Khan SS et al. Development and validation of the PREVENT equations. Circulation 2024.", why: "The tool the 2026 guideline now runs on.", url: "" },
    { tier: 2, cite: "SCORE2 working group. SCORE2 risk prediction algorithms. Eur Heart J 2021;42:2439-54.", why: "The European counterpart, with its age-specific thresholds.", url: "" },
    { tier: 3, cite: "Role of Lipoprotein(a) in Atherosclerotic Cardiovascular Disease in South Asian Individuals. J Am Heart Assoc 2025. PMID 40654252.", why: "The clearest account of why the calculators fail this population.", url: "https://pubmed.ncbi.nlm.nih.gov/40654252/" }
  ],
  quiz: [
    { tier: 1, q: "A 58-year-old had a myocardial infarction two years ago. What is his 10-year risk score?",
      opts: ["Calculate it with PREVENT", "Calculate it with SCORE2", "No calculator applies — established ASCVD is high or very high risk by definition", "Calculate it, then double the result"],
      a: 2,
      why: ["PREVENT is a primary prevention tool. Applying it here is a category error.",
            "SCORE2 is likewise for primary prevention.",
            "Correct. Risk calculators estimate the probability of a first event. This patient has already had one. He is in secondary prevention: treat to the very-high-risk goal. This mistake is made constantly in real clinics.",
            "Not a recognised or defensible approach."] },
    { tier: 1, q: "A drug reduces relative risk by 25%. Patient A has a 40% ten-year risk; patient B has 2%. The numbers needed to treat are respectively:",
      opts: ["10 and 200", "4 and 50", "25 and 25", "40 and 2"],
      a: 0,
      why: ["Correct. A: 25% of 40% = 10 percentage points absolute, NNT 10. B: 25% of 2% = 0.5 points, NNT 200. Identical relative effect, twentyfold difference in value. This is why you counsel in absolute terms.",
            "Arithmetic error. NNT is 1 divided by the absolute risk reduction, and the absolute reduction here is 10 percentage points and 0.5 percentage points respectively.",
            "NNT depends on baseline absolute risk, so it cannot be the same for two patients whose risks differ twentyfold. This answer is the exact confusion the question is designed to expose.",
            "These are the two baseline risks, not the numbers needed to treat. Note how easily an untransformed risk figure can be mistaken for a treatment effect."] },
    { tier: 2, q: "Under the 2026 ACC/AHA guideline, a patient with a 10-year PREVENT-ASCVD risk of 6% should be told that LDL-lowering therapy is:",
      opts: ["Not indicated", "Reasonable to consider", "Recommended, following a clinician-patient discussion", "Mandatory regardless of preference"],
      a: 2,
      why: ["6% falls in the intermediate band, where therapy is recommended.",
            "That wording applies to the borderline band of 3% to under 5%.",
            "Correct. 5% to under 10% is intermediate risk, where the guideline recommends LDL-lowering therapy after a clinician-patient discussion. Note how much lower this threshold is than the previous 7.5%.",
            "No guideline overrides informed patient preference; the discussion is part of the recommendation."] },
    { tier: 2, q: "A 52-year-old man at intermediate risk has a coronary artery calcium score of 45. Under the 2026 ACC/AHA guideline this supports:",
      opts: ["Deferring statin therapy", "An LDL-C goal below 100 mg/dL", "An LDL-C goal below 55 mg/dL", "Repeating the CAC in five years before deciding"],
      a: 1,
      why: ["A CAC of zero might support deferral. Any calcium does the opposite.",
            "Correct. The guideline holds that any amount of coronary calcium supports an LDL-C goal below 100, with progressively lower goals as the score rises. The presence of calcium converts a probabilistic estimate into documented subclinical disease.",
            "That goal is reserved for very high risk established ASCVD.",
            "Delays treatment in a patient with demonstrated subclinical atherosclerosis."] },
    { tier: 3, q: "The Pooled Cohort Equations systematically underestimated risk in South Asians principally because:",
      opts: ["They excluded patients with diabetes", "South Asians were classified as White, a group with later onset and lower age-specific coronary incidence", "They used total rather than LDL cholesterol", "They over-weighted smoking"],
      a: 1,
      why: ["Diabetes was an included variable.",
            "Correct. The PCE offered only White and African American categories, so South Asians were assigned to a reference population whose disease arrives roughly a decade later. Under-estimation and under-treatment followed. PREVENT removed race entirely — correcting the classification problem while leaving the calibration problem, since it was still derived predominantly in US cohorts.",
            "The choice of cholesterol measure is not the source of ethnic miscalibration.",
            "Smoking weighting is not the issue."] },
    { tier: 3, q: "The most defensible reason the Lipid Association of India uses lifetime rather than 10-year risk is that:",
      opts: ["Lifetime risk is easier to calculate", "Ten-year risk is dominated by age and therefore performs worst in a population whose coronary disease arrives about a decade early", "Indian patients prefer longer time horizons", "Lifetime risk has been validated in Indian cohorts"],
      a: 1,
      why: ["It is not easier; if anything it requires more assumptions.",
            "Correct. Because age dominates ten-year estimation, any age-keyed calculator is least accurate in exactly the population with early-onset disease. A 38-year-old Indian man with the atherogenic triad and high Lp(a) has a trivial ten-year risk and a formidable lifetime risk. Lifetime framing is a methodological necessity, not a preference.",
            "Patient preference is not the basis of the recommendation.",
            "Lifetime risk models are not better validated in Indian cohorts — that is a genuine limitation of the approach, honestly acknowledged."] }
  ]
},

/* ===================== MODULE 10 ===================== */
{
  id: 10, part: 4,
  title: "Statins: The Most Consequential Drug Class in Preventive Medicine",
  tagline: "Mechanism, the intensity table, pharmacokinetics that change prescribing, and the nocebo problem.",
  hook: "Akira Endo isolated compactin from Penicillium citrinum in 1976 looking for an antibiotic. He found the most widely prescribed drug class in history.",
  time: { t1: 60, t2: 50, t3: 40 },
  objectives: [
    { tier: 1, text: "State the mechanism and reproduce the statin intensity classification." },
    { tier: 1, text: "List adverse effects, monitoring requirements and contraindications." },
    { tier: 2, text: "Translate lipophilicity, CYP metabolism and OATP1B1 transport into rational agent selection." },
    { tier: 2, text: "Manage statin-associated muscle symptoms with a systematic algorithm." },
    { tier: 3, text: "Appraise the pleiotropy literature and the nocebo evidence critically." },
    { tier: 3, text: "Quantify the new-onset diabetes signal and interpret SLCO1B1 pharmacogenomics." }
  ],
  sections: [
    { tier: 1, h: "Mechanism, in one paragraph", html: `
<div class="keybox">
  <p>A statin competitively inhibits <strong>HMG-CoA reductase</strong>. Hepatic cholesterol falls. <strong>SREBP-2</strong> is activated. <strong>LDL receptor expression rises.</strong> The liver clears LDL from plasma more avidly and plasma LDL-C falls. <em>The benefit comes from receptor upregulation, not from reduced synthesis per se.</em></p>
</div>` },
    { tier: 1, h: "The intensity table — learn this cold", html: `
<div class="tablewrap"><table>
<thead><tr><th>Intensity</th><th>LDL-C reduction</th><th>Agents and doses</th></tr></thead>
<tbody>
<tr><td><strong>High</strong></td><td class="num">50% or more</td><td><strong>Atorvastatin 40-80 mg</strong> · <strong>Rosuvastatin 20-40 mg</strong></td></tr>
<tr><td><strong>Moderate</strong></td><td class="num">30% to under 50%</td><td>Atorvastatin 10-20 · Rosuvastatin 5-10 · Simvastatin 20-40 · Pravastatin 40-80 · Lovastatin 40 · Fluvastatin XL 80 · Pitavastatin 1-4</td></tr>
<tr><td><strong>Low</strong></td><td class="num">Under 30%</td><td>Simvastatin 10 · Pravastatin 10-20 · Lovastatin 20 · Fluvastatin 20-40</td></tr>
</tbody></table></div>
<p class="note">Only two agents reach high intensity. If a patient needs a 50% or greater reduction, the conversation begins and largely ends with atorvastatin or rosuvastatin.</p>` },
    { tier: 1, h: "Adverse effects and monitoring", html: `
<div class="tablewrap"><table>
<thead><tr><th>Effect</th><th>Frequency</th><th>Comment</th></tr></thead>
<tbody>
<tr><td>Myalgia</td><td>Reported in 5-20% observationally; ~1-2% in blinded trials</td><td>The gap between those two figures is the whole story. See Tier 3.</td></tr>
<tr><td>Transaminase elevation</td><td>0.5-2%</td><td>Usually mild, transient, and not clinically meaningful.</td></tr>
<tr><td>Myopathy (CK above 10x ULN)</td><td>~1 in 10,000 per year</td><td>Dose-related; interaction-related.</td></tr>
<tr><td>Rhabdomyolysis</td><td>~1-3 per 100,000 patient-years</td><td>Rare. Usually involves an interacting drug.</td></tr>
<tr><td>New-onset diabetes</td><td>~1 excess case per 255 patient-years</td><td>Concentrated in those already near the threshold. Quantified in Tier 3.</td></tr>
<tr><td>Haemorrhagic stroke</td><td>Small excess in some analyses</td><td>Substantially outweighed by ischaemic stroke reduction.</td></tr>
</tbody></table></div>
<h4>Monitoring — less than you were taught</h4>
<ul>
<li><strong>Baseline:</strong> lipid panel, ALT. CK only if symptomatic or at high myopathy risk.</li>
<li><strong>Follow-up:</strong> lipid panel at 4-12 weeks after initiation or dose change, then every 3-12 months.</li>
<li><strong>Routine liver enzyme monitoring is NOT required</strong> — a change made over a decade ago that many clinics still have not implemented.</li>
<li><strong>Routine CK monitoring is NOT required</strong> in asymptomatic patients.</li>
</ul>
<div class="flag err"><strong>Contraindication:</strong> pregnancy and lactation. The 2026 ACC/AHA guideline advises <strong>deferring most lipid-lowering therapy during conception, pregnancy and lactation</strong>. Discuss contraception when starting a statin in a woman of childbearing potential — this conversation is routinely omitted.</div>` },
    { tier: 2, h: "Pharmacokinetics that actually change prescribing", html: `
<div class="tablewrap"><table>
<thead><tr><th>Statin</th><th>Solubility</th><th>Metabolism</th><th>Half-life</th><th>Dose timing</th><th>Renal caution</th></tr></thead>
<tbody>
<tr><td><strong>Atorvastatin</strong></td><td>Lipophilic</td><td>CYP3A4</td><td class="num">~14 h</td><td>Any time</td><td>No adjustment</td></tr>
<tr><td><strong>Rosuvastatin</strong></td><td>Hydrophilic</td><td>Minimal (CYP2C9 trace)</td><td class="num">~19 h</td><td>Any time</td><td>Max 10 mg if eGFR under 30</td></tr>
<tr><td><strong>Simvastatin</strong></td><td>Lipophilic</td><td><strong>CYP3A4</strong></td><td class="num">~2 h</td><td>Evening</td><td>Start 5 mg if severe</td></tr>
<tr><td><strong>Pravastatin</strong></td><td>Hydrophilic</td><td><strong>Non-CYP</strong></td><td class="num">~2 h</td><td>Evening</td><td>Start low</td></tr>
<tr><td><strong>Pitavastatin</strong></td><td>Lipophilic</td><td><strong>Minimal CYP</strong> (glucuronidation)</td><td class="num">~12 h</td><td>Any time</td><td>Caution</td></tr>
<tr><td><strong>Fluvastatin</strong></td><td>Lipophilic</td><td>CYP2C9</td><td class="num">~3 h (XL longer)</td><td>Evening</td><td>Caution</td></tr>
<tr><td><strong>Lovastatin</strong></td><td>Lipophilic</td><td><strong>CYP3A4</strong></td><td class="num">~3 h</td><td>Evening with food</td><td>Caution</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The three rules worth memorising</div>
  <ol style="margin-bottom:0">
    <li><strong>CYP3A4 statins</strong> (simvastatin, lovastatin, atorvastatin) interact with macrolides, azole antifungals, protease inhibitors, verapamil, diltiazem, amiodarone, ciclosporin and grapefruit juice. Simvastatin and lovastatin are the most vulnerable.</li>
    <li><strong>Minimal-CYP statins</strong> — <strong>pravastatin, rosuvastatin, pitavastatin</strong> — are the agents of choice in polypharmacy, HIV, transplantation and hepatic impairment. If you remember nothing else from this table, remember these three names.</li>
    <li><strong>All statins depend on OATP1B1</strong> (SLCO1B1) for hepatic uptake. Inhibiting it — as ciclosporin and gemfibrozil do — raises systemic exposure and myopathy risk regardless of CYP pathway.</li>
  </ol>
</div>
<div class="flag err"><strong>Never combine gemfibrozil with a statin.</strong> Gemfibrozil inhibits both statin glucuronidation and OATP1B1, producing a large increase in myopathy risk. If a fibrate is needed alongside a statin, use <strong>fenofibrate</strong>.</div>` },
    { tool: 'statin-select' },
    { tier: 2, h: "Managing statin-associated muscle symptoms", html: `
<p>Do this systematically, or you will lose a drug that would have prevented an infarct.</p>
<ol>
<li><strong>Characterise.</strong> Is it truly muscular — proximal, symmetrical, bilateral? Is it temporally related to starting the drug? Diffuse aches and pains in a 68-year-old are usually not the statin.</li>
<li><strong>Measure CK and TSH.</strong> Untreated hypothyroidism is a potent myopathy risk factor and a common confounder. Exclude strenuous unaccustomed exercise.</li>
<li><strong>If CK is above 10 times ULN, or there is any suggestion of rhabdomyolysis: stop immediately.</strong></li>
<li><strong>Otherwise: stop temporarily (2-4 weeks) and observe.</strong> Do symptoms resolve? If they do not, the statin was not the cause — and you now know that.</li>
<li><strong>Rechallenge.</strong> Same statin at a lower dose, or a different statin. Roughly 70-90% of patients labelled statin-intolerant tolerate some statin regimen.</li>
<li><strong>Alternative regimens:</strong> rosuvastatin 5-10 mg twice weekly, or atorvastatin 10-20 mg alternate days, exploiting the long half-lives. These achieve meaningful LDL-C reduction with far better tolerability.</li>
<li><strong>Only then</strong> move to non-statins: ezetimibe, bempedoic acid (whose prodrug is not activated in muscle — see Module 11), or a PCSK9 inhibitor.</li>
</ol>
<div class="flag warn"><strong>Never simply accept "statin intolerant" as a permanent label without a documented rechallenge.</strong> It is the single commonest reason a high-risk patient goes untreated for years.</div>` },
    { tier: 3, h: "Pleiotropy: an interesting and largely redundant hypothesis", html: `
<p>Statins demonstrably do more than lower LDL-C: improved endothelial nitric oxide bioavailability, plaque stabilisation, reduced hs-CRP (JUPITER), antithrombotic and immunomodulatory effects. The mechanism is plausible — reduced isoprenylation of Rho and Rac, as in Module 2.</p>
<div class="keybox">
  <div class="eyebrow">But teach the counterargument with equal force</div>
  <p>Mendelian randomisation of <em>HMGCR</em> variants, and the CTT log-linear relationship holding across statins, ezetimibe, PCSK9 inhibitors and bempedoic acid alike, together indicate that <strong>the overwhelming majority of clinical benefit is explained by absolute LDL-C reduction alone.</strong> If pleiotropy contributed substantially, non-statin LDL lowering would underperform per unit of LDL-C reduction. It does not.</p>
  <p style="margin-top:8px">Teach pleiotropy as real biology of uncertain clinical weight. Do not use it to justify preferring a statin when a patient genuinely cannot take one.</p>
</div>` },
    { tier: 3, h: "The nocebo problem — the most practice-changing evidence in this module", html: `
<p>The gap between muscle symptoms reported in observational studies (5-20%) and in blinded randomised trials (1-2%) demanded explanation. Two elegant N-of-1 designs provided it.</p>
<div class="tablewrap"><table>
<thead><tr><th>Trial</th><th>Design</th><th>Finding</th></tr></thead>
<tbody>
<tr><td><strong>SAMSON</strong> (NEJM 2020)</td><td>60 patients who had stopped statins for side effects; 12 one-month periods each of atorvastatin 20 mg, placebo, and no tablet, in random order; daily symptom scoring</td><td><strong>Roughly 90% of the symptom burden experienced during statin months was also present during placebo months.</strong> Half the participants successfully restarted a statin afterwards.</td></tr>
<tr><td><strong>StatinWISE</strong> (BMJ 2021)</td><td>200 patients, series of randomised placebo-controlled n-of-1 trials</td><td>No overall difference in muscle symptoms between statin and placebo periods. Two-thirds intended to resume statins.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">What to do with this</div>
  <p>Most statin intolerance is <strong>not pharmacological</strong>. But note carefully what this does <em>not</em> mean: the symptoms are real, and the patient is not imagining them or lying. Nocebo effects produce genuine physical sensation. The correct clinical response is neither dismissal nor capitulation, but a <strong>blinded rechallenge offered as a shared experiment</strong>: "Let us find out together whether this tablet is what is causing it."</p>
  <p style="margin-top:8px">Delivered that way, this evidence recovers statin therapy in a substantial proportion of patients. Delivered as "it is all in your head", it destroys the relationship. Module 14 rehearses the conversation.</p>
</div>` },
    { tier: 3, h: "SLCO1B1, immune-mediated myopathy, and the diabetes signal", html: `
<h4>Pharmacogenomics</h4>
<p>The <em>SLCO1B1</em> c.521T&gt;C variant reduces OATP1B1 transporter function, raising systemic statin exposure. The SEARCH genome-wide association study found that homozygotes had a markedly increased risk of myopathy on simvastatin 80 mg — odds ratios above 16 in that setting. The effect is far weaker with rosuvastatin, pravastatin and fluvastatin. CPIC guidance exists; routine testing is not recommended, though it is a reasonable investigation in recurrent unexplained myopathy.</p>
<h4>Statin-associated immune-mediated necrotising myopathy (SAIMNM)</h4>
<p>Rare — roughly 2-3 per 100,000 treated patients. Distinguishing features:</p>
<ul>
<li>Proximal weakness, not merely pain.</li>
<li>CK markedly elevated, often above 10 times ULN.</li>
<li><strong>Does not resolve on drug withdrawal</strong> — the discriminating feature.</li>
<li><strong>Anti-HMGCR antibodies positive.</strong></li>
<li>Requires immunosuppression, not simply cessation. Refer to rheumatology.</li>
</ul>
<p class="note">An August 2026 ACC expert analysis described a distinctive pattern of SAIMNM in Native American populations — a reminder that ancestry-linked pharmacogenomic variation in statin adverse effects is real and under-studied, and that the same is very likely true for South Asian populations.</p>
<h4>New-onset diabetes, quantified honestly</h4>
<ul>
<li>Approximately <strong>1 excess case per 255 patient-years</strong> of statin therapy versus placebo; roughly 1 per 498 patients per year for intensive versus moderate therapy.</li>
<li>Risk is concentrated in people <strong>already close to the diabetes threshold</strong> — impaired fasting glucose, metabolic syndrome, obesity. It largely reflects earlier diagnosis of impending diabetes rather than induction of new disease.</li>
<li>Mendelian randomisation of <em>HMGCR</em> variants shows the same association, indicating an on-target effect rather than an off-target toxicity.</li>
<li><strong>The cardiovascular benefit substantially exceeds this harm</strong> in anyone with an indication.</li>
</ul>
<p>Disclose it. Do not conceal it, and do not minimise it. Patients who later discover an undisclosed adverse effect stop the drug and distrust the next recommendation.</p>` }
  ],
  unknown: "Whether SLCO1B1-guided or otherwise pharmacogenomically-guided statin prescribing improves adherence and outcomes at population scale — and what the equivalent ancestry-specific variants are in South Asian populations, which have been barely studied.",
  readings: [
    { tier: 1, cite: "Collins R et al. Interpretation of the evidence for the efficacy and safety of statin therapy. Lancet 2016;388:2532-61.", why: "The definitive account of benefit versus harm. Long, but the summary tables are worth the time.", url: "" },
    { tier: 3, cite: "Wood FA et al. N-of-1 trial of a statin, placebo, or no treatment to assess side effects (SAMSON). NEJM 2020;383:2182-4.", why: "Three pages that should change how you talk to every statin-intolerant patient.", url: "https://pubmed.ncbi.nlm.nih.gov/33196154/" },
    { tier: 3, cite: "Herrett E et al. StatinWISE: n-of-1 trials of statin side effects. BMJ 2021;372:n135.", why: "Independent replication in primary care.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "Which two statins can achieve high-intensity LDL-C reduction?",
      opts: ["Simvastatin and pravastatin", "Atorvastatin and rosuvastatin", "Pitavastatin and fluvastatin", "Lovastatin and simvastatin"],
      a: 1,
      why: ["Neither reaches 50% reduction at any approved dose.",
            "Correct. Atorvastatin 40-80 mg and rosuvastatin 20-40 mg are the only high-intensity options. If a patient needs 50% or more, the conversation begins and largely ends with these two.",
            "Both are moderate intensity at most.",
            "Both are moderate intensity at best."] },
    { tier: 1, q: "Routine monitoring of liver enzymes in an asymptomatic patient on a stable statin dose is:",
      opts: ["Required every 3 months", "Required annually", "Not required", "Required every 6 months"],
      a: 2,
      why: ["Not required at any interval in asymptomatic patients.",
            "Not required, though many clinics still do it.",
            "Correct. Check ALT at baseline; thereafter measure only if clinically indicated. This changed over a decade ago and remains widely unimplemented, generating cost and false alarms.",
            "Not required, and six-monthly testing is no more defensible than three-monthly. Any fixed surveillance interval in an asymptomatic patient generates cost and false alarms without preventing harm."] },
    { tier: 2, q: "A patient with HIV on ritonavir-boosted antiretroviral therapy needs a statin. The best choice is:",
      opts: ["Simvastatin 40 mg", "Lovastatin 40 mg", "Pravastatin or pitavastatin", "Atorvastatin 80 mg"],
      a: 2,
      why: ["Simvastatin is a CYP3A4 substrate and is contraindicated with ritonavir — a potent CYP3A4 inhibitor. Exposure can rise many-fold.",
            "Lovastatin is likewise CYP3A4-dependent and contraindicated.",
            "Correct. Pravastatin and pitavastatin undergo minimal CYP metabolism and are the rational choices in patients on CYP3A4 inhibitors. Rosuvastatin is also reasonable, at reduced dose with some agents. Note the 2026 ACC/AHA recommendation to initiate lipid-lowering therapy in people aged 40 or over with HIV.",
            "Atorvastatin is a CYP3A4 substrate; if used at all, only at low dose with monitoring."] },
    { tier: 2, q: "A patient reports myalgia three weeks after starting atorvastatin 40 mg. CK is normal, TSH is normal. The next step is:",
      opts: ["Stop the statin permanently and label the patient intolerant", "Stop temporarily for 2-4 weeks, observe, then rechallenge at lower dose or with a different statin", "Continue unchanged and reassure", "Switch immediately to a PCSK9 inhibitor"],
      a: 1,
      why: ["This is the commonest error in lipid management and leaves high-risk patients untreated for years.",
            "Correct. The dechallenge-rechallenge sequence is diagnostic. If symptoms persist off the drug, the statin was not the cause. Roughly 70-90% of patients labelled intolerant tolerate some statin regimen, including twice-weekly rosuvastatin or alternate-day atorvastatin.",
            "Dismissing the symptom without investigation damages trust and adherence.",
            "Skips the diagnostic step, and jumps to an expensive agent that may be unnecessary."] },
    { tier: 3, q: "The SAMSON trial found that among patients who had previously stopped statins for side effects:",
      opts: ["Symptoms occurred only during statin months, confirming a pharmacological cause", "Roughly 90% of symptom burden during statin months was also present during placebo months", "Symptoms were entirely absent during placebo months", "CK rose significantly during statin months"],
      a: 1,
      why: ["The opposite of what was found.",
            "Correct. The nocebo ratio was approximately 0.90. Symptoms were real but largely not attributable to the drug — and half the participants successfully restarted a statin afterwards. StatinWISE reached a concordant conclusion. This should change how you conduct the conversation, without ever implying the patient imagined it.",
            "Symptoms were substantially present during placebo months — that is the finding.",
            "CK was not the outcome; symptom scoring was."] },
    { tier: 3, q: "Which feature most strongly distinguishes statin-associated immune-mediated necrotising myopathy from ordinary statin myalgia?",
      opts: ["Symptoms begin within the first month", "Symptoms persist and progress after the statin is stopped, with anti-HMGCR antibodies present", "CK is mildly elevated", "Symptoms respond to a statin holiday"],
      a: 1,
      why: ["Onset timing does not discriminate; SAIMNM can begin at any point, sometimes years in.",
            "Correct. Failure to resolve on withdrawal, proximal weakness rather than pain alone, markedly raised CK, and anti-HMGCR antibody positivity define it. It requires immunosuppression, not simply cessation — so recognising it matters.",
            "CK is typically markedly, not mildly, elevated.",
            "Response to withdrawal is characteristic of ordinary myalgia and specifically argues against SAIMNM."] },
    { tier: 3, q: "The statin-associated increase in new-onset diabetes is best characterised as:",
      opts: ["An off-target toxicity unrelated to HMGCR inhibition", "An on-target effect, supported by HMGCR Mendelian randomisation, concentrated in those already near the diabetes threshold", "A statistical artefact not seen in randomised trials", "A reason to avoid statins in metabolic syndrome"],
      a: 1,
      why: ["Mendelian randomisation of HMGCR variants reproduces the association, indicating it is on-target.",
            "Correct. Roughly 1 excess case per 255 patient-years, concentrated in people with impaired fasting glucose or metabolic syndrome, and largely representing earlier diagnosis of impending diabetes. Cardiovascular benefit substantially exceeds the harm. Disclose it honestly.",
            "It is seen in randomised trials and in meta-analysis of them.",
            "Precisely backwards. Metabolic syndrome patients are at high cardiovascular risk and derive the greatest absolute benefit."] }
  ]
},

/* ===================== MODULE 11 ===================== */
{
  id: 11, part: 4,
  title: "Non-Statin Therapies: Building the Combination",
  tagline: "Ezetimibe to enlicitide. Mechanism, evidence, and what to add when.",
  hook: "In 2026, for the first time, a patient can achieve a 57% LDL-C reduction by swallowing a PCSK9 inhibitor. What does that do to the treatment algorithm?",
  time: { t1: 55, t2: 50, t3: 40 },
  objectives: [
    { tier: 1, text: "Name each non-statin class, its target and approximate LDL-C reduction." },
    { tier: 2, text: "Describe mechanism, pharmacokinetics and outcome evidence for each agent." },
    { tier: 2, text: "Construct a combination regimen to reach a specified LDL-C goal." },
    { tier: 3, text: "Distinguish agents with outcome evidence from agents with surrogate evidence only." }
  ],
  sections: [
    { tier: 1, h: "The sequence after maximally tolerated statin", html: `
<div class="tablewrap"><table>
<thead><tr><th>Step</th><th>Agent</th><th>Added LDL-C reduction</th><th>Route</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>Ezetimibe</strong></td><td class="num">20-25%</td><td>Oral daily</td></tr>
<tr><td>2a</td><td><strong>Bempedoic acid</strong></td><td class="num">~18%</td><td>Oral daily</td></tr>
<tr><td>2b</td><td><strong>PCSK9 monoclonal antibody</strong></td><td class="num">50-60%</td><td>Subcutaneous, 2-weekly or monthly</td></tr>
<tr><td>2c</td><td><strong>Enlicitide (oral PCSK9)</strong></td><td class="num">~57%</td><td>Oral daily</td></tr>
<tr><td>2d</td><td><strong>Inclisiran</strong></td><td class="num">~50%</td><td>Subcutaneous, twice yearly</td></tr>
<tr><td>3</td><td>Bile acid sequestrant</td><td class="num">15-25%</td><td>Oral, with GI cost</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The arithmetic that should govern your prescribing</div>
  <p>Doubling a statin dose buys about <strong>6%</strong>. Adding ezetimibe buys about <strong>20-25%</strong>. This is why the 2025 ESC/EAS focused update advocates upfront combination — the "fire to target" strategy — rather than sequential dose escalation.</p>
</div>` },
    { tier: 2, h: "Ezetimibe", html: `
<p><strong>Mechanism:</strong> inhibits NPC1L1 at the enterocyte brush border, reducing cholesterol absorption by roughly 50%. Compensatory hepatic synthesis limits monotherapy effect to 15-20% — which is exactly why it pairs so well with a statin, each blocking the other's escape route.</p>
<p><strong>PK:</strong> once daily, food-independent. Extensively glucuronidated in the intestinal wall; undergoes enterohepatic recirculation giving an effective half-life of about 22 hours. <strong>No clinically significant CYP interactions.</strong> Safe in renal impairment. Available as a fixed-dose combination with every major statin.</p>
<div class="keybox">
  <div class="eyebrow">IMPROVE-IT — why this drug matters historically</div>
  <p>Ezetimibe plus simvastatin versus simvastatin alone in 18,144 post-ACS patients. Modest but significant reduction in cardiovascular events. <strong>The first demonstration that a non-statin LDL-lowering drug reduces cardiovascular events</strong> — which converted "the statin hypothesis" into "the LDL hypothesis". Every subsequent non-statin owes its plausibility to this trial.</p>
</div>` },
    { tier: 2, h: "Bempedoic acid", html: `
<p><strong>Mechanism:</strong> inhibits <strong>ATP-citrate lyase</strong>, one step <em>upstream</em> of HMG-CoA reductase in the same pathway. Same downstream consequence: hepatic cholesterol falls, SREBP-2 activates, LDL receptors rise.</p>
<div class="keybox">
  <div class="eyebrow">The design feature that is the entire clinical point</div>
  <p>Bempedoic acid is a <strong>prodrug</strong> requiring activation by <strong>ACSVL1</strong>, an enzyme expressed in liver but <strong>absent from skeletal muscle</strong>. The drug is therefore never activated in myocytes. This is elegant, deliberate medicinal chemistry aimed squarely at the statin-intolerance problem.</p>
</div>
<p><strong>Efficacy:</strong> ~18% as monotherapy; ~38% in fixed-dose combination with ezetimibe.</p>
<p><strong>Evidence:</strong> <strong>CLEAR Outcomes</strong> demonstrated MACE reduction in statin-intolerant patients — an outcome trial in precisely the population that needed one. The 2025 ESC/EAS focused update newly includes bempedoic acid among non-statin options with proven cardiovascular benefit.</p>
<p><strong>Adverse effects:</strong> raises uric acid (gout), tendon rupture signal, small rise in creatinine, and it raises statin exposure so simvastatin and pravastatin doses must be capped.</p>` },
    { tier: 2, h: "PCSK9 monoclonal antibodies", html: `
<p><strong>Mechanism:</strong> fully human monoclonal antibodies bind circulating PCSK9, preventing it from directing the LDL receptor to lysosomal degradation. The receptor recycles to the surface instead — several times rather than once. Recall Module 2: statins raise PCSK9, so this combination removes a brake the statin itself applied.</p>
<p><strong>Agents:</strong> alirocumab 75-150 mg every 2 weeks; evolocumab 140 mg every 2 weeks or 420 mg monthly.</p>
<p><strong>PK:</strong> subcutaneous. Target-mediated disposition — cleared by binding their target, so half-life is concentration-dependent. No hepatic or renal dose adjustment. Main adverse effect is injection-site reaction. Remarkably clean otherwise, including at LDL-C values below 25 mg/dL.</p>
<h4>The outcome trials</h4>
<div class="tablewrap"><table>
<thead><tr><th>Trial</th><th>Population</th><th>Result</th></tr></thead>
<tbody>
<tr><td><strong>FOURIER</strong></td><td>Evolocumab, established ASCVD</td><td>15% MACE reduction; LDL-C to a median of 30 mg/dL</td></tr>
<tr><td><strong>ODYSSEY OUTCOMES</strong></td><td>Alirocumab, post-ACS</td><td>15% MACE reduction; all-cause mortality benefit in the higher-baseline-LDL subgroup</td></tr>
<tr><td><strong>VESALIUS-CV</strong> (2025)</td><td>Evolocumab, high risk, <strong>no prior MI or stroke</strong></td><td>See the set piece below</td></tr>
</tbody></table></div>` },
    { tier: 2, h: "VESALIUS-CV — the set piece", html: `
<p>Presented at the American Heart Association meeting, November 2025. More than <strong>12,000 high-risk patients with no prior myocardial infarction or stroke</strong> (about 85% on background moderate or high-intensity lipid-lowering therapy), median follow-up approximately 4.5 years.</p>
<div class="tablewrap"><table>
<thead><tr><th>Endpoint</th><th>Result</th></tr></thead>
<tbody>
<tr><td><strong>Primary composite</strong> (CHD death, MI, ischaemic stroke)</td><td><strong>HR 0.75 (95% CI 0.65-0.86); 6.2% vs 8.0%; p&lt;0.001</strong> — a 25% relative reduction</td></tr>
<tr><td><strong>Expanded primary</strong> (plus ischaemia-driven revascularisation)</td><td>HR 0.81 (0.73-0.89); 13.4% vs 16.2%</td></tr>
<tr><td>Cardiovascular mortality</td><td>21% reduction (nominal)</td></tr>
<tr><td>All-cause mortality</td><td>20% reduction (nominal; hierarchical testing precluded formal confirmation)</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">Why this is a teaching centrepiece, not merely a trial result</div>
  <p>The ACC/AHA writing committee published their new guideline in March 2026 and then, in an accompanying editorial, effectively said their own risk categories may already be obsolete. They wrote that the VESALIUS-CV findings <strong>"blur the distinction between ASCVD risk categories when defining a goal LDL-C value"</strong>, and argued that future updates should adopt <strong>a single pathway of care for all patients with ASCVD, with an optimal LDL-C goal below 55 mg/dL.</strong></p>
  <p style="margin-top:8px">Few teaching opportunities show guideline evolution this transparently. Use it to teach learners that guidelines are <em>snapshots of an argument in progress</em>, not scripture — and that the people who write them know it.</p>
</div>` },
    { tier: 2, h: "Enlicitide — the first oral PCSK9 inhibitor", html: `
<div class="flag ok"><strong>FDA approved 16 July 2026</strong> (marketed as Lipfendra). A macrocyclic peptide that blocks the PCSK9-LDL receptor interaction, taken as a <strong>once-daily 20 mg oral tablet</strong>. The first oral agent in this class.</div>
<div class="tablewrap"><table>
<thead><tr><th>Trial</th><th>n</th><th>Result at week 24</th></tr></thead>
<tbody>
<tr><td><strong>CORALreef Lipids</strong></td><td class="num">2,904</td><td>LDL-C <strong>-57%</strong> vs +3% placebo; non-HDL-C -54%; apoB -50%</td></tr>
<tr><td><strong>CORALreef HeFH</strong></td><td>—</td><td>LDL-C <strong>-59%</strong> vs placebo</td></tr>
<tr><td><strong>CORALreef Outcomes</strong></td><td class="num">&gt;14,500</td><td><strong>Ongoing.</strong> No cardiovascular outcome data yet.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">Why this matters disproportionately for India and other LMICs</div>
  <p>Injectable PCSK9 inhibitors have been effectively unavailable to the great majority of Indian patients — cold chain, cost, and the practical difficulty of a fortnightly injection in a rural setting. An oral tablet with equivalent LDL-C efficacy changes the <em>long-run</em> calculus entirely, once patent expiry and generic manufacture arrive. It does not change this year's prescription. Teach it as the shape of the next decade.</p>
  <p style="margin-top:8px"><strong>Caveat to hold firmly:</strong> as of September 2026 enlicitide has LDL-C data, not outcome data. CORALreef Outcomes is still running. Given the CTT log-linear relationship the expectation is favourable, but expectation is not evidence — and this course has already shown you niacin, torcetrapib and ziltivekimab.</p>
</div>` },
    { tier: 2, h: "Inclisiran, sequestrants, fibrates, icosapent ethyl", html: `
<h4>Inclisiran</h4>
<p>A small interfering RNA, GalNAc-conjugated for hepatocyte-specific uptake, that silences <em>PCSK9</em> mRNA. LDL-C reduction ~50%. Dosing: day 0, day 90, then <strong>every six months</strong> — two injections a year, administered in clinic, which removes adherence from the patient entirely. That is a genuinely important property in populations where adherence is the binding constraint.</p>
<div class="flag warn"><strong>Read the 2026 ACC/AHA guideline carefully here:</strong> it explicitly notes that <em>inclisiran is still being studied to determine whether the associated LDL-C lowering translates into better outcomes and fewer cardiac events.</em> ORION-4 (n=15,000) completes in 2026; VICTORION-2P reports in 2027; VICTORION-1P in 2029. VICTORION-Mono supported a monotherapy indication. <strong>This is a drug with a strong mechanism, strong surrogate data, and no completed outcomes trial.</strong></div>
<h4>Bile acid sequestrants</h4>
<p>Cholestyramine, colestipol, colesevelam. Mechanism in Module 3. LDL-C down 15-25%. Not absorbed, so systemically safe — which makes them the traditional option in <strong>pregnancy</strong> and in paediatric FH. Limited by GI intolerance and by binding other drugs (dose others 1 hour before or 4 hours after). <strong>Raise triglycerides.</strong> Colesevelam additionally lowers HbA1c.</p>
<h4>Fibrates</h4>
<p>PPAR-alpha agonists: increase LPL and apoA-I/A-II, decrease apoC-III. Triglycerides fall 30-50%; LDL-C effect is minimal and sometimes adverse.</p>
<div class="keybox">
  <p><strong>The evidence is clear and frequently ignored: fibrates have not shown consistent MACE benefit when added to a statin.</strong> ACCORD-Lipid was null overall; FIELD was null on its primary endpoint; PROMINENT (pemafibrate, 2022) was null despite substantial triglyceride lowering. <strong>Use fibrates to prevent pancreatitis in severe hypertriglyceridaemia, not to reduce ASCVD risk.</strong> And never with gemfibrozil alongside a statin.</p>
</div>
<h4>Icosapent ethyl</h4>
<p>High-purity eicosapentaenoic acid ethyl ester, 2 g twice daily. <strong>REDUCE-IT</strong> showed a 25% MACE reduction; <strong>STRENGTH</strong> (a mixed EPA/DHA preparation) was null. The discrepancy is unresolved — candidate explanations include the mineral oil comparator in REDUCE-IT possibly raising event rates in the control arm, and genuine differences between purified EPA and EPA/DHA mixtures. <strong>Teach the two trials together; the discrepancy is the lesson.</strong></p>
<p><strong>2025 ESC/EAS focused update:</strong> in high-risk or very-high-risk patients with fasting triglycerides of <strong>135-499 mg/dL (1.52-5.63 mmol/L) despite statin therapy</strong>, high-dose icosapent ethyl (2 x 2 g/day) <strong>should be considered (Class IIa, Level B)</strong>. Watch for atrial fibrillation and bleeding.</p>` },
    { tool: 'combo-builder' },
    { tier: 3, h: "Specialist and historical agents", html: `
<div class="tablewrap"><table>
<thead><tr><th>Agent</th><th>Mechanism</th><th>Place</th></tr></thead>
<tbody>
<tr><td><strong>Lomitapide</strong></td><td>MTP inhibition — blocks apoB lipidation</td><td>HoFH. 40-50% LDL-C reduction. Hepatic steatosis; strict monitoring; REMS programme.</td></tr>
<tr><td><strong>Evinacumab</strong></td><td>ANGPTL3 monoclonal antibody</td><td>HoFH. ~50% reduction, <strong>LDL-receptor-independent</strong> — works in receptor-negative disease. IV infusion.</td></tr>
<tr><td><strong>Olezarsen</strong></td><td>apoC-III antisense oligonucleotide</td><td>Familial chylomicronaemia syndrome; severe hypertriglyceridaemia.</td></tr>
<tr><td><strong>Plozasiran</strong></td><td>apoC-III siRNA</td><td>Same territory; less frequent dosing.</td></tr>
<tr><td><strong>Lipoprotein apheresis</strong></td><td>Extracorporeal removal of apoB particles</td><td>HoFH, severe refractory FH, very high Lp(a) with progressive disease. Also removes Lp(a) — currently the only established way to do so.</td></tr>
<tr><td><strong>Niacin</strong></td><td>Reduces hepatic VLDL secretion; raises HDL-C</td><td><strong>Historical.</strong> See below.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">Niacin: the cautionary canon</div>
  <p>Niacin raises HDL-C, lowers triglycerides and modestly lowers LDL-C. Every surrogate moves in the right direction. <strong>AIM-HIGH</strong> was stopped for futility. <strong>HPS2-THRIVE</strong> found no benefit and significant harm — myopathy, infection, bleeding, new-onset diabetes.</p>
  <p style="margin-top:8px">Teach niacin not as a therapy but as the field's most expensive lesson in the difference between a biomarker and an outcome. It sits alongside torcetrapib, dalcetrapib, evacetrapib and now ziltivekimab. Every one of them hit its target. Not one of them helped.</p>
</div>` }
  ],
  unknown: "Whether inclisiran and enlicitide will demonstrate the outcome benefit their LDL-C reductions predict. The CTT relationship says they should. The graveyard of surrogate-endpoint drugs says wait for the trial.",
  readings: [
    { tier: 2, cite: "Cannon CP et al. Ezetimibe added to statin therapy after acute coronary syndromes (IMPROVE-IT). NEJM 2015;372:2387-97.", why: "The trial that converted the statin hypothesis into the LDL hypothesis.", url: "" },
    { tier: 2, cite: "Nissen SE et al. Bempedoic acid and cardiovascular outcomes in statin-intolerant patients (CLEAR Outcomes). NEJM 2023.", why: "An outcome trial in the population that most needed one.", url: "" },
    { tier: 3, cite: "VESALIUS-CV primary results, AHA 2025.", why: "The trial that outran the guideline that was being written about it.", url: "" },
    { tier: 3, cite: "HPS2-THRIVE Collaborative Group. Effects of extended-release niacin with laropiprant. NEJM 2014;371:203-12.", why: "How a drug with perfect surrogates fails.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "A patient on atorvastatin 40 mg has LDL-C 88 mg/dL; goal is under 70. The most efficient next step is:",
      opts: ["Double to atorvastatin 80 mg", "Add ezetimibe 10 mg", "Switch to rosuvastatin 40 mg", "Add a fibrate"],
      a: 1,
      why: ["Doubling buys about 6% — roughly 5 mg/dL, taking 88 to 83. Not enough.",
            "Correct. Ezetimibe adds 20-25%, taking 88 to roughly 66-70. One tablet, cheap, no CYP interactions, and it has outcome evidence from IMPROVE-IT. This is precisely the arithmetic behind the ESC/EAS upfront-combination strategy.",
            "A reasonable alternative, but switching agents at equivalent intensity gains little compared with adding a second mechanism.",
            "Fibrates have minimal LDL-C effect and no MACE benefit added to a statin."] },
    { tier: 1, q: "Bempedoic acid is unlikely to cause muscle symptoms because:",
      opts: ["It is not absorbed systemically", "It is a prodrug requiring ACSVL1, an enzyme absent from skeletal muscle", "It acts only in the intestine", "It has a very short half-life"],
      a: 1,
      why: ["It is absorbed and acts in the liver.",
            "Correct. ACSVL1 activates the prodrug and is expressed in liver but not skeletal muscle, so the active drug is never generated in myocytes. This was deliberate medicinal chemistry aimed at the statin-intolerance problem, and CLEAR Outcomes validated it clinically.",
            "It acts hepatically, upstream of HMG-CoA reductase.",
            "Half-life is not the mechanism of muscle sparing."] },
    { tier: 2, q: "Which non-statin was the FIRST to demonstrate that LDL lowering by a non-statin mechanism reduces cardiovascular events?",
      opts: ["Evolocumab in FOURIER", "Ezetimibe in IMPROVE-IT", "Bempedoic acid in CLEAR Outcomes", "Inclisiran in ORION-4"],
      a: 1,
      why: ["FOURIER came later and built on the principle IMPROVE-IT established.",
            "Correct. IMPROVE-IT (2015) showed that adding ezetimibe to simvastatin reduced events after ACS. It converted the statin hypothesis into the LDL hypothesis and made every subsequent non-statin plausible.",
            "Later, and in a specific statin-intolerant population.",
            "ORION-4 has not yet reported."] },
    { tier: 2, q: "Regarding inclisiran, the 2026 ACC/AHA guideline notes that:",
      opts: ["It is first-line therapy for all high-risk patients", "It is still being studied to determine whether LDL-C lowering translates into fewer cardiac events", "It has been withdrawn due to safety concerns", "It is superior to PCSK9 monoclonal antibodies"],
      a: 1,
      why: ["The guideline makes no such recommendation.",
            "Correct. Inclisiran has robust LDL-C data and a twice-yearly dosing schedule that solves adherence elegantly, but no completed cardiovascular outcomes trial. ORION-4 completes in 2026 and VICTORION-2P reports in 2027. The guideline is explicit about this gap — and the distinction between surrogate and outcome evidence is the point.",
            "No safety withdrawal; pooled ORION data showed no major safety concerns.",
            "No head-to-head outcome comparison exists."] },
    { tier: 2, q: "In VESALIUS-CV, evolocumab in patients WITHOUT prior MI or stroke reduced the primary composite endpoint by approximately:",
      opts: ["10%", "15%", "25%", "40%"],
      a: 2,
      why: ["An underestimate. The observed effect was substantially larger, which is precisely what made the trial so consequential for guideline writers.",
            "That is roughly the FOURIER and ODYSSEY OUTCOMES effect size in secondary prevention. VESALIUS-CV, notably, was larger than that despite being a primary prevention population.",
            "Correct. HR 0.75 (95% CI 0.65-0.86), 6.2% versus 8.0%, p below 0.001 — a 25% relative reduction, in a high-risk primary prevention population. The result led the ACC/AHA writing committee to argue in an editorial that future guidelines should adopt a single LDL-C goal below 55 mg/dL for all patients with ASCVD.",
            "An overestimate. No LDL-lowering agent has produced a MACE reduction of this magnitude in a cardiovascular outcomes trial, and a figure this large should prompt scepticism."] },
    { tier: 3, q: "Fenofibrate rather than gemfibrozil should be used with a statin because gemfibrozil:",
      opts: ["Is less effective at lowering triglycerides", "Inhibits statin glucuronidation and OATP1B1, substantially increasing myopathy risk", "Is not available as a generic", "Raises LDL-C"],
      a: 1,
      why: ["Efficacy is not the issue; both agents lower triglycerides effectively. The problem with gemfibrozil is pharmacokinetic, not pharmacodynamic.",
            "Correct. Gemfibrozil interferes with both statin glucuronidation and OATP1B1-mediated hepatic uptake, raising systemic statin exposure and myopathy risk markedly. This combination should be regarded as contraindicated. Fenofibrate lacks this interaction.",
            "Availability is irrelevant to the pharmacology.",
            "It does not raise LDL-C meaningfully."] },
    { tier: 3, q: "Niacin, torcetrapib and ziltivekimab share which instructive feature?",
      opts: ["All caused fatal hepatotoxicity", "All improved their intended biomarker convincingly yet failed to reduce cardiovascular events", "All were withdrawn before phase 3", "All are LDL-lowering agents"],
      a: 1,
      why: ["Hepatotoxicity was not the common failure mode.",
            "Correct. Niacin raised HDL-C and lowered TG; torcetrapib raised HDL-C dramatically; ziltivekimab lowered IL-6 and hs-CRP exactly as designed. Every one hit its target. None reduced events (torcetrapib caused harm). This is the field's recurring lesson about surrogate endpoints — and the reason to withhold judgment on inclisiran and enlicitide until their outcome trials report.",
            "All reached phase 3 cardiovascular outcome trials.",
            "None of them is primarily an LDL-lowering agent."] }
  ]
},

/* ===================== MODULE 12 ===================== */
{
  id: 12, part: 4,
  title: "The Frontier: What Is Coming, and What Just Failed",
  tagline: "Lp(a) therapies, the CETP second attempt, gene editing — and the ZEUS journal club.",
  hook: "In a single twelve-month window, lipidology gained its first oral PCSK9 inhibitor and lost its most promising anti-inflammatory. Both events teach more than a success alone would.",
  time: { t1: 25, t2: 30, t3: 40 },
  objectives: [
    { tier: 1, text: "State the three directions in which the field is currently moving." },
    { tier: 2, text: "Describe the Lp(a)-lowering pipeline and state honestly what is and is not yet proven." },
    { tier: 2, text: "Explain the CETP inhibitor story from torcetrapib to obicetrapib." },
    { tier: 3, text: "Critically appraise the ZEUS null result against CANTOS, COLCOT and LoDoCo2." }
  ],
  sections: [
    { tier: 1, h: "Three things are changing", html: `
<ol>
<li><strong>Lp(a) is becoming measurable and, possibly soon, treatable.</strong> For the first time there are drugs that lower it by 80-95%. Whether that prevents events is the single biggest open question in lipidology.</li>
<li><strong>Injectable-only therapy is ending.</strong> An oral PCSK9 inhibitor is approved. A twice-yearly injectable exists. The delivery constraint that shaped the last decade is dissolving.</li>
<li><strong>Inflammation remains real but stubbornly untreatable.</strong> The 2026 ZEUS result was a substantial setback.</li>
</ol>` },
    { tier: 2, h: "Lp(a): the biggest open question in the field", html: `
<div class="flag warn"><strong>The field changed on 4 September 2026:</strong> Lp(a)HORIZON became the first major Lp(a)-lowering outcomes trial to report, and it was negative. Pelacarsen lowered Lp(a) but did not significantly reduce the composite of cardiovascular death, non-fatal myocardial infarction, non-fatal stroke and urgent coronary revascularisation versus placebo. This is a topline result, not yet a full peer-reviewed dataset. It does not prove that every Lp(a)-lowering strategy will fail; it does prove that biomarker lowering alone is not enough.</div>
<div class="tablewrap"><table>
<thead><tr><th>Agent</th><th>Modality</th><th>Lp(a) reduction</th><th>Outcome trial</th><th>Status</th></tr></thead>
<tbody>
<tr><td><strong>Pelacarsen</strong></td><td>Antisense oligonucleotide, 80 mg monthly</td><td class="num">Up to ~80%</td><td><strong>Lp(a)HORIZON</strong> — 8,323 secondary prevention patients, Lp(a) at or above 70 mg/dL</td><td><strong>Primary endpoint not met</strong>, topline 4 September 2026. Lp(a) fell, but the cardiovascular composite was not significantly reduced. Full results awaited.</td></tr>
<tr><td><strong>Olpasiran</strong></td><td>siRNA</td><td class="num">~94% at 36 weeks (phase 2)</td><td><strong>OCEAN(a)-Outcomes</strong> — over 7,200 patients, Lp(a) at or above 200 nmol/L</td><td>Phase 3 outcomes trial ongoing as of August 2026</td></tr>
<tr><td><strong>Lepodisiran</strong></td><td>siRNA, very long acting</td><td class="num">Over 90%</td><td>ACCLAIM-Lp(a)</td><td>Phase 3</td></tr>
<tr><td><strong>Zerlasiran</strong></td><td>siRNA</td><td class="num">Over 80%</td><td>—</td><td>Phase 2 complete</td></tr>
<tr><td><strong>Muvalaplin</strong></td><td><strong>Oral small molecule</strong> — disrupts apo(a)-apoB assembly</td><td class="num">~65-85%</td><td>—</td><td>Phase 2. The oral option, if it works.</td></tr>
</tbody></table></div>
<p><strong>Meanwhile, what do you do for a patient with Lp(a) of 140 nmol/L today?</strong> Aggressively control every risk factor you <em>can</em> modify — LDL-C driven low, blood pressure, smoking, diabetes — and screen the family, because Lp(a) is inherited and the relatives do not know. That is not a satisfying answer, but it is the correct one, and saying so honestly is better teaching than implying we have more than we do.</p>` },
    { tier: 2, h: "CETP inhibition: the second attempt", html: `
<p>Four first-generation CETP inhibitors failed, each instructively:</p>
<div class="tablewrap"><table>
<thead><tr><th>Agent</th><th>Outcome</th><th>Lesson</th></tr></thead>
<tbody>
<tr><td><strong>Torcetrapib</strong></td><td>ILLUMINATE stopped early for <strong>increased mortality</strong></td><td>Off-target aldosterone and blood pressure effects. A molecule-specific toxicity, not a class effect.</td></tr>
<tr><td><strong>Dalcetrapib</strong></td><td>dal-OUTCOMES null</td><td>Weak CETP inhibition; raised HDL-C without lowering LDL-C or apoB. Nothing happened.</td></tr>
<tr><td><strong>Evacetrapib</strong></td><td>ACCELERATE null despite large HDL-C rise and LDL-C fall</td><td>The most puzzling failure of the four, and the strongest single argument against the HDL hypothesis.</td></tr>
<tr><td><strong>Anacetrapib</strong></td><td>REVEAL modestly positive</td><td>Benefit tracked apoB reduction, not HDL-C rise. Development discontinued over adipose accumulation.</td></tr>
</tbody></table></div>
<p><strong>Obicetrapib</strong> is a different proposition. It is a potent CETP inhibitor being developed explicitly as an <strong>LDL-C and apoB-lowering agent</strong>, with the HDL-C rise treated as incidental rather than as the mechanism of benefit. That is a materially different hypothesis from the one that failed four times.</p>
<ul>
<li><strong>BROADWAY</strong> and <strong>TANDEM</strong> (with ezetimibe): phase 3, positive on LDL-C.</li>
<li><strong>PREVAIL</strong>: cardiovascular outcomes trial, over 9,500 patients with established ASCVD on maximally tolerated therapy. Interim analysis is planned for Q4 2026, with a result expected in Q1 2027.</li>
</ul>
<p class="note">An intriguing side-signal: obicetrapib has been examined for effects on plasma p-tau217, raising questions about CETP inhibition and Alzheimer biology. Interesting; entirely unproven.</p>` },
    { tier: 3, h: "ZEUS — a null result worth an entire lecture", html: `
<p><strong>Headline results announced 31 July 2026.</strong></p>
<div class="tablewrap"><table>
<thead><tr><th>Element</th><th>Detail</th></tr></thead>
<tbody>
<tr><td>Agent</td><td>Ziltivekimab, an IL-6 monoclonal antibody, 15 mg monthly subcutaneously</td></tr>
<tr><td>Population</td><td>Over 6,300 patients with ASCVD <strong>and</strong> chronic kidney disease <strong>and</strong> hs-CRP at or above 2 mg/L</td></tr>
<tr><td>Target engagement</td><td><strong>Confirmed.</strong> Free IL-6 and hs-CRP fell as expected.</td></tr>
<tr><td>Primary outcome (MACE)</td><td><strong>Hazard ratio 0.99.</strong> No effect.</td></tr>
</tbody></table></div>
<h4>Set it against the rest of the inflammation literature</h4>
<div class="tablewrap"><table>
<thead><tr><th>Trial</th><th>Target</th><th>Result</th></tr></thead>
<tbody>
<tr><td>CANTOS</td><td>IL-1 beta (canakinumab)</td><td>Modest MACE reduction without LDL-C change; increased fatal infection</td></tr>
<tr><td>COLCOT / LoDoCo2</td><td>Low-dose colchicine (broad)</td><td>Positive. Cheap and generic — of real interest in low-resource settings</td></tr>
<tr><td><strong>ZEUS</strong></td><td>IL-6</td><td><strong>Null</strong></td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">The three candidate explanations — and we do not know which</div>
  <ol style="margin-bottom:0">
    <li><strong>The hypothesis is wrong.</strong> hs-CRP marks risk without inflammation being causally modifiable at this node.</li>
    <li><strong>The node is wrong.</strong> IL-1 beta blockade worked modestly; IL-6 blockade did not. Perhaps the relevant pathway diverges upstream of IL-6, or IL-6 has offsetting protective functions.</li>
    <li><strong>The population was wrong.</strong> ASCVD plus CKD is a group with high competing non-atherothrombotic mortality, which can dilute any effect on MACE.</li>
  </ol>
</div>
<p><strong>HERMES</strong> (heart failure) and <strong>ARTEMIS</strong> (post-MI) read out in the first half of 2027 and may discriminate between these.</p>
<div class="flag warn"><strong>Journal-club exercise:</strong> before reading any commentary, write 150 words interpreting this result. Which of the three explanations do you favour, and what single piece of additional data would change your mind? Learning to sit with an unresolved result — rather than reaching for a tidy conclusion — is a skill that no amount of guideline memorisation substitutes for.</div>` },
    { tier: 3, h: "Gene editing and the far frontier", html: `
<p><strong>VERVE-101 / VERVE-102</strong> — in vivo <strong>base editing</strong> of hepatic <em>PCSK9</em>, delivered in a lipid nanoparticle. A single infusion makes a permanent, heritable-within-the-liver edit that switches off PCSK9 production. Early-phase human data show durable substantial LDL-C reduction.</p>
<p>The pharmacological logic is unimpeachable: PCSK9 loss-of-function carriers are healthy and protected. The ethical and regulatory questions are not:</p>
<ul>
<li><strong>Irreversibility.</strong> There is no discontinuation if a late adverse effect emerges. This is categorically different from a drug.</li>
<li><strong>Long-term safety</strong> of off-target edits, over a lifetime rather than a trial.</li>
<li><strong>Who gets it.</strong> A one-time treatment could be transformative for adherence in low-resource settings — or could become the most inequitably distributed cardiovascular therapy ever developed, depending entirely on price.</li>
<li><strong>Consent</strong> for an intervention whose effects outlast every existing safety database.</li>
</ul>
<p>Other frontiers worth naming: <strong>ANGPTL3 silencing</strong> (zodasiran, solbinsiran) and <strong>apoC-III silencing</strong> (olezarsen, plozasiran) for the triglyceride and remnant axis; <strong>oral GLP-1 and incretin combinations</strong> reshaping the metabolic substrate on which dyslipidaemia sits.</p>` }
  ],
  unknown: "Everything in this module. That is the point of it. The honest summary as of September 2026: the first major Lp(a)-lowering outcomes trial was negative, but whether a different agent, degree, timing or population can improve outcomes remains unknown; we have a fourth CETP inhibitor and do not know whether it helps; we can edit PCSK9 permanently and do not know whether we should.",
  readings: [
    { tier: 2, cite: "Tsimikas S et al. Lipoprotein(a) reduction in persons with cardiovascular disease (pelacarsen phase 2). NEJM 2020;382:244-55.", why: "The dose-ranging study that set the phase 3 programme.", url: "" },
    { tier: 2, cite: "Novartis. Lp(a)HORIZON phase 3 topline results, 4 September 2026.", why: "The first major Lp(a)-lowering outcomes result—and a reminder that target engagement is not clinical benefit.", url: "https://www.novartis.com/news/media-releases/novartis-announces-lpahorizon-phase-iii-topline-results-pelacarsen-patients-elevated-lpa-and-established-cardiovascular-disease-cvd" },
    { tier: 3, cite: "Nissen SE et al. Obicetrapib phase 3 programme (BROADWAY, TANDEM).", why: "The CETP second attempt, argued on LDL-C rather than HDL-C.", url: "" },
    { tier: 3, cite: "Ridker PM et al. Antiinflammatory therapy with canakinumab for atherosclerotic disease (CANTOS). NEJM 2017;377:1119-31.", why: "Read alongside the ZEUS result. The contrast is the lesson.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "After the September 2026 Lp(a)HORIZON topline announcement, the correct statement about Lp(a)-lowering therapy is:",
      opts: ["Pelacarsen is approved and reduces cardiovascular events", "Pelacarsen lowered Lp(a) but did not meet its cardiovascular primary endpoint; other outcome strategies remain under study", "Lp(a) can be lowered effectively by diet and exercise", "The negative trial proves Lp(a) is not a causal risk factor"],
      a: 1,
      why: ["Pelacarsen is not approved for cardiovascular risk reduction, and Lp(a)HORIZON did not meet its primary endpoint.",
            "Correct. This is the disciplined interpretation of a topline negative trial: pelacarsen's biomarker effect did not translate into a significant reduction in the prespecified cardiovascular composite, while other agents and the full dataset remain under study.",
            "Lp(a) is roughly 70-90% genetically determined and barely responds to lifestyle.",
            "A negative drug trial can reflect the agent, dose, timing, population or target; it does not by itself overturn the broader genetic and epidemiological evidence for Lp(a) as a risk factor."] },
    { tier: 2, q: "Obicetrapib differs from the failed first-generation CETP inhibitors principally in that it is being developed as:",
      opts: ["An HDL-C-raising agent with better tolerability", "An LDL-C and apoB-lowering agent, with the HDL-C rise treated as incidental", "A triglyceride-lowering agent", "An anti-inflammatory agent"],
      a: 1,
      why: ["That was the failed hypothesis, tested four times.",
            "Correct. This is a materially different hypothesis from the one that failed. Note that anacetrapib in REVEAL produced benefit that tracked apoB reduction rather than HDL-C rise — the clue that reframed the class. PREVAIL will test it.",
            "Not the primary mechanism.",
            "Not the primary mechanism, although the p-tau217 signal is an interesting aside."] },
    { tier: 2, q: "A patient has LDL-C at goal on rosuvastatin and ezetimibe, but Lp(a) is 145 nmol/L. The correct management today is:",
      opts: ["Start pelacarsen", "Add niacin to lower Lp(a)", "Aggressively optimise every modifiable risk factor and screen first-degree relatives", "Reassure — Lp(a) is not a real risk factor"],
      a: 2,
      why: ["Pelacarsen is not approved for this use, and its phase 3 cardiovascular primary endpoint was negative.",
            "Niacin lowers Lp(a) modestly but has been shown to be ineffective and harmful in outcome trials. Do not use it.",
            "Correct. Drive LDL-C lower still, control blood pressure, stop smoking, manage diabetes — and screen the family, because Lp(a) is inherited and the relatives do not know. Unsatisfying but correct, and honesty about the limits of what we can offer is part of good teaching.",
            "Lp(a) is the strongest known genetic risk factor for premature coronary disease. This is wrong."] },
    { tier: 3, q: "The ZEUS trial showed clear reduction in IL-6 and hs-CRP but a MACE hazard ratio of 0.99. Which is NOT a plausible explanation?",
      opts: ["The inflammatory hypothesis may be wrong at this node", "IL-6 may have offsetting protective functions", "The ASCVD-plus-CKD population may have had high competing non-atherothrombotic mortality diluting the effect", "The drug failed to engage its target"],
      a: 3,
      why: ["A legitimate candidate explanation.",
            "A legitimate candidate explanation, and one reason IL-1 beta blockade may have differed.",
            "A legitimate candidate explanation — competing risk can dilute an effect on MACE.",
            "Correct as the answer to 'NOT plausible'. Target engagement was explicitly confirmed: free IL-6 and hs-CRP fell as expected. That is precisely what makes this result so instructive — the drug did exactly what it was designed to do and it did not help."] },
    { tier: 3, q: "The principal ethical distinction between base editing of PCSK9 and a monoclonal antibody against PCSK9 is:",
      opts: ["Base editing is less effective", "Base editing is irreversible, so there is no discontinuation if a late adverse effect emerges", "Base editing requires more frequent dosing", "Monoclonal antibodies are heritable"],
      a: 1,
      why: ["Early data suggest comparable or greater LDL-C reduction.",
            "Correct. A monoclonal antibody can be stopped. A base edit cannot be undone. This is categorically different from drug therapy and is why the consent, long-term safety and equity questions are qualitatively harder. The efficacy is the easy part.",
            "Base editing is a single infusion — that is one of its attractions.",
            "Neither is germline-heritable; the edit is somatic and confined to hepatocytes."] }
  ]
},

/* ===================== MODULE 13 ===================== */
{
  id: 13, part: 5,
  title: "INDIA: A Different Patient, A Different Guideline",
  tagline: "81% prevalence, an atherogenic phenotype, lower targets, and a cost structure that changes what 'best practice' means.",
  hook: "An Indian man has his first myocardial infarction, on average, about a decade earlier than his European counterpart. His LDL-C is often unremarkable. Explain that.",
  time: { t1: 50, t2: 45, t3: 30 },
  objectives: [
    { tier: 1, text: "State the scale of dyslipidaemia in India and describe the Indian atherogenic phenotype." },
    { tier: 1, text: "Explain why Indian guidelines set lower LDL-C targets." },
    { tier: 2, text: "Apply the Lipid Association of India risk categories and the CSI 2024 recommendations." },
    { tier: 2, text: "Account for drug cost and access when prescribing in India." },
    { tier: 3, text: "Discuss implementation, the treatment gap and screening strategy in a low-resource setting." }
  ],
  sections: [
    { tier: 1, h: "The scale of it", html: `
<div class="tablewrap"><table>
<thead><tr><th>Finding</th><th>Source</th></tr></thead>
<tbody>
<tr><td><strong>Weighted prevalence of dyslipidaemia: 81.2% (95% CI 77.9-84.5)</strong> — close to 9 in 10 adults by the definition used. Higher in urban areas, in women, and in central India. Markedly higher with adverse glycaemic status, obesity and hypertension.</td><td>ICMR-INDIAB-17, <em>Lancet Diabetes Endocrinol</em> 2023;11:474. n = 113,043 (79,506 rural, 33,537 urban), surveyed 2008-2020.</td></tr>
<tr><td><strong>213.3 million Indian adults with hypercholesterolaemia; 185.7 million with elevated LDL-C</strong> (2021 estimates).</td><td>ICMR-INDIAB-25, <em>J Clin Lipidol</em> 2026. PMID 42547322.</td></tr>
<tr><td><strong>Roughly 25% of South Asians have Lp(a) above 50 mg/dL</strong>, substantially above Western populations. MI occurs <strong>approximately 10 years earlier</strong> than in people of European descent, with more premature and multivessel disease.</td><td><em>J Am Heart Assoc</em> 2025. PMID 40654252.</td></tr>
</tbody></table></div>` },
    { tier: 1, h: "The Indian phenotype — and why a normal lipid panel misleads", html: `
<div class="keybox">
  <div class="eyebrow">The most important paragraph in this module</div>
  <p>The characteristic Indian dyslipidaemia is <strong>high triglycerides, low HDL-C, high small dense LDL, high Lp(a), high apoB — frequently with a total and LDL cholesterol that look unremarkable.</strong></p>
  <p style="margin-top:8px">This is exactly the atherogenic triad you built mechanistically in Module 4: insulin resistance drives VLDL overproduction, CETP and hepatic lipase remodel the particles, and you end with many small cholesterol-poor LDL particles. A given LDL-C therefore represents <em>far more particles</em> in this phenotype than in a European one.</p>
  <p style="margin-top:8px"><strong>Consequence: measuring only total and LDL cholesterol in an Indian clinic systematically under-detects risk.</strong> Non-HDL-C is free and should be on every report. ApoB is the better measure where affordable. This single change in reading habits is probably the highest-yield thing this module can teach.</p>
</div>
<p>Additional features: insulin resistance appears at lower BMI and lower waist circumference than in European populations (hence lower Indian cut-offs for central obesity), and the disease burden is shifting rapidly into rural areas.</p>` },
    { tier: 2, h: "Lipid Association of India — Consensus Statement IV (2023 update)", html: `
<p>Published in the <em>Journal of Clinical Lipidology</em> 2024 (PMID 38485619).</p>
<div class="keybox">
  <div class="eyebrow">The defining methodological decision</div>
  <p>The LAI <strong>abandons 10-year risk in favour of lifetime risk.</strong> Module 9 established why this is a methodological necessity rather than a preference: ten-year estimation is dominated by age, and is therefore least accurate in a population whose coronary disease arrives a decade early.</p>
</div>
<h4>LAI targets — more aggressive than any Western guideline</h4>
<div class="tablewrap"><table>
<thead><tr><th>Category</th><th>Definition</th><th>LDL-C goal</th></tr></thead>
<tbody>
<tr><td><strong>Very high risk</strong></td><td>Established ASCVD and comparable states</td><td><strong>Below 50 mg/dL</strong></td></tr>
<tr><td><strong>Extreme risk, category A</strong></td><td>For example CAD plus familial hypercholesterolaemia, or coronary artery calcium score at or above 300</td><td><strong>Below 50 mg/dL; optional goal at or below 30 mg/dL</strong></td></tr>
<tr><td><strong>Extreme risk, category B</strong></td><td>CAD plus diabetes with polyvascular disease, or 3 or more major ASCVD risk factors, or end-organ damage; OR recurrent ACS within 12 months despite LDL-C below 50; OR homozygous FH</td><td><strong>Recommended at or below 30 mg/dL</strong></td></tr>
</tbody></table></div>
<p class="note">Verify these against the CS-IV target table before teaching from them. Secondary sources vary, and one referenced an additional category with an ultra-low target that could not be corroborated and has been deliberately omitted here.</p>` },
    { tier: 2, h: "Cardiological Society of India guidelines (2024)", html: `
<p>The first dyslipidaemia guidelines issued by an Indian cardiology society, built around Indian data.</p>
<div class="tablewrap"><table>
<thead><tr><th>Element</th><th>CSI 2024 position</th></tr></thead>
<tbody>
<tr><td><strong>Sampling</strong></td><td><strong>Non-fasting lipid measurement advocated as standard</strong> — a practical decision with real consequences for clinic throughput and follow-up in a high-volume system</td></tr>
<tr><td><strong>Primary target</strong></td><td>LDL-C; <strong>non-HDL-C prioritised when triglycerides are high</strong></td></tr>
<tr><td><strong>Very high risk goal</strong></td><td><strong>LDL-C below 55 mg/dL, or non-HDL-C below 85 mg/dL</strong></td></tr>
<tr><td><strong>Also addressed</strong></td><td>Apolipoproteins, triglycerides and Lp(a) — reflecting the Indian phenotype rather than an imported framework</td></tr>
<tr><td><strong>Lifestyle</strong></td><td>Dietary emphasis on <strong>reducing refined carbohydrate and sugar intake</strong> — a more relevant lever than saturated fat restriction in many Indian dietary patterns — plus regular exercise and yoga</td></tr>
</tbody></table></div>` },
    { tool: 'guideline-compare' },
    { tier: 2, h: "Cost and access: the part that makes this module usable", html: `
<div class="tablewrap"><table>
<thead><tr><th>Agent</th><th>Approximate Indian cost</th><th>Practical availability</th></tr></thead>
<tbody>
<tr><td><strong>Rosuvastatin 20 mg (Jan Aushadhi)</strong></td><td class="num">~Rs 27 per strip</td><td>Widely available</td></tr>
<tr><td><strong>Rosuvastatin 40 mg (Jan Aushadhi)</strong></td><td class="num">~Rs 41 per strip</td><td>Widely available</td></tr>
<tr><td><strong>Branded atorvastatin 20 mg</strong></td><td>Up to <strong>~53x</strong> the generic price</td><td>Widely available</td></tr>
<tr><td><strong>Ezetimibe</strong></td><td>Inexpensive generic</td><td>Widely available</td></tr>
<tr><td><strong>PCSK9 monoclonal antibodies</strong></td><td>Out of reach for the great majority</td><td>Cold chain and cost barriers</td></tr>
<tr><td><strong>Inclisiran</strong></td><td>Out of reach for most</td><td>Limited</td></tr>
</tbody></table></div>
<p>A patient on three branded cardiometabolic drugs may spend roughly Rs 4,000-6,000 a year where the Jan Aushadhi equivalents total under Rs 800.</p>
<div class="keybox">
  <div class="eyebrow">The conclusion that follows, and it is not the expected one</div>
  <p><strong>In India, the binding constraint on lipid control is almost never the price of a statin. It is diagnosis, initiation and adherence.</strong></p>
  <p style="margin-top:8px">A high-intensity statin costs a few rupees a day. The patients who are not controlled are overwhelmingly the ones who were never tested, never started, or stopped within six months. Directing effort at drug cost is directing it at the wrong problem — while directing it at opportunistic screening, cascade screening and adherence support addresses the actual one.</p>
</div>
<p>The arrival of an oral PCSK9 inhibitor (Module 11) changes the long-run calculus once patents expire and Indian manufacturers enter. It does not change this year's prescription.</p>` },
    { tier: 3, h: "Implementation: closing the gap", html: `
<h4>Where the losses occur</h4>
<p>Think of it as a cascade, and estimate the leak at each step in your own setting:</p>
<ol>
<li><strong>Screened</strong> — a minority of Indian adults have ever had a lipid panel.</li>
<li><strong>Diagnosed</strong> — abnormal results are frequently not acted upon.</li>
<li><strong>Treated</strong> — statin initiation rates in eligible patients are low even after an event.</li>
<li><strong>Adherent at 12 months</strong> — the largest single loss.</li>
<li><strong>At goal</strong> — a small fraction of the original denominator.</li>
</ol>
<h4>Levers that work in this setting</h4>
<ul>
<li><strong>Opportunistic screening at every clinical contact.</strong> Non-fasting sampling (CSI 2024) removes the single largest practical barrier — the return visit that never happens.</li>
<li><strong>The NCD programme and Ayushman Bharat Health and Wellness Centres</strong> as the delivery platform, with community health officers trained to identify and refer.</li>
<li><strong>Cascade screening for FH</strong> — high yield, low technology, needs only a lipid panel and a pedigree. Arguably the highest-return intervention available to an individual clinician.</li>
<li><strong>Fixed-dose combinations</strong> to reduce pill burden — a statin-ezetimibe FDC delivers roughly 60% LDL-C reduction in one tablet.</li>
<li><strong>The polypill</strong> in primary prevention. TIPS-3 and the polypill meta-analyses support event reduction; the debate concerns targeting, and it is a live one in Indian public health.</li>
<li><strong>Jan Aushadhi</strong> prescribing by default, written by generic name.</li>
</ul>
<h4>Two research gaps worth naming to learners</h4>
<ul>
<li><strong>No major risk calculator has been derived in an Indian cohort.</strong> Not PREVENT, not SCORE2, not Framingham. Their use in India is extrapolation, honestly acknowledged.</li>
<li><strong>The LAI targets, while biologically well-reasoned, are not supported by Indian outcome trials</strong> — because no such trial has been done. This is not a criticism of the LAI; it is an accurate statement of the evidence base, and learners should be able to say it.</li>
</ul>
<div class="flag warn"><strong>Teaching note for international learners:</strong> everything in this module generalises. Substitute your own population's phenotype, prevalence data, guideline and drug prices, and the reasoning transfers intact. The specific numbers are Indian; the method is universal.</div>` }
  ],
  unknown: "Whether the LAI's more aggressive LDL-C targets actually produce better outcomes in Indian patients. The biological rationale is sound. The trial has never been done, and it should be.",
  readings: [
    { tier: 1, cite: "ICMR-INDIAB-17. Metabolic non-communicable disease health report of India. Lancet Diabetes Endocrinol 2023;11:474-89.", why: "The population data every Indian clinician should be able to quote.", url: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(23)00119-5/fulltext" },
    { tier: 2, cite: "Lipid Association of India Consensus Statement IV. J Clin Lipidol 2024. PMID 38485619.", why: "The primary source for the Indian targets. Read the actual table.", url: "https://pubmed.ncbi.nlm.nih.gov/38485619/" },
    { tier: 2, cite: "CSI clinical practice guidelines for dyslipidemia management, 2024.", why: "The first Indian cardiology society guideline. Note the non-fasting recommendation.", url: "https://csi.org.in/frontend/assets/assets/CSI-clinical-practice-guidelines-for-dyslipidemia-_240413_141815.pdf" },
    { tier: 3, cite: "Role of Lipoprotein(a) in ASCVD in South Asian Individuals. J Am Heart Assoc 2025. PMID 40654252.", why: "Why the calculators fail and why Lp(a) matters more here.", url: "https://pubmed.ncbi.nlm.nih.gov/40654252/" }
  ],
  quiz: [
    { tier: 1, q: "The characteristic Indian dyslipidaemia phenotype is:",
      opts: ["Markedly elevated LDL-C with normal triglycerides", "High triglycerides, low HDL-C, small dense LDL, high Lp(a), high apoB, often with unremarkable LDL-C", "Isolated hypercholesterolaemia", "Isolated low HDL-C with normal everything else"],
      a: 1,
      why: ["This is the classic Western or familial hypercholesterolaemia pattern.",
            "Correct. This is the atherogenic triad from Module 4, driven by insulin resistance, CETP exchange and hepatic lipase remodelling. Because the LDL particles are cholesterol-poor, a given LDL-C represents far more particles — which is why reading only total and LDL cholesterol systematically under-detects risk in Indian patients.",
            "Too narrow, and misses the triglyceride and HDL components.",
            "Low HDL-C is part of the picture, but it does not occur in isolation."] },
    { tier: 1, q: "In the ICMR-INDIAB national study, the weighted prevalence of dyslipidaemia in Indian adults was approximately:",
      opts: ["25%", "45%", "62%", "81%"],
      a: 3,
      why: ["Far too low. This is closer to the prevalence of diabetes in urban India than to that of dyslipidaemia, and conflating the two badly understates the scale of the lipid problem.",
            "Far too low. Even the most conservative definitions applied to Indian survey data return a figure well above half the adult population.",
            "Still an underestimate, though closer. The true figure is high enough that the clinically useful question is not who has dyslipidaemia but who needs treating for it.",
            "Correct. 81.2% (95% CI 77.9-84.5) in ICMR-INDIAB-17, published in Lancet Diabetes Endocrinology in 2023 from 113,043 participants. Roughly 9 in 10 adults by the definition used. ICMR-INDIAB-25 subsequently estimated 213.3 million adults with hypercholesterolaemia."] },
    { tier: 2, q: "Under the Lipid Association of India Consensus Statement IV, the LDL-C goal for a very-high-risk patient is:",
      opts: ["Below 70 mg/dL", "Below 55 mg/dL", "Below 50 mg/dL", "Below 100 mg/dL"],
      a: 2,
      why: ["That is the high-risk goal in ESC/EAS and ACC/AHA.",
            "That is the very-high-risk goal in ESC/EAS, ACC/AHA and CSI 2024 — but the LAI goes lower.",
            "Correct. The LAI sets below 50 mg/dL for very high risk, and at or below 30 mg/dL for extreme risk category B. These are the most aggressive targets among major guidelines, reflecting the earlier onset and more aggressive course of ASCVD in Indians.",
            "Far above the LAI very-high-risk goal."] },
    { tier: 2, q: "The CSI 2024 guidelines notably advocate:",
      opts: ["Mandatory 12-hour fasting for all lipid panels", "Non-fasting lipid measurement as standard", "Abandoning LDL-C in favour of apoB alone", "Universal PCSK9 inhibitor use in secondary prevention"],
      a: 1,
      why: ["The opposite of their recommendation.",
            "Correct. Non-fasting sampling is advocated as standard. In a high-volume, resource-constrained system this is not a technicality — the fasting requirement is a major cause of missed tests and lost follow-up. Removing it converts an intention to screen into an actual screen.",
            "LDL-C remains the primary target, with non-HDL-C prioritised when triglycerides are high.",
            "Not recommended, and not affordable at scale in India."] },
    { tier: 2, q: "The binding constraint on lipid control in India is best characterised as:",
      opts: ["The cost of statins", "Diagnosis, initiation and adherence", "Lack of available drugs", "Absence of Indian guidelines"],
      a: 1,
      why: ["Generic statins cost a few rupees a day; Jan Aushadhi rosuvastatin 20 mg is around Rs 27 per strip. Cost is not the main obstacle for statins.",
            "Correct. The losses occur at screening, at initiation, and above all at twelve-month adherence. Directing effort at drug price addresses the wrong problem. Opportunistic non-fasting screening, cascade screening, fixed-dose combinations and adherence support address the actual one.",
            "Statins, ezetimibe and fibrates are all widely available as inexpensive generics.",
            "India has both LAI and CSI guidelines."] },
    { tier: 3, q: "The most honest statement about the LAI's aggressive LDL-C targets is:",
      opts: ["They are validated by large Indian outcome trials", "The biological rationale is sound but no Indian outcome trial has tested them", "They are unjustified and should be ignored in favour of ACC/AHA", "They are identical to ESC/EAS targets"],
      a: 1,
      why: ["No such trial exists.",
            "Correct. The reasoning — earlier onset, higher Lp(a), a phenotype that under-represents itself on LDL-C, and the cumulative-exposure argument — is coherent and well-grounded in mechanism and extrapolation. But no Indian cardiovascular outcome trial has tested the targets. Being able to state this clearly, without either dismissing the guideline or overselling it, is what distinguishes a Tier-3 learner.",
            "Dismissing them ignores well-reasoned population-specific biology and locally derived data.",
            "They are more aggressive than ESC/EAS: below 50 versus below 55 for the very-high-risk category, and at or below 30 for extreme risk."] }
  ]
},

/* ===================== MODULE 14 ===================== */
{
  id: 14, part: 5,
  title: "Special Populations and Difficult Conversations",
  tagline: "Children to the very old, pregnancy to cancer — and the conversation that decides whether any of it happens.",
  hook: "The guideline tells you the target. It does not tell you how to persuade a frightened 58-year-old who read something on WhatsApp.",
  time: { t1: 45, t2: 40, t3: 25 },
  objectives: [
    { tier: 1, text: "State the 2026 ACC/AHA positions on children, young adults, pregnancy, diabetes, CKD, HIV and cancer." },
    { tier: 2, text: "Individualise lipid management across special populations." },
    { tier: 2, text: "Conduct an evidence-based conversation with a statin-hesitant patient." },
    { tier: 3, text: "Reason about deprescribing and competing risk in the very old." }
  ],
  sections: [
    { tier: 1, h: "The 2026 ACC/AHA special-population recommendations", html: `
<div class="tablewrap"><table>
<thead><tr><th>Population</th><th>Position</th></tr></thead>
<tbody>
<tr><td><strong>Children and adolescents</strong></td><td>Lifestyle emphasis from childhood. <strong>Early consideration of pharmacotherapy in youth with familial hypercholesterolaemia.</strong></td></tr>
<tr><td><strong>Young adults</strong></td><td><strong>Early consideration of pharmacotherapy with LDL-C at or above 160 mg/dL, or a strong family history of premature ASCVD.</strong></td></tr>
<tr><td><strong>Pregnancy and lactation</strong></td><td><strong>Defer most lipid-lowering therapy during conception, pregnancy and lactation.</strong></td></tr>
<tr><td><strong>Diabetes (type 1 or type 2)</strong></td><td><strong>Initiate lipid-lowering therapy at age 40 or over.</strong></td></tr>
<tr><td><strong>Chronic kidney disease</strong></td><td><strong>Initiate at age 40 or over with CKD stage 3 or higher.</strong></td></tr>
<tr><td><strong>HIV</strong></td><td><strong>Initiate at age 40 or over.</strong></td></tr>
<tr><td><strong>Cancer</strong></td><td><strong>Continue lipid-lowering therapy during cancer treatment unless contraindicated</strong> — an explicit correction of widespread reflexive discontinuation.</td></tr>
<tr><td><strong>Severe hypertriglyceridaemia</strong></td><td>Statin remains the foundation for ASCVD risk. Treat for pancreatitis prevention especially at <strong>TG at or above 1,000 mg/dL (11.3 mmol/L)</strong>.</td></tr>
</tbody></table></div>` },
    { tier: 2, h: "Population-by-population detail", html: `
<h4>Children and adolescents</h4>
<ul>
<li>Universal screening at ages 9-11 and again at 17-21 (US practice); targeted screening where universal is impractical.</li>
<li>Statins from age 8-10 in familial hypercholesterolaemia. Long-term follow-up cohorts show normal growth and pubertal development, and markedly reduced adult cardiovascular events.</li>
<li>Treatment target in paediatric FH: LDL-C below 130 mg/dL, or a 50% reduction.</li>
<li>Do not miss the opportunity to screen the parents — a child with FH means a parent with FH.</li>
</ul>
<h4>Pregnancy and lactation</h4>
<ul>
<li>Physiological hyperlipidaemia of pregnancy: cholesterol rises 25-50%, triglycerides may double or triple. <strong>Do not treat it.</strong></li>
<li>Discontinue statins, ezetimibe, PCSK9 inhibitors and fibrates before conception where possible.</li>
<li>If treatment is unavoidable (homozygous FH, very severe hypertriglyceridaemia): <strong>bile acid sequestrants</strong> are not absorbed and are the traditional option; lipoprotein apheresis in extreme cases.</li>
<li>Preeclampsia, gestational diabetes and preterm delivery are <strong>lifelong cardiovascular risk enhancers.</strong> Ask every woman about her pregnancies. Almost nobody does.</li>
</ul>
<h4>Older adults</h4>
<ul>
<li><strong>Secondary prevention: benefit clearly persists.</strong> Do not deprescribe on the basis of age alone.</li>
<li><strong>Primary prevention above 75: genuinely uncertain.</strong> Under-represented in trials. Requires shared decision-making anchored on life expectancy, competing risks, function and patient priorities.</li>
<li>Benefit accrues over years (Module 6). If life expectancy is under 2-3 years, primary prevention statin therapy is unlikely to help.</li>
<li>Watch polypharmacy, drug interactions and renal function. Choose pravastatin, rosuvastatin or pitavastatin in complex regimens.</li>
</ul>
<h4>Diabetes</h4>
<ul>
<li>The atherogenic triad in its purest form. <strong>ApoB and non-HDL-C are especially informative</strong> — LDL-C alone will mislead you.</li>
<li>The 2026 guideline editorial argues that future updates should recommend <strong>more intensive lowering in high-risk diabetes with at least one additional high-risk feature.</strong> Anticipate this change.</li>
<li>Statin-associated new-onset diabetes is not a reason to withhold therapy in someone who already has diabetes.</li>
</ul>
<h4>Chronic kidney disease</h4>
<ul>
<li>SHARP established benefit of simvastatin plus ezetimibe in CKD.</li>
<li><strong>The dialysis paradox:</strong> 4D and AURORA found no benefit in patients already on dialysis. Do not initiate a statin for primary prevention in a dialysis patient; there is no evidence it helps. Continuing an established statin is reasonable.</li>
<li>Rosuvastatin: maximum 10 mg if eGFR is below 30.</li>
</ul>
<h4>HIV</h4>
<ul>
<li>REPRIEVE demonstrated benefit of pitavastatin in people with HIV at low-to-moderate traditional risk — an important trial establishing that HIV itself is a risk-enhancing condition.</li>
<li>Antiretroviral interactions dominate agent selection: <strong>pravastatin, pitavastatin and (with care) rosuvastatin</strong>. Avoid simvastatin and lovastatin entirely with ritonavir or cobicistat.</li>
</ul>
<h4>Cancer</h4>
<ul>
<li>Statins are frequently and reflexively stopped at cancer diagnosis. The 2026 guideline explicitly says to <strong>continue unless contraindicated.</strong></li>
<li>Cancer survivors, particularly after anthracyclines or chest radiotherapy, are at elevated cardiovascular risk. This is a growing population and a systematically under-treated one.</li>
</ul>` },
    { tier: 2, h: "The conversation that decides everything", html: `
<p>You can know every threshold in this course and change nothing, because the patient does not take the tablet. Adherence to statins at one year is frequently below 50%. The conversation is not soft skills sitting alongside the medicine; it <em>is</em> the medicine.</p>
<h4>What does not work</h4>
<ul>
<li>Reciting relative risk reductions.</li>
<li>"The guidelines say you need this."</li>
<li>Dismissing reported side effects.</li>
<li>Expressing frustration at a patient who read something online.</li>
</ul>
<h4>What does</h4>
<div class="tablewrap"><table>
<thead><tr><th>Move</th><th>Wording</th></tr></thead>
<tbody>
<tr><td><strong>Absolute numbers, stated time horizon</strong></td><td>"Out of 100 people like you, about 12 would have a heart attack or stroke in the next 10 years. With this tablet, about 9 would. So roughly 3 in 100 are spared."</td></tr>
<tr><td><strong>Name the concern before they do</strong></td><td>"A lot of people have read that statins cause muscle pains. Shall I tell you what the best studies actually found?"</td></tr>
<tr><td><strong>Validate without capitulating</strong></td><td>"I believe your muscles ache. That is real. What I do not yet know is whether the tablet is causing it — and there is a way we can find out together."</td></tr>
<tr><td><strong>The blinded rechallenge as a shared experiment</strong></td><td>"Let us stop it for a month and see. If the aches go, we will know. If they stay, we have learned something important and you get the protection back."</td></tr>
<tr><td><strong>Cumulative exposure, in plain language</strong></td><td>"This is not like a painkiller that works today. It is like sunscreen. The benefit is in the years."</td></tr>
<tr><td><strong>Give a genuine choice</strong></td><td>"You do not have to decide today. Would you like to think about it and come back?" — Patients who feel coerced stop the drug and do not tell you.</td></tr>
</tbody></table></div>
<div class="keybox">
  <div class="eyebrow">On the nocebo evidence specifically</div>
  <p>The SAMSON and StatinWISE findings are powerful and easy to misuse. <strong>Never say or imply "it is in your head."</strong> Nocebo effects produce genuine physical sensation through real neurobiological mechanisms. The message is not that the patient is mistaken about their experience, but that the <em>cause</em> of the experience is testable — and that most people who test it can go back on treatment. Framed as partnership, this recovers therapy. Framed as correction, it ends the relationship.</p>
</div>` },
    { tier: 3, h: "Deprescribing and competing risk", html: `
<p>A skill that is taught almost nowhere and needed constantly.</p>
<h4>When to consider stopping a statin</h4>
<ul>
<li>Life expectancy under 1-2 years from a competing condition, in primary prevention.</li>
<li>Transition to palliative or comfort-focused care.</li>
<li>Advanced dementia where the goals of care have changed.</li>
<li>Intolerable adverse effects after genuine rechallenge and alternative regimens.</li>
<li>Severe frailty with high pill burden and demonstrable harm from polypharmacy.</li>
</ul>
<h4>When NOT to stop</h4>
<ul>
<li>Age alone.</li>
<li>An asymptomatic mildly raised ALT.</li>
<li>A cancer diagnosis — the 2026 guideline is explicit.</li>
<li>"Cholesterol is now normal." This is the commonest error of all, and it reflects a fundamental misunderstanding: the LDL-C is normal <em>because of</em> the drug.</li>
</ul>
<div class="keybox">
  <div class="eyebrow">Framing the conversation</div>
  <p>Deprescribing is a positive act of care, not an admission of defeat, and it should be presented that way. "This tablet was to protect your heart over the next twenty years. Given everything that is happening now, I do not think it is earning its place, and I would rather we focused on what will make you feel better." Involve the patient and family. Document the reasoning — the next clinician will otherwise restart it.</p>
</div>
<h4>Competing risk, formally</h4>
<p>In a patient with a high probability of death from a non-cardiovascular cause, the achievable absolute cardiovascular benefit falls even if relative efficacy is unchanged — there is less time in which the event could have occurred. Recall from Module 6 that statin benefit accrues progressively over years. The two facts together are the quantitative basis for deprescribing in limited life expectancy, and they let you make the case in numbers rather than in vague appeals to frailty.</p>` }
  ],
  unknown: "Whether statins provide net benefit for primary prevention in adults over 80. STAREE and similar trials will help, but the population is heterogeneous enough that a single trial answer may not be forthcoming.",
  readings: [
    { tier: 2, cite: "Luirink IK et al. 20-year follow-up of statins in children with familial hypercholesterolemia. NEJM 2019;381:1547-56.", why: "The paediatric safety and efficacy question, answered over two decades.", url: "" },
    { tier: 2, cite: "Grundy SM, Stone NJ. Elderly patients and statins: shared decision making. (Various commentaries.)", why: "The over-75 primary prevention problem, honestly framed.", url: "" },
    { tier: 3, cite: "Grinspoon SK et al. Pitavastatin to prevent cardiovascular disease in HIV infection (REPRIEVE). NEJM 2023;389:687-99.", why: "Establishing HIV as a risk-enhancing condition.", url: "" }
  ],
  quiz: [
    { tier: 1, q: "A 34-year-old woman on rosuvastatin for FH tells you she is trying to conceive. You should:",
      opts: ["Continue the statin throughout pregnancy", "Stop the statin and defer most lipid-lowering therapy through conception, pregnancy and lactation", "Switch to a PCSK9 inhibitor", "Halve the dose"],
      a: 1,
      why: ["Statins are contraindicated; cholesterol is essential to fetal development (recall Smith-Lemli-Opitz from Module 1).",
            "Correct. The 2026 ACC/AHA guideline advises deferring most lipid-lowering therapy during conception, pregnancy and lactation. If treatment is genuinely unavoidable, bile acid sequestrants are not absorbed and are the traditional option. Plan this conversation before conception, not after.",
            "PCSK9 inhibitors are also avoided; there are no adequate safety data.",
            "Dose reduction does not address the contraindication."] },
    { tier: 1, q: "A 62-year-old on atorvastatin is diagnosed with colorectal cancer and starts chemotherapy. Regarding the statin:",
      opts: ["Stop it — one less drug during chemotherapy", "Continue it unless there is a specific contraindication", "Halve the dose routinely", "Switch to a fibrate"],
      a: 1,
      why: ["This reflexive discontinuation is exactly what the 2026 guideline set out to correct.",
            "Correct. The guideline explicitly recommends continuing lipid-lowering therapy during cancer treatment unless contraindicated. Cancer survivors, particularly after anthracyclines or chest radiotherapy, are at elevated cardiovascular risk and are systematically under-treated.",
            "No routine dose reduction is indicated; check for specific drug interactions instead.",
            "Fibrates do not substitute for a statin's ASCVD benefit."] },
    { tier: 2, q: "A 71-year-old on haemodialysis with no established ASCVD asks about starting a statin. The evidence-based response is:",
      opts: ["Start high-intensity atorvastatin", "Statins have not shown benefit when initiated in dialysis patients (4D, AURORA); do not start for primary prevention", "Start rosuvastatin 40 mg", "Start ezetimibe alone"],
      a: 1,
      why: ["No evidence supports this, and the trials were negative.",
            "Correct. The 4D and AURORA trials found no benefit from statin initiation in dialysis patients — the dialysis paradox. SHARP showed benefit in CKD not yet on dialysis. Continuing an established statin is reasonable; initiating one for primary prevention in dialysis is not evidence-based.",
            "Rosuvastatin should be capped at 10 mg if eGFR is below 30, and the trial evidence does not support initiation anyway.",
            "Ezetimibe monotherapy is not indicated here."] },
    { tier: 2, q: "The best opening in a conversation with a patient who says statins cause muscle damage is:",
      opts: ["\"That is a myth spread on social media.\"", "\"A lot of people have read that. Shall I tell you what the best studies actually found?\"", "\"You need this drug — the guidelines are clear.\"", "\"Let us try it and see what happens.\""],
      a: 1,
      why: ["Dismissive. It puts the patient in a position where agreeing with you means admitting they were foolish.",
            "Correct. It acknowledges the concern as widely shared and legitimate to hold, then requests permission to share information. Requesting permission is the key move — it converts a lecture into a conversation and preserves the patient's agency.",
            "Appeals to authority reliably fail with a hesitant patient and increase silent non-adherence.",
            "Too casual; it does not address the concern, so the patient stops at the first twinge."] },
    { tier: 3, q: "Which is a legitimate reason to deprescribe a statin?",
      opts: ["The patient has turned 80", "The LDL-C has normalised on treatment", "Life expectancy is under 1-2 years from a competing condition and the indication is primary prevention", "The patient has been diagnosed with cancer"],
      a: 2,
      why: ["Age alone is never a reason; secondary prevention benefit clearly persists into old age.",
            "The commonest error in the whole of lipid management. The LDL-C is normal because of the drug. Stopping it will return the patient to baseline within weeks.",
            "Correct. Statin benefit accrues progressively over years (Module 6). With limited life expectancy the achievable absolute benefit approaches zero, and deprescribing is a positive act of care. Frame it that way, involve the patient, and document the reasoning so the next clinician does not restart it.",
            "The 2026 ACC/AHA guideline explicitly recommends continuing during cancer treatment unless contraindicated."] },
    { tier: 3, q: "Why does limited life expectancy reduce the value of a statin even though its relative efficacy is unchanged?",
      opts: ["Statins become less potent in frail patients", "Benefit accrues progressively over years, so a shortened time horizon reduces achievable absolute benefit", "Statin metabolism is altered in the very old", "Relative risk reduction falls with age"],
      a: 1,
      why: ["Pharmacological potency is not the issue.",
            "Correct. The CTT data show benefit accumulating over years of treatment. Combined with competing non-cardiovascular mortality, a short horizon means fewer events are available to prevent. This lets you make the deprescribing case in numbers rather than vague appeals to frailty — which patients and families find far more acceptable.",
            "Some pharmacokinetic changes occur, but they are not the reason.",
            "Relative risk reduction is broadly preserved with age; it is absolute benefit over the available time that falls."] }
  ]
}

);
