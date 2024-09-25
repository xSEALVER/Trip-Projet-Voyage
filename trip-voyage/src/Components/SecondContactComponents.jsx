import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { db } from '../Components/auth/firebase';  // Import the Firestore database
import { collection, addDoc } from 'firebase/firestore'; // Firestore methods

const SecondContactComponents = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, 'contacts'), formData);
      
      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form after submission
    } catch (error) {
      console.error("Error adding document: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div className="contact-form-wrapper" style={{ maxWidth: '450px' }}>
        <h1 className="text-center mb-4">Send a message to us!</h1>
        {successMessage && <p className="text-success text-center">{successMessage}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Control 
              type="text" 
              placeholder="Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Control 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSubject">
            <Form.Control 
              type="text" 
              placeholder="Subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default SecondContactComponents;
