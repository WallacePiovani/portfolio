import About from "./sections/About"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className='max-w-full mx-auto'>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

export default App