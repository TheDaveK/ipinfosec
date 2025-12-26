import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg (3).png'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import SectionHeader from '../../components/SectionHeade'
import './RansomwareDataRecovery.css'
import { FcDecision,FcBinoculars,FcBullish,FcBiohazard,FcMoneyTransfer,FcDataEncryption,FcFinePrint,FcHighPriority,FcGenealogy,FcLockLandscape,FcUpRight } from "react-icons/fc";



const Ransomwaredatarecovery = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const text = "Ransomware data recovery uses advanced techniques to detect and recover data affected by ransomware by identifying malicious patterns at the binary level, verifying data integrity, and automating the restoration process from secure backups"
  
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
      <Header title="Ransomware Data Recovery" image={HeaderImage}>
        <p className="typing-text">
          {displayText}
          <span className="cursor">|</span>
        </p>
      </Header>
      
      <section className="Service">
        <div className="container Service__container">
          <SectionHeader icon={<FcDecision />} title="Why Vulnerability Assessment?"/>
          
          <div className="content-grid">
            <div className="text-content">
              <br />
              <p>The best way to fight against ransomware is to prevent an attack.</p>
              
              <div className="feature-card">
                <h3>6 Stages of a ransomware attack</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon"><FcBinoculars /></span>
                    <p><strong>01. Reconnaissance</strong> – Attackers research targets for ransom.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcBiohazard /></span>
                    <p><strong>02. Infection</strong> – Attackers access networks via phishing.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcBullish /></span>
                    <p><strong>03. Escalation</strong> – Attacker integrates ransomware into system.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcFinePrint /></span>
                    <p><strong>04. Scanning</strong> – Attackers scan network to infect.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcDataEncryption /></span>
                    <p><strong>05. Encryption</strong> – Hackers encrypt files for ransom.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcMoneyTransfer /></span>
                    <p><strong>06. Ransom</strong> – Attackers send ransom note to users.</p>
                  </div>
                </div>
              </div>

              <br />

              <div className="feature-card">
                <h3>Common Types of Ransomware</h3>
                <div className="feature-list">
                  <div className="feature-item">
                    <span className="feature-icon"><FcHighPriority /></span>
                    <p><strong>01. Scareware</strong> – Scareware is a type of malware that uses social engineering to scare, shock, or cause a victim anxiety. The person is then manipulated into purchasing software they do not need.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcLockLandscape /></span>
                    <p><strong>02. Screen locking</strong> – Screen lockers lock your computer screen, making it seem impossible to access. Instead of your normal screen, you may get a message that demands payment.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcDataEncryption /></span>
                    <p><strong>03. Encrypting (crypto) ransomware</strong> – Encrypting ransomware uses advanced encryption algorithms to encrypt the data on your device. You are given a note that explains how much you have to pay.</p>
                  </div>
                  <div className="feature-item">
                    <span className="feature-icon"><FcGenealogy /></span>
                    <p><strong>04. Some emerging threats</strong> – Ransomware threats are constantly evolving and growing more severe. As new security measures arise, hackers are devising more ways to invade computers.</p>
                  </div>
                </div>
              </div>

              <br />

              <div className="challenge-card">
                <h3>How to Prevent Ransomware Attacks: 8 Key Strategies</h3>
                <br />
                <p>Even though vulnerability assessment is very helpful, there are reasons why some people don't do it regularly — or why it's not enough on its own.</p>
                
                <div className="challenge-list">
                  <div className="challenge-item">
                    <h4>1. Update frequently</h4>
                    <p>Keeping devices updated is a simple but effective defense. Updates often include fixes that block new ransomware variants.</p>
                    <div className="highlight">👉 Enable automatic updates or check regularly to avoid gaps in protection.</div>
                  </div>
                  <div className="challenge-item">
                    <h4>2. Authenticate software</h4>
                    <p>Install software from trusted and verified sources. Moreover, implementing tools like FortiToken enables two-factor authentication for stronger access control.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>3. Install antivirus protection</h4>
                    <p>Antivirus software provides a first line of defense against ransomware. Besides, email filters block malicious attachments before they reach users.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>4. Whitelist software</h4>
                    <p>Whitelisting ensures that only approved programs can run on the system. Firewalls can alert the teams regarding suspicious applications before they connect.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>5. Back up your data</h4>
                    <p>Backups don't prevent ransomware, but make recovery faster. Regular copies create a clean restore point for critical devices.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>6. Educate employees</h4>
                    <p>Human error can lead to ransomware. Therefore, training employees to identify phishing attempts and unsafe links is crucial to ensure cybersecurity.</p>
                  </div>
                  <div className="challenge-item">
                    <h4>7. Use a comprehensive security solution</h4>
                    <p>A multi-layered solution combines web filtering, firewalls, and email security. Sandboxing isolates applications to safely analyze suspicious behavior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Service__wrapper">
            <div className="btn-center-container">
              <Link to="/contact" className="btn sm ransomware-btn">
                Ransomware data recovery
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ransomwaredatarecovery