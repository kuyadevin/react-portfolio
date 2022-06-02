import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Resume />
        <Footer />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
