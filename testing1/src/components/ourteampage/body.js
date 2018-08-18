import React from "react";
import {
  containerDivStyle,
  founderDivStyle,
  FounderHeading,
  FounderTitle,
  FounderImages,
  FounderImageContainer,
  FounderTitleContainer,
  TrackRecordDivStyle,
  IdvTrackRecord,
  CircleIconStyle,
  LineStyle
} from "../../css/ourteampage/ourteamStyles";

export const Body = () => (
  <div id="containerDiv" style={{...containerDivStyle}}>
    <div id="founderDiv" style={{... founderDivStyle}}>
      <h3 style={{... FounderHeading}}> Founders </h3>
      <div id="FounderImageContainer" style={{...FounderImageContainer}}>
        <div  style={{... FounderImages}}>Haiqel</div>
        <div  style={{... FounderImages}}>Kai En</div>
        <div  style={{... FounderImages}}>Carlsen</div>
      </div>
      <div id="FounderTitleContainer" style={{...FounderTitleContainer}}>
        <div style={{...FounderTitle}}>Co-Founder / CTO </div>
        <div style={{...FounderTitle}}>Co-Founder / COO </div>
        <div style={{...FounderTitle}}>Co-Founder / CIO </div>
      </div>
    </div>
    <div id="trackRecordDiv" style={{... TrackRecordDivStyle}}>
      <div style={{...IdvTrackRecord}}>
      {/*Haiqel's Div */}
        <div style={{...CircleIconStyle}}>Circle icon here
        </div>
        <div className="line" style={{...LineStyle}}>
        </div>
      </div>
      <div style={{...IdvTrackRecord}}>
      {/*Kai En's Div */}
        <div style={{...CircleIconStyle}}>Circle icon here
        </div>
        <div className="line" style={{...LineStyle}}>
        </div>
      </div>
      <div style={{...IdvTrackRecord}}>
      {/*Carseln's Div*/}
        <div style={{...CircleIconStyle}}>Circle icon here
        </div>
        <div className="line" style={{...LineStyle}}>
        </div>
      </div>
    </div>
  </div>
)
