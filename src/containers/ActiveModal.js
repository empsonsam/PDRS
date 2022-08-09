import React from "react";
import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "carbon-components-react";
import { useNavigate } from "react-router-dom";
import { DashboardContext } from "../context/DashboardContext";
import { ReactSession } from "react-client-session";
const ActiveModal = (props) => {
  const username = ReactSession.get("username");
  const navigate = useNavigate();
  //Open Values for the passive modal it brings up, NOT the open values for this modal
  const { open } = React.useContext(DashboardContext);
  const [openValue, setOpenValue] = open;
  return (
    <ComposedModal open={props.isOpen} onClose={() => props.toggle(false)}>
      <ModalHeader label="Submit Report?" />
      <ModalBody>
        Report will appear as submitted by user {username} Are you sure you want
        to submit? You will NOT be able to edit your submission afterwards and
        any pre-existing report for this week will be overwritten
      </ModalBody>
      <ModalFooter>
        <Button
          kind="secondary"
          onClick={() => {
            props.toggle(false);
          }}
        >
          Back
        </Button>
        <Button
          kind="primary"
          onClick={() => {
            setOpenValue(true);
            props.isFromRetrieve ? navigate(-2) : navigate(-1);
            props.submitHandler();
            props.addingReport();
          }}
        >
          Submit
        </Button>
      </ModalFooter>
    </ComposedModal>
  );
};

export default ActiveModal;
