import React , { useState, useEffect} from 'react'
import axios from 'axios'
import '../country.css';

const Languages = (props) => {
    if (!props.languages) return null
    return props.languages.map((language, index) => {
        return (
            <ul>
                <li key={index}> {language.name}</li>  
            </ul>    
        )
    })
}

const Weather = (props) => {
    if (props.success) {
        const {current = {}, location = {}} = props;
        const [icon = null] = current.weather_icons;
        const {weather_descriptions = {}} = current;
        return (
            <div>
                <h3>Weather in {location.name}</h3>
                <p>temperature: {current.temperature} Celsius</p>
                <img src={icon} alt=''/>
                <p>wind: {weather_descriptions.wind_speed} direction {weather_descriptions.wind_dir} </p>
            </div>
        )
    }
    return null;
}

const Details = ({country}) => {
    const [weather, setWeather] = useState({});
    const hook = () => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=812550e976d1726d73cbc5fcc6b207eb&query=${country.capital}`)
        .then((res)=> {setWeather(res.data)})
    }
    useEffect(hook);
    return(
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p> 
            <p>population {country.population}</p> 
            <h3>languages </h3>
            <Languages languages = {country.languages}/>
            <img src={country.flag} alt="" style={{height:'10vh'}}></img>
            <Weather {...weather} />
        </div>
    )
}

const ShowCountry = ({show, details}) => {
    let country = details
    if (!show ) return null
    return (
        <Details country={country}/>     
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
                <Details country={props.country}/>         
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