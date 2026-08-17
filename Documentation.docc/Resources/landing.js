(() => {
  const landingPathPattern = /^(?:\/[a-z]{2}(?:-[a-z]{2})?)?\/documentation\/xogot\/?$/i;
  const cardDetails = new Map([
    ["/documentation/xogot/differences", { kicker: "iPad and iPhone" }],
    ["/documentation/xogot/differences-mac", { kicker: "Mac" }],
    ["/documentation/xogot/xogot-connect", { kicker: "Remote tools" }],
    ["/documentation/xogot/faq", { kicker: "Help" }],
    ["/documentation/xogot/command-palette", { kicker: "Productivity" }],
    ["/documentation/xogot/asset-placer", { kicker: "World building" }],
    ["/documentation/xogot/embedded-game-view", { kicker: "Workflow" }],
    ["/documentation/xogot/onscreen-controls", { kicker: "Input" }],
  ]);

  const tutorials = [
    {
      kicker: "Xogot tutorial",
      title: "Step by Step",
      body: "Learn the editor, nodes, scenes, GDScript, and signals through practical examples.",
      href: "/tutorials/xogot-tutorials#step-by-step",
      image: "/images/com.xibbon.Xogot/scripting_first_script_rotating_godot.gif",
    },
    {
      kicker: "Xogot tutorial",
      title: "Your First 2D Game",
      body: "Create a complete 2D game, from project setup and player movement to enemies, UI, and polish.",
      href: "/tutorials/xogot-tutorials#your-first-2d-game",
      image: "/images/com.xibbon.Xogot/dodge_preview.gif",
    },
    {
      kicker: "Xogot tutorial",
      title: "TileSets and TileMaps",
      body: "Build a TileSet, edit tiles, paint layers, and learn the core Xogot TileMap workflow.",
      href: "/tutorials/xogot-tutorials#tilesets-and-tilemaps",
      image: "/images/com.xibbon.Xogot/tileset_placing.gif",
    },
    {
      kicker: "Xogot tutorial",
      title: "Your First 3D Game",
      body: "Create a complete 3D game while learning movement, collisions, spawning, animation, and score.",
      href: "/tutorials/xogot-tutorials#your-first-3d-game",
      image: "/images/com.xibbon.Xogot/index-01.game-preview-animation.gif",
    },
    {
      kicker: "Xogot for Mac",
      title: "First Tour",
      body: "Get oriented in the workspace, code navigation, debugging tools, settings, and run destinations.",
      href: "/tutorials/xogot-for-mac#first-tour",
      image: "/images/com.xibbon.Xogot/mac-tour-editor-overview.png",
    },
    {
      kicker: "Xogot for Mac",
      title: "Signing and Deployment",
      body: "Configure signing and run projects on Mac, simulators, iPhone, and iPad.",
      href: "/tutorials/xogot-for-mac#signing-and-deployment",
      image: "/images/com.xibbon.Xogot/iPhoneMacSimulator.png",
    },
  ];

  const makeAction = (label, href, className) => {
    const link = document.createElement("a");
    link.className = className;
    link.href = href;
    link.textContent = label;
    return link;
  };

  const makeTutorialCard = (tutorial) => {
    const link = document.createElement("a");
    link.className = "xogot-tutorial-card";
    link.href = tutorial.href;

    const visual = document.createElement("span");
    visual.className = "xogot-tutorial-card__visual";

    const image = document.createElement("img");
    image.src = tutorial.image;
    image.alt = "";
    image.loading = "lazy";
    image.decoding = "async";
    visual.appendChild(image);

    const content = document.createElement("span");
    content.className = "xogot-tutorial-card__content";

    const kicker = document.createElement("span");
    kicker.className = "xogot-tutorial-card__kicker";
    kicker.textContent = tutorial.kicker;

    const title = document.createElement("span");
    title.className = "xogot-tutorial-card__title";
    title.textContent = tutorial.title;

    const body = document.createElement("span");
    body.className = "xogot-tutorial-card__body";
    body.textContent = tutorial.body;

    content.append(kicker, title, body);
    link.append(visual, content);
    return link;
  };

  const enhanceEngineReferenceNavigator = () => {
    document.querySelectorAll(".navigator-card-item").forEach((card) => {
      const title = card.querySelector(".leaf-link")?.textContent?.trim();
      const isEngineReference = title === "Engine Reference";
      const isGroupMarker = card.classList.contains("is-group");

      card.classList.toggle(
        "xogot-engine-reference-marker",
        isEngineReference && isGroupMarker
      );
      card.classList.toggle(
        "xogot-engine-reference-parent",
        isEngineReference && !isGroupMarker && Boolean(card.querySelector(".tree-toggle"))
      );
    });
  };

  const enhanceLandingPage = () => {
    enhanceEngineReferenceNavigator();

    const isLandingPage = landingPathPattern.test(window.location.pathname);
    document.body.classList.toggle("xogot-landing-page", isLandingPage);

    if (!isLandingPage) {
      return;
    }

    const hero = document.querySelector("main .documentation-hero");
    const heroContent = hero?.querySelector(".documentation-hero__content");

    if (hero && !hero.querySelector(".xogot-landing-visual")) {
      const visual = document.createElement("a");
      visual.className = "xogot-landing-visual";
      visual.href = "/documentation/xogot/embedded-game-view";
      visual.setAttribute("aria-label", "Learn about Xogot's embedded game view");

      const image = document.createElement("img");
      image.src = "/images/com.xibbon.Xogot/EmbeddedGameView.png";
      image.alt = "Xogot running a game directly inside the editor on iPad";
      image.width = 2360;
      image.height = 1640;
      visual.appendChild(image);
      hero.appendChild(visual);
    }

    if (heroContent && !heroContent.querySelector(".xogot-hero-actions")) {
      const actions = document.createElement("div");
      actions.className = "xogot-hero-actions";
      actions.appendChild(
        makeAction(
          "Get started",
          "/documentation/xogot/getting-started",
          "xogot-hero-button xogot-hero-button--primary"
        )
      );
      heroContent.appendChild(actions);
    }

    const tutorialsHeading = document.querySelector("main h2#Tutorials");
    if (tutorialsHeading && !document.querySelector(".xogot-tutorial-grid")) {
      const grid = document.createElement("div");
      grid.className = "xogot-tutorial-grid";
      grid.setAttribute("aria-label", "Featured tutorials");
      tutorials.forEach((tutorial) => grid.appendChild(makeTutorialCard(tutorial)));

      const introduction = tutorialsHeading.nextElementSibling;
      if (introduction?.tagName === "P") {
        introduction.insertAdjacentElement("afterend", grid);
      } else {
        tutorialsHeading.insertAdjacentElement("afterend", grid);
      }
    }

    ["More-Xogot-Documentation", "Xogot-for-Mac", "Release-Notes"].forEach(
      (headingID) => {
        const heading = document.querySelector(`main h2#${headingID}`);
        const list = heading?.nextElementSibling;
        if (list?.classList.contains("TopicsLinkCardGrid")) {
          list.classList.add("xogot-article-list");
        }
      }
    );

    document
      .querySelectorAll("main .detailedGrid .reference-card-grid-item")
      .forEach((card) => {
        const path = new URL(card.href, window.location.origin).pathname.replace(/\/$/, "");
        const details = cardDetails.get(path);

        if (details) {
          card.dataset.kicker = details.kicker;

          const title = card.querySelector(".title");
          const body = card.querySelector(".card-content");
          if (details.title && title) {
            title.textContent = details.title;
          }
          if (details.body && body) {
            body.textContent = details.body;
          }
        }
      });
  };

  let enhancementQueued = false;
  const queueEnhancement = () => {
    if (enhancementQueued) {
      return;
    }

    enhancementQueued = true;
    window.requestAnimationFrame(() => {
      enhancementQueued = false;
      enhanceLandingPage();
    });
  };

  const observer = new MutationObserver(queueEnhancement);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("popstate", queueEnhancement);
  queueEnhancement();
})();
