import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { auth, db } from './auth/firebase';  // Import Firebase authentication and Firestore
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook from React Router

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    const { name, email, password } = formData;

    try {
      // Store additional user data in Firestore
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: name,
        email: email,
        signupDate: new Date()
      });

      setSuccessMessage('Signup successful! Redirecting...');

      // Reset the form
      setFormData({ name: '', email: '', password: '' });

      // Redirect to the '/trips' page and pass user data via state
      setTimeout(() => {
        navigate('/trips', { state: { name, email } }); // Pass name and email
      }, 2000);  // Delay the redirection to let the user see the success message

    } catch (error) {
      setErrorMessage(error.message);  // Show error message
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Container className="mt-5 d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: '300px' }}>
          <h1 className="text-center mb-4">Inscription</h1>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Prénom :</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Entrer votre prénom"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>E-mail :</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Entrer votre adresse"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Mot de passe :</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Entrer votre mot de passe"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>
            
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Signing Up...' : 'Sign Up'}
              </Button>
            </div>
          </Form>

          <p className="text-center mt-3">
            Déjà inscrit ? <a className="text-decoration-none" href="/signin">Connectez-vous !</a>
          </p>
        </div>
      </Container>
    </>
  );
};

export default SignupForm;
