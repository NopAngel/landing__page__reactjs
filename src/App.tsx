import Footer from "./components/footer.tsx"
import Navbar from "./components/navbar"
import Features from "./section/Features"
import Hero from "./section/Hero"
import Interface from "./section/Interface.tsx"

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Interface />
      <Footer />
    </main>
  )
}

export default App