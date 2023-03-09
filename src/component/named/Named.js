import React, { useState } from 'react'


import Clock from "../clock/Clock"

export default function Named(props) {

    let [theme, updateTheme] = useState(0)

    return (
     <>  
        <button type='submit' onClick={() => {
            console.log("edwkuh  ", theme);
            if (theme) {
                console.log("if");
                document.body.style.color = "#fff"
                updateTheme(0)
            } else {
                console.log("else");
                document.body.style.color = "#000"
                updateTheme(1)
            }
        }}>Change theme</button>
       <h1>
                Name :- {props.details.name}
                <br />
                Number :- {props.details.number}
                <br />
                village :- {props.details.village}
                <br />
                <Clock/>
            </h1>
       </> 
    )
}
