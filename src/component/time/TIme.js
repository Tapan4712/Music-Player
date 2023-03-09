import React, { useState } from 'react'

function Time() {

    let [time, setTime] = useState(new Date().toTimeString())

    setInterval(() => {
        setTime(new Date().toTimeString())
    }, 1000);

    return ( <>
        {new Date().toTimeString()}
    </> )
}

export default Time