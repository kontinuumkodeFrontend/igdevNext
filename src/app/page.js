"use client";
import dynamic from 'next/dynamic'
import Link from "next/link";
import React, { useState } from "react";
import { CLIENT_STORIES, HOME_URL } from "./services/Url";
import ScrollContainer from "react-indiana-drag-scroll";
// import SpeackAdvisor from "./Components/SpeackAdvisor";
// import StoryCard from "./Components/StoryCard";
import { HubspotSection } from "./Components/HubspotSection";
import { MailChimpForm } from "./Components/MailChimpForm";
import { useCustomGet, useCustomQuery } from "./services/Service";
const SpeackAdvisor = dynamic(() => import('./Components/SpeackAdvisor'));
const StoryCard = dynamic(() => import('./Components/StoryCard'));

export default function Home() {
  const [tabState, setTabState] = useState(0);
  const [page, setPage] = useState(1);
  const [mailChimp, setMailchimp] = useState(true);
  const { data } = useCustomGet(HOME_URL);
  const { data: clientData } = useCustomQuery(CLIENT_STORIES, page);

  const scrollHandler = () => {};

  return (
    <div className="hm-page">
      <section
        className="banner w-100"
        style={{
          backgroundColor: " rgb(2, 7, 71)",
          backgroundImage: `url('/images/header-bg.webp')`
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-xl-7 col-lg-6">
              <div className="banner-content ">
                <span className="fw-semibold">
                  {/* Empowering Excellence  */}
                  IG-Smart Ltd
                </span>
                <h1 className="text-light fw-semibold ">
                  {/* Your Partner in Data Privacy and Cybersecurity */}
                  Empowering Success through Expert Data Protection and Cybersecurity Solutions | IG-Smart Ltd
                </h1>
                <p className="text-light mb-4">
                  {/* We Stand by You in Data Privacy, Cybersecurity, and More.
                  Pioneering Award-Winning Solutions for Businesses. */}
                  Welcome to IG-Smart Ltd, your trusted partner in navigating the evolving landscape of data protection and cybersecurity. Established in 2009, we bring over 15 years of unparalleled expertise to the forefront, serving a diverse clientele from start-ups and SMEs to global enterprises operating in over 150 countries. As industry leaders, we pride ourselves on delivering award-winning services, recognised as the "GDPR Consultancy of the Year" from 2020 to 2023 and honoured as the "Best Cyber Security Consultancy Firm" from 2019 to 2023. At IG-Smart Ltd, we go beyond solutions; we empower your success by safeguarding your data and fortifying your digital defenses. Explore our comprehensive suite of services and embark on a journey to a secure and compliant future with IG-Smart Ltd.
                </p>
                <div className="banner-button ">
                    <SpeackAdvisor
                    name={"Request a proposal"}
                    customClass={"quote-btn d-inline-flex"}
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="banner-image d-flex justify-content-center">
                <img  loading="lazy"  width="500px" height="450px"  
                  src="/images/header-image.webp"
                  alt=" Your Partner in Data Privacy and Cybersecurity"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
     
     
      <section className="about-sec mb-sm-5 mb-2 ">
        <div className="container">
          <div className="about-card-inr">
            <div className="about-card">
              <div>
                <p className="text-light mb-4 mb-md-3">
                  Established in 2009, IG Smart adheres to industry-specific
                  best practices, including NHS Digital Technology Assessment
                  Criteria (DTAC), DCB0129, DCB1060, Cyber Essentials, and ISO
                  27001. We serve clients across all sectors and industries in
                  more than 150 countries worldwide.
                </p>
              </div>
            </div>
            <div className="about-card">
              <img  loading="lazy"  width="160px" height="160px"  
                src='/images/lawyer-international.webp'
                alt=" IG SMART LTD is a multi-award-winning consultancy specializing
                in Data Protection, Privacy, Cybersecurity, and Clinical Risk
                Management."
              />
              <div>
                <p className="text-light mb-4 mb-md-3">
                  IG SMART LTD is a multi-award-winning consultancy specializing
                  in Data Protection, Privacy, Cybersecurity, and Clinical Risk
                  Management.{" "}
                </p>
                <p className="text-light h6 mb-2 mb-md-3">
                  <b>
                    We are a world-class team of experts in Data Privacy, Data
                    Protection, Digital Technology, Cybersecurity, and Clinical
                    Risk Management.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      


      {/*  Trusted Section */}
      <section className="about py-5">
        <div className="container">
          <div className="sec-heading-wpr center">
            <h2 className="sec-hm-heading">Trusted by International Brands</h2>
            <p className="heading-text">
              Join IG-Smart Ltd! Boost confidence with expert cybersecurity,
              data protection, and clinical safety. Meet industry standards and
              secure your data and systems. Partner with us today!
            </p>
          </div>
          <ul className="logo-hm-list">
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-1.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-2.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-3.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-4.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-5.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-6.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-7.webp"
                alt="Trusted by International Brands"
              />
            </li>
            <li>
              <img  loading="lazy"  width="140px" height="130px"  
                src="/images/home/img-8.webp"
                alt="Trusted by International Brands"
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Multiclisciplinary Section */}
      <section className="privacy py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="privacy-content">
                <span className="fw-semibold sm-heading">
                  Diverse Multidisciplinary Thinking
                </span>
                <div className="fw-bold sub-hm-heading">
                  <h2>Meet our multidisciplinary consultancy team</h2>
                </div>
                <p>
                  Our exceptional consultancy team includes lawyers,
                  cybersecurity experts, data protection officers,
                  technologists, and healthcare-specialized clinical safety
                  professionals. We're dedicated to professionalism, fostering a
                  friendly atmosphere, and offering practical advice that
                  empowers organizations worldwide. Experience the benefits of
                  diversity in achieving your success by partnering with us.
                  Join our consultancy journey where expertise meets simplicity
                  for an exceptional experience.
                </p>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="privacy-image d-flex">
                <img  loading="lazy"  width="420px" height="504px"  
                  src="/images/home-page-slices_05.webp"
                  alt=" Diverse Multidisciplinary Thinking"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}

      <section className="security py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-3  col-md-6 col-sm-12 col-12">
              <Link
                href="/cyber-security-audit-services"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="48px" height="48px"  
                    src="/images/web-design.webp"
                    alt="Cyber Security Audit and Review services"
                  />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Cyber Security Audit and Review services
                  </h5>
                  <p>
                    Know your organisation’s critical cyber security risks and
                    how to control them.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-xl-3  col-md-6 col-sm-12 col-12">
              <Link
                href="/clinical-safety-officer-services"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="48px" height="48px"  
                    src="https://admin.ig-smart.com/wp-content/uploads/2023/06/bug.png"
                    alt=" Clinical Safety Officer (CSO) Services"
                  />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Clinical Safety Officer (CSO) Services
                  </h5>
                  <p>
                    Meet NHS’s, Digital Technology Assessment Criteria (DTAC).
                    We also provide ongoing advice and support.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-xl-3  col-md-6 col-sm-12 col-12">
              <Link prefetch={true} href="/dpo-services" style={{ color: "rgb(0, 0, 0)" }}>
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="48px" height="48px"  
                    src="https://admin.ig-smart.com/wp-content/uploads/2023/06/icon-3.png"
                    alt="Data Protection Officer (DPO) Services"
                  />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Data Protection Officer (DPO) Services
                  </h5>
                  <p>
                    Our outsourced DPO as a Service will undoubtedly, provide
                    your organisation with on-demand access to all the data
                    protection support it will ever need.
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-xl-3  col-md-6 col-sm-12 col-12">
              <Link
                href="/gdpr-auditors-services"
                style={{ color: "rgb(0, 0, 0)" }}
              >
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="48px" height="48px"  
                    src="https://admin.ig-smart.com/wp-content/uploads/2023/06/icon-4.png"
                    alt="Data Privacy and GDPR Consultancy services"
                  />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Data Privacy and GDPR Consultancy services
                  </h5>
                  <p>
                    Instantly providing your organisation with access to GDPR
                    expert consultant advice, as well as, practical GDPR
                    consultant support.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section  className="protection pt-5 sec-padding-bottom">
        <div  className="container">
          <div  className="row">
            <div  className="col-md-5">
              <div  className="protection-image ind-img">
                <img  loading="lazy"  width="300px" height="280px"  
                  src="https://admin.ig-smart.com/wp-content/uploads/2023/06/protection-front.png"
                  alt="Industries we serve"
                   className="w-100"
                />
              </div>
            </div>
            <div  className="col-md-7">
              <div  className="privacy-content mb-4">
                <span  className="fw-semibold sm-heading">Industries </span>
                <h2  className="fw-bold sub-hm-heading">Industries we serve</h2>
                <p  className="my-3 mb-0">
                  Catering to diverse industries, we offer tailored solutions in
                  data privacy, cyber security, and clinical safety.
                  Understanding each sector's unique challenges, we safeguard
                  your valuable data and systems effectively. Partner with us
                  for comprehensive and specialised consultancy services,
                  ensuring your organisation's secure and compliant future.
                </p>
              </div>
            </div>
            <div  className="col-xl-12">
              <div  className="privacy-content">
                <div  className="prot-cards">
                  <Link
                     className="protection-content"
                    href="/academic-and-life-science-search"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter3.png"
                        alt="Academic & Life Science Research"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Academic & Life Science Research</p>
                    </div>{" "}
                  </Link>

                  <Link
                     className="protection-content"
                    style={{ color: "rgb(0, 0, 0)" }}
                    href="/healthandsocialcare"
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter6.png"
                        alt="Health & Social Care"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Health & Social Care</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/merge-and-acquisitions"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/database.png"
                        alt="Mergers & Acquisitions"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Mergers &amp; Acquisitions</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/pharmaceutical-and-pharmacovigilance"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/pharmacy.png"
                        alt="Pharmaceutical & Pharmacovigilance"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Pharmaceutical &amp; Pharmacovigilance</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/central-and-local-government"
                    style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter4.png"
                        alt="Central & Local Government"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Central &amp; Local Government</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/cutomer-loyality-and-rewards"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter7.png"
                        alt="Customer Loyalty & Rewards"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Customer Loyalty &amp; Rewards</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/charity-and-not-for-profit"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/charity.png"
                        alt="Charity & Not-for-profit"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Charity &amp; Not-for-profit</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/property-and-investment-managment"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/investment.png"
                        alt="Property Investment & Management"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Property Investment &amp; Management</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/retail"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/store.png"
                        alt="Retail & FMCG"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Retail &amp; FMCG</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/loss-adjustment"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter2.png"
                        alt="Insurance & Loss Adjustment"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Insurance &amp; Loss Adjustment</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/climate-change-and-enviornment"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter5.png"
                        alt="Climate Change & Environment"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Climate Change &amp; Environment</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/security"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/cyber-security.png"
                        alt="Security Services & CCTV"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Security Services &amp; CCTV</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/technology"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/data-management.png"
                        alt="Technology"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Technology</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/finance"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter1.png"
                        alt="Finance"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Finance</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/legal"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/07/counter8.png"
                        alt="Legal"
                      />
                    </div>
                    <div  className="protection-detail stats">
                      <p  className="mb-0">Legal</p>
                    </div>{" "}
                  </Link>
                  <Link
                     className="protection-content"
                    href="/aerospace-and-border-control-navigating-secure-skies-and-borders"
                     style={{ color: "rgb(0, 0, 0)" }}
                  >
                    <div  className="protection-icon">
                      <img  loading="lazy"  width="45px" height="45px"  
                        src="https://admin.ig-smart.com/wp-content/uploads/2023/10/aerospace.png"
                        alt="Aerospace & Border Control"
                      />
                    </div>

                    <div  className="protection-detail stats">
                      <p  className="mb-0">Aerospace &amp; Border Control</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="container">
          <div className="privacy-content text-center max-content">
            <span className="fw-semibold sm-heading">
              {data?.cyber_small_heading}
            </span>
            <h2 className="fw-bold sub-hm-heading">{data?.cyber_heading}</h2>
            <p className="my-3 mb-0">{data?.cyber_description}</p>
          </div>
        </div>
        {data?.cyber_tab_content?.length > 0 ? (
          <>
            <div className="container-fluid">
              <ul
                className="nav nav-pills cyber-tabs mb-3 pt-4 d-flex"
                id="pills-tab"
                role="tablist"
              >
                <ScrollContainer
                  className="scroll-container cyber-tabs m-0 p-0 d-flex pe-2"
                  horizontal={true}
                >
                  {data?.cyber_tabs?.map((item, i) => {
                    return (
                      <li className="nav-item item" role="presentation" key={i}>
                        <button
                          className={
                            tabState === i ? "nav-link active" : "nav-link"
                          }
                          id={item?.tab_button_heading}
                          onClick={() => setTabState(i)}
                        >
                          {item?.tab_button_heading}
                        </button>
                      </li>
                    );
                  })}
                </ScrollContainer>
              </ul>
            </div>
            <div className="container">
              <div className="tab-content" id="pills-tabContent">
                {data?.cyber_tab_content?.map((item, i) => {
                  return (
                    <div
                      className={
                        tabState === i
                          ? "tab-pane fade show active animated animatedFadeInUp fadeInUp"
                          : "tab-pane fade animated animatedFadeInUp fadeInUp"
                      }
                      onClick={scrollHandler}
                      key={i}
                    >
                      <div className="row pb-5 pt-sm-5">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="dpo-content privacy-content mt-4">
                            <img  loading="lazy"  width="55px" height="56px"   src={item?.cyber_content_icon} alt={item?.cyber_content_heading}/>
                            <h3 className="py-3 fw-bold sub-hm-heading mb-0">
                              {item?.cyber_content_heading}
                            </h3>
                            <p>{item?.cyber_content_description}</p>
                            <Link
                              href={
                                item?.cyber_content_button_link
                                  ? `/${item?.cyber_content_button_link}`
                                  : '#'
                              }
                              className="btn-design"
                            >
                              {item?.cyber_content_button_text}
                            </Link>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                          <div className="dpo-image ">
                            <img  loading="lazy"  width="400px" height="500px"   src={item?.cyber_feature_image} alt={item?.cyber_content_heading}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="sec-padding text-center">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </section>

      <section className="insight pt-sm-5">
        <div className="container">
          <div className="privacy-content text-center max-content">
            <span className="fw-semibold sm-heading">
              Management Consultancy & Compliance
            </span>
            <div className="fw-bold sub-hm-heading">
              <h2>IG-Smart Ltd's Case Studies</h2>
            </div>
            <p className="my-3 mb-0">
              Explore our transformative case studies page, unveiling data
              privacy, cyber security, and clinical IT system successes. Witness
              the power of excellence!
              <br />
              <br />
             
              Take charge of your organisation's data privacy, security, and
              safety compliance. Request a personalised proposal today and let
              us safeguard your data and systems.
            </p>
          </div>
          <div className="row py-5 row-gap-4">
            <div className="story-card-wpr">
              {clientData?.length > 0 ? (
                clientData?.map((item, index) => {
                  if (index < 6) {
                    return (
                      <StoryCard
                        key={index}
                        storyItem={item}
                        url={CLIENT_STORIES}
                      />
                    );
                  }
                })
              ) : (
                <div className="sec-padding text-center">
                  <div className="spinner-border " role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
            </div>
            <div className="d-flex justify-content-center mt-4 mb-4">
              <Link prefetch={true} href={"/clientstory"} className="btn-design">
                Read more success storie
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="advisor text-light text-center"
        style={{
          backgroundImage: `url(/images/advisor.webp)`,
          backgroundColor: "#020747",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-lg-8">
              <h2 className="mb-3">
                Need advice, training, or support? Speak with an advisor
              </h2>
              <p className="mb-4">
                Our data and IT governance consultants are here to answer your
                question and find the right solution for your organisation.
              </p>
              <SpeackAdvisor
                name={"Request a proposal"}
                customClass={"btn-design d-inline-flex"}
              />
            </div>
          </div>
        </div>
      </section>

      <React.Suspense fallback={<div>Loading HubspotSection...</div>}>
        <HubspotSection />
      </React.Suspense>

      <section className="brand pt-5 pb-5">
        <div className="container">
          <div className="brand-image">
            <ul className="d-flex align-items-center justify-content-between">
              <li>
                <img  loading="lazy"  width="100%" height="115px"   src="https://admin.ig-smart.com/wp-content/uploads/2023/06/brand.png" alt="brand" />
              </li>
              <li>
                <img  loading="lazy"  width="100%" height="115px"   src="https://admin.ig-smart.com/wp-content/uploads/2023/06/brand-1.png" alt="brand1" />
              </li>
              <li>
                <img  loading="lazy"  width="100%" height="115px"   src="https://admin.ig-smart.com/wp-content/uploads/2023/06/brand-2.png" alt="brand2" />
              </li>
              <li>
                <img  loading="lazy"  width="100%" height="115px"   src="https://admin.ig-smart.com/wp-content/uploads/2023/06/brand-3.png" alt="brand3" />
              </li>
              <li>
                <img  loading="lazy"  width="100%" height="115px"   src="https://admin.ig-smart.com/wp-content/uploads/2023/06/brand-4.png" alt="brand4" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mailchimp */}
      <section
        className="advisor mailchimp-sec text-light text-center"
        style={{
          backgroundImage: `url('/bg_newsletter.webp')`,
          backgroundColor: "#020747",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-lg-8">
              <h2 className="mb-3">
                Subscribe Newsletter
              </h2>
              <p className="mb-4">
               You will never miss our latest news, product and others services info.<br /> Our Newsletter is once a week, every Thursday.
              </p>
              <div className="mail_chimp_inr"><MailChimpForm /></div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

