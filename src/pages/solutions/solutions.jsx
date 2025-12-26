import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (10).png'
import { useEffect, useState } from 'react'
import './solutions.css'

const Solutions = () => { 
  const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)
    
      const text = "Fruga itaque ducimus, ad amet praesentium suscipit sit, assumenda nihil officia totam, animi culpa nobis nemo natus doloremque"
    
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
      }, [displayText, isDeleting, loopNum, typingSpeed])


  return (
    <>
      <Header title="Solutions" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
    </>
  )
}

export default Solutions