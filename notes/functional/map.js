let animals = [
    { name: 'bobi1', species: 'perro'},
    { name: 'bobi2', species: 'perro'},
    { name: 'bobi3', species: 'gato'},
    { name: 'bobi4', species: 'alien'},
    { name: 'bobi5', species: 'avestruz'},
]

/* For loop comparison

let nombres = []
for (let i = 0; i < animals.length; i++) {
    nombres.push(animals[i].name);
} 
*/

// map example
let nombres = animals.map(function(animal) { return animal.name})

// Arrow function example
let nombres2 = animals.map(animal => animal.name)


console.log("Nombres: \n", nombres)

console.log('Nombres2: \n', nombres2)