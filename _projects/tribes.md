```markdown
---
layout: page
title: Tribes
description: A turn-based strategy game framework for AI research, inspired by The Battle of Polytopia.

img: assets/img/projects/tribes/cover.png

importance: 16

status: completed

start_year: 2019
end_year: 2021

funding: EPSRC New Investigator Award
grant: EP/T008962/1
---

# Tribes

*2019–2021*

Tribes is a turn-based strategy game framework created for Artificial Intelligence research. It was developed as a research-oriented implementation inspired by <a href="https://polytopia.io/">The Battle of Polytopia</a>, preserving many of the characteristics that make modern strategy games challenging for AI while exposing the game state and forward model required for algorithmic experimentation.

The framework was developed within the <strong>EPSRC New Investigator Award "Abstract Forward Models for Modern Games"</strong> (EP/T008962/1), which investigated how Statistical Forward Planning methods could be applied to more complex modern games. Tribes served as one of the project's main testbeds alongside Stratega.

---

# Research Contributions

### A Research Framework Inspired by The Battle of Polytopia

<img
src="{{ '/assets/img/projects/tribes/tribes.png' | relative_url }}"
alt="Tribes turn-based strategy game"
style="width:100%; margin-bottom:1rem;"
/>

Tribes is a research implementation inspired by <a href="https://polytopia.io/">The Battle of Polytopia</a>, an award-winning turn-based 4X strategy game centred on exploration, city development, technology acquisition and warfare.

Rather than reproducing the commercial game as a player-facing product, Tribes adapts this style of gameplay into an environment specifically designed for Game AI research. The resulting game is <strong>multiplayer</strong>, <strong>multi-agent</strong>, <strong>stochastic</strong> and <strong>partially observable</strong>, and requires agents to reason simultaneously about tactical combat and longer-term strategic decisions.

Successful play involves managing cities and resources, choosing technologies, developing build orders, expanding territory and engaging opposing units. This creates a substantially richer decision-making problem than many traditional Game AI benchmarks.

Crucially, Tribes exposes a <strong>Forward Model</strong> that allows AI algorithms to copy game states and simulate future actions. This made it possible to benchmark Statistical Forward Planning algorithms such as Monte Carlo methods, Monte Carlo Tree Search and Rolling Horizon Evolutionary approaches within a comparatively complex strategy-game environment.

The original study also analysed the game's large action space and compared several baseline agents, showing that while planning algorithms could achieve reasonable performance, there remained a considerable gap to strong human play.

---

### Diverse Play-Styles with Portfolio MCTS and MAP-Elites

<img
src="{{ '/assets/img/projects/tribes/mapelites.png' | relative_url }}"
alt="MAP-Elites for diverse play-styles in Tribes"
style="width:100%; margin-bottom:1rem;"
/>

A second line of work used Tribes to investigate how strong AI agents could exhibit <strong>different play-styles</strong> rather than simply optimising for victory.

Strategy games are particularly challenging for this problem because agents must already deal with large action spaces, long-term planning and partial observability. Producing behavioural diversity without sacrificing playing strength adds another level of difficulty.

The work introduced <strong>Portfolio Monte Carlo Tree Search with Progressive Unpruning</strong>. Instead of searching directly over the complete low-level action space, the algorithm uses a portfolio of scripted behaviours to guide search. Progressive Unpruning then gradually introduces additional possibilities as the search progresses, making MCTS practical in the large action spaces produced by Tribes.

The resulting agent was parameterised and combined with <strong>MAP-Elites</strong>, a quality-diversity algorithm that searches not for a single best solution but for a collection of high-performing solutions exhibiting different behavioural characteristics.

This produced agents with distinct strategic play-styles while maintaining competitive performance. Importantly, the resulting behaviours were evaluated on game levels beyond those used during optimisation, providing evidence that the discovered play-styles could generalise beyond their training scenarios.

This work demonstrates how quality-diversity optimisation can be combined with search to produce AI agents that are not only effective, but also behaviourally varied — an important property for automated testing, game design and believable opponents.

---

# Funding

👉 <strong>EPSRC New Investigator Award</strong>

<strong>Abstract Forward Models for Modern Games</strong>

Grant reference: <strong>EP/T008962/1</strong>

The project investigated how Statistical Forward Planning algorithms such as Monte Carlo Tree Search and Rolling Horizon Evolutionary Algorithms could be applied to complex modern games through suitable forward-model abstractions. Tribes was one of the principal environments developed and studied within this research programme.

👉 <a href="https://gaigresearch.github.io/afm/">Abstract Forward Models project website</a>

---

# Resources

### Key Publications

- 📄 <strong>D. Perez-Liebana, Y.-J. Hsu, S. Emmanouilidis, B. D. A. Khaleque and R. D. Gaina.</strong>  
  <em>Tribes: A New Turn-Based Strategy Game for AI Research.</em>  
  Proceedings of the AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment (AIIDE), <strong>16(1)</strong>, pp. 252–258, 2020.  
  👉 [PDF]({{ '/assets/pdf/papers/TribesAIIDE20.pdf' | relative_url }}) · <a href="https://doi.org/10.1609/aiide.v16i1.7438">DOI</a>

- 📄 <strong>D. Perez-Liebana, C. Guerrero-Romero, A. Dockhorn, L. Xu, D. Jeurissen and J. Hurtado.</strong>  
  <em>Generating Diverse and Competitive Play-Styles for Strategy Games.</em>  
  Proceedings of the IEEE Conference on Games (CoG), 2021.  
  👉 [PDF]({{ '/assets/pdf/papers/MapElitesTribesCoG2021.pdf' | relative_url }}) · <a href="https://arxiv.org/abs/2104.08641">arXiv</a>

---

# Legacy

Tribes provided a compact but challenging environment for studying Artificial Intelligence in modern turn-based strategy games. It complemented the more general Stratega framework by providing a concrete game with complex strategic structure and enabled research ranging from baseline Statistical Forward Planning to portfolio search, Progressive Unpruning and quality-diversity methods for generating different play-styles.

The project also helped demonstrate how research environments inspired by successful commercial games can retain strategically meaningful complexity while exposing the forward models and internal state required for controlled AI experimentation.
```
