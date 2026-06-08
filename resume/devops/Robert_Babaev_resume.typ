#import "../base.typ": *

#let data = toml("./data.toml")

#show: resume_header.with((
  "DevOps Engineer",
  "Platform Engineer",
  "Site Reliability Engineer",
))

#main_resume(data)
