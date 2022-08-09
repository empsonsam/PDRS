import React from "react";
import { Button, ButtonSet } from "carbon-components-react";
import { ArrowRight32, Add32 } from "@carbon/icons-react";

const SetOfButtons = () => (
  <ButtonSet>
    <Button kind="secondary" size="sm" renderIcon={ArrowRight32}>
      Retrieve Report Data
    </Button>
    <Button kind="primary" size="sm" renderIcon={Add32}>
      Generate New Report
    </Button>
  </ButtonSet>
);

export default SetOfButtons;
