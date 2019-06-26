/* FULLSTACK OPEN - Phonebook */

import React from 'react';

/**
 * Recibe una función `handleSearchName()` que será ejecutada
 * cada vez que el valor del input cambie.
 */

const Filter = ({ filterHandler }) => {
    return (
        <>
            Filter:
            <input onChange={filterHandler} />
        </>
    )
}

export default Filter;