import React from "react";
import { getSelectedOption } from "../OptionFunctions";
import "./scss/SelectedFilterDisplay.scss";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const SelectedFilterDisplay = ({ filters }) => {
  const makeFilterList = () => {
    return Object.keys(filters)
      .filter(filterId => filterId >= 2)
      .map(filterId => {
        if (filters[filterId].selectedCategory) {
          return (
            <>
              <span className="filterTitle"> Additional Filter -</span>
              <span style={{ marginLeft: ".4%" }}>
                {" "}
                {filters[filterId].selectedCategory} :
              </span>
              <span className="italic">
                {" "}
                {getSelectedOption(filters, filterId)};
              </span>
            </>
          );
        } else {
          return <></>;
        }
      });
  };

  function showCompare() {
    if (filters[1].selectedCategory) {
      return (
        <>
          <span className="filterTitle"> Compare By -</span>
          <span style={{ marginLeft: ".4%" }}>
            {filters[1].selectedCategory}
          </span>
        </>
      );
    } else {
      return <></>;
    }
  }

  return (
    <>
      <Box
        display="flex"
        height="100%"
        alignItems="center"
        flexDirection="row"
        flexWrap="nowrap"
        style={{ fontSize: "1.5rem", padding: "0% 1%" }}
      >
        <span className="filterTitle">Data Series -</span>
        <span style={{ marginLeft: ".4%" }}>{filters[0].selectedCategory}</span>
        {makeFilterList()}
        {showCompare()}
      </Box>
    </>
  );
};
export default SelectedFilterDisplay;
