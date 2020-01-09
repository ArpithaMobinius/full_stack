import React, { useState, useEffect } from 'react'
import Filter from './component/filter'; 
import PersonForm from './component/form'; 
import Persons from './component/person'; 
import Notification from './component/notification'
import personService from './services/persons'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ filterName, setfilterName ] = useState('')
  const [ notification, setNotification] = useState(null);
  const [ error, setError ] = useState(null);

  useEffect(() => {
    personService
    .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <Notification notification={notification} error={error} />
      {/* <Notification message={error} error/> */}

      <h2>Phonebook</h2>

      <Filter setfilterName={setfilterName}/>

      <h3>Add a new</h3>

      <PersonForm persons={persons} setPersons={setPersons} setNotification={setNotification} setError={setError} />

      <h3>Numbers</h3>

      <Persons persons={persons} setPersons={setPersons} filterName={filterName} setNotification={setNotification} setError={setError}/>
    </div>
  )
}

export default App