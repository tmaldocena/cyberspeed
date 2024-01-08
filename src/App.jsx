import './App.css'
import Footer from './components/Footer'
import { Nav } from './components/Nav'
import AboutUs from './sections/AboutUs'
import Design from './sections/Design'
import Hero from './sections/Hero'
import LeapNow from './sections/LeapNow'
import MoreInfo from './sections/MoreInfo'
import Prices from './sections/Prices'
import Promo from './sections/Promo'
import Specs from './sections/Specs'

function App() {

  return (
    <>
    <div style={{'--image': 'url("/img/car.jpg")'}} className='bg-[image:var(--image)] bg-cover xl:bg-center md:bg-center bg-left bg-no-repeat'>
      <div className='bg-main/40'>
        <Nav />
        <Hero />
      </div>
    </div>
      <AboutUs />
      <div style={{'--background': 'url("/img/sky.gif")'}} className='bg-[image:var(--background)] bg-cover bg-center'>
        <Promo />
      </div>
      <LeapNow />
      <MoreInfo />
      <Specs />
      <Design />
      <div style={{'--background': 'url("/img/Mars.jpg")'}} className='bg-[image:var(--background)] bg-cover bg-center'>
        <div className='bg-gradient-to-b from-main via-second/30 to-second/30'>
          <Prices />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
