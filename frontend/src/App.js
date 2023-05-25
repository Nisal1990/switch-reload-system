import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Error404 from './pages/Error404';
import Home from './components/Home';
import Dashboard from './Merchant/Dashboard';
import TransactionHistory from './Merchant/TransactionHistory';
import PayBills from './Merchant/PayBills';
import BillForm from './Merchant/BillForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/merchant/dashboard" element={<Dashboard/>}/>
        <Route path="/merchant/transaction-history" element={<TransactionHistory/>}/>
        <Route path="/merchant/pay-bills" element={<PayBills/>}/>
        <Route path="/merchant/pay-bills/paynow" element={<BillForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
