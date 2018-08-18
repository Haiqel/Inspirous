import React, { Component } from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import { Home } from "./components/homepage/home";
import {OurTeam} from "./components/ourteampage/ourteam";
import {OurRoadMap} from "./components/ourroadmap/ourroadmap";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
export class App extends Component {
  render() {
    return (
        <div>
          <Home />
        </div>
    );
  }
}

const AppRender = (
  <Router>
      <Switch>
        <Route exact path={"/Home"} component={Home}/>
        <Route exact path={"/OurTeam"} component={OurTeam}/>
        <Route exact path={"/OurRoadMap"} component={OurRoadMap}  />
        <Route exact path={"/"} component={App}/>
      </Switch>
  </Router>
)

//ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
ReactDOM.render(AppRender,document.getElementById("root"));
