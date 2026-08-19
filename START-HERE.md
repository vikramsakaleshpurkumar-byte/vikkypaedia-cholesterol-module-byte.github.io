# Putting your course online — the whole thing, in about 10 minutes

Written for your account, `vikramsakaleshpurkumar-byte`. No Git, no command line, no software to install. Just a browser.

---

## First, one decision (30 seconds)

You have two sensible URLs. Pick one before you start.

| | Repository name | Your course URL |
|---|---|---|
| **A — recommended** | `vikramsakaleshpurkumar-byte.github.io` | `https://vikramsakaleshpurkumar-byte.github.io` |
| **B** | `cholesterol-mooc` | `https://vikramsakaleshpurkumar-byte.github.io/cholesterol-mooc/` |

**Take A.** It is shorter, far easier to read out loud in a lecture, and easier for learners to type on a phone. GitHub gives every account exactly one of these "user site" repositories and yours is unused.

If you later add a second course, you keep the same repo and put it in a subfolder — `.../pharmacology/` and so on. So choosing A now costs you nothing later.

The rest of this guide assumes A.

---

## Step 1 — Create the repository

1. Go to **https://github.com/new**
2. **Repository name:** type exactly `vikramsakaleshpurkumar-byte.github.io`
   *(It must match your username exactly, including the `-byte`, or GitHub will not treat it as your user site.)*
3. **Public** — required, because Pages is free only from public repositories.
4. Leave "Add a README file" **unticked**. You already have one.
5. Click **Create repository**.

---

## Step 2 — Upload the course

On the empty repository page you will see a link: **uploading an existing file**. Click it.

Now open your `cholesterol-mooc` folder on your computer. **Select everything inside it** (Ctrl+A) and drag it all into the browser window.

> **Important:** drag the *contents*, not the folder itself. If you drag the folder, your course ends up at `.../cholesterol-mooc/` instead of the root and the short URL will not work.

You should be uploading these 14 items:

```
index.html          ← the course
check.html          ← self-test page
sw.js               ← offline support
manifest.webmanifest
icon.svg
.nojekyll
LICENSE
README.md
START-HERE.md
DEPLOY-GITHUB.md
serve.bat
serve.sh
assets/             ← folder with 5 files inside
```

**If `.nojekyll` will not drag** (some file managers hide files starting with a dot), skip it for now and add it in Step 5. Everything still works without it; it just makes deploys slightly faster.

Scroll to the bottom, type `Cholesterol MOOC v1.0` in the commit box, and click **Commit changes**.

---

## Step 3 — Switch Pages on

1. In your repository click **Settings** (top right of the repo bar).
2. In the left sidebar click **Pages**.
3. Under *Build and deployment*:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` — and folder `/ (root)`
4. Click **Save**.

---

## Step 4 — Wait, then check

Wait about two minutes, then reload that Settings → Pages screen. A green banner appears with your live URL.

**Before you tell anyone, open this:**

```
https://vikramsakaleshpurkumar-byte.github.io/check.html
```

All 20 checks must be green. This is the only verification step that matters — it parses every content file and confirms nothing is broken. If something is red, it names the file and the problem.

Then open the course itself and click through a couple of modules.

---

## Step 5 — Adding `.nojekyll` if you skipped it

In your repository: **Add file → Create new file**. In the filename box type:

```
.nojekyll
```

Leave the contents empty. Scroll down, **Commit changes**. Done.

---

## Step 6 — Test it on a phone

Open the URL on your own phone before sharing it. Check:

- [ ] The **☰** button top-left opens the contents drawer
- [ ] The three depth buttons (Must / Nice / Good) toggle and the page visibly changes
- [ ] A table can be swiped sideways
- [ ] Tapping a quiz option reveals the explanation
- [ ] An **Install for offline study** bar appears near the bottom (Android/Chrome)

On **Android**, tapping Install adds the course to the home screen and it then works with no data at all.

On **iPhone**, Safari does not show that bar. Learners tap **Share → Add to Home Screen** instead. Tell them, because they will not guess.

---

## Step 7 — Share it

Send this, exactly:

> **Cholesterol: From Molecule to Management**
> A free, self-paced course — basic biochemistry through to the 2026 guidelines and lipid-lowering drugs.
> 👉 https://vikramsakaleshpurkumar-byte.github.io
>
> Three depth settings. Tap **Must know / Nice to know / Good to know** at the top to match your level — students start with Must know only.
> Works on any phone. Android users can install it for offline use; iPhone users tap Share → Add to Home Screen.
> Your progress is saved on your own device. Nothing is uploaded and no login is needed.

---

## Editing the course after it is live

1. Open the file on GitHub (for example `assets/content-a.js`)
2. Click the **pencil** icon
3. Edit, then **Commit changes**
4. Wait a minute, reload `check.html`

**One thing you must not forget.** Because the course is cached on learners' devices for offline use, they will keep seeing the old version until you tell their browser something changed. After any content edit, open `sw.js` and bump the version number:

```js
const CACHE_VERSION = 'v1';   →   const CACHE_VERSION = 'v2';
```

That one character is the difference between your correction reaching learners and sitting invisible on the server. Put it in the same commit as the edit and it becomes habit.

---

## If something goes wrong

| Symptom | Cause and fix |
|---|---|
| **404 page** | Pages has not finished building — wait 2 more minutes. If it persists, check Settings → Pages shows branch `main` and folder `/ (root)`. |
| **Page loads but is unstyled** | The `assets` folder did not upload. Check the repo shows an `assets` folder containing 5 `.js`/`.css` files. |
| **"Loading course…" never goes away** | A content file has a syntax error. Open `check.html` and then the browser console (F12) — it names the file and line. |
| **URL has `/cholesterol-mooc/` in it** | You dragged the folder instead of its contents. Delete the folder in the repo and re-upload the contents. |
| **Learners see an old version** | You forgot to bump `CACHE_VERSION` in `sw.js`. |

---

## Two things before you announce it

1. **Open the About page** in the live course (`#/about`) and work through the *unresolved* list. Lp(a)HORIZON especially — Module 12 should not be taught until you have confirmed whether it has reported.
2. **Check the Module 13 guideline comparison table** against the four original documents. It is the asset most likely to be screenshotted and quoted back at you, so it needs to be right.

Put your name and contact on the About page too — learners will want to send corrections, and you want them to.
