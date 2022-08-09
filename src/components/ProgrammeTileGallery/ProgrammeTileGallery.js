import React from "react";
import { StatefulTileGallery } from "carbon-addons-iot-react";
import { useNavigate } from "react-router-dom";

const ProgrammeTileGallery = (props) => {
  const navigate = useNavigate();
  const buttonAdmin = document.querySelector(".adminButton");

  if (buttonAdmin) {
    buttonAdmin.addEventListener("click", () => {
      navigate("/admin");
    });
  }

  return (
    <StatefulTileGallery
      buttonClassName={"adminButton"}
      hasButton={props.roleID === "1" ? true : false}
      buttonText="Admin"
      numColumns={3}
      numRows={3}
      galleryData={[
        {
          galleryItems: props.programmeList.slice(
            (props.pageNumber - 1) * 8,
            props.pageNumber * 8
          ),
          id: "programmes_section",
          sectionTitle: "Programmes",
        },
      ]}
      hasSearch
      hasSwitcher
      i18n={{
        arrowIconDescription: "Expand/Collapse",
        gridText: "Grid",
        listText: "List",
        searchCloseButtonText: "Clear search",
        searchIconDescription: "Search",
        searchPlaceHolderText: "Search for something",
      }}
      isButtonDisabled={false}
      title={
        props.roleID === "1" ? "Portfolio of Programmes" : "Programme Dashboard"
      }
    ></StatefulTileGallery>
  );
};

export default ProgrammeTileGallery;
