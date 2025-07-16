#import "../base.typ": *

#let data = toml("./data.toml")

#show: resume_header.with((
  "Security Software Engineer",
  "Full Stack Software Engineer",
  "Backend Software Engineer",
))

#main_resume(data)
