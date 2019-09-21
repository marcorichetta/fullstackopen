# Reduce

Reduce takes a function which is applied to every element of the array
and an initial value (0 in this case). It returns a final value.

```js
let orders = [
    { amount: 250 },
    { amount: 100 },
    { amount: 50 },
    { amount: 600 },
]
```

**Modo imperativo**
```js
let total = []
for (let i = 0; i < orders.length; i++) {
    total+= orders[i].amount;
}
```

**Modo funcional**

La función toma el `amount` de una orden y se lo suma a `acc`

Esta función se le aplica a cada elemento del array `orders`

```js
let total = orders.reduce(function(acc, order) {
    return acc + order.amount // 1000
}, 0)

// Arrow function (Misma funcionalidad)
let total2 = orders.reduce( (acc, order) => acc + order.amount, 0)
```
