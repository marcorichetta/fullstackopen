let orders = [
    { amount: 250 },
    { amount: 100 },
    { amount: 50 },
    { amount: 600 },
]

/*     For loop comparison
let total = []
for (let i = 0; i < orders.length; i++) {
    total+= orders[i].amount;
}
*/

/**
 * Reduce takes a callback function 
 * which is applied to every element of the array
 * and an initial value (0 in this case).
 * 
 * It stores the final value in `total`
 */
let total = orders.reduce(function(sum, order) {
    console.log('values ->', sum, order)
    return sum + order.amount
}, 0)

// Arrow function
let total2 = orders.reduce( (sum, order) => sum + order.amount, 0)

console.log('Total', total2)