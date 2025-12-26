import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (9).png'
import Card from '../../UI/Card'
import { services } from '../../data'
import './services.css'
import Mainservice from '../../components/Mainservice'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
const Services = () => { 

  const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [loopNum, setLoopNum] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(150)
    
      const text = "Digital Shield – Essential vulnerability assessment and proactive threat protection.Cyber Fortification – Advanced security testing, monitoring, and incident response.Zero-Trust Command – Enterprise-grade defense with 24/7 monitoring and intelligent threat control."
    
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
      <Header title="Service plan" image={HeaderImage}>
        <p className="typing-text">
            {displayText}
            <span className="cursor">|</span>
          </p>
      </Header>
      <Mainservice/>
{/*     
      <section className='service'>
        <div className="container service__container">
          {
            services.map(({ id, name, desc, price, features }) => {
              return (
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`$${price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    features.map(({ feature, available }, index,) => { 
                      return (
                        <p 
                          key={index} 
                          className={!available ? 'disabled' : ''}
                        >
                          {feature} 
                        </p>
                      )
                    })
                  }
                  <br />
                  <Link to="/contact" className="btn lg">Service </Link>
                  <button className='btn lg' >Service</button>
                </Card>
              )
            })
          }
        </div>
      </section> */}
    </>
  )
}

export default Services 