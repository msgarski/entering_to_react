// import React from "react";
import axios from "axios";

const fetchData = async () => {
  const DATA_URL = "https://dujour.squiz.cloud/developer-challenge/data";
  //   dispatchRawList({ type: "PENDING_LOADING" });
  try {
    const result = await axios.get(DATA_URL);
    console.log("result: ", result);
    // setRawList({ type: "LIST_LOADED", payload: result.data }); //todo to nie powinno tu byc!!!
  } catch (error) {
    //todo brakuje ustawienia action na ERROR
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

export default fetchData;
