import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (1).png'
import { useEffect, useState } from 'react'
import Card from '../../UI/Card'
import { Link } from "react-router-dom"
import './PenetrationTesting.css'
import { MdOutlineWeb, MdFollowTheSigns } from "react-icons/md"
import { CgWebsite } from "react-icons/cg"
import { FaMobileAlt, FaEye } from "react-icons/fa"
import { GrCloudComputer } from "react-icons/gr"
import { MdOutlineDevices } from "react-icons/md"
import { FaMicrochip, FaFileShield } from "react-icons/fa6"
import { RiWirelessChargingFill } from "react-icons/ri"
import SectionHeader from '../../components/SectionHeade' // Fixed typo
import { FcDecision, FcBullish } from "react-icons/fc" // Added FcBullish import
import { LuNotebookPen } from "react-icons/lu"
import { AiOutlineSecurityScan } from "react-icons/ai"
import { GiExplodingPlanet, GiSkullShield } from "react-icons/gi"
import { BiSolidReport } from "react-icons/bi"

const PenetrationTesting = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const text = "Penetration testing is the art of finding vulnerabilities in a web application, computer system, or network that an attacker could exploit."
  
  useEffect(() => {
    let timer
    const handleType = () => {
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

  const Positions = [
    { id: 1, icon: <MdOutlineWeb/>, title: "Web Application Pentester", description: "Identifies vulnerabilities in web applications and services" },
    { id: 2, icon: <CgWebsite/>, title: "API Pentester", description: "Tests API endpoints for security weaknesses" },
    { id: 3, icon: <FaMobileAlt/>, title: "Mobile Application Pentester", description: "Assesses mobile app security on iOS and Android" },
    { id: 4, icon: <GrCloudComputer/>, title: "Cloud Pentester", description: "Evaluates cloud infrastructure and services security" },
    { id: 5, icon: <MdOutlineDevices/>, title: "IoT Pentester", description: "Tests Internet of Things devices and ecosystems" },
    { id: 6, icon: <CgWebsite/>, title: "Social Engineering Pentester", description: "Simulates human-based security attacks" },
    { id: 7, icon: <FaMicrochip/>, title: "Physical Pentester", description: "Tests physical security controls and access" },
    { id: 8, icon: <RiWirelessChargingFill/>, title: "Wireless Pentester", description: "Assesses wireless network security" },
    { id: 9, icon: <CgWebsite/>, title: "Automotive Security Pentester", description: "Tests vehicle systems and connectivity" },
    { id: 10, icon: <CgWebsite/>, title: "SCADA/ICS Pentester", description: "Evaluates industrial control systems security" },
  ]

  const PenetrationTestingMethodology = [
    { id: 1, icon: <LuNotebookPen/>, title: "Planning and Preparation", description: "Define scope, rules of engagement, and objectives for the security assessment" },
    { id: 2, icon: <FaEye/>, title: "Reconnaissance", description: "Gather intelligence about the target system and identify potential entry points" },
    { id: 3, icon: <AiOutlineSecurityScan/>, title: "Scanning and Enumeration", description: "Discover open ports, services, and system vulnerabilities" },
    { id: 4, icon: <FaFileShield/>, title: "Vulnerability Assessment", description: "Analyze and identify security weaknesses in the system" },
    { id: 5, icon: <GiExplodingPlanet/>, title: "Exploitation", description: "Safely exploit identified vulnerabilities to validate their impact" },
    { id: 6, icon: <GiSkullShield/>, title: "Post-Exploitation", description: "Determine value of compromised system and maintain access for analysis" },
    { id: 7, icon: <BiSolidReport/>, title: "Reporting", description: "Document findings, risks, and provide actionable remediation recommendations" },
    { id: 8, icon: <MdFollowTheSigns/>, title: "Remediation and Follow-up", description: "Verify fixes and conduct retesting to ensure vulnerabilities are resolved" },
  ]

  return (
    <>
      <Header title="Penetration Testing" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
      
      <section className="Service">
        <div className="container Service__container">
          <SectionHeader icon={<FcDecision />} title="Why Web Penetration Testing?"/>

          <div className="content-grid">
            <div className="text-content">
              <br />
              <p>Web Penetration Testing is important because it helps find and fix security weaknesses in websites before hackers can exploit them.</p>
              
              <div className="feature-card">
                <h3>Why Web Penetration Testing is Needed</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🧩</span>
                    <p><strong>01. Find vulnerabilities</strong> – Detect weak points (like SQL injection, XSS, etc.) before attackers do.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚙️</span>
                    <p><strong>02. Protect user data</strong> – Keeps customer info (like passwords and payment data) safe.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcBullish /></span>
                    <p><strong>03. Prevent hacking</strong> – Stops unauthorized access to your website or database.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔄</span>
                    <p><strong>04. Test defenses</strong> – Checks how strong your firewalls and security settings are.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">📋</span>
                    <p><strong>05. Meet compliance</strong> – Required by laws and standards (like GDPR, ISO, PCI DSS)</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">💰</span>
                    <p><strong>06. Save money</strong> – Fixing issues early is cheaper than recovering from an attack.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🤝</span>
                    <p><strong>07. Build trust</strong> – Shows users and clients that your website is secure.</p>
                  </div>
                </div>
              </div>

              <br />
                                  
              <div className="feature-card">
                <h3>Why don't we always do Penetration Testing?</h3>
                <h4>Even though penetration testing is very useful, there are some reasons why it's not always done (or not done often).</h4>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon">🧩</span>
                    <p><strong>01. Cost</strong> – Penetration testing can be expensive, especially for small businesses. <hr />It needs skilled ethical hackers and special tools.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚙️</span>
                    <p><strong>02. Time</strong> – It takes time to plan, test, and report results — not something done every week.<hr />That's why most companies do it once or twice a year.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🎯</span>
                    <p><strong>03. Complexity</strong> – Pen testing needs technical setup and permissions. <hr />If done incorrectly, it can even crash systems or interrupt services.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">🔄</span>
                    <p><strong>04. Not Always Needed</strong> – If a company's system doesn't change often, they may only need vulnerability scans instead of full penetration tests.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon">⚖️</span>
                    <p><strong>05. Legal & Safety Concerns</strong> – Testing without full approval can cause legal issues or data loss — so it must be done carefully by trusted professionals.</p>
                  </div>
                </div>
              </div>

              <br />

              {/* Positions Section */}
              <div className="Service__wrapper">
                {Positions.map(({id, icon, title, description}) => (
                  <Card className="Service__program" key={id}>
                    <span className="service-icon">{icon}</span>
                    <h4>{title}</h4>
                    <small>{description}</small>
                  </Card>
                ))}
              </div>
              
              <br />
              <div className="btn-center-container">
                <Link to="/contact" className="btn sm">
                  Penetration Testing 
                </Link>
              </div>
            </div>
          </div>
          
          {/* Penetration Testing Methodology Section */}
          <div className="methodology-section">
            <h2 className="methodology-title">Penetration Testing Methodology</h2>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              <div className="methodology-wrapper">
                {PenetrationTestingMethodology.map(({ id, icon, title, description }) => (
                  <Card key={id} className="methodology-card timeline-item"> 
                    <span className="methodology-icon">{icon}</span>
                    <h4>{title}</h4>
                    <small>{description}</small>
                    <div className="timeline-dot"></div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PenetrationTesting