import React from "react";

const Item = ({ item }) => {
  //   console.log(item);
  return (
    <>
      <li>
        <span>{item.name} </span>
        <span>{item.industry} </span>
        <span>{item.country} </span>
        <span>{item.email} </span>
      </li>
    </>
  );
};

export default Item;
