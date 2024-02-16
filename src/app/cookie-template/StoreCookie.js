'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import SubmitRFP from "../Components/SubmitRFP";

import { COOKIE_TEMPLATE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";
import BannerEbook from "../Components/BannerEbook";

import { DownloadCourse } from "../Features/Store/DownloadCourse";

const StoreCookie = () => {
    const email = "/images/email.png";
    const location = "/images/location.png";
    const phonecall = "/images/phone-call.png";
  const {
    data, 
    isLoading
  } = useCustomGet(COOKIE_TEMPLATE);
 

  const bannerContent = {
    // heading: data?.banner_heading,
    heading: '',
    smallHeading: data?.small_heading,
    description:data?.banner_text,
    image:data?.banner_image,
    backgroundImage:data?.banner_background_image,
    btnName: 'Download Now',
    btnLink: '/product-detail/31331' ,
    price: '£37'
  };

  

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <BannerEbook bannerCnt={bannerContent}/>
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
              <h2 className="sec-heading">{data?.cp_why_heading}</h2>
              <div className="complex-chng-des chng-des-md">
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.cp_why_image} alt="cp_why_image" />
                </div>
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description">
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.cp_why_content,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
              <h2 className="sec-heading">{data?.cp_what_heading}</h2>
              <div className="complex-chng-des chng-des-md reverse">
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description">
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.cp_what_content,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.cp_what_image} alt="cp_what_image" />
                </div>
              </div>
          </Container>
        </section>


        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
              <h2 className="sec-heading">{data?.cp_how_heading}</h2>
              <div className="complex-chng-des chng-des-md">
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.cp_how_image} alt="cp_how_image" />
                </div>
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description">
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.cp_how_content,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
          </Container>
        </section>


        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
              <h2 className="sec-heading">{data?.cp_pricing_heading}</h2>
              <div className="complex-chng-des chng-des-md reverse">
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description">
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.cp_pricing_content,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.cp_pricing_image} alt="cp_pricing_image" />
                </div>
              </div>
          </Container>
        </section>

        <TestimonialV2 customClass="pt-0" />

        <FAQDynamic bg={""} padding="" heading={data?.faq_heading} list={data?.faq_list} conclusion={data?.faq_conclusion}/>

         <DownloadCourse  link={'/checkout/31331'}/>             

        <div className="sec-padding-top">
          <div className="container">
            <div className="faq-head mb-3">
              <h2 className="sec-heading">Contact Information</h2>
            </div>
            <ul className="contact-links contact-cards">
              <li>
                <a href="tel:+4402071674268">
                  <span>
                    <img  loading="lazy"  width="" height=""   src={phonecall} alt="phonecall" />
                  </span>{" "}
                  <pre>+44 0 20 7167 4268</pre>
                </a>
              </li>
              <li>
                <a href="mailto:info@ig-smart.com">
                  <span>
                    <img  loading="lazy"  width="" height=""   src={email} alt="email" />
                  </span>
                  info@ig-smart.com
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Ground+Floor,+20,+22+Wenlock+Rd,+London+N1+7GU,+UK/data=!4m2!3m1!1s0x48761b5f57e02493:0x19f83a9ed6b7a46e?sa=X&ved=2ahUKEwjf7K_t6LaBAxWK-zgGHasiBucQ8gF6BAgQEAA&ved=2ahUKEwjf7K_t6LaBAxWK-zgGHasiBucQ8gF6BAgREAI">
                  <span>
                    <img  loading="lazy"  width="" height=""   src={location} alt="location" />
                  </span>
                  20-22 Wenlock Road, LondonN1 7TA
                </a>
              </li>
            </ul>
          </div>
          <SubmitRFP customClass="pt-0" />
        </div>
      </div>
    </>
  );
};
export default StoreCookie;
