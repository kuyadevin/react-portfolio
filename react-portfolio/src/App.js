import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <div>
        <Navigation />
      </div>

      <div>
        <AboutMe />
      </div>
      <div>
        <Portfolio />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
