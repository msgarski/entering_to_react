import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <li>
        <span>{item.name} </span>
        <span>{item.industry} </span>
        <span>{item.country} </span>
        <span>{item.numberOfEmployees} </span>
      </li>
    </>
  );
};

export default Item;
