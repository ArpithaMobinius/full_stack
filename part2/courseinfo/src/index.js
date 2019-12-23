import React from 'react'
import ReactDOM from 'react-dom'

let Course = (props) => {
  return <h1> {props.course}</h1>;
}

let Header = (header) => {
  return header.course.map((part, index) => {
    return (
      <div key={part.id}>
        <h3> {part.name}</h3>
        <Content part={part.parts} />
        <Total part={part.parts}/>
      </div>
    )
  })
}


let Content = (content) => {
    return content.part.map((eachPart, index) => {
        return (
            <p key={index}> {eachPart.name} {eachPart.exercises}</p>      
        )
    });

  }

let Total = (total) => {
    let total_count = total.part.reduce((s,p)=>{return s+ p.exercises}, 0)
  return <p> <b>total of {total_count} exercises</b> </p>

}

const App = () => {
    // const-definitions
    const course_name = "Web development curriculum"
    const course = [{
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
    return (
      <div>
        <Course course={course_name} />
        <Header course={course} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))