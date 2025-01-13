import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="name-section">
        <h1>Jacob Mixon</h1>
        <h2 className="contact-info">
        <p>
      <a 
        href="https://www.linkedin.com/in/jacobmixon/"
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        LinkedIn
      </a>
       {" "}| jtmixon10@gmail.com | U.S. Citizen
        </p>
      </h2>
      </div>
      <div className="education-section">
        <h1>Education</h1>
      </div> 
    </>
  )
}

export default App