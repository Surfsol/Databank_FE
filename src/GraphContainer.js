import React, { useState, useEffect } from "react";
import "./App.scss";
import "./index.css";
import ReactGa from "react-ga";
import Navbar from "./Components/Navbar";
import FilterBox from "./Components/FilterBox";
import "react-dropdown/style.css";
import { withRouter } from "react-router-dom";
import Queries from "./Components/Queries2";
import useCalendar from "../src/hooks/useCalendar";

const GraphContainer = () => {
  const [index, setIndex] = useState({
    type: "gender",
    query: "Users",
    label: ""
  });
  const [crossFilter, setCrossFilter] = useState({
    type: "",
    query: "Users",
    label: ""
  });
  const [additionalFilter, setAdditionalFilter] = useState({
    type: "",
    query: "",
    label: ""
  });
  const [firstSelectedCheckbox, setFirstSelectedCheckbox] = useState({});
  const [secondSelectedCheckbox, setSecondSelectedCheckbox] = useState({});
  const [selectedCheckbox, setSelectedCheckbox] = useState({});

  const [indexLabel, setIndexLabel] = useState("Gender");
  const [crossLabel, setCrossLabel] = useState("");

  const [checkboxOptions, setCheckboxOptions] = useState([]);
  const [secondCheckboxOptions, setSecondCheckboxOptions] = useState([]);

  const [startDate, setStartDate] = useState("2012-01-01");
  console.log(startDate);
  const [endDate, setEndDate] = useState("2020-01-08");
  console.log(endDate);

  const {
    filterBoxStartDate,
    setFilterBoxStartDate,
    filterBoxEndDate,
    setFilterBoxEndDate
  } = useCalendar();

  // useEffect(() => {
  //   ReactGa.initialize("UA-155468784-1");
  //   //to report specified pageview:
  //   ReactGa.pageview("/");
  // }, []);

  const onChange = event => {
    setIndex(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setCrossFilter(e.target.value);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="header">
          <h1>Informal Cross-Border Trade Data</h1>
        </div>
        <div className="content-container">
          <div className="chart-container">
            <Queries
              index={index}
              crossFilter={crossFilter}
              label={indexLabel}
              crossLabel={crossLabel}
              selectedCheckbox={selectedCheckbox}
              checkboxOptions={checkboxOptions}
              setCheckboxOptions={setCheckboxOptions}
              setSecondCheckboxOptions={setSecondCheckboxOptions}
              additionalFilter={additionalFilter}
              startDate={startDate}
              endDate={endDate}
              secondSelectedCheckbox={secondSelectedCheckbox}
              firstSelectedCheckbox={firstSelectedCheckbox}
              filterBoxStartDate={filterBoxStartDate}
              setFilterBoxStartDate={setFilterBoxStartDate}
              filterBoxEndDate={filterBoxEndDate}
              setFilterBoxEndDate={setFilterBoxEndDate}
            />
          </div>
          <div className="dropdown-container">
            <FilterBox
              onChange={onChange}
              onSubmit={onSubmit}
              index={index}
              checkboxOptions={checkboxOptions}
              crossFilter={crossFilter}
              setIndex={setIndex}
              setCrossFilter={setCrossFilter}
              setIndexLabel={setIndexLabel}
              setCrossLabel={setCrossLabel}
              setSelectedCheckbox={setSelectedCheckbox}
              setCheckboxOptions={setCheckboxOptions}
              setAdditionalFilter={setAdditionalFilter}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
              setFirstSelectedCheckbox={setFirstSelectedCheckbox}
              setSecondSelectedCheckbox={setSecondSelectedCheckbox}
              secondCheckboxOptions={secondCheckboxOptions}
              filterBoxStartDate={filterBoxStartDate}
              setFilterBoxStartDate={setFilterBoxStartDate}
              filterBoxEndDate={filterBoxEndDate}
              setFilterBoxEndDate={setFilterBoxEndDate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(GraphContainer);