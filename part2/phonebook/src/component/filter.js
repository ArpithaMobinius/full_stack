import React from 'react'

const Filter = (props) => {
    return (
        <div>
            filter shown with: <input name='filter' onChange={(event) => props.setfilterName(event.target.value)}/>
        </div>
    )
}

export default Filter;
