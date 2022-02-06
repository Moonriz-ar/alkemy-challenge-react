import React from "react";
import { useState } from "react";

import LoginForm from "./features/loginform/LoginForm";
import SearchRecipe from "./features/recipeSearch/SearchRecipe";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h1>Restaurant Menu</h1>

      {/* LOGIN FORM */}
      {user ? <SearchRecipe /> : <LoginForm user={user} setUser={setUser} />}
    </div>
  );
}

export default App;
