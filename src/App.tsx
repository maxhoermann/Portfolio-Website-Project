import Navbar from './compontents/Navbar'
import Hero from './compontents/Hero'
import Education from './compontents/Education'
import Work_Experience from './compontents/WorkExperience'
import Contact from './compontents/Contact'
import Publicitations from './compontents/Publicitations'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden text-neutral-900 dark:text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen 
            bg-neutral-200 dark:bg-neutral-950 
            bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]
            dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <Education />
          <Work_Experience />
          <Publicitations />
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  )
}
export default App