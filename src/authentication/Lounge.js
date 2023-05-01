import React from 'react'
import { Link } from 'react-router-dom'

function Lounge() {
  return (
    <section>
    <h1>The Lounge</h1>
    <br />
    <p>Admins, Agents and Merchants can hang out here.</p>
    <div className="flexGrow">
        <Link to="/">Login</Link>
    </div>
</section>
  )
}

export default Lounge