import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Listsort(props) {
  return (
    <ul className="list-group">
      {props.employeeArraysort.map(item => (
         <li className="list-group-item" key={item.id}>
         <img className="img-fluid" alt="Smiley" src={item.image}></img>
         <h3>{item.name}</h3> 
         <h5>Email: {item.email}</h5>
         <h5>City: {item.city}</h5>
         <h5>Phone: {item.phone}</h5>
         <h5>Employee id: {item.id}</h5>
        </li>
      ))}
    </ul>
  );
}

export default Listsort;