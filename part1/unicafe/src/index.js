import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
    return(
        <table>
        <tbody>
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        </tbody>
        </table>

        )
  }

const Statistics = (props) => {
    let all = props.good + props.neutral + props.bad;
    
    return(
        <div>
          <Statistic text="good" value ={props.good} />
          <Statistic text="neutral" value ={props.neutral} />
          <Statistic text="bad" value ={props.bad} />
          <Statistic text="all" value ={all} />
          <Statistic text="average" value ={all/3} />
          <Statistic text="positive" value ={`${((props.good/all) * 100) || 0} %`} />
        </div>
        )
  }



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <b>Give Feedback<br></br></b> 
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
      <b><br></br>Statistics</b>
      <Statistics good={good} bad={bad} neutral={neutral}/> 
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)