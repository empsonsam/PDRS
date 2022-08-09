import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { DashboardContext } from "../../context/DashboardContext";

export const ColorToggleButton = (props) => {
  const dashboardContext = useContext(DashboardContext);
  const [alignment, setAlignment] = useState(
    props.colourSelected ? props.colourSelected : "Red"
  );
  const theme = createTheme({
    palette: {
      error: {
        main: "#ff0000",
      },
      warning: {
        main: "#ff9900",
      },
      success: {
        main: "#009933",
      },
    },
  });

  const handleChange = (event) => {
    setAlignment(event.target.value);
    switch (props.ragNumber) {
      case 1:
        dashboardContext.setRag1(event.target.value);
        break;
      case 2:
        dashboardContext.setRag2(event.target.value);
        break;
      case 3:
        dashboardContext.setRag3(event.target.value);
        break;
      case 4:
        dashboardContext.setRag4(event.target.value);
        break;
      case 5:
        dashboardContext.setRag5(event.target.value);
        break;
      case 6:
        dashboardContext.setRag6(event.target.value);
        break;
      case 7:
        dashboardContext.setRag7(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <ToggleButtonGroup value={alignment} exclusive onChange={handleChange}>
          <h3 style={{ position: "relative", bottom: "4px" }}>
            RAG Status:&nbsp;&nbsp;&nbsp;
          </h3>
          <ToggleButton
            className="toggle-button"
            value="Red"
            color="error"
            sx={{
              color: "black",
              minWidth: "100px",
              fontWeight: "600",
              fontSize: "17px",
              padding: "5px 20px 0 20px",
            }}
          >
            Red
          </ToggleButton>
          <ToggleButton
            value="Amber"
            color="warning"
            sx={{
              color: "black",
              minWidth: "100px",
              fontWeight: "600",
              fontSize: "17px",
              padding: "5px 20px 0 20px",
            }}
          >
            Amber
          </ToggleButton>
          <ToggleButton
            value="Green"
            color="success"
            sx={{
              color: "black",
              minWidth: "100px",
              fontWeight: "600",
              fontSize: "17px",
              padding: "5px 20px 0 20px",
            }}
          >
            Green
          </ToggleButton>
        </ToggleButtonGroup>
      </ThemeProvider>
    </div>
  );
};
