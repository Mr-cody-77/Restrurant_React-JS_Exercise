import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch as sw, Routes } from 'react-router-dom';
import Home from './Pages/Home.js'
import About from './Pages/About.js'
import Navbar from './Pages/Navbar.js'
import Footer from './Pages/Footer.js'
import menu from './Pages/menu.js'
import Login from './Pages/Login.js'
import PrivacyPolicy from './Pages/PrivacyPolicy.js'
import Termsandconditions from './Pages/Termsandconditions.js'
import Contactus from './Pages/Contactus.js'

function App() {
  return (

    <div className="root">
    <Router>
      <Navbar/>
      <sw>
        <Routes>
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/menu" Component={menu}></Route>
          <Route exact path="/Login" Component={Login}></Route>
          <Route exact path="/PrivacyPolicy" Component={PrivacyPolicy}></Route>
          <Route exact path="/Termsandconditions" Component={Termsandconditions}></Route>
          <Route exact path="/Contactus" Component={Contactus}></Route>
        </Routes>
      </sw>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
