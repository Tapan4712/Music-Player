import "./Header.css"

import logoLogo from "./logo.svg"

function Header() {

    return (

        <div className="Main">
            <div className="Logo">
                <img src={logoLogo} alt=""/>
                <h1>Music <span>Player</span></h1>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Like</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
