import React from "react";
import logo from './logo.png';
import './Home.css';
import YoutubeEmbed from "../components/videoPlayer/YoutubeEmbed";
import NeonTriang from './triangulo.png'

const HomePage = () => {
    return (
        <main className="homePage">
            <section className="firstSection">
                <header className="headerContainer">
                    <img className="headerLogo" src={logo} alt="logo_img"/>
                </header>
                <div style={{color:'white',textAlign:'center',fontSize:'250%'}}>Rentabilize</div>
                <div className="videoContainer">
                    <YoutubeEmbed embedId="rokGy0huYEA" />
                    </div>
            </section>
            <section className="secondSection">
                <img className="imgTriangulo" src={NeonTriang} alt="img_triangulo"/>
                <h2>O que você vai aprender?</h2>

            </section>
            <section className="thirdSection">
                Beneficios
            </section>


        </main>
    )
}
export default HomePage;