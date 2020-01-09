import React from 'react'

const Persons = (props) => {
    let filtered = props.persons.filter(person => person.name.match(new RegExp(props.filterName, 'i')))
  
    return filtered.map((persons, index) => {
      return (
        <p key={index}> {persons.name} {persons.number}</p>      
      )
    })
  }

export default Persons;
