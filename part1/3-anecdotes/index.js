/* FULLSTACK OPEN - ANECDOTES */

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

/**
 * Returns a pseudorandom int between the min and max INCLUSIVE.
 * @param {number} min Min number
 * @param {number} max Max number
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MostVoted = ({ votes }) => {
    
    // If every element in votes === 0
    if (votes.every(x => x === 0)) {
        return (
            <div>
                No voted anecdotes.
            </div>
        )
    }
    
    // Calculate max value in votes array
    const maxVotesQty = Math.max(...votes);
    // Search the index where the max value come from.
    const mostVoted = votes.indexOf(maxVotesQty);

    return (
        <p>
            {anecdotes[mostVoted]}
            <br />
            It has {maxVotesQty} votes.
        </p>
    )
}

const App = (props) => {

    // State Hook for currently selected anecdote
    const [selected, setSelected] = useState(0)

    /*
        This Hook creates a 0-filled array 
        based on the lenght of anecdotes.
    */
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

    /**
     * Event handler that gets a new anecdote
     * based on a random generated value
     */
    const handleNextClick = () => {
        const value = getRandomInt(0, anecdotes.length - 1);
        setSelected(value);
    }

    /**
     * Event handler that updates a copy of the
     * votes' array with the currently voted
     * anecdote.
     */
    const handleVoteClick = () => {
        const newVotes = [...votes]
        newVotes[selected] += 1;
        setVotes(newVotes);   
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>

            {props.anecdotes[selected]} {/* Current anecdote */}
            <br />
            It has {votes[selected]} votes. 
            <br />

            <button onClick={handleVoteClick} >Vote</button>
            <button onClick={handleNextClick} >Next Anecdote</button>

            <h1>Most Voted Anecdote</h1>
            
            <MostVoted votes={votes} />
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)