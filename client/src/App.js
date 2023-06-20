// import logo from './logo.svg';
import "./App.css";
import Home from "./Pages/home";
import "bootstrap";
import "react-bootstrap";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { CartProvider } from "./Components/Reducer";


function App() {
  return (
 <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element = {<Home/>} />
          <Route exact path="/signup" element = {<Signup/>} />
          <Route exact path="/login" element = {<Login/>} />
          {/* <Route exact path="/myorders" element = {<Login/>} /> */}
        </Routes>

      </div>
    </Router>
    </CartProvider>
  
  );
}

export default App;
