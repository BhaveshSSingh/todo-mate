import { ProjectSection } from "././project/ProjectSection";
import React from "react";
import "./Sidebar.css";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar2Event, BsCaretUp } from "react-icons/bs";
import { useContext } from "react";
import { TodoContext } from "../context";

export default function Sidebar() {
  const calendarItems = ["today", "next 7 days", "all days"];
  // CONTEXT
  const { setSelectedProject } = useContext(TodoContext);

  return (
    <div className="Sidebar">
      {/* Calendar Section */}

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
              <div
                className="Sidebar__day"
                key={item}
                onClick={() => setSelectedProject(item.name)}
              >
                {item}
              </div>
            ))
          : "No items available"}
      </section>
      <hr />
      {/* ProjectSection */}
      <ProjectSection />
    </div>
  );
}
