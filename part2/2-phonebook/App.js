/* FULLSTACK OPEN - Phonebook */

import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import contactService from './services/contacts'
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [showAll, setShowAll] = useState(true)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)
  const [error, setError] = useState(null)

  /**
   * GET para obtener las personas de `db.json`
   * Están servidas con *json-server*
   */
  useEffect(() => {
    contactService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  /**
   * Si `showAll` === `true`, `personsToShow` contendrá todas las personas.
   * Si no, contendrá solo las que pasen el filtro. 
   */
  const personsToShow = showAll
    ? persons
    : persons.filter(person => {
      // Comparamos todo en lowerCase "case-insensitive"
      return person.name.toLowerCase().includes(searchName.toLowerCase());
    })

  /* EVENT HANDLERS */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  /**
   * Cuando se cambie el valor del filtro,
   * `showAll` se cambiará a _false_,
   * haciendo que `personsToShow` sea reevaluado.
   */
  const handleSearchName = (event) => {
    setSearchName(event.target.value)
    setShowAll(false)
  }

  /**
   * Recibe el id y nombre de la persona
   * a eliminar de la lista.
   */
  const removeName = (id, name) => {
    contactService.deleteContact(id, name)
    
    // Actualiza las personas a renderizar
    // excluyendo a la que coincide con el
    // id recientemente eliminado.
    setPersons(persons.filter(person => person.id !== id))

    setNotificationMessage(
      `${name} has been removed from server.`
    )
    
    setTimeout(() => {
      setNotificationMessage(null)
      setError('')
    }, 5000)    
  }

  /**
   * Agrega un nombre que no esté 
   * duplicado a la lista `persons`
   */
  const addName = (event) => {

    event.preventDefault();
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    // Check for duplicates
    const isDuplicate = persons.filter(person => person.name === newName)

    if (isDuplicate.length !== 0) {
      const result = window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`)

        // Aceptar
        if (result) {  

          // Encontrar la persona a modificar
          const personToChange = persons.find(person => person.name === newName)

          // Create a new object (copy of the duplicate)
          // and modify its number
          const changedPerson = {...personToChange, number: newNumber}

          // Update the person's number on the db
          // Then update persons with the new modification
          // (This logic could be extracted)
          contactService
            .update(changedPerson.id, changedPerson)
            .then(returnedName => {
              setPersons(persons.map(person => 
                person.id !== changedPerson.id
                ? person
                : returnedName
              ))
            })
            .catch(error => {
              setError('error')
              setNotificationMessage(
                `Information of ${changedPerson.name} has already been removed from server.`
                )
              
              setTimeout(() => {
                setNotificationMessage(null)
                setError('')
              }, 5000)
            })
          
          setNotificationMessage(`${changedPerson.name} number was updated`)
          setTimeout(() => {
            setNotificationMessage(null)
          }, 5000)

          return true
        } else {
          return false // User canceled modification
        }
    }

    // Create a new object and add it to the db
    contactService
      .create(nameObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact))
        setNewName('')
        setNewNumber('')
      })
    
      setNotificationMessage(`${newName} was added to the phonebook`)

      setTimeout(() => {
        setNotificationMessage(null)
      }, 5000)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification type={error} message={notificationMessage} />

      <Filter filterHandler={handleSearchName} />

      <h2>New contact</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        NameSubmit={addName}
        NameChange={handleNameChange}
        NumberChange={handleNumberChange}
      />

      <h2>Contacts</h2>
      <Persons personsList={personsToShow} handleDelete={removeName} />

    </div>
  )
}

export default App