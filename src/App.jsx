import './App.css'
import About from './components/sections/About'
import Banner from './components/sections/Banner'
import Contact from './components/sections/Contact'
import Join from './components/sections/Join'
import Mission from './components/sections/Mission'
import Navbar from './components/sections/Navbar'
import Service from './components/sections/Service'
import Testimonials from './components/sections/Testimonials'
import Footer from './components/sections/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Service />
      <Mission/>
      <Testimonials/>
      <Join/>
      <Contact/>
      <Footer />
    </>
  )
}

export default App
