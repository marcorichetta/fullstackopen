1. Foreach

Array.forEach(value => {
    console.log(value) // prints all elements inside Array //  
})

2. Concat (React) // Prefered for immutable data structures

/* 
    Concat creates a new array with the content of the old array
    and the new values added.
*/
const MyArray = Array.concat(value)

3. Map

const t = [1, 2, 3]

// Applies a function to each element of an array
const m1 = t.map(value => value * 2)

console.log(m1) // [2, 4, 6]

4. Destructuring

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second) // 1, 2

// Remaining items are collected into an array
console.log(rest) // [3, 4, 5]

5. Arrow Functions

const sum = (n1, n2) => {
    return n1 + n2
}

sum(1, 3) // 4

// Single Expressions

const square = p => p * p

square(5) // 25

// Use with map
const t = [1, 2, 3]

const tSquared = t.map(p => p * p)

tSquared // [1, 4, 9]

7. Destructuring (Reloaded)

props = {
    name: 'Marco Richetta',
    age: 25
}

const Hello = (props) => {

    const name = props.name
    const age = props.age
    // This is the same
    const {name, age} = props
}

// 2 in 1 step
const Hello = ({ name, age }) =>

8. Logging

console.log('The props value is: ', props) // The props value is:  Object { allClicks: [] }

9. Rules of Hooks

/*
    Los Hooks (useState, useEffect) NO deben ser llamados desde
    un loop, un condicional o cualquier otro lugar que no sea
    "la función que define al componente de React".
*/

const App = (props) => {
    // Acá están bien
    const [age, setAge] = useState(0)
    const [name, setName] = useState('Juha Tauriainen')
  
    if ( age > 10 ) {
      // Esto NO FUNCIONA
      const [foobar, setFoobar] = useState(null)
    }
  
    for ( let i = 0; i < age; i++ ) {
      // Esto no está ben
      const [rightWay, setRightWay] = useState(false)
    }
  
    const notGood = () => {
      // Esto tampoco
      const [x, setX] = useState(-1000)
    }
  
    return (
      //...
    )
  }

10. Event Handling

/* Para hacer que un botón reaccione a un click event, 
    tenemos que agregar un event handler */

/* Los event handlers SIEMPRE deben ser una función 
    o una referencia a una función. */

// Esto no funciona
<button onClick={'crap...'}>button</button>

// Esto simplemente devuelve el resultado de la operación 
<button onClick={valor + 1}>button</button>

// Tampoco con asignación de variables
<button onClick={valor = 0}>button</button>


/*
    El problema acá es que cuando el componente se renderice
    la función `setValor()` se va a ejecutar, haciendo que 
    el componente se re-renderice, entrando en un loop infinito
*/
<button onClick={setValor(0)}>button</button>

// Lo correcto sería
<button onClick={() => setValor(0)}>button</button>

// Aunque lo recomendable es definir la función en otro lugar
const setValor = () => {
    //...
}
// Nótese la falta de ()
<button onClick={setValor}>button</button>

11. Promises (Using axios)

axios
.get('http://localhost:3001/notes') // Make a GET request
.then(response => {                 // Chain an event handler
    const notes2 = response.data    // Save the response data in a variable
    console.log(notes2)
})

12. useEffect Hook

const hook = () => {
    console.log('effect')
    axios
        .get('http://localhost:3001/notes')
        .then(response => {
            console.log('promise success')
            setNotes(response.data)
            })
}

/* 
 * useEffect() toma 2 argumentos
 * 1. La función (el effect)
 * 2. Indica cada cuanto se ejecuta el effect.
 *  En este caso es un array vacío, lo que indica
 *  que el efecto se ejecutará después de que 
 *  el componente se haya renderizado.
 */
useEffect(hook, [])
