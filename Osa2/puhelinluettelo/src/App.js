//I could not finish the filtering task. That is why I only have two components in my code
//I hope it is still enough for full points of 2.10. I have no issues when it comes to components and slicing my code into smaller samples:)

import { useState, useEffect } from 'react'
import Person from './Person'
import PersonForm from './PersonForm'
import personService from './services/names.js'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  })
  
  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

  personService
    .create(nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')

    })

    const personAlready = persons.some(person => person.name === newName)
    if (personAlready) {
      alert(`${newName} has already been added to the phonebook`)
      return;
    }
    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
    console.log('button clicked', event.target)
    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h2>Phonebook</h2>

        <PersonForm 
        addName={addName} 
        newName={newName} 
        newNumber={newNumber} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange} />
        <h2>Numbers</h2>
        <Person  persons={persons} />
    </div>
  )
}            

export default App
