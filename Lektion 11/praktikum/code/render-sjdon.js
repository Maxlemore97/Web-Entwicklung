function renderSJDOM(node, parent) {
  if (typeof node === "string") {
    parent.appendChild(document.createTextNode(node));
    return;
  }

  if (Array.isArray(node)) {
    const [tag, ...rest] = node;
    const element = document.createElement(tag);

    let startIndex = 0;

    if (
      rest.length > 0 &&
      typeof rest[0] === "object" &&
      !Array.isArray(rest[0])
    ) {
      const attributes = rest[0];
      startIndex = 1;

      for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
      }
    }

    for (let i = startIndex; i < rest.length; i++) {
      renderSJDOM(rest[i], element);
    }

    parent.appendChild(element);
  }
}
