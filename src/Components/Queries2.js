import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Loader from "react-loader-spinner";
import { getSelectedOption } from "../OptionFunctions";
import LineGraphButton from "./LineGraphButton";
import NoDataModal from "./NoDataModal";
import NotLoggedInModal from "./NotLoggedInModal";
import NoAccessModal from "./Filters/NoAccessModal";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { useSelector } from "react-redux";

const GetData = (props, { makeValues }) => {
  const queriesFilters = useSelector(
    state => state.queriesReducer.queriesFilters
  );

  const userTier = useSelector(state => state.tierReducer.tier);
  const noAccess = useSelector(
    state => state.showNoAccessReducer.show.noAccess
  );

  console.log("noAccess", noAccess);

  let queryType = props.queryType;
  let setQueryType = props.setQueryType;
  setQueryType("tradersUsers");
  let QUERY;
  let thisQuery;
  let filters;
  let setFilters = props.setFilters;
  let filterBoxStartDate;
  let filterBoxEndDate;

  if (queriesFilters.filters) {
    filters = queriesFilters.filters;
  } else if (filters === undefined) {
    filters = props.filters;
    filterBoxStartDate = props.filterBoxStartDate;
    filterBoxEndDate = props.filterBoxStartDate;
    queriesFilters.filters = filters;
  }

  const filterIsSelected = (filter, i) => {
    // if the filter is the subsample or the data series
    // when the category name is selected
    if (i <= 1) {
      return filter.selectedCategory.length > 0;
    } else {
      // when the category name is selected and an option is selected
      return (
        filter.selectedCategory.length > 0 &&
        // 1 option is selected
        Object.keys(filter.selectableOptions).filter(
          selectableOption => filter.selectableOptions[selectableOption]
        ).length === 1
      );
    }
  };

  const firstThreeFilters = filterIds => {
    return (
      filterIds.length === 3 &&
      filterIds[0] == 0 &&
      filterIds[1] == 1 &&
      filterIds[2] == 2
    );
  };
  const onlyFirstThreeFiltersAreSelected = filters => {
    const filterIds = Object.keys(filters);
    return (
      // we only have the first 3 filters
      firstThreeFilters(filterIds) &&
      // the filters we have are selected
      filterIds
        .map(filterId => filterIsSelected(filters[filterId], filterId))
        .filter(result => result === true).length === 3
    );
  };

  const isSessions = filters => {
    // if at least 1 table says "Sessions" we use the sessions table
    return (
      Object.keys(filters).filter(
        filterId => filters[filterId].selectedTable === "Sessions"
      ).length > 0
    );
  };
  // if (only first 3 filters are selected) and (none of them are Sessions)

  if (!isSessions(filters)) {
    setQueryType("tradersUsers");
    Object.keys(filters).forEach(filterId => {
      if (filterId !== 1) {
        thisQuery = {
          ...thisQuery,
          [filters[filterId].selectedTableColumnName]: getSelectedOption(
            filters,
            filterId
          )
        };
      }
    });

    QUERY = gql`
      query getUsers($queryTraders: newTraderInput){
        tradersUsers (input: $queryTraders) {
          ${filters[0].selectedTableColumnName}
          ${filters[1].selectedTableColumnName}

        }
      }
      
      `;
  } else {
    thisQuery = {};
    Object.keys(filters).forEach(filterId => {
      thisQuery = {
        ...thisQuery,
        [filters[filterId].selectedTableColumnName]: getSelectedOption(
          filters,
          filterId
        )
      };
    });

    setQueryType("sessionsData");
    QUERY = gql`
       query getData($queryTraders: newTraderSessionInput){
           sessionsData (input: $queryTraders){
           ${filters[0].selectedTableColumnName}
           ${filters[1].selectedTableColumnName}
           created_date
         }
       }
       `;
  }

  let { loading, data } = useQuery(QUERY, {
    variables: { queryTraders: thisQuery }
  });

  const [noDataModal, setNoDataModal] = useState(true);

  useEffect(() => {
    setNoDataModal(true);
  });

  function noData() {
    if (noDataModal) {
      return (
        <>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={noDataModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade>
              <NoDataModal
                setNoDataModal={setNoDataModal}
                filters={filters}
                setFilters={setFilters}
                setSelectedFilters={props.setSelectedFilters}
              />
            </Fade>
          </Modal>
        </>
      );
    } else {
      return <></>;
    }
  }

  const [notLogged, setNotLogged] = useState(true);

  function notLoggedIn() {
    console.log("notLogged IN", notLogged);
    if (notLogged) {
      console.log("return Not LoggedIN");
      return (
        <NotLoggedInModal notLogged={notLogged} setNotLogged={setNotLogged} />
      );
    } else {
      return <></>;
    }
  }

  function NotAccessible() {
    console.log("notLogged IN", notLogged);
    if (noAccess) {
      console.log("return Not accessible");
      return <NoAccessModal noAccess={noAccess} />;
    } else {
      return <></>;
    }
  }
  console.log("noAccess", noAccess);

  if (noAccess === true) {
    return NotAccessible();
  }

  if (userTier === undefined || userTier === "EXPIRED") {
    return notLoggedIn();
  }

  if (
    data &&
    data.sessionsData !== undefined &&
    data.sessionsData.length === 0
  ) {
    return noData();
  }
  // quick fix, data.tradersUsers.length <= 5, could remove non-null first
  // search - Border Crossing Freq, >60, kinyarwanda
  // search returns 1 user, with 1 null value
  if (
    data &&
    data.tradersUsers !== undefined &&
    data.tradersUsers.length <= 5
  ) {
    return noData();
  }

  if (filters[1].selectedCategory === "" && data && data.sessionsData) {
    const notNull = [];
    let values = data.sessionsData;
    const selectedTableColumnName = filters[0].selectedTableColumnName;
    for (let i = 0; i < values.length; i++) {
      if (
        values[i][selectedTableColumnName] !== null &&
        values[i][selectedTableColumnName] !== ""
      ) {
        notNull.push(values[i]);
      }
    }
    data = { sessionsData: notNull };
  }

  if (loading) {
    return (
      <div className="loader-container">
        <Loader
          className="loader"
          type="Oval"
          color="#708090"
          width={100}
          timeout={100000}
        />
      </div>
    );
  }

  return (
    <>
      <LineGraphButton
        filters={filters}
        queryType={queryType}
        filterBoxStartDate={props.filterBoxStartDate}
        filterBoxEndDate={props.filterBoxEndDate}
        open={props.open}
        setOpen={props.setOpen}
        data={data}
        setDisplayButton={props.setDisplayButton}
        displayButton={props.displayButton}
        setChartDataSM={props.setChartDataSM}
      />
    </>
  );
};

export default GetData;
