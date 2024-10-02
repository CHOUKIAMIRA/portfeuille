import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Ouvrir l'image en plein écran
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowModal(true);
  };

  // Fermer le modal
  const handleClose = () => setShowModal(false);

  return (
    <Card className="project-card-view" style={{ height: "300px" }}>
      <div style={{ display: "flex", height: "100%" }}>
        {/* Colonne 1 : Carrousel d'images */}
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Carousel interval={null} style={{ width: "100%", height: "100%" }}>
            {props.imagePaths.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "200px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => handleImageClick(image)} // Clique pour agrandir l'image
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Colonne 2 : Description */}
        <div style={{ flex: "2", padding: "10px" }}>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
          </Card.Body>
        </div>

        {/* Colonne 3 : Boutons */}
        <div style={{ flex: "1", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {/* Si le lien de démonstration est présent */}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginTop: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </div>

      {/* Modal pour afficher l'image en plein écran */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Body>
          <img src={selectedImage} alt="Fullscreen" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </Modal.Body>
      </Modal>
    </Card>
  );
}

export default ProjectCards;
