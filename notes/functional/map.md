# Map

Aplica una función a cada elemento de un *array*, devolviendo un nuevo *array* con los valores transformados.

```js
let animals = [
    { name: 'bobi1', species: 'perro'},
    { name: 'bobi2', species: 'perro'},
    { name: 'bobi3', species: 'gato'},
]
```

Creamos un nuevo array con el nombre de los animales
---
**Modo Imperativo**
```js
let nombres = []

for (let i = 0; i < animals.length; i++) {
    nombres.push(animals[i].name);
}
nombres // [ 'bobi1', 'bobi2', 'bobi3' ]
```

**Modo funcional**
```js
let nombres = animals.map(function(animal) { return animal.name})

// Con arrow function
let nombres2 = animals.map(animal => animal.name)

nombres // [ 'bobi1', 'bobi2', 'bobi3' ]
```