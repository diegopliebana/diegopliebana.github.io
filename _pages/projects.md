---
layout: page
title: Projects
permalink: /projects/
description: Research and development projects.
nav: true
nav_order: 3
horizontal: false
---

## Ongoing projects

{% assign ongoing_projects = site.projects | where: "status", "ongoing" | sort: "importance" %}

{% for project in ongoing_projects %}
  {% include projects.liquid %}
{% endfor %}

## Completed projects

{% assign completed_projects = site.projects | where: "status", "completed" | sort: "end_year" | reverse %}

{% for project in completed_projects %}
  {% include projects.liquid %}
{% endfor %}
