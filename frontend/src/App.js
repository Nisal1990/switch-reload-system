import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Error404 from './pages/Error404';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </div>
  );
}

export default App;
