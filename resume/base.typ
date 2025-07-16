#import "./lib.typ": *

#let details = toml("data_common.toml")

#let resume_header(positions, body) = {
  resume(
    author: (
      firstname: details.firstname,
      lastname: details.lastname,
      email: details.email,
      phone: details.phone,
      homepage: details.homepage,
      address: details.address,
      github: details.github,
      linkedin: details.linkedin,
      positions: positions,
    ),
    language: "en",
    colored-headers: true,
    accent-color: details.accent_color,
    show-footer: false,
    page-size: "us-letter",
    body,
  )
}

#let education() = [
  = Education
  #block(above: 1em, below: 1em)[
    #resume-entry(
      title: details.education.title,
      location: details.education.location,
      date: details.education.date,
      description: details.education.description,
    )
  ]
]

#let skills(skill_data) = [
  = Technical Skills
  #block(above: 0.65em, below: 1em)[
    #resume-skill-item(
      "Programming",
      (
        [*_Comfortable_*:],
        skill_data.programming.comfortable.join(", "),
        "|",
        [*_Intermediate_*:],
        skill_data.programming.intermediate.join(", "),
        "|",
        [*_Beginner_*:],
        skill_data.programming.beginner.join(", "),
      ),
      comma-join: false,
    )
    #resume-skill-item(
      "Software",
      skill_data.software,
    )
  ]
]

#let experience(experience_data) = [
  = Professional Experience
  #for (key, position) in experience_data {
    resume-entry(
      title: position.title,
      description: position.description,
      date: position.date,
      location: position.location,
    )

    resume-item[
      #for bullet_point in position.bulletPoints [
        - #eval(bullet_point, mode: "markup")
      ]
    ]
  }
]

#let projects(project_data) = [
  = Projects, Volunteering, and Open Source
  #for (key, project) in project_data {
    let location = project.location
    if "link" in project {
      location = link(project.link)[#project.location]
    }
    if "github" in project {
      location = github-link(project.github)
    }

    resume-entry(
      title: project.title,
      description: project.description,
      date: project.date,
      location: location,
    )

    resume-item[
      #for bullet_point in project.bulletPoints [
        - #eval(bullet_point, mode: "markup")
      ]
    ]
  }
]

#let render_activity(
  title,
  timeframe,
  body,
) = {
  [#strong(title) #body #h(1fr) #text(fill: accent-color)[#strong(timeframe)]]
}

#let activities(activity_data) = [
  = Competitions and Other Activities
  #for (key, activity) in activity_data [
    #render_activity(
      activity.title,
      activity.timeframe,
      eval(activity.body, mode: "markup"),
    ) \
  ]
]

#let main_resume(data) = [
  #education()

  #skills(data.skills)
  #experience(data.experience)
  #projects(data.projects)
  #activities(data.activities)
]

