(() => {
  const customHeader = document.querySelector("custom-header");
  const shadowRoot = customHeader?.shadowRoot;
  const header = shadowRoot?.getElementById("header");

  if (!shadowRoot || !header) {
    return;
  }

  const headerStyles = document.createElement("link");
  headerStyles.setAttribute("rel", "stylesheet");
  headerStyles.setAttribute("href", "/css/header.css?v=20260816-3");
  headerStyles.addEventListener("load", () => {
    header.hidden = false;
  });
  headerStyles.addEventListener("error", () => {
    header.hidden = false;
  });
  shadowRoot.appendChild(headerStyles);

  if (!document.querySelector('link[data-xogot-landing-styles]')) {
    const landingStyles = document.createElement("link");
    landingStyles.setAttribute("rel", "stylesheet");
    landingStyles.setAttribute("href", "/css/landing.css?v=20260816-8");
    landingStyles.setAttribute("data-xogot-landing-styles", "");
    document.head.appendChild(landingStyles);
  }
})();
