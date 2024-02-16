import React from "react";
import { Container } from "react-bootstrap";


const HireProcess = () => {
  const hire1Img = "/images/hire1.png";
const hire2Img = "/images/hire2.png";
const hire3Img = "/images/hire3.png";
const hire4Img = "/images/hire4.png";
const hire5Img = "/images/hire5.png";
  return (
    <>
      <section className="hire-sec sec-padding">
        <Container>
          <h2 className="sec-heading">How We Hire</h2>
          <p className="sub-heading">
           consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ul>
            <li>
              <img  loading="lazy"  width="" height=""   src={hire1Img} alt="hire1Img" />
            </li>
            <li>
              <img  loading="lazy"  width="" height=""   src={hire2Img} alt="hire2Img" />
            </li>
            <li>
              <img  loading="lazy"  width="" height=""   src={hire3Img} alt="hire2Img" />
            </li>
            <li>
              <img  loading="lazy"  width="" height=""   src={hire4Img} alt="hire4Img" />
            </li>
            <li>
              <img  loading="lazy"  width="" height=""   src={hire5Img} alt="hire5Img" />
            </li>
          </ul>
        </Container>
      </section>
    </>
  );
};

export default HireProcess;
