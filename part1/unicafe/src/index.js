import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {ButtonToolbar, Button} from 'react-bootstrap';
// const Statistics = (props) => {
//     return(
//         <div>
//           <Statistic text="good" value ={...} />
//           <Statistic text="neutral" value ={...} />
//           <Statistic text="bad" value ={...} />
//           // ...
//         </div>
//         )
//   }

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <b>Give Feedback</b> 
      <ButtonToolbar>
        <Button>Good</Button>
        <Button>Neutral</Button>
        <Button>Bad</Button>
      </ButtonToolbar>
      <b>Statistics</b>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)