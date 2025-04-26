import "./App.css";
import { JSX, useState } from "react";
import React from "react";
import { LoginPage } from "./pages/LoginPage/LoginPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";

export const App = (): JSX.Element => {
  const [showLogin, setShowLogin] = useState(true);
  const [showHome, setShowHome] = useState(false);
  return (
    <div className="App">
      {showLogin && (
        <LoginPage setShowHome={setShowHome} setShowLogin={setShowLogin} />
      )}
      {showHome && <HomePage />}
    </div>
  );
};

export default App;
