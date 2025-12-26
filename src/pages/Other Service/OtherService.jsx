import Header from '../../components/Header'
import HeaderImage from '../../images/17.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' // Added missing import
import { FcDecision, FcBullish, FcGenealogy, FcDataProtection, FcGoogle } from "react-icons/fc"
import { ImWindows8 } from "react-icons/im";
import './OtherService.css'

const OtherService = () => {
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
  }, [displayText, isDeleting, loopNum, typingSpeed])

  return (
    <>
      <Header title="Other Service" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
      <section className="Service">
        <div className="container Service__container">
          <div className="feature-card">
            <h3>Why Web Penetration Testing is Needed</h3>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon"><FcGenealogy /></span>
                <p><strong>01. Network Problem Solution</strong> – Detect weak points (like SQL injection, XSS, etc.) before attackers do.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><ImWindows8 /></span>
                <p><strong>02. Active Directory(AD)</strong> – Active Directory (AD) Setup & Problem Solutions.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><FcDataProtection /></span>
                <p><strong>03. Firewall</strong> – Firewall Problems & Their Solutions.</p>
              </div>
              <div className="feature-item">
                <span className="feature-icon"><FcGoogle /></span>
                <p><strong>04. FRC bypass </strong> – If you tell me your device brand and model (e.g., Samsung Galaxy A14, Vivo Y20, etc.), I can guide you on the official recovery or unlock process specific to that brand — completely safe and legal.</p>
              </div>
            </div>
          </div>
          <div className="Service__wrapper">
            <div className="btn-center-container">
              <Link to="/contact" className="btn sm ransomware-btn">
                Other Service
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OtherService