terraform {
  required_providers {
    digitalocean = {
      source  = "digitalocean/digitalocean"
      version = "~> 2.0"
    }
  }

  backend "s3" {
    endpoint                    = "https://${var.do_region}.digitaloceanspaces.com"
    region                      = "us-west-1" # Just a placeholder, not used
    key                         = "terraform/terraform.tfstate"
    bucket                      = var.do_bucket
    skip_credentials_validation = true
    skip_requesting_account_id  = true
    skip_metadata_api_check     = true
    skip_region_validation      = true
    skip_s3_checksum            = true
    use_lockfile                = true
  }
}
