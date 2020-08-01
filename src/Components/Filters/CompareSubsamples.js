import React, { useEffect, useState } from "react";
import graphLabels from "../graphLabels";
import { useSelector } from "react-redux";
import "../../Components/scss/dataSeries.scss";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ordered } from "../orderedGraphLabels";
import { Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import NoAccessModal from "./NoAccessModal";
import { separateOperations } from "graphql";
import { allowed } from "../orderedGraphLabels";

const CompareSubSamples = () => {
  const reducerSub = useSelector(
    state => state.compareSubSamplesReducer.compareSub
  );

  const {
    filterSelectorName,
    filters,
    setFilters,
    ControlComponent,
    index,
    formatGroupLabel,
    setUpdateUrlFlag,
    FilterBoxOptions,
    updateUrlFlag,
    xVar,
    colourStyles,
    open
  } = reducerSub;
  const classes = useStyles();

  const access = useSelector(state => state.tierReducer.access);
  const [noAccess, setNoAccess] = useState(false);

  function changeOption(e) {
    const selectedName = e.target.dataset.selectvalue;
    if (
      access === "paid" ||
      (access === "free" && allowed.includes(selectedName))
    ) {
      setUpdateUrlFlag(!updateUrlFlag);
      let optionFlags = {};
      graphLabels[
        `${FilterBoxOptions.default[selectedName].value.type}`
      ].labels.forEach(option => {
        optionFlags = {
          ...optionFlags,
          [option]: false
        };
      });
      setFilters({
        ...filters,
        [index]: {
          ...filters[index],
          selectedCategory: selectedName, //option
          selectedTableColumnName:
            FilterBoxOptions.default[selectedName].value.type,

          selectedTable: FilterBoxOptions.default[selectedName].value.query,
          selectedOption: undefined,
          selectableOptions: { ...optionFlags }
        }
      });
    } else {
      setNoAccess(true);
    }
  }

  const [displayDrop, setDisplayDrop] = useState(false);

  function compareOpen() {
    return (
      <>
        <Grid item xs={12} className={classes.filterButton}>
          <Box display="flex" height="100%" alignItems="center">
            <div className={classes.filterText}>
              <span className={classes.filterName}> Compare Data</span>
            </div>
            <ExpandLessIcon className={classes.filterArrow}></ExpandLessIcon>
          </Box>
        </Grid>
        <Grid container xs={12} className={classes.optionsContainer}>
          {ordered.map(e => {
            if (
              e === "DEMOGRAPHICS" ||
              e === "INFORMATION INSIGHTS" ||
              e === "BUSINESS INSIGHTS"
            ) {
              return <p className={classes.super}>{e}</p>;
            } else if (allowed.includes(e)) {
              return (
                <span
                  className="selectable"
                  data-selectvalue={e}
                  onClick={changeOption}
                >
                  {e}
                </span>
              );
            } else {
              return (
                <span
                  className={access === "paid" ? "selectable" : "limited"}
                  data-selectvalue={e}
                  onClick={changeOption}
                >
                  {" "}
                  {e}
                </span>
              );
            }
          })}
        </Grid>
      </>
    );
  }

  const displayDropOptions = () => {
    if (displayDrop === true && noAccess === false) {
      return <>{compareOpen()}</>;
    } else if (noAccess === false) {
      return (
        <>
          <Grid item xs={12} className={classes.filterButton}>
            <Box display="flex" height="100%" alignItems="center">
              <div className={classes.filterText}>
                <span className={classes.filterName}> Compare Data</span>
                <span
                  className={
                    filters[index].selectedCategory
                      ? classes.dash
                      : classes.hideDash
                  }
                >
                  {" "}
                  -{" "}
                </span>
                <span className={classes.chosen}>
                  {" "}
                  {filters[1].selectedCategory}
                </span>
              </div>
              <ExpandMoreIcon className={classes.filterArrow}></ExpandMoreIcon>
            </Box>
          </Grid>
        </>
      );
    } else {
      return (
        <>
          {compareOpen()}
          <NoAccessModal noAccess={noAccess} setNoAccess={setNoAccess} />
        </>
      );
    }
  };

  if (filterSelectorName === "Compare SubSamples" && open === "bar") {
    //let allSelectableOptions = Object.keys(FilterBoxOptions.default);
    return (
      <Grid container onClick={() => setDisplayDrop(!displayDrop)}>
        {displayDropOptions()}
      </Grid>
    );
  } else {
    return <></>;
  }
};

export default CompareSubSamples;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  optionsContainer: {
    flexDirection: "column",
    maxHeight: "200px",
    overflowY: "scroll",
    border: "1px solid lightgray",
    overflowX: "none",
    display: "inline-grid",
    "&::-webkit-scrollbar": {
      width: "1em",
      backgroundColor: "lightgray"
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#9F1C0F",
      outline: "1px solid slategrey",
      borderRadius: "5px"
    }
  },
  filterButton: {
    padding: theme.spacing(0),
    width: "100%",
    height: "50px",
    padding: "1%",
    fontFamily: "Roboto",
    borderBottom: "1px rgba(0, 0, 0, 0.1) solid",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  filterName: {
    fontWeight: "500"
  },
  filterArrow: {
    float: "right",
    marginRight: "1rem",
    fontSize: "2rem",
    color: "#8c8c8c"
  },
  filterText: {
    width: "100%",
    "&:hover": {
      color: "#9F1C0F"
    }
  },
  chosen: {
    fontStyle: "italic"
  },
  super: {
    background: "#f5f5f5",
    color: "#8c8c8c",
    fontSize: "1.4rem",
    padding: "1rem 0.5rem"
  },
  hideDash: {
    visibility: "hidden"
  }
}));
