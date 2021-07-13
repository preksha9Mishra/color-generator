import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#D54C4C').all(10))

  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error);
    }
  }
  console.log(list)
  return (
    <>
      <section className ="container">
          <h3>Color Generator</h3>
          <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder = "#CD113B" value = {color} onChange = {(e) => {setColor(e.target.value)}}></input>
            <button type = "submit" className = "btn" >Submit</button>
          </form>
      </section>
      <section className = "colors">
            {list.map((oneColor,index) => {
              return (
              <SingleColor key = {index} {...oneColor} index = {index} hex= {oneColor.hex}/>
              )
            })}
      </section>
    </>
  )
}

export default App
