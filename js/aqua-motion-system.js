(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)",
  ).matches;
  const narrowViewport = window.matchMedia("(max-width: 767px)").matches;
  const saveData = Boolean(navigator.connection?.saveData);
  const liteMode = reducedMotion || coarsePointer || narrowViewport || saveData;

  document.querySelectorAll(".aqua-reveal").forEach((element) => {
    element.classList.remove("aqua-reveal", "is-visible", "aqua-hover-lift");
    element.style.removeProperty("--aqua-delay");
  });

  const sections = Array.from(document.querySelectorAll("main > section")).filter(
    (section) => !section.classList.contains("aqua-signature-hero"),
  );

  const motionItems = [];

  sections.forEach((section) => {
    const header = section.querySelector(
      ":scope > div > header, :scope > div > .text-center, :scope > div > div > header, :scope header",
    );

    if (header) {
      header.dataset.aquaMotion = "from-start";
      motionItems.push(header);
    }

    const cards = Array.from(
      section.querySelectorAll(
        ".glass-card, .service-card, .solution-card, .result-card, .contact-card, .aqua-service-path, .aqua-service-paths__decision, .faq-item, .aqua-flow-panel, .aqua-flow-zone, .aqua-flow-proof, .aqua-flow-outcome",
      ),
    ).filter((card) => !card.closest("header"));

    cards.forEach((card, index) => {
      card.dataset.aquaMotion = "rise";
      card.style.setProperty(
        "--aqua-motion-delay",
        `${Math.min(index % 4, 3) * 85}ms`,
      );
      motionItems.push(card);
    });
  });

  const uniqueItems = Array.from(new Set(motionItems));

  document
    .querySelectorAll("footer > div > div")
    .forEach((group, index) => {
      group.dataset.aquaMotion = "rise";
      group.style.setProperty(
        "--aqua-motion-delay",
        `${Math.min(index, 2) * 85}ms`,
      );
      uniqueItems.push(group);
    });

  document
    .querySelectorAll("a, button, input, select, textarea, summary")
    .forEach((element) => element.classList.add("aqua-motion-focus"));

  if (liteMode || !("IntersectionObserver" in window)) {
    uniqueItems.forEach((element) => {
      element.classList.add(
        "is-aqua-motion-visible",
        "is-aqua-motion-complete",
      );
    });
    root.classList.add("aqua-motion-lite");
  } else {
    root.classList.add("aqua-motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-aqua-motion-visible");
          window.setTimeout(() => {
            entry.target.classList.add("is-aqua-motion-complete");
          }, 1100);
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    uniqueItems.forEach((element) => observer.observe(element));
  }

  if (!liteMode) {
    const progress = document.createElement("div");
    progress.className = "aqua-motion-progress";
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      );
      const value = Math.min(Math.max(window.scrollY / maxScroll, 0), 1);
      root.style.setProperty("--aqua-scroll-progress", value.toFixed(4));
    };

    const requestProgressUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate, { passive: true });
  }

  if (!liteMode && finePointer) {
    const pointerGlow = document.createElement("div");
    pointerGlow.className = "aqua-pointer-glow";
    pointerGlow.setAttribute("aria-hidden", "true");
    document.body.appendChild(pointerGlow);

    let pointerFrame = 0;
    let pointerEvent = null;
    let pointerIdleTimer = 0;

    const hidePointerGlow = () => {
      pointerGlow.classList.remove("is-active");
    };

    const updatePointerGlow = () => {
      pointerFrame = 0;
      if (!pointerEvent) return;

      pointerGlow.style.setProperty(
        "--aqua-pointer-screen-x",
        `${pointerEvent.clientX}px`,
      );
      pointerGlow.style.setProperty(
        "--aqua-pointer-screen-y",
        `${pointerEvent.clientY}px`,
      );
      pointerGlow.classList.add("is-active");

      window.clearTimeout(pointerIdleTimer);
      pointerIdleTimer = window.setTimeout(hidePointerGlow, 760);
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        pointerEvent = event;
        if (pointerFrame) return;
        pointerFrame = window.requestAnimationFrame(updatePointerGlow);
      },
      { passive: true },
    );

    document.documentElement.addEventListener("pointerleave", () => {
      pointerEvent = null;
      window.clearTimeout(pointerIdleTimer);
      hidePointerGlow();
    });

    window.addEventListener("blur", hidePointerGlow);
  }
})();
