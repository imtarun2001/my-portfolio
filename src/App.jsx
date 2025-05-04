import Academic from "./components/Academic"
import Certificates from "./components/Certificates"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-800 text-white flex flex-col items-center gap-10 px-4 sm:px-8 md:px-16 lg:px-24 py-10 font-bold">
      
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