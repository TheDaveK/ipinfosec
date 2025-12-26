import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (4).png'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import './TechnicalSupport.css'

const TechnicalSupport = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const text = "The people or jobs that help keep systems safe."
  
  useEffect(() => {
    let timer
    const handleType = () => {
      const i = loopNum % 1
      const fullText = text

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, text])

  return (
    <>
      <Header title="Technical Support" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
      
      <div className="Service__wrapper">
        <div className="btn-center-container">
          <Link to="/contact" className="btn sm ransomware-btn">
            Technical Support
          </Link>
        </div>
      </div>
    </>
  )
}

export default TechnicalSupport