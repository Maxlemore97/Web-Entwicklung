setTimeout(() => {
  console.log("fertig :)")
}, 5000)

console.log("starting...")


//  to be used later...
function block (ms) {
  const start = Date.now()
  while (Date.now() - start < ms) {}
}