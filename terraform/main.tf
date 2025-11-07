# data "digitalocean_domain" "robertbabaev_tech" {
#   name = "robertbabaev.tech"
# }

data "digitalocean_project" "personal_website" {
  name = "Personal Website"
}

resource "digitalocean_app" "website" {
  project_id = data.digitalocean_project.personal_website.id

  spec {
    domain {
      name     = "robertbabaev.tech"
      type     = "PRIMARY"
      wildcard = false
      zone     = "robertbabaev.tech"
    }

    name   = "personal-website"
    region = var.do_region

    ingress {
      rule {
        component {
          name = "static-site"
        }
        match {
          path {
            prefix = "/"
          }
        }
      }
    }

    static_site {
      name          = "static-site"
      build_command = "pnpm build"
      output_dir    = "/build"

      github {
        branch         = "main"
        deploy_on_push = true
        repo           = "ApprenticeofEnder/robertbabaev.tech"
      }

      env {
        key   = "PUBLIC_DEV_RESUME"
        value = "https://${var.do_bucket}.${var.do_region}.digitaloceanspaces.com/resumes/dev/Robert_Babaev_resume.pdf"
      }

      env {
        key   = "PUBLIC_URL_ORIGIN"
        value = "https://robertbabaev.tech"
      }
    }
  }
}
