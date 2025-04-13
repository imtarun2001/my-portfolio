import Academic from "./components/Academic"
import Certificates from "./components/Certificates"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {

  return (
    <div className="w-screen bg-black text-white flex flex-col justify-start items-center gap-10 font-bold min-h-screen py-2.5">

      <Details></Details>

      <Projects></Projects>

      <Skills></Skills>

      <Certificates></Certificates>

      <Academic></Academic>

      <Footer></Footer>

    </div>
  )
}

export default App
