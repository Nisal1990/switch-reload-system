import React from 'react'
import Header from '../components/Header'

function Dashboard() {
  const userType = "Merchant"
  const navItems = [
    {
      title: "Dashboard",
      url: "/merchant/dashboard"
    },
    {
      title: "Pay Bills",
      url: "/merchant/pay-bills"
    },
    {
      title: "Transaction History",
      url: "/merchant/transaction-history"
    }
  ]
  return (
    <div>
    <Header userType={userType} navItems={navItems}/>
    Dashboard
  </div>
  )
}

export default Dashboard