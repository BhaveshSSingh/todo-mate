import { ProjectSection } from "././project/ProjectSection";
import React from "react";
import "./Sidebar.css";
import { BsCalendar2Event, BsCaretUp } from "react-icons/bs";
import { useContext } from "react";
import { TodoContext } from "../context";
import { calendarItems } from "../constant";
import { Avatar } from "@material-ui/core";

export default function Sidebar() {
  // CONTEXT
  const { setSelectedProject } = useContext(TodoContext);
  const seed = Math.round(Math.random() * 100);
  return (
    <div className="Sidebar">
      {/* Calendar Section */}

      <section className="Sidebar__profile">
        <section>
          <Avatar
            className="profile__icon"
            src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}
          />
          <h3>Nameee</h3>
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
                // key={item}
                onClick={() => setSelectedProject(item)}
              >
                {item}
              </div>
            ))
          : "No items available"}
      </section>
      <hr />
      <ProjectSection />
    </div>
  );
}
//
