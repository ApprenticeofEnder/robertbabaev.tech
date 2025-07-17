# robertbabaev.tech

The repository for Robert Babaev's personal website and related material. [See the website.](https://robertbabaev.tech)

![A green, white, and black eye logo with a nexus pattern in the iris.](https://github.com/ApprenticeofEnder/robertbabaev.tech/blob/988a468144d0308d945355a384460ed45185dcde/static/images/enderlogo_v2.png)

## Table of Contents

- [Developing](#developing)
- [FAQ](#faq)

## Developing

### Prerequisites

- pnpm (preferably v10 or higher)
- node (v20 LTS)

### Install Dependencies

```bash
# in the main folder of the project
pnpm i
```

### Running Locally

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

## FAQ

### Why does this repo/website have a...?

- **Terraform folder?** I didn't want to do ClickOps during transitionary periods -- or, preferably, ever.
- **Resume folder?** Because I made a CI/CD pipeline for my resume.
- **CI/CD pipeline for a resume?** I got tired of jumping between 5 different locations to manage my resume, personal website, etc. This way, everything is in one place, and any time I make changes to my website or resume, I can make changes to the PDF resume that the site links to.
- **TOML based config system?** It was easier than YAML, and I finally worked out a way of doing it automatically. No more digging through source files just to change some content!
- **Series of `.tpl` files for use with 1Password?** It's easier to initialize local development on multiple devices than having to copy-paste a bunch of API keys.
