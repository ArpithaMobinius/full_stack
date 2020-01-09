import React, {useState, useEffect} from 'react'
import personService from '../services/persons'
import "../index.css";

const Persons = (props) => {

  const changeColor=(state, name, id)=>{
    
    const copy = [...allClicks]
      copy[state] = !(copy[state])   
      setAll(copy)
    if (window.confirm(`Delete ${name}`)) {
      console.log('checking');
      personService.deletePerson(id).then(()=>{
        props.setNotification(`${name} is deleted`)
        setTimeout(()=> {props.setNotification(null)}, 5000)
        copy[state] = !(copy[state])   
        setAll(copy)
          personService
          .getAll()
            .then(response => {
              console.log('response.data', response.data);
              props.setPersons(response.data)})
          }).catch(e=> {props.setError(`error in deleting ${name} in phonebook`); setTimeout(()=> {props.setError(null)}, 5000)})
    } 

  }

    let filtered = props.persons.filter(person => person.name.match(new RegExp(props.filterName, 'i')))

    let initial = Array.apply(null, new Array(filtered.length)).map(Number.prototype.valueOf,0);
    const [allClicks, setAll] = useState(initial)
    useEffect(() => {
    let initial = Array.apply(null, new Array(filtered.length)).map(Number.prototype.valueOf,0);
      setAll(initial)
    }, [filtered.length])

    return filtered.map((persons, index) => {
      return (
        <div key={index}>
          {persons.name} {persons.number} 
          <button className={allClicks[index] ? "blueButton" : "whiteButton"} onClick={()=>{changeColor(index, persons.name, persons.id );  }}>delete</button>
        </div> 
      )
    })
  }

export default Persons;
