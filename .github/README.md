# Publish your content to openEQUELLA

This repository is a **starter template**. You make your own copy of it, add your
content on your computer, and every change you push to the `main` branch is
automatically published to **openEQUELLA**.

You work **locally** with `git` and the **GitHub CLI** (`gh`). Any text editor is
fine.

> The pre-configured files (`.github/`, `metadata.json`, `oeq-mapping.json`)
> should not be changed except where a step below tells you to.

## One-time setup (once per computer)

Do these three things once. **Already have Git and the GitHub CLI installed?**
[Skip to step 2 ↓](#2-sign-in-to-github)

### 1. Install Git and the GitHub CLI (`gh`)

Pick your operating system:

**Windows** — in PowerShell:

```powershell
winget install --id Git.Git
winget install --id GitHub.cli
```

**macOS** — with [Homebrew](https://brew.sh):

```bash
brew install git gh
```

**Linux (Debian/Ubuntu):**

```bash
sudo apt update && sudo apt install git
```

For `gh` on Linux, follow the
[official install guide](https://github.com/cli/cli#installation).

Prefer installers? Download [Git](https://git-scm.com/downloads) and the
[GitHub CLI](https://cli.github.com) and run them.

Check both are installed:

```bash
git --version
gh --version
```

### 2. Sign in to GitHub

Run `gh auth login` and choose **GitHub.com → HTTPS → Login with a web browser**.

### 3. Get added to the organization

Email the byui-library admin (see **Who to contact**) to be added to the
`byui-library` organization.

## Step 1 — Create your repository and download it (one command)

From the folder where you keep your projects (for example `Documents/repos`),
run:

```bash
gh repo create byui-library/YOUR-REPO-NAME \
  --template byui-library/openequella-content-template \
  --private --clone
```

- Replace `YOUR-REPO-NAME` with a short name (letters, numbers, and dashes — for
  example `music-301`).
- This creates **your own** repository from this template **and** downloads it
  into a new `YOUR-REPO-NAME` folder.

Then move into it:

```bash
cd YOUR-REPO-NAME
```

> Already created and cloned your repo? Skip to Step 2.

## Step 2 — Set your title and description

Open **`metadata.json`** in any editor and replace the two `REPLACE THIS` lines
with your resource's real title and description. Leave the other lines as-is.

## Step 3 — Add your content

Delete the sample **`index.html`** and add your own content files (for example,
your `.html` pages). Every file you add is published as an attachment.

## Step 4 — Publish

In your repository folder, run:

```bash
git add .
git commit -m "Add my content"
git push
```

## Step 5 — Turn on publishing (first time only)

Email the byui-library admin your repository name so they can give it permission
to publish. One time only — after that, every `git push` republishes
automatically.

## Step 6 — Check it worked

On GitHub, open your repository's **Actions** tab and click the latest
**Publish to openEQUELLA** run. A green check means your item is in openEQUELLA.

---

## Already have a repository elsewhere?

If your content already lives in a GitHub repo outside `byui-library`, email the
admin to **transfer** it into `byui-library`, then copy these files from this
template into it and push:

- `.github/workflows/oeq-publish.yml`
- `metadata.json`
- `oeq-mapping.json`

---

## Who to contact

The **byui-library admins** manage organization access and publishing. Contact
either of:

- Mat Miles — milesm@byui.edu
- Ben Wilson — wilsonbe@byui.edu

If neither is available, contact one of:

- Blaine Hamilton — hamiltonbl@byui.edu
- Scott Burton — burtons@byui.edu
- Adam Hayes — hayesa@byui.edu
- Nate Phillips — phillipsn@byui.edu

---

*Need something more advanced — a different collection or a custom metadata
mapping? Contact the byui-library admin; those cases are handled individually.*
