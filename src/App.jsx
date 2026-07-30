import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Loader from './components/Loader/Loader'

const About = lazy(() => import('./components/About/About'))
const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))
const Education = lazy(() => import('./components/Education/Education'))
const Certifications = lazy(() => import('./components/Certifications/Certifications'))
const Contact = lazy(() => import('./components/Contact/Contact'))
const Footer = lazy(() => import('./components/Footer/Footer'))
const ScrollTop = lazy(() => import('./components/ScrollTop/ScrollTop'))

function App() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <ScrollTop />
      </Suspense>
    </>
  )
}

export default App
