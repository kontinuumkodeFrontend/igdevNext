'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { DTAC_SERVICES } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";

export default function DtacService() {
  const { data: pageData, isLoading } = useCustomGet(DTAC_SERVICES);

  const bannerContent = {
    title: pageData?.dtac_services_banner_heading,
    cardTitle: pageData?.dtac_services_banner_sub_heading,
    cardPara: pageData?.dtac_services_choose_description,
    butnCtn1: "Request a proposal",
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={pageData?.dtac_services_banner_background_image}
      />
      <section className=" bg-light service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <div className="internal-service-page" id="dtac-service">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {pageData?.dtac_services_choose_heading}
            </h2>
            <div className="mt-lg-4 mt-0">
              <div className="cmpx-chng-des">
                <div
                  className="ltd-case-description"
                  dangerouslySetInnerHTML={{
                    __html: pageData?.dtac_services_choose_description,
                  }}
                ></div>
              </div>
            </div>
            <div className="complex-chng-des mt-lg-4 mt-0">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <h3>{pageData?.dtac_services_choose_sub_heading}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: pageData?.dtac_services_choose_sub_description,
                    }}
                  ></div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0 img_design">
                {" "}
                <img  loading="lazy"  width="" height=""   src={pageData?.dtac_services_choose_image} alt="dtac_services_choose_image1" />
              </div>
            </div>
          </Container>
        </section>
        <section className="faq-section sec-padding">
          <Container>
            <div className="faq-head">
              <h2 className="sec-heading">Frequently asked questions</h2>
            </div>
            <div className="faq-accordian">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is the DTAC?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            The DTAC sets out the NHS’s minimum clinical safety,{" "}
                            <a href="">
                              <span>data protection</span>
                            </a>
                            , technical security, interoperability, usability
                            and accessibility standards. As a result, IG-Smart
                            Ltd.’s DTAC services enable your organisation to
                            comply with the DTAC, by helping your organisation
                            must satisfactorily complete the DTAC’s detailed
                            questionnaire and provide robust evidence in support
                            of its answers.
                          </p>
                          <p>
                            Moreover, the complex DTAC questionnaire is divided
                            into the following non-assessed (non-technical) and
                            assessed (technical) domains:
                          </p>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>
                                Non-assessed (non-technical) DTAC requirements:
                              </h3>
                              <div className="custom-list">
                                <ul>
                                  <li>
                                    <p>
                                      <strong>Company information:</strong> this
                                      section requires organisation to provide
                                      basic company and product information.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      <strong>Value proposition:</strong> this
                                      section requires organisation to set out
                                      the intended product uses and benefits and
                                      provide user journey examples.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>Assessed (technical) DTAC requirements:</h3>
                              <h4 className="small-heading">
                                <i>Clinical safety</i>
                              </h4>
                              <p>
                                We aid your organization in implementing a
                                strong Clinical Risk Management system and
                                activities compliant with NHS’s DCB1029
                                standard. Hence, our Clinical Safety Officer
                                works with stakeholders to conduct Clinical Risk
                                Assessments and create a Clinical Safety Case
                                Report and Hazard Log.
                              </p>
                              <p>
                                Accordingly, your organization must have a named
                                Clinical Safety Officer, who must have undergone
                                proper training and accreditation and be
                                registered with a clinical professional body. On
                                the other hand, hire an{" "}
                                <a href="">
                                  <span>
                                    outsourced Clinical Safety Officer service
                                  </span>
                                </a>{" "}
                                provider that meets these requirements.
                              </p>
                              <p>
                                Furthermore, if your organisations product/(s)
                                is considered a medical device under the UK
                                Medical Devices Regulations 2002, then you will
                                need to provide details of your Medicines and
                                Healthcare products Regulatory Agency (MHRA)
                                registration. As well as a Declaration of
                                Conformity and, if applicable, certificate of
                                conformity issued by a Notified Body / UK
                                Approved Body.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How do IG-Smart’s DTAC services support clinical safety?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            IG-Smart Ltd.’s DTAC services are designed to both
                            enable your organisation to implement DCB1029 and
                            provide you with the optional benefit of having an
                            outsourced Clinical Safety Officer service that is
                            provided by highly experienced and qualified
                            clinicians.
                          </p>
                          <p>
                            Similarly our Clinical Safety Officers bring their
                            real-world clinical experience to bear when helping
                            our clients to ensure their digital products are
                            safe for use in clinical settings. They follow
                            clinical{" "}
                            <a href="">
                              <span>risk management</span>
                            </a>{" "}
                            frameworks and methodologies that have been tried
                            and tested across the NHS and beyond to ensure your
                            organisations products have been rigorously assessed
                            as being DTAC and DCB1029 compliant.
                          </p>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>DTAC services Data protection</h3>
                              <p>
                                To meet the DTACs{" "}
                                <a href="">
                                  <span>data protection</span>
                                </a>{" "}
                                criteria your organisation will need to:
                              </p>
                              <div className="custom-list">
                                <ul>
                                  <li>
                                    <p>
                                      Ensure it has registered with the UK
                                      Information Commissioners Office (ICO),
                                      where applicable. You use the ICO’s
                                      registration self-assessment tool to
                                      determine whether your organisation needs
                                      to register.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Provide details of a nominated Data
                                      Protection Officer (DPO) if your
                                      organisation is required to have one.
                                      Also, if your organisation (or its
                                      products) routinely processes patient
                                      identifiable information, then it is
                                      likely to require a DPO.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Comply with the NHS Data Security and
                                      Protection Toolkit (NHS DSP Toolkit).
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Conduct and submit a Data Protection
                                      Impact Assessment (DPIA). The DPIA should
                                      clearly demonstrate that your organisation
                                      has taken the nature, scope, context and
                                      purposes and processing and the sources of
                                      any data protection risks, into account,
                                      assessed the risks, and treated risks in
                                      proportion to the threat they may pose.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Also, ensure that any data your
                                      organisation may process outside of the UK
                                      is processed in line with current
                                      legislation.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How do IG-Smart’s DTAC services support Data Protection?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            Our DTAC services are designed to enable your
                            organisation to ensure that it meets all the NHS’s
                            minimum data protection standards for DTAC
                            compliance. Including providing your organisation
                            with our multi-award-winning{" "}
                            <a href="">
                              <span>
                                outsourced Data Protection Officer services
                              </span>
                            </a>
                            , enabling NHS DSP Toolkit compliance, completing a
                            robust DPIA, and implementing processes to enable
                            compliant international data processing. You simply
                            need to let us know how much or how little{" "}
                            <a href="">
                              <span>data protection</span>
                            </a>{" "}
                            advice and support your organisation requires, and
                            we will provide it to you.
                          </p>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>DTAC Services Technical Security</h3>
                              <p>
                                To meet the DTACs technical security criteria
                                your organisation will need to:
                              </p>
                              <div className="custom-list">
                                <ul>
                                  <li>
                                    <p>
                                      Be Cyber Essentials or Cyber Essentials
                                      Plus
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Provide evidence of external penetration
                                      testing of your organisations product/(s).
                                      The penetration test must include a review
                                      of Open Web Application Security Project
                                      (OWASP) Top 10 vulnerabilities from within
                                      the previous 12-month period and the
                                      assessment report must demonstrate that
                                      there are no vulnerabilities that score
                                      7.0 or above using the{" "}
                                      <a href="">
                                        <span>
                                          Common Vulnerability Scoring System
                                        </span>
                                      </a>{" "}
                                      (CVSS).
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Confirm that all custom code has been
                                      security reviewed.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Verify all privileged accounts have
                                      Multi-Factor Authentication enabled.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Validate that logging and reporting
                                      requirements are clearly defined.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Guarantee that your organisations
                                      product/(s) have been load-tested.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do IG-Smart’s DTAC services support Technical
                      Security?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            Our DTAC services enable your organisation to access
                            any Technical Security advice and support it may
                            require, to meet the DTAC’s requirements, from our
                            multi-disciplinary team of security experts –
                            through a single point of contact.We are proud
                            winners of Best Cyber Security Consultancy Firm of
                            the year for four consecutive years, since 2019 and
                            have a team of Certified Cyber Security, Cloud
                            Security, and Information Security Professionals,
                            Lead ISO 27001 Auditors and Implementors, and
                            Ethical Hackers.
                          </p>
                          <p>
                            We can also help your organisation to obtain Cyber
                            Essentials and/or Cyber Essentials Plus
                            certification, and through one of our partner
                            organisations complete a{" "}
                            <a href="">
                              <span>penetration test</span>
                            </a>{" "}
                            that includes a review of OWASP Top 10 and CVSS
                            vulnerabilities.
                          </p>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>Interoperability criteria</h3>
                              <p>
                                If your organisations product/(s) exposes any
                                Application Programming Interfaces (APIs) or
                                integration channels for other consumers, you
                                will need to provide detail and evidence of:
                              </p>
                              <div className="custom-list">
                                <ul>
                                  <li>
                                    <p>
                                      The APIs, with particular regard to any
                                      API connections – setting out the
                                      healthcare standards for interoperability
                                      that are met (e.g., Health Level Seven
                                      International (HL7) / Fast Healthcare
                                      Interoperability Resources (FHIR).
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Adherence to Government Digital Services
                                      Open API Best Practice.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      The documentation and free availability of
                                      APIs.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Reasonable access for third party
                                      connectivity.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      The use of the NHS number to identify
                                      patient data, NHS Login to establish a
                                      user’s verified NHS number, unless the
                                      product does not identify patient record
                                      data or there is a legitimate rationale
                                      for not using the NHS number/Login.
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Your products your capability for
                                      read/write operations with electronic
                                      health records (EHRs) using industry
                                      secure interoperability standards (e.g.
                                      OAuth 2.0, TLS 1.2 or greater).
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Your products compliance with ISO/IEEE
                                      11073 Personal Health Data (PHD) Standards
                                      if it is a wearable or device.
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How do IG-Smart’s DTAC services support interoperability?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            Whilst most developers know enough about any APIs
                            that are embedded within a product to be able to
                            answer the DTACs interoperability questions
                            themselves, with little to no support, if required,
                            we can provide advice on adherence to UK healthcare
                            industry and government best practice standards.
                          </p>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-2">
                              <h3>Usability and accessibility</h3>
                              <p>
                                The Usability and accessibility section of the
                                DTAC is scored (see scoring percentages below)
                                in relation to the{" "}
                                <a href="">
                                  <span>NHS service standard</span>
                                </a>
                                . The scoring does not contribute to the overall
                                Assessment Criteria of section C.
                              </p>
                              <p className="small-heading">
                                To fully meet the DTAC Usability and
                                accessibility standards your organisation will
                                essentially need to:
                              </p>
                              <div className="custom-list">
                                <ul>
                                  <li>
                                    <p>
                                      Engage users in the development of your
                                      product/(s) and consider user needs in
                                      product development lifecycles – 10%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Map all key user journeys to ensure the
                                      whole user problem is solved (or it is
                                      clear to users how it fits into their
                                      pathway or journey) – 10%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Undertake user acceptance testing – 10%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Ensure Web Content Accessibility
                                      Guidelines (WCAG) 2.1 level AA compliance
                                      – 20%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Publish an accessibility statement – 10%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Operate a multidisciplinary team – 2.5%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Adopt agile ways of working in product
                                      development – 2.5%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Ensure continuous product improvement – 5%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Have a benefits case that includes your
                                      organisations objectives and the benefits
                                      it will be measuring – 10%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Be aligned with the NHS Cloud First
                                      strategy and policy – 5%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Use and contribute to open standards,
                                      common components, and patterns – 5%
                                    </p>
                                  </li>
                                  <li>
                                    <p>
                                      Operate a reliable service with Service
                                      Level Agreements for all customers –
                                      providing customers with reports regarding
                                      support and product performance and
                                      availability. – 10%
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <TestimonialV2 customClass="pb-0" />
        <SubmitRFP />
      </div>
    </>
  );
};

