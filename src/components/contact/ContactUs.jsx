import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';


function ContactUs() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m94n1np', 'template_k5t01th', form.current, {
        publicKey: '1yLpprx_SDLvvcVp3',
      })
      .then(
        () => {
          alert('Le message envoyer avec success');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section>
      <Container fluid className="about-section">
      <h1 style={{color:"white",textAlign:"center",fontSize:"60px"}} >Contact</h1><br/>
      <div style={{display:"flex",justifyContent:"center",height:"385px"}} >
        
      <Form ref={form} onSubmit={sendEmail}>
      <Form.Group mb-3>
        <Form.Control type="text" placeholder="Enter your name"
        name="user_name"
        style={{width:"400px"}}/>
      </Form.Group>
      <br/> <br/>
      <Form.Group mb-3 >
        <Form.Control type="email" placeholder="Enter your email" name="user_email"/>
      </Form.Group> <br/>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <br/>
        <Form.Control as="textarea" name="message"rows={3} placeholder="Enter your message" />
      </Form.Group>
      <br/>
      <Button  type="submit" value="Send">
        Submit
      </Button>
    </Form>
    
</div>

         
         
       
      </Container>
      
    </section>
  );
}

export default ContactUs;