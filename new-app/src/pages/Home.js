import React from "react";
import logo from './logo.png';
import './Home.css'

const HomePage = () => {
    return (
        <div className="homePage">
            <header className="headerContainer">
                <img className="headerLogo" src={logo} alt="logo_mg"></img>
                <p>Rentabilize</p>
            </header>
            <body>
                <section className="videoContainer">
                    <video className="videoContent" src={'https://www.youtube.com/watch?v=5qap5aO4i9A'} width="600" height="300" controls="controls" autoplay="true" />
                </section>
            </body>
        </div>
    )
}
export default HomePage;