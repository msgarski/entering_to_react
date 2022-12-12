import React, { useRef } from "react";
import Item from "../Item/Item";

const List = ({ list, country, industry, sortListField }) => {
  const countryField = useRef("");
  const industryField = useRef("");
  const sortedField = useRef("");

  // achieving new list state
  const [newList, setNewList] = React.useState([]);

  // useEffect hook for tracking filter changes from above
  React.useEffect(() => {
    const timerHandler = setTimeout(() => {
      countryField.current = country.trim();
      industryField.current = industry.trim();
      sortedField.current = sortListField;

      console.log("sortListField :>> ", sortListField);

      // filter list
      // country condition:
      let filteredList = countryField.current
        ? list.filter((element) =>
            element.country
              .toLowerCase()
              .includes(countryField.current.toLowerCase())
          )
        : list;

      // industry condition:
      filteredList = industryField.current
        ? filteredList.filter((element) =>
            element.industry
              .toLowerCase()
              .includes(industryField.current.toLowerCase())
          )
        : filteredList;
      setNewList(filteredList);
    }, 500);
    return () => {
      clearTimeout(timerHandler);
    };
  }, [country, industry, sortListField, list]);

  return (
    <>
      <p>List of employees:</p>
      <h2>nic</h2>
      <ul>
        {newList.map((item) => (
          <Item key={item.id} item={item} text={"nic nie mam"} />
        ))}
      </ul>
    </>
  );
};

export default List;
