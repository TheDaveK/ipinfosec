import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo copy.png';
import { links } from '../data';
import { FaBarsProgress } from "react-icons/fa6";
import { FiXOctagon } from "react-icons/fi";
import './navbar.css';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {
            links.map(({ name, path }, index) => {
              return (
                <li key={index}>
                  <NavLink 
                    to={path} 
                    className={({ isActive }) => isActive ? 'active-nav' : ''}
                    onClick={() => setIsNavShowing(prev => !prev)}
                  >
                    {name}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <FiXOctagon /> : <FaBarsProgress />
          }
        </button>
      </div>
    </nav>
  )
}

export default Navbar