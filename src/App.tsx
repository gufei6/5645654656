import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import CodeExample from './sections/CodeExample'
import Stats from './sections/Stats'
import Partners from './sections/Partners'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      <Navbar />
      <main>
        <Hero />
        <CodeExample />
        <Stats />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}

export default App
