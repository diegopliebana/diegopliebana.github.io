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

The <strong>Tabletop Games Framework (TAG)</strong> is an open-source research platform for Artificial Intelligence in modern tabletop games. Unlike classical Game AI benchmarks centred on games such as Chess or Go, TAG focuses on modern designer board and card games, whose mechanics often combine stochasticity, hidden information, multiple players, asymmetric roles, resource management, large action spaces and complex strategic interactions.

TAG provides a common software architecture in which games are implemented once and exposed through a unified interface to Artificial Intelligence algorithms. This makes it possible to investigate planning, optimisation, reinforcement learning, game analysis and automated playtesting across a diverse collection of games without developing a bespoke research environment for every experiment.

Since its introduction in 2020, TAG has grown from a framework containing a small collection of games into a substantial research ecosystem. It now supports dozens of tabletop games and has enabled research on Monte Carlo Tree Search, multiplayer decision making, game characterisation, skill and randomness, Reinforcement Learning, AI-assisted game design and Large Language Models.

The same underlying technology has also moved beyond academic research through <strong>Tabletop R&D</strong>, a Queen Mary University of London spin-out applying automated simulation and game analysis to commercial tabletop game development.

---

# The Challenge of Modern Tabletop Games

<img
src="{{ '/assets/img/projects/tag/challenge.png' | relative_url }}"
alt="Modern tabletop games as AI challenges"
style="width:100%; margin-bottom:1rem;"
/>

Modern tabletop games provide a particularly rich domain for Artificial Intelligence research.

Traditional AI benchmarks often have relatively stable rules, small numbers of players and clearly defined action spaces. Modern tabletop games are much more heterogeneous. A single game may combine shuffled decks, dice, hidden cards, variable player powers, changing rules, resource economies, negotiation, drafting and interactions involving three, four or more players.

The challenges are not purely computational. The importance of an action can depend heavily on the other players, the number of participants, imperfect information and events that may occur much later in the game. Games may also contain very large and dynamically changing action spaces.

At the same time, tabletop games have a major advantage as AI research environments: their rules are precisely specified and their dynamics can be reproduced computationally. They therefore provide a useful middle ground between relatively abstract classical games and the complexity of full commercial video games.

TAG was created to make this rich class of games systematically accessible to Artificial Intelligence research.

---

# Core Technologies

### A Unified Framework for Modern Tabletop Games

<img
src="{{ '/assets/img/projects/tag/framework.png' | relative_url }}"
alt="TAG framework"
style="width:100%; margin-bottom:1rem;"
/>

TAG is a Java-based framework built around common representations of game states, actions, components, players and forward models.

Games share a common API, allowing the same Artificial Intelligence agent to interact with very different tabletop games. Reusable components simplify the implementation of cards, decks, counters, boards, resources and other common tabletop mechanisms, while game data can be separated from program logic where appropriate.

The framework also includes extensive logging and experimental functionality. Researchers can collect information about action spaces, branching factors, hidden information, game duration, player interaction and other characteristics, making TAG useful not only for benchmarking agents but also for studying the games themselves.

This separation between <strong>game implementation</strong>, <strong>AI agents</strong> and <strong>experimental analysis</strong> is central to TAG. It permits the same game implementation to support many different research questions and allows algorithms to be compared under common experimental conditions.

---

### Digital Twins for Tabletop Games

<img
src="{{ '/assets/img/projects/tag/digitaltwins.png' | relative_url }}"
alt="Digital twins of tabletop games"
style="width:100%; margin-bottom:1rem;"
/>

A computational implementation in TAG can be viewed as a <strong>digital twin</strong> of a physical tabletop game: a machine-readable version of the rules and state of the game that can be played automatically by Artificial Intelligence agents.

Once such a digital representation exists, a game no longer has to be evaluated solely through individual human play sessions. AI agents can generate thousands of complete play traces, making it possible to investigate questions about balance, strategies, game length, scoring, player position, card usage and many other aspects of the design.

The important objective is not to replace human playtesting. Human players remain essential for evaluating qualities such as enjoyment, theme, usability and emotional experience. Automated play instead provides a complementary source of quantitative evidence and makes it possible to investigate questions that require far more games than could realistically be played by people.

---

### Reinforcement Learning with PyTAG

<div class="row">

<div class="col-sm-7">

<p>

<strong>PyTAG</strong> extends the TAG ecosystem to Reinforcement Learning by providing a Python interface to games implemented in the Java framework.

</p>

<p>

Modern tabletop games create interesting challenges for <strong>Multi-Agent Reinforcement Learning</strong>: observations and action spaces can vary substantially between games, legal actions are highly state-dependent, rewards are often sparse, episodes can be long, and agents must operate in stochastic and partially observable multiplayer environments.

</p>

<p>

PyTAG provides access to this diversity through interfaces compatible with modern Python-based learning workflows. This makes it possible to train Reinforcement Learning agents through self-play and to compare learned policies directly against planning algorithms such as Monte Carlo Tree Search using the same underlying game implementations.

</p>

<p>

The result is a common experimental platform connecting two research traditions that are often investigated separately: search-based planning and Reinforcement Learning.

</p>

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/pytag.png' | relative_url }}"
alt="PyTAG reinforcement learning framework"
style="width:100%;"
/>

</div>

</div>

---

```markdown
# Research Contributions

TAG has supported a substantial body of research beyond the development of the framework itself. A major strand of this work has been <strong>led by James Goodman</strong>, whose research has used TAG's diverse collection of tabletop games to investigate Monte Carlo Tree Search, multiplayer decision making, quantitative characterisation of games, skill and randomness, and AI-assisted game design.

This research treats TAG not simply as a collection of benchmarks, but as an experimental laboratory in which the interaction between Artificial Intelligence algorithms and the properties of modern tabletop games can be studied systematically.

### Monte Carlo Tree Search for Multiplayer Tabletop Games

Modern tabletop games present several challenges to conventional <strong>Monte Carlo Tree Search (MCTS)</strong>. Many have more than two players, hidden information, stochastic events and simultaneous or partially simultaneous decisions. The assumptions that work well in two-player deterministic games therefore do not necessarily transfer directly.

A line of research <strong>led by James Goodman</strong> has investigated how MCTS behaves across games with very different characteristics and how its internal choices should adapt to those environments.

In <em>Fingerprinting Tabletop Games</em>, Goodman and colleagues introduced the idea of characterising a game using the results of repeated optimisation of MCTS parameters. Rather than reporting only a single optimal parameter configuration, the distribution of successful parameter values forms a "fingerprint" of the game. This provides information about which aspects of MCTS are particularly important for different games and showed, importantly, that the algorithmic characteristics of a game can change as its number of players changes.

Goodman subsequently extended this direction in <em>Visualising Multiplayer Game Spaces</em>, comparing different ways of embedding tabletop games into a common feature space. MCTS-derived features were used to expose similarities and differences between games from the perspective of the algorithms used to play them, including characteristics associated with imperfect information, adversarial interaction and reward structure.

The same research programme also produced <strong>MultiTree MCTS</strong>. Rather than representing all players inside a single search tree, MultiTree maintains a separate tree for each player. Experiments across a diverse set of TAG games showed that this representation can be particularly useful in simultaneous-action environments, where separate trees provide a more natural representation of the information available to each player.

Together, this body of work demonstrates how TAG can be used not only to evaluate planning algorithms, but also to understand <strong>why particular forms of search work better in particular kinds of tabletop games</strong>.

---

### Objectives and Decision Making in Multiplayer Games

Moving from two-player to multiplayer games raises a more fundamental question: <strong>what should an AI agent optimise?</strong>

In a two-player zero-sum game, maximising the probability of winning provides a natural objective. Multiplayer tabletop games provide many other potentially useful signals, including absolute score, relative score, ranking and the performance of competing players.

In <em>Following the Leader in Multiplayer Tabletop Games</em>, <strong>James Goodman and colleagues</strong> investigated several game-agnostic objectives across TAG games. The study examined how agents should use information about their own performance and that of their opponents when making decisions in multiplayer environments.

The results showed that there is no universally superior objective across all games. In some environments an agent can benefit from concentrating on its own progress, while in others explicitly accounting for the strongest opponent provides a better decision signal.

This work illustrates one of the benefits of a framework such as TAG: evaluating an idea across a diverse collection of games can expose assumptions that may remain hidden when an algorithm is tested on only one or two domains.

---

### Characterising Games through Skill and Randomness

<img
src="{{ '/assets/img/projects/tag/analytics.png' | relative_url }}"
alt="Analysis of tabletop games"
style="width:100%; margin-bottom:1rem;"
/>

A further research direction <strong>led by James Goodman</strong> has focused on quantitatively characterising tabletop games themselves, rather than treating games solely as environments in which to measure AI performance.

Two particularly important concepts are <strong>skill</strong> and <strong>randomness</strong>. Tabletop designers deliberately use stochastic mechanisms to create uncertainty, variety and replayability, but the extent to which these mechanisms influence game outcomes is difficult to quantify. Similarly, designers and players frequently describe games as requiring more or less skill, but measuring the depth of skill expressed by a game is not straightforward.

In <em>Measuring Randomness in Tabletop Games</em>, Goodman and colleagues developed methods for estimating the contribution of stochastic elements to variation in game outcomes. Because experiments can manipulate individual random seeds and mechanisms inside TAG, the analysis can investigate the effects of different sources of randomness rather than treating chance as a single undifferentiated property.

In <em>Skill Depth in Tabletop Board Games</em>, Goodman and colleagues approached the complementary problem of quantifying the extent to which increasing player capability translates into improved performance. The objective is not merely to rank individual agents, but to use artificial players of different strengths to investigate the capacity of the game itself to express differences in skill.

These ideas were subsequently brought together in <em>Seeding for Success: Skill and Stochasticity in Tabletop Games</em>, where <strong>Goodman, Perez-Liebana and Lucas</strong> studied the interaction between player skill and stochasticity and its implications for experimental evaluation.

Taken together, this work provides quantitative tools for addressing questions that are often discussed informally by players and designers: How much does skill matter? How much influence does luck have on the result? Which sources of randomness are most important? And how many games are required before an observed performance difference can be considered meaningful?

---

### AI-assisted Game Design

<div class="row">

<div class="col-sm-7">

<p>

Another important strand of research <strong>led by James Goodman</strong> has investigated how Artificial Intelligence can support tabletop game designers during development rather than merely play finished games.

</p>

<p>

In <em>A Case Study in AI-Assisted Board Game Design</em>, Goodman and colleagues followed the development of an analogue board game while incorporating automated AI playtesting alongside conventional human playtesting. The study examined the kinds of questions that arise during iterative game design and how large-scale simulation can provide additional evidence to help designers answer them.

</p>

<p>

The resulting approach is explicitly <strong>designer-in-the-loop</strong>. The designer determines which aspects of a game need investigation; AI agents generate large quantities of gameplay data; appropriate metrics are extracted from those simulations; and the results are interpreted together with evidence obtained from human playtesting.

</p>

<p>

A central conclusion of this work is that automated playtesting should <strong>complement rather than replace human playtesting</strong>. Artificial Intelligence is particularly valuable for questions that benefit from large numbers of repeated games and quantitative analysis, while human players remain essential for evaluating subjective qualities such as enjoyment, clarity, engagement and theme.

</p>

<p>

This James Goodman-led research established an important bridge between the academic work conducted with TAG and the subsequent practical application of automated playtesting and game analysis in Tabletop R&D.

</p>

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/gamedesign.png' | relative_url }}"
alt="AI-assisted tabletop game design"
style="width:100%;"
/>

</div>

</div>
```

---

### Emerging Research: Large Language Models and Automated Agents

TAG continues to provide a testbed for new forms of Artificial Intelligence.

Recent work has investigated <strong>Large Language Models as program generators</strong>. In <em>From Code to Play</em>, LLMs generate and modify executable programs as part of an evolutionary program-search process. The Java experiments include twelve games from TAG, allowing generated agents to be evaluated automatically across a diverse collection of tabletop environments.

This direction expands the role of TAG again: from evaluating hand-designed planning algorithms and trained Reinforcement Learning policies to evaluating AI systems that can themselves generate executable game-playing programs.

---

# Tabletop R&D

<div class="row">

<div class="col-sm-7">

<p>

The research programme around TAG ultimately led to the creation of <strong>Tabletop R&D</strong>, a Queen Mary University of London spin-out company focused on AI-assisted playtesting and quantitative game analysis.

</p>

<p>

Tabletop R&D builds digital twins of commercial tabletop games and uses automated agents to simulate thousands of games in minutes. The resulting gameplay data can be analysed to answer specific questions from designers and publishers, including game balance, scoring, strategy strength, player-order effects, card usage, action frequencies and victory conditions.

</p>

<p>

The objective is to supplement rather than replace traditional playtesting. Automated simulation is particularly useful for questions requiring large numbers of repetitions, while human playtesters remain central to evaluating subjective qualities such as enjoyment, clarity, theme and engagement.

</p>

<p>

This commercial application demonstrates a direct pathway from research infrastructure and Game AI algorithms to practical tools for the creative industries.

</p>

<p>

👉 <a href="https://www.tabletoprnd.co.uk/">Tabletop R&D website</a>

</p>

</div>

<div class="col-sm-5">

<img
src="{{ '/assets/img/projects/tag/tabletoprnd.png' | relative_url }}"
alt="Tabletop R&D"
style="width:100%;"
/>

</div>

</div>

---

# Resources

### Software

👉 <a href="https://tabletopgames.ai/">TAG project website</a>

👉 <a href="https://github.com/GAIGResearch/TabletopGames">TAG GitHub repository</a>

👉 <a href="https://github.com/martinballa/PyTAG">PyTAG GitHub repository</a>

---

### Key Publications

- <strong>R. D. Gaina, M. Balla, A. Dockhorn, R. Montoliu and D. Perez-Liebana.</strong>  
  <em>TAG: A Tabletop Games Framework.</em>  
  Experimental AI in Games (EXAG), AIIDE 2020 Workshop, 2020.  
  👉 <a href="{{ '/assets/pdf/papers/TAG_Tabletop_Games_Framework.pdf' | relative_url }}">PDF</a>

- <strong>J. Goodman, S. M. Lucas and D. Perez-Liebana.</strong>  
  <em>Fingerprinting Tabletop Games.</em>  
  Proceedings of the IEEE Conference on Games (CoG), pp. 1–4, 2021.  
  👉 <a href="{{ '/assets/pdf/papers/FingerprintingCoG2021.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CoG52621.2021.9619089">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>Visualising Multiplayer Game Spaces.</em>  
  IEEE Transactions on Games, 2022.  
  👉 <a href="{{ '/assets/pdf/papers/VisualizingSpaces-ToG22.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TG.2021.3138561">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>MultiTree MCTS in Tabletop Games.</em>  
  Proceedings of the IEEE Conference on Games (CoG), pp. 292–299, 2022.  
  👉 <a href="{{ '/assets/pdf/papers/MultitreeMCTSTabletop-CoG22.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CoG51982.2022.9893605">DOI</a>

- <strong>J. Goodman, A. Wallat, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>A Case Study in AI-Assisted Board Game Design.</em>  
  Proceedings of the IEEE Conference on Games (CoG), pp. 1–4, 2023.  
  👉 <a href="{{ '/assets/pdf/papers/CaseStudyTAG-CoG23.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CoG57401.2023.10333138">DOI</a>

- <strong>M. Balla, G. E. M. Long, J. Goodman, R. D. Gaina and D. Perez-Liebana.</strong>  
  <em>PyTAG: Tabletop Games for Multi-Agent Reinforcement Learning.</em>  
  IEEE Transactions on Games, pp. 1–10, 2024.  
  👉 <a href="{{ '/assets/pdf/papers/PyTAG-ToG24.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TG.2024.3404133">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>Seeding for Success: Skill and Stochasticity in Tabletop Games.</em>  
  IEEE Transactions on Games, 2025.  
  👉 <a href="{{ '/assets/pdf/papers/SeedingForSuccess-TOG25.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TG.2025.3542263">DOI</a>

---

### Other Publications

- <strong>R. D. Gaina, J. Goodman and D. Perez-Liebana.</strong>  
  <em>TAG: Terraforming Mars.</em>  
  Proceedings of the 17th AAAI Conference on Artificial Intelligence and Interactive Digital Entertainment (AIIDE), <strong>17(1)</strong>, pp. 148–155, 2021.  
  👉 <a href="{{ '/assets/pdf/papers/TAGTerraformingMarsAIIDE2021.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1609/aiide.v17i1.18902">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>Following the Leader in Multiplayer Tabletop Games.</em>  
  Proceedings of the 18th International Conference on the Foundations of Digital Games (FDG), pp. 1–11, 2023.  
  👉 <a href="{{ '/assets/pdf/papers/FollowingLeader-FDG23.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1145/3582437.3582449">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>Measuring Randomness in Tabletop Games.</em>  
  Proceedings of the IEEE Conference on Games (CoG), pp. 1–8, 2024.  
  👉 <a href="{{ '/assets/pdf/papers/RandomSeedAnalysis-CoG24.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CoG60054.2024.10645623">DOI</a>

- <strong>J. Goodman, D. Perez-Liebana and S. M. Lucas.</strong>  
  <em>Skill Depth in Tabletop Board Games.</em>  
  Proceedings of the IEEE Conference on Games (CoG), pp. 1–8, 2024.  
  👉 <a href="{{ '/assets/pdf/papers/SkillGrid-CoG24.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/CoG60054.2024.10645624">DOI</a>

- <strong>M. Eberhardinger, J. Goodman, A. Dockhorn, D. Perez-Liebana, R. D. Gaina, D. Çakmak, S. Maghsudi and S. M. Lucas.</strong>  
  <em>From Code to Play: Benchmarking Program Search for Games Using Large Language Models.</em>  
  IEEE Transactions on Games, 2025.  
  👉 <a href="{{ '/assets/pdf/papers/CodeToPlay-TOG25.pdf' | relative_url }}">PDF</a> · <a href="https://doi.org/10.1109/TG.2025.3614499">DOI</a>

---

# Ongoing Work

TAG remains an active research project.

The framework continues to grow through the implementation of new games and through research spanning planning, Reinforcement Learning, automated game analysis, AI-assisted game design and Large Language Models.

The diversity of the game library is increasingly important. Rather than treating each tabletop game as an isolated problem, TAG makes it possible to ask broader questions about which algorithms generalise, which properties make games difficult for particular methods, and how characteristics such as multiplayer interaction, hidden information, skill and randomness affect both artificial and human play.

At the same time, Tabletop R&D provides a route through which methods originally developed for academic experimentation can be evaluated against practical questions posed by professional game designers and publishers.

Together, these activities make TAG both a research framework and a bridge between <strong>Game AI research</strong>, <strong>game design</strong> and <strong>the tabletop games industry</strong>.
```
