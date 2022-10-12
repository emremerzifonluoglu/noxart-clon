import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Application from "./components/application/Application";
import Guard from "./components/guard/Guard";
import Location from "./components/location/Location";
import Partners from "./components/partners/Partners";
import JoinUs from "./components/joinUs/JoinUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Application />
      <Guard />
      <Location />
      <Partners />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
