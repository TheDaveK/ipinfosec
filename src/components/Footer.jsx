import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/logo copy.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FaYoutube} from "react-icons/fa";


const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    // Navigate after a small delay for smooth effect
    setTimeout(() => {
      navigate(path);
    }, 100);
  };

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link 
            to='/' 
            className='logo'
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }}
          >
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            IPinfosec: Secure Today, Safe Tomorrow—Safeguarding Your Future. <br /> <br /><h4>ipinfosec.in@gmail.com</h4>
          </p>
          <div className="footer__socials">
            <a href="https://www.linkedin.com/company/ipinfosec/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
            <a href="https://www.facebook.com/profile.php?id=61582107104239" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
            <a href="https://www.instagram.com/ipinfosec/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
            <a href="https://www.youtube.com/@ipinfosec" target="_blank" rel='noreferrer noopener'><FaYoutube/></a>
          </div>
        </article>
        <article>
          <h4>Services</h4>
          <Link 
            to="/services"
            onClick={(e) => handleLinkClick(e, '/services')}
          >
            Services
          </Link>
        </article>
        <article>
          <h4>Quick Links</h4>
          <Link 
            to="/coming-soon"
            onClick={(e) => handleLinkClick(e, '/coming-soon')}
          >
            Terms of Service
          </Link>
          <Link 
            to="/coming-soon"
            onClick={(e) => handleLinkClick(e, '/coming-soon')}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/coming-soon"
            onClick={(e) => handleLinkClick(e, '/coming-soon')}
          >
            Cookie Policy
          </Link>
        </article>
        <article>
          <h4>Company</h4>
          <Link 
            to="/about"
            onClick={(e) => handleLinkClick(e, '/about')}
          >
            About
          </Link>
          <Link 
            to="/contact"
            onClick={(e) => handleLinkClick(e, '/contact')}
          >
            Contact
          </Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2026 IPinfosec &copy; All Rights Reserved </small>
      </div>
    </footer>
  )
}
export default Footer
