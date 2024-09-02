import React, {Component, JSX} from "react";
import {Home} from "./Home";
import {About} from "./About";
import {Socials} from "./Socials"
type Page = {kind: "Home"} | {kind: "About"} | {kind: "Skills"} | {kind: "Projects"} | {kind: "Socials"};

type AppState = {
  page: Page; // Page we want to be on
};

/** Displays the UI of the Flashcard application. */
export class App extends Component<{}, AppState> {

  constructor(props: {}) {
    super(props);

    this.state = {page: {kind: "Home"}};
  }

  render = (): JSX.Element => {
    if (this.state.page.kind === "Home") {
      return <Home onAboutClick={this.doAboutClick} onSkillClick={this.doSkillClick} onProjectClick={this.doProjectClick}  onSocialClick={this.doSocialClick}/>;
    } else if (this.state.page.kind === "About"){
      return <About onMainClick={this.doMainPageClick}/>
    } else if (this.state.page.kind === "Socials") {
      return <Socials onMainClick={this.doMainPageClick}/>
    } else {
      return <h1>Hi</h1>
    }
  };

  doAboutClick = (): void => {
    this.setState({page: {kind: "About"}});
  };

  doSkillClick = (): void => {
    this.setState({page: {kind: "Skills"}});
  };

  doProjectClick = (): void => {
    this.setState({page: {kind: "Projects"}});
  };

  doMainPageClick = (): void => {
    this.setState({page: {kind: "Home"}});
  }

  doSocialClick = (): void => {
    this.setState({page: {kind: "Socials"}})
  }
}
