import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Listsearch(props) {
  return (
    <ul className="list-group">
      {props.employeeArraysearch.map(item => (
        <li className="list-group-item" key={item.id}>
          {/* {item.image} */}
          {item.name}
          {item.email}
          {item.city}
          {item.phone}
          {item.id}
       </li>
      ))}
    </ul>
  );
}

export default Listsearch;
