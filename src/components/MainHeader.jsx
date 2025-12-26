// import { Link } from 'react-router-dom'
// import Image from '../images/main done logo.png'

// const MainHeader = () => {
//   return (
//     <header className="main__header">
//       <div className="container main__header-container">
//         <div className="main__header-left">
//           <h4> <h2>Security 360</h2>CYBER SECURITY SERVICE</h4>
//           <h1>The IPinfosec</h1>
//           <p>IPinfosec is a cybersecurity company delivering services globally.</p>
//           <Link to="/Service" className="btn lg">Get Started</Link>
//         </div>
//         <div className="main__header-right">
//           <div className="main__header-circle"></div>
//           <div className="main__header-image">
//             <img src={Image} alt="Cyber Security Visualization" />
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default MainHeader

// ====================================================================

import { Link } from 'react-router-dom'
// import Image from '../images/main done logo.png'
import { useEffect, useState } from 'react'
import ParticleMap from '../components/ParticleMap';
const MainHeader = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const text = "IPinfosec is a cybersecurity company delivering services globally"

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
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4><h2>Security 360</h2>CYBER SECURITY SERVICE</h4>
          <h1 className="company-name">The IPinfosec</h1>
          <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
          <Link to="/services" className="btn lg hover-3d">Get Started</Link>
        </div>
        <div className="main__header-right">
          {/* <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Cyber Security Visualization" className="image-3d" />
          </div> */}
           <div className="App">
            <ParticleMap />
          </div>
        </div>
  
      </div>
    </header>
  )
}

export default MainHeader