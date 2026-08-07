---
layout: page
title: Stratega
description: A flexible research framework for Artificial Intelligence in turn-based strategy games.
funding: EPSRC New Investigator Award
grant: EP/T008962/1
img: assets/img/projects/stratega/cover.png

importance: 18

status: completed

start_year: 2019
end_year: 2023

github: https://github.com/GAIGResearch/Stratega
---

# Stratega

*2019–2023*

Stratega is an open-source framework designed for research on Artificial Intelligence in turn-based strategy games. Developed as part of the <strong>EPSRC New Investigator Award "Abstract Forward Models"</strong> (EP/T008962/1), the framework provides a highly configurable environment where researchers can rapidly prototype games, implement AI agents, and evaluate planning and learning algorithms under reproducible experimental conditions.

Unlike benchmark environments designed around a fixed collection of games, Stratega enables researchers to define entirely new games through a flexible rule system while maintaining a common interface for AI algorithms. The framework bridges the gap between traditional board games, tabletop games and modern turn-based strategy games, making it suitable for research on planning, reinforcement learning, procedural content generation and game design.

---

# Summary

Stratega was created to provide a modern research platform capable of supporting a wide range of turn-based games without requiring a new engine for every project.

The framework combines a generic game engine with a configurable rule system, enabling researchers to define games, experiment with different AI techniques, and benchmark algorithms within a common software architecture. It has supported research on Statistical Forward Planning, Monte Carlo Tree Search, Rolling Horizon Evolutionary Algorithms, reinforcement learning, procedural content generation, and tabletop games.

---

# Research Contributions

### A General Strategy Game Framework

<img
src="{{ '/assets/img/projects/stratega/framework.png' | relative_url }}"
alt="Stratega framework"
style="width:100%; margin-bottom:1rem;"
/>

Stratega provides a generic engine for turn-based strategy games where game rules, actions, entities and win conditions are described through a flexible configuration system rather than hard-coded logic. This allows entirely new games to be created while preserving a common interface for Artificial Intelligence agents.

The framework significantly reduces the engineering effort required to investigate new AI algorithms by separating game design from algorithm implementation.

---

### Statistical Forward Planning

<div class="row">

<div class="col-sm-8">

<p>

Stratega has been extensively used for research on <strong>Statistical Forward Planning</strong>, providing deterministic forward models that enable planning algorithms to simulate future game states before selecting actions.

</p>

<p>

The framework supports a broad family of search algorithms including <strong>Monte Carlo Tree Search</strong>, <strong>Rolling Horizon Evolutionary Algorithms</strong>, heuristic search, portfolio methods and hybrid planning approaches.

</p>

<p>

Its modular architecture allows researchers to compare algorithms across multiple games using a common experimental framework.

</p>

</div>

<div class="col-sm-4">

<img
src="{{ '/assets/img/projects/stratega/planning.png' | relative_url }}"
alt="Planning"
style="width:100%;"
/>

</div>

</div>

---

### Configurable Rule System

<img
src="{{ '/assets/img/projects/stratega/rules.png' | relative_url }}"
alt="Rule system"
style="width:100%; margin-bottom:1rem;"
/>

One of Stratega's defining features is its configurable rule system. Rather than implementing each game independently, game mechanics are described through reusable components and configuration files, making it possible to prototype new games rapidly while maintaining reproducibility across experiments.

This flexibility has enabled the framework to support games with very different mechanics while preserving a unified programming interface for AI agents.

---

## Elastic Monte Carlo Tree Search

<div class="row">

<div class="col-sm-8">

<p>

One of the main methodological contributions developed within Stratega is <strong>Elastic Monte Carlo Tree Search (Elastic MCTS)</strong>, a search algorithm that dynamically adjusts its computational budget according to the complexity of the current decision.

</p>

<p>

Traditional Monte Carlo Tree Search allocates a fixed number of simulations to every decision, regardless of whether the situation is strategically simple or highly complex. Elastic MCTS instead estimates the uncertainty of the current state and automatically redistributes computation towards decisions where additional search is expected to have the greatest impact.

</p>

<p>

The approach significantly improves the efficiency of Statistical Forward Planning by adapting search effort online, enabling stronger performance under fixed computational budgets while preserving the flexibility of standard Monte Carlo Tree Search.

</p>

<p>

The algorithm was evaluated extensively within Stratega across multiple turn-based strategy games, demonstrating the advantages of adaptive search budgets over conventional fixed-budget planning.

</p>

</div>

<div class="col-sm-4">

<img
src="{{ '/assets/img/projects/stratega/elastic.png' | relative_url }}"
alt="Elastic Monte Carlo Tree Search"
style="width:100%;"
/>

</div>

</div>

---

# Applications

Stratega has supported research across multiple areas of Game AI, including:

- Statistical Forward Planning
- Monte Carlo Tree Search
- Rolling Horizon Evolutionary Algorithms
- Automatic Game Balancing

Its flexibility has enabled researchers to prototype new games rapidly while providing a common benchmark for evaluating different Artificial Intelligence techniques.

---

# Resources

### Software

👉 <a href="https://github.com/GAIGResearch/Stratega">Stratega GitHub repository</a>

The repository includes:

- Generic strategy game engine
- Configurable rule system
- Forward models
- Reference AI agents
- Visual interface
- Experimental framework
- Documentation

### Funding

👉 **EPSRC New Investigator Award**

**Abstract Forward Models for Artificial Intelligence in Games**

Grant reference: **EP/T008962/1**

Stratega was developed as the primary software platform supporting this research programme.

---

### Key Publications

- <strong>D. Perez-Liebana</strong>, et al.  
  <em>Stratega: A General Strategy Games Framework for Artificial Intelligence Research.</em>  
  👉 PDF

- <strong>D. Perez-Liebana</strong>, et al.  
  <em>Elastic Monte Carlo Tree Search.</em>  
  IEEE Transactions on Games, 15(4), pp. 527–537, 2023.  
  👉 [PDF]({{ '/assets/pdf/papers/ElasticMCTS-TOG23.pdf' | relative_url }})

- <strong>M. Balla</strong>, G. Long, J. Goodman, R. Gaina and <strong>D. Perez-Liebana</strong>.  
  <em>PyTAG: Tabletop Games for Multi-Agent Reinforcement Learning.</em>  
  IEEE Transactions on Games, 2024.  
  👉 [PDF]({{ '/assets/pdf/papers/PyTAG-TOG24.pdf' | relative_url }})

---

# Legacy

Stratega represents the principal outcome of the EPSRC New Investigator Award on <strong>Abstract Forward Models</strong>. Building upon ideas first explored in PTSP and GVGAI, the project shifted the emphasis from benchmark environments towards reusable research infrastructure capable of supporting a broad spectrum of strategy games.

Many of the ideas developed within Stratega directly influenced subsequent projects including TAG, PyTAG, tabletop game research, and recent work on Artificial Intelligence for modern board games.
