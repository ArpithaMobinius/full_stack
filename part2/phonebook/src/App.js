import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')

  const mySubmitHandler = (event) => {
    event.preventDefault();
    const check = persons.filter(persons =>  persons.name === newName)

    if(check.length) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons([
        ...persons,
        {
          name: newName
        }
      ]);
   }
  }

  const myChangeHandler = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={mySubmitHandler}>
        <div>
          name: <input name='name' onChange={myChangeHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((persons, index) => <div key={index}>{persons.name}</div>)}
    </div>
  )
}

export default App