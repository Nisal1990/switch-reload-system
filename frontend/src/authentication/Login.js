import React, { useEffect, useState } from "react";
import LogoImg from "../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import InputField from "./InputField";
import axios from "axios";

function Login() {
  const inputFields = [
    {
      id: 1,
      icon: "icon user",
      type: "text",
      name: "username",
      placeholder: "User Name/ ID",
      errorMessage:
        "User name should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      icon: "icon lock",
      type: "password",
      name: "password",
      placeholder: "Password",
      errorMessage: "Please enter correct password",
      // pattern: '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/',
      required: true,
    },
  ];
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:9000/login', values)
      .then(res => {
        if (res.data.Login) {
          navigate('/');
        } else {
          alert("No records");
        }
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  const onChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }))
  };
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:9000')
    .then( res => {
        if(res.data.valid){
            navigate('/');
        } else {
            navigate('/login')
        }
    })
    .catch(err => console.log(err))
}, [])
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
        <form className="ui large form error" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="ui stacked segment">
            {inputFields.map((input) => (
              <InputField
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            {/* <button className="ui fluid large orange submit button">
              Login
            </button> */}
          </div>
        </form>
        <Link to="/merchant/dashboard" className="ui fluid large orange submit button">
              Login
            </Link>

        <div className="ui message">
          New to us? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
