import { AddProject } from "./AddProject";
import React from "react";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar2Event, BsCaretUp } from "react-icons/bs";

export default function Sidebar() {
  const calendarItems = ["today", "next 7 days", "all days"];

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
          <button>
            <BsCaretUp size="20" />
          </button>
        </div>
      </section>
      <hr />
      <section className="Sidebar__days">
        {calendarItems.length
          ? calendarItems.map((item) => (
              <div className="Sidebar__day" key={item}>
                {item}
              </div>
            ))
          : "No items available"}
      </section>
      <hr />
      <AddProject />
    </div>
  );
}
