import "./App.css";
import About from "./components/About";
import CountdownSection from "./components/CountdownSection";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Testimonials from "./components/Testimonials";
import Timeline from "./components/Timeline";

function App() {
  //start date 29/04/2024
  const startDate = new Date(2024, 3, 29, 0, 0, 0);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <OurStory />
      <Timeline />
      <Gallery />
      <CountdownSection startDate={startDate} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
