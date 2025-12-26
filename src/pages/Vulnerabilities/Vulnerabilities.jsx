import Header from '../../components/Header'
import HeaderImage from '../../images/14.png'
import { useEffect, useState } from 'react'
import Card from '../../UI/Card';
import './Vulnerabilities.css'
import { LiaUserSecretSolid } from "react-icons/lia";
import SectionHeader from '../../components/SectionHeade'
import { FcNegativeDynamic } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";
import { GrCloudSoftware } from "react-icons/gr";
import { GiWifiRouter,GiKeyCard } from "react-icons/gi";
import { MdEnhancedEncryption,MdOutlinePhishing } from "react-icons/md";
import { SiAmazoniam,SiCodechef,SiPcgamingwiki,SiTheodinproject,SiTestinglibrary,SiRootme  } from "react-icons/si";
import { PiNetworkXFill } from "react-icons/pi";
import { BsDatabaseFillX } from "react-icons/bs";
import { GiLaptop } from "react-icons/gi";




const Vulnerabilities = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
    const text = "Vulnerabilities mean weak points or flaws in a computer, network, or software that hackers can use to attack."
  
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

const Vulnerabilities = [
    { id: 1, icon: <GiKeyCard/>, title: "Weak Passwords", description: "easy for hackers to guess" },
    { id: 2, icon: <GrCloudSoftware/>, title: "Outdated Software", description: "old versions with security holes" },
    { id: 3, icon: <GiLaptop/>, title: "Unpatched Systems", description: "missing important security updates" },
    { id: 4, icon: <SiAmazoniam/>, title: "Misconfiguration", description: "wrong or unsafe system settings" },
    { id: 5, icon: <GiWifiRouter/>, title: "Unsecured Wi-Fi Networks", description: "open to anyone nearby" },
    { id: 6, icon: <MdOutlinePhishing/>, title: "Phishing Attacks", description: "users tricked by fake emails or links" },
    { id: 7, icon: <PiNetworkXFill/>, title: "Poor Access Control", description: "too many people have admin rights" },
    { id: 8, icon: <MdEnhancedEncryption/>, title: "No Data Encryption", description: "data not protected, easy to read if stolen" },
    { id: 9, icon: <SiRootme/>, title: "Open Network Ports", description: "unused ports that hackers can exploit" },
    { id: 10,icon: <LiaUserSecretSolid/>, title: "Weak Firewalls", description: "not blocking harmful traffic" },
    { id: 11,icon: <SiCodechef />, title: "Human Errors", description: "staff mistakes like clicking bad links" },
    { id: 12,icon: <SiPcgamingwiki/>, title: "Default Credentials", description: "using factory-set usernames/passwords" },
    { id: 12,icon: <SiTestinglibrary/>, title: "Insecure Applications", description: "apps with coding flaws" },
    { id: 12,icon: <BsDatabaseFillX/>, title: "Missing Backups", description: "no recovery if data is lost or encrypted" },
    { id: 12,icon: <SiTheodinproject/>, title: "Lack of Monitoring", description: "attacks go unnoticed for too long" }
  ]

  return (
    <>
      <Header title="Vulnerabilities" image={HeaderImage}>
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
            Vulnerabilities.map(({id, icon, title, description, path}) => ( // Fixed: replaced curly braces with parentheses for implicit return
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

export default Vulnerabilities
