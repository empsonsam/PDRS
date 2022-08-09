import { SimplePagination } from "carbon-addons-iot-react";
import React from "react";

const Pagination = (props) => {
  // Set the state of page number in parent component upon clicking to change the page number, so accurately reflected
  function onPageSelected(e) {
    props.setPageNumber(e);
  }

  return (
    <SimplePagination
      page={props.pageNumber}
      maxPage={Math.ceil(props.length / 8)} // length of the list
      onPage={(e) => {
        onPageSelected(e);
      }}
      totalItems={props.length}
      totalItemsText={props.text}
    />
  );
};

export default Pagination;
