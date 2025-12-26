import Header from '../../components/Header'
import HeaderImage from '../../images/15.png'
import { useEffect, useState } from 'react'
import SectionHeader from '../../components/SectionHeade'
import { FcNegativeDynamic } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import Card from '../../UI/Card';
import './Defensivemeasures.css'
import { LiaUserSecretSolid } from "react-icons/lia";






const DefensiveMeasures = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
    const text = "Defensive measures mean the ways we protect computers, networks, and data from attacks."
  
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

    const Defensivemeasures = [
        { id: 1, icon: <LiaUserSecretSolid/>, title: "Security Analyst", description: "Monitors and stops cyber threats." },
        { id: 2, icon: <LiaUserSecretSolid/>, title: "Network Administrator", description: "Manages and secures computer networks." },
        { id: 3, icon: <LiaUserSecretSolid/>, title: "Penetration Tester (Ethical Hacker)", description: "Finds weaknesses before hackers do." },
        { id: 4, icon: <LiaUserSecretSolid/>, title: "Incident Responder", description: "Handles cyberattacks and recovers systems." },
        { id: 5, icon: <LiaUserSecretSolid/>, title: "Security Engineer", description: "Builds and maintains security systems." },
        { id: 6, icon: <LiaUserSecretSolid/>, title: "SOC Analyst (Security Operations Center)", description: "Watches for suspicious activity 24/7." },
        { id: 7, icon: <LiaUserSecretSolid/>, title: "Cybersecurity Manager", description: "Leads the security team and plans protection strategies." },
        { id: 8, icon: <LiaUserSecretSolid/>, title: "Forensic Expert", description: "Investigates how an attack happened." },
        { id: 9, icon: <LiaUserSecretSolid/>, title: "Compliance Officer", description: "Ensures security rules and laws are followed." },
        { id: 10,icon: <LiaUserSecretSolid/>, title: "IT Support / Helpdesk", description: "Helps users fix security and system issues." },
      
      ]

  return (
    <>
      <Header title="Defensive Measures" image={HeaderImage}>
        <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
      </Header>
      <section className="Service">
      <div className="container Service__container">
        <SectionHeader icon={<FcNegativeDynamic />} title="Top Security Challenges Every Business Must Overcome"/>
        
        {/* Moved programs__wrapper inside container for proper layout */}
        <div className="Service__wrapper">
          {
            Defensivemeasures.map(({id, icon, title, description, path}) => ( // Fixed: replaced curly braces with parentheses for implicit return
              <Card className="Service__program" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{description}</small>
                {/* <Link to={path} className="btn sm">
                  Learn More <AiFillCaretRight/>
                </Link> */}
              </Card>
            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default DefensiveMeasures
