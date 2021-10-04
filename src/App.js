import "./App.css";
import About from "./components/About/About.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Works from "./components/Works/Works.component";
import Resume from "./components/Resume/Resume.component";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <About />
        <Resume />
        <Works />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
