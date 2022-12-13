import React from "react";
import Item from "../Item/Item";
import {
  typeOfAction,
  sortStrings,
  sortNumbers,
} from "../../auxiliaryFunctions/sortFunction";

const List = ({ list, country, industry, sortListField }) => {
  const countryField = React.useRef("");
  const industryField = React.useRef("");
  const sortedField = React.useRef("");

  console.log("list w List :>> ", list);

  // achieving new list state
  const [newList, setNewList] = React.useState([]);

  //***********************************************************************************
  // useEffect hook for tracking filter changes from above
  //***********************************************************************************
  React.useEffect(() => {
    const timerHandler = setTimeout(() => {
      countryField.current = country.trim();
      industryField.current = industry.trim();

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
      // filteredList.sort((a, b) => {
      //   return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      // });
      setNewList(filteredList);
    }, 500);
    return () => {
      clearTimeout(timerHandler);
    };
  }, [country, industry, list]);
  //**********************************************************************************

  //**********************************************************************************
  // useReducer hook for manage state of 4 sorting rules
  //**********************************************************************************

  const sortReducer = (state, action) => {
    switch (action.type) {
      case "NAME_ASC":
        return { ...action.payload.sort(sortStrings) };
      case "NAME_DESC":
        return { ...state, ...action.payload.sort(sortStrings).reverse() };
      case "NUM_ASC":
        return { ...state, ...action.payload.sort(sortNumbers) };
      case "NUM_DESC":
        return { ...state, ...action.payload.sort(sortNumbers).reverse() };
      default:
        throw new Error();
    }
  };
  const [sortedList, dispatchSort] = React.useReducer(sortReducer, newList);
  //*****************************************************************************

  //*********************************************************************************
  //  useEffect hook for tracking sorting condition changes
  //********************************************************************************
  React.useEffect(() => {
    sortedField.current = sortListField;
    console.log("wybrano: ", sortedField.current);
    const actionType = typeOfAction(sortedField.current);
    //console.log("actionType", actionType);
    dispatchSort({ type: actionType, payload: newList });
  }, [sortListField, newList]);

  //********************************************************************************
  console.log("sortedList", sortedList);

  return (
    <>
      <p>List of employees:</p>
      <ul>
        {newList.map((item) => (
          <Item key={item.id} item={item} text={"nic nie mam"} />
        ))}
      </ul>
    </>
  );
};

export default List;
