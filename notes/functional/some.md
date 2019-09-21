# Some y Every
`Some` devuelve True si alguno de los elementos del array cumple con la condición de la función.

`Every` devuelve True si **todos** los elementos del array cumplen con la condición de la función.

```js
const numeros = [2, 4, 6, 9]

numeros.some(numeros, function(num) {
    return num % 2 === 0 // True
})

// True si todos los valores son par
numeros.every(numeros, function(num) {
    return num % 2 === 0 // False
})
```