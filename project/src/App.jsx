import './App.css'
import Hero from './components/Hero'
import Principles from './components/Principles'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Principles />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
