import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const History = (props) => {
    /**
     * Componente para mantener el historial de clicks
     * Utiliza `conditional rendering` 
     * en caso de que no haya clicks.
     */

    // console.log('props value= ', props)
    if (props.allClicks.length === 0) {
        return (
            <div>
                The app is used by pressing buttons
            </div>
        )
    }

    return (
        <div>
            Buttons pressed: {props.allClicks.join('-')}
        </div>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick} >
        {text}
    </button>
)

const App = (props) => {

    /*  
        Usamos el State Hook (useState) para mantener y actualizar
        el estado de un componente (App en nuestro caso)
    */

    /**
     * La función `useState(0)` devuelve una "variable de estado" `left`
     * y una función que actualiza esta variable `setLeft()`
     */
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)

    // En este caso `allClicks` será un Array
    const [allClicks, setAll] = useState([])

    /**
     * Esta función usa
     * `setAll()` para agregar 'L' al array `allClicks` y
     * `setLeft()` para sumarle 1 a `left`
     */
    const handleLeftClick = () => {

        /**
         * `concat()` no modifica el array `allClicks`,
         * crea una copia y la actualiza (Inmutabilidad) 
         */
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    return (
        <div>
            <div>
                {left}
                <Button handleClick={handleLeftClick} text='left' />
                <Button handleClick={handleRightClick} text='right' />
                {right}
                <History allClicks={allClicks} />
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))