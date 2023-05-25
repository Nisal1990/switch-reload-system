import React from 'react'
import Header from '../components/Header'

function Admin() {
  const userType = "Admin"
  return (
    <div>
        <Header userType={userType}/>
  </div>
  )
}

export default Admin