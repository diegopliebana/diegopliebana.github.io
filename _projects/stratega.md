---
layout: page
title: Stratega
short_title: Stratega
description: A flexible research framework for Artificial Intelligence in turn-based strategy games.

funding: EPSRC New Investigator Award
grant: EP/T008962/1

img: assets/img/projects/stratega/cover.png

importance: 18

status: completed

start_year: 2019
end_year: 2023

github: https://github.com/GAIGResearch/Stratega

toc:
  - title: Stratega
    id: top

  - title: Summary
    id: summary

  - title: Research Contributions
    id: research-contributions
    children:
      - title: General Strategy Game Framework
        id: framework
      - title: Portfolio Search & Optimisation
        id: portfolio-search
      - title: Elastic MCTS
        id: elastic-mcts
      - title: Configurable Rule System
        id: configurable-rules

  - title: Applications
    id: applications

  - title: Resources
    id: resources
    children:
      - title: Software
        id: software
      - title: Funding
        id: funding
      - title: Key Publications
        id: key-publications
      - title: Other Publications
        id: other-publications

  - title: Legacy
    id: legacy
---

<div id="top"></div>

# Stratega

*2019–2023*

{% include project_toc.liquid %}

Stratega is an open-source framework designed for research on Artificial Intelligence in turn-based strategy games. Developed as part of the <strong>EPSRC New Investigator Award "Abstract Forward Models"</strong> (EP/T008962/1), the framework provides a highly configurable environment where researchers can rapidly prototype games, implement AI agents, and evaluate planning and learning algorithms under reproducible experimental conditions.

Unlike benchmark environments designed around a fixed collection of games, Stratega enables researchers to define entirely new games through a flexible rule system while maintaining a common interface for AI algorithms. The framework bridges the gap between traditional board games, tabletop games and modern turn-based strategy games, making it suitable for research on planning, reinforcement learning, procedural content generation and game design.

---

<h1 id="summary">Summary</h1>

Stratega was created to provide a modern research platform capable of supporting a wide range of turn-based games without requiring a new engine for every project.

The framework combines a generic game engine with a configurable rule system, enabling researchers to define games, experiment with different AI techniques, and benchmark algorithms within a common software architecture. Research conducted using Stratega has led to advances in <strong>Elastic Monte Carlo Tree Search</strong>, <strong>Portfolio Search</strong>, state abstraction, automatic game balancing, and Artificial Intelligence for strategy games.

---

<h1 id="research-contributions">Research Contributions</h1>

<h3 id="framework">A General Strategy Game Framework</h3>

<img
src="{{ '/assets/img/projects/stratega/framework.png' | relative_url }}"
alt="Stratega framework"
style="width:100%; margin-bottom:1rem;"
/>

Stratega provides a generic engine for turn-based strategy games where game rules, actions, entities and win conditions are described through a flexible configuration system rather than hard-coded logic.

This allows entirely new games to be created while preserving a common interface for Artificial Intelligence agents. The framework significantly reduces the engineering effort required to investigate new AI algorithms by separating game design from algorithm implementation.

The framework also provides forward models, reference agents, visualisation and experimental functionality, making it possible to investigate algorithms across several different strategy-game environments under a common architecture.

---

<h3 id="portfolio-search">Portfolio Search and Optimisation</h3>

<img
src="{{ '/assets/img/projects/stratega/portfolio.png' | relative_url }}"
alt="Portfolio Search and Optimisation"
style="width:100%; margin-bottom:1rem;"
/>

Rather than relying on a single planning algorithm, Stratega enabled the development of <strong>Portfolio Search</strong>, an approach that combines multiple search algorithms into a single adaptive decision-making framework.

Different planning methods often excel under different game characteristics. While Monte Carlo Tree Search may perform well in some situations, Rolling Horizon Evolutionary Algorithms, heuristic search, or greedy approaches can be more effective in others. Portfolio Search investigates how these complementary algorithms can be combined and automatically selected to improve overall performance across a diverse collection of strategy games.

Building on this idea, the project introduced techniques for <strong>automatically optimising planning portfolios</strong>. Rather than manually selecting which algorithms should be included, optimisation methods search the space of possible portfolios to identify combinations that maximise performance across multiple games while remaining computationally efficient.

These methods demonstrated that carefully designed algorithm portfolios can outperform individual planning algorithms, providing a practical route towards more robust and general strategy-game agents.

---

<h3 id="elastic-mcts">Elastic Monte Carlo Tree Search</h3>

<img
src="{{ '/assets/img/projects/stratega/elastic.png' | relative_url }}"
alt="Elastic Monte Carlo Tree Search"
style="width:100%;"
/>
One of the main methodological contributions developed within Stratega is <strong>Elastic Monte Carlo Tree Search (Elastic MCTS)</strong>.
This work, led by <strong>Linjie Xu</strong> with Alexander Dockhorn and Diego Perez-Liebana, investigates how abstraction can be dynamically adapted during Monte Carlo Tree Search. Instead of using a single fixed representation throughout search, Elastic MCTS can operate at different levels of abstraction and progressively refine the representation when additional detail becomes useful.
The approach addresses an important tension in planning: abstract representations can make search substantially more efficient, but excessive abstraction may discard strategically important information. Elastic MCTS provides a mechanism for balancing these competing requirements during search.
The work was evaluated across strategy-game environments in Stratega and became the basis of a broader research programme on state and action abstraction for General Strategy Game Playing.
---

<h3 id="configurable-rules">Configurable Rule System</h3>

<img
src="{{ '/assets/img/projects/stratega/rules.png' | relative_url }}"
alt="Stratega configurable rule system"
style="width:100%; margin-bottom:1rem;"
/>

One of Stratega's defining features is its configurable rule system. Rather than implementing every game independently, game mechanics are represented through reusable components and configuration files, making it possible to prototype new games rapidly while maintaining reproducibility across experiments.

This flexibility enables Stratega to support games with substantially different mechanics while preserving a unified programming interface for AI agents.

The configurable representation is particularly important for research on <strong>Abstract Forward Models</strong>, because it allows researchers to investigate how different representations of state, actions and dynamics affect the performance of planning algorithms.

---

<h1 id="applications">Applications</h1>

Stratega has supported research across several areas of Game AI, including:

- Statistical Forward Planning
- Monte Carlo Tree Search
- State and action abstraction
- Portfolio Search
- Rolling Horizon Evolutionary Algorithms
- Automatic game balancing
- Point-cost estimation
- General Strategy Game Playing

Its flexibility has enabled researchers to prototype new games rapidly while providing a common benchmark for evaluating different Artificial Intelligence techniques.

---

<h1 id="resources">Resources</h1>

<h3 id="software">Software</h3>

👉 <a href="https://github.com/GAIGResearch/Stratega">Stratega GitHub repository</a>

The repository includes:

- Generic strategy game engine
- Configurable rule system
- Forward models
- Reference AI agents
- Visual interface
- Experimental framework
- Documentation

---

<h3 id="funding">Funding</h3>

👉 <strong>EPSRC New Investigator Award</strong>

<strong>Abstract Forward Models for Artificial Intelligence in Games</strong>

Grant reference: <strong>EP/T008962/1</strong>

Stratega was developed as the primary software platform supporting this research programme.

---

<h3 id="key-publications">Key Publications</h3>

- 📄 <strong>L. Xu, A. Dockhorn and D. Perez-Liebana.</strong>  
  <em>Elastic Monte Carlo Tree Search.</em>  
  IEEE Transactions on Games, <strong>15(4)</strong>, pp. 527–537, 2023.  
  👉 <a href="{{ '/assets/pdf/papers/ElasticMCTS-ToG23.pdf' | relative_url }}">PDF</a>

- 📄 <strong>L. Xu, A. Dockhorn and D. Perez-Liebana.</strong>  
  <em>Towards Applicable State Abstractions: A Preview in Strategy Games.</em>  
  Reinforcement Learning and Decision Making (RLDM) – RL as a Model of Agency Workshop, 2022.  
  👉 <a href="{{ '/assets/pdf/papers/ApplicableStateAbstractions-RLDM22.pdf' | relative_url }}">PDF</a>

- 📄 <strong>A. Dockhorn, J. Hurtado-Grueso, D. Jeurissen, L. Xu and D. Perez-Liebana.</strong>  
  <em>Game State and Action Abstracting Monte Carlo Tree Search for General Strategy Game-Playing.</em>  
  Proceedings of the IEEE Conference on Games (CoG), 2021.  
  👉 <a href="{{ '/assets/pdf/papers/GameStateActionAbstractionCoG2021.pdf' | relative_url }}">PDF</a>

- 📄 <strong>G. Long, S. Samothrakis and D. Perez-Liebana.</strong>  
  <em>STEP: A Framework for Automated Point Cost Estimation.</em>  
  IEEE Transactions on Games, 2024.  
  👉 <a href="{{ '/assets/pdf/papers/STEP-ToG24.pdf' | relative_url }}">PDF</a>

- 📄 <strong>A. Dockhorn, J. Hurtado-Grueso, D. Jeurissen and D. Perez-Liebana.</strong>  
  <em>Stratega: A General Strategy Games Framework.</em>  
  AIIDE-20 Workshop on Artificial Intelligence for Strategy Games, 2020.  
  👉 <a href="{{ '/assets/pdf/papers/StrategaAIIDE2020.pdf' | relative_url }}">PDF</a>

---

<h3 id="other-publications">Other Publications</h3>

- <strong>G. Long, D. Perez-Liebana and S. Samothrakis.</strong>  
  <em>Balancing Wargames through Predicting Unit Point Costs.</em>  
  Proceedings of the IEEE Conference on Games (CoG), 2023.  
  👉 <a href="{{ '/assets/pdf/papers/BalancingWargames-CoG23.pdf' | relative_url }}">PDF</a>

- <strong>L. Xu, J. Hurtado-Grueso, D. Jeurissen, A. Dockhorn and D. Perez-Liebana.</strong>  
  <em>Elastic Monte Carlo Tree Search with State Abstraction for Strategy Game Playing.</em>  
  Proceedings of the IEEE Conference on Games (CoG), 2022.  
  👉 <a href="{{ '/assets/pdf/papers/ElasticMCTS-CoG22.pdf' | relative_url }}">PDF</a>

- <strong>L. Xu, A. Dockhorn and D. Perez-Liebana.</strong>  
  <em>Strategy Game-Playing with Size-Constrained State Abstraction.</em>  
  Proceedings of the IEEE Conference on Games (CoG), 2024.  
  👉 <a href="{{ '/assets/pdf/papers/SizeConstrainedStateAbstraction-CoG24.pdf' | relative_url }}">PDF</a>

- <strong>A. Dockhorn, J. Hurtado-Grueso, D. Jeurissen, L. Xu and D. Perez-Liebana.</strong>  
  <em>Portfolio Search and Optimization for General Strategy Game-Playing.</em>  
  Proceedings of the IEEE Congress on Evolutionary Computation (CEC), 2021.  
  👉 <a href="{{ '/assets/pdf/papers/PortfolioCEC2021.pdf' | relative_url }}">PDF</a>

---

<h1 id="legacy">Legacy</h1>

Stratega represents the principal software outcome of the EPSRC New Investigator Award on <strong>Abstract Forward Models</strong>. Building upon ideas first explored in PTSP and GVGAI, the project shifted the emphasis from fixed benchmark environments towards reusable research infrastructure capable of supporting a broad spectrum of strategy games.

The research conducted with Stratega also produced substantial methodological contributions, particularly in <strong>state abstraction</strong>, <strong>Elastic MCTS</strong>, <strong>Portfolio Search</strong> and <strong>automatic balancing</strong>.

Many of the ideas developed within Stratega directly influenced subsequent projects including TAG, PyTAG and broader research on Artificial Intelligence for modern tabletop games.

<script src="{{ '/assets/js/project_toc.js' | relative_url }}"></script>
```
