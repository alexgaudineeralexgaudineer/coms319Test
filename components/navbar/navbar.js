(async () => {
  const componentRequest = await fetch("/components/navbar/navbar.html");
  const component = await componentRequest.text();
  const body = document.getElementsByTagName("body");

  if (!body) {
    console.error("Couldn't find body to insert navbar into.");
    return;
  }

  body[0].insertAdjacentHTML("afterbegin", component);

  const navbar = document.getElementById("navbar");
  const links = navbar.getElementsByTagName("a");

  for (const link of links) {
    const linkPath = link.href
      .split("/")
      .pop()
      .replace(".html", "")
      .replace("index", "")
      .trim();
    const currentPath = window.location.pathname
      .replace(/\/$/, "")
      .split("/")
      .pop()
      .replace(".html", "")
      .replace("index", "")
      .trim();

    const activeClasses = ["border-red-500"];

    if (link.parentElement.parentElement.id == "mobile-navbar") {
      activeClasses.push("text-red-700", "bg-red-50");
    }

    if (linkPath == currentPath) {
      link.classList.add(...activeClasses);
    }
  }
})();
