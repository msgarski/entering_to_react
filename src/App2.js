import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const DATA_URL_1 = "https://dujour.squiz.cloud/developer-challenge/data";
const DATA_URL_2 =
  "https://plan.zut.edu.pl/schedule_student.php?teacher=Smoli%C5%84ski%20Anton&start=2023-01-30T00%3A00%3A00%2B01%3A00&end=2023-03-13T00%3A00%3A00%2B01%3A00";
const DATA_URL_3 = "https://mockyard.herokuapp.com/users";

export default function Quotes() {
  const [response, setResponse] = useState(null);
  const fetchQuotes = async () => {
    try {
      const res = await axios.get(DATA_URL_2);
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // Trigger the API Call
    fetchQuotes();
  }, []);
  return (
    <div>
      {
        // If the response is not null, display the quote.
        response && <span>{response.text}</span>
      }
    </div>
  );
}
