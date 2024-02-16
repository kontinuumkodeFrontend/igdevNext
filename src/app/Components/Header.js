'use client'
import React, { useEffect } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import SpeackAdvisor from "./SpeackAdvisor";
import Dropdown from "react-bootstrap/Dropdown";

export default function Header() {
  const router = useRouter();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

//   useEffect(() => {
//   if(typeof document !== undefined){
//     const handleLinkClick = (event) => {
//       if (event.target.tagName === "A") {
//         event.preventDefault();
//         scrollToTop();
//       }
//     };
//     document.addEventListener("click", handleLinkClick);
//     return () => {
//       document.removeEventListener("click", handleLinkClick);
//     };
//   }
//   }, []);

//   const closeDropdowns = () => {
//     if(typeof document !== undefined){
//       const showElements = document.querySelectorAll(".notOne .dropdown > .show");
//     showElements.forEach((element) => {
//       element.classList.remove("show");
//     });

//     const AttributeChange = document.querySelectorAll(".notOne .dropdown-toggle")
//     AttributeChange.forEach((element) => {
//       element.addEventListener("click", function(event){
//         element.setAttribute("aria-expanded", "false")});
//     }, true);
//     }
// };

  
//   setInterval(() => {
//    if(typeof document !== undefined){
//     const linkButton = document.querySelectorAll("header .child-mega-menu a, header .dark-mega-menu a");
   
//     linkButton.forEach((item) => {
//       item.addEventListener("click", closeDropdowns);
  
//       if (item.getAttribute("aria-expanded")) {
//         item.setAttribute("aria-expanded", "false"); 
//       }
//     });

//     return () => {
//       linkButton.forEach((item) => {
//         item.removeEventListener("click", closeDropdowns);
//       });    
//     };
//    }
//   }, 500);

useEffect(() => {
  const handleLinkClick = (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      scrollToTop();
    }
  };

  if (typeof window !== 'undefined') {
    document.addEventListener('click', handleLinkClick);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }
}, []);

const closeDropdowns = () => {
  if (typeof window !== 'undefined') {
    const showElements = document.querySelectorAll('.notOne .dropdown > .show');
    showElements.forEach((element) => {
      element.classList.remove('show');
    });

    const AttributeChange = document.querySelectorAll('.notOne .dropdown-toggle');
    AttributeChange.forEach((element) => {
      element.addEventListener('click', function (event) {
        element.setAttribute('aria-expanded', 'false');
      });
    }, true);
  }
};

useEffect(() => {
  const intervalId = setInterval(() => {
    if (typeof window !== 'undefined') {
      const linkButton = document.querySelectorAll('header .child-mega-menu a, header .dark-mega-menu a');

      linkButton.forEach((item) => {
        item.addEventListener('click', closeDropdowns);

        if (item.getAttribute('aria-expanded')) {
          item.setAttribute('aria-expanded', 'false');
        }
      });

      return () => {
        linkButton.forEach((item) => {
          item.removeEventListener('click', closeDropdowns);
        });
      };
    }
  }, 500);

  return () => clearInterval(intervalId);
}, []);

  return (
    <>
      <div className="top_hdr">
        
        <div className="container">
          <div className="top_inr">
            <ul className="scl-icons">
              <li>
                <a href="https://www.facebook.com/igsmartuk/">
                  <img  loading="lazy"  width="" height=""   src={'/images/facebook.png'} alt={'facebook'} />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/ig_smart?lang=en">
                  <img  loading="lazy"  width="" height=""   src={'/images/twitter.webp'} alt="twitter" />
                </a>
              </li>
              <li>
                <a>
                  <img  loading="lazy"  width="" height=""   src={'/images/pinterest.png'} alt="pinterest" />
                </a>
              </li>
              <li>
                <a>
                  <img  loading="lazy"  width="" height=""   src={'/images/instagram.png'} alt="instagram" />
                </a>
              </li>
            </ul>
            <ul className="contact-links">
              <li>
                <a href="tel:+4402071674268">
                  <span>
                    <img  loading="lazy"  width="" height=""   src={'/images/phone-call.png'} alt="phonecall" />
                  </span>{" "}
                  <pre>+44 0 20 7167 4268</pre>
                </a>
              </li>
              <li>
                <a href="mailto:info@ig-smart.com">
                  <span>
                    <img  loading="lazy"  width="" height=""   src={'/images/email.png'} alt="email" />
                  </span>
                  info@ig-smart.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <header className="main_hdr" id="main_hdr" >
        <nav className="navbar navbar-expand-xl navbar-light dsk-menu">
          <div className="container">
            <div className="navbar_inr">
              <Link prefetch={true} className="nav-brand" href="/">
                <img  loading="lazy"  width="" height=""   src={'/images/logo.png'} alt="logo" />
              </Link>
              <div className="navbar-collapse collapse" id="basic-navbar-nav">
                <div className="navbar-nav">
                  <div className="nav-item notOne">
                    <Dropdown>
                      <Dropdown.Toggle>Services</Dropdown.Toggle>
                      <Dropdown.Menu id="services">
                        <div className="mega-menu active-menu">
                          <div className="sub-mega-menu">
                            <Tabs defaultActiveKey="first">
                              <Tab eventKey="first" title="Audit">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/application-security-audit">
                                    <div className="link_bx">
                                      Application Security Audit
                                      <p>
                                        Enhance your digital fortress with our
                                        Application Security Audit. Guard your
                                        apps, shield your data. Unleash the
                                        power of secure technology.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/buisness-countinity-and-disaster-recovery-audit">
                                    <div className="link_bx">
                                      Business Continuity and Disaster Recovery
                                      Audit
                                      <p>
                                        Ensure business resilience with our
                                        Continuity & Recovery Audit. Plan,
                                        protect, prosper. Your continuity, our
                                        expertise.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/cyber-security-audit-services">
                                    <div className="link_bx">
                                      Cyber Security Audit Services
                                      <p>
                                        Stay resilient against threats. Our
                                        expert team conducts in-depth cyber
                                        security audits, helping you identify
                                        and mitigate risks, ensuring your
                                        digital world is secure.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/data-protection-audit">
                                    <div className="link_bx">
                                      Data Protection Audit
                                      <p>
                                        We assess your data handling practices,
                                        identify vulnerabilities, and recommend
                                        robust safeguards to comply with
                                        regulations and protect against data
                                        breache
                                      </p>
                                    </div>
                                  </Link>

                                  <Link prefetch={true} href="/data-privacy-compliance">
                                    <div className="link_bx">
                                      Data Privacy Compliance Audit
                                      <p>
                                        Ensure data protection with our Data
                                        Privacy Compliance Audit. Stay
                                        compliant, safeguard trust. Your data,
                                        our priority.
                                      </p>
                                    </div>
                                  </Link>

                                  <Link prefetch={true} href="/gdpr-auditors-services">
                                    <div className="link_bx">
                                      GDPR Audit
                                      <p>
                                        GDPR Audit services are conducted by
                                        independent GDPR auditors for expert
                                        insight into your organisation's data
                                        protection and GDPR risks
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-audit-service">
                                    <div className="link_bx">
                                      ISO 27001 Audit
                                      <p>
                                        Receive a comprehensive ISO 27001
                                        Internal Audit Report for your
                                        organisation.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/experience-excellence-in-isms-audit">
                                    <div className="link_bx">
                                      ISMS Audit
                                      <p>
                                        Elevate your security posture with our
                                        ISMS Audit. Protect, comply, thrive.
                                        Your digital fortress, our expertise.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/it-general-control-audit">
                                    <div className="link_bx">
                                      IT General Controls Audit
                                      <p>
                                        Boost IT resilience with our General
                                        Controls Audit. Secure, streamline,
                                        succeed. Elevate your digital defence
                                        today.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/network-security-audit">
                                    <div className="link_bx">
                                      Network Security Audit
                                      <p>
                                        Strengthen your digital shield with our
                                        Network Security Audit. Guard, shield,
                                        succeed. Your network, our expertise.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/physical-security-audit">
                                    <div className="link_bx">
                                      Physical Security Audit
                                      <p>
                                        Fortify your safety measures with our
                                        Physical Security Audit. Shield, secure,
                                        succeed. Your protection, our priority.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/records-management-auditing-as-a-service">
                                    <div className="link_bx">
                                      Records Management Audit
                                      <p>
                                        Tailored for organizations with complex
                                        and extensive records management
                                        systems.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>

                              <Tab eventKey="second" title="Compliance">
                                <div className="child-mega-menu">
                                  <Link
                                    // href="https://admin.ig-smart.com/wp-content/uploads/2023/01/DCB0129-Clinical-Risk-Management-Specification.pdf"
                                    href="/dcb0129"
                                  >
                                    <div className="link_bx">
                                      DCB0129 Compliance Services
                                      <p>
                                        NHS Clinical Safety and Risk Management
                                        best practice compliance for the
                                        manufacture of medical software and
                                        devices.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link
                                    // href="https://admin.ig-smart.com/wp-content/uploads/2023/01/DCB0160-Clinical-Risk-Management-Specification.pdf"
                                    href="/dcb0160"
                                  >
                                    <div className="link_bx">
                                      DCB0160 Compliance Services
                                      <p>
                                        NHS Digital’s Clinical Risk Management
                                        Specifications v3.2 for Health IT
                                        Systems deployment and use.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/gdpr-compliance">
                                    <div className="link_bx">
                                      GDPR
                                      <p>
                                        Our services are designed to make EU and
                                        UK GDPR compliance easier while
                                        fostering innovation and facilitating
                                        sustainable growth.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/hippa">
                                    <div className="link_bx">
                                      HIPPA
                                      <p>
                                        HIPAA Compliance: Safeguarding
                                        healthcare data with IG-Smart Ltd's
                                        expert guidance. Secure and compliant
                                        practices.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/nist">
                                    <div className="link_bx">
                                      NIST
                                      <p>
                                        NIST Compliance: Partner with IG-Smart
                                        Ltd for robust cybersecurity measures.
                                        Align with NIST standards efficiently.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/nhs-information-governance-consultancy">
                                    <div className="link_bx">
                                      NHS DSPT
                                      <p>
                                        Our top UK NHS Information Governance
                                        consultants offer flexible services for
                                        NHS IG and ensure compliance with Data
                                        Security and Protection Toolkit.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/dtac-services">
                                    <div className="link_bx">
                                      NHS DTAC
                                      <p>
                                        We provide DTAC services led by
                                        experienced Clinical Safety and Data
                                        Protection Officers, enabling health
                                        tech firms to achieve compliance.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab eventKey="third" title="Consulting">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/ai-and-privacy-consultancy">
                                    <div className="link_bx">
                                      AI and Privacy Consultation
                                      <p>
                                        Unlock AI's potential while safeguarding
                                        privacy. Expert AI and Privacy
                                        Consultation. Navigate the future
                                        confidently.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/bio-data-protection-consultancy">
                                    <div className="link_bx">
                                      Biometric Data Protection Consultancy
                                      <p>
                                        Guard your biometric assets with
                                        precision. Expert Biometric Data
                                        Protection Consultancy. Secure the
                                        future today.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/cyber-security-consultancy-services">
                                    <div className="link_bx">
                                      Cyber Security Consultancy
                                      <p>
                                        We conduct Security Audits, review
                                        systems, and help you architect secure
                                        solutions to control your risks.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/cerner-excellence">
                                    <div className="link_bx">
                                      Cerner Excellence Partner
                                      <p>Unlock Cerner's potential with our diverse team of experts. Optimise your healthcare solutions today.</p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/dataprivacyconsultancy">
                                    <div className="link_bx">
                                      Data Privacy Consultancy
                                      <p>
                                        Unlock Data Privacy Excellence: Fortify
                                        privacy with our dynamic compliance and
                                        protection strategies.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/data-protection-consultancy-2">
                                    <div className="link_bx">
                                      Data Protection Consultancy
                                      <p>
                                        Out data Protection Consultants identify
                                        and assess data protection risks in your
                                        organisation's processes.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/enterpriseriskmanagment">
                                    <div className="link_bx">
                                      Enterprise Risk Management Consulting
                                      <p>
                                        Elevate Business Resilience: Partner
                                        with IG-Smart Ltd Ltd for dynamic
                                        Enterprise Risk Management. Embrace the
                                        future confidently.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/ccpa-and-cpra-compliance">
                                    <div className="link_bx">
                                      Ensure CCPA and CPRA Compliance
                                      Effortlessly
                                      <p>
                                        Meet California's privacy laws with
                                        ease. Our expert consultancy ensures
                                        your business aligns perfectly with CCPA
                                        and CPRA, keeping data and privacy
                                        intact.{" "}
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/gdpr-data-mapping-and-inventory">
                                    <div className="link_bx">
                                      GDPR Data Mapping And Inventory
                                      <p>
                                        Unlock GDPR compliance with precision.
                                        Expert GDPR Mapping & Inventory
                                        services. Navigate data privacy
                                        confidently.
                                      </p>
                                    </div>
                                  </Link>

                                  <Link prefetch={true} href="/information-governance-consultancy-services">
                                    <div className="link_bx">
                                      Information Governance Consultancy
                                      <p>
                                        Our leading information Governance
                                        consultants offer flexible services and
                                        solutions to help you overcome all
                                        Information governance challenges.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-consultancy">
                                    <div className="link_bx">
                                      ISO 27001 Consultancy
                                      <p>
                                        Secure data and achieve ISO 27001
                                        certification for Information Security
                                        Management. Win business and maintain a
                                        robust ISMS.
                                      </p>
                                    </div>
                                  </Link>

                                  <Link prefetch={true} href="/gdpr-nhs-consultancy">
                                    <div className="link_bx">
                                      Specialised GDPR Compliance for Healthcare
                                      <p>
                                        Streamline GDPR compliance in
                                        healthcare. Our focused consultancy
                                        provides tailored solutions, ensuring
                                        patient data protection and seamless
                                        compliance.{" "}
                                      </p>
                                    </div>
                                  </Link>

                                  <Link prefetch={true} href="/privacy-by-design-consultation">
                                    <div className="link_bx">
                                      Privacy By Design Consultation
                                      <p>
                                        Elevate your products with Privacy by
                                        Design expertise. Consult with us for
                                        privacy-driven success.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/privacy-information-management-system">
                                    <div className="link_bx">
                                      Privacy Information Management System
                                      <p>
                                        Elevate data privacy with our PIMS
                                        advisory services. Streamline, secure,
                                        succeed. Your privacy, our priority.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab eventKey="fourth" title="Certification">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/cyber-essentials-certification-services">
                                    <div className="link_bx">
                                      Cyber Essentials Certification
                                      <p>
                                        Get certified with UK gov-backed Cyber
                                        Essentials & Cyber Essentials Plus. We
                                        offer expert advice & support. NCSC
                                        supported.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-certification-services">
                                    <div className="link_bx">
                                      ISO 27001 Certification
                                      <p>
                                        Secure information assets with ISO
                                        27001. Gap analysis, tailored
                                        implementation. Prove data security
                                        commitment. Gain an edge.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab eventKey="five" title="Governance">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/clinicalgovernance">
                                    <div className="link_bx">
                                      Clinical Governance
                                      <p>
                                        Award-winning Clinical Governance
                                        Consultancy. Enhance patient care,
                                        ensure compliance, and manage risks
                                        effectively. Partner with us for top
                                        healthcare solutions.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/datagovernance">
                                    <div className="link_bx">
                                      Data Governance
                                      <p>
                                        Award-winning Data Governance
                                        Consultancy. Optimise data usage, ensure
                                        compliance and enhance security. Partner
                                        with us for top data solutions.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/nhs-information-governance-consultancy">
                                    <div className="link_bx">
                                      NHS Information Governance
                                      <p>
                                        Simplifying Information Governance.
                                        Expert consultancy for compliance, risk
                                        reduction, and data security.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab eventKey="six" title="Risk & Resilience">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/iso-22301-business-continuity-gap-analysis-services">
                                    <div className="link_bx">
                                      Business Continuity
                                      <p>
                                        Business Continuity Gap Analysis
                                        Services. Identify risks, threats, and
                                        best practices. Let us help you build a
                                        resilient business
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/cyber-risk-and-resilience">
                                    <div className="link_bx">
                                      Cyber Risk & Resilience
                                      <p>
                                        Cyber Risk Resilience: Enhances your
                                        organisation’s cyber readiness. Expert
                                        strategies for robust defence.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/disaster-recovery-consultancy">
                                    <div className="link_bx">
                                      Disaster Recovery
                                      <p>
                                        Disaster Recovery Solutions: Ensure
                                        rapid and reliable business revival.
                                        Secure your continuity.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/data-privacy-impact-service">
                                    <div className="link_bx">
                                      Data Privacy Impact Assessment Services
                                      <p>
                                        Assess and fortify data privacy with our
                                        expert services. Secure, comply, thrive.
                                        Your data, our priority.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/incident-response-and-managment-service">
                                    <div className="link_bx">
                                      Incident Response And Management Services
                                      <p>
                                        Prepare for the unexpected with our
                                        Incident Response & Management Services.
                                        Rapid, resilient, recovery. Your
                                        security, our expertise.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/mergeracquistion">
                                    <div className="link_bx">
                                      Mergers & Acquistions Risk
                                      <p>
                                        Secure M&A with our award-winning Data
                                        Privacy and Protection Services.
                                        Tailored solutions, expert due
                                        diligence, and ongoing support.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/supplychain">
                                    <div className="link_bx">
                                      Supply Chain Risk
                                      <p>
                                        Supply Chain Risk Consultancy. Enhance
                                        risk management, compliance, and
                                        efficiency. Request a proposal now.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-penetration-testing">
                                    <div className="link_bx">
                                      Penetration Testing
                                      <p>
                                        Comprehensive Penetration Testing
                                        Services by IG-Smart Ltd – improve your
                                        cybersecurity resilience with our
                                        certified team.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab eventKey="seven" title="Resourcing">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/executive-resourcing">
                                    <div className="link_bx">
                                      Executive Resourcing
                                      <p>
                                      Elevate your leadership team with our dual expertise in tech and recruitment. Find top executives with us.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                            </Tabs>
                          </div>
                          <div className="dark-mega-menu">
                            <h6>Managed Services</h6>
                            <Link prefetch={true} href="/dpo-services">
                              DPO Services - Outsourced Data Protection Officer
                            </Link>
                            <Link prefetch={true} href="/clinical-safety-officer-services">
                              CSO Services - Outsourced Clinical Safety Officer
                            </Link>
                            <Link prefetch={true} href="/vciso-services">
                              VCISO Services - Outsourced Chief Information
                              Security Officer
                            </Link>
                            <Link prefetch={true} href="/eurepresentative">
                              EU Representative Services
                            </Link>
                            <Link prefetch={true} href="/ukrepresentative">
                              UK Representative Services
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="nav-item notOne">
                    <Dropdown>
                      <Dropdown.Toggle>Courses</Dropdown.Toggle>
                      <Dropdown.Menu id="courses">
                        <div className="mega-menu active-menu">
                          <div className="sub-mega-menu">
                            <div className="child-mega-menu link_item_bx">
                              <Link prefetch={true} href="/caldicott-guardian-training">
                                <div className="link_bx">
                                  Caldicott Guardian Training - Live Online
                                  <p>
                                    Experience live sessions by world-leading
                                    experts. Real-world scenarios, interactive
                                    Q&A. Master Caldicott principles online.
                                  </p>
                                </div>
                              </Link>                          
                              <Link prefetch={true} href="/cyber-security-training">
                                <div className="link_bx">
                                  Cyber Security Risk Awareness - Live Online
                                  <p>
                                    {" "}
                                    Live training by subject matter experts.
                                    Real-world scenarios, interactive sessions.
                                    Enhance cyber risk awareness remotely.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/data-assest-owner-training-online">
                                <div className="link_bx">
                                  Data Asset Owner Training - Live Online
                                  <p>
                                    Live online sessions by leading experts.
                                    Real-world scenarios, interactive Q&A. Excel
                                    as a data asset owner.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/data-protection-officer-training-online">
                                <div className="link_bx">
                                  Data Protection Officer Training - Live Online
                                  <p>
                                    Live online training by experts. Interactive
                                    Q&A, real-world scenarios. Master DPO skills
                                    from anywhere.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/data-protection-officer-training-for-health-and-socialcare">
                                <div className="link_bx">
                                  DPO Training for Health and Social Care - Live
                                  Online
                                  <p>
                                    Live sessions by world-leading experts.
                                    Interactive Q&A, real-world scenarios.
                                    Tailored DPO training for healthcare.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/data-protection-officer-training-for-pharma">
                                <div className="link_bx">
                                  DPO Training for Pharma - Live Online
                                  <p>
                                    World-leading experts deliver live sessions.
                                    Real-world scenarios, interactive Q&A.
                                    Specialized DPO training for Pharma.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/data-privacy-training-for-pharma">
                                <div className="link_bx">
                                  Data Privacy Training for Pharma - Live Online
                                  <p>
                                    World-leading experts deliver live sessions.
                                    Real-world scenarios, interactive Q&A.
                                    Pharma-specific data privacy training.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/ig-gdpr-training">
                                <div className="link_bx">
                                  GDPR Training - Live Online
                                  <p>
                                    Live sessions by subject matter experts.
                                    Real-world scenarios, interactive Q&A.
                                    Master GDPR essentials online.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/gdpr-nhs-training">
                                <div className="link_bx">
                                  GDPR in the NHS - Live Online
                                  <p>
                                    Expert-led live training. Interactive
                                    sessions, real-world examples. Navigate GDPR
                                    in the NHS remotely.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/information-governance-training">
                                <div className="link_bx">
                                  Information Governance Training Online
                                  <p>
                                    NHS Information Governance Training:
                                    Simplified GDPR compliance for healthcare.
                                    Learn Caldicott principles, risk management,
                                    data security, & more. Ideal for
                                    professionals.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="dark-mega-menu">
                            <h6>Managed Services</h6>
                            <Link prefetch={true} href="/dpo-services">
                              Outsourced Data Protection Officer (DPO) Services
                            </Link>
                            <Link prefetch={true} href="/clinical-safety-officer-services">
                              Outsourced Clinical Safety Officer (CSO) Services
                            </Link>
                            <Link prefetch={true} href="/vciso-services">
                              Virtual Chief Information Security Officer
                              Services (VCISO)
                            </Link>
                            <Link prefetch={true} href="/eurepresentative">
                              EU Representative Services
                            </Link>
                            <Link prefetch={true} href="/ukrepresentative">
                              UK Representative Services
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="nav-item notOne">
                    <Dropdown>
                      <Dropdown.Toggle>Store</Dropdown.Toggle>
                      <Dropdown.Menu id="store">
                        <div className="mega-menu active-menu">
                          <div className="sub-mega-menu">
                            <Tabs defaultActiveKey="first">
                              <Tab eventKey="first" title="Policy Templates">
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/cookie-template">
                                    <div className="link_bx">
                                      Cookies
                                      <p>
                                        Craft a clear, user-friendly cookie
                                        policy. Time-saving template for website
                                        compliance.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/cyber-security-store">
                                    <div className="link_bx">
                                      Cyber Security
                                      <p>
                                        Strengthen cyber defences effectively.
                                        Expertly structured template for cyber
                                        security policy development.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/data-privacy-store">
                                    <div className="link_bx">
                                      Data Privacy
                                      <p>
                                        Empower staff with data privacy
                                        awareness. Ready-to-use training
                                        template for compliance success.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-isms">
                                    <div className="link_bx">
                                      ISO 27001 - ISMS
                                      <p>
                                        Ensure ISO 27001 compliance confidently.
                                        Comprehensive template for information
                                        security policy.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>
                              <Tab
                                eventKey="second"
                                title="Compliance Toolkits"
                              >
                                <div className="child-mega-menu">
                                  <Link prefetch={true} href="/clinical-safety-officer-handbook">
                                    <div className="link_bx">
                                      Clinical Safety Officer Handbook and
                                      DCB1029 and DCB1060 Compliance Toolkit
                                      <p>
                                        Simplify clinical IT safety compliance.
                                        Expert toolkit for meeting DCB1029
                                        requirements.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/gdpr-compliance-toolkit">
                                    <div className="link_bx">
                                      GDPR Compliance Toolkit
                                      <p>
                                        Master GDPR compliance seamlessly.
                                        Comprehensive toolkit for data privacy
                                        and protection.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/iso-27001-toolkit">
                                    <div className="link_bx">
                                      ISO 27001 Information Security Management
                                      System Toolkit
                                      <p>
                                        Streamline ISO 27001 compliance
                                        effortlessly. Expertly crafted toolkit
                                        for robust information security
                                        management.
                                      </p>
                                    </div>
                                  </Link>
                                  <Link prefetch={true} href="/nhs-data-security">
                                    <div className="link_bx">
                                      NHS Data Security & Protection Toolkit
                                      <p>
                                        Confidently meet NHS data protection
                                        standards. Tailored toolkit for NHS data
                                        security compliance.
                                      </p>
                                    </div>
                                  </Link>
                                </div>
                              </Tab>                              
                            </Tabs>
                          </div>
                          <div className="dark-mega-menu">
                            <h6>Managed Services</h6>
                            <Link prefetch={true} href="/dpo-services">
                              Outsourced Data Protection Officer (DPO) Services
                            </Link>
                            <Link prefetch={true} href="/clinical-safety-officer-services">
                              Outsourced Clinical Safety Officer (CSO) Services
                            </Link>
                            <Link prefetch={true} href="/vciso-services">
                              Virtual Chief Information Security Officer
                              Services (VCISO)
                            </Link>
                            <Link prefetch={true} href="/eurepresentative">
                              EU Representative Services
                            </Link>
                            <Link prefetch={true} href="/ukrepresentative">
                              UK Representative Services
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="nav-item notOne">
                    <Dropdown>
                      <Dropdown.Toggle>Industries</Dropdown.Toggle>
                      <Dropdown.Menu id="industires">
                        <div className="mega-menu active-menu eql">
                          <div className="sub-mega-menu">
                            <div className="child-mega-menu link_item_bx">
                              <Link prefetch={true} href="/academic-and-life-science-search">
                                <div className="link_bx">
                                  Academic & Life Science Research
                                  <p>
                                    Expertly secure sensitive data in research.
                                    Trust our deep domain knowledge for privacy
                                    and compliance.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/aerospace-and-border-control-navigating-secure-skies-and-borders">
                                <div className="link_bx">
                                  Aerospace & Border Control
                                  <p>
                                  Unlock skies, secure borders, gain aerospace insights. Navigate the future with confidence.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/cutomer-loyality-and-rewards">
                                <div className="link_bx">
                                  Customer Loyalty & Rewards
                                  <p>
                                    Safeguard customer data with confidence.
                                    Rely on our seasoned expertise in data
                                    privacy and cyber security.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/central-and-local-government">
                                <div className="link_bx">
                                  Central & Local Government
                                  <p>
                                    Ensure government data security. Rely on our
                                    seasoned experts for privacy and compliance.
                                  </p>
                                </div>
                              </Link>

                              <Link prefetch={true} href="/climate-change-and-enviornment">
                                <div className="link_bx">
                                  Climate Change & Environment
                                  <p>
                                    Secure environmental data confidently. Trust
                                    our subject matter expertise in data
                                    protection.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/charity-and-not-for-profit">
                                <div className="link_bx">
                                  Charity & Not-for-profit
                                  <p>Elevate your Charity's Data Privacy with Expert Consultancy, Training, Audits & Support. Trust our Cybersecurity Solutions.</p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/finance">
                                <div className="link_bx">
                                  Financial Services
                                  <p>
                                    Fortify financial data with our proven
                                    expertise. Navigate complex regulations with
                                    ease.
                                  </p>
                                </div>
                              </Link>

                              <Link prefetch={true} href="/healthandsocialcare">
                                <div className="link_bx">
                                  Health & Social Care
                                  <p>
                                    Safeguard healthcare data with confidence.
                                    Trust our deep domain expertise in privacy
                                    and compliance.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/loss-adjustment">
                                <div className="link_bx">
                                  Insurance & Loss Adjustment
                                  <p>
                                    Ensure data security in insurance. Trust our
                                    extensive experience in privacy and
                                    compliance.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/legal">
                                <div className="link_bx">
                                  Legal
                                  <p>
                                    Ensure legal data security. Rely on our
                                    seasoned experts for privacy and cyber
                                    security.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/merge-and-acquisitions">
                                <div className="link_bx">
                                  Mergers & Acquisitions
                                  <p>
                                    Secure data during transitions. Benefit from
                                    our subject matter expertise in data
                                    protection.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/pharmaceutical-and-pharmacovigilance">
                                <div className="link_bx">
                                  Pharmaceutical & Pharmacovigilance
                                  <p>
                                    Secure pharmaceutical data effectively.
                                    Benefit from our subject matter expertise in
                                    data protection.
                                  </p>
                                </div>
                              </Link>

                              <Link prefetch={true} href="/property-and-investment-managment">
                                <div className="link_bx">
                                  Property Investment & Management
                                  <p>
                                    Protect property data with confidence. Rely
                                    on our specialised knowledge in privacy and
                                    security.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/retail">
                                <div className="link_bx">
                                  Retail & FMCG
                                  <p>
                                    Protect customer data confidently. Rely on
                                    our specialised knowledge in privacy and
                                    security.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/security">
                                <div className="link_bx">
                                  Security Services & CCTV
                                  <p>
                                    Enhance security data protection. Trust our
                                    deep domain expertise in cyber security.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/technology">
                                <div className="link_bx">
                                  Technology
                                  <p>
                                    Fortify tech data protection. Trust our
                                    proven experience in cyber security and
                                    compliance.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="dark-mega-menu">
                            <h6>Managed Services</h6>
                            <Link prefetch={true} href="/dpo-services">
                              Outsourced Data Protection Officer (DPO) Services
                            </Link>
                            <Link prefetch={true} href="/clinical-safety-officer-services">
                              Outsourced Clinical Safety Officer (CSO) Services
                            </Link>
                            <Link prefetch={true} href="/vciso-services">
                              Virtual Chief Information Security Officer
                              Services (VCISO)
                            </Link>
                            <Link prefetch={true} href="/eurepresentative">
                              EU Representative Services
                            </Link>
                            <Link prefetch={true} href="/ukrepresentative">
                              UK Representative Services
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="nav-item notOne">
                    <Link prefetch={true} href="/clientstory" className="single-link">
                      Success Stories
                    </Link>
                  </div>

                  <div className=" nav-item notOne">
                    <Dropdown>
                      <Dropdown.Toggle>Insights</Dropdown.Toggle>
                      <Dropdown.Menu id="aboutus">
                        <div className="mega-menu active-menu eql">
                          <div className="sub-mega-menu">
                            <div className="child-mega-menu link_item_bx">
                              <Link prefetch={true} href="/ourvalue">
                                <div className="link_bx">
                                  Our Values & Mission
                                  <p>
                                    IG Smart Ltd: Simplified data protection
                                    solutions with integrated marketing services
                                    for various industries.
                                  </p>
                                </div>
                              </Link>                             
                              <Link prefetch={true} href="/ourteam">
                                <div className="link_bx">
                                  Our Team
                                  <p>
                                    IG-Smart Ltd: Clear and concise solutions
                                    for data protection, privacy, and
                                    cybersecurity. Experienced leadership team
                                    and diverse client portfolio.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/oursdg">
                                <div className="link_bx">
                                  Our SDG’s
                                  <p>
                                    IG-Smart Ltd: Sustainable development
                                    through reforestation in Ghana, data
                                    protection, and cybersecurity solutions.
                                  </p>
                                </div>
                              </Link>
                              <Link prefetch={true} href="/blog">
                                <div className="link_bx">
                                  Our Blog – IG-Smart Insights
                                  <p>
                                    Stay informed on data privacy,
                                    cybersecurity, information governance,
                                    clinical systems safety, and tech trends
                                    with IG-Smart Ltd's insights. #Leadership
                                    #Innovation
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="dark-mega-menu">
                            <h6>Latest Insights</h6>
                            <Link prefetch={true} href="/dpo-services">
                              Outsourced Data Protection Officer (DPO) Services
                            </Link>
                            <Link prefetch={true} href="/clinical-safety-officer-services">
                              Outsourced Clinical Safety Officer (CSO) Services
                            </Link>
                            <Link prefetch={true} href="/vciso-services">
                              Virtual Chief Information Security Officer
                              Services (VCISO)
                            </Link>
                            <Link prefetch={true} href="/eurepresentative">
                              EU Representative Services
                            </Link>
                            <Link prefetch={true} href="/ukrepresentative">
                              UK Representative Services
                            </Link>
                          </div>
                        </div>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="header-btn navbar-nav">
                  <SpeackAdvisor name="Speak to an advisor" />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

