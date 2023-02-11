import React from "react";
import { IonIcon } from "@ionic/react";
import { heartSharp, logoGithub, logoPinterest,logoDiscord,logoLinkedin } from "ionicons/icons";
import './footer.css'

const Footer = () => {
  return (
    <section className='enbrill-footer'>
      <div className='container'>
      <div className="mid-footer-bar">
        <nav className="footer-nav">

        </nav>
        <div className="footer-social-icons-bar">
        <IonIcon className="social-icons" icon={logoGithub}></IonIcon>
        <IonIcon className="social-icons" icon={logoPinterest}></IonIcon>
        <IonIcon className="social-icons" icon={logoDiscord}></IonIcon>
        <IonIcon className="social-icons" icon={logoLinkedin}></IonIcon>

        </div>
      </div>
        <div className="bottom-footer-bar">
        <div className="copyright">
        </div>
        <div className="privacy-policy">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>

        Made with <IonIcon icon={heartSharp}></IonIcon> by Alexander Chepkiyeng
          </span>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
