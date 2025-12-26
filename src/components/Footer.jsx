import {Link} from 'react-router-dom'
import Logo from '../images/logo copy.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube,FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                  <img src={Logo} alt="Footer Logo" />

                </Link>
                <p>
                    IPinfosec: Secure Today, Safe Tomorrow—Safeguarding Your Future. <br /> <br /><h4>ipinfosec.in@gmail.com</h4>
                </p>
                <div className="footer__socials">
                    <a href="https://www.linkedin.com/company/ipinfosec/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://www.facebook.com/profile.php?id=61582107104239" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    {/* <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a> */}
                    <a href="https://www.instagram.com/ipinfosec/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="https://www.youtube.com/@ipinfosec" target="_blank" rel='noreferrer noopener'>< FaYoutube/></a>
                    {/* <a href="https://github.com/ipinfosec" target="_blank" rel='noreferrer noopener'><FaGithub/></a> */}
                     {/*<a href="https://github.com/ipinfosec" target="_blank" rel='noreferrer noopener'><FaDiscord/></a>*/}
                </div>
            </article>
            <article>
                <h4>Services</h4>
                <Link to="/services">Services</Link>
            </article>
            <article>
                <h4>Quick Links</h4>
                <Link to="/coming-soon">Terms of Service</Link>
                <Link to="/coming-soon">Privacy Policy</Link>
                <Link to="/coming-soon">Cookie Policy</Link>
            </article>
            <article>
                <h4>Company</h4>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2026 IPinfosec &copy; All Rights Reserved </small>

</div>
    </footer>
  )
}

export default Footer
