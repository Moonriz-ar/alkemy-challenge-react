import React from "react";
import { useState, useEffect } from "react";

import loginService from "./services/login";
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";

function App() {
  const [errorMessage, setErrorMessage] = useState(null);
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
      setErrorMessage("");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <Notification message={errorMessage} />

      {/* LOGIN FORM */}
      {/* {user ? (
        <h1>app functionality</h1>
      ) : (
        <LoginForm
          handleLogin={handleLogin}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      )} */}

      <LoginForm
        handleLogin={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
}

export default App;
