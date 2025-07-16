# robertbabaev.tech - Robert Babaev's Personal Website

The home page for the source code of Robert Babaev's personal website.

## Developing

### Prerequisites

- pnpm (preferably v10 or higher)
- node (v20 LTS)

### Running Locally

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## FAQ

### Do you consider this site to be overengineered?

I consider it a demonstration of various development skills, including DevOps, back end, front end, and security.

### Why does this repo/website have a...?

- **Terraform folder?** I didn't want to do ClickOps during transitionary periods -- or, preferably, ever.
- **Resume folder?** Because I made a CI/CD pipeline for my resume.
- **CI/CD pipeline for a resume?** I got tired of jumping between 5 different locations to manage my resume, personal website, etc. This way, everything is in one place, and any time I make changes to my website or resume, I can make changes to the PDF resume that the site links to.
- **TOML based config system?** It was easier than YAML, and I finally worked out a way of doing it automatically. No more digging through source files just to change some content!
- **Series of `.tpl` files for use with 1Password?** Easier to initialize local development on multiple devices than having to copy-paste a bunch of API keys.
