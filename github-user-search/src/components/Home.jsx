import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to the React App</h1>
      <p>This is the home page.</p>
      <Link to="/search">Go to Search</Link>
    </div>
  );
}