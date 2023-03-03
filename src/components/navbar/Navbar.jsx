import React from "react";
import { useState, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import logo from "../../assets/Custom logo.svg";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./navbar.css";

// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const logo = (
    <svg width='40' height='40' viewBox='0 0 43 41' fill='none'>
      <path
        d='M29.1852 0.385254L13.4 9.41162L6.43384 5.4249C6.00184 5.8659 5.60577 6.33306 5.23677 6.81006L13.4 11.4911L31.1838 1.31162C30.5358 0.960621 29.8692 0.655254 29.1852 0.385254ZM33.9471 3.05713L13.4 14.8116L3.60727 9.2042C3.30127 9.7172 3.02256 10.2497 2.77056 10.7898L13.4 16.8911L35.4237 4.29111C34.9557 3.85911 34.4601 3.45313 33.9471 3.05713ZM37.475 6.44268L13.4 20.2116L1.71763 13.5161C1.52863 14.1011 1.37605 14.7041 1.25005 15.3161L13.4 22.2911L38.5649 7.89112C38.2229 7.39612 37.862 6.91068 37.475 6.44268ZM40.1452 10.5999L13.4 25.8999L0.842236 18.6999C0.827836 18.9996 0.800049 19.2966 0.800049 19.5999C0.800049 31.0326 10.0673 40.2999 21.5 40.2999C32.9327 40.2999 42.2 31.0326 42.2 19.5999C42.2 16.3743 41.4619 13.3215 40.1452 10.5999Z'
        fill='#8655FF'
      />
    </svg>
  );

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className='header nav-container'>
    
      {/* <div className='navbar-links'></div> */}
      {/* <div className='navbar-links_logo'></div> */}

      {/* {logo} */}

      {/* <img src={logo} alt='Logo' /> */}

      {/* <Nav className="navbar-links_container">
          <NavItem>
            <Link to='clients' className='nav-link'>
              clients
            </Link>
          </NavItem>
          <NavItem>
            <Link to='services' className='nav-link'>
              services
            </Link>
          </NavItem>
          <NavItem>
            <Link to='portfolio' className='nav-link'>
              portfolio
            </Link>
          </NavItem>
          <NavItem>
            <Link to='skills' className='nav-link'>
              skills
            </Link>
          </NavItem>
          <NavItem>
            <Link to='contact' className='nav-link nav-cta'>
              <a href="" >contact</a>
            </Link>
          </NavItem>
        </Nav> */}
      {/* <button className="btn btn-navbar_link">contact</button> */}
          <AnchorLink href="#home" className='navlogo'>chepkiyeng</AnchorLink>
      {/* <a href='/' className='navlogo'>
        chepkiyeng
      </a> */}
      {/* <img src={logo} alt='Omnifood Logo' className={logo} /> */}

      <Nav
        className={`${isOpen ? "open" : "close"} main_nav gradient__nav-bg `}
      >
        <ul className='main_nav_list'>
          {/* <li>
            <NavItem>
            <Link to='services' className='nav-link'>
              clients
            </Link>
          </NavItem>
          </li> */}

          <NavItem>
            <Link to='services' className='nav-link'>
             <AnchorLink href="#services">services</AnchorLink> 
            </Link>
          </NavItem>

          <NavItem>
            <Link to='portfolio' className='nav-link'>
            <AnchorLink href="#portfolio">portfolio</AnchorLink>
            </Link>
          </NavItem>

          <NavItem>
            <Link to='skills' className='nav-link'>
            <AnchorLink href="#skills">skills</AnchorLink>
            </Link>
          </NavItem>

          <NavItem>
          <Link to='contact' className='nav-link nav-cta'>
          <AnchorLink href="#contact">contact</AnchorLink>
            </Link>
          </NavItem>
        </ul>
      </Nav>
      {/* <section className={`${isOpen ? classes.open : classes.close}`}> */}
      <Hamburger
        duration={0.3}
        toggled={isOpen}
        toggle={setIsOpen}
        easing='ease-in'
      />
      
    </header>
  );
};

export default Navbar;
