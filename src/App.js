import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Skills } from "./components/Skills/Skills";
// import { Testimonail } from "./components/Testimonail/Testimonail";

function App() {
  return (
   <div>
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Skills/>
    <Projects/>
    {/* <Testimonail/> */}
    <Contact/>
    <Footer/>
   </div>
  );
}

export default App;
