import React from 'react'
import ReactDOM from 'react-dom'

let Header = (header) => {
    return <h1> {header.course}</h1>;
  }

let Content = (content) => {
    return content.part.map((part, index) => {
        return <p key={index}> {part.name} {part.exercises}</p>;        
    });
  }

let Total = (total) => {
    let total_count = total.part.reduce((s,p)=>{return s+ p.exercises}, 0)
  return <p> <b>total of {total_count} exercises</b> </p>

}

const App = () => {
    // const-definitions
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 3
        }
      ]
    }
    return (
      <div>
        <Header course={course.name} />
        <Content part={course.parts} />
        <Total part={course.parts} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))