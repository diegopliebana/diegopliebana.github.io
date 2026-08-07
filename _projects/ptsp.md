---
layout: page
title: Physical Travelling Salesman Problem (PTSP)
description: A benchmark environment and competition for real-time planning and Monte Carlo Tree Search.

img: assets/img/projects/ptsp/cover.png

importance: 10

status: completed

start_year: 2011
end_year: 2014

github: https://github.com/diegopliebana/ptsp-so

toc:
  - title: PTSP
    id: top

  - title: Summary
    id: summary

  - title: Competitions
    id: competitions

  - title: Research Contributions
    id: research-contributions
    children:
      - title: Real-time Planning Benchmark
        id: real-time-planning
      - title: MCTS & Macro-actions
        id: mcts
      - title: Multi-objective Optimisation
        id: multi-objective
      - title: Procedural Map Generation
        id: procedural-generation

  - title: Resources
    id: resources
    children:
      - title: Software
        id: software
      - title: Key Publications
        id: key-publications
      - title: Other Publications
        id: other-publications

  - title: Legacy
    id: legacy
---

<div id="top"></div>

# Physical Travelling Salesman Problem

*2011–2014*

{% include project_toc.liquid %}

The <strong>Physical Travelling Salesman Problem (PTSP)</strong> is a benchmark environment for Game AI that combines route planning, continuous control, and real-time decision making.

Unlike the classical Travelling Salesman Problem, the objective is not only to determine the order in which waypoints should be visited, but also to control a spaceship with inertia and momentum while navigating around obstacles. This makes PTSP a challenging benchmark for search and planning algorithms such as Monte Carlo Tree Search and Evolutionary Algorithms.

PTSP was developed during my PhD at the University of Essex and became the basis of several international Game AI competitions, a number of benchmark papers, and multiple extensions including procedural map generation and multi-objective optimisation.

---

<h1 id="summary">Summary</h1>

<img
src="{{ '/assets/img/projects/ptsp/gameplay.png' | relative_url }}"
alt="PTSP gameplay"
style="width:100%; margin-bottom:1rem;"
/>

The <strong>Physical Travelling Salesman Problem (PTSP)</strong> is a benchmark for real-time planning that combines route optimisation, continuous control and obstacle avoidance.

Unlike the classical Travelling Salesman Problem, solving PTSP requires both choosing the order of the waypoints <strong>and</strong> controlling a spaceship with inertia through a maze.

Developed during my PhD at the University of Essex, PTSP became one of the early benchmark environments specifically designed for Monte Carlo Tree Search and other statistical forward planning algorithms in games.

Its influence extended to several international competitions, numerous publications, and later benchmark frameworks such as GVGAI, Stratega and TAG.

---

<h1 id="competitions">Competitions</h1>

The PTSP benchmark served as the basis for a series of international competitions that challenged researchers to design intelligent controllers capable of navigating increasingly complex environments under strict real-time constraints.

The competitions provided a common software framework, benchmark maps, and evaluation methodology, enabling researchers to compare planning algorithms under identical conditions.

Over several editions, the benchmark evolved from the original single-objective optimisation problem to more challenging multi-objective scenarios, encouraging research into planning under competing objectives such as travel time, fuel consumption and damage minimisation.

The competitions attracted submissions from researchers working on Monte Carlo Tree Search, Evolutionary Algorithms, heuristic search, and hybrid planning approaches, helping establish PTSP as one of the early benchmark environments for statistical forward planning in games.

---

<h1 id="research-contributions">Research Contributions</h1>

The PTSP project resulted in several methodological contributions that influenced subsequent research on statistical forward planning, Monte Carlo Tree Search, multi-objective optimisation, procedural content generation and, ultimately, later benchmark frameworks such as General Video Game AI (GVGAI) and Stratega.

<h3 id="real-time-planning">A Benchmark for Real-time Planning</h3>

<div class="row">

<div class="col-sm-7">

Unlike classical optimisation benchmarks, PTSP combines <strong>global route optimisation</strong> with <strong>continuous low-level control</strong>. Solving the benchmark requires selecting an efficient waypoint order while simultaneously controlling a spaceship with inertia through a maze of obstacles.

This combination made PTSP substantially more challenging than traditional path-planning problems while remaining computationally lightweight enough to support thousands of simulations during search.

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/ptsp/gameplay2.png' | relative_url }}"
alt="PTSP gameplay"
style="width:100%;"
/>

</div>

</div>

---

<h3 id="mcts">Monte Carlo Tree Search and Statistical Forward Planning</h3>

<div class="row">

<div class="col-sm-8">

PTSP became one of the first benchmark environments used to investigate <strong>Monte Carlo Tree Search (MCTS)</strong> in continuous real-time games.

The project introduced the use of <strong>macro-actions</strong> within MCTS, allowing the search algorithm to reason over sequences of actions rather than individual control inputs. This substantially increased planning depth while reducing the branching factor, demonstrating that statistical forward planning could be successfully applied to dynamic environments with continuous physics.

Several of these ideas later became the foundation for subsequent work on General Video Game Playing, strategy games and Statistical Forward Planning.

</div>

<div class="col-sm-4">

<img
src="{{ '/assets/img/projects/ptsp/mcts.png' | relative_url }}"
alt="Monte Carlo Tree Search and macro-actions in PTSP"
style="width:100%;"
/>

</div>

</div>

---

<h3 id="multi-objective">Multi-objective Optimisation</h3>

<div class="row">

<div class="col-sm-8">

<p>

The PTSP benchmark was later extended into a <strong>multi-objective optimisation</strong> problem, where agents were required to optimise several conflicting objectives simultaneously rather than simply minimising completion time.

</p>

<p>

In addition to visiting all waypoints as quickly as possible, controllers were evaluated according to criteria such as <strong>fuel consumption</strong>, <strong>damage sustained</strong>, and overall route efficiency. This transformed PTSP from a single-objective planning benchmark into a richer decision-making environment representative of many real-world optimisation problems.

</p>

<p>

This extension motivated the development of <strong>Multi-Objective Monte Carlo Tree Search (MO-MCTS)</strong>, an adaptation of MCTS capable of balancing competing objectives during search without requiring them to be combined into a single scalar reward. The resulting algorithms demonstrated that statistical forward planning could be effectively applied to multi-objective optimisation, while also providing valuable insights into the trade-offs between different planning strategies.

</p>

<p>

The benchmark also formed the basis of the <strong>Multi-Objective Physical Travelling Salesman Problem Competition</strong>, encouraging the Game AI community to investigate planning algorithms capable of handling multiple conflicting objectives under real-time constraints.

</p>

</div>

<div class="col-sm-4">

<img
src="{{ '/assets/img/projects/ptsp/mo-ptsp.png' | relative_url }}"
alt="Multi-objective PTSP and MO-MCTS"
style="width:100%;"
/>

</div>

</div>

---

<h3 id="procedural-generation">Procedural Generation of Benchmark Maps</h3>

<img
src="{{ '/assets/img/projects/ptsp/map_generation.png' | relative_url }}"
alt="Procedurally generated PTSP maps"
style="width:100%; margin-bottom:1rem;"
/>

To reduce overfitting to a fixed collection of maps, the project was later extended with <strong>procedural map generation</strong>.

Evolutionary optimisation techniques were used to automatically generate navigation environments with different structural properties and levels of difficulty. This enabled systematic evaluation of planning algorithms over a much broader range of scenarios than would have been possible using manually designed maps alone.

The resulting benchmark generator became one of the early examples of using procedural content generation to support AI benchmarking rather than entertainment.

---

<h1 id="resources">Resources</h1>

The PTSP project is fully open source and remains available for researchers interested in statistical forward planning, Monte Carlo Tree Search, and real-time optimisation.

<h3 id="software">Software</h3>

- <strong>PTSP Framework</strong>
  - Java implementation of the benchmark environment
  - Reference controllers
  - Competition framework
  - Benchmark maps

👉 <a href="https://github.com/diegopliebana/ptsp-so">GitHub repository</a>

---

<h3 id="key-publications">Key Publications</h3>

The PTSP project resulted in a sequence of publications covering the benchmark itself, competition design, Monte Carlo Tree Search, macro-actions, multi-objective optimisation, and procedural generation of benchmark maps.

- 📄 <strong>D. Perez-Liebana, E. J. Powley, D. Whitehouse, P. Rohlfshagen, S. Samothrakis, P. I. Cowling and S. M. Lucas.</strong>  
  <em>Solving the Physical Travelling Salesman Problem: Tree Search and Macro Actions.</em>  
  IEEE Transactions on Computational Intelligence and AI in Games, <strong>6(1)</strong>, pp. 31–45, 2014.  
  👉 <a href="{{ '/assets/pdf/papers/PTSP_TCIAIG2013.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TCIAIG.2013.2263884">DOI</a>

- 📄 <strong>D. Perez-Liebana, J. Togelius, S. Samothrakis, P. Rohlfshagen and S. M. Lucas.</strong>  
  <em>Automated Map Generation for the Physical Travelling Salesman Problem.</em>  
  IEEE Transactions on Evolutionary Computation, <strong>18(5)</strong>, pp. 708–720, 2014.  
  👉 <a href="{{ '/assets/pdf/papers/MOPTSPGen_TEVC2013.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TEVC.2013.2281508">DOI</a>

- 📄 <strong>D. Perez-Liebana, P. Rohlfshagen and S. M. Lucas.</strong>  
  <em>Monte Carlo Tree Search: Long-term versus Short-term Planning.</em>  
  IEEE Conference on Computational Intelligence and Games (CIG), pp. 219–226, 2012. <strong>Best Paper Award.</strong>  
  👉 <a href="{{ '/assets/pdf/papers/LongTermShortTerm.pdf' | relative_url }}">PDF</a>

- 📄 <strong>D. Perez-Liebana, S. Samothrakis, P. Rohlfshagen and S. M. Lucas.</strong>  
  <em>Multi-objective Monte Carlo Tree Search for Real-Time Games.</em>  
  Proceedings of the IEEE Congress on Evolutionary Computation (CEC), pp. 2322–2329, 2014.  
  👉 <a href="{{ '/assets/pdf/papers/MOMCTS_TCIAIG2014.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CEC.2014.6900244">DOI</a>

---

<h3 id="other-publications">Other Publications</h3>

- <strong>D. Perez-Liebana, E. J. Powley, D. Whitehouse, S. Samothrakis, S. M. Lucas and P. I. Cowling.</strong>  
  <em>The 2013 Multi-Objective Physical Travelling Salesman Problem Competition.</em>  
  Proceedings of the IEEE Congress on Evolutionary Computation (CEC), pp. 2314–2321, 2014.  
  👉 <a href="{{ '/assets/pdf/papers/MOPTSPComp_CEC2014.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CEC.2014.6900243">DOI</a>

- <strong>D. Perez-Liebana, P. Rohlfshagen and S. M. Lucas.</strong>  
  <em>The Physical Travelling Salesman Problem: WCCI 2012 Competition.</em>  
  IEEE Congress on Evolutionary Computation (CEC), pp. 1–8, 2012.  
  👉 <a href="{{ '/assets/pdf/papers/PtspCompetition2012.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CEC.2012.6256440">DOI</a>

- <strong>D. Perez-Liebana, P. Rohlfshagen and S. M. Lucas.</strong>  
  <em>Monte-Carlo Tree Search for the Physical Travelling Salesman Problem.</em>  
  EvoApplications 2012, Lecture Notes in Computer Science <strong>7248</strong>, pp. 255–264, Springer, 2012.  
  👉 <a href="{{ '/assets/pdf/papers/MCTS_PTSP.pdf' | relative_url }}">PDF</a>

---

<h1 id="legacy">Legacy</h1>

Many of the ideas first explored in PTSP — including macro-actions, statistical forward planning, benchmark competitions, multi-objective search, and forward model design — were later extended in subsequent projects such as General Video Game AI (GVGAI), Stratega, and TAG (Tabletop Games Framework).

In this sense, PTSP represents the starting point of a research programme on AI planning in games that has continued to evolve over more than a decade.

<script src="{{ '/assets/js/project_toc.js' | relative_url }}"></script>
```
