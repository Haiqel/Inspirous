import React, {Component} from "react";
//import "../../css/homepage/body.css";
// let the css be in components as well
import { BodyRight, MainBody } from "../../css/homepage/bodyStyle.js"

export const Body = () => (
  //div for main body
  <div style={{...MainBody}}>
    This is the main body!
    <div style={BodyRight}>
    </div>
  </div>
)
