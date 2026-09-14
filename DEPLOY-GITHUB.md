# Publishing this course on GitHub Pages

GitHub Pages is the right host for this course. It is a folder of static files with no build step, no server code and no database, which is exactly what Pages serves best. Free, HTTPS, global CDN, and up whether or not your computer is on.

---

## Before you start: the one decision that matters

**GitHub Pages is free only from a public repository.**

| Your plan | Repo can be private? | Site is… |
|---|---|---|
| **GitHub Free** | No — repo must be **public** | Public |
| **GitHub Pro** (personal, paid) | Yes | **Still public** |
| **GitHub Team** (organisation, paid) | Yes | **Still public** |
| **GitHub Enterprise Cloud** | Yes | Can be restricted to org members |

Read that middle column carefully. Paying for Pro hides your *source*, not your *site*. On every plan short of Enterprise Cloud, **anyone with the URL can open the course.**

For a free, open educational resource that is exactly what you want — a public repo also invites correction, translation and forking, which is how this becomes the most-used lipid course rather than merely a good one. If you need the course restricted to enrolled learners only, Pages is the wrong tool and you need a proper LMS (Moodle) or an authenticated host.

---

## Option A — the course is the whole repo (simplest)

Best if you can create a fresh repository.

**1. Create the repo** on github.com. Name it something learners will see in the URL — `cholesterol-mooc` gives you `https://yourname.github.io/cholesterol-mooc/`. Public. Do not add a README (you already have one).

**2. Upload the files.** Easiest route, no Git required:

> On the empty repo page click **uploading an existing file** → drag in the **contents** of the `cholesterol-mooc` folder (not the folder itself) → Commit.

Drag these in: `index.html`, `check.html`, `README.md`, `LICENSE`, `.nojekyll`, `serve.bat`, `serve.sh`, and the whole `assets` folder.

If you prefer the command line:

```bash
cd path/to/cholesterol-mooc
git init
git add .
git commit -m "Cholesterol MOOC v1.0"
git branch -M main
git remote add origin https://github.com/YOURNAME/cholesterol-mooc.git
git push -u origin main
```

**3. Turn on Pages.** Repo → **Settings** → **Pages** (left sidebar) → under *Build and deployment*, set **Source: Deploy from a branch**, **Branch: `main`**, **Folder: `/ (root)`** → **Save**.

**4. Wait 1–2 minutes**, then reload the Settings → Pages page. Your URL appears at the top.

**5. Verify** by opening `https://yourname.github.io/cholesterol-mooc/check.html`. All 17 checks should pass, including the app.js syntax check (which only runs over HTTPS, so this is the first time you will see it).

---

## Option B — the course lives inside an existing repo

If you already have a repo you want to use, put the course in a `docs/` folder:

```
your-existing-repo/
├── (your other files)
└── docs/
    ├── index.html
    ├── check.html
    ├── .nojekyll
    └── assets/
```

Then **Settings → Pages → Source: Deploy from a branch → Branch: `main` → Folder: `/docs`**.

Your URL becomes `https://yourname.github.io/your-existing-repo/`.

`docs/` is the only subfolder Pages will serve from. Any other name will not work with the branch-deploy method.

---

## Why this course works on Pages without any configuration

Worth knowing, because it is why you will not hit the problems most people hit:

- **Hash-based routing.** Every internal link is `#/module/7`. The browser never asks the server for that path, so you need no 404 rewrite rules, no `_redirects` file and no SPA fallback config. This was chosen deliberately for exactly this reason.
- **Relative asset paths.** Everything is `assets/style.css`, never `/assets/style.css`. That means it works identically at a repo subpath (`/cholesterol-mooc/`) and at a domain root. Do not "tidy up" those paths by adding a leading slash — it will break the site.
- **Zero external requests.** No CDN, no web fonts, no analytics. Nothing to be blocked, rate-limited or to leak your learners' data.
- **`.nojekyll` is included**, so Pages skips the Jekyll build and deploys faster.

---

## After it is live

**Update the content** by editing the file on GitHub (pencil icon) and committing, or by `git push`. The site rebuilds in about a minute. Always open `/check.html` after an edit.

**Add a custom domain** if you have one: Settings → Pages → Custom domain → enter `cholesterol.yourdomain.in` → then at your DNS provider add a `CNAME` record pointing that name to `yourname.github.io`. Tick **Enforce HTTPS** once the certificate is issued (usually within an hour).

**Share the link** as `https://yourname.github.io/cholesterol-mooc/`. The Open Graph tags in `index.html` mean it will render with a proper title and description in WhatsApp, Telegram and LinkedIn.

---

## Two things to tell your learners

1. **Progress is stored in their own browser**, not on a server. There are no accounts and nothing is uploaded. If they switch device or clear site data, their progress and quiz answers are gone. This is a deliberate privacy trade-off — say so, and they will respect it.
2. **The certificate is self-generated** and not institutionally verified. If you need verifiable credentials for a formal cohort, run the assessment separately and issue certificates yourself.

---

## Limits you will not reach, but should know

GitHub Pages is intended for modest sites: a soft bandwidth limit of about 100 GB/month and a repository limit of 1 GB. This course is well under 1 MB, so a page view costs roughly 0.5 MB including all assets. You would need on the order of 200,000 views a month before bandwidth became a conversation. It is also not intended for commercial transactions — fine for a free educational resource, not for selling course access.

If you ever outgrow it, the same folder deploys unchanged to Cloudflare Pages or Netlify, both of which have more generous limits and equally free tiers.

---

## Recommended: add these before you publish

- [ ] A `LICENSE` file — one is included (CC BY-NC 4.0). Change it if you want different terms.
- [ ] Your name, institution and contact on the About page (`assets/course.js`, or add it to the About view in `app.js`).
- [ ] Review the evidence-status list at `#/about` before announcing an updated release.
- [ ] Add repo **Topics** on GitHub (`medical-education`, `cardiology`, `lipidology`, `mooc`, `open-educational-resources`) so people can find it.
