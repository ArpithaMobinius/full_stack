import React from 'react'
  
  let Course = (header) => {
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

  export default Course;