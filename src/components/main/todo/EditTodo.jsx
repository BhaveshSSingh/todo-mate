import React, { useContext, useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import { MdOutlineCancel } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { ThemeProvider } from "@material-ui/styles";
import {
  DatePicker,
  TimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { BsBell, BsFillCalendar2DayFill, BsClock } from "react-icons/bs";
import { TodoContext } from "../../context";
import { calendarItems, defaultMaterialTheme } from "../../constant";
import moment from "moment/moment";
import firebase from "../../firebase";
import { toast } from "react-toastify";

export function EditTodo({ showModal, setShowModal, todo }) {
  const [text, setText] = useState(todo.text);

  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const { projects, selectedProject, selectedTodo } = useContext(TodoContext);

  const [todoProject, setTodoProject] = useState(selectedProject);
  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

  //
  useEffect(() => {
    if (selectedTodo) {
      setText(selectedTodo.text);
      setDay(moment(selectedTodo.date, "MM/DD/YYYY"));
      setTime(moment(selectedTodo.time, "hh:mm A"));
      setTodoProject(selectedTodo.projectName);
    }
  }, [selectedTodo]);

  function useHandleEdit(e) {
    e.preventDefault();

    if (selectedTodo && !calendarItems.includes(todoProject)) {
      firebase
        .firestore()
        .collection("todos")
        .doc(selectedTodo.id)
        .update({
          text,
          date: moment(day).format("MM/DD/YYYY"),
          day: moment(day).format("d"),
          time: moment(day).format("hh:mm A"),
          projectName: todoProject,
        });
      toast.success("Todo Edited Successfully!");
      setShowModal(false);
    } else {
      toast.error("Edit the todo and select a project!");
    }
  }

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      {/* Todo Form */}

      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          {selectedTodo && (
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
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <button
                        className={`select__project__btn ${
                          todoProject === project.name ? "active" : ""
                        }`}
                        onClick={() => setTodoProject(project.name)}
                      >
                        {project.name}
                      </button>
                    ))
                  ) : (
                    <p style={{ color: "var(--red)" }}>
                      Please add a project before proceeding
                    </p>
                  )}
                </div>
              </div>
              <button onClick={useHandleEdit} className="add__button__full">
                + Edit Todo
              </button>
            </div>
          )}
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </Modal>
  );
}
