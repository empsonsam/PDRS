import React from "react";
import { useNavigate } from "react-router-dom";

const SetOfButtonsRetrieving = (props) => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="block">
        <div className="one">
          <button
            onClick={() => {
              navigate(-1);
            }}
            data-testid="Button"
            tabIndex="0"
            className="iot--btn bx--btn bx--btn--secondary"
            type="button"
          >
            Cancel
          </button>
        </div>

        <div className="two">
          <button
            style={{ paddingRight: "5px" }}
            onClick={() => {
              navigate("/wizard", {
                state: {
                  fromRetrieve: true,
                  prevDataToFill: props.prevDataToFill,
                },
              });
            }}
            data-testid="Button"
            tabIndex="0"
            className="iot--btn bx--btn bx--btn--primary"
            type="button"
          >
            Create a new report using as template
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetOfButtonsRetrieving;
