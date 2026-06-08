variable "do_bucket" {
  type    = string
  default = "robertbabaev-tech"
}

variable "do_region" {
  type    = string
  default = "tor1"
}

variable "domain" {
  type    = string
  default = "robertbabaev.tech"
}

variable "do_token" {
  type      = string
  sensitive = true
}

variable "do_access_id" {
  type      = string
  sensitive = true
}

variable "do_secret_key" {
  type      = string
  sensitive = true
}
