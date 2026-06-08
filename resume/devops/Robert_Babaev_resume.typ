#import "../base.typ": *

#let data = toml("./data.toml")

#show: resume_header.with(data.header)

#main_resume(data)
