import React from "react";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Logo } from "../../assets/svg";
import {
  heartSharp,
  logoGithub,
  logoPinterest,
  logoDiscord,
  logoLinkedin,
} from "ionicons/icons";
import "./footer.css";

const links = {
  github: "https://github.com/Xanderyeng",
  pinterest: "https://pinterest.",
  discord: "https://discord.com/channels/423464391791476747/@home",
  linkedIn: "https://www.linkedin.com/in/alex-chepkiyeng-30626172/",
};

const Footer = () => {
  return (
    <section className='enbrill-footer'>
      <div className='container'>
        <div className='top-footer-bar'>
          {Logo}
          Chepkiyeng
        </div>
        <div className="divider" style={{width: '1240px'}}></div>
        
        <div className='mid-footer-bar'>
          <Nav className='footer-nav'>
            <ul>
              <NavItem>
                <Link to='#home' className='nav-link'>
                  Home
                </Link>
              </NavItem>

              <NavItem>
                <Link to='portfolio' className='nav-link'>
                  about
                </Link>
              </NavItem>

              <NavItem>
                <Link to='skills' className='nav-link'>
                  portfolio
                </Link>
              </NavItem>

              <NavItem>
                <Link to='skills' className='nav-link'>
                  skills
                </Link>
              </NavItem>

              <NavItem>
                <Link to='contact' className='nav-link'>
                  contact
                </Link>
              </NavItem>
            </ul>
          </Nav>
          <div className='footer-social-icons-bar'>
            <a href={links.github} target='_blank' rel='noopener'>
              <IonIcon className='social-icons' icon={logoGithub}></IonIcon>{" "}
            </a>
            <a href={links.pinterest} target='_blank' rel='noopener'>
              <IonIcon className='social-icons' icon={logoPinterest}></IonIcon>{" "}
            </a>
            <a href={links.discord} target='_blank' rel='noopener'>
              <IonIcon className='social-icons' icon={logoDiscord}></IonIcon>
            </a>
            <a href={links.linkedIn} target='_blank' rel='noopener'>
              <IonIcon className='social-icons' icon={logoLinkedin}></IonIcon>
            </a>
          </div>
        </div>
        <div className="divider" style={{width: '1240px'}}></div>
        <div className='bottom-footer-bar'>
          <div className='copyright'>
            <span>
              {`${"Made with"} `}{" "}
              <IonIcon className='heart-icon' icon={heartSharp}></IonIcon>
              {" " + `${" by Alexander Chepkiyeng"}`}
            </span>
          </div>
          <div className='terms-privacy-policy'>
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
