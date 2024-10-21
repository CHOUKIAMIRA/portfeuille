import React, { useState } from "react";
import { Container, Row, Col, Modal, Carousel, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import image1 from "../../Assets/Projects/image1.PNG";
import image2 from "../../Assets/Projects/image2.PNG";
import image3 from "../../Assets/Projects/image3.PNG";
import image4 from "../../Assets/Projects/image4.PNG";
import image5 from "../../Assets/Projects/image5.PNG";
import image6 from "../../Assets/Projects/image6.PNG";
import image7 from "../../Assets/Projects/image7.PNG";
import image8 from "../../Assets/Projects/image8.PNG";
import image9 from "../../Assets/Projects/image9.PNG";
import image10 from "../../Assets/Projects/image10.PNG";
import image11 from "../../Assets/Projects/image11.PNG";
import image12 from "../../Assets/Projects/image12.PNG";
import image13 from "../../Assets/Projects/image13.PNG";
import image14 from "../../Assets/Projects/image14.PNG";

import list1 from "../../Assets/Projects/list1.PNG";
import list2 from "../../Assets/Projects/list2.PNG";
import list3 from "../../Assets/Projects/list3.PNG";

import game1 from "../../Assets/Projects/game1.PNG";
import game2 from "../../Assets/Projects/game2.PNG";
import game3 from "../../Assets/Projects/game3.PNG";
import game4 from "../../Assets/Projects/game4.PNG";

import book1 from "../../Assets/Projects/book1.PNG";
import book2 from "../../Assets/Projects/book2.PNG";
import book3 from "../../Assets/Projects/book3.PNG";
import book4 from "../../Assets/Projects/book4.PNG";
import book5 from "../../Assets/Projects/book5.PNG";
import book6 from "../../Assets/Projects/book6.PNG";
import book7 from "../../Assets/Projects/book7.PNG";
import book8 from "../../Assets/Projects/book8.PNG";
import book9 from "../../Assets/Projects/book9.PNG";

import food1 from "../../Assets/Projects/food1.PNG";
import food2 from "../../Assets/Projects/food2.PNG";
import food3 from "../../Assets/Projects/food3.PNG";
import food4 from "../../Assets/Projects/food4.PNG";
import food5 from "../../Assets/Projects/food5.PNG";
import food6 from "../../Assets/Projects/food6.PNG";
import food7 from "../../Assets/Projects/food7.PNG";

import portfolio1 from "../../Assets/Projects/portfolio1.PNG";
import portfolio2 from "../../Assets/Projects/portfolio2.PNG";
import portfolio3 from "../../Assets/Projects/portfolio3.PNG";
import portfolio4 from "../../Assets/Projects/portfolio4.PNG";
import portfolio5 from "../../Assets/Projects/portfolio5.PNG";

function Projects() {
  const [show, setShow] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageArray = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];
  const imageList = [list1, list2, list3];
  const imageGame = [game1, game2, game3, game4];
  const imageBook = [book1, book2, book3, book4, book5, book6, book7,book8, book9];
  const imageFood = [food1, food2, food3, food4, food5, food6, food7];
  const imagePortfolio = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5];
  const handleShow = (images, index) => {
    setCurrentImages(images);
    setCurrentIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imageGame}
              isBlog={false}
              title="Memory Game"
              description="A memory game built with React where players match pairs of images. The game tracks time and score, and provides a summary when all pairs are matched."
              ghLink="https://github.com/CHOUKIAMIRA/jeux-memoire"
              demoLink="https://CHOUKIAMIRA.github.io/jeux-memoire"
              onClick={() => handleShow(imageGame, 0)} // Passer les images et l'index
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imageList}
              isBlog={false}
              title="To Do List"
              description="A responsive to-do list that allows adding tasks via a component or a calendar, with days containing tasks marked in red. Tasks can be edited, marked as completed or not completed."
              ghLink="https://github.com/CHOUKIAMIRA/todolist"
              demoLink="https://CHOUKIAMIRA.github.io/todolist"
              onClick={() => handleShow(imageList, 0)} // Passer les images et l'index
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imageArray}
              isBlog={false}
              title="Fripy.tn"
              description="Frippy.tn is a platform dedicated to the buying and selling of clothing between individuals. Each user can register, create their own shop, and publish articles with photos for sale."
              ghLink="https://github.com/CHOUKIAMIRA/pfe"
              demoLink="https://choukiamira.github.io/pfe/"
              onClick={() => handleShow(imageArray, 0)} // Passer les images et l'index
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imageBook}
              isBlog={false}
              title="Book Store"
              description="Development of a responsive web application for selling books, featuring a Google authentication system and a shopping cart. Users can explore a diverse catalog, add books to their cart, and make secure online payments through Stripe integration."
              ghLink="https://github.com/CHOUKIAMIRA/book-store"
              demoLink="https://CHOUKIAMIRA.github.io/book-store"
              onClick={() => handleShow(imageBook, 0)} // Passer les images et l'index
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imageFood}
              isBlog={false}
              title="The Good Food"
              description="This is a responsive platform dedicated to sharing recipes, where each user can create an account and interact with other users' posts. Users receive a confirmation email after registering to validate their account, ensuring secure access. In case of forgotten passwords, users can easily reset them by entering their email, receiving a validation code, and creating a new password. The platform encourages social interaction by allowing users to like and comment on others' posts. Additionally, each user has a personalized profile where they can publish their own recipes and manage their account."
              ghLink="https://github.com/CHOUKIAMIRA/blog"
              demoLink="https://CHOUKIAMIRA.github.io/blog"
              onClick={() => handleShow(imageFood, 0)} // Passer les images et l'index
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imagePaths={imagePortfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio is a responsive web application that showcases my work and skills. It features several sections, including Home, About, Projects, Resume, and Contact. The Home section provides an overview of who I am, while the About section delves deeper into my background and experiences. The Projects section highlights my key projects, demonstrating my expertise and creativity. In the Resume section, you can find my professional qualifications, and the Contact section allows visitors to get in touch with me easily. The responsive design ensures that the portfolio looks great and functions smoothly on all devices, providing an optimal user experience."
              ghLink="https://github.com/CHOUKIAMIRA/portfeuille"
              demoLink="https://CHOUKIAMIRA.github.io/portfeuille"
              onClick={() => handleShow(imagePortfolio, 0)} // Passer les images et l'index
            />
          </Col>

        </Row>
      </Container>

      {/* Modal pour le carrousel */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <Carousel activeIndex={currentIndex} onSelect={(selectedIndex) => setCurrentIndex(selectedIndex)}>
            {currentImages.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", objectFit: "cover" }} // Assurez-vous que toutes les images ont la même taille
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Projects;
