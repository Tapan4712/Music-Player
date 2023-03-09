import React, { useState } from "react"


function Abc (){
    let [count, setAbc ] = useState(0);

    let increase = () => {
        setAbc( count += 1)
    }

    let decrease = () => {
        setAbc( count -= 1)
    }

    return (

        <div className="abc">
            
            <button onClick={increase}>+</button>
            <h1>example:{count}</h1>
            <button onClick={decrease}>-</button>
        </div>
        
        )
}

export default Abc