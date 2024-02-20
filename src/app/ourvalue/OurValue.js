"use client";
import React from "react";
import Banner from "../Components/Banner";
import { Container } from "react-bootstrap";
import Experience from "../Components/Experience";

export default function OurValue() {
  var bannerContent = {
    title: "<h1>Our Core Values</h1>",
    cardTitle:
      "Our Core Values in Data Privacy, Cybersecurity, and Social Responsibility",
    cardPara:
      "Empowering Progress through Ethical Solutions and Sustainable Development",
  };

  const content = {
    heading: "SERVICES FROM AN EXPERIENCED COMPANY",
    description: `<p>
  We understand that the digital landscape is ever-evolving, and with it come both opportunities and challenges. Our mission is to equip our clients with the tools and knowledge they need to navigate this landscape confidently and securely. We achieve this through innovative solutions and strategic partnerships that not only safeguard our clients' valuable assets but also pave the way for sustainable growth.
  </p>
  <p>
  We believe that successful organisations should not only be pioneers in their fields but also exemplars of responsible and ethical practices. Our mission aligns with the aspirations of socially conscious businesses seeking to create a positive impact on the world.
  </p>
  <br />
  <p>
  Together, with our expertise and your vision, we'll build a future where security, innovation, and growth coexist seamlessly. Explore our offerings and join us on this transformative journey towards a digitally secure world.
  </p>`,
  };

  return (
    <>
      <Banner
        bannerCnt={bannerContent}
        banImg={"/images/happyTeam.jpeg"}
      />
      <section className="our-values-sec sec-padding">
        <Container>
          <h2 className="sec-heading">OUR VALUES</h2>
          <p className="sub-heading">
            Our values reflect what you should expect from us when working
            together:
          </p>
          <div className="values-cards">
            <div className="values-card">
              <img
                loading="lazy"
                width=""
                height=""
                src={"/images/value1Icon.svg"}
                alt="imgicon1"
              />
              <h5>Client Centric Focus</h5>
              <p>
                Our clients' success is our top priority. We are dedicated to
                understanding their needs, delivering tailored solutions, and
                exceeding expectations. Our commitment to client satisfaction
                drives our every endeavour.
              </p>
            </div>
            <div className="values-card">
              <img
                loading="lazy"
                width=""
                height=""
                src={"/images/value2Icon.svg"}
                alt="imgicon2"
              />
              <h5>Empowering Innovation</h5>
              <p>
                We embrace cutting-edge technologies and innovative strategies
                to provide effective solutions. Our passion for innovation
                enables us to adapt, evolve, and continuously enhance our
                services to meet the dynamic challenges of the digital world.
              </p>
            </div>
            <div className="values-card">
              <img
                loading="lazy"
                width=""
                height=""
                src={"/images/value3Icon.svg"}
                alt="imgicon3"
              />
              <h5> Ethical Excellence</h5>
              <p>
                We are committed to upholding the highest standards of ethics
                and integrity in all our actions. We adhere to lawful and
                ethical practices, ensuring the responsible use of data and
                technologies to foster trust and security.
              </p>
            </div>
            <div className="values-card">
              <img
                loading="lazy"
                width=""
                height=""
                src={"/images/value4Icon.svg"}
                alt="imgicon4"
              />
              <h5>Social Responsibility</h5>
              <p>
                We actively seek partnerships with socially responsible
                organisations to leverage our expertise for the greater good.
                Our mission is to contribute to Sustainable Development Goals
                (SDGs) and drive positive impact on the environment and in local
                and international communities.
              </p>
            </div>
            <div className="values-card">
              <img
                loading="lazy"
                width=""
                height=""
                src={"/images/value5Icon.svg"}
                alt="imgicon5"
              />
              <h5>Diversity and Inclusion</h5>
              <p>
                We value diversity as a source of strength. We foster an
                inclusive environment that empowers employees from diverse
                backgrounds to bring their unique perspectives, skills, and
                experiences, driving creativity and collaboration.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="our-mission-sec sec-padding-top">
        <Container>
          <h2 className="sec-heading">Our mission</h2>
          <p className="sub-heading mission-p">
            We are committed to empowering socially responsible organisations
            across the world by providing cutting-edge expertise in data
            privacy, cyber security, clinical IT systems safety, and information
            governance. Through innovative solutions and strategic partnerships,
            we safeguard our clients' valuable assets and enable sustainable
            growth in an ever-evolving digital landscape.
          </p>
          <div
            className="our-mission-img"
            style={{ maxWidth: "320px", margin: "30px auto 0px" }}
          >
            <img
              loading="lazy"
              width=""
              height=""
              className="img1"
              src={"/images/mission.jpg"}
              alt="standardImg"
            />
          </div>
        </Container>
      </section>
      <section className="our-mission-map-head sec-padding-top">
        <Container>
          <h2 className="sec-heading">Our Vision</h2>
          <p className="sub-heading mission-p">
            To be the leading global management consultancy that sets the
            standard for excellence in data privacy, cyber security, clinical IT
            systems safety, and information governance, enabling organisations
            to thrive securely in the digital era.
          </p>
        </Container>
      </section>
      <section className="our-mission-map-img sec-padding-bottom">
        <Container fluid className="m-0 p-0">
          <div className="map">
            <img
              loading="lazy"
              width=""
              height=""
              src={"/images/map.png"}
              alt="mapImg"
            />
          </div>
        </Container>
      </section>
      <Experience secData={content} />
    </>
  );
}
