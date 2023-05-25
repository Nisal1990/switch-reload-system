import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

function Header({userType, navItems}) {
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then( res => {
           window.location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div class="ui inverted menu">
      {navItems.map((navItem) => (
        <Link className='item' to={navItem.url}>{navItem.title}</Link>
      ))}
  {/* <a class="item active">
    Home
  </a>
  <a class="item">
    Messages
  </a>
  <a class="item">
    Friends
  </a> */}
  <div class="right menu">
    <div class="item">
    <h3>{userType}</h3>
    </div>
    <a onClick={handleLogout} class="ui item">
      Logout
    </a>
  </div>
</div>
    // <div>Header
    //     <button onClick={handleLogout}>Logout</button>
    // </div>
  )
}

export default Header