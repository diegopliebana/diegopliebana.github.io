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

redirect: https://github.com/diegopliebana/ptsp-so
---

# Physical Travelling Salesman Problem

*2011–2014*

The **Physical Travelling Salesman Problem (PTSP)** is a benchmark environment for Game AI that combines route planning, continuous control, and real-time decision making.

Unlike the classical Travelling Salesman Problem, the objective is not only to determine the order in which waypoints should be visited, but also to control a spaceship with inertia and momentum while navigating around obstacles. This makes PTSP a challenging benchmark for search and planning algorithms such as Monte Carlo Tree Search and Evolutionary Algorithms.

PTSP was developed during my PhD at the University of Essex and became the basis of several international Game AI competitions, a number of benchmark papers, and multiple extensions including procedural map generation and multi-objective optimisation.

---

## Summary

<div class="row">

<div class="col-sm-7">

The **Physical Travelling Salesman Problem (PTSP)** is a benchmark for real-time planning that combines route optimisation, continuous control and obstacle avoidance.

Unlike the classical Travelling Salesman Problem, solving PTSP requires both choosing the order of the waypoints **and** controlling a spaceship with inertia through a maze.

Developed during my PhD at the University of Essex, PTSP became one of the first benchmark environments specifically designed for Monte Carlo Tree Search and other statistical forward planning algorithms in games.

Its influence extended to several international competitions, numerous publications, and later benchmark frameworks such as GVGAI, Stratega and TAG.

</div>

<div class="col-sm-5">

![Gameplay](/assets/img/projects/ptsp/gameplay.png){: width="100%" }

</div>

</div>
---

## Competitions

The PTSP benchmark served as the basis for a series of international competitions that challenged researchers to design intelligent controllers capable of navigating increasingly complex environments under strict real-time constraints.

The competitions provided a common software framework, benchmark maps, and evaluation methodology, enabling researchers to compare planning algorithms under identical conditions. Over several editions, the benchmark evolved from the original single-objective optimisation problem to more challenging multi-objective scenarios, encouraging research into planning under competing objectives such as travel time, fuel consumption and damage minimisation.

The competitions attracted submissions from researchers working on Monte Carlo Tree Search, Evolutionary Algorithms, heuristic search, and hybrid planning approaches, helping establish PTSP as one of the earliest benchmark environments for statistical forward planning in games.

---

## Research Contributions

The PTSP project resulted in several methodological contributions that later influenced research on statistical forward planning, Monte Carlo Tree Search, and General Video Game AI.

### A benchmark for real-time planning

<div class="row">

<div class="col-sm-8">

Unlike classical optimisation benchmarks, PTSP combines **global route optimisation** with **continuous low-level control**. Solving the benchmark requires selecting an efficient waypoint order while simultaneously controlling a spaceship with inertia through a maze of obstacles.

This combination made PTSP substantially more challenging than traditional path-planning problems while remaining computationally lightweight enough to support thousands of simulations during search.

</div>

<div class="col-sm-4">

![PTSP Gameplay](/assets/img/projects/ptsp/gameplay2.png){: width="100%" }

</div>

</div>

---

### Monte Carlo Tree Search and Statistical Forward Planning

<div class="row">

<div class="col-sm-8">

PTSP became one of the first benchmark environments used to investigate **Monte Carlo Tree Search (MCTS)** in continuous real-time games.

The project introduced the use of **macro-actions** within MCTS, allowing the search algorithm to reason over sequences of actions rather than individual control inputs. This substantially increased planning depth while reducing the branching factor, demonstrating that statistical forward planning could be successfully applied to dynamic environments with continuous physics.

Several of these ideas later became the foundation for subsequent work on General Video Game Playing, Strategy Games, and Statistical Forward Planning.

</div>

<div class="col-sm-4">

![Macro-actions](/assets/img/projects/ptsp/mcts.png){: width="100%" }

</div>

</div>

---

### Procedural Generation of Benchmark Maps

<div class="row">

<div class="col-sm-8">

To reduce overfitting to a fixed collection of maps, the project was later extended with **procedural map generation**.

Evolutionary optimisation techniques were used to automatically generate navigation environments with different structural properties and levels of difficulty. This enabled systematic evaluation of planning algorithms over a much broader range of scenarios than would have been possible using manually designed maps alone.

The resulting benchmark generator became one of the earliest examples of using procedural content generation to support AI benchmarking rather than entertainment.

</div>

<div class="col-sm-4">

![Procedural map generation](/assets/img/projects/ptsp/map_generation.png){: width="100%" }

</div>

</div>

---

## Resources

The PTSP project is fully open source and remains available for researchers interested in statistical forward planning, Monte Carlo Tree Search, and real-time optimisation.

### Software

- **PTSP Framework**
  - Java implementation of the benchmark environment
  - Reference controllers
  - Competition framework
  - Benchmark maps

👉 GitHub repository:
https://github.com/diegopliebana/ptsp-so

### Publications

The project resulted in several publications covering the benchmark, competitions, planning algorithms, and procedural map generation.

Key publications include:

- *Solving the Physical Travelling Salesman Problem: Tree Search and Macro-Actions* (IEEE TCIAIG, 2014)
- *Automated Map Generation for the Physical Travelling Salesman Problem* (IEEE Transactions on Evolutionary Computation, 2013)
- *The Physical Travelling Salesman Problem: WCCI 2012 Competition*
- *The 2013 Multi-Objective Physical Travelling Salesman Problem Competition*

See the Publications page for the complete list.

## Legacy

Many of the ideas first explored in PTSP—including macro-actions, statistical forward planning, benchmark competitions, and forward model design—were later extended in subsequent projects such as General Video Game AI (GVGAI), Stratega, and TAG (Tabletop Games Framework).

In this sense, PTSP represents the starting point of a research programme on AI planning in games that has continued to evolve over the past decade.
