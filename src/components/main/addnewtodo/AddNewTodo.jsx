import React, { useState } from "react";
import { SiTodoist } from "react-icons/si";
import { IoAddSharp, IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { BsBell, BsFillCalendar2DayFill, BsClock } from "react-icons/bs";
import "./AddNewTodo.css";
import Modal from "../../modal/Modal";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});
function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  // const popperSx: SxProps = {};
  return (
    <>
      <button className="addnewtodo" onClick={() => setShowModal(true)}>
        <SiTodoist className="todoist__icon" /> New Todo
        <IoAddSharp className="plus__icon" />
      </button>
      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
              <div className="newtodo__modal__header">
                <h3>Add a new to do!</h3>

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
                    <BsFillCalendar2DayFill className="icon" /> Choose a day
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
                  <BsClock className="icon" /> Choose time
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
    </>
  );
}

export default AddNewTodo;