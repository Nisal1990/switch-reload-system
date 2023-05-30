import React, { useState } from "react";
import LogoImg from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import axios from 'axios';

function Signup() {

  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    telephone: "",
    password: "",
    confirmpassword: ""
  });

  const navigate = useNavigate();
  
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
      required: true
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
        // pattern: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/',
        required: true,
    },
    {
      id: 6,
      icon: "icon lock",
      type: "password",
      name: "confirmpassword",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match",
      pattern: values.password,
      required: true,
    },
  ];



  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/signup', values)
    .then(res => 
      {
        navigate('/');
      })
    .catch(err => console.log(err));
  };

  const onChange = (e) => {
    setValues( prev => ({...prev, [e.target.name]: [e.target.value]}))
  };
  console.log(values);
  return (
    <div
      className="ui middle aligned center aligned grid"
      style={{ height: "100vh" }}
    >
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui center aligned icon header">
          {/* Welcome <br /> */}
          <img
            src={LogoImg}
            className="ui big image"
            style={{ width: "30%" }}
          />{" "}
          {/* Reload System */}
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
            <button type="submit" className="ui fluid large orange submit button">
              Sign Up
            </button>
          </div>
        </form>

        <div className="ui message">
          Login here? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
