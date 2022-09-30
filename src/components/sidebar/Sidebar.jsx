import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <section className="sidebar__profile">🔴</section>
      <section>
        🔴<h4>Name</h4>
      </section>
      <section>Calendar</section>
    </div>
  );
}

export default Sidebar;
