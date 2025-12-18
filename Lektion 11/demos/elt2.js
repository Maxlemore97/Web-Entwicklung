//
// Variante von elt
//
// in dieser Variante ist das zweite Argument mit den Attributen
// fakultativ
//
// konkret:
// - elt("p", {}, "hello world")
// - elt("p", "hello world")
// - elt("p", null, "hello world")
// - elt("p", undefined, "hello world")
// liefern das gleiche Ergebnis
//

function elt (type, ...args) {
  let node = document.createElement(type)
  if (args.length === 0) return node
  let [attrs, ...children] = args
  if (attrs && typeof(attrs)==='object' && !(attrs instanceof HTMLElement)) {  
    Object.keys(attrs).forEach(key => {
      node.setAttribute(key, attrs[key])
    })
  } else if (attrs) {
    children = [attrs, ...children]
  }
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child)
    else node.appendChild(document.createTextNode(child))
  }
  return node
}


