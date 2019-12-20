import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initial = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
  const [allClicks, setAll] = useState(initial)
  const [largest, setLargest] = useState(0)

  const handleSetSelected = () => {
    let select = Math.floor(Math.random() * Math.floor(6));
    setSelected(select)
  }

  const handleVotes = () => {
    const copy = [...allClicks]
    copy[selected] += 1    
    setAll(copy)
    setLargest(Math.max(...copy))
  }

  return (
    <div>
      <h3>Anecdotes of the day</h3>
        {props.anecdotes[selected]}
        <p>has {allClicks[selected]} votes</p>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleSetSelected}>next anecdote</button>
        <h3>Anecdotes of the day</h3>
        <p> {props.anecdotes[allClicks.indexOf(largest)]}</p>
       <p>has {largest} votes</p>

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)