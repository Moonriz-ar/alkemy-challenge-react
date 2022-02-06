import { useState, useEffect } from "react";

import loginService from "../../services/login";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Swal from "sweetalert2";
import LoadingButton from "./LoadingButton";

const LoginForm = ({ user, setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  // Check if user is logged in by checking if there is local storage token
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  // Form submit handler
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("login info", email, password);

    // Check if any field is empty
    if (email !== "" && password !== "") {
      setLoading(true);
      try {
        const user = await loginService.login({
          email,
          password,
        });
        setLoading(false);

        window.localStorage.setItem("loggedUser", JSON.stringify(user));

        setUser(user);
        setEmail("");
        setPassword("");

        Swal.fire({
          title: "Success!",
          text: "Now you can select the dishes for the menu!",
          icon: "success",
          confirmButtonText: "Go to home",
        });
      } catch (exception) {
        Swal.fire({
          title: "Opps!",
          text: "The email or password entered is incorrect",
          icon: "error",
          confirmButtonText: "Go back",
        });
        setLoading(false);
      }
    } else {
      Swal.fire({
        title: "Fields empty!",
        text: "Please enter email and password",
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

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button variant="primary" type="submit" className="mb-3">
            Login
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default LoginForm;
