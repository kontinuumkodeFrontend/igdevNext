'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import SubmitRFP from "../Components/SubmitRFP";
import SpeackAdvisor from "../Components/SpeackAdvisor";
import ServiceSlider from "../Components/ServiceSlider";
import { BundleProduct } from "../Components/BundleProduct";
import BannerEbook from "../Components/BannerEbook";
import { CLINICAL_SAFETY_OFFICER_HANDBOOK, ISO_27001_STORE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import FAQDynamic from "../Components/FAQDynamic";
import DownloadFormDisclamer from "../Components/DownloadFormDisclamer";
import { downloadFormDatISO } from "../services/Store";
import Link from "next/link";

const ISO27001Store = () => {
    const authenticity =  "/images/authenticity.png";
    const priceIcon =  "/images/Toolkits/image2.png";
    const product =  "/images/product.png";
  const { data, isLoading } = useCustomGet(CLINICAL_SAFETY_OFFICER_HANDBOOK);
  const { data:data1, isLoading:isLoading1 } = useCustomGet(ISO_27001_STORE);

  const testimonial_card = [
    {
      psa_testimonial_card_heading:
        "The Clinical Safety Officer Handbook and Compliance Toolkit have been invaluable for our organisation's compliance efforts.",
      psa_testimonial_card_designation: "Compliance Manager ",
      psa_testimonial_client_name: "Sam Innis",
    },
    {
      psa_testimonial_card_heading:
        "An essential resource for anyone responsible for clinical safety compliance. Highly recommended!",
      psa_testimonial_card_designation: "Chief Medical Officer",
      psa_testimonial_client_name: "Sarah Smith",
    },
  ];

  var bannerContent = {
    heading: data1?.banner_heading,
    smallHeading: data1?.small_heading,
    description: data1?.banner_text,
    image: data1?.banner_image,
    backgroundImage: data1?.banner_background_image,
    btnLink: '/product-detail/31110' ,
    price: '£1495'
  };

  return (
    <>
      {isLoading1 ? <Loader /> : ""}
      <BannerEbook bannerCnt={bannerContent} />
      <section className=" bg-light service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <div className="internal-service-page" id="record-mang-service">
        
        {/* Inside Sec */}
        <section className="wht_isid_sec sec-padding-top">
          <Container>
              <h2 className="sec-heading">What's Inside?</h2>
              <div className="complex-chng-des chng-des-md reverse">
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description mt-md-4 mt-3">
                    <div className="custom-list">
                      <p>
                        Immerse yourself in a treasure trove of security
                        excellence:
                      </p>
                      <ul>
                        <li>
                          <strong>Information Security Policy (ISP):</strong>{" "}
                          Your north star in information security commitment and
                          strategy.
                        </li>
                        <li>
                          <strong>
                            Risk Assessment and Treatment Methodology:
                          </strong>{" "}
                          Navigate risks with confidence, identify
                          vulnerabilities, and make informed decisions.
                        </li>
                        <li>
                          <strong>Statement of Applicability (SOA):</strong>{" "}
                          Master Annex A controls with ease, elevating your
                          security posture.
                        </li>
                        <li>
                          <strong>Incident Response Plan:</strong> Swiftly
                          counteract threats with a battle-tested plan of
                          action.
                        </li>
                        <li>
                          <strong>Secure Development Policy:</strong> Elevate
                          your software practices to unmatched security
                          standards.
                        </li>
                        <li>
                          <strong>Data Protection Policy:</strong> Navigate the
                          intricacies of data protection regulations seamlessly
                          and so much more!
                          <br />
                          Embrace a future of unbreakable security.
                        </li>
                      </ul>
                      <p>
                        Our toolkit is a complete ecosystem designed to
                        simplify, streamline, and strengthen your journey to ISO
                        27001:2022 compliance. With a proven track record of
                        delivering exceptional results, this toolkit is your key
                        to unlocking top-tier information security.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="cmpx-img-card mt-0 long_img img_design">
                <Link href={"/product-detail/31110"}>
                  <img  loading="lazy"  width="" height=""  
                    src={priceIcon}
                    alt="priceIcon"
                  />
                  </Link>
                </div>
              </div>
          </Container>
        </section>


        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">Benefits </h2>

            <div className="row ">
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={authenticity} alt="authenticity" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Comprehensive Clinical Safety Guidance
                  </h5>
                  <p>
                    Our handbook provides in-depth insights and best practices
                    to ensure compliance with DCB1029 and DCB1060, enhancing
                    your clinical safety efforts
                  </p>
                </div>
              </div>
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={authenticity} alt="authenticity1" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Ready-Made Compliance Toolkit
                  </h5>
                  <p>
                    Save time and effort with our toolkit, featuring templates,
                    checklists, and tools designed to simplify the compliance
                    process.
                  </p>
                </div>
              </div>
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={authenticity} alt="authenticityimg" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Expert Insights and Updates
                  </h5>
                  <p>
                    Stay informed with the latest clinical safety updates and
                    expert recommendations to adapt to evolving compliance
                    standards.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">              
              <DownloadFormDisclamer name={"Buy Now"} data={downloadFormDatISO}  id={'31110'}/>
            </div>
          </Container>
        </section>

        <section
          className="award-sec"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">Features </h2>

            <div className="row ">
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={product} alt="productimg" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Comprehensive Handbook
                  </h5>
                  <p>
                    Access a detailed guide covering all aspects of clinical
                    safety compliance, from risk assessment to reporting.
                  </p>
                </div>
              </div>
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={product} alt="product1img" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Compliance Toolkit
                  </h5>
                  <p>
                    Get practical templates, checklists, and tools to streamline
                    your compliance process.
                  </p>
                </div>
              </div>
              <div className="col-xl-4  col-md-6 col-sm-12 col-12">
                <div className="security-content mb-xl-0 mb-3">
                  <img  loading="lazy"  width="" height=""   src={product} alt="product" />
                  <h5 className="my-lg-3 my-md-3 my-sm-3 my-1 fw-bold">
                    Regulatory Updates
                  </h5>
                  <p>
                    Stay up-to-date with the latest DCB1029 and DCB1060
                    compliance requirements and industry trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <SpeackAdvisor name={"Learn More"} />
            </div>
          </Container>
        </section>

         <BundleProduct />
        <div className="bg-light">
          <TestimonialV2 testimonialCards={testimonial_card} />
        </div>
        <SubmitRFP />
        <FAQDynamic
          bg={""}
          padding=""
          heading={data?.faq_heading}
          list={data?.faq_list}
          conclusion={data?.faq_conclusion}
        />
       
      </div>
    </>
  );
};
export default ISO27001Store;




