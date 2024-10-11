const app = document.querySelector('.app')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const showHeight = document.querySelector('.show-height')
const showWeight = document.querySelector('.show-weight')
const result = document.getElementById('result')

height.addEventListener('input', () => {
  showHeight.innerHTML = height.value
})

weight.addEventListener('input', () => {
  showWeight.innerHTML = weight.value
})