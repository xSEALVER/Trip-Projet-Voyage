import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { auth, db } from './auth/firebase';  // Import Firebase authentication and Firestore
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';  // Import the useNavigate hook from React Router

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',  // Added name field
    email: '',
    password: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [userData, setUserData] = useState(null);  // For displaying user data from Firestore

  const navigate = useNavigate(); // Initialize useNavigate hook

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
    setErrorMessage('');
    setSuccessMessage('');
    setUserData(null);

    const { email, password, name } = formData;

    try {
      // Fetch additional user data from Firestore using the user's UID
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userDataFromFirestore = userDocSnap.data();

        // Use the name from Firestore or fallback to the input name or "Guest"
        const displayName = userDataFromFirestore.name || name || 'Guest';

        // Set the user data for display
        setUserData({
          name: displayName,
          email: userDataFromFirestore.email || email,
          signupDate: userDataFromFirestore.signupDate || new Date(),  // Fallback to current date
        });

        setSuccessMessage(`Welcome, ${displayName}!`);
      } else {
        setErrorMessage('No user data found in Firestore.');
      }

      // Redirect after showing success message
      setTimeout(() => {
        navigate('/trips', { state: { name: formData.name, email } }); // Pass name and email to next page
      }, 2000);  // Delay the redirection to let the user see the success message

    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Container className="mt-5 d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: '300px' }}>
          <h1 className="text-center mb-4">Connexion</h1>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Control
                type="text"
                placeholder="prénom"
                name="name"
                value={formData.name}
                onChange={handleChange}
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

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit" className='w-50' disabled={isSubmitting}>
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </Button>
            </div>
          </Form>

          {/* Display additional user data from Firestore */}
          {userData && (
            <div className="mt-4">
              <h3>Welcome, {userData.name}</h3>
              <p>Email: {userData.email}</p>
              <p>Signup Date: {new Date(userData.signupDate.seconds * 1000).toLocaleDateString()}</p>
            </div>
          )}
          <p className="text-center mt-3">Pas encore inscrit ? <a className="text-decoration-none text-primary" href="/signup">Inscrivez-vous !</a></p>
        </div>
      </Container>
    </>
  );
};

export default SignIn;



