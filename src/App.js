import "./App.css";
import About from "./components/About/About.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Works from "./components/Works/Works.component";
import Resume from "./components/Resume/Resume.component";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <About />
        <Resume />
        <Works />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
