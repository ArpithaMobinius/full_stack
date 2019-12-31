import React, { useState } from 'react'

const DisplayNumbers = (props) => {
  let filtered = props.persons.filter(person => person.name.match(new RegExp(props.filterName, 'i')))

  return filtered.map((persons, index) => {
    return (
      <p key={index}> {persons.name} {persons.numbers}</p>      
    )
  })
}

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState(0)
  const [ filterName, setfilterName ] = useState('')

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

  const filterChangeHandler = (event) => {
    setfilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with: <input name='filter' onChange={filterChangeHandler}/>
      </div>
      <h3>Add a new</h3>
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
      <DisplayNumbers persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App