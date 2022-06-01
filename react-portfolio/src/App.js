import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";

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
        <Footer />
      </div>
    </div>
  );
}

export default App;
