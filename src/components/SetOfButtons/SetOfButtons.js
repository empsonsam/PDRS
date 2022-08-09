import React from "react";
import { useNavigate } from "react-router-dom";
import "./SetOfButtons.css";
const SetOfButtons = (props) => {
  let navigate = useNavigate();
  return (
    <div
      data-testid="wizard-inline-footer"
      className="WizardFooter__StyledFooterButtons-sc-18uwrwe-0 jSocgX"
    >
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
            onClick={() => {
              navigate("/wizard", {
                state: {
                  fromRetrieve: false,
                  prevDataToFill: new Array(10),
                },
              });
            }}
            data-testid="Button"
            tabIndex="0"
            className="iot--btn bx--btn bx--btn--primary"
            type="button"
          >
            Create a new report
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetOfButtons;
