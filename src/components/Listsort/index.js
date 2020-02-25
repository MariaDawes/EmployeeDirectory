import React from "react";
import { Container, Row, Col } from "../Grid";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Listsort(props) {
  return (
    <ul className="list-group">
      {props.employeeArraysort.map(item => (
        <li className="list-group-item" key={item.id}>
          <Container>
            <Row>
              <Col size="xs-2 sm-2">
                <img className="img-fluid" alt="Smiley" src={item.image}></img>
              </Col>
              <Col size="xs-2 sm-2">
                  <h6>{item.name}</h6></Col>
              <Col size="xs-2 sm-2">
                  <h6>{item.email}</h6></Col>
              <Col size="xs-2 sm-2">
                  <h6>{item.phone}</h6></Col>
              <Col size="xs-2 sm-2">
                  <h6>{item.empid}</h6></Col>
              <Col size="xs-2 sm-2">
                  <h6>{item.city}</h6></Col>
            </Row>
          </Container>
       </li>
      ))}
    </ul>
  );
}

export default Listsort;