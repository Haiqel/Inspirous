import React from "react";
import {
  MainBodyStyle,
  ThreeDImageStyle,
  SecondContainerStyle,
  MiniContainer,
  Introduction,
  RightLines,
} from "../../css/ourroadmap/ourroadmapstyle";
//stateless component here

export const Body = () => (
  <div id="MainBody" style={{...MainBodyStyle}}>
    <div id="3DImage" style={{...ThreeDImageStyle}}>
      {/*This division is for placing the 3D image*/}
    </div>
    <div id="secondContainer" style={{...SecondContainerStyle}}>
      <div className="firstMiniContainer" style={{...MiniContainer}}>
        <h1 style={{...Introduction}}>Introduction</h1>
        <p style={{...Introduction,fontSize : "30px"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="secondMiniContainer" style={{...MiniContainer,
      display: "flex",flexDirection : "column", justifyContent : "space-evenly"}}>
        <div style={{...RightLines}}></div>
        <div style={{...RightLines}}></div>
        <div style={{...RightLines}}></div>
      </div>
    </div>
    {/*This division musst have a z-axis greater than the second-container*/}
    <div id="MultipleLineContainer">
    </div>
  </div>
)
