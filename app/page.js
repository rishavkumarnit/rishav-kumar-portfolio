import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Footer from "./components/Footer"
require("dotenv").config();

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}
