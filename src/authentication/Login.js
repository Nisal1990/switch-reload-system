import React from "react";
import LogoImg from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import InputField from "./InputField";

function Login() {
    const LoginFields = [
        {
            id: 1,
            icon: 'user',
            type: 'text',
            name: 'username',
            placeholder: 'User Name/ ID'
        },
        {
            id: 2,
            icon: 'lock',
            type: 'password',
            name: 'password',
            placeholder: 'Password'
        }
    ]
  return (
    <div
      class="ui middle aligned center aligned grid"
      style={{ height: "100vh" }}
    >
      <div class="column" style={{ maxWidth: 450 }}>
        <h2 class="ui center aligned icon header">
          Welcome <br/><img src={LogoImg} class="ui big image" style={{width: '30%'}}/> Reload System
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            {LoginFields.map(field => {<InputField field="filed"/>})}
            
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div class="ui fluid large orange submit button">Login</div>
          </div>

          <div class="ui error message"></div>
        </form>

        <div class="ui message">
          New to us? <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
