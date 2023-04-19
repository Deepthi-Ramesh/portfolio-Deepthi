import "./App.css";
import About from './components/About/About';
import Certifications from './components/Certifiactions/certifiactions';
import Contact from './components/contact/contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Skills from './components/myskills/skills';
import Portfolio from './components/portfolio/portfolio';
function Port() {
  return (
    <div className="port">
      <header><Header/></header>
      <div><Home/></div>
       <div><About/></div> 
        <div><Portfolio/></div>
        <div><Skills/></div>
        <div><Contact/></div>
        <div><Footer/></div>
    
    </div>
  );
}

export default Port;
