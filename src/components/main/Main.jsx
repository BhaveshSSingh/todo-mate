import React from "react";
import "./Main.css";

function Main({ children }) {
  return (
    <div className="main">
      <h1 className="main__feed">Feed</h1>
      {children}
    </div>
  );
}

export default Main;
