import * as React from "react";
import axios from "axios";
import List from "./components/List/List";
import FilterForm from "./components/Forms/FilterForm/FilterForm";
import SortingForm from "./components/Forms/SortingForm/SortingForm";

const DATA_URL_1 = "https://dujour.squiz.cloud/developer-challenge/data";

function App() {
  // reducer function:
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
  // rawList state by useReducer hook:
  const [rawList, setRawList] = React.useReducer(listReducer, {
    data: [],
    loading: false,
    isError: false,
  });
  // console.log("rawlist: ", rawList);

  const fetchData = async () => {
    try {
      const result = await axios.get(DATA_URL_1);
      console.log("result: ", result);
      setRawList({ type: "LIST_LOADED", payload: result.data });
    } catch (error) {
      if (error.response) {
        // Request made but the server responded with an error
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        // Request made but no response is received from the server.
        console.log(error.request);
      } else {
        // Error occurred while setting up the request
        console.log("Error", error.message);
      }
    }
  };

  React.useEffect(() => {
    setRawList({ type: "PENDING_LOADING" });
    fetchData();
  }, []);

  return (
    <div>
      <FilterForm state={rawList.loading} />
      <SortingForm />
      <List list={rawList.data} />
    </div>
  );
}

export default App;
