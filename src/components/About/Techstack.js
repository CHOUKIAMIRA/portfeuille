import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5
} from "react-icons/di";
import {TfiCss3 } from "react-icons/tfi";
import {SiExpress} from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <TfiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaBootstrap />
      </Col>
      
      
      
    </Row>
  );
}

export default Techstack;