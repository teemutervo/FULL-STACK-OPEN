import React from "react";

const Person = (props) => {

    return (
   <div>
      {props.persons.map((person) => (
      <p key= {person.name}>{person.name} {person.number}</p>))}
      
    </div>
    )
  }


export default Person