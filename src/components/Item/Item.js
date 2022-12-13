import React from "react";

const Item = ({ item }) => {
  return (
    <>
      <li className="list-container_item">
        <span className="list-item_element item-name">
          <span className="record-title">Name: </span>
          <span className="record-value">{item.name}</span>
        </span>
        <span className="list-item_element item-industry">
          <span className="record-title">Industry: </span>
          <span className="record-value">{item.industry}</span>
        </span>
        <span className="list-item_element item-country">
          <span className="record-title">Country: </span>
          <span className="record-value">{item.country}</span>
        </span>
        <span className="list-item_element item-number">
          <span className="record-title">Employees: </span>
          <span className="record-value">{item.numberOfEmployees}</span>
        </span>
      </li>
    </>
  );
};

export default Item;
