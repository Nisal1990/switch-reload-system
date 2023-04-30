import React, { useState } from "react";
import LogoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import InputField from "./InputField";

function Login() {
    const inputFields = [
        {
            id: 1,
            icon: 'icon user',
            type: 'text',
            name: 'username',
            placeholder: 'User Name/ ID',
            errorMessage: "User name should be 3-16 characters and shouldn't include any special character",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true
        },
        {
            id: 2,
            icon: 'icon lock',
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            errorMessage: 'Please enter correct password',
            pattern: '^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$',
            required: true
        }
    ]

    const [values, setValues] = useState({
      username: "",
      password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value})
    }
console.log(values);
  return (
    <div
      className="ui middle aligned center aligned grid"
      style={{ height: "100vh" }}
    >
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui center aligned icon header">
          Welcome <br/><img src={LogoImg} className="ui big image" style={{width: '30%'}}/> Reload System
        </h2>
        <form className="ui large form error" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="ui stacked segment">
            {inputFields.map(input => (<InputField key={input.id} {...input} value={values[input.name]} onChange={onChange}/>))}
            <button className="ui fluid large orange submit button">Login</button>
          </div> 
        </form>

        <div className="ui message">
          New to us? <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
