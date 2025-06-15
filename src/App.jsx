import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import AboutSection from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0C1C2C] text-white min-h-screen">
      <Navbar />
      <Hero />
      <AboutSection />
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;