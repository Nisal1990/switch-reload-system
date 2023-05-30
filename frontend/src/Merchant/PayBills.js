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
          <h3>Mobile</h3>
          <div class="ui grid">
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={dialoglogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={mobitellogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"20%"}} src={airtellogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={hutchlogo}/></Link></div>
        </div>
          <hr/>
          <h3>Internet</h3>
          <div class="ui grid">
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={dialoglogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={mobitellogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"20%"}} src={airtellogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={hutchlogo}/></Link></div>
        </div>
          <hr/>
          <h3>Television</h3>
          <div class="ui grid">
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={dialoglogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={mobitellogo}/></Link></div>
        </div>
          <hr/>
          <h3>Electricity</h3>
          <div class="ui grid">
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"20%"}} src={ceblogo}/></Link></div>
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={waterboardlogo}/></Link></div>
        </div>
          <hr/>
          <h4>Water</h4>
          <div class="ui grid">
          <div class="four wide column"><Link to="/merchant/pay-bills/paynow" class="header"><img style={{width:"30%"}} src={waterboardlogo}/></Link></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PayBills;
