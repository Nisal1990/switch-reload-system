import React from 'react'
import Header from '../components/Header'

function TransactionHistory() {
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
    Transaction History
  </div>
  )
}

export default TransactionHistory