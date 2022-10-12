import React, { useEffect, useState } from "react";
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
import { useContext } from "react";
import { TodoContext } from "../../context";
import { calendarItems } from "../../constant";
import firebase from "../../firebase";
import moment from "moment/moment";
import randomColor from "randomcolor";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
  },
});
function AddNewTodo() {
  // COntext
  const { projects, selectedProject } = useContext(TodoContext);

  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState(selectedProject);

  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

  function handleSubmit(e) {
    e.preventDefault();
    if (text && !calendarItems.includes(todoProject)) {
      firebase
        .firestore()
        .collection("todos")
        .add({
          checked: false,
          color: randomColor(),
          date: moment(day).format("MM/DD/YYYY"),
          day: moment(day).format("d"),
          projectName: todoProject,
          text: text,
          time: moment(time).format("hh:mm A"),
        });
      setShowModal(false);
      setText("");
      setDay(new Date());
      setTime(new Date());
      toast.success("Todo Added Successfully!");
    } else {
      toast.error("Write the todo and select a project!");
    }
  }

  return (
    <>
      <button className="addnewtodo" onClick={() => setShowModal(true)}>
        <SiTodoist className="todoist__icon" /> New Todo
        <IoAddSharp className="plus__icon" />
      </button>
      {/* Modal */}
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {/* Todo Form */}
        <ThemeProvider theme={defaultMaterialTheme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
              <div className="newtodo__modal__header">
                <h3>Add a new to do!</h3>

                <button onClick={() => setShowModal(false)}>
                  <MdOutlineCancel size={20} color={"var(--red)"} />
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
                  {projects.length > 0 ? (
                    projects.map((project) => (
                      <button
                        className={`select__project__btn ${
                          todoProject === project.name ? "active" : ""
                        }`}
                        onClick={() => setTodoProject(project.name)}
                        key={project.id}
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
              <button className="add__button__full" onClick={handleSubmit}>
                + Add Todo
              </button>
            </div>
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </Modal>
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />
    </>
  );
}

export default AddNewTodo;
