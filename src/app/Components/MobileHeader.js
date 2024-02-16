import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import { Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import SpeackAdvisor from "./SpeackAdvisor";

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

  return (
    <>
        <div className='mbl-hdr mbl-menu'>
            <div className='container'>
                <div className='mbl-hdr-inr'>
                    <NavLink to="/" className="nav-brand">
                        <img  loading="lazy"  width="" height=""   src={'/images/logo.png'} alt="logo" className='w-100'/>
                    </NavLink>
                    <button onClick={toggleDrawer} className='bar_btn btn p-0'>
                        <img  loading="lazy"  width="" height=""   src={'/images/menumbl.png'} alt='Bar' className='w-100' />
                    </button> 
                    </div>
            </div>
        </div>
        <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='left'
            className='mbl-mnu-wpr'
            size={280}
        >
            
                <NavLink onClick={toggleDrawer} to="/" className="nav-brand">
                  <img  loading="lazy"  width="" height=""   src={'/images/logo.png'} alt="logo" className='w-100'/>
                </NavLink>
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
                          <NavLink onClick={toggleDrawer} to="/cyber-security-audit-services">
                            Cyber Security Audit Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/data-protection-compliance">
                            Data Protection Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/gdpr-auditors-services">
                            GDPR Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/iso-27001-audit-service">
                            ISO 27001 Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/records-management-auditing-as-a-service">
                            Records Management Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/application-security-audit">
                            Application Security Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/buisness-countinity-and-disaster-recovery-audit">
                            Business Continuity and Disaster Recovery Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/data-privacy-compliance">
                            Data Privacy Compliance Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/experience-excellence-in-isms-audit">
                            {" "}
                            ISMS Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/it-general-control-audit">
                            {" "}
                            IT General Controls Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/network-security-audit">
                            {" "}
                            Network Security Audit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/physical-security-audit">
                            {" "}
                            Physical Security Audit
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Compliance"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dcb0129">DCB0129 Compliance Services</NavLink>
                          <NavLink onClick={toggleDrawer} to="/dcb0160">DCB0160 Compliance Services</NavLink>
                          <NavLink onClick={toggleDrawer} to="/gdpr-compliance">GDPR</NavLink>
                          <NavLink onClick={toggleDrawer} to="/hippa">HIPPA</NavLink>
                          <NavLink onClick={toggleDrawer} to="/nist">NIST</NavLink>
                          <NavLink onClick={toggleDrawer} to="/nhs-information-governance-consultancy">
                            NHS DSPT
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/dtac-services">NHS DTAC</NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Consulting"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/cyber-security-consultancy-services">
                            Cyber Security Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/dataprivacyconsultancy">
                            Data Privacy Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/data-protection-consultancy-2">
                            Data Protection Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/enterpriseriskmanagment">
                            Enterprise Risk Management Consulting
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/information-governance-consultancy-services">
                            Information Governance Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/iso-27001-consultancy">
                            ISO 27001 Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ccpa-and-cpra-compliance">
                            Ensure CCPA and CPRA Compliance Effortlessly
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/gdpr-nhs-consultancy">
                            Specialised GDPR Compliance for Healthcare
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/bio-data-protection-consultancy">
                            Biometric Data Protection Consultancy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ai-and-privacy-consultancy">
                            AI and Privacy Consultation
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/gdpr-data-mapping-and-inventory">
                            GDPR Data Mapping And Inventory
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/privacy-by-design-consultation">
                            Privacy By Design Consultation
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/privacy-information-management-system">
                            Privacy Information Management System
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/cerner-excellence">
                            Cerner Excellence Partner
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Certification"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/iso-27001-certification-services">
                            ISO 27001 Certification
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/cyber-essentials-certification-services">
                            Cyber Essentials Certification
                          </NavLink>
                         
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Governance"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/clinicalgovernance">
                            Clinical Governance
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/datagovernance">
                            Data Governance
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/nhs-information-governance-consultancy">
                            NHS Information Governance
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Risk & Resilience"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/iso-22301-business-continuity-gap-analysis-services">
                            Business Continuity
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/cyber-risk-and-resilience">
                            Cyber Risk & Resilience
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/disaster-recovery-consultancy">
                            Disaster Recovery
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/mergeracquistion">
                            Mergers & Acquistions Risk
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/supplychain">Supply Chain Risk</NavLink>
                          <NavLink onClick={toggleDrawer} to="/iso-27001-penetration-testing">
                            Penetration Testing
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/data-privacy-impact-service">
                            Data Privacy Impact Assessment Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/incident-response-and-managment-service">
                            Incident Response And Management Services
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Resourcing"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/executive-resourcing">
                            Executive Resourcing
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Managed Services"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dpo-services">
                            DPO Services - Outsourced Data Protection Officer
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-services">
                            CSO Services - Outsourced Clinical Safety Officer
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/vciso-services">
                            VCISO Services - Outsourced Chief Information
                            Security Officer
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/eurepresentative">
                            EU Representative Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ukrepresentative">
                            UK Representative Services
                          </NavLink>
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
                        <NavLink onClick={toggleDrawer} to="/caldicott-guardian-training">
                          Caldicott Guardian Training
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/cyber-security-training">
                          Cyber Security Risk Awareness - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/data-assest-owner-training-online">
                          Data Asset Owner Training - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/data-protection-officer-training-online">
                          Data Protection Officer Training - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/data-protection-officer-training-for-health-and-socialcare">
                          DPO Training for Health and Social Care - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/data-protection-officer-training-for-pharma">
                          Data Protection Officer Training for Pharma
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/data-privacy-training-for-pharma">
                          DPO Training for Pharma - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/ig-gdpr-training">
                          GDPR Training - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/gdpr-nhs-training">
                          GDPR in the NHS - Live Online
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/information-governance-training">
                          Information Governance Training Online
                        </NavLink>
                        {/* </NavDropdown> */}
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Managed Services"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dpo-services">
                            Outsourced Data Protection Officer (DPO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-services">
                            Outsourced Clinical Safety Officer (CSO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/vciso-services">
                            Virtual Chief Information Security Officer Services
                            (VCISO)
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/eurepresentative">
                            EU Representative Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ukrepresentative">
                            UK Representative Services
                          </NavLink>
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
                          <NavLink onClick={toggleDrawer} to="/cookie-template">Cookies</NavLink>
                          <NavLink onClick={toggleDrawer} to="/cyber-security-store">
                            Cyber Security
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/data-privacy-store">
                            Data Privacy
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/iso-27001-isms">
                            ISO 27001 - ISMS
                          </NavLink>
                        </NavDropdown>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Compliance Toolkits"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/iso-27001-toolkit">
                            ISO 27001 Information Security Management System
                            Toolkit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-handbook">
                            Clinical Safety Officer Handbook and DCB1029 and
                            DCB1060 Compliance Toolkit
                          </NavLink>

                          <NavLink onClick={toggleDrawer} to="/gdpr-compliance-toolkit">
                            GDPR Compliance Toolkit
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/nhs-data-security">
                            NHS Data Security & Protection Toolkit
                          </NavLink>                        
                        </NavDropdown>
                      </div>                      
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Managed Services"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dpo-services">
                            Outsourced Data Protection Officer (DPO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-services">
                            Outsourced Clinical Safety Officer (CSO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/vciso-services">
                            Virtual Chief Information Security Officer Services
                            (VCISO)
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/eurepresentative">
                            EU Representative Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ukrepresentative">
                            UK Representative Services
                          </NavLink>
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
                        <NavLink onClick={toggleDrawer} to="/academic-and-life-science-search">
                          Academic & Life Science Research
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/cutomer-loyality-and-rewards">
                          Customer Loyalty & Rewards
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/central-and-local-government">
                          Central & Local Government
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/climate-change-and-enviornment">
                          Climate Change & Environment
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/finance">Financial Services</NavLink>
                        <NavLink onClick={toggleDrawer} to="/healthandsocialcare">
                          Health & Social Care
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/loss-adjustment">
                          Insurance & Loss Adjustment
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/legal">
                          Legal
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/merge-and-acquisitions">
                          Mergers & Acquisitions
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/pharmaceutical-and-pharmacovigilance">
                          Pharmaceutical & Pharmacovigilance
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/property-and-investment-managment">
                          Property Investment & Management
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/retail">Retail & FMCG</NavLink>
                        <NavLink onClick={toggleDrawer} to="/security">
                          Security Services & CCTV
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/technology">Technology</NavLink>
                        <NavLink onClick={toggleDrawer} to="/aerospace-and-border-control-navigating-secure-skies-and-borders">
                          Aerospace & Border Control
                        </NavLink>
                        <NavLink onClick={toggleDrawer} to="/charity-and-not-for-profit">
                          Charity & Not-for-profit
                        </NavLink>

                        {/* </NavDropdown> */}
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Managed Services"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dpo-services">
                            Outsourced Data Protection Officer (DPO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-services">
                            Outsourced Clinical Safety Officer (CSO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/vciso-services">
                            Virtual Chief Information Security Officer Services
                            (VCISO)
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/eurepresentative">
                            EU Representative Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ukrepresentative">
                            UK Representative Services
                          </NavLink>
                        </NavDropdown>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
                <div className="nav-item ">
                  <NavLink onClick={toggleDrawer} to="/clientstory" className="mb-link">
                    Success Stories
                  </NavLink>
                </div>

                <NavDropdown
                  title="Insights"
                  id="basic-nav-dropdown"
                  className="mob-sub-megamenu"
                >
                  <div className="mega-menu-wrap">
                    <div className="sub-mega-menu">
                      <div className="child-mega-menu">
                       
                        <NavLink onClick={toggleDrawer} to="/ourvalue">Our Values & Mission</NavLink>
                        <NavLink onClick={toggleDrawer} to="/ourteam">Our Team</NavLink>
                        <NavLink onClick={toggleDrawer} to="/oursdg">Our SDG’s</NavLink>
                        <NavLink onClick={toggleDrawer} to="/blog">
                          Our Blog – IG-Smart Insights
                        </NavLink>
                      </div>
                      <div className="child-mega-menu">
                        <NavDropdown
                          title="Latest Insights"
                          id="basic-nav-dropdown"
                          className="mob-megamenu-title"
                        >
                          <NavLink onClick={toggleDrawer} to="/dpo-services">
                            Outsourced Data Protection Officer (DPO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/clinical-safety-officer-services">
                            Outsourced Clinical Safety Officer (CSO) Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/vciso-services">
                            Virtual Chief Information Security Officer Services
                            (VCISO)
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/eurepresentative">
                            EU Representative Services
                          </NavLink>
                          <NavLink onClick={toggleDrawer} to="/ukrepresentative">
                            UK Representative Services
                          </NavLink>
                        </NavDropdown>
                      </div>
                    </div>
                  </div>
                </NavDropdown>
              </Nav>
              
                <SpeackAdvisor setcloseBar={setIsOpen} name={"Speak to an advisor"} />
        </Drawer>
    </>
  )
}
