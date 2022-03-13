import React from "react";
import logo from './logo.png';
import './Home.css';
import YoutubeEmbed from "../components/videoPlayer/YoutubeEmbed";

const HomePage = () => {
    return (
        <main className="homePage">
            <section className="firstSection">
                <header className="headerContainer">
                    <img className="headerLogo" src={logo} alt="logo_img"></img>
                    <h1>Rentabilize</h1>
                </header>
                <div className="videoContainer">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                    </div>
            </section>
            <section className="secondSection">
                O que você irá aprender:
            </section>
            <section className="thirdSection">
                Quem sou eu
            </section>


        </main>
    )
}
export default HomePage;