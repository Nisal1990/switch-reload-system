import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function PayBills() {
  const userType = "Merchant";
  const navItems = [
    {
      title: "Dashboard",
      url: "/merchant/dashboard",
    },
    {
      title: "Pay Bills",
      url: "/merchant/pay-bills",
    },
    {
      title: "Transaction History",
      url: "/merchant/transaction-history",
    },
  ];
  return (
    <div>
      <Header userType={userType} navItems={navItems} />
      <div className="ui container">
        <h3>Pay bills</h3>
        <hr />
        <div className="ui category search" style={{ marginTop: "15px" }}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Search biller..."
            />
            <i className="search icon"></i>
          </div>
          <div className="results"></div>
        </div>
        
        <div class="ui relaxed divided list" style={{ marginTop: "15px" }}>
          <h4>Mobile</h4>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Dialog</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Mobitel</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Airtel</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Hutch</Link>
            </div>
          </div>
          <hr/>
          <h4>Internet</h4>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Dialog</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Mobitel</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Airtel</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Hutch</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">SLT</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Lankabell</Link>
            </div>
          </div>
          <hr/>
          <h4>Television</h4>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">SLT Peo TV</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Dialog TV</Link>
            </div>
          </div>
          <hr/>
          <h4>Electricity</h4>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">CEB</Link>
            </div>
          </div>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Private</Link>
            </div>
          </div>
          <hr/>
          <h4>Water</h4>
          <div class="item">
            <i class="large github middle aligned icon"></i>
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header">Waterboard</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayBills;
