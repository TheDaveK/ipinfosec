import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (8).png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useEffect, useState } from 'react'
import './contact.css'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
  
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
    const text = "Connect with IPINFOSEC to strengthen your digital security. Whether you need expert consultation, advanced threat protection, or a complete cybersecurity strategy, our team is ready to help."
  
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
      <Header title="Get In Touch" image={HeaderImage}>
        <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
      </Header>
      <ContactForm/>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
             <a href="mailto:ipinfosec.in@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail /> </a>
             <a href="https://www.instagram.com/ipinfosec" target="_blank" rel="noreferrer noopener"><BsMessenger /></a>
             <a href="https://wa.me/+" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp /></a>
          </div>
      </div>
     </section>
    </>
  )
}

export default Contact
