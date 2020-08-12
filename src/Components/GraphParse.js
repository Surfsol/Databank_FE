import React, { useEffect } from "react";
import dataParse from "./dataParse";
import Graph from "./Graph";
import { filterByDate } from "../DataParseHelpers/filterByDate";

const GraphParse = ({
  data,
  filters,
  queryType,
  filterBoxStartDate,
  filterBoxEndDate,
  setChartDataSM
}) => {
  //needed for filterByDate, cannot filter tradersUsers by date
  let typeOfQuery = Object.keys(data)[0];

  //maybe will need something like this in else statement to prevent errors: data.sessionData != undefined &&
  if (
    queryType === "sessionsData" &&
    typeOfQuery != "tradersUsers" &&
    filterBoxStartDate &&
    filterBoxEndDate
  ) {
    data = filterByDate(data, filterBoxStartDate, filterBoxEndDate);
  }

  //used on SocialMedia.js
  let chartData = dataParse(
    filters[0].selectedTableColumnName,
    data[`${queryType}`] || data.tradersUsers,
    filters[1].selectedTableColumnName,

    filterBoxStartDate,

    filterBoxEndDate,
    filters[2].selectedTableColumnName,

    filters[0].selectedTable,
    filters[1].selectedTable
  );
  const graphItems = filters[1].selectedTableColumnName !== "";
  if (graphItems === true) {
    return (
      <>
        <Graph
          data={chartData.percentageData}
          csvData={chartData.dataStructure}
          filters={filters}
          keys={chartData.crossFilterValues}
          groupMode={"grouped"}
          sampleSize={chartData.totalSampleSize}
          tableName={queryType === "sessionsData" ? "Sessions" : "Users"}
          setChartDataSM={setChartDataSM}
          chartData={chartData}
        />
      </>
    );
  } else if (chartData && graphItems === false) {
    return (
      <>
        <Graph
          data={chartData.percentageData}
          csvData={chartData.dataStructure}
          filters={filters}
          keys={chartData.keys || chartData.csvKeys}
          groupMode={"stacked"}
          sampleSize={chartData.sampleSize}
          tableName={queryType === "sessionsData" ? "Sessions" : "Users"}
          setChartDataSM={setChartDataSM}
          chartData={chartData}
        />
      </>
    );
    //switching from Account.js back to graph too fast was giving an error
    // because chartData was not available.
    // so added chartData on 58 and return
  } else {
    return <></>;
  }
};
export default GraphParse;
