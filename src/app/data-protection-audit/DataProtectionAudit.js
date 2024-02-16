'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { DATA_PROTECTION_AUDIT } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function DataProtectionAudit(){
  const { data, isLoading } = useCustomGet(DATA_PROTECTION_AUDIT);

  var bannerContent = {
    title: `<h1>${data?.banner_main_heading}</h1>`,
    cardTitle:data?.banner_heading ,
    cardPara: data?.banner_sub_heading,
    bannerbtn: "Get Started with Your Audit Today!",
  }

  const Image = data && data?.banner_image

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={Image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">Data Protection Audit Services </h2>
            <p className="text-center mw-70">
              At IG-Smart Ltd, we take a best practice approach to data
              protection audits, ensuring that your organisation not only
              complies with regulatory requirements but also aligns with
              international and industry-specific standards for data security.
              Here's how we deliver world-class Data Protection Audit Services
            </p>

            {data?.content_box?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.content_box_image} alt="content_box_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          {item?.content_box_heading && (
                            <h3 className="mb-2">
                              {item?.content_box_heading}
                            </h3>
                          )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.content_box_description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className="mt-5">
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          {item?.content_box_heading && (
                            <h3 className="mb-2">
                              {item?.content_box_heading}
                            </h3>
                          )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.content_box_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.content_box_image} alt="cmpx-img-card" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Container>
        </section>

        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <div>
          <div className="container text-center sec-padding-top">
            <h2 className="sec-heading">Contact Information</h2>
            <p className="fz-18">
              Contact us at{" "}
              <a href="tel:+44 0 20 7167 4268">+44 0 20 7167 4268</a> or email
              us at <a href="info@ig-smart.com">info@ig-smart.com</a>. We're
              here to answer your questions.{" "}
            </p>
          </div>
          <SubmitRFP />
        </div>

        <section className="faq-section sec-padding">
          <Container>
            <div className="faq-head">
              <h2 className="sec-heading">Frequently asked questions</h2>
              <p className="sub-heading">
               consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
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
                      How long does a data protection audit typically take?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      The duration of a data protection audit can vary depending
                      on the sise and complexity of your organisation, as well
                      as the scope of the audit. Typically, a comprehensive
                      audit may take anywhere from a few weeks to several
                      months. It's important to work closely with your audit
                      provider to establish a realistic timeline that suits your
                      organisation's needs.
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
                      What are the key benefits of a data protection audit?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body custom-list">
                      <b>
                        {" "}
                        Data protection audits offer several key benefits:{" "}
                      </b>

                      <ul>
                        <li>
                          <b>Compliance Assurance:</b> Audits ensure that your
                          organisation complies with relevant data protection
                          regulations (e.g., GDPR, CCPA), reducing the risk of
                          non-compliance penalties.{" "}
                        </li>
                        <li>
                          <b>Data Security Enhancement:</b> Audits identify
                          vulnerabilities in your data security practices and
                          help you implement improvements to protect sensitive
                          information.
                        </li>
                        <li>
                          <b>Risk Mitigation:</b> By assessing and addressing
                          data protection risks, audits minimise the likelihood
                          of data breaches and associated financial and
                          reputational damage.
                        </li>
                        <li>
                          <b>Customer Trust:</b> Demonstrating your commitment
                          to data protection through audits builds trust with
                          customers, partners, and stakeholders.
                        </li>
                        <li>
                          <b>Operational Efficiency:</b> Audits can uncover
                          opportunities for streamlining data processes and
                          reducing costs.
                        </li>
                        <li>
                          <b>Competitive Advantage:</b> Data protection
                          compliance can be a differentiator in the marketplace,
                          attracting customers who prioritise data security.
                        </li>
                      </ul>
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
                      Who should conduct a data protection audit
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Data protection audits are typically conducted by
                      qualified professionals or third-party audit firms with
                      expertise in data security and compliance. You can choose
                      to have an internal audit team if you have the necessary
                      expertise and resources. However, many organisations opt
                      for external auditors to ensure objectivity and adherence
                      to industry best practices.
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
                      What is the difference between a data protection audit and
                      a security assessment?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      A data protection audit and a security assessment are
                      related but have distinct purposes:
                      <ul>
                        <li>
                          <b>Data Protection Audit:</b> Focuses on evaluating an
                          organisation's compliance with data protection
                          regulations, policies, and procedures. It assesses
                          whether data handling practices align with legal
                          requirements and industry standards.
                        </li>
                        <li>
                          <b> Security Assessment:</b> Encompasses a broader
                          evaluation of an organisation's overall security
                          posture, including assessing vulnerabilities, threats,
                          and security controls. It may include aspects beyond
                          data protection, such as network security and physical
                          security.{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Is a data protection audit a one-time process, or is it
                      ongoing?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Data protection audits can be both one-time and ongoing
                      processes. Initially, organisations often conduct
                      comprehensive audits to establish a baseline and ensure
                      compliance. However, data protection is an ongoing
                      commitment, so regular audits or assessments (e.g.,
                      annually, or biennially) are recommended to maintain
                      compliance and address evolving threats and regulations.
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
                      How can I prepare my organisation for a data protection
                      audit?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <b> Preparation for a data protection audit includes: </b>
                      <ul>
                        <li>
                          {" "}
                          Conducting a data inventory and mapping data flows.{" "}
                        </li>

                        <li>
                          {" "}
                          Developing and maintaining data protection policies
                          and procedures.
                        </li>

                        <li>
                          {" "}
                          Ensuring that staff is trained on data protection
                          practices.{" "}
                        </li>

                        <li>
                          {" "}
                          Regularly monitoring and documenting data protection
                          activities.{" "}
                        </li>

                        <li>
                          {" "}
                          Collaborating with audit professionals to define audit
                          scope and objectives.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      What happens if my organisation fails a data protection
                      audit?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Failing an audit indicates non-compliance with data
                      protection regulations or significant security
                      vulnerabilities. The consequences may include regulatory
                      fines, reputational damage, and potential legal actions.
                      It's essential to address the audit findings promptly,
                      remediate any issues, and work towards achieving
                      compliance.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingeight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeight"
                      aria-expanded="false"
                      aria-controls="collapseeight"
                    >
                      How often should we update our data protection policies
                      after an audit?
                    </button>
                  </h2>
                  <div
                    id="collapseeight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingeight"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Data protection policies should be regularly reviewed and
                      updated to reflect changes in regulations, technology, and
                      business practices. After an audit, it's advisable to
                      revisit and revise policies as needed. Many organisations
                      choose to review and update their policies annually or
                      whenever significant changes occur in their data handling
                      processes.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingnine">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsenine"
                      aria-expanded="false"
                      aria-controls="collapsenine"
                    >
                      What should I look for when selecting an auditor for our
                      data protection audit?
                    </button>
                  </h2>
                  <div
                    id="collapsenine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingnine"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      When selecting an auditor, consider factors such as their
                      experience, expertise in data protection and relevant
                      regulations, industry reputation, client references, and
                      their ability to provide a comprehensive audit report with
                      actionable recommendations. It's crucial to choose an
                      auditor who aligns with your organisation's goals and
                      values.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingeleven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeleven"
                      aria-expanded="false"
                      aria-controls="collapseeleven"
                    >
                      Can a data protection audit uncover security
                      vulnerabilities and data breach risks?
                    </button>
                  </h2>
                  <div
                    id="collapseeleven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingeleven"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Yes, data protection audits often include assessing
                      security vulnerabilities and data breach risks. Auditors
                      will examine your security controls, access controls,
                      encryption practices, incident response procedures, and
                      more to identify weaknesses that could lead to data
                      breaches. Addressing these vulnerabilities is a key aspect
                      of audit remediation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};
