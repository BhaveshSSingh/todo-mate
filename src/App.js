import "./App.css";
import Login from "./components/login/Login";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/Sidebar";
import { auth } from "./components/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div className="App">
          <Sidebar user={user} />
          <Main />
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
