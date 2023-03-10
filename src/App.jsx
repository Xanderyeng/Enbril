import React from "react";
import { Contact, Footer, Hero, How, Logos, Portfolio, WhatWeDo } from "./containers";
import {StarsCanvas} from './containers/canvas'
import { Star } from "./components/Star/Star";
import "./App.css";
import { Navbar, Toolz } from "./components";
import { MouseScroll } from "./components/mouseScroll/Scroll";

const App = () => {
  return (
    <section>
      <Star color='rgba(225, 43, 255, 1)' top='30vh' right='-45vw' scale='1.9' blur='90px'/>
      {/*  */}
      <Star color='rgba(82, 169, 169, 0.5)' top='80vh' right='-0vw' scale='0.95' blur='200px'/>
      {/*  */}
      <Star color='rgba(48, 255, 243, 1)' top='130vh' right='-95vw' scale='1.3' blur='90px'/>
      {/* STAR -- PORTFOLIO SECTION */}
      <Star color='rgba(82, 169, 169, 0.5)' top='230vh' right='-5vw' scale='1.5' blur='190px' topMobile='310vh'/>
      {/* contact form */}
      <Star color='rgba(0, 133, 255, 0.2)' top='450vh' right='-10vw' scale='1.8' blur='90px'/>
      <Star color='rgba(255, 35, 214, 1)' top='365vh' right='-10vw' scale='1' blur='120px'/>
      <Star color='rgba(62, 93, 255, 1)' top='355vh' right='-90vw' scale='1.3' blur='95px'/>
      <Star color='rgba(255, 35, 214, 0.5)' top='710vh' right='0vw' scale='1.8' blur='190px'/>
      <Star color='rgba(62, 93, 255, 1)' top='630vh' right='-90vw' scale='2.6' blur='140px'/>
      <Star color='rgba(255, 35, 214, 1)' top='725vh' right='-10vw' scale='0.5' blur='230px'/>
      <nav>
        <Navbar />
        <Hero />
      </nav>
      <MouseScroll/>
      <WhatWeDo />
      <Portfolio />
      <How />
      <Toolz />
      <div className="footer">
        <Contact/>
        {/* <StarsCanvas/> */}
      <footer>
        <Footer />
      </footer>
      </div>
    </section>
  );
};

export default App;
