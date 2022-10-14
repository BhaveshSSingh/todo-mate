import "./App.css";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      {/* {user ? } */}
      <Login />
      <div className="App">
        <Sidebar />
        <Main />
      </div>
    </>
  );
}

export default App;
