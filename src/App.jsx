import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import ProjectDetails from "./components/ProjectDetails"; // New component

function App() {
  return (
    <Router>
      <div className="bg-[#0C1C2C] text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutSection />
              <Projects />
              <WorkExperience />
              <Contact />
            </>
          } />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
