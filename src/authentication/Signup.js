import React, { useRef, useState, useEffect } from "react";
import LogoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import InputField from "./InputField";

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = USER_REGEX.test(userName);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
     
      console.log(JSON.stringify(response?.data));
      // setSuccess(true);
      setUserName("");
      setPassword("");
    } catch (err) {
      // if (!err?.response) {
      //   setErrMsg("No Server Response");
      // } else if (err.response?.status === 409) {
      //   setErrMsg("Username Taken");
      // } else {
      //   setErrMsg("Registration Failed");
      // }
      // errRef.current.focus();
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    telephone: "",
    password: "",
    confirmPassword: "",
  });

  const inputFields = [
    {
      id: 1,
      icon: "icon user",
      type: "text",
      name: "firstname",
      placeholder: "Your First Name",
      errorMessage: "Your first name rquired",
      required: true,
    },
    {
      id: 2,
      icon: "icon user",
      type: "text",
      name: "lastname",
      placeholder: "Your Last Name",
      errorMessage: "Your last name rquired",
      required: true,
    },
    {
      id: 3,
      icon: "icon user",
      type: "text",
      name: "username",
      placeholder: "User Name/ ID",
      errorMessage:
        "User name should be 3-16 characters and shouldn't include any special character",
      required: true,
    },
    {
      id: 4,
      icon: "icon lock",
      type: "tel",
      name: "telephone",
      placeholder: "Your Mobile Number",
      errorMessage: "Mobile number should be 10 digits",
      required: true,
    },
    {
      id: 5,
      icon: "icon lock",
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      pattern: `^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$`,
      required: true,
    },
    {
      id: 6,
      icon: "icon lock",
      type: "password",
      name: "confirm-password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      pattern: values.password,
      required: true,
    },
  ];

  return (
    <div
      className="ui middle aligned center aligned grid"
      style={{ height: "100vh" }}
    >
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui center aligned icon header">
          Welcome <br />
          <img
            src={LogoImg}
            className="ui big image"
            style={{ width: "30%" }}
          />{" "}
          Reload System
        </h2>
        <form className="ui large form" onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="ui stacked segment">
            {inputFields.map((input) => (
              <InputField
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button className="ui fluid large orange submit button">
              Sign Up
            </button>
          </div>
        </form>

        <div className="ui message">
          New to us? <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
