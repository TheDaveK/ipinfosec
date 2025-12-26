import { useEffect, useState } from 'react'
import Card from '../../UI/Card';
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (11).png'
import { GiClusterBomb } from "react-icons/gi";
import { MdOutlinePhishing,MdDevicesOther } from "react-icons/md";
import { GiTrojanHorse,GiTripleSkulls,GiBreakingChain } from "react-icons/gi";
import { HiServerStack } from "react-icons/hi2";
import { GrThreats } from "react-icons/gr";
import { TbCloudComputing } from "react-icons/tb";
import { FaMobileScreenButton } from "react-icons/fa6";
import { BsDatabaseFillSlash } from "react-icons/bs";
import { PiNumberSquareZeroFill } from "react-icons/pi";
import { SiTestinglibrary } from "react-icons/si";





const Threats = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const text = "Threats in cybersecurity mean anything that can harm your computer, network, or data. It's something that can attack, damage, or steal information."
  
  useEffect(() => {
    let timer
    const handleType = () => {
      const fullText = text
      const currentText = displayText

      setDisplayText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      )

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, text])

  // Threat data array for better maintainability
  const threatsData = [
    { id: 1, icon: <GiClusterBomb/>, title: "Malware Threats", description: "Malicious software designed to harm computer systems" },
    { id: 2, icon: <MdOutlinePhishing/>, title: "Phishing Attacks", description: "Fraudulent attempts to obtain sensitive information" },
    { id: 3, icon: <GiTripleSkulls/>, title: "Ransomware", description: "Malware that encrypts files and demands payment" },
    { id: 4, icon: <HiServerStack/>, title: "DDoS Attacks", description: "Overwhelming systems with traffic to disrupt service" },
    { id: 5, icon: <GrThreats/>, title: "Insider Threats", description: "Security risks from within the organization" },
    { id: 6, icon: <SiTestinglibrary/>, title: "Social Engineering", description: "Manipulating people to reveal confidential information" },
    { id: 7, icon: <PiNumberSquareZeroFill/>, title: "Zero-Day Exploits", description: "Attacks targeting unknown vulnerabilities" },
    { id: 8, icon: <BsDatabaseFillSlash/>, title: "Data Breaches", description: "Unauthorized access to confidential data" },
    { id: 9, icon: <MdDevicesOther/>, title: "IoT Vulnerabilities", description: "Security flaws in Internet of Things devices" },
    { id: 10,icon: <GiBreakingChain/>, title: "Supply Chain Attacks", description: "Compromising software through third-party providers" },
    { id: 11,icon: <TbCloudComputing/>, title: "Cloud Security Threats", description: "Risks associated with cloud computing services" },
    { id: 12,icon: <FaMobileScreenButton/>, title: "Mobile Security Threats", description: "Attacks targeting smartphones and tablets" }
  ]

  return (
    <>
      <Header title="Threats" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
      
      <section className="threats">
        <div className="container threats__container">
          <div className="values__wrapper">
            {threatsData.map(({ id, icon, title, description }) => (
              <Card key={id} className="values__value"> 
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{description}</small>
              
              </Card>
            ))}
            </div>
          </div>
      </section>
    </>
  )
}

export default Threats