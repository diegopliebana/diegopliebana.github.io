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

Pasted text.txt
Document
Ok, here's the list


forChatGPT(1).zip
Zip Archive
I've attached a zip with the most important files of the old site.

Note that, from your suggestions, I'm mostly interested in (2). I want the style of the new site and ditch the look and feel of the old site. I do have a lot of papers linked, though (see in publications.php), and for now I think it's easier if the new site links to the PDFs on the old site.

Can we start with the about (landing page) of the new site? What do I have to change in the new site to bring up this part?
Can you take a look? https://diegopliebana.github.io/publications/

the formatting is horrible:


Sat, Jun 6 at 7:37 PM
papers(1).bib
File
Attached the bibtex. Add all the things you mention above
Edit

Good catches on both.

1. The red syntax highlighting in GitHub

The Markdown itself is probably syntactically valid, but GitHub's editor turns large blocks red when it thinks an HTML tag hasn't been closed properly or Markdown is malformed.

Looking back at what I generated, I see the culprit: I mixed Markdown headings (###) with raw HTML (<div>, <img>, <p>) and horizontal rules (---). GitHub's syntax highlighter is notoriously bad at this, especially inside Jekyll pages.

For the next iterations, I suggest we adopt a much cleaner convention:

Never use <p>...</p>; plain Markdown paragraphs are sufficient.
Only use HTML for:
<img>
<strong>
Bootstrap <div class="row"> when we really need two columns.

This keeps GitHub's parser much happier.

2. TAG is NOT part of the EPSRC NIA

Thanks for correcting me. That's an important distinction.

I had incorrectly extrapolated from Stratega.

So remove completely:

# Funding

👉 EPSRC New Investigator Award

...

and remove every occurrence of

Abstract Forward Models

EPSRC

EP/T008962/1

throughout the page.

Instead, the introduction should simply read something like

TAG is an open-source research platform designed to support Artificial Intelligence research in modern tabletop games. The framework provides a common software architecture for implementing, analysing and playing modern board games while exposing forward models suitable for planning and reinforcement learning algorithms.

No funding mention at all.

3. I also want to restructure TAG

After thinking about it, I don't actually like the page I wrote.

It reads like "Stratega applied to board games."

I think TAG deserves a different narrative.

Instead of

Framework
Planning
RL
Analytics

I'd do

The Challenge of Modern Tabletop Games

TAG Framework

Digital Twins

AI-assisted Game Design

Reinforcement Learning (PyTAG)

Commercial Impact (Tabletop R&D)

Notice how this tells a story:

Why are tabletop games hard?

↓

We built TAG.

↓

TAG enables digital twins.

↓

Digital twins enable AI-assisted game design.

↓

PyTAG enables RL.

↓

Tabletop R&D commercialises the technology.

I think that's a much more compelling narrative than another framework page.

I also think we should stop here and make TAG the best page on the site rather than just another project. Given how central it is to your current research and the spin-out, I'd be happy to spend a couple of iterations refining it until it really feels like the flagship project.

Ok, I like the new structure, give me the MD

I like this structure much better too. It makes TAG feel fundamentally different from the previous projects, which is exactly what it should be.

One thing I'd also change: since this is your only ongoing project, the tone should be more forward-looking. Instead of "this framework was created...", it should repeatedly say things like "TAG continues to...", "The framework is currently being extended...", etc.

Here's the page I'd use.

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





</div>

</div>
