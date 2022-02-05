import React from "react";

import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div>
      <h1>Restaurant Menu</h1>

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

      <LoginForm />
    </div>
  );
}

export default App;
