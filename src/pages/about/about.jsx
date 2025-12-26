import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (6).png'
import StoryImage from '../../images/about.png'
import VisionImage from '../../images/2.png'
import MissionImage from '../../images/3.png'
import CEOImage1 from '../../images/yash.png'
import CEOImage2 from '../../images/dave.png'
import './about.css'
import { useEffect, useState } from 'react'
const About = () => {

  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
    const text = "IPINFOSEC is a next-generation cybersecurity company delivering intelligent, proactive protection against evolving digital threats. We secure networks, data, and systems with precision, innovation, and trust."
  
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
      <Header title="About Us" image={HeaderImage}>
        <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
      </Header>
      
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              IP InfoSec was founded with a clear mission: to protect digital assets in an ever-evolving cyber landscape. What began as a passion for cybersecurity and ethical hacking has grown into a trusted security partner for businesses of all sizes. 
            </p>
            <p>
              We combine deep technical expertise, industry best practices, and a proactive security mindset to identify risks before they become threats. 
            </p>
            <p>
              At IP InfoSec, we believe cybersecurity is not just about defense—it’s about enabling confidence, resilience, and secure digital growth.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              At IP InfoSec, our vision is to be a trusted leader in cybersecurity, safeguarding digital ecosystems in an increasingly connected world. 
            </p>
            <p>
              We aim to empower organizations with proactive, intelligent, and ethical security solutions that protect critical information, ensure compliance, and enable secure digital transformation.
            </p>
            <p>
              Through continuous innovation and expertise, we strive to build a safer and more resilient cyber future.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission at IP InfoSec is to protect organizations from evolving cyber threats by delivering reliable, proactive, and innovative cybersecurity solutions.
            </p>
            <p>
              We are committed to identifying vulnerabilities, strengthening defenses, and ensuring the confidentiality, integrity, and availability of critical digital assets—helping our clients operate securely and with confidence in a digital-first world.
            </p>
            <p>
               {/* Minima tempora voluptates natus. */}
            </p>
          </div>
        </div>
      </section>

      <section className="about__ceo">
        <div className="container about__ceo-container">
          <div className="about__ceo-content">
            <div className="ceo__card">
              <div className="ceo__image-wrapper">
                <img src={CEOImage1} alt="CEO Image" />
              </div>
              <div className="ceo__info">
                <h3>CEO & Co-Founder</h3>
                <h2>Yash Hirapara</h2>
                <p>
                  Yash Hirapara is the CEO & Co-Founder of IP InfoSec, bringing a strong passion for cybersecurity and digital risk management. With a vision to build a safer digital ecosystem, he leads the company with a focus on innovation, ethical security practices, and delivering trusted cybersecurity solutions to protect organizations from modern cyber threats.
                </p>
              </div>
            </div>
            
            <div className="ceo__card">
              <div className="ceo__image-wrapper">
                <img src={CEOImage2} alt="Co-Founder Image" />
              </div>
              <div className="ceo__info">
                <h3>Founder & Co-CEO</h3>
                <h2>Dave Kalpesh</h2>
                <p>
                  Dave Kalpesh is the Founder & Co-CEO of IP InfoSec, driving the company’s vision with a strong focus on cybersecurity excellence and innovation. With a passion for building secure digital solutions, he plays a key role in shaping strategy, strengthening security practices, and helping organizations stay protected against evolving cyber threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About