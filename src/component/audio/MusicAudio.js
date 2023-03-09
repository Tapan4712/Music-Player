import React, { useState } from "react";

import './Home.css';

import backbtn from './Images/backward.png';
import forwardbtn from './Images/forward.png';
import playbtn from './Images/play.svg'
import pausebtn from './Images/pause.svg';

import musicDataArray from "./MusicData";

function MusicAudio() {
window.onkeypress= function(event){
    if (event.which ===  32) {
        if (flag===1 ) {
            setFlag(0)
            console.log(flag);
            let logoImgElement = document.getElementById("play-stop")
            logoImgElement.src = playbtn
            pausesound()
            circleBig.classList.remove('animate')
            circleSm.classList.remove('animate')
        } else {
            setFlag(1)
            console.log(flag)
            let logoImgElement = document.getElementById("play-stop")
            logoImgElement.src = pausebtn
            playsound()
            circleBig.classList.add('animate')
            circleSm.classList.add('animate')
        }
    }
}

    const [music, setMusic] = useState(musicDataArray[0]);
    const [flag, setFlag] = useState(0)
    console.log(music.index, "index");
    const circleBig = document.querySelector("#circle-bg")
    const circleSm = document.querySelector("#circle-sm")
     

    function playsound() {
    
        var sfx = document.getElementById("audioTrackTag");
        sfx.play();
    }
    function pausesound() {
        var sfx = document.getElementById("audioTrackTag")
        sfx.pause();
    }
    

    return (
        <>
            <header className="heading">Tapan Dhakecha's Chillhop</header>
            <nav>
                <h1>Find Song Name</h1>
                <div className="SearchBar">
                    <input className="find" type="text" placeholder="Search Song Name"/>
                    <button>Search</button>
                </div>
            </nav>
            <section id="player">
                <div className="container">
                    <div className="collection">
                        <p className="lead">Chill-out is a loosely defined form of popular music characterized by slow tempos and
                        relaxed moods. Identified as a modern type of easy listening.</p>
                        <hr className="hor"/>
                        <div id="musicbox" className="musicbox">
                            <h2>Chillhop Playlist</h2>
                            {musicDataArray.map((vel,index)=>{
                                return(
                                <button className="songBtn" 
                                onClick={()=>{
                                    setMusic(musicDataArray[index])
                                    setFlag(0)
                                    let logoImgElement = document.getElementById("play-stop")
                                    logoImgElement.src = playbtn
                                    circleBig.classList.remove('animate')
                                    circleSm.classList.remove('animate')
                                }}
                                >{(index>=10)?`${index}. ${vel.song_name}`:`0${index}. ${vel.song_name}`}</button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="playbox">
                       
                        <h1 className="heading">Tapan Dhakecha's Player</h1>
                        <div className="controller">
                            <div id="circle-bg" className="circle">
                                <div id="circle-sm" className="circle2"><img id="cover" src={music.image} className="fluid-img" alt=""/></div>
                            </div>
                            <div className="songs">
                                <h2 id="song-name">{music.song_name}</h2>
                                <div className="controls">

                                    <audio id="audioTrackTag"   src={music.song_file} >
                                    </audio>
                                    <br />
                                    <button onClick={() => {
                                        console.log(music);
                                        if(music.index === 1) {
                                            console.log("else");
                                        } else {
                                            setMusic(musicDataArray[music.index - 2])
                                        }

                                        let audioTag = document.getElementById("audioTrackTag")
                                        audioTag.src = music.song_file

                                        let logoImgElement = document.getElementById("play-stop")
                                        logoImgElement.src = playbtn
                                        setFlag(0)
                                        circleBig.classList.remove('animate')
                                        circleSm.classList.remove('animate')

                                    }}><img id="backward" className="media-btn" src={backbtn} alt="" /></button>

                                    <button
                                        onClick={() => {
                                            console.log(music);
                                            if (flag===1 ) {
                                                setFlag(0)
                                                console.log(flag);
                                                let logoImgElement = document.getElementById("play-stop")
                                                logoImgElement.src = playbtn
                                                pausesound()
                                                circleBig.classList.remove('animate')
                                                circleSm.classList.remove('animate')
                                            } else {
                                                setFlag(1)
                                                console.log(flag)
                                                let logoImgElement = document.getElementById("play-stop")
                                                logoImgElement.src = pausebtn
                                                playsound()
                                                circleBig.classList.add('animate')
                                                circleSm.classList.add('animate')
                                            }

                                        }}

                                    ><img id="play-stop" className="media-btn" src={playbtn} alt=""/></button>



                                    <button onClick={() => {
                                        console.log(music);

                                        if(music.index === 10) {
                                            console.log("if");
                                        } else {
                                            setMusic(musicDataArray[music.index])
                                        }

                                        let audioTag = document.getElementById("audioTrackTag")
                                        audioTag.src = music.song_file
                                        let logoImgElement = document.getElementById("play-stop")
                                        logoImgElement.src = playbtn
                                        setFlag(0)
                                        circleBig.classList.remove('animate')
                                        circleSm.classList.remove('animate')
                            
                                    }}><img id="forward" className="media-btn" src={forwardbtn} alt=""/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MusicAudio;