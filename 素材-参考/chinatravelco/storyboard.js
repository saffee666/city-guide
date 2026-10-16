/* China Travel Co · storyboard shared behaviour
   - scroll progress bar (#progress)
   - frosted nav on scroll (#nav) + "over-hero" light state at the top
   - automatic scroll-reveal for common blocks */
(function () {
  const prog = document.getElementById("progress");
  const nav = document.getElementById("nav");
  const hero = document.querySelector(".city-hero, .hero");

  function heroBottom() {
    return hero ? hero.getBoundingClientRect().bottom : 0;
  }
  function onScroll() {
    const h = document.documentElement.scrollHeight - innerHeight;
    if (prog) prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    if (nav) {
      nav.classList.toggle("scrolled", scrollY > 40);
      // light nav while it floats over the dark hero photo
      nav.classList.toggle("over-hero", !!hero && heroBottom() > 80 && scrollY <= 40);
    }
  }
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll, { passive: true });
  onScroll();

  // Auto scroll-reveal. Skip if the page already manages .r itself.
  const sel = ".section-heading,.hub-card,.shop-card,.pack-card,.attraction-card,.free-card," +
              ".bio-block,.city-cta,.realm-card,.dont-miss,.free-banner,.custom-panel," +
              ".trust-row,.quiz-shell,.city-intro p";
  const targets = [];
  document.querySelectorAll(sel).forEach((el) => {
    if (!el.classList.contains("r")) { el.classList.add("r"); targets.push(el); }
  });
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  function arm() { targets.forEach((el) => io.observe(el)); }
  // city.html injects content after load; re-scan once shortly after.
  arm();
  setTimeout(() => {
    document.querySelectorAll(sel).forEach((el) => {
      if (!el.classList.contains("r")) { el.classList.add("r"); io.observe(el); }
    });
  }, 400);
})();
