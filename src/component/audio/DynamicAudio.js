import React,{useEffect, useState} from "react";
import './Audio.css'
import'./api.css'
import axios from "axios";
import musicDataArray from "./MusicData";
import forwardbtn from "./Images/forward.png"
import backwardbtn from "./Images/backward.png"
import playbtn from "./Images/play.svg"
import pausebtn from "./Images/pause.svg"
import "./player.css";
import bgImg from "./Images/bg.jpg"
import Loading from "./Images/loading1.gif"
import { useRef } from "react";
// import bgImg2 from "./Images/bgGif.gif"
function DynamicAudio() {
    window.onkeypress= function(event){
        if (event.which ===  32 ) {
            if (flag===1 ) {
                console.log(flag);
                let logoImgElement = document.getElementById("play-stop")
                logoImgElement.src = playbtn
                pausesound()
            } else {
                console.log(flag)
                let logoImgElement = document.getElementById("play-stop")
                logoImgElement.src = pausebtn
                playsound()
            }
        }
    }
    const [music, setMusic] = useState(musicDataArray[0])
    const [flag, setFlag] = useState(0)
    const[data,setData]=useState(null)
    console.log(music.index, "index");
    const[dataArray,setDataArray]=useState([])
    const[apiImg, setApiImg] =useState([])
    const scroll = useRef(true)
    useEffect(()=>{
        
    },[])
 
    const[fug,setFug]=useState(0)
    useEffect(()=>{
    (async (dataArray)=>{
    let api = await axios.get("https://63b3a4715901da0ab383f360.mockapi.io/api1");
    let api2 = await axios.get("https://picsum.photos/500")
    // let apiData = api.data
    // let apiData2 = api2.data
    axios.all([api,api2]).then(
        axios.spread((...allData)=>{
            const allApi= allData[0].data
            const allApi2= allData[1].config.url
            console.log(allApi);
            console.log(allApi2);
            setDataArray(allApi)
            setApiImg(allApi2)
            setData(true)
        })
    )
    console.log(api.data)
    console.log(dataArray)
    console.log(api2);
    return dataArray
    })();},[])

    
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
        {/* <div className="apiButton">
        <button onClick={()=>{
            if (apiData) {
                setApiData(0)
                document.getElementById("contain").style.display='block'
            } else {
                setApiData(1)
                document.getElementById("contain").style.display='none'
            }
            
        }}>About</button>
        </div> */}
            {/* <div className="contain" id="contain" style={{backgroundImage:`url(${bgImg})`}}>
            {dataArray.map((val,index) => {
                return(
                <div className="api"key={index}>
                    <div className="apiImg"style={{backgroundImage:`url(${apiImg})`}}>
                        <img src={val.avatar} alt=""/>
                    </div>
                    <div className="apiData">
                        <section>ID No.: {val.id}</section>
                        <span>{val.name}</span>
                        <section>{val.createdAt}</section>
                    </div>
                </div>
                )
            })}
            </div> */}
            <button onClick={()=>{
                if(fug){
                 setFug(0)
                }else{
                    setFug(1)
                }
            }}>fud</button>
            
            <div className="infos" style={{backgroundImage: `url(${data?bgImg:Loading})`}}>
                   
                    <section className="cards-wrapper" >
                        {dataArray.map((val,index)=>{
                            return(
                                <div className="card-grid-space"key={index}>
                            
                                <div className="card" style={{ backgroundImage: `url(${apiImg})`}} >
                                
                                <div className="datas">
                                    
                                    <img src={val.avatar} alt="" />
                                    <h1>{val.name}</h1>
                                    <p>{val.createdAt}</p>
                                    <div className="date">7 Mar 2023</div>
                                    <div className="tags">
                                        <div className="tag">{val.id}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                        
                    </section>
                    <button ref={scroll} className="scroll-top" onClick={()=>{
                        scroll.current=false;
                    }}>&#8679;</button>
                </div>
            
    <div className="WebAudio">
        <div className="section">
            {musicDataArray.map((val,index)=>{
                return(
                    <div style={{display:"contents"}} key={index}>
                    <button className="box" onClick={()=>{
                        document.getElementById('cont').style.display='flex';
                        setMusic(musicDataArray[index])
                        setFlag(0)
                        console.log(flag)
                        console.log(music);
                        document.getElementById("play-stop").src = playbtn
                        
                        
                    }}>
                        <img src={val.image} alt="" className="content-img"/>
                        <h2>&#9834; {val.song_name}</h2>
                        <p>{val.description}</p>
                    </button>
                    </div>
                )
            })}
        </div>
        <div className="container-1" id="cont">
        
            <div className="contain_player">
                <img src={music.image} alt="" />
            </div>
            <div className="details">
                <h3>{music.song_name}</h3>
                <span>{music.description}</span>
            </div>
            <div className="btns">
                <audio id="audioTrackTag"   src={music.song_file} >
                </audio>
                <button onClick={()=>{
                    console.log(music);
                    if(music.index === 1) {
                        setMusic(musicDataArray[musicDataArray.length - 1])
                    } else {
                        setMusic(musicDataArray[music.index - 2])
                    }

                    let audioTag = document.getElementById("audioTrackTag")
                    audioTag.src = music.song_file

                    let logoImgElement = document.getElementById("play-stop")
                    logoImgElement.src = playbtn
                    setFlag(0)
                }}>
                    <img src={backwardbtn} alt="" />
                </button>
                <button onClick={()=>{
                    console.log(music);
                    if (flag===1 ) {
                        setFlag(0)
                        console.log(flag);
                        let logoImgElement = document.getElementById("play-stop")
                        logoImgElement.src = playbtn
                        pausesound()
                    } else {
                        setFlag(1)
                        console.log(flag)
                        let logoImgElement = document.getElementById("play-stop")
                        logoImgElement.src = pausebtn
                        playsound()
                    }
                }}>
                    <img id="play-stop" src={playbtn} alt="" />
                </button>
                <button onClick={()=>{
                    console.log(music);

                    if(music.index === 12) {
                        setMusic(musicDataArray[0])
                    } else {
                        setMusic(musicDataArray[music.index])
                    }

                    let audioTag = document.getElementById("audioTrackTag")
                    audioTag.src = music.song_file
                    let logoImgElement = document.getElementById("play-stop")
                    logoImgElement.src = playbtn
                    setFlag(0)
                }}>
                    <img src={forwardbtn} alt="" />
                </button>
                <button onClick={()=>{
                    document.getElementById('cont').style.display='none'
                    pausesound()
                    let logoImgElement = document.getElementById("play-stop")
                    logoImgElement.src = playbtn
                    setFlag(0)
                }}>&#x2716;</button>
            </div>  
        </div>    
    </div>
    </>
     );
}

export default DynamicAudio;