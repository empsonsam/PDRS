import React from "react";
import {
  ExpandableTile,
  TileAboveTheFoldContent,
  TileBelowTheFoldContent,
} from "carbon-addons-iot-react";

const CollapsibleGuidance = (props) => {
  return (
    <div className="guidance-box">
      <ExpandableTile>
        <TileAboveTheFoldContent>
          <div>Guidance</div>
        </TileAboveTheFoldContent>
        <TileBelowTheFoldContent>
          <div>{props.guidance}</div>
        </TileBelowTheFoldContent>
      </ExpandableTile>
    </div>
  );
};

export default CollapsibleGuidance;
