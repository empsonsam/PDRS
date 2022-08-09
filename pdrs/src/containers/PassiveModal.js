import React from "react";
import { Modal } from "carbon-components-react";
import { DashboardContext } from "../context/DashboardContext";

const PassiveModal = () => {
  const { open } = React.useContext(DashboardContext);
  const [openValue, setOpenValue] = open;
  return (
    <div>
      <Modal
        open={openValue}
        passiveModal
        modalHeading="You have successfully submitted a report"
        onRequestClose={() => setOpenValue(false)}
      ></Modal>
    </div>
  );
};

export default PassiveModal;
