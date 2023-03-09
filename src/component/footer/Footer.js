import "./Footer.css"


import facebookLogo from "./facebook.png"
import githubLogo from "./github.png"
import instagramLogo from "./instagram.png"
import linkedinLogo from "./linkedin.png"
import redditLogo from "./reddit.png"
import twitterLogo from "./twitter.png"
import youtubeLogo from "./youtube.png"

function Footer() {
    return (

        <div className="main">
                <section>FOLLOW ON</section>
            <div className="link">
                <img src={facebookLogo} alt=''/>
                <img src={githubLogo} alt=''/>
                <img src={instagramLogo} alt=''/>
                <img src={linkedinLogo} alt=''/>
                <img src={redditLogo} alt=''/>
                <img src={twitterLogo} alt=''/>
                <img src={youtubeLogo} alt=''/>
            </div>

            <div className="footer-copy">
                    &copy; 2019 All Rights Reserved By Tapan Dhakecha &#9829;
            </div>
        </div>

    )
}

export default Footer;