import React from "react";

import COMPANYAudio from "../../audio/Company.mp3"

function Date1() {
    let COMPANY= new Audio(COMPANYAudio)
    return ( 

        <>
        <div>
            {new Date().getDate()}

            <button
                    onClick={() => {
                        COMPANY.play()
                    }}            
            >Play</button>

            <button 
                    onClick={() => {
                        COMPANY.pause()
                    }}
            >Pause
            </button>
        </div>
        </>

     );
}

export default Date1;