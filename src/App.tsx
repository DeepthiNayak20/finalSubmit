import "../src/style.css";
import { Route, Routes } from "react-router-dom";
import Login from "./views/login/login";
import Register from "./views/register/register";
import DashBoard from "./views/dashBoard/dashBoard";

function App() {
  const authicate = localStorage.getItem("auth");
  console.log("auth", authicate);
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />{" "}
        <Route path="*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashBoard"
          element={authicate === "true" ? <DashBoard /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
