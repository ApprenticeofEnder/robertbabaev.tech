locals {
  resume_name = "Robert_Babaev_resume"
  resume_variants = sort([
    for f in fileset("${path.module}/../config/resume_variants", "*.toml") :
    trimsuffix(f, ".toml")
    if !contains(["base", "web"], trimsuffix(f, ".toml"))
  ])
  resume_urls = {
    for variant in local.resume_variants :
    variant => "${local.resume_url_base}/${variant}/${local.resume_name}.pdf"
  }
}

resource "digitalocean_spaces_bucket_object" "resume" {
  for_each = toset(local.resume_variants)

  region       = local.website_bucket.region
  bucket       = local.website_bucket.name
  key          = "resumes/${each.key}/${local.resume_name}.pdf"
  source       = "${path.module}/../resume/${each.key}/${local.resume_name}.pdf"
  content_type = "application/pdf"
}
