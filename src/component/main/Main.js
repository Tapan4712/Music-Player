import React, { useState } from 'react'
import Date1 from '../date/Date1';
import Time from '../time/TIme';

function Main() {
    
    let [mode, setMode] = useState("Date")
    
    return ( <>

        <button onClick={() => {
            setMode("Date")
        }} >
            date
        </button>

        <button onClick={() => {
            setMode("Time")
        }}>
            Time
        </button>

        <br/>

     {   (mode == "Date")? <Date1/> : <Time/>}


    </> );
}

export default Main;