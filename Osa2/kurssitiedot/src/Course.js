import React from 'react'

const Course = ({course}) => {
    return (
    <div>
      <Header title={course.name}/>
      <Content parts={course.parts} />
      
    </div>
    )
  }
  const Header = ({title}) => {
    return (
    <div>
      <h2>{title}
      </h2>
    </div>
    )
  }
  
  const Part = ({ part }) => {
    return(
        <li>{part.name} {part.exercises}</li>
    )
  }
  
  const Content = (props) => {
    const {parts} = props
  
    return (
  
      <ul style={{ listStyleType: 'none' }}>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
  
      <Total parts={parts}/>
      </ul>
    )
  }
  
  const Total = (props) => {
    const {parts} = props;
      const total = parts.reduce( (s, p) => s += p.exercises, 0);
      return (
        <li style={{fontWeight: 'bold'}}>Total of {total} exercises</li>
      )
    }

  export default Course