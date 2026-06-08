# data "digitalocean_domain" "robertbabaev_tech" {
#   name = "robertbabaev.tech"
# }

data "digitalocean_project" "personal_website" {
  name = "Personal Website"
}

data "digitalocean_spaces_bucket" "robertbabaev_tech" {
  name   = var.do_bucket
  region = var.do_region
}

locals {
  website_bucket  = data.digitalocean_spaces_bucket.robertbabaev_tech
  resume_url_base = "https://${local.website_bucket.bucket_domain_name}/resumes"
}

resource "digitalocean_spaces_bucket_policy" "robertbabaev_tech_resumes_public_read" {
  region = local.website_bucket.region
  bucket = local.website_bucket.name
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadResumes"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "arn:aws:s3:::${local.website_bucket.name}/resumes/*"
      }
    ]
  })
}

resource "digitalocean_app" "website" {
  project_id = data.digitalocean_project.personal_website.id

  spec {
    domain {
      name     = var.domain
      type     = "PRIMARY"
      wildcard = false
      zone     = var.domain
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
        value = local.resume_urls.dev
      }

      env {
        key   = "PUBLIC_DEVOPS_RESUME"
        value = local.resume_urls.devops
      }

      env {
        key   = "PUBLIC_SECURITY_RESUME"
        value = local.resume_urls.security
      }

      env {
        key   = "PUBLIC_URL_ORIGIN"
        value = "https://${var.domain}"
      }
    }
  }
}
