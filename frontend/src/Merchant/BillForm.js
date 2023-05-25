import React from 'react'

function BillForm() {
  return (
    <div className="ui raised very padded text container segment" style={{marginTop: "10vh"}}>
  <h2 className="ui header">Pay your bill fast</h2>
  <form className="ui form">
  <div className="field">
    <label>Account Number</label>
    <input type="text" name="first-name" placeholder="ID/ Number"/>
  </div>
  <div className="field">
    <label>Amount</label>
    <input type="text" name="last-name" placeholder="LKR"/>
  </div>
  <div className="field">
    <div className="ui checkbox">
      <input type="checkbox" tabindex="0" class="hidden"/>
      <label>I agree to the Terms and Conditions</label>
    </div>
  </div>
  <button className="ui primary button" type="submit">Pay Now</button>
</form>
</div>
  )
}

export default BillForm