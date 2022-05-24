import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import Section from "./Components/Section";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <h2>Let's Collaborate</h2>
      <Section
        heading="AI + RPA is what we do"
        desc="Future-Proof your business. Drive efficiency, profitability and deliver on customer experience"
        image="rp2.jpg"
        anchor="AI + RPA Automation"
        Link="https://www.xivtech.io./services/AIandRPAautomation"
      />
      <Section
        heading="Make Bolder Choices"
        desc="Digital focused strategies to realize market-changing ideas"
        image="p1.png"
        anchor="Build Better Apps"
        Link="https://www.xivtech.io./services/enterprise-apps"
      />
      <Section
        heading="Innovate with Speed"
        desc="Create higher quality software, deliver on customer expectations and business goals"
        image="p2.jpg"
        anchor="DevOps"
        Link="https://www.xivtech.io./services/delivery-pipeline-automation"
      />
      <Section
        heading="Embrace Cloud"
        desc="With Cloud-First accelerate innovation and optimize performance"
        image="p3.jpg"
        anchor="Cloud Services"
        Link="https://www.xivtech.io./services/cloud"
      />
    </div>
  );
}

export default App;
