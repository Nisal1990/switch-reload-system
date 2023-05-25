import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import dialoglogo from '../assets/images/logos/dialog.png'
import airtellogo from '../assets/images/logos/airtel.png'
import mobitellogo from '../assets/images/logos/slt.png'
import hutchlogo from '../assets/images/logos/hutch.png'
import ceblogo from '../assets/images/logos/ceb.png'
import waterboardlogo from '../assets/images/logos/waterboard.png'

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
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={dialoglogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={mobitellogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={airtellogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={hutchlogo}/></Link>
            </div>
          </div>
          <hr/>
          <h4>Internet</h4>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={dialoglogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={mobitellogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={airtellogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={hutchlogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={mobitellogo}/></Link>
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
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={mobitellogo}/></Link>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <Link to="/merchant/pay-bills/paynow" class="header"><img src={dialoglogo}/></Link>
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
