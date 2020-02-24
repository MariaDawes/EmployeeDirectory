import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.zf.com/master/media/corporate/m_zf_com/company/bonds_relations_/investor_relations_overview/2017_03_22_ir_stage2017_mzw.jpg">
        <h1>Employee Directory</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h3>All Company Directory - Sort by Employee Name - Search by Employee Name</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
