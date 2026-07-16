# Deploying your portfolio to GitHub Pages

Your real details (name, email, GitHub, LinkedIn, project and experience content) are already filled in from your resume. Two things to check before you publish:

## 1. Add your CV file
The "Download CV" link points to `Manisha_Kasireddy_Resume.pdf`. Add that exact file to the repo alongside `index.html` (same folder) so the link works, or rename the link in `index.html` to match whatever filename you use.

## 2. Note: home address and phone number were left off
Your resume includes your street address and phone number — I deliberately did not put these on the public page, since a portfolio is typically public and indexable by search engines. Email, GitHub, and LinkedIn are enough for recruiters to reach you. Let me know if you'd rather include a phone number too.

## 3. Create the repo
- Go to github.com → New repository
- Name it anything (e.g. `portfolio`) — for a personal *profile* site the name would need to be exactly `ManishaK1464.github.io`, but a regular project repo works fine too and just changes the URL shape (see step 5).
- Keep it public (GitHub Pages needs this unless you're on GitHub Pro/Enterprise).

## 4. Push the files
```bash
git init
git add index.html README.md Manisha_Kasireddy_Resume.pdf
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/ManishaK1464/your-repo-name.git
git push -u origin main
```

## 5. Turn on GitHub Pages
- In the repo: **Settings → Pages**
- Under "Build and deployment", set **Source** to "Deploy from a branch"
- Branch: `main`, folder: `/ (root)`
- Save — GitHub will give you a live URL after a minute or two:
  - If your repo is named `ManishaK1464.github.io` → the URL is `https://ManishaK1464.github.io`
  - If it's named something else (e.g. `portfolio`) → the URL is `https://ManishaK1464.github.io/portfolio`

## 6. Share that URL
That's the link you send to recruiters — it's public and works for anyone, no server or hosting cost involved.
