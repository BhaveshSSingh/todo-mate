import React from "react";
import "./Calendar.css";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar2Event, BsCaretUp, BsPencil } from "react-icons/bs";
import { IoColorPaletteOutline, IoAddSharp } from "react-icons/io5";

export default function Calendar() {
  return (
    <div className="calendar">
      <section className="calendar__profile">
        <section>
          <FaUserCircle className="profile__icon" />
          <h3>Name</h3>
        </section>
        <section>
          <a href="">Logout</a>
        </section>
      </section>

      <hr />

      <section className="calendar__header">
        <div>
          <h3>
            <BsCalendar2Event size="18" className="icon" />
            Calendar
          </h3>
        </div>
        <div>
          <BsCaretUp size="20" />
        </div>
      </section>
      <hr />
      <section className="calendar__days">
        <div className="calendar__day">today</div>
        <div className="calendar__day">next 7 days</div>
        <div className="calendar__day">all days</div>
      </section>
      <hr />
      <section className="calendar__header">
        <div>
          <h3>
            <IoColorPaletteOutline className="icon" />
            Projects
          </h3>
        </div>
        <div>
          <BsPencil className="icon" />
          <IoAddSharp className="icon" />
          <BsCaretUp size="20" />
        </div>
      </section>
      <hr />
      <section className="calendar__days">
        <div className="calendar__day">today</div>
        <div className="calendar__day">next 7 days</div>
        <div className="calendar__day">all days</div>
      </section>
      <hr />
    </div>
  );
}
