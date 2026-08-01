(() => {
  "use strict";

  const header = document.querySelector("body > header");
  const headerBar = header?.querySelector("nav");
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const navLinks = Array.from(
    document.querySelectorAll("header [data-aqua-nav][href^='#']"),
  );
  const sectionIds = Array.from(
    new Set(navLinks.map((link) => link.getAttribute("href")?.slice(1))),
  ).filter(Boolean);
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const getHeaderOffset = () => {
    const barHeight = headerBar?.getBoundingClientRect().height || 80;
    return Math.ceil(barHeight + 16);
  };

  const updateHeaderOffset = () => {
    document.documentElement.style.setProperty(
      "--aqua-header-offset",
      `${getHeaderOffset()}px`,
    );
  };

  const setActiveSection = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let scrollFrame = 0;

  const updateNavigationState = () => {
    scrollFrame = 0;
    const marker = window.scrollY + getHeaderOffset() + window.innerHeight * 0.2;
    let activeId = "";

    sections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });

    const documentBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 4;

    if (documentBottom && sections.length) {
      activeId = sections[sections.length - 1].id;
    }

    setActiveSection(activeId);
    header?.classList.toggle("is-aqua-header-scrolled", window.scrollY > 12);
  };

  const requestNavigationUpdate = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(updateNavigationState);
  };

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;

      event.preventDefault();

      const targetTop =
        href === "#top"
          ? 0
          : Math.max(
              target.getBoundingClientRect().top +
                window.scrollY -
                getHeaderOffset(),
              0,
            );

      window.scrollTo({
        top: targetTop,
        behavior: reducedMotion ? "auto" : "smooth",
      });
    });
  });

  updateHeaderOffset();
  updateNavigationState();

  window.addEventListener("scroll", requestNavigationUpdate, {
    passive: true,
  });
  window.addEventListener(
    "resize",
    () => {
      updateHeaderOffset();
      requestNavigationUpdate();
    },
    { passive: true },
  );
})();
