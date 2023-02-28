import React from "react";
import { Contact, Footer, Hero, How, Logos, Portfolio, WhatWeDo } from "./containers";
import "./App.css";
import { Navbar, Toolz } from "./components";

const App = () => {
  return (

    <>
      <nav className='gradient__bg'>
        <Navbar />
        <Hero />
      </nav>
      {/* <section>
        <Logos />
      </section> */}
              
          <WhatWeDo />
        {/* <section>
        </section> */}
          <Portfolio />
        {/* <section>
        </section> */}
          <How />
        {/* <section>
        </section> */}
          <Toolz />
          <Contact/>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
