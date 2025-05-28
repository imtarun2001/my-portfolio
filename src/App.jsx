import Academic from "./components/Academic"
import Certificates from "./components/Certificates"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="w-screen overflow-x-hidden bg-white text-black flex flex-col items-center gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-[1rem] font-bold
    ">
      
      <div className="w-full max-w-7xl">
        <Details />
        <Projects />
        <Skills />
        <Certificates />
        <Academic />
        <Footer />
      </div>

    </div>
  )
}

export default App