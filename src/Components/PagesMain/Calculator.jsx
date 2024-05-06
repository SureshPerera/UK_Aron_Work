import React from 'react'
import "../Css/calculator.css";
import { ListGroup } from 'react-bootstrap';
function Calculator() {
    const inch = 100;
  return (
    <div className='padding'>
      <div className='calHead'>UK Iron Work PVT LTD</div>
        <div className='fullCal'>
            <label >
                 Unit:
            </label>
            <select name='units'>
                <option value={inch}>Inch</option>
                <option value={inch}>MM</option>
                <option value={inch}>cm</option>
            </select>
            <br/>
            <ListGroup>
                <label>Height</label>
                <input type='text' placeholder='Enter Height'></input>
                <br/>
                <label>Width</label>
                <input type='text' placeholder='Enter Width'></input>
                <br/>
                <label>Rate</label>
                <input type='text' placeholder='Enter Rate'></input>
                <br/>
                <label>Square Feet</label>
                <input type='text' placeholder=''></input>
                <br/>
                <label>Total Price</label>
                <input type='text' placeholder=''></input>
                <br/>
            </ListGroup>
            <button type='submit' id='btnSubmit'>Submit</button>
            <bn/>
            <button type='reset' id='btnReset'>Reset</button>
        </div>
      
    </div>
  )
}

export default Calculator
