"use client";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import { Nav, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import SpeackAdvisor from "./SpeackAdvisor";
import "react-modern-drawer/dist/index.css";

export const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="mbl-hdr mbl-menu">
        <div className="container">
          <div className="mbl-hdr-inr">
            <Link href="/" className="nav-brand">
              <img
                loading="lazy"
                width="136px"
                height="46px"
                src={"/images/logo.png"}
                alt="logo"
                className="w-100 imgContain"
              />
            </Link>
            <button onClick={toggleDrawer} className="bar_btn btn p-0">
              <img
                loading="lazy"
                width="20px"
                height="20px"
                src={"/images/menumbl.png"}
                alt="Bar"
                className="w-100 imgContain"
              />
            </button>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="mbl-mnu-wpr"
        size={280}
      >
        <Link onClick={toggleDrawer} href="/" className="nav-brand">
          <img
            loading="lazy"
            width="136px"
            height="46px"
            src={"/images/logo.png"}
            alt="logo"
            className="w-100 imgContain"
          />
        </Link>
        <Nav>
          <NavDropdown
            title="Service"
            id="basic-nav-dropdown"
            className="mob-sub-megamenu"
          >
            <div className="mega-menu-wrap">
              <div className="sub-mega-menu">
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Audit"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link
                      onClick={toggleDrawer}
                      href="/cyber-security-audit-services"
                    >
                      Cyber Security Audit Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/data-protection-compliance"
                    >
                      Data Protection Audit
                    </Link>
                    <Link onClick={toggleDrawer} href="/gdpr-auditors-services">
                      GDPR Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/iso-27001-audit-service"
                    >
                      ISO 27001 Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/records-management-auditing-as-a-service"
                    >
                      Records Management Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/application-security-audit"
                    >
                      Application Security Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/buisness-countinity-and-disaster-recovery-audit"
                    >
                      Business Continuity and Disaster Recovery Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/data-privacy-compliance"
                    >
                      Data Privacy Compliance Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/experience-excellence-in-isms-audit"
                    >
                      {" "}
                      ISMS Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/it-general-control-audit"
                    >
                      {" "}
                      IT General Controls Audit
                    </Link>
                    <Link onClick={toggleDrawer} href="/network-security-audit">
                      {" "}
                      Network Security Audit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/physical-security-audit"
                    >
                      {" "}
                      Physical Security Audit
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Compliance"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dcb0129">
                      DCB0129 Compliance Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/dcb0160">
                      DCB0160 Compliance Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/gdpr-compliance">
                      GDPR
                    </Link>
                    <Link onClick={toggleDrawer} href="/hippa">
                      HIPPA
                    </Link>
                    <Link onClick={toggleDrawer} href="/nist">
                      NIST
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/nhs-information-governance-consultancy"
                    >
                      NHS DSPT
                    </Link>
                    <Link onClick={toggleDrawer} href="/dtac-services">
                      NHS DTAC
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Consulting"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link
                      onClick={toggleDrawer}
                      href="/cyber-security-consultancy-services"
                    >
                      Cyber Security Consultancy
                    </Link>
                    <Link onClick={toggleDrawer} href="/dataprivacyconsultancy">
                      Data Privacy Consultancy
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/data-protection-consultancy-2"
                    >
                      Data Protection Consultancy
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/enterpriseriskmanagment"
                    >
                      Enterprise Risk Management Consulting
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/information-governance-consultancy-services"
                    >
                      Information Governance Consultancy
                    </Link>
                    <Link onClick={toggleDrawer} href="/iso-27001-consultancy">
                      ISO 27001 Consultancy
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/ccpa-and-cpra-compliance"
                    >
                      Ensure CCPA and CPRA Compliance Effortlessly
                    </Link>
                    <Link onClick={toggleDrawer} href="/gdpr-nhs-consultancy">
                      Specialised GDPR Compliance for Healthcare
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/bio-data-protection-consultancy"
                    >
                      Biometric Data Protection Consultancy
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/ai-and-privacy-consultancy"
                    >
                      AI and Privacy Consultation
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/gdpr-data-mapping-and-inventory"
                    >
                      GDPR Data Mapping And Inventory
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/privacy-by-design-consultation"
                    >
                      Privacy By Design Consultation
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/privacy-information-management-system"
                    >
                      Privacy Information Management System
                    </Link>
                    <Link onClick={toggleDrawer} href="/cerner-excellence">
                      Cerner Excellence Partner
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Certification"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link
                      onClick={toggleDrawer}
                      href="/iso-27001-certification-services"
                    >
                      ISO 27001 Certification
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/cyber-essentials-certification-services"
                    >
                      Cyber Essentials Certification
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Governance"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/clinicalgovernance">
                      Clinical Governance
                    </Link>
                    <Link onClick={toggleDrawer} href="/datagovernance">
                      Data Governance
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/nhs-information-governance-consultancy"
                    >
                      NHS Information Governance
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Risk & Resilience"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link
                      onClick={toggleDrawer}
                      href="/iso-22301-business-continuity-gap-analysis-services"
                    >
                      Business Continuity
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/cyber-risk-and-resilience"
                    >
                      Cyber Risk & Resilience
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/disaster-recovery-consultancy"
                    >
                      Disaster Recovery
                    </Link>
                    <Link onClick={toggleDrawer} href="/mergeracquistion">
                      Mergers & Acquistions Risk
                    </Link>
                    <Link onClick={toggleDrawer} href="/supplychain">
                      Supply Chain Risk
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/iso-27001-penetration-testing"
                    >
                      Penetration Testing
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/data-privacy-impact-service"
                    >
                      Data Privacy Impact Assessment Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/incident-response-and-managment-service"
                    >
                      Incident Response And Management Services
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Resourcing"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/executive-resourcing">
                      Executive Resourcing
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Managed Services"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dpo-services">
                      DPO Services - Outsourced Data Protection Officer
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-services"
                    >
                      CSO Services - Outsourced Clinical Safety Officer
                    </Link>
                    <Link onClick={toggleDrawer} href="/vciso-services">
                      VCISO Services - Outsourced Chief Information Security
                      Officer
                    </Link>
                    <Link onClick={toggleDrawer} href="/eurepresentative">
                      EU Representative Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/ukrepresentative">
                      UK Representative Services
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </NavDropdown>
          <NavDropdown
            title="Courses"
            id="basic-nav-dropdown"
            className="mob-sub-megamenu"
          >
            <div className="mega-menu-wrap">
              <div className="sub-mega-menu">
                <div className="child-mega-menu">
                  <Link
                    onClick={toggleDrawer}
                    href="/caldicott-guardian-training"
                  >
                    Caldicott Guardian Training
                  </Link>
                  <Link onClick={toggleDrawer} href="/cyber-security-training">
                    Cyber Security Risk Awareness - Live Online
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/data-assest-owner-training-online"
                  >
                    Data Asset Owner Training - Live Online
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/data-protection-officer-training-online"
                  >
                    Data Protection Officer Training - Live Online
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/data-protection-officer-training-for-health-and-socialcare"
                  >
                    DPO Training for Health and Social Care - Live Online
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/data-protection-officer-training-for-pharma"
                  >
                    Data Protection Officer Training for Pharma
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/data-privacy-training-for-pharma"
                  >
                    DPO Training for Pharma - Live Online
                  </Link>
                  <Link onClick={toggleDrawer} href="/ig-gdpr-training">
                    GDPR Training - Live Online
                  </Link>
                  <Link onClick={toggleDrawer} href="/gdpr-nhs-training">
                    GDPR in the NHS - Live Online
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/information-governance-training"
                  >
                    Information Governance Training Online
                  </Link>
                  {/* </NavDropdown> */}
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Managed Services"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dpo-services">
                      Outsourced Data Protection Officer (DPO) Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-services"
                    >
                      Outsourced Clinical Safety Officer (CSO) Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/vciso-services">
                      Virtual Chief Information Security Officer Services
                      (VCISO)
                    </Link>
                    <Link onClick={toggleDrawer} href="/eurepresentative">
                      EU Representative Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/ukrepresentative">
                      UK Representative Services
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </NavDropdown>
          <NavDropdown
            title="Store"
            id="basic-nav-dropdown"
            className="mob-sub-megamenu"
          >
            <div className="mega-menu-wrap">
              <div className="sub-mega-menu">
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Policy Templates"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/cookie-template">
                      Cookies
                    </Link>
                    <Link onClick={toggleDrawer} href="/cyber-security-store">
                      Cyber Security
                    </Link>
                    <Link onClick={toggleDrawer} href="/data-privacy-store">
                      Data Privacy
                    </Link>
                    <Link onClick={toggleDrawer} href="/iso-27001-isms">
                      ISO 27001 - ISMS
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Compliance Toolkits"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/iso-27001-toolkit">
                      ISO 27001 Information Security Management System Toolkit
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-handbook"
                    >
                      Clinical Safety Officer Handbook and DCB1029 and DCB1060
                      Compliance Toolkit
                    </Link>

                    <Link
                      onClick={toggleDrawer}
                      href="/gdpr-compliance-toolkit"
                    >
                      GDPR Compliance Toolkit
                    </Link>
                    <Link onClick={toggleDrawer} href="/nhs-data-security">
                      NHS Data Security & Protection Toolkit
                    </Link>
                  </NavDropdown>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Managed Services"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dpo-services">
                      Outsourced Data Protection Officer (DPO) Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-services"
                    >
                      Outsourced Clinical Safety Officer (CSO) Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/vciso-services">
                      Virtual Chief Information Security Officer Services
                      (VCISO)
                    </Link>
                    <Link onClick={toggleDrawer} href="/eurepresentative">
                      EU Representative Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/ukrepresentative">
                      UK Representative Services
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </NavDropdown>
          <NavDropdown
            title="Industries"
            id="basic-nav-dropdown"
            className="mob-sub-megamenu"
          >
            <div className="mega-menu-wrap">
              <div className="sub-mega-menu">
                <div className="child-mega-menu">
                  <Link
                    onClick={toggleDrawer}
                    href="/academic-and-life-science-search"
                  >
                    Academic & Life Science Research
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/cutomer-loyality-and-rewards"
                  >
                    Customer Loyalty & Rewards
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/central-and-local-government"
                  >
                    Central & Local Government
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/climate-change-and-enviornment"
                  >
                    Climate Change & Environment
                  </Link>
                  <Link onClick={toggleDrawer} href="/finance">
                    Financial Services
                  </Link>
                  <Link onClick={toggleDrawer} href="/healthandsocialcare">
                    Health & Social Care
                  </Link>
                  <Link onClick={toggleDrawer} href="/loss-adjustment">
                    Insurance & Loss Adjustment
                  </Link>
                  <Link onClick={toggleDrawer} href="/legal">
                    Legal
                  </Link>
                  <Link onClick={toggleDrawer} href="/merge-and-acquisitions">
                    Mergers & Acquisitions
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/pharmaceutical-and-pharmacovigilance"
                  >
                    Pharmaceutical & Pharmacovigilance
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/property-and-investment-managment"
                  >
                    Property Investment & Management
                  </Link>
                  <Link onClick={toggleDrawer} href="/retail">
                    Retail & FMCG
                  </Link>
                  <Link onClick={toggleDrawer} href="/security">
                    Security Services & CCTV
                  </Link>
                  <Link onClick={toggleDrawer} href="/technology">
                    Technology
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/aerospace-and-border-control-navigating-secure-skies-and-borders"
                  >
                    Aerospace & Border Control
                  </Link>
                  <Link
                    onClick={toggleDrawer}
                    href="/charity-and-not-for-profit"
                  >
                    Charity & Not-for-profit
                  </Link>

                  {/* </NavDropdown> */}
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Managed Services"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dpo-services">
                      Outsourced Data Protection Officer (DPO) Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-services"
                    >
                      Outsourced Clinical Safety Officer (CSO) Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/vciso-services">
                      Virtual Chief Information Security Officer Services
                      (VCISO)
                    </Link>
                    <Link onClick={toggleDrawer} href="/eurepresentative">
                      EU Representative Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/ukrepresentative">
                      UK Representative Services
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </NavDropdown>
          <div className="nav-item ">
            <Link
              onClick={toggleDrawer}
              href="/clientstory"
              className="mb-link"
            >
              Success Stories
            </Link>
          </div>

          <NavDropdown
            title="Insights"
            id="basic-nav-dropdown"
            className="mob-sub-megamenu"
          >
            <div className="mega-menu-wrap">
              <div className="sub-mega-menu">
                <div className="child-mega-menu">
                  <Link onClick={toggleDrawer} href="/ourvalue">
                    Our Values & Mission
                  </Link>
                  <Link onClick={toggleDrawer} href="/ourteam">
                    Our Team
                  </Link>
                  <Link onClick={toggleDrawer} href="/oursdg">
                    Our SDG’s
                  </Link>
                  <Link onClick={toggleDrawer} href="/blog">
                    Our Blog – IG-Smart Insights
                  </Link>
                </div>
                <div className="child-mega-menu">
                  <NavDropdown
                    title="Latest Insights"
                    id="basic-nav-dropdown"
                    className="mob-megamenu-title"
                  >
                    <Link onClick={toggleDrawer} href="/dpo-services">
                      Outsourced Data Protection Officer (DPO) Services
                    </Link>
                    <Link
                      onClick={toggleDrawer}
                      href="/clinical-safety-officer-services"
                    >
                      Outsourced Clinical Safety Officer (CSO) Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/vciso-services">
                      Virtual Chief Information Security Officer Services
                      (VCISO)
                    </Link>
                    <Link onClick={toggleDrawer} href="/eurepresentative">
                      EU Representative Services
                    </Link>
                    <Link onClick={toggleDrawer} href="/ukrepresentative">
                      UK Representative Services
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>
          </NavDropdown>
        </Nav>

        <SpeackAdvisor setcloseBar={setIsOpen} name={"Speak to an advisor"} />
      </Drawer>
    </>
  );
};
