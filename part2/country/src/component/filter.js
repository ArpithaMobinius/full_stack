import React from 'react'

const Filter = (props) => {
    return (
        <div>
            find countries: <input name='filter' onChange={(event) => {props.setfilterName(event.target.value); props.setcountry([])}}/>
        </div>
    )
}

export default Filter;