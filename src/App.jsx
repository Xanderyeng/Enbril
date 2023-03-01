import React from "react";
import { Contact, Footer, Hero, How, Logos, Portfolio, WhatWeDo } from "./containers";
import { Star } from "./components/Star/Star";
import "./App.css";
import { Navbar, Toolz } from "./components";

const App = () => {
  return (
    <section>
      <Star color='rgba(225, 43, 255, 1)' top='30vh' right='-45vw' scale='2.5' blur='60px'/>
      {/*  */}
      <Star color='rgba(82, 169, 169, 1)' top='80vh' right='-0vw' scale='0.95' blur='100px'/>
      {/*  */}
      <Star color='rgba(48, 255, 243, 1)' top='130vh' right='-95vw' scale='1.3' blur='90px'/>
      {/* STAR -- PORTFOLIO SECTION */}
      <Star color='rgba(82, 169, 169, 1)' top='230vh' right='-5vw' scale='2.9' blur='50px' topMobile='310vh'/>

      <Star color='rgba(0, 133, 255, 1)' top='420vh' right='-10vw' scale='1.8' blur='60px'/>
      <Star color='rgba(255, 35, 214, 1)' top='365vh' right='-10vw' scale='1' blur='120px'/>
      <Star color='rgba(62, 93, 255, 1)' top='355vh' right='-90vw' scale='1.3' blur='95px'/>
      <Star color='rgba(255, 35, 214, 1)' top='510vh' right='0vw' scale='0.8' blur='110px'/>
      <Star color='rgba(62, 93, 255, 1)' top='510vh' right='-90vw' scale='1.6' blur='90px'/>
      <Star color='rgba(255, 35, 214, 1)' top='525vh' right='-90vw' scale='0.5' blur='120px'/>
      <nav>
        <Navbar />
        <Hero />
      </nav>
        {/* <section>
          <Logos />
        </section> */}
      <WhatWeDo />
      <Portfolio />
      <How />
      <Toolz />
      <Contact/>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default App;
