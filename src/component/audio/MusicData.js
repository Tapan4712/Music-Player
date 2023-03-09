import song_the_boys from "./Theboys.mp3"
import song_divine from "./Divine.mp3"
import song_woh from "./Woh.mp3"
import song_aasman from "./Aasman.mp3"
import song_bhindu from "./Bhidu.mp3"
import song_channa from "./Channa.mp3"
import song_dance from "./Dance.mp3"
import song_jaan from "./Jaan.mp3"
import song_ranjaha from "./Ranjha.mp3"
import song_company from "./Company.mp3"
import song_saathi_ray from "./saathi re.mp3"
import song_har_har_shambhu from "./Har Har Shambhu Shiv Mahadeva  हर हर शभ  Har Har Shambhu  Abhilipsa Panda ft. Jeetu Sharma.mp3"

import img_the_boys from "./Images/the boys.jpg"
import img_divine from "./Images/divine.jpg"
import img_woh from "./Images/woh.jpg"
import img_aasman from "./Images/aasman.jpg"
import img_bhidu from "./Images/bhidu.jpg"
import img_channa from "./Images/channa.jpg"
import img_dance from "./Images/dance.jpg"
import img_jaan from "./Images/jaan.jpg"
import img_ranjha from "./Images/Ranjha.jpg"
import img_company from "./Images/company.jpg"
import img_saathi_ray from "./Images/saathi re.jpg"
import img_har_har_shambhu from "./Images/shambhu.jpg"



let musics = [song_the_boys,song_divine,song_woh,song_aasman,song_bhindu,song_channa,song_dance,song_jaan,song_ranjaha,song_company,song_saathi_ray,song_har_har_shambhu]
let musicImage = [img_the_boys,img_divine,img_woh,img_aasman,img_bhidu,img_channa,img_dance,img_jaan,img_ranjha,img_company,img_saathi_ray,img_har_har_shambhu]
let musicNames = ["TheBoys","Divine","Woh","Aasman","Bhidu","Channa","coffin Dance","Jaan","Ranjha","Company","saathi_ray","har_har_shambhu"]
let description =["Bones : Imagine Dragon || The Boys Song ","DIVINE - Baazigar feat. Armani White","WOH – Ikka x Dino James x Badshah","Aasman ko chhuker dekha | hanuman return song","Bhidu | Dialogue With Beats | Ft. Johnny Lever","Channa Ve - Lyrical |vicky & Bhumi","Coffin Dance Remix Bass Boost Song With Original Video","","Ranjha – Official Audio | Shershaah | Sidharth–Kiara","","","Adiyogi Mahadev Bholiya (feat. Aditya Gadhvi)"]
let musicDataArray=[]

for (const i in musics){
    console.log("i == ",i);
    musicDataArray.push(
        {
           song_file: musics[i],
           length: "4.35m",
           description:description[i],
           song_name: musicNames[i],
           image: musicImage[i],
           index: parseInt(i) + 1 
        }
    )
}

export default musicDataArray