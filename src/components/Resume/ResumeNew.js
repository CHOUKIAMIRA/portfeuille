import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle"; 
import { AiOutlineDownload } from "react-icons/ai";
import image1 from "../../Assets/photo-cv1.jpg"; 
import image2 from "../../Assets/photo-cv2.jpg"; 

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        
        {/* Première image et bouton de téléchargement */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={image1} 
            download 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download 
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <img
            src={image1} 
            alt="Resume 1"
            style={{ maxWidth: width > 786 ? "70%" : "100%" }} 
          />
        </Row>

        {/* Deuxième image et bouton de téléchargement */}
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={image2}
            download 
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download 
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <img
            src={image2} 
            alt="Resume 2"
            style={{ maxWidth: width > 786 ? "70%" : "100%" }} 
          />
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
