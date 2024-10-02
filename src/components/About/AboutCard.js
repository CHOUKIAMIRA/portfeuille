import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
  // <span className="purple"> Tunisie, Tunis.</span>
    <Card className="quote-card-view" >
      <Card.Body >
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify"}}>
          I am passionate about web development and specialize in creating robust and user-friendly applications. With a solid experience in a range of technologies, I am capable of designing and implementing solutions both on the client and server side.
            <br />
            <br />
            <br />
          My proficiency in programming languages such as JavaScript, HTML, and CSS, combined with my expertise in frameworks like React and backend technologies like Node.js and Express.js, enables me to create dynamic and high-performance web applications.
            <br />
            <br /><br />
          I am also comfortable with databases, having worked with systems such as MongoDB and MySQL to ensure efficient data management.  
            <br /><br /><br />
            The use of responsive design principles and frameworks like Bootstrap ensures that my creations are not only functional but also aesthetically pleasing and compatible with all devices.
            <br /><br /><br />
          As a keen user of Git and GitHub, I am accustomed to collaborating effectively with other developers and ensuring precise version control throughout the development process. 
          <br /><br /><br />
          With a solid experience in areas such as Redux for application state management, I am constantly seeking ways to enhance my skills and explore new technologies to stay at the forefront of my field.
          <br />

          <br />
          </p>
        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;