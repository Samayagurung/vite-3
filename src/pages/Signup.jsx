import React, { useState } from "react";
import SignupForm from "../components/SignupForm";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const nav = useNavigate();

  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    // console.log(e.target.name, e.target.value)
    setInputData((prev) => {
      // console.log({...prev,[e.target.name]:e.target.value}) this console shows inputdata intime //
      return { ...prev, [e.target.name]: e.target.value };
    });
    // console.log(inputData) this console shows  the inputdata slower ///
  };

  const signupHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        inputData
      );
      if (response.data.status) {
        successToast(response.data.message);
        // console.log(response.data.message)
        nav("/signin");
      }
    } catch (error) {
      errorToast(error.response.data.message);
      // console.log(error.response.data.message)
    }
  };

  return (
    <>
      <SignupForm handleChange={handleChange} signupHandle={signupHandle} />
    </>
  );
};

export default Signup;
