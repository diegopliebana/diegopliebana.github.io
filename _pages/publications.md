---
layout: page
permalink: /publications/
title: publications
description: publications by year
nav: true
nav_order: 2
---

<div class="publications publications-filterable">

<div class="pub-filter-panel">

<input id="pub-search" type="text" placeholder="Search publications..." />

<div class="pub-filter-group">
  <button class="pub-filter active" data-filter="all">All</button>
  <button class="pub-filter" data-filter="selected">Selected</button>
</div>

<div class="pub-filter-group">
  <button class="pub-filter" data-filter="journal">Journals</button>
  <button class="pub-filter" data-filter="conference">Conferences</button>
  <button class="pub-filter" data-filter="workshop">Workshops</button>
  <button class="pub-filter" data-filter="book">Books</button>
  <button class="pub-filter" data-filter="bookchapter">Book chapters</button>
</div>

<div class="pub-filter-group">
  <button class="pub-filter" data-filter="large-language-models">LLMs</button>
  <button class="pub-filter" data-filter="tabletop-games">Tabletop games</button>
  <button class="pub-filter" data-filter="general-game-playing">General game playing</button>
  <button class="pub-filter" data-filter="monte-carlo-tree-search">MCTS</button>
  <button class="pub-filter" data-filter="reinforcement-learning">RL</button>
  <button class="pub-filter" data-filter="evolutionary-computation">Evolutionary computation</button>
  <button class="pub-filter" data-filter="procedural-content-generation">PCG</button>
  <button class="pub-filter" data-filter="human-ai-interaction">Human-AI interaction</button>
</div>

<p id="pub-filter-status"></p>

</div>

{% bibliography %}

</div>

<script src="{{ '/assets/js/publication_filters.js' | relative_url }}"></script>