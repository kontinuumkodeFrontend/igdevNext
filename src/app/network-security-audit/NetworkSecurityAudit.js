'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { NETWORK_SECURITY_AUDIT } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function NetworkSecurityAudit(){
  const { data, isLoading } = useCustomGet(NETWORK_SECURITY_AUDIT);

  var bannerContent = {
    title: `<h1>${data?.nsa_banner_heading}</h1>`,
    cardTitle:data?.nsa_banner_sub_heading,
    cardPara:data?.nsa_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.nsa_banner_image} />
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
              {data?.nsa_why_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.nsa_why_image} alt="nsa_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.nsa_why_content}}
                  >             
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.nsa_power_heading}
            </h2>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.nsa_power_content}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.nsa_power_image} alt="nsa_power_image" />
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
                {data?.nsa_enhance_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.nsa_enhance_image} alt="nsa_enhance_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.nsa_enhance_content}}
              >
              </div>
            </div>
          </Container>
        </section>
      
        <FAQDynamic bg={"#fff"} padding="bottom" heading={data?.faq_heading} list={data?.faq_list}/>
       <div className="bg-light">
       <TestimonialV2 testimonialCards={data?.nsa_testimonial_cards}/>
       </div>       
        <SubmitRFP />
      </div>
    </>
  );
};
