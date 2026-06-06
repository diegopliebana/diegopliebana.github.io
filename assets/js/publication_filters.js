document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".pub-filter");
  const searchInput = document.getElementById("pub-search");
  const status = document.getElementById("pub-filter-status");
  const items = document.querySelectorAll("ol.bibliography li");

  let activeFilters = new Set();

  function normalise(text) {
    return (text || "").toLowerCase().trim();
  }

  function updatePublications() {
    const query = normalise(searchInput.value);
    let visibleCount = 0;

    items.forEach((item) => {
      const tagText = normalise(item.querySelector(".pub-filter-data")?.innerText);
      const hiddenText = normalise(item.querySelector(".pub-filter-data")?.innerText);
      const fullText = normalise(item.innerText + " " + hiddenText);
      const matchesSearch = query === "" || fullText.includes(query);

      const matchesFilters =
        activeFilters.size === 0 ||
        Array.from(activeFilters).every((filter) => tagText.includes(filter));

      const visible = matchesSearch && matchesFilters;
      item.style.display = visible ? "" : "none";

      if (visible) visibleCount++;
    });

    document.querySelectorAll("ol.bibliography").forEach((ol) => {
      const hasVisibleItems = Array.from(ol.querySelectorAll("li")).some(
        (li) => li.style.display !== "none"
      );

      ol.style.display = hasVisibleItems ? "" : "none";

      const heading = ol.previousElementSibling;
      if (heading && heading.classList.contains("bibliography")) {
        heading.style.display = hasVisibleItems ? "" : "none";
      }
    });

    status.textContent = `${visibleCount} publication${visibleCount === 1 ? "" : "s"} shown`;
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.dataset.filter;

      if (filter === "all") {
        activeFilters.clear();
        buttons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
      } else {
        document.querySelector('[data-filter="all"]').classList.remove("active");

        if (activeFilters.has(filter)) {
          activeFilters.delete(filter);
          this.classList.remove("active");
        } else {
          activeFilters.add(filter);
          this.classList.add("active");
        }

        if (activeFilters.size === 0) {
          document.querySelector('[data-filter="all"]').classList.add("active");
        }
      }

      updatePublications();
    });
  });

  searchInput.addEventListener("input", updatePublications);
  updatePublications();
});