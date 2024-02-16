'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import {EXPERIENCE_EXCELLENCE_SMS_AUDIT} from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function ExperienceExcellenceinISMSAudit() {
  const { data, isLoading } = useCustomGet(EXPERIENCE_EXCELLENCE_SMS_AUDIT);

  var bannerContent = {
    title: `<h1>${data?.eesa_banner_main_heading}</h1>`,
    cardTitle:data?.eesa_banner_heading,
    cardPara:data?.eesa_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.eesa_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="record-mang-service">
      
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.eesa_why_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.eesa_why_image} alt="eesa_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.eesa_why_content}}
                  >             
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
       
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
                {data?.eesa_our_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.eesa_our_content}}
              >
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.eesa_our_image} alt="eesa_our_image" />
              </div>
            </div>
          </Container>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.eesa_elevate_heading}
            </h2>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.eesa_elevate_content}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.eesa_elevate_image} alt="eesa_elevate_image" />
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="bottom" heading={data?.faq_heading} list={data?.faq_list}/>

       <div className="bg-light">
       <TestimonialV2 testimonialCards={data?.eesa_testimonial_cards}/>
       </div>       
        <SubmitRFP />
      </div>
    </>
  );
};
