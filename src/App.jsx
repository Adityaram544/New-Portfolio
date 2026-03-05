// ============================================================
// App.jsx — Root component, assembles all sections in order
// ============================================================

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  return (
    // Dark background base for the whole app
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* Fixed top navigation */}
      <Navbar />

      {/* Page sections in order */}
      <main>
        <Hero />              {/* Full-screen landing */}
        <About />             {/* About me */}
        <Skills />            {/* Tech stack */}
        <Projects />          {/* Portfolio projects */}
        <Certifications />    {/* Certifications */}
        <Contact />           {/* Contact form */}
      </main>

      <Footer />
    </div>
  );
}
