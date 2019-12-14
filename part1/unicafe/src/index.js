import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
    return(
        <div>
          <Statistic text="good" value ={...} />
          <Statistic text="neutral" value ={...} />
          <Statistic text="bad" value ={...} />
          // ...
        </div>
        )
  }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)