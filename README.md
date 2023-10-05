# Robert Babaev's Personal Website

This may very well be *the* most over-engineered personal website you've ever seen in a good way. [Here's a link.](https://robertbabaev.tech/home)

![Alt text](image-1.png)

When I started making my website, it was a very simple Heroku deployment with a much older, less modern UI (good old expressJS and Pug, right?) in both design and framework choice. I realized that every time I deployed it, I had to modify the templates directly and send that up the line, and it took about 2 minutes to deploy every time. Now, I wasn't exactly deploying every day . . . 

. . . but at some point I decided to ignore the [relevant XKCD](https://xkcd.com/1205/) and make it so that I could edit my website's content from anywhere, and give it a fresh coat of paint.

![A chart mapping "How long can you work on making a routine task more efficient before you're spending more time than you save?"](https://imgs.xkcd.com/comics/is_it_worth_the_time.png)

This turned into an integration with Django, Sveltekit, Nginx, Certbot, Postgres, and Docker-Compose to hold everything together. I made everything more modular in the sense that I could swap out data at any time from anywhere, as well as got in some sysadmin practice working with a Digital Ocean VPS. I added MFA, some fun firewall and load-balancing shenanigans, and some neat animations.

Fast forward to today, and it's now got a sleeker, responsive look that draws inspiration from the terminals and site builders of the 80s and 90s. I've automated things with GitHub Actions so that I could not only modify but also *deploy* from anywhere, so if inspiration strikes while I'm away from home I can bang out some quick fixes.

## Tech Stack & the Nitty Gritty
- SvelteKit - Front End
  - Tailwind
  - PostCSS
  - TypeScript
  - HTML/CSS
- Django - REST API
  - MFA
  - Argon2 Password Hashing
- PostgreSQL - Database
- Nginx - Webserver/Load Balancer
  - HTTPS
  - Cloudflare Bypass Prevention
- Certbot - SSL
- Docker Compose - Containerization
- GitHub Actions - CI/CD 