import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
