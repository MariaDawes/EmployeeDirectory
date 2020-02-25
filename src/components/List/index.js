import React from "react";
import { Container, Row, Col } from "../Grid";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // return (
  //   <ul className="list-group">
  //     {props.employeeArray.map(item => (
  //       <li className="list-group-item" key={item.id}>
  //         <img className="img-fluid" alt="Smiley" src={item.image}></img>
  //         <h3>{item.name}</h3> 
  //         <h5>Email: {item.email}</h5>
  //         <h5>City: {item.city}</h5>
  //         <h5>Phone: {item.phone}</h5>
  //         <h5>Employee id: {item.id}</h5>
  //      </li>
  //     ))}
  //   </ul>
  // );

  // return (
  //   <ul className="list-group">
  //     {props.employeeArray.map(item => (
  //       <li className="list-group-item" key={item.id}>
  //         <Container>
  //           <Row>
  //             <Col size="xs-4 sm-2">
  //               <img className="img-fluid" alt="Smiley" src={item.image}></img>
  //             </Col>
  //             <Col size="xs-8 sm-9">
  //                 <h3>{item.name}</h3> 
  //                 <h5>Email: {item.email}</h5>
  //                 <h5>City: {item.city}</h5>
  //                 <h5>Phone: {item.phone}</h5>
  //                 <h5>Employee id: {item.id}</h5>
  //             </Col>
  //           </Row>
  //         </Container>
  //      </li>
  //     ))}
  //   </ul>
  // );

  return (
    <ul className="list-group">
      {props.employeeArray.map(item => (
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
export default List;
