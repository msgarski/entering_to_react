// import * as React from "react";
import axios from "axios";
import { useEffect } from "react";

const DATA_URL_1 = "https://dujour.squiz.cloud/developer-challenge/data";
// "http://numbersapi.com/random/math";

const App = () => {
  console.log("");
  useEffect(() => {
    axios
      .get(DATA_URL_1)
      .then((response) => {
        console.log("response:", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div>
      <h1>App axios async await</h1>
      <p>nic</p>
    </div>
  );
};

export default App;
