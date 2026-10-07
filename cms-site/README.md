# Datavique

Your website, with a simple dashboard for editing — no code needed.

## One-time setup (about 10 minutes)

**1. Put the site on GitHub**
- Create a free account at github.com.
- Click **New repository** and name it `datavique`. Make it Public.
- Click **uploading an existing file** and drag in **everything inside this folder** (including the hidden `.pages.yml` file). Click **Commit changes**.

**2. Turn the website on**
- In the repository: **Settings → Pages**.
- Under "Build and deployment" choose **Deploy from a branch → main → / (root)** and click **Save**.
- After ~1 minute your site is live at `https://<your-username>.github.io/datavique/`.
- Not using datavique.com yet? Delete the `CNAME` file, and in `_config.yml` set `url: "https://<your-username>.github.io"` and `baseurl: "/datavique"`.
- Using datavique.com? Keep `CNAME`, then add the domain in Settings → Pages and follow GitHub's DNS instructions.

**3. Open your dashboard**
- Go to **app.pagescms.org** and log in with GitHub.
- Pick the `datavique` repository. You'll see: Writing, Projects, About, Now, Resume, Site settings.

## Everyday use

- **Write an article:** Dashboard → Writing → **Add an entry** → fill the title, summary, date, and write → **Save**. It appears on your site in about a minute.
- **Add a project:** Dashboard → Projects → **Add an entry**.
- **Update your Now page, resume, email or links:** open that item in the dashboard and edit.
- **Images:** use the image buttons in the editor — they're stored in `assets/images`.

## SEO (handled automatically)
Page titles, descriptions, Google previews, social share cards, sitemap (`/sitemap.xml`), RSS feed (`/writing/feed.xml`) and structured data are generated for every page. Just fill in the **Summary** field on each article and project.
After going live, add your site to **Google Search Console** and submit `sitemap.xml`.

## Still to fill in
- GitHub / LinkedIn links and email → Site settings
- Resume blanks and PDF → Resume
- Real repository links on each project → Projects
