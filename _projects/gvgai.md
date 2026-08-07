---
layout: page
title: General Video Game Artificial Intelligence (GVGAI)
description: A benchmark framework and international competition for General Artificial Intelligence in games.

img: assets/img/projects/gvgai/cover.png

importance: 20

status: completed

start_year: 2013
end_year: 2019

github: https://github.com/GAIGResearch/GVGAI

toc:
  - title: GVGAI
    id: top

  - title: Summary
    id: summary

  - title: Research Contributions
    id: research-contributions
    children:
      - title: General Video Game Playing
        id: general-video-game-playing
      - title: Statistical Forward Planning
        id: statistical-forward-planning
      - title: Learning without Forward Models
        id: learning
      - title: Procedural Content Generation
        id: procedural-content-generation
      - title: Educational Impact
        id: educational-impact

  - title: Competitions
    id: competitions

  - title: Resources
    id: resources

  - title: Legacy
    id: legacy
---

<div id="top"></div>

# General Video Game Artificial Intelligence (GVGAI)

*2013–2019*

{% include project_toc.liquid %}

The <strong>General Video Game Artificial Intelligence (GVGAI)</strong> framework is an open-source benchmark designed to evaluate Artificial Intelligence across a diverse collection of video games. Rather than specialising in a single game, GVGAI challenges agents to play previously unseen games using either forward planning or learning, depending on the competition track.

Originally developed at the University of Essex, GVGAI evolved into one of the most widely adopted benchmark environments in Game AI. It supported hundreds of research papers, multiple international competitions, and became a standard platform for research on planning, reinforcement learning, procedural content generation, automated game design, and explainable AI.

---

<h1 id="summary">Summary</h1>

<img
src="{{ '/assets/img/projects/gvgai/gameplay.png' | relative_url }}"
alt="GVGAI games"
style="width:100%; margin-bottom:1rem;"
/>

GVGAI was created with the goal of moving Game AI research beyond domain-specific benchmarks. By providing a common software framework together with a large and diverse collection of games, the framework enables researchers to compare algorithms under identical experimental conditions while encouraging the development of agents capable of generalising across many different environments.

The framework evolved considerably over the years, expanding from a planning competition into a complete research ecosystem including reinforcement learning, procedural content generation, automated game design, educational activities, and community competitions.

---

<h1 id="research-contributions">Research Contributions</h1>

<h3 id="general-video-game-playing">General Video Game Playing</h3>

GVGAI introduced one of the first benchmark environments specifically designed for <strong>General Video Game Playing</strong>. Unlike traditional Game AI research, which often focuses on a single game, GVGAI evaluates an agent's ability to perform well across a large collection of games featuring different mechanics, objectives, dynamics and visual styles.

The framework is based on the <strong>Video Game Description Language (VGDL)</strong>, allowing new games to be created quickly while maintaining a common interface for AI agents. This combination of diversity and standardisation made GVGAI one of the most widely used benchmarking platforms in academic Game AI research.

---

<h3 id="statistical-forward-planning">Statistical Forward Planning</h3>

<img
src="{{ '/assets/img/projects/gvgai/planning.png' | relative_url }}"
alt="Statistical Forward Planning"
style="width:100%; margin-bottom:1rem;"
/>

One of GVGAI's major research contributions was establishing <strong>Statistical Forward Planning (SFP)</strong> as a central paradigm for Game AI.

The framework provides a forward model that allows agents to simulate future game states before selecting actions. This enabled extensive research into <strong>Monte Carlo Tree Search</strong>, <strong>Rolling Horizon Evolutionary Algorithms</strong>, <strong>Portfolio Search</strong>, <strong>heuristic search</strong>, and numerous hybrid planning approaches.

Many planning algorithms developed and evaluated within GVGAI later influenced research on board games, strategy games, model-based reinforcement learning, and explainable AI.

---

<h3 id="learning">Learning without Forward Models</h3>

<div class="row">

<div class="col-sm-7">

<p>

To complement planning-based research, GVGAI introduced a <strong>Learning Track</strong>, where agents no longer have access to a forward model and must instead learn exclusively through interaction with the environment.

</p>

<p>

This extension created a benchmark for <strong>general reinforcement learning</strong>, encouraging the development of algorithms capable of learning across many different games while maintaining the benchmark's emphasis on generalisation.

</p>

<p>

Removing the forward model substantially changed the nature of the challenge: agents could no longer explicitly simulate future states and instead had to acquire useful representations and behaviour through experience.

</p>

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/gvgai/learning.png' | relative_url }}"
alt="GVGAI Learning Track"
style="width:100%;"
/>

</div>

</div>

---

<h3 id="procedural-content-generation">Procedural Content Generation</h3>

<img
src="{{ '/assets/img/projects/gvgai/pcg.png' | relative_url }}"
alt="Procedural Content Generation"
style="width:100%; margin-bottom:1rem;"
/>

GVGAI was later expanded with several <strong>Procedural Content Generation (PCG)</strong> competitions covering level generation, rule generation, and automatic game design.

These tracks transformed GVGAI into a broader ecosystem for Game AI research, allowing researchers to investigate not only how to play games, but also how to generate new games and game content automatically.

The framework became an important benchmark for procedural content generation research because generated content could be evaluated automatically using general game-playing agents within the same environment.

---

<h3 id="educational-impact">Educational Impact</h3>

<img
src="{{ '/assets/img/projects/gvgai/education.png' | relative_url }}"
alt="GVGAI Education"
style="width:80%; margin-bottom:1rem;"
/>

Thanks to its lightweight Java implementation, open-source codebase and accessible architecture, GVGAI became an important educational resource.

The framework has been used in undergraduate and postgraduate courses, AI tutorials, research seminars and student projects around the world, helping introduce students to modern Game AI techniques including planning, reinforcement learning and procedural content generation.

---

<h1 id="competitions">Competitions</h1>

The GVGAI framework grew from a single planning competition into a family of international benchmark competitions exploring multiple aspects of General Artificial Intelligence in games.

Competition tracks included:

- Planning agents with forward models
- Learning agents without forward models
- Single-player games
- Two-player games
- Procedural level generation
- Procedural rule generation
- Automatic game design
- Game parameter optimisation

Collectively, these competitions attracted hundreds of submissions from researchers worldwide and established GVGAI as one of the major benchmark ecosystems in academic Game AI.

---

<h1 id="resources">Resources</h1>

### Software

👉 <a href="https://github.com/GAIGResearch/GVGAI">GVGAI GitHub repository</a>

The repository contains:

- GVGAI Java framework
- hundreds of benchmark games
- forward models
- reference controllers
- competition infrastructure
- documentation

---

### Key Publications

- 📄 <strong>D. Perez-Liebana, J. Liu, A. Khalifa, R. Gaina, J. Togelius and S. Lucas.</strong>  
  <em>General Video Game AI: A Multi-Track Framework for Evaluating Agents, Games and Content Generation Algorithms.</em>  
  IEEE Transactions on Games, 11(3), pp. 195–214, 2019.  
  👉 <a href="{{ '/assets/pdf/papers/GVGAI_Survey.pdf' | relative_url }}">PDF</a>

- 📄 <strong>D. Perez-Liebana, S. Lucas, R. Gaina, A. Khalifa, J. Togelius and J. Liu.</strong>  
  <em>General Video Game Artificial Intelligence.</em>  
  Morgan & Claypool Publishers, 2019.  
  👉 <a href="https://gaigresearch.github.io/gvgaibook/">Web Site</a>

#### Other Publications

- <strong>D. Perez-Liebana, S. Samothrakis, J. Togelius, T. Schaul, S. M. Lucas, A. Couëtoux, J. Lee, C.-U. Lim and T. Thompson.</strong>  
  <em>The 2014 General Video Game Playing Competition.</em>  
  IEEE Transactions on Computational Intelligence and AI in Games, <strong>8(3)</strong>, pp. 229–243, 2016.  
  👉 <a href="{{ '/assets/pdf/papers/GVGAI2014Competition.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TCIAIG.2015.2402393">DOI</a>

- <strong>D. Perez-Liebana, S. Samothrakis, J. Togelius, T. Schaul and S. M. Lucas.</strong>  
  <em>General Video Game AI: Competition, Challenges and Opportunities.</em>  
  Proceedings of the Thirtieth AAAI Conference on Artificial Intelligence (AAAI), 2016.  
  👉 <a href="{{ '/assets/pdf/papers/aaai2016_gvgai.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1609/aaai.v30i1.9869">DOI</a>

- <strong>R. D. Gaina, A. Couëtoux, D. J. N. J. Soemers, M. H. M. Winands, T. Vodopivec, F. Kirchgessner, J. Liu, S. M. Lucas and D. Perez-Liebana.</strong>  
  <em>The 2016 Two-Player GVGAI Competition.</em>  
  IEEE Transactions on Games, <strong>10(2)</strong>, pp. 209–220, 2018.  
  👉 <a href="{{ '/assets/pdf/papers/GVGAI20162PCompetition.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TCIAIG.2017.2771241">DOI</a>

- <strong>R. D. Gaina, S. Devlin, S. M. Lucas and D. Perez-Liebana.</strong>  
  <em>Rolling Horizon Evolutionary Algorithms for General Video Game Playing.</em>  
  IEEE Transactions on Games, <strong>14(2)</strong>, pp. 232–242, 2022.  
  👉 <a href="{{ '/assets/pdf/papers/RHEAforGVGP_ToG21.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TG.2021.3060282">DOI</a>

---

<h1 id="legacy">Legacy</h1>

GVGAI was, at its birth, one of the most influential benchmark environments in Game AI research. Beyond its extensive use in planning and reinforcement learning, the framework inspired numerous subsequent research projects including Stratega, TAG (Tabletop Games Framework), PyTAG, and later work on Large Language Models for Game AI.

More broadly, GVGAI helped establish the idea that <strong>generality</strong> should be a central objective of Game AI research. Rather than designing algorithms for a single game, the framework encourages the development of methods capable of adapting to many different environments, making it a precursor to today's broader efforts towards General Artificial Intelligence.

<script src="{{ '/assets/js/project_toc.js' | relative_url }}"></script>
