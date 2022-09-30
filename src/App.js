import "./App.css";
import AddNewTodo from "./components/addnewtodo/AddNewTodo";
import Main from "./components/main/Main";
import Todos from "./components/todo/Todos";
import Calendar from "./components/calendar/Calendar";
// import User from "./components/User";
// import Calendar from "./components/Calendar";
// import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="App">
        <Calendar />
        <Main />
      </div>
    </>
  );
}

export default App;
