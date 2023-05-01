// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Error404 from './pages/Error404';
import Dashboard from './pages/Dashboard';
import Admin from './Admin/Admin';
import Agent from './Agent/Agent';
import RequireAuth from './authentication/RequireAuth';
import Merchant from './Merchant/Merchant';
import Unauthorized from './authentication/Unauthorized';
import Lounge from './authentication/Lounge';

const ROLES = {
  'Admin': 2001,
  'Agent': 1984,
  'Merchant': 5150
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/unauthorized" element={<Unauthorized/>}/>
        {/* main screens  */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
        <Route path="/admin" element={<Admin/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Agent]}/>}>
        <Route path="/agent" element={<Agent/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Merchant]}/>}>
        <Route path="/merchant" element={<Merchant/>} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Agent, ROLES.Merchant]}/>}>
        <Route path="/lounge" element={<Lounge/>} />
        </Route>
        

        {/* catch all  */}
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
