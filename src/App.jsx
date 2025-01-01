import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"
import Projects from "./sections/Projects"

const App = () => {
  return (
    <main className='max-w-full mx-auto mb-96'>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto">
        <About />
        <Projects />
      </div>
    </main>
  )
}

export default App