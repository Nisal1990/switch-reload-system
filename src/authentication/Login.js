import React, { useEffect, useRef, useState } from "react";
import LogoImg from "../assets/images/logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputField from "./InputField";
import useAuth from "../hooks/useAuth";
import axios from "../api/axios";
const LOGIN_URL = '/auth';

// https://github.com/gitdagray/react_protected_routes/blob/main/src/components/LinkPage.js 
// https://www.youtube.com/watch?v=oUZjO00NkhY&ab_channel=DaveGray
function Login() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // const userRef = useRef();
  // const errRef = useRef();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState('');

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg('');
}, [userName, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ userName, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ userName, password, roles, accessToken });
      setUserName("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
    } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
    } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
    } else {
        setErrMsg('Login Failed');
    }
    // errRef.current.focus();
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

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
      // pattern: '^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$',
      required: true,
    },
  ];

  return (
    <>
    {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
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
            <button className="ui fluid large orange submit button">
              Login
            </button>
          </div>
        </form>

        <div className="ui message">
          New to us? <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
