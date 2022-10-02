import "./App.css";
import AddNewTodo from "./components/addnewtodo/AddNewTodo";
import Main from "./components/main/Main";
import Todos from "./components/todo/Todos";
import Sidebar from "./components/sidebar/Sidebar";
// import User from "./components/User";
// import Sidebar from "./components/Sidebar";
// import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
