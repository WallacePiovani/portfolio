import About from "./sections/About"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

const App = () => {
  return (
    <main className='max-w-full mx-auto mb-96'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App