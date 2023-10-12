import React, { useState } from "react";
import SigninForm from "../components/SigninForm";
import axios from "axios";
import { errorToast, successToast } from "../services/toast.service";

const Signin = () => {
  const [inputData, setInputData] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    setInputData((prev) => {
      // console.log({...prev,[e.target.name]:e.target.value})
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const loginHandle = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/login",
        inputData
      );
      // console.log(resp)
      if (resp.data.status) {
        successToast(resp.data.message);
      }
    } catch (error) {
      // console.log(error.response.data.message)
      errorToast(error.data.response.message);
    }
  };

  return (
    <>
      <SigninForm loginHandle={loginHandle} handleChange={handleChange} />
    </>
  );
};

export default Signin;
