/* FULLSTACK OPEN - Phonebook */

import React from 'react';

/**
 * Recibe los valores newName y newNumber.
 * También recibe las funciones para el cambio de nombre, número y
 * para cuando se hace submit del form.
 */

const PersonForm = ({ newName, newNumber, NameSubmit, NameChange, NumberChange }) => {
    return (
        <>
            <form onSubmit={NameSubmit}>
                <div>
                    Name:
                <input 
                    value={newName}
                    onChange={NameChange}
                />
                </div>
                <div>
                    Number:
                <input 
                    value={newNumber}
                    onChange={NumberChange}
                />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm;