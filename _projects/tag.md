---
layout: page
title: Tabletop Games Framework (TAG)
description: A research framework for Artificial Intelligence in modern tabletop games.

img: assets/img/projects/tag/cover.png

importance: 25

status: ongoing

start_year: 2020

github: https://github.com/GAIGResearch/TabletopGames
---

# TAG

*2020–Present*

The <strong>Tabletop Games Framework (TAG)</strong> is an open-source research platform for Artificial Intelligence in modern tabletop games. Unlike classical Game AI benchmarks centred on Chess, Go or Atari, TAG focuses on modern designer board games, whose mechanics combine stochasticity, hidden information, asymmetric player powers, drafting, resource management and rich strategic interactions.

TAG provides a unified software architecture that allows researchers to implement games once and evaluate a broad range of Artificial Intelligence techniques, including Statistical Forward Planning, Reinforcement Learning, Explainable AI and AI-assisted game design. The framework has gradually evolved into one of the largest research platforms dedicated to modern tabletop games and now forms the foundation of both academic research and commercial applications.

---

# The Challenge of Modern Tabletop Games

<img
src="{{ '/assets/img/projects/tag/challenge.png' | relative_url }}"
alt="Modern tabletop games"
style="width:100%; margin-bottom:1rem;"
/>

Modern tabletop games present a unique challenge for Artificial Intelligence. Unlike traditional board games, they typically combine multiple sources of uncertainty, stochastic events, hidden information, asymmetric player powers, complex resource economies and highly diverse mechanics.

Furthermore, thousands of new tabletop games are published every year, each introducing new combinations of mechanisms and strategic interactions. This diversity makes the domain particularly attractive for Artificial Intelligence research while simultaneously creating significant engineering challenges.

TAG was developed to address these challenges by providing a common framework capable of representing a broad range of modern tabletop games through a unified programming interface.

---

# Core Technologies

### A Unified Framework for Modern Tabletop Games

<img
src="{{ '/assets/img/projects/tag/framework.png' | relative_url }}"
alt="TAG Framework"
style="width:100%; margin-bottom:1rem;"
/>

TAG provides a generic software architecture that separates game implementation from Artificial Intelligence algorithms. Games expose a common interface based on forward models, actions, game states and players, allowing planning and learning algorithms to operate across many different games without modification.

The framework currently includes an expanding collection of modern tabletop games spanning many different genres and mechanics. This common architecture enables direct comparison between algorithms while dramatically reducing the engineering effort required to investigate new research questions.

---

### Digital Twins for Tabletop Games

<img
src="{{ '/assets/img/projects/tag/digitaltwins.png' | relative_url }}"
alt="Digital twins"
style="width:100%; margin-bottom:1rem;"
/>

One of TAG's central ideas is the creation of <strong>digital twins</strong> of tabletop games.

A digital twin faithfully reproduces the mechanics of a physical board game inside a computational environment, allowing Artificial Intelligence agents to play thousands of complete games automatically. This enables analyses that would be practically impossible through human playtesting alone.

Digital twins allow researchers and game designers to investigate balance, dominant strategies, player interaction, game length, branching factors and many other properties through large-scale automated simulation.

---

### Reinforcement Learning with PyTAG

<div class="row">

<div class="col-sm-7">

PyTAG extends the TAG ecosystem to the Reinforcement Learning community through a Python interface compatible with modern RL frameworks.

It enables reinforcement learning algorithms to interact with exactly the same tabletop games used by planning algorithms while maintaining compatibility with the original Java implementation. This creates a unified research platform where planning and learning approaches can be compared directly under identical experimental conditions.

Beyond compatibility, PyTAG makes modern tabletop games easily accessible to the broader machine learning community through familiar Gymnasium-style interfaces and supports research on multi-agent reinforcement learning in complex tabletop environments.

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/pytag.png' | relative_url }}"
alt="PyTAG"
style="width:100%;"
/>

</div>

</div>

---

### AI-assisted Game Design

<div class="row">

<div class="col-sm-7">

Artificial Intelligence has the potential to assist game designers long before a game reaches players.

TAG supports automated playtesting, parameter optimisation, balance analysis and strategy discovery by allowing AI agents to play thousands of complete games autonomously. This provides quantitative evidence that complements traditional human playtesting and helps identify dominant strategies, balance issues and unexpected gameplay interactions.

Current research extends these ideas through Large Language Models, explainable Artificial Intelligence and automated game analysis, enabling designers to receive richer and more actionable feedback during the development process.

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/gamedesign.png' | relative_url }}"
alt="AI-assisted game design"
style="width:100%;"
/>

</div>

</div>

---

# Tabletop R&D

<div class="row">

<div class="col-sm-7">

Research on TAG ultimately led to the creation of <strong>Tabletop R&D</strong>, a Queen Mary University of London spin-out company dedicated to bringing Artificial Intelligence tools to the tabletop games industry.

Building directly upon TAG's digital twin technology, the company develops automated playtesting systems capable of simulating thousands of complete games to analyse game balance, player interaction, scoring systems and strategic diversity.

These tools provide game designers with quantitative feedback throughout development while substantially reducing the amount of manual playtesting required. Collaborations with commercial publishers have demonstrated how Artificial Intelligence can accelerate game development and support better design decisions through large-scale simulation.

Today, Tabletop R&D continues to extend the TAG framework while transferring research outcomes into commercial products for the tabletop games industry.

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/tabletoprd.png' | relative_url }}"
alt="Tabletop R&D"
style="width:100%;"
/>

</div>

</div>
