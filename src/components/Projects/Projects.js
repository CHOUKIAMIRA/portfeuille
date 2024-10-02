import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
function Projects() {
  const imageArray = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14];
  const imageList = [list1, list2, list3];
  const imageGame = [game1, game2, game3,game4];
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
          {/* Première carte */}
         

       
          <Col md={12} className="project-card">
            <ProjectCard
              imagePaths={imageGame}
              isBlog={false}
              title="Memory Game"
              description="A memory game built with React where players match pairs of images. The game tracks time and score, and provides a summary when all pairs are matched. Built with a focus on improving memory and concentration."
              ghLink="https://github.com/CHOUKIAMIRA/jeux-memoire"
              demoLink="https://CHOUKIAMIRA.github.io/jeux-memoire"
            />
          </Col>

             {/* Deuxième carte */}
          <Col md={12} className="project-card">
            <ProjectCard
              imagePaths={imageList} // Tableau des images
              isBlog={false}
              title="To Do List"
              description="A responsive to-do list that allows adding tasks via a component or a calendar, with days containing tasks marked in red. Tasks can be edited, marked as completed or not completed. Each day, the tasks to be done are automatically displayed, with toast notifications after each CRUD operation. The data is stored locally using localStorage."
              ghLink="https://github.com/CHOUKIAMIRA/todolist"
              demoLink="https://CHOUKIAMIRA.github.io/todolist"
            />
          </Col>
          
          {/* Troisième carte */}
          <Col md={12} className="project-card">
            <ProjectCard
              imagePaths={imageArray}
              isBlog={false}
              title="Fripy.tn"
              description="Frippy.tn is a platform dedicated to the buying and selling of clothing between individuals. Each user can register, create their own shop, and publish articles with photos for sale. Buyers can browse the items, add them to their cart, and place orders with ease."
              ghLink="https://github.com/CHOUKIAMIRA/pfe"
              demoLink="https://choukiamira.github.io/pfe/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
