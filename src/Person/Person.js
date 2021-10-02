import React from 'react';
import './Person.css'
const person=(props)=>{
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I live in {props.place}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
}
export default person;

// Hello
