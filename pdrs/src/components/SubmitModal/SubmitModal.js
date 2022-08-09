import React, { useState } from "react";
import {
  ComposedModal,
  ModalHeader,
  ModalFooter,
  Button,
} from "carbon-addons-iot-react";
import ReactDOM from "react-dom";
function SubmitModal() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {typeof document === "undefined"
        ? null
        : ReactDOM.createPortal(
            <ComposedModal open={true} onClose={() => setOpen(false)}>
              <ModalHeader label="Modal label">
                <h1>
                  Are you sure you want to add the "Speech to Text" service to
                  the node-test app?
                </h1>
              </ModalHeader>
              <ModalFooter
                primaryButtonText="OK"
                secondaryButtonText="Cancel"
              />
            </ComposedModal>,
            document.body
          )}
      <Button kind="primary" onClick={() => setOpen(true)}>
        Open modal
      </Button>
    </>
  );
}

export default SubmitModal;
