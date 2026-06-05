import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Projects from '../components/Projects'
import Team from '../components/Team'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}