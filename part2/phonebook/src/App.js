import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)

  const mySubmitHandler = (event) => {
    event.preventDefault();
    const check = persons.filter(persons =>  persons.name === newName)

    if(check.length) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([
        ...persons,
        {
          name: newName,
          number: newNumber
        }
      ]);
   }
  }

  const nameChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberChangeHandler = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={mySubmitHandler}>
        <div>
          name: <input name='name' onChange={nameChangeHandler}/>
        </div>
        <div>number: <input name='number' onChange={numberChangeHandler} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons, index) => <div key={index}>{persons.name} {persons.number}</div>)}
    </div>
  )
}

export default App