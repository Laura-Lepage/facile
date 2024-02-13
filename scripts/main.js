let button = document. querySelector("button")
let color = document.querySelector("input")
let body = document.querySelector("body")

button.addEventListener('click', function(){
  body.style.background = color.value
})

