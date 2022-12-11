import * as React from "react";
// import fetchData from "./http/httpRequest";
import { dataBase } from "./database/dataBase";
import List from "./components/List/List";
import FilterForm from "./components/Forms/FilterForm/FilterForm";
import SortingForm from "./components/Forms/SortingForm/SortingForm";

function App() {
  const [rawList, setRawList] = React.useState([]);
  /* reducer function and hook:
  const listReducer = (state, action) => {
    switch (action.type) {
      case "LIST_LOADED":
        return { ...state, loading: false, isError: false };
      case "PENDING_LOADING":
        return { ...state, loading: true, isError: false };
      case "LOADING_ERROR":
        return { ...state, loading: false, isError: true };
      default:
        throw new Error();
    }
  };
  const [rawList, dispatchRawList] = React.useReducer(listReducer, {
    data: [],
    loading: false,
    isError: false,
  });
  */

  //sending http request on component mounting:
  React.useEffect(() => {
    // fetchData();
    setRawList(dataBase);
  }, []);

  return (
    <div>
      <FilterForm />
      <SortingForm />
      <List list={rawList} />
    </div>
  );
}

export default App;
