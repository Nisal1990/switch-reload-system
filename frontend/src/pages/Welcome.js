import React from 'react'
import { Link } from 'react-router-dom'
import LogoImg from "../assets/images/logo.png";

function Welcome() {
  return (
    <div
      className="ui middle aligned center aligned grid"
      style={{ height: "100vh" }}
    >
      <div className="column" style={{ maxWidth: 450 }}>
        <h2 className="ui center aligned icon header">
          WELCOME <br />
          <img
            src={LogoImg}
            className="ui big image"
            style={{ width: "50%" }}
          />
        </h2>
        <Link to="/login" className="ui fluid large orange submit button">
              Login to system here
            </Link>
      </div>
    </div>
    // <>
    // <div>Welcome Switch Reload System</div>
    // <Link to="/merchant/dashboard" className="ui fluid large orange submit button">
    //           Login
    //         </Link>
    // </>
    
  )
}

export default Welcome