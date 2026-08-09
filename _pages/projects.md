---
layout: page
title: Projects
permalink: /projects/
description: Research and development projects.
nav: true
nav_order: 3
horizontal: false

dropdown: true
children:
  - title: All Projects
    permalink: /projects/
  - title: divider
  - title: TAG
    permalink: /projects/tag/
  - title: Tribes
    permalink: /projects/tribes/
  - title: Stratega
    permalink: /projects/stratega/
  - title: GVGAI
    permalink: /projects/gvgai/
  - title: PTSP
    permalink: /projects/ptsp/
---

## Ongoing projects

<div class="projects">
  <div class="row">
    {% assign ongoing_projects = site.projects | where: "status", "ongoing" | sort: "importance" %}
    {% for project in ongoing_projects %}
      <div class="col-12 col-md-6 col-lg-4 d-flex mb-4">
        {% include project-card.liquid %}
      </div>
    {% endfor %}
  </div>
</div>

## Completed projects

<div class="projects">
  <div class="row">
    {% assign completed_projects = site.projects | where: "status", "completed" | sort: "end_year" | reverse %}
    {% for project in completed_projects %}
      <div class="col-12 col-md-6 col-lg-4 d-flex mb-4">
        {% include project-card.liquid %}
      </div>
    {% endfor %}
  </div>
</div>
