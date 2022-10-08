import React, { useState } from "react";
import Modal from "../../modal/Modal";
import { MdOutlineCancel } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BsBell, BsFillCalendar2DayFill, BsClock } from "react-icons/bs";

const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});
export function EditTodo({ showModal, setShowModal, todo }) {
  const [text, setText] = useState(todo.text);
  const [day, setDay] = useState(todo.day);
  const [time, setTime] = useState(todo.time);
  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <div>
            <div className="newtodo__modal__header">
              <h3>Edit Todo</h3>

              <button onClick={() => setShowModal(false)}>
                <MdOutlineCancel size={20} color={"rgb(251, 83, 83)"} />
              </button>
            </div>
            <div className="newtodo__modal__text">
              <input
                autoFocus
                className="modal__input"
                type="text"
                placeholder="To do..."
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </div>
            <div className="newtodo__modal__text2">
              <BsBell className="icon" />
              Remind Me!
            </div>
            <div className="modal__time">
              <div className="modal__time2">
                <div>
                  <BsFillCalendar2DayFill className="icon" /> Edit date
                </div>
                <DatePicker
                  className="MuiInputBase-input"
                  value={day}
                  onChange={(day) => setDay(day)}
                  showDaysOutsideCurrentMonth
                />
                <hr />
              </div>

              <div>
                <BsClock className="icon" /> Edit time
              </div>
              <TimePicker
                className="MuiInputBase-input"
                value={time}
                onChange={(time) => setTime(time)}
              />
              <hr />
            </div>
            <div className="newtodo__modal__text3">
              <div>
                <IoColorPaletteOutline className="icon" />
                Choose a project
              </div>

              <div>
                <button className="select__project__btn">work </button>
                <button className="select__project__btn">personal</button>
                <button className="select__project__btn">other</button>
              </div>
            </div>
            <button className="add__button__full">+ Add Todo</button>
          </div>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Modal>
  );
}
