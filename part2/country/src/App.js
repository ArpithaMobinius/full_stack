import React, { useState, useEffect  } from 'react'
import Filter from './component/filter'; 
import Country from './component/country'; 
import axios from 'axios'
const baseUrl = 'https://restcountries.eu/rest/v2/name'


const App = () => {
  const [ country, setcountry] = useState([])
  const [ filterName, setfilterName ] = useState('')

  useEffect(() => {
    if (filterName) {
      axios
        .get(`${baseUrl}/${filterName}`)
        .then(response => {
          let countries = response.data.length <= 10 ? response.data : 'Too many matches, specify another filter'
          setcountry(countries)
        }).catch(err => {
          setcountry([])
        })
    } else {
      setcountry([])
    }
  },[filterName])

  return (
    <div>

      <Filter setfilterName={setfilterName} setcountry={setcountry}/>

      <Country country={country} filterName={filterName} />
    </div>
  )
}

export default App