//stopPropagation() “Prevents the event from bubbling up the DOM tree”
// Phase 1 - Capture phase: html-body-div
// Phase 2 - Target phase: div
// Phase 3 - Bubbling phase: div-body-html (stopPropagation prevents bubbling!)

const big = document.querySelector(".big")
const medium = document.querySelector(".medium")
const small = document.querySelector(".small")

big.onclick = (e) => {
  console.log('Click on BIG')
}
medium.onclick = (e) => {
  console.log('Click on MEDIUM')
}
small.onclick = (e) => {
  e.stopPropagation() //prevent propagation of event
  console.log('Click on SMALL')
}


