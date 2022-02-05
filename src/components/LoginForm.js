import { useState, useEffect } from "react";

import loginService from "../services/login";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login info", email, password);

    if (email === "" || password === "") {
      Swal.fire({
        title: "Opps!",
        text: "Please enter email and password",
        icon: "error",
        confirmButtonText: "Go back",
      });
    }

    try {
      const user = await loginService.login({
        email,
        password,
      });

      window.localStorage.setItem("loggedUser", JSON.stringify(user));

      setUser(user);
      setEmail("");
      setPassword("");
    } catch (exception) {
      Swal.fire({
        title: "Opps!",
        text: "The email or password entered is incorrect",
        icon: "error",
        confirmButtonText: "Go back",
      });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
