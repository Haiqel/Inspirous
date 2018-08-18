import React from "react";
import { SiteMapStyle, SiteMapDivStyle } from "../../css/shared/siteMapStyle";
//stateless components here
export const SiteMap = () => (
  <div style={SiteMapStyle}>
    <div style={SiteMapDivStyle} id="leftMostDiv">3rd Div</div>
    <div style={SiteMapDivStyle}>2nd Div</div>
    <div style={{...SiteMapDivStyle,borderRight: ""}}>1st Div</div>
  </div>
)
