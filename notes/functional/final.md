# Resumen

```js
const empleados = [
    { name: "John", salary: 1000, age:25, gender: 'M'},
    { name: "Jack", salary: 2000, age:55, gender: 'M'},
    { name: "Jane", salary: 1500, age:35, gender: 'F'},
    { name: "Jean", salary: 2000, age:22, gender: 'F'},
]

let hombres = empleados.filter(empleado => empleado.gender === 'M')
// [ { name: "John", salary: 1000, age:25, gender: 'M'} 
//   { name: "Jack", salary: 2000, age:55, gender: 'M'} ]

let edadHombres = hombres.map(hombre => hombre.age)
// [ 25, 55 ]

let edadHombresTotal = edadHombres.reduce(function(sum, age) {
    return sum + age
}, 0)
// 80

```
