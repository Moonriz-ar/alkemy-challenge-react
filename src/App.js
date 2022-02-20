import React from "react";
import { useState } from "react";

import LoginForm from "./features/loginform/LoginForm";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>{user ? <Home /> : <LoginForm user={user} setUser={setUser} />}</div>
  );
}

export default App;
