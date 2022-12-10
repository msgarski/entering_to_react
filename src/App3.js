import * as React from "react";
import axios from "axios";
import { useEffect } from "react";

const DATA_URL_1 = "http://xkcd.com/info.0.json";

// "https://api.publicapis.org/entries";

// "https://api.opensea.io/api/v1/assets?format=json";

// "https://dujour.squiz.cloud/developer-challenge/data";
// const DATA_URL_2 =

const App = () => {
  useEffect(() => {
    fetch(DATA_URL_1)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log("error niestety: ", error);
      });
  });

  return (
    <div>
      <h1>App get by fetch</h1>
    </div>
  );
};

export default App;
