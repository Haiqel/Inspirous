import React, {Component} from "react";
import "../../css/homepage/navbar.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
//import {Home} from "../homepage/home";
//import {OurTeam} from "../ourteampage/ourteam";
//stateless component
export const NavBar = () => (
        <div>
          <ul>
            <li><Link to={"/ContactUs"}> Contact Us </Link></li>
            <li><Link to={"/OurRoadmap"}> Our Roadmap </Link></li>
            <li><Link to={"/OurTeam"}> Our Team </Link></li>
            <li><Link to={"/Home"}> Home </Link></li>
            <li id="InspirousHome"> Inspirous </li>
          </ul>
        </div>

  )
