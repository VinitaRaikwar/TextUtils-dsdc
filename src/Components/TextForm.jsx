import React, { useState } from 'react'

export default function Textform() {
    const[text,setText]=useState("Enter Your text here");

    const handleOnChange = (event) =>{
        let newtext =  event.target.value
        setText(newtext);
    }
    const handleOnClick = (event) =>{
        console.log("----->Text",text)
        let newtext = text.toUpperCase()
        setText(newtext);
    }
    const handleClick = (event) =>{
      let newtext = text.toLowerCase()
      setText(newtext);
    }
  return (
    <div>
      <div class="mb-3">
        <h1>Enter Your Text</h1>
        <textarea
        value={text}
        className="form-control"
        onChange={handleOnChange}
        id="text"
        rows="3"></textarea>
    <button onClick={handleOnClick} className='btn btn-primary'>change to toUpperCase</button>
    <button onClick={handleClick} className='btn btn-primary m-3'>change to LowerCase</button>

    </div>
    </div>
  )

}