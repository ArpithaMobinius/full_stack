import React, { useState } from 'react'
import Filter from './component/filter'; 
import PersonForm from './component/form'; 
import Persons from './component/person'; 

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filterName, setfilterName ] = useState('')

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter setfilterName={setfilterName}/>

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>

      <Persons persons={persons} filterName={filterName}/>
    </div>
  )
}

export default App