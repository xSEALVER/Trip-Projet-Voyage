import React, { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from './auth/firebase';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';  // Import Bootstrap components

const News = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }

    setError(null);
    setSuccess(false);

    try {
      const q = query(collection(db, 'newsletters'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError('Vous êtes déjà inscrit à la newsletter.');
        return;
      }

      await addDoc(collection(db, 'newsletters'), {
        email,
        timestamp: new Date()
      });
      
      setSuccess(true);
      setEmail('');
    } catch (e) {
      setError('Erreur lors de l\'inscription. Veuillez réessayer plus tard.');
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6} className="bg-dark p-4 rounded text-white">
          <h1 className="text-center mb-4">Newsletter</h1>
          <p className="text-center mb-3">Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Weboxing !</p>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">Inscription réussie !</Alert>}

          <Form onSubmit={handleFormSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Entrez votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Button type="submit" variant="primary" className="w-100">
              Valider
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
