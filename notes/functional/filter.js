/* 1. Higher Order Functions */
/* 
    Como las funciones son valores, (igual que a = 0)
    podemos hacer que ciertas funciones(HOF) tomen
    como argumento a otras funciones.
*/

let animals = [
    { name: 'bobi1', species: 'perro'},
    { name: 'bobi2', species: 'perro'},
    { name: 'bobi3', species: 'gato'},
    { name: 'bobi4', species: 'alien'},
    { name: 'bobi5', species: 'avestruz'},
]

/**
 * `esPerro` es una variable que 
 * tiene como valor una función.
 */
let esPerro = function(animal) {
    return animal.species === 'perro'
}

/**
 * `filter` devuelve los elementos de un array (`animals`)
 * que se ajusten a la condición especificada
 * en la callback function `esPerro`
 */
let perros = animals.filter(esPerro)

// Arrow function (Misma funcionalidad)
let perros2 = animals.filter( (animal) => {
    return animal.species === 'perro'
})

// Same but shorter
let perros3 = animals.filter(animal => animal.species === 'perro')

console.log('Perros: \n ', perros)
