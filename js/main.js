const elSpanRed = document.querySelector('.js-span1')
const elSpanYellow = document.querySelector('.js-span2')
const elSpanGreen = document.querySelector('.js-span3')


let timerR = setInterval(() => {
  elSpanRed.style.backgroundColor = 'red'
},1000)
let timerY = setInterval(() => {
  elSpanYellow.style.backgroundColor = 'yellow'
},4000)
let timerG = setInterval(() => {
  elSpanGreen.style.backgroundColor = 'green'
},7000)

setTimeout(() => {
  clearInterval(timerR)
  elSpanRed.style.backgroundColor = 'white'
},4000);
setTimeout(() => {
  clearInterval(timerY)
  elSpanYellow.style.backgroundColor = 'white'
},7000);