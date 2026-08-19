# Cholesterol: From Molecule to Management

### ▶︎ **[Open the course](https://vikramsakaleshpurkumar-byte.github.io)**

*A free, self-paced course in lipid biology, dyslipidaemia and lipid-lowering therapy — from the mevalonate pathway to the 2026 ACC/AHA guideline. Global core with a dedicated India module.*

**Evidence current to August 2026** · 14 modules · 3 depth tiers · 88 quiz items · 10 interactive tools · Works offline

---

## For learners

**One course, three depths.** Every objective, section, reading and quiz item is tagged **Must know**, **Nice to know** or **Good to know**. Use the three buttons at the top to set your level:

| Depth | For | Time |
|---|---|---|
| **Must know** only | MBBS and nursing students, interns, allied health, informed patients | ~12 h |
| **+ Nice to know** | Residents, GPs, clinical pharmacists, dietitians | ~24 h |
| **+ Good to know** | Fellows, faculty, researchers, exam candidates | ~34 h |

**On a phone:** it works in any mobile browser. On Android you can install it to your home screen and study with no data at all. On iPhone, tap **Share → Add to Home Screen**.

**Your privacy:** no accounts, no login, no tracking, no analytics, and no network requests to anywhere. Progress and quiz answers are stored on your own device and never leave it. The flip side is that clearing your browser data, or switching phone, clears your progress.

---

## For teachers and maintainers

Everything below is for running, editing or re-hosting the course.

- **[START-HERE.md](START-HERE.md)** — putting it online in 10 minutes, no Git required
- **[DEPLOY-GITHUB.md](DEPLOY-GITHUB.md)** — GitHub Pages detail, custom domains, plan limits
- **`check.html`** — 20 automated integrity checks. Run it after *every* edit.

Adapting this for another country is straightforward and encouraged: Module 13 is the template. Substitute your own prevalence data, population phenotype, national guideline and drug prices, and the reasoning transfers intact. Licensed CC BY-NC (content) / MIT (code).

---

## 1. Run it locally in thirty seconds

**Windows:** double-click **`serve.bat`**.
**macOS / Linux:** `chmod +x serve.sh && ./serve.sh`

Then open **http://localhost:8080**.

No server installed? Just double-click `index.html`. Everything works from the file system — you simply cannot share it over the network that way.

**After any edit, open http://localhost:8080/check.html.** It runs 20 structural checks over your content and tells you exactly what broke. Use it every time.

---

## 2. What you have

```
cholesterol-mooc/
├── index.html              the whole application shell
├── check.html              self-test — run after every edit
├── sw.js                   service worker (offline support) ← bump version after edits
├── manifest.webmanifest    makes it installable on phones
├── icon.svg                app icon
├── .nojekyll               tells GitHub Pages to skip Jekyll
├── serve.bat / serve.sh    one-click local server
└── assets/
    ├── style.css           all styling, mobile rules, print rules, dark mode
    ├── content-a.js        Modules 1-6   ← your teaching content
    ├── content-b.js        Modules 7-14  ← your teaching content
    ├── course.js           metadata, figures, capstone, references
    ├── tools.js            the 10 interactive tools
    └── app.js              router, tier engine, quiz engine, progress, PWA
```

Roughly 8,000 words of Tier 1, another 12,000 of Tier 2 and 3, 14 modules, 88 quiz items with an explanation on every distractor, 10 interactive tools, 4 original SVG figures, 8 capstone cases.

| Feature | Where it lives |
|---|---|
| **Tier filter** (Must / Nice / Good) reshapes the entire course live | `app.js` → `renderTierBar` |
| **Progress + quiz scores**, saved per browser | `localStorage`, key prefix `chol.` |
| **Three stackable certificates**, printable | `#/certificate` |
| **Full-text search** across sections and quiz stems | header, or `app.js` → `buildIndex` |
| **Dark mode**, remembered | moon button, top right |
| **Print / PDF** any module or the guideline table | print stylesheet in `style.css` |
| **Keyboard nav** — left/right arrows move between modules | `app.js` boot |
| **Installable and offline** — add to home screen, study with no data | `manifest.webmanifest` + `sw.js` |
| **On this page** jump list per module, back-to-top button | `app.js` → `renderModule` |
| **Zero network calls.** No fonts, no CDN, no analytics, no tracking | by design |

That last row matters more than it sounds. The course loads on a 2G connection, works offline, and sends nothing about your learners anywhere.

---

## 3. Sharing it with learners

### Option A — same room or same Wi-Fi (teaching a class)

Run `serve.bat`. It prints your LAN address, something like `http://192.168.1.14:8080`. Learners on the same network open that. Allow the firewall prompt on first run.

Good for: a lecture hall, a ward round, a workshop. Costs nothing, needs nothing.

### Option B — public URL from your home machine (Cloudflare Tunnel) — **recommended**

This is the right answer for home hosting. It gives you a real HTTPS address with **no port forwarding, no static IP, no router configuration, and no exposure of your home IP**.

1. Download `cloudflared` from Cloudflare's developer site.
2. Start your local server (`serve.bat`).
3. In a second terminal:
   ```
   cloudflared tunnel --url http://localhost:8080
   ```
4. It prints a `https://something-random.trycloudflare.com` URL. Share that.

For a permanent, memorable address, create a free Cloudflare account, add a domain, and run a named tunnel. Then `https://cholesterol.yourdomain.in` points at your machine whenever it is on.

**Be honest with yourself about the trade-off:** your course is only up when your computer is on and your home internet is working. For a cohort of 30 that is fine. For 3,000 it is not.

### Option C — free static hosting (most reliable, and free at your scale) — **use this for launch**

This is a folder of static files, so any static host will serve it — and better than a home connection can:

- **GitHub Pages** — push the folder, flip one setting. Free, HTTPS, and you get version history for every content edit, which you will want more than you expect. **Full step-by-step in [`DEPLOY-GITHUB.md`](DEPLOY-GITHUB.md).**
- **Cloudflare Pages** — drag the folder in. Free, global CDN, instant.
- **Netlify Drop** — literally drag the folder onto netlify.com/drop.

All three cost nothing at MOOC scale and stay up when your machine is off. **Use one of these for the real launch and keep home hosting for drafts.**

Note for GitHub Pages specifically: on a free account the repository must be **public**, and on every plan below Enterprise Cloud the published site is public regardless. That is usually what you want for an open educational resource — but if the course must be restricted to enrolled learners, Pages is the wrong tool and you need an LMS.

### Option D — offline distribution

Zip the folder. Learners unzip and double-click `index.html`. Everything works: tiers, quizzes, tools, progress, certificates. No internet at all.

This is genuinely valuable for rural teaching hospitals and low-bandwidth settings, and it is a real advantage over Coursera and edX. Do not overlook it.

---

## 4. Editing the content

All teaching content is in `content-a.js` (Modules 1-6) and `content-b.js` (Modules 7-14). Plain JavaScript objects with HTML strings. Any text editor works — VS Code, Notepad++, even Notepad.

### The shape of a module

```js
{
  id: 3, part: 1,
  title: "...",
  tagline: "One line under the title.",
  hook: "The question the module answers.",
  time: { t1: 35, t2: 30, t3: 25 },        // minutes per tier

  objectives: [ { tier: 1, text: "..." }, ... ],

  sections: [
    { tier: 1, h: "Heading", html: `<p>Body HTML.</p>` },
    { tool:   'lipid-calc' },               // drops in an interactive tool
    { figure: 'enterohepatic' },            // drops in an SVG figure
  ],

  unknown: "What we still do not know.",
  readings: [ { tier: 2, cite: "...", why: "...", url: "" } ],

  quiz: [
    { tier: 1,
      q: "Stem?",
      opts: ["A","B","C","D"],
      a: 1,                                  // index of the correct option
      why: ["why A is wrong","why B is right","why C is wrong","why D is wrong"] }
  ]
}
```

### Three rules that will save you pain

1. **Every quiz item needs exactly 4 options and 4 explanations** — including for the wrong answers. `check.html` enforces this. It is also where most of the learning happens, so do not skimp.
2. **Never type a backtick (`` ` ``) or `${` inside an `html:` string.** Those are JavaScript template-literal markers and will break the file. Use `&#96;` for a literal backtick.
3. **Every module must keep at least one Tier 1 section**, or the course goes blank for Foundation learners. `check.html` enforces this too.

### Useful CSS classes for your HTML

| Class | Renders as |
|---|---|
| `<div class="keybox">` | Accent-bordered key-point box |
| `<div class="flag ok\|warn\|err">` | Coloured clinical alert |
| `<div class="tablewrap"><table>…</table></div>` | Scrollable table (essential on mobile) |
| `<p class="note">` | Small grey aside |
| `<td class="num">` | Tabular figures, no wrap |

---

## 5. Adding a module

1. Add the object to `content-b.js` with `id: 15`.
2. If it belongs to a new part, add that part to `COURSE.parts` in `course.js`.
3. Open `check.html`. Fix whatever it flags.

Navigation, the sidebar, progress tracking, search and the certificate all pick it up automatically. There is no registry to update.

---

## 6. Adding an interactive tool

In `tools.js`:

```js
'my-tool': {
  title: "What it does",
  tag: "Module 9",
  html: `<div class="fields">
           <div class="field"><label>Input</label><input type="number" id="mt-x" value="10"></div>
         </div>
         <div class="out"><div class="out-grid" id="mt-out"></div></div>`,
  init(root) {
    const calc = () => {
      const x = parseFloat($('#mt-x', root).value) || 0;
      $('#mt-out', root).innerHTML =
        `<div class="stat"><div class="k">Result</div><div class="v">${x * 2}</div></div>`;
    };
    $('#mt-x', root).addEventListener('input', calc);
    calc();
  }
}
```

Then reference it from a module: `{ tool: 'my-tool' }`. Always scope selectors with `$('#id', root)` — a tool may appear more than once.

**A standing principle for this course:** every tool says what it is. Where a real clinical calculator exists, the tool declines to fake it and points the learner at the official one. The Module 9 comparator does exactly this — it categorises and compares guideline targets rather than pretending to compute PREVENT. Please preserve that. Credibility is the whole asset.

---

## 7. Before you launch

- [ ] Run `check.html` — all 20 checks green.
- [ ] After **every** future content edit, bump `CACHE_VERSION` in `sw.js` (`'v1'` → `'v2'`). The course is cached on learners' devices for offline use, so without this your correction never reaches them.
- [ ] Read **`#/about`** and work through the *pending verification* list. Several items — Lp(a)HORIZON in particular — must be confirmed against the primary source before you teach Module 12.
- [ ] Verify every cell of the guideline comparison table (Module 13) against the four original documents. It is your most-shared asset and the one most likely to be quoted back at you.
- [ ] Put your name, institution and contact on the About page.
- [ ] Test on a real phone over mobile data, not just on desktop.
- [ ] Pilot with 20 learners spanning all three tiers. **Ask specifically about tier placement** — mis-tiered content is the failure mode most likely to sink this design, and it is invisible to the author.

---

## 8. Where this actually competes

Be clear-eyed. You will not out-produce Coursera on video. What this platform does that they structurally cannot:

- **One course, three depths.** An MBBS student and a cardiology fellow use the same URL and each gets a course built for them. Platform MOOCs cannot do this because their content model has no tier dimension.
- **A published expiry date.** `#/about` names the trials that will obsolete specific modules. Most MOOCs rot silently for years. This one tells you when to distrust it.
- **Uncertainty taught as content.** The ZEUS null result, the surrogate-endpoint graveyard, the unproven Lp(a) hypothesis, the honest note that no Indian outcome trial supports the LAI targets. This is what a good teacher does and what a content pipeline never does.
- **Genuine offline use.** Zip, share, works. That is a real advantage in Indian district hospitals.
- **Zero cost, zero tracking, zero lock-in.** Any institution can fork it, translate it and rebrand it.

**The next things worth building, in order:** Hindi and Tamil subtitle tracks for the India module; the 45 videos the blueprint specifies (the platform is ready for them — add an `<iframe>` or `<video>` to any section's `html`); and a small exam-server if you need verifiable certificates for a formal cohort. Everything else is polish.

---

## 9. Licence and attribution

Content and figures are intended for reuse in teaching under **CC BY-NC**. Attribution to the author. Adapting this for another country is straightforward: Module 13 is the template — substitute your own prevalence data, phenotype, national guideline and drug prices, and the reasoning transfers intact.

*Evidence current to August 2026. Course version 1.0. See `#/about` for the maintenance schedule and the full verification log.*
