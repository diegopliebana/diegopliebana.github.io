document.addEventListener("DOMContentLoaded", () => {
  const toc = document.querySelector(".project-toc");
  if (!toc) return;

  const links = [...toc.querySelectorAll('a[href^="#"]')];

  const sections = links
    .map((link) => {
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      return {
        link,
        section,
      };
    })
    .filter((item) => item.section);

  const updateActiveLink = () => {
    let current = null;

    for (const item of sections) {
      const rect = item.section.getBoundingClientRect();

      if (rect.top <= 160) {
        current = item;
      }
    }

    links.forEach((link) => link.classList.remove("active"));

    if (current) {
      current.link.classList.add("active");
    }
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href").substring(1);
      const target = document.getElementById(id);

      if (!target) return;

      event.preventDefault();

      const y = target.getBoundingClientRect().top + window.scrollY - 90;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      history.replaceState(null, "", `#${id}`);
    });
  });
});
