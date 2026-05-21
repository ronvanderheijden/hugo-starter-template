# Hugo Starter Template

A launch-ready Hugo template for a small organisation's website — a sports club, foundation, or local business. It ships as a finished-looking example site for a fictional small organisation; work through the [launch checklist](#launch-checklist) to make it yours.

All included content is example content, and every demo page carries a visible note saying so.

## What the template ships

- **Sections**: Home, About, Posts (news), Services, Info, and Contact, with `hugo new` templates for posts, services, and info pages.
- **Mobile navigation**: on small screens the menu collapses behind an accessible menu button; without JavaScript it falls back to plain stacked links.
- **Light and dark mode**: follows the visitor's device preference automatically, with no toggle and no script.
- **Fast images**: images placed in a page with plain markdown are delivered resized, in WebP with a fallback, and lazy-loaded — put the image file next to the page it belongs to (as in the example post). A `figure` shortcode adds captions and size control. External images pass through untouched.
- **Posts archive and feed**: the posts list paginates at ten per page, and the RSS feed is auto-discoverable from every page plus linked in the footer.
- **Search and link previews**: favicon set, web manifest, `robots.txt` + sitemap, a site-wide fallback social preview image, and Organization/WebSite/Article structured data derived from `config.yml`.
- **Helpful 404**: a styled not-found page linking back to every section, served by any host that honors a site's own 404 page.
- **Shortcodes**: `alert` (info/success/warning/error), `cta` buttons, and `figure`.
- **Reproducible builds**: Docker-based development with a pinned Hugo version — no Hugo install needed on the host.

## Structure

```text
.
├── archetypes/                  Content templates for hugo new
├── content/                     Example content and section structure
│   ├── _index.md                Home page content
│   ├── about.md                 About the organisation
│   ├── contact.md               Contact details
│   ├── posts/                   Dated news posts (paginated, RSS feed)
│   ├── services/                What the organisation offers
│   └── info/                    Practical information pages
├── static/                      Icons, web manifest images, fallback preview image
└── themes/
    └── fieldrose/
        ├── layouts/             Hugo templates, partials, and shortcodes
        └── assets/
            ├── css/             Styling, including the light and dark palettes
            └── js/              Menu toggle script
```

Create new content with Hugo archetypes:

```sh
make new path=posts/my-news-item.md
make new path=services/my-service.md
make new path=info/my-info-page.md
```

Common front matter fields used by the starter template:

| Field | Purpose |
| --- | --- |
| `title` | Page title. |
| `description` | SEO, link previews, and listing summary. |
| `date` | Publication date for dated content. |
| `tags` | Taxonomy terms. |
| `weight` | Ordering for info pages and menus. |
| `image` | Page-specific social preview image (falls back to the site-wide one). |
| `draft` | Whether Hugo should exclude the page from production builds. |

## Development

Start the local Hugo server with Docker:

```sh
make serve
```

The site is served at: http://127.0.0.1:1313

Build the static site:

```sh
make build
```

### Pinned Hugo version

Builds use **Hugo 0.152.2** (Alpine package `0.152.2-r6`), so every clone builds identically regardless of when it is cloned. The pin lives in one place: the `HUGO_VERSION` argument at the top of the `Dockerfile` (alongside the pinned `ALPINE_VERSION`). Bump it there to upgrade; available package versions are listed at [pkgs.alpinelinux.org](https://pkgs.alpinelinux.org/packages?name=hugo&branch=v3.23).

## Launch checklist

Work through these steps top to bottom to take a fresh clone live:

1. **Set the site identity** in `config.yml`: `baseURL` (your real domain), `title`, `languageCode`, and everything under `params.meta` — author, description, and keywords feed the page metadata and structured data.
2. **Replace the icons** in `static/`: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, and `icon-512.png`. Keep the same file names and sizes; they are referenced from every page and from the web manifest.
3. **Replace the fallback preview image** at `static/images/social-card.png` (1200×630). It is used in link previews whenever a page has no `image` of its own. If you change its path, update `params.meta.image` in `config.yml`.
4. **Set or remove the logo** for search engines: `params.meta.logo` in `config.yml`. Removing the line is fine — structured data simply omits it.
5. **Replace the example content** in `content/`: the home page, about, contact, the example post (including its example photo), the example service, both info pages, and the three section intro pages (`posts/_index.md`, `services/_index.md`, `info/_index.md`). Every example page contains a visible "example content" note — when none are left, you have replaced everything.
6. **Review the menu** in `config.yml` under `menus.main` if your sections differ.
7. **Build and click through**: run `make serve` and check every page on a phone-sized and a desktop window, in light and dark mode. Try a nonsense address to see the 404 page and the feed link in the footer.

### Deliberately left open

Hosting, contact-form handling, and analytics are per-customer choices the template does not make for you:

- **Hosting**: the build output in `public/` works on any static host. Most hosts automatically serve the included `404.html` for unknown addresses.
- **Contact form**: the contact page ships with email/phone details only. Wire up a form service or your host's form handling if you need one.
- **Analytics**: none included. Add your provider's snippet to the theme's `head.html` partial if required.

## Useful Commands

```sh
Commands:
  help        Print help for each target

Hugo:
  build       Build the static site
  serve       Start the local Hugo server
  new         Create new content (usage: make new path=posts/my-example-post.md)

Docker:
  shell       Login to the hugo container
  clean       Stops the hugo container, removes volumes and the static site
```

## Notes

- Styling lives in `themes/fieldrose/assets/css/main.css`; the light and dark palettes are CSS custom properties at the top of the file.
- `themes/fieldrose/assets/js/main.js` contains the menu toggle — the site works fully without it.
- Generated files in `public/` are build output and are ignored by Git.
