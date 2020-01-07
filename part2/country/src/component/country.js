import React , { useState} from 'react'
import '../country.css';

const Languages = (props) => {
    return props.languages.map((language, index) => {
        return (
            <ul>
                <li key={index}> {language.name}</li>  
            </ul>    
        )
    })
}

const ShowCountry = ({show, details}) => {
    let country = details
    if (!show ) return null
    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p> 
            <p>population {country.population}</p> 
            <h3>languages </h3>
            <Languages languages = {country.languages}/>
            <img src={country.flag} alt="" style={{height:'10vh'}}></img>
        </div>     
        ) 
}

const Country = (props) => {
  const [ details, setDetails ] = useState({})
  const [ show, setShow ] = useState(0)

    if (typeof props.country === 'string') {
        return (
            <p> {props.country}</p>      
            )
    } else { 
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
            let display = props.country.map((country, index) => {
                return (
                    <div key={index}>
                        {country.name}
                        <button onClick={()=>{setDetails(country); setShow(1)}}>show</button>
                    </div> 
                )
            }) 
            return (
                <div>
                    {display}
                    <ShowCountry show={show} details={details}/>
                </div>
            )
        }
    }
  }

export default Country;