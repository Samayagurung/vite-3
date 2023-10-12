import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/product" element={<Products />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
