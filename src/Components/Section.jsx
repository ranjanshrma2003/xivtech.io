import React from "react";
import "./Section.css";

const Section = ({ heading, desc, image, anchor, Link }) => {
  return (
    <div data-aos="fade-up" className="section ">
      <div className="item">
        <h1>{heading}</h1>
        <p>{desc}</p>
        <a className="a1" href={`${Link}`}>
          {anchor}
          <img src="/Arrow-black.svg" className="img1" alt="arrow-black" />
        </a>
      </div>
      <div className="item">
        <img src={`/${image}`} className="img2" alt="" />
      </div>
    </div>
  );
};

export default Section;
