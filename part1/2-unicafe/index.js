/* FULLSTACK OPEN - UNICAFE */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Function Component
const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Statistics = ({data}) => {

    // Conditional rendering

    // If total is 0
    if (data[0].value === 0) {
        return (
            <div>
                No feedback given.
            </div>
        )
    }
    
    // Loop to save generic statistics on a list
    const statsList = data.map(function(stat, index) {
        return (
            <Statistic name={stat.name} counter={stat.value} key={index} />
        )
    })

    // Destructuring data for better understanding
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Ignoring_some_returned_values

    let good, bad, total;

    [good, , bad, total] = data

    // Render the generic list plus the ones with calculus
    return (
        <>
            <table>
                { statsList }
                        
                <Statistic name='Average' counter={(good.value - bad.value) / total.value } />
                <Statistic name='Positive' counter={(good.value / total.value) * 100 + ' %'} />
            </table>
        </>
    )
}

const Statistic = (props) => {
    return (
        <tbody>
            <tr>
                <td>
                    {props.name}
                </td>
                <td>
                    {props.counter}
                </td>
            </tr>
        </tbody>
    )
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick} >
        {text}
    </button>
)


const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    // Total variable to calculate average
    const [total, setTotal] = useState(0)

    // Array sent to Statistics Component
    const data = [
        {
            name: 'Good',
            value: good
        },
        {
            name: 'Neutral',
            value: neutral
        },
        {
            name: 'Bad',
            value: bad
        },
        {
            name: 'Total',
            value: total
        }
    ]


    // Button functions that updates feedback counters
    const handleGoodClick = () => {
        setTotal(total + 1)
        setGood(good + 1)
    }

    const handleBadClick = () => {
        setTotal(total + 1)
        setBad(bad + 1)
    }

    const handleNeutralClick = () => {
        setTotal(total + 1)
        setNeutral(neutral + 1)
    }

    return (
        <div>
            <Header name="Give Feedback" />
            <br />
            <Button handleClick={handleGoodClick} text='Good' />
            <Button handleClick={handleNeutralClick} text='Neutral' />
            <Button handleClick={handleBadClick} text='Bad' />
            <br />
            <Header name="Statistics" />
            <Statistics data={data} />
            
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)