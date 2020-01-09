import React, { useState } from 'react'
import personService from '../services/persons'

const PersonForm = (props) => { 
    
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState(0)
    
    const addPerson =()=>{
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
      .create(personObject)
      .then(response => {
        props.setPersons(props.persons.concat(response))
        setNewName('')
        setNewNumber('')
        props.setNotification(`${newName} is added to the phonebook`)
        setTimeout(()=> {props.setNotification(null)}, 5000)
      }).catch(e=> {props.setError(`error in adding ${newName} in phonebook`); setTimeout(()=> {props.setError(null)}, 5000)})
    }

    const updatePerson =(id)=>{
      const personObject = {
        name: newName,
        number: newNumber
      }
      personService
      .update(id, personObject)
      .then(() => {
        setNewName('')
        setNewNumber('')
        props.setNotification(`Number of ${newName} is updated`)
        setTimeout(()=> {props.setNotification(null)}, 5000)
        personService
          .getAll()
            .then(response => {
              props.setPersons(response.data)})
      }).catch(e=> {props.setError(`error in updating ${newName} in phonebook`); setTimeout(()=> {props.setError(null)}, 5000)})
    }

    const mySubmitHandler = (event) => {
        event.preventDefault();
        const check = props.persons.filter(persons =>  persons.name === newName && persons.number!== newNumber)
    
        if(check.length) {
          alert(`${newName} is already added to phonebook, replace the old number with a new one`)
          updatePerson(check[0].id)

        } else {
          addPerson()
        }
      }
    
    return (
        <form onSubmit={mySubmitHandler}>
        <div>
            name: <input name='name' onChange={(event) => setNewName(event.target.value)}/>
        </div>
        <div>
            number: <input name='number' onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
            <button type="submit">add</button>
        </div>
        </form>
    )
}

export default PersonForm;
