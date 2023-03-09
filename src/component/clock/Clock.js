import React, { useState }  from 'react'

function Clock(){
    let dateNTime = new Date()
    let [time, updateTime] = useState(dateNTime)

    setInterval(() => {
        updateTime(new Date())
    }, 1000)

    return (  <>

        Date :- {time.getDate()}
        <br/>
        Time :- {time.toTimeString()}
        </>)
}

export default Clock