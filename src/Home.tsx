import React, { Component, JSX } from "react";
import "./Home.css";

type PageProps = {
    onAboutClick: () => void,
    onSkillClick: () => void,
    onProjectClick: () => void,
    onSocialClick: () => void,
}

export class Home extends Component<PageProps> {

    render = (): JSX.Element => {
        return (
            <div style={{ position: "relative", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <h1 className="home-title" style={{ fontFamily: "monospace", textAlign: "center", fontSize: "150px", position: "relative", zIndex: 20 }}>
                        Denny Zhou</h1>
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                    <button type={"button"} className="navbar-button" onClick={this.doAboutClick}>About</button>
                    <button type={"button"} className="navbar-button" onClick={this.doSkillClick}>Skills</button>
                    <button type={"button"} className="navbar-button" onClick={this.doProjectClick}>Projects</button>
                    <button type={"button"} className="navbar-button" onClick={this.doSocialClick}>Socials</button>
                </div>
                {/* Render bubbles */}
                <div className="bubbles-container" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
                    {Array.from({ length: 80 }).map((_, index) => (
                        <div key={index} className="bubble" style={{ position: "absolute",
                            left: `${Math.random() * 100}vw`,
                            top: `${Math.random() * 100}vh`,
                            right: `${Math.random() * 100}vw`,
                            bottom: `${Math.random() * 100}vh`,
                            animationDelay: `${Math.random() * 10}s`}} />
                    ))}
                </div>
            </div>
        );
    };
    doSkillClick = (): void => {
        this.props.onSkillClick();
    };

    doProjectClick = (): void => {
        this.props.onProjectClick();
    };

    doAboutClick = (): void => {
        this.props.onAboutClick()
    };

    doSocialClick = (): void => {
        this.props.onSocialClick();
    }
}
