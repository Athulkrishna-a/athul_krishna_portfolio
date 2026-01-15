import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectsPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,     
      once: true,         
      easing: 'ease-in-out',
    })
  }, [])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
