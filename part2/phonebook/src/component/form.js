import React, { useState } from 'react'
import axios from 'axios'


const PersonForm = (props) => { 
    
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState(0)

    const mySubmitHandler = (event) => {
        event.preventDefault();
        const check = props.persons.filter(persons =>  persons.name === newName)
    
        if(check.length) {
          alert(`${newName} is already added to phonebook`)
        } else {
            const personObject = {
              name: newName,
              number: newNumber
            }

            axios
            .post('http://localhost:3001/persons', personObject)
            .then(response => {
              props.setPersons(props.persons.concat(response.data))
              setNewName('')
              setNewNumber('')
            })

          //   props.setPersons([
          //   ...props.persons,
          //   {
          //     name: newName,
          //     number: newNumber
          //   }
          // ]);
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
