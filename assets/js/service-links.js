document.addEventListener("DOMContentLoaded", () => {
  const newServices = [
    {
      href: "corporate-social-events.html",
      label: "Corporate & Social Events",
    },
    {
      href: "kitty-parties.html",
      label: "Kitty Parties",
    },
  ];

  document
    .querySelectorAll('a[href="cultural-religious-events.html"]')
    .forEach((culturalLink) => {
      const isFooterLink = culturalLink.parentElement?.tagName === "LI";
      const linkContainer = isFooterLink
        ? culturalLink.parentElement.parentElement
        : culturalLink.parentElement;
      let insertionPoint = isFooterLink
        ? culturalLink.parentElement
        : culturalLink;

      newServices.forEach((service) => {
        if (linkContainer.querySelector(`a[href="${service.href}"]`)) {
          return;
        }

        const link = document.createElement("a");
        link.href = service.href;
        link.textContent = service.label;

        if (isFooterLink) {
          link.className = "hover:text-secondary transition-colors";
          const item = document.createElement("li");
          item.appendChild(link);
          insertionPoint.insertAdjacentElement("afterend", item);
          insertionPoint = item;
          return;
        }

        link.className = culturalLink.className.replace("font-semibold", "").trim();
        if (window.location.pathname.endsWith(service.href)) {
          link.classList.add("font-semibold");
        }
        insertionPoint.insertAdjacentElement("afterend", link);
        insertionPoint = link;
      });
    });
});
