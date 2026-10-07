# Datavique — project guide for Claude Code

Personal technical portfolio and writing site for **Keyur Kadia**, branded **Datavique**. Data Analyst → Analytics Engineer → Data Engineer. Jekyll site hosted on **GitHub Pages**, edited by the owner through **Pages CMS** (app.pagescms.org). The owner isn't a developer, so keep everything editable from the CMS.

## Stack
- Jekyll, built by GitHub Pages (`github-pages` gem). Use **only whitelisted plugins**: jekyll-seo-tag, jekyll-sitemap, jekyll-feed are already in use. No custom Ruby plugins.
- Pages CMS config is in `.pages.yml`. Whenever you add or rename a front-matter field, update `.pages.yml` to match.
- No build tools, no npm, no frameworks. Plain HTML, Liquid, CSS and one small vanilla JS file.

## Structure
```
_config.yml              site settings, collections, defaults
.pages.yml               CMS dashboard schema (keep in sync with front matter)
_data/site.yml           homepage text, email, GitHub/LinkedIn (CMS: Site settings)
_data/now.yml            Now page (CMS: Now page)
_data/resume.yml         Resume (CMS: Resume)
_projects/*.md           project case studies → /projects/<name>/
_writing/*.md            articles → /writing/<name>/
about.md                 About page (layout via defaults in _config.yml)
index.html               Home
projects/index.html      Projects list
writing/index.html       Writing list
now.html, resume.html, 404.html, robots.txt
_layouts/default.html    shell: <head> with {% seo %}, nav, footer, site.js
_layouts/project.html    case-study layout with sticky TOC + "At a glance"
_layouts/article.html    article layout with auto TOC, progress bar, related links
_layouts/about.html
_includes/               nav, footer, breadcrumbs (+ BreadcrumbList JSON-LD), num (CMYK numeral), flow (→ chain), kicker
assets/styles.css        Broadsheet design system: tokens + components. Don't edit casually.
assets/site.css          site rules: prose, TOC, doc layout, progress bar
assets/site.js           builds the article TOC from .prose h2, scroll-spy, reading progress
assets/images/           CMS uploads
```

## Design system: Broadsheet (follow strictly)
- Newsprint look: Source Serif 4 only (no sans-serif), paper ground `--color-bg`, ink `--color-text`.
- Accents are used small, like spot color: cyan `--color-accent` for links and interaction, magenta `--color-accent-2` is rarer (section labels). For text in an accent color, use the `-700` ramp step.
- **No boxes, cards or dividers for layout.** Hierarchy comes from the serif type scale and whitespace. The only rules are the masthead's thick-thin pair.
- Big numerals use `.cmyk-num` (`_includes/num.html`).
- Always use tokens: `var(--color-*)`, `var(--space-*)`, `var(--radius-*)`, `var(--shadow-*)`. Don't hard-code hex values or font names.
- Components: `.btn .btn-primary/.btn-secondary`, `.tag .tag-neutral`, `.table`, `.nav .nav-brand`, `.seg`, `.input`, `.field`.
- Layouts are left-aligned and asymmetric. Headings sit flush left.

## SEO conventions
- Every page and collection item needs `title` and `description` (~150 chars). jekyll-seo-tag builds the meta, OG/Twitter and JSON-LD from them.
- `image` (optional) is used for share cards; recommended size 1200×630.
- Breadcrumb JSON-LD comes from `_includes/breadcrumbs.html`. The About page carries ProfilePage JSON-LD.
- Keep one `<h1>` per page and semantic `<article>`, `<nav>`, `<time>`.
- URLs: `/projects/<slug>/` and `/writing/<slug>/`. Don't change permalinks once published.

## Content model
- **Project front matter:** title, order, num, kicker, description, flow[], problem, data, engineering[], analysis, model[{item, detail}], sql, result, stack[], repository, demo, image. Body = optional extra notes.
- **Article front matter:** title, category (Data engineering | Analytics | AI + Data | Business & technology), description, date, featured, image, related_project (slug of a project file). Body = Markdown. Each `##` heading becomes a TOC entry.

## Owner TODO
- Real GitHub/LinkedIn/email in `_data/site.yml`.
- Real repository links on each project.
- Resume blanks (`[Company]`, `[Years]`, `[Degree]`) and the PDF.
- OG images.
- Confirm the domain: `CNAME` and `url` in `_config.yml`. Without a custom domain, delete `CNAME` and set `url`/`baseurl` for `<user>.github.io/<repo>`.

## Local preview
```
bundle install
bundle exec jekyll serve
```
