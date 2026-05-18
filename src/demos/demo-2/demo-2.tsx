import { useState } from 'react'
import './demo-2.css'

export function Demo() {
const [isOpen, setIsOpen] = useState(false)



  return (
    <div className="demo-2-input-wrap">
      <span className="demo-2-input-icon"
      onClick={() => setIsOpen(!isOpen)}
      >+</span>
      <input 
      type="text" 
      className="demo-2-input"
      placeholder="Ask me anything"
      />

      {isOpen && (
        <div className="demo-2-input-modal">
          <h1>Hello World</h1>
        </div>
      )}  
    </div>
  )
}
