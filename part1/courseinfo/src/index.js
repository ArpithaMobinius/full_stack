import React from 'react'
import ReactDOM from 'react-dom'

let Header = (header) => {
    return <h1> {header.course}</h1>;
  }

let Content = (content) => {
    return content.part.map(part => {
        return <p> {part.name} {part.exercises}</p>;        
    });
  }

let Total = (total) => {
    let total_count = 0;
    total.part.forEach(part => {
        total_count = total_count + part.exercises;
  });
  return <p> Number of exercises {total_count}</p>

}

const App = () => {
    // const-definitions
    const course = 'Half Stack application development';
    const part = [
        { name:'Fundamentals of React',
          exercises: 10},
        { name:'Using props to pass data',
          exercises: 7},
        { name:'State of a component',
          exercises: 14}]
    return (
      <div>
        <Header course={course} />
        <Content part={part} />
        <Total part={part} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))