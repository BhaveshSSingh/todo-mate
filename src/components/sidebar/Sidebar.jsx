import { AddProject } from "./AddProject";
import React from "react";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar2Event, BsCaretUp } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <section className="Sidebar__profile">
        <section>
          <FaUserCircle className="profile__icon" />
          <h3>Name</h3>
        </section>
        <section>
          <a href="">Logout! </a>
        </section>
      </section>

      <hr />

      <section className="Sidebar__header">
        <div>
          <h3>
            <BsCalendar2Event size="18" className="icon__title" />
            Calendar
          </h3>
        </div>
        <div>
          <BsCaretUp size="20" />
        </div>
      </section>
      <hr />
      <section className="Sidebar__days">
        <div className="Sidebar__day">today</div>
        <div className="Sidebar__day">next 7 days</div>
        <div className="Sidebar__day">all days</div>
      </section>
      <hr />
      <AddProject />
    </div>
  );
}
