import React from "react";
import { Modal } from "carbon-components-react";

const AdminPassiveModal = (props) => {
  return (
    <Modal
      open={props.openModal}
      passiveModal
      modalHeading={props.message}
      onRequestClose={() => props.toggle(false)}
    ></Modal>
  );
};

export default AdminPassiveModal;
