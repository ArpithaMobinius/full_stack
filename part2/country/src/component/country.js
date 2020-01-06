import React from 'react'

const Languages = (props) => {
    return props.languages.map((language, index) => {
        return (
            <ul>
                <li key={index}> {language.name}</li>  
            </ul>    
        )
    })
}

const Country = (props) => {
    if (typeof props.country === 'string') {
        return (
            <p> {props.country}</p>      
            )
    } else { 
        console.log(props.country.length, props.country);
           
        if (props.country.length === 1) {
            return (
                <div>
                    <h2>{props.country[0].name}</h2>
                    <p>capital {props.country[0].capital}</p> 
                    <p>population {props.country[0].population}</p> 
                    <h3>languages </h3>
                    <Languages languages = {props.country[0].languages}/>
                    <img src={props.country[0].flag} alt="" style={{height:'10vh'}}></img>
                </div>     
                ) 
        } else {
        return props.country.map((country, index) => {
            return (
            <p key={index}> {country.name}</p>      
            )
        }) }
    }
  }

export default Country;