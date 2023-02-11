import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import { All, Corporate, ELearning, ECommerce, FinTech } from "./AllTabs/index";
import "./tab.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className='tabs'>
      {/* Tab nav */}
      <ul className='nav'>
        {/* <li className={activeTab === 'All' ? 'active':null}>All Works</li> */}
        {/* <TabNavItem
          title='All'
          id='all'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        /> */}
        {/* <li className={activeTab === 'corporate' ? 'active':null}>corporate</li> */}
        <TabNavItem
          title='Corporate'
          id='corporate'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='eCommerce'
          id='eCommerce'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='ELearning'
          id='eLearning'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title='Fin-Tech'
          id='finTech'
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* <li className={activeTab === "e-commerce" ? "active" : null}>
          e-commerce
        </li> */}
        {/* <li className={activeTab === "e-learning" ? "active" : null}>
          e-learning
        </li> */}
        {/* <li className={activeTab === "fin-tech" ? "active" : null}>fin-tech</li> */}
      </ul>
      <div className='outlet'>
        {/* content will be shown here */}
        {/* {activeTab === "all" ? <All /> : null} */}
        {/* {activeTab === "corporate" ? <Corporate /> : null} */}
        {/* {activeTab === "eCommerce" ? <ECommerce /> : null} */}
        {/* {activeTab === "eLearning" ? <ELearning /> : null} */}
        {/* {activeTab === "finTech" ? <FinTech /> : null} */}
      </div>
    </div>
  );
};
export default Tabs;
