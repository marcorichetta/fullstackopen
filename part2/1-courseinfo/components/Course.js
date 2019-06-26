/* FULLSTACK OPEN - Course Info */

import React from 'react';

const Course = ({ course }) => {

    return (
        <>        
            {course.map(course => 
                // CADA ITEM EN UNA LISTA DEBE TENER UNA KEY
                // Cada vez que use map() en React, voy a recordar esto.
                <div key={course.id}>
                    <Header props={course} />
                    <Content props={course.parts} />
                    <Total props={course.parts} />                    
                </div>
            )}
        </>
    )
}

// Function Component
const Header = ({ props }) => {
    return (
        <h2>{props.name}</h2>
    )
}

const Content = ({ props }) => {
    return (
        <div>
            {
                /*  For each object in props, create
                    a Part Component
                */
                props.map(part => 
                    <Part 
                        key={part.id}
                        name={part.name}
                        exercises={part.exercises}
                    />
                )
            }         
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Total = ({ props }) => {
    const parts = props;

    // Sum all the exercises from parts
    const totalExercises = parts.reduce((sum, parts) => sum + parts.exercises, 0)

    return (

        // JSX Whitespace != HTML Whitespace
        
        <p>
            <b>
                Total of Number of exercises {totalExercises} 
            </b>
        </p>
    )
}

export default Course;