import { useEffect } from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Skills } from "./components/Skills/Skills";
import Aos from "aos";
import "aos/dist/aos.css";
// import { Testimonail } from "./components/Testimonail/Testimonail";

function App() {
  useEffect(() => {
    Aos.init();
  });
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      {/* <Testimonail/> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
