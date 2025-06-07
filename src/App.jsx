import { Link } from "react-scroll"
import Academic from "./components/Academic"
import Certificates from "./components/Certificates"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { FaAngleDoubleUp } from "react-icons/fa";

function App() {
  return (
      <div className="w-screen relative overflow-x-hidden bg-black text-white flex flex-col items-center font-bold">
        <Link to="details" smooth={true} spy={true}><div className="fixed z-1000 bottom-[5rem] right-[1rem] cursor-pointer w-[3rem] h-[3rem] rounded-full flex items-center justify-center text-4xl bg-purple-700 hover:bg-purple-400"><FaAngleDoubleUp/></div></Link>
        <Details />
        <Projects />
        <Skills />
        <Certificates />
        <Academic />
        <Footer />
      </div>
  )
}

export default App