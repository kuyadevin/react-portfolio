import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div>
        <Navigation />
        <AboutMe />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
