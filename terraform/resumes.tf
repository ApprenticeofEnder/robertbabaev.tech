locals {
  resume_name = "Robert_Babaev_resume"
  resume_variants = sort([
    for f in fileset("${path.module}/../config/resume_variants", "*.toml") :
    trimsuffix(f, ".toml")
    if !contains(["base", "web"], trimsuffix(f, ".toml"))
  ])
  resumes = {
    for variant in local.resume_variants :
    variant => {
      key    = "resumes/${variant}/${local.resume_name}.pdf"
      source = "${path.module}/../resume/${variant}/${local.resume_name}.pdf"
      url    = "${local.local.resume_url_base}/${variant}/${local.resume_name}.pdf"
    }
  }
}

resource "digitalocean_spaces_bucket_object" "resume" {
  for_each = local.resumes

  region       = local.website_bucket.region
  bucket       = local.website_bucket.name
  key          = each.value["key"]
  source       = each.value["source"]
  content_type = "application/pdf"

  etag = filemd5(each.value["source"])
}
