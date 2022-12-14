import * as React from "react";
import axios from "axios";
import List from "./components/List/List";
import FilterForm from "./components/Forms/FilterForm/FilterForm";
import SortingForm from "./components/Forms/SortingForm/SortingForm";
import useGetAction from "./hooks/useGetAction";
import "./styles/main.css";

function App() {
  // keeping fetched list in rawList variable
  // const [rawList, setRawList] = React.useState([]);
  //*************************************************************************************
  // receiving filter conditions from form component
  // two times used custom hook for updating
  // country and city input fields values
  const { value: countryState, handleUserAction: handleCountryInput } =
    useGetAction();
  const { value: industryState, handleUserAction: handleIndustryInput } =
    useGetAction();
  const { value: sortingField, handleUserAction: handlePressedButton } =
    useGetAction();

  // reducer function and hook:
  const listReducer = (state, action) => {
    switch (action.type) {
      case "LIST_LOADED":
        return {
          ...state,
          data: action.payload,
          loading: false,
          isError: false,
        };
      case "PENDING_LOADING":
        return { ...state, loading: true, isError: false };
      case "LOADING_ERROR":
        return { ...state, loading: false, isError: true };
      default:
        throw new Error();
    }
  };
  const [fetchedList, dispatchRawList] = React.useReducer(listReducer, {
    data: [],
    loading: false,
    isError: false,
  });

  //***********************************************************************************
  // Http request function
  //********************************************************************************** */
  const fetchData = async () => {
    dispatchRawList({ type: "PENDING_LOADING" });
    const DATA_URL = "https://dujour.squiz.cloud/developer-challenge/data";
    try {
      const result = await axios.get(DATA_URL);
      dispatchRawList({ type: "LIST_LOADED", payload: result.data });
      // setRawList(result.data);
    } catch (error) {
      dispatchRawList({ type: "LOADING_ERROR" });
      if (error.response) {
        // the server responded with an error
        console.log("Error data report: ", error.response.data);
        console.log("Error status report: ", error.response.status);
      } else if (error.request) {
        // no response is received from the server
        console.log("Error request report: ", error.request);
      } else {
        // Error occurred while requesting
        console.log("Error message: ", error.message);
      }
    }
  };
  //******************************************************************************* */

  // sending http request on component mounting,
  // and storing List as a value of rawList variable
  // in useEffect hook
  React.useEffect(() => {
    // http request:
    fetchData();
    // setRawList(fetchedList);
  }, []);
  return (
    <div className="main-container">
      <div>
        <div className="main-title cell-1">
          <span className="list-title">List of clients</span>
        </div>
      </div>
      <div className="filter-sort_container">
        <section className="main-container_filter-section cell-2">
          <FilterForm
            handleCountryInput={handleCountryInput}
            handleIndustryInput={handleIndustryInput}
          />
          <SortingForm handlePressedButton={handlePressedButton} />
        </section>

        <section className="main-container_list-section cell-3">
          {fetchedList.loading ? (
            <p>Loading...</p>
          ) : (
            <List
              list={fetchedList.data}
              country={countryState}
              industry={industryState}
              sortListField={sortingField}
            />
          )}
        </section>
      </div>
    </div>
  );
}

export default App;
