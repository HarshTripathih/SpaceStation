import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <HeroSection />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
