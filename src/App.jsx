import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"
import ScrollToTop from './components/ScrollToTop';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
