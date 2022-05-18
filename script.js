import html from './core.js'

const cars  = ['BMW', 'Vinfast', 'Volkswagen']

const isSuccess = true

const output = html`
    <h1>${isSuccess}</h1>
    <ul>
    ${cars.map(car => `<li>${car}</li>`)}
    </ul>
`

console.log(output)

const [destrutoringCar] = cars

console.log(destrutoringCar)
