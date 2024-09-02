import React, { Component } from "react";
import "./About.css";

type AboutProps = {
    onMainClick: () => void,
}

type AboutState = {
    currentIndex: number,
    content: string[],
}

export class About extends Component<AboutProps, AboutState> {
    private interval: NodeJS.Timer | undefined;
    constructor(props: AboutProps) {
        super(props);

        this.state = {
            currentIndex: 0,
            content: [
                "studying Computer Science",
                "a Coder",
                "a Software Developer",
                "looking for a full-time SWE position",
            ]
        };
    }

    componentDidMount() {
        this.startAnimation();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    startAnimation() {
        this.interval = setInterval(() => {
            const { currentIndex, content } = this.state;
            const nextIndex = (currentIndex + 1) % content.length;
            this.setState({ currentIndex: nextIndex });
        }, 2000); // Change this value to adjust animation speed
    }

    render = () => {
        const { content, currentIndex } = this.state;
        return (
            <div>
                <div>
                    <button className="btn" onClick={this.doMainClick}>Home</button>
                </div>
                <div className="about-container">
                    <h1 className="about-heading">Hi my name is <span className="cool-color">Denny</span></h1>
                    <div className="animated-text">
                        <h2 className="semi-bold">
                            I am <span className="content-color">{content[currentIndex]}</span>
                        </h2>
                        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" className="wheel-and-hamster">
                            <div className="wheel"></div>
                            <div className="hamster">
                                <div className="hamster__body">
                                    <div className="hamster__head">
                                        <div className="hamster__ear"></div>
                                        <div className="hamster__eye"></div>
                                        <div className="hamster__nose"></div>
                                    </div>
                                    <div className="hamster__limb hamster__limb--fr"></div>
                                    <div className="hamster__limb hamster__limb--fl"></div>
                                    <div className="hamster__limb hamster__limb--br"></div>
                                    <div className="hamster__limb hamster__limb--bl"></div>
                                    <div className="hamster__tail"></div>
                                </div>
                            </div>
                            <div className="spoke"></div>
                        </div>
                    </div>
                </div>
                <div className="info-container" style={{position: "absolute", top:'40%', maxWidth: 500}}>
                    <div>
                        <h1 className="info-heading">Who I Am</h1>
                        <p>A Chinese Born American Studying Computer Science @ The University of Washington</p>
                    </div>
                </div>
                <div className="info-container" style={{position: 'absolute', top: '40%', left: '80%', transform: 'translateX(-50%)'}}>
                    <h1 className="info-heading">Music</h1>
                    <iframe style={{borderRadius: 12, width: 500}}
                            src="https://open.spotify.com/embed/playlist/2HUtiJnaFvAYt8Zk2cMqcq?utm_source=generator"
                            width="100%" height="400" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy">
                    </iframe>
                </div>
            </div>
        )
    };


    doMainClick = () => {
        this.props.onMainClick();
    }
}
