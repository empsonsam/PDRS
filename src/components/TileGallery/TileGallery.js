import React from "react";
import { StatefulTileGallery } from "carbon-addons-iot-react";

const TileGallery = (props) => {
  return (
    <StatefulTileGallery
      numColumns={3}
      numRows={3}
      buttonText="Admin"
      galleryData={[
        {
          galleryItems: props.projectList.slice(
            (props.pageNumber - 1) * 8,
            props.pageNumber * 8
          ),
          id: "projects_section",
          sectionTitle: "Projects",
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
      isButtonDisabled={true}
      title="Project Dashboard"
    ></StatefulTileGallery>
  );
};

export default TileGallery;
