# Filter

```js
let animals = [
    { name: 'bobi1', species: 'perro'},
    { name: 'bobi2', species: 'perro'},
    { name: 'bobi3', species: 'gato'},
]
```

`filter` devuelve los elementos de un array (`animals`) que se ajusten a la condición especificada en la función (`esPerro`)
 
```js
// Arrow function
let perros = animals.filter( (animal) => {
    return animal.species === 'perro' // [ 'bobi1', 'bobi2' ]
})

// Versión acortada (Mismo resultado)
let perros3 = animals.filter(animal => animal.species === 'perro')
```

Podemos extraer la lógica que le pasamos a filter a una función aparte
```js
let esPerro = function(animal) {
    return animal.species === 'perro'
}

let perros2 = animals.filter(esPerro) // [ 'bobi1', 'bobi2' ]
```
