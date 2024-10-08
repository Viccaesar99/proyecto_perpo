import { Home } from "./components/Pages/Home"
import { About } from "./components/Pages/About.jsx"
import { Contact } from "./components/Pages/Contact.jsx"
import { Projects } from "./components/Pages/Projects.jsx"
import { ErrorPage } from "./components/Pages/ErrorPage.jsx"

import { Route, Routes } from "react-router-dom"

import { Header } from "./components/header/Header.jsx"
import { Footer } from './components/footer/Footer.jsx'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
