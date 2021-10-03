import "./App.css";
import About from "./components/About/About.component";
import Contact from "./components/Contact/Contact.component";
import Footer from "./components/Footer/Footer.component";
import Navbar from "./components/Navbar/Navbar.component";
import Portfolio from "./components/Portfolio/Portfolio.component";
import Skills from "./components/Skills/Skills.component";
import Text from "./components/text";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
        <Text />
      </div>
    </div>
  );
}

export default App;
