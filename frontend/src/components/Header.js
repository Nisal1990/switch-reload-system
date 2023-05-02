import axios from 'axios';
import React from 'react'

function Header() {
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then( res => {
           window.location.reload();
        })
        .catch(err => console.log(err))
    }
  return (
    <div>Header
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Header