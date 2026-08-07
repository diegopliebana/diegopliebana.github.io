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

# Tabletop Games Framework (TAG)

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

# Research Contributions

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

### AI-assisted Game Design

<img
src="{{ '/assets/img/projects/tag/gamedesign.png' | relative_url }}"
alt="AI-assisted game design"
style="width:100%; margin-bottom:1rem;"
/>

TAG extends beyond game-playing Artificial Intelligence by providing tools that assist designers during game development.

Large-scale automated playtesting allows the framework to identify dominant strategies, detect balance issues, estimate the impact of design changes and evaluate alternative game configurations before physical prototypes undergo extensive human playtesting.

Rather than replacing designers, these tools provide quantitative evidence that complements traditional playtesting, enabling faster iteration and more informed design decisions.

Current research explores the use of Large Language Models, automated game analysis and explainable Artificial Intelligence to further support tabletop game development.

---

### Reinforcement Learning with PyTAG

<img
src="{{ '/assets/img/projects/tag/pytag.png' | relative_url }}"
alt="PyTAG"
style="width:100%; margin-bottom:1rem;"
/>

To support the Reinforcement Learning community, TAG has been extended through <strong>PyTAG</strong>, a Python interface compatible with modern Reinforcement Learning ecosystems.

PyTAG enables reinforcement learning algorithms to interact with the same tabletop games used by planning algorithms while maintaining compatibility with the original Java implementation. This creates a common experimental platform where search and learning approaches can be directly compared across many different games.

---

# Tabletop R&D

<img
src="{{ '/assets/img/projects/tag/tabletoprd.png' | relative_url }}"
alt="Tabletop R&D"
style="width:100%; margin-bottom:1rem;"
/>

Research on TAG ultimately led to the creation of <strong>Tabletop R&D</strong>, a Queen Mary University of London spin-out company dedicated to bringing Artificial Intelligence tools to the tabletop games industry.

Building directly upon TAG's digital twin technology, the company develops automated playtesting systems capable of simulating thousands of complete games to analyse game balance, player interaction, scoring systems and strategic diversity.

These tools provide game designers with quantitative feedback throughout development while substantially reducing the amount of manual playtesting required. Collaborations with commercial publishers have demonstrated how Artificial Intelligence can accelerate game development and support better design decisions through large-scale simulation.

---

# Resources

### Software

👉 <a href="https://tabletopgames.ai/">TAG Project Website</a>

👉 <a href="https://github.com/GAIGResearch/TabletopGames">TAG GitHub Repository</a>

👉 <a href="https://github.com/GAIGResearch/PyTAG">PyTAG GitHub Repository</a>

---

### Key Publications

(Add the main TAG papers here.)

---

### Other Publications

(Add the remaining TAG-related papers here.)

---

# Legacy

TAG represents the current stage of an ongoing research programme exploring Artificial Intelligence for modern tabletop games. By combining forward models, digital twins, automated playtesting, reinforcement learning and AI-assisted game design within a single framework, TAG provides a common foundation for research spanning academia and industry.

The framework continues to evolve through new game implementations, algorithmic advances, PyTAG, Large Language Models, and the commercial activities of Tabletop R&D, demonstrating how Artificial Intelligence can support not only game playing but also the design of the next generation of tabletop games.
