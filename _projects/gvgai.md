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
---

# General Video Game Artificial Intelligence (GVGAI)

*2013–2024*

The **General Video Game Artificial Intelligence (GVGAI)** framework is an open-source benchmark designed to evaluate Artificial Intelligence across a diverse collection of video games. Rather than specialising in a single game, GVGAI challenges agents to play previously unseen games using either forward planning or learning, depending on the competition track.

Originally developed at the University of Essex, GVGAI has evolved into one of the most widely adopted benchmark environments in Game AI. It has supported hundreds of research papers, multiple international competitions, and has become a standard platform for research on planning, reinforcement learning, procedural content generation, automated game design, and explainable AI.

---

# Summary


<img
src="{{ '/assets/img/projects/gvgai/gameplay.png' | relative_url }}"
alt="GVGAI games"
style="width:100%; margin-bottom:1rem;"
/>

GVGAI was created with the goal of moving Game AI research beyond domain-specific benchmarks. By providing a common software framework together with a large and diverse collection of games, the framework enables researchers to compare algorithms under identical experimental conditions while encouraging the development of agents capable of generalising across many different environments.

The framework has evolved considerably over the years, expanding from a planning competition into a complete research ecosystem including reinforcement learning, procedural content generation, automated game design, educational activities, and community competitions.

---

# Research Contributions

### General Video Game Playing


GVGAI introduced one of the first benchmark environments specifically designed for **General Video Game Playing**. Unlike traditional Game AI research, which often focuses on a single game, GVGAI evaluates an agent's ability to perform well across a large collection of games featuring different mechanics, objectives, dynamics and visual styles.

The framework is based on the **Video Game Description Language (VGDL)**, allowing new games to be created quickly while maintaining a common interface for AI agents. This combination of diversity and standardisation has made GVGAI one of the most widely used benchmarking platforms in academic Game AI research.

---

### Statistical Forward Planning

<div class="row">

<img
src="{{ '/assets/img/projects/gvgai/planning.png' | relative_url }}"
alt="Statistical Forward Planning"
style="width:100%;"
/>

<p>

One of GVGAI's major research contributions has been establishing **Statistical Forward Planning (SFP)** as a central paradigm for Game AI.

</p>

<p>

The framework provides a forward model that allows agents to simulate future game states before selecting actions. This enabled extensive research into <strong>Monte Carlo Tree Search</strong>, <strong>Rolling Horizon Evolutionary Algorithms</strong>, <strong>Portfolio Search</strong>, <strong>heuristic search</strong>, and numerous hybrid planning approaches.

</p>

<p>

Many planning algorithms developed and evaluated within GVGAI later influenced research on board games, strategy games, model-based reinforcement learning, and explainable AI.

</p>


</div>

---

### Learning without Forward Models


<div class="row">

<div class="col-sm-8">
 
To complement planning-based research, GVGAI introduced a <strong>Learning Track</strong>, where agents no longer have access to a forward model and must instead learn exclusively through interaction with the environment.

This extension created a benchmark for <strong>general reinforcement learning</strong>, encouraging the development of algorithms capable of transferring knowledge across many different games while maintaining the benchmark's emphasis on generalisation.

</div>

<div class="col-sm-5">

 <img
src="{{ '/assets/img/projects/gvgai/learning.png' | relative_url }}"
alt="Learning Track"
style="width:100%; margin-bottom:1rem;"
/>

</div>

</div>

---

### Procedural Content Generation

<img
src="{{ '/assets/img/projects/gvgai/pcg.png' | relative_url }}"
alt="Procedural Content Generation"
style="width:100%;"
/>

<p>

GVGAI was later expanded with several <strong>Procedural Content Generation (PCG)</strong> competitions covering level generation, rule generation, and automatic game design.

</p>

<p>

These tracks transformed GVGAI into a complete ecosystem for Game AI research, allowing researchers to investigate not only how to play games, but also how to generate new games and game content automatically.

</p>

<p>

The framework has since become one of the main benchmarks for procedural content generation in games.

</p>



---

### Educational Impact

<img
src="{{ '/assets/img/projects/gvgai/education.png' | relative_url }}"
alt="GVGAI Education"
style="width:80%; margin-bottom:1rem;"
/>

Thanks to its lightweight Java implementation, open-source codebase and accessible architecture, GVGAI has become an important educational resource.

The framework has been used in undergraduate and postgraduate courses, AI tutorials, research seminars and student projects around the world, helping introduce thousands of students to modern Game AI techniques including planning, reinforcement learning and procedural content generation.

---

# Competitions

The GVGAI framework grew from a single planning competition into a family of international benchmark competitions exploring multiple aspects of General Artificial Intelligence in games.

Competition tracks have included:

- Planning agents with forward models
- Learning agents without forward models
- Single-player games
- Two-player games
- Procedural level generation
- Procedural rule generation
- Automatic game design
- Game parameter optimisation

Collectively, these competitions have attracted hundreds of submissions from researchers worldwide and continue to serve as one of the largest benchmark ecosystems in academic Game AI.

---

# Resources

### Software

👉 **GitHub repository**

https://github.com/GAIGResearch/GVGAI

The repository contains:

- GVGAI Java framework
- hundreds of benchmark games
- forward models
- reference controllers
- competition infrastructure
- documentation

---

### Key Publications

- 📄 **D. Perez-Liebana, J. Liu, A. Khalifa, R. Gaina, J. Togelius and S. Lucas.**  
  *General Video Game AI: A Multi-Track Framework for Evaluating Agents, Games and Content Generation Algorithms.*  
  IEEE Transactions on Games, 11(3), pp. 195–214, 2019.  
  👉 [PDF]({{ '/assets/pdf/papers/GVGAIFramework-TOG19.pdf' | relative_url }})

- 📄 **D. Perez-Liebana, S. Lucas, R. Gaina, A. Khalifa, J. Togelius and J. Liu.**  
  *General Video Game Artificial Intelligence.*  
  Morgan & Claypool Publishers, 2019.  
  👉 [PDF]({{ '/assets/pdf/papers/GVGAIBook.pdf' | relative_url }})

#### Other Publications

- **D. Perez-Liebana, S. Samothrakis, J. Togelius, T. Schaul, S. M. Lucas, A. Couëtoux, J. Lee, C.-U. Lim and T. Thompson.**  
  *The 2014 General Video Game Playing Competition.*  
  IEEE Transactions on Computational Intelligence and AI in Games, **8(3)**, pp. 229–243, 2016.  
  👉 [PDF]({{ '/assets/pdf/papers/GVGAICompetition-TCIAIG15.pdf' | relative_url }}) · [DOI](https://doi.org/10.1109/TCIAIG.2015.2402393)

- **D. Perez-Liebana, S. Samothrakis, J. Togelius, T. Schaul and S. M. Lucas.**  
  *General Video Game AI: Competition, Challenges and Opportunities.*  
  Proceedings of the **Thirtieth AAAI Conference on Artificial Intelligence (AAAI)**, 2016.  
  👉 [PDF]({{ '/assets/pdf/papers/GVGAI-AAAI16.pdf' | relative_url }}) · [DOI](https://doi.org/10.1609/aaai.v30i1.9869)

- **R. D. Gaina, A. Couëtoux, D. J. N. J. Soemers, M. H. M. Winands, T. Vodopivec, F. Kirchgessner, J. Liu, S. M. Lucas and D. Perez-Liebana.**  
  *The 2016 Two-Player GVGAI Competition.*  
  IEEE Transactions on Games, **10(2)**, pp. 209–220, 2018.  
  👉 [PDF]({{ '/assets/pdf/papers/GVGAI2P-TOG18.pdf' | relative_url }}) · [DOI](https://doi.org/10.1109/TCIAIG.2017.2771241)

- **R. D. Gaina, S. Devlin, S. M. Lucas and D. Perez-Liebana.**  
  *Rolling Horizon Evolutionary Algorithms for General Video Game Playing.*  
  IEEE Transactions on Games, **14(2)**, pp. 232–242, 2022.  
  👉 [PDF]({{ '/assets/pdf/papers/RHEA-TOG21.pdf' | relative_url }}) · [DOI](https://doi.org/10.1109/TG.2021.3060282)


---

# Legacy

GVGAI was, at its birth, one of the most influential benchmark environments in Game AI research (before, e.g. the arrival of the nowadays largely used ALE). Beyond its extensive use in planning and reinforcement learning, the framework has inspired numerous subsequent research projects including Stratega, TAG (Tabletop Games Framework), PyTAG, and recent work on Large Language Models for Game AI.

More broadly, GVGAI helped establish the idea that **generality** should be a central objective of Game AI research. Rather than designing algorithms for a single game, the framework encourages the development of methods capable of adapting to many different environments, making it a precursor to today's broader efforts towards General Artificial Intelligence.
