import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="name-section">
        <h1>Jacob Mixon</h1>
        <h2>Software Developer</h2> 
      </div>
      <div className="education-section">
        <h1>Education</h1>
      </div> 
    </>
  )
}

export default App