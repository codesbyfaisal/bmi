const app = document.querySelector('.app')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const showHeight = document.querySelector('.show-height')
const showWeight = document.querySelector('.show-weight')
const result = document.querySelector('.result')
const resultCategory = document.querySelector('.result-category')

// * Add event listener to input fields
height.addEventListener('input', () => {
  showHeight.innerHTML = height.value
})

weight.addEventListener('input', () => {
  showWeight.innerHTML = weight.value
})

// * Calculate BMI
const calculateBMI = () => {
  const heightValue = height.value
  const weightValue = weight.value
  const bmi = (weightValue / ((heightValue * heightValue))).toFixed(2)
  return bmi
}

// * Calculate category
const calculateCategory = (bmi) => {
  if (bmi < 18.5)
    return 'Underweight'
  else if (bmi >= 18.5 && bmi < 24.9)
    return 'Normal weight'
  else if (bmi >= 25 && bmi < 29.9)
    return 'Overweight'
  else
    return 'Obese'
}

// * Add event listener to form/app
app.addEventListener('submit', (e) => {
  e.preventDefault()
  result.innerHTML = calculateBMI()
  resultCategory.innerHTML = calculateCategory(calculateBMI())
})

// * BMI Formula: BMI = (Weight in kg / (Height x Height))
// * Underweight: BMI < 18.5
// * Normal weight: 18.5 ≤ BMI < 24.9
// * Overweight: 25 ≤ BMI < 29.9
// * Obesity: BMI ≥ 30