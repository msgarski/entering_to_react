import React from "react";
import Item from "../Item/Item";

const List = ({ list }) => {
  return (
    <>
      <p>List of employees:</p>
      <ul>
        {list.map((item) => (
          <Item key={item.id} item={item} text={"nic nie mam"} />
        ))}
      </ul>
    </>
  );
};

export default List;
