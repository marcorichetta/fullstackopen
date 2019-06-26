/* FULLSTACK OPEN - Phonebook */

import React from 'react';

/**
 * Recibe un objeto con personas
 * y devuelve una lista de items por cada persona
 * También recible una función para eliminar contactos.
 */
const Persons = ({ personsList, handleDelete }) => {

    return (
        <ul>
            {personsList.map(person =>
                <li key={person.name}>
                    {person.name} {person.number}

                    {/* onClick envía el id y name de la persona 
                    a la función removeName() definida en App */}
                    <button 
                        onClick={() => handleDelete(person.id, person.name)}>
                        Delete
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Persons;