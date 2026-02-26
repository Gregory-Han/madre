import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Values from './components/Values'
import Policy from './components/Policy'
import Voucher from './components/Voucher'
import Contact from './components/Contact'
import Social from './components/Social'
import GovernmentSupport from './components/GovernmentSupport'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Values />
        <Policy />
        <Voucher />
        <Contact />
        <Social />
        <GovernmentSupport />
      </main>
      <Footer />
    </div>
  )
}

export default App
