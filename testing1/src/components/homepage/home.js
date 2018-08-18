import React, {Component} from "react";
import { NavBar } from "../shared/navbar";
import { Body } from "./body";
import { SiteMap } from "../shared/sitemap";
//import css
//import "../../css/homepage/navbar.css";
//import "../../css/homepage/body.css";
//stateless components

export const Home = () => (
  <div>
    <NavBar />
    <Body />
    <SiteMap />
  </div>
  )
