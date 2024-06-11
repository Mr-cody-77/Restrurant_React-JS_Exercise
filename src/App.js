import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch as sw, Routes } from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Navbar from './Pages/Navbar.js'
import Footer from './Pages/Footer.js'
import Orders from './Pages/Orders.js'
import Login from './Pages/Login.js'
import PrivacyPolicy from './Pages/PrivacyPolicy.js'

function App() {
  return (

    <Router>
      <Navbar/>
      <sw>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/orders" Component={Orders}></Route>
          <Route exact path="/Login" Component={Login}></Route>
          <Route exact path="/PrivacyPolicy" Component={PrivacyPolicy}></Route>
        </Routes>
      </sw>
      <Footer/>
    </Router>
  );
}

export default App;
