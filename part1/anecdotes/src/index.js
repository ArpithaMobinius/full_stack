import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const Votes = (props) => {
//     // let clicks = props.allClicks.filter(click => click === props.selected)
//     return (
//         <p>has {clicks.length} votes</p>
//     )
// }

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const initial = Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0);
  const [allClicks, setAll] = useState(initial)


  const handleSetSelected = () => {
    let select = Math.floor(Math.random() * Math.floor(6));
    // setAll(allClicks.concat(select))
    setSelected(select)
  }

  const handleVotes = () => {
    const copy = [...allClicks]
    copy[selected] += 1
    setAll(copy)
  }

  return (
    <div>
        {props.anecdotes[selected]}
        <br></br>
        <p>has {allClicks[selected]} votes</p>
        {/* <Votes allClicks={allClicks} selected= {selected} /> */}
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleSetSelected}>next anecdote</button>

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