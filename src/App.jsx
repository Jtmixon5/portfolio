import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <h1>Jacob Mixon</h1>
        <h2>Georgia Tech Computer Science Graduate</h2>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Education Section */}
      <section id="education" className="education-section">
        <h2 className="section-headers">Education</h2>
        <p>
          Georgia Institute of Technology, Bachelor of Science in Computer Science
          <br />GPA: 3.42 | Awards: High Honors, Faculty Honors, Dean's List

        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-headers">Projects</h2>
        
        {/* Add more project cards as needed */}
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-headers">Skills</h2>
        <p>
          Java | C/C++ | C# | JavaScript/React | Python | Communication | 
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-headers">Contact</h2>
        <p>Email: <a href="mailto:jtmixon10@gmail.com"target="_blank">jtmixon10@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/Jtmixon5"target="_blank">github.com/Jtmixon5</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/jacobmixon"target="_blank">linkedin.com/in/JacobMixon</a></p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2025 Jacob Mixon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;