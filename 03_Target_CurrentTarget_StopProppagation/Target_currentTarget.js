const big = document.querySelector(".big")
const medium = document.querySelector(".medium")
const small = document.querySelector(".small")

big.onclick = (e) => {
  console.log("e.target is...")
  console.log(e.target) //where I actually clicked
  console.log("e.currentTarget is...")
  console.log(e.currentTarget) //where the listener is
}



