import React, { useRef } from "react";

import { TextArea } from "carbon-addons-iot-react";
import CollapsibleGuidance from "../CollapsibleGuidance/CollapsibleGuidance";
import { ColorToggleButton } from "../RadioButtons/NewRadioButtons";

import "./Assessment.css";
const Assessment = (props) => {
  const inputRef = useRef();

  return (
    <div className="whole assessment-whole">
      <div className="name">
        <h2>
          <strong>{props.title}</strong>
        </h2>
      </div>

      <div className="radio">
        {props.fromRetrieve ? (
          <h3>
            RAG Status: <strong>{props.ragStatus}</strong>
          </h3>
        ) : (
          props.showRag && (
            <div>
              <ColorToggleButton
                ragNumber={props.ragNumber}
                colourSelected={props.colourSelected}
              />
            </div>
          )
        )}
      </div>

      <div className="textArea">
        <TextArea
          id="text"
          labelText="Comments"
          maxLength={500}
          placeholder={props.prevData}
          disabled={props.retrieve}
          onChange={(e) => {
            props.setComment(e.target.value);
          }}
          defaultValue={props.prevDataToFill}
          ref={inputRef}
        />
      </div>

      <div className="guidance">
        <CollapsibleGuidance guidance={props.guidance} />
      </div>
    </div>
  );
};

Assessment.defaultProps = { showRag: true };

export default Assessment;
