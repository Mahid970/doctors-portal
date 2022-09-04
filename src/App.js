import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Appoinment from "./Pages/Appointment/Appointment";
import Footer from "./Pages/Shared/Footer";
import SignUp from "./Pages/Signup/SignUp";
import RequireAuth from "./Pages/Login/RequireAuth";

function App() {
  return (
    <div className="lg:px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
