/*I used a tutorial from PedroTech to get setup, thank you */

import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <link href="output.css" rel="stylesheet"></link>
      <Router>
        <Navbar />
          <Routes>
            <Route path = "/" exact element = {<Home/>}/>
            <Route path = "/portfolio" exact element = {<Portfolio/>}/>
            <Route path = "/about" exact element = {<About/>}/>
            <Route path = "/contact" exact element = {<Contact/>}/>
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
