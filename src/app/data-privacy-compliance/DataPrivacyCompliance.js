'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { DATA_PRIVACY_COMPLIANCE_AUDIT } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function DataPrivacyComplianceIner(){
  const { data, isLoading } = useCustomGet(DATA_PRIVACY_COMPLIANCE_AUDIT);

  var bannerContent = {
    title: `<h1>${data?.dpca_banner_heading}</h1>`,
    cardTitle:data?.dpca_banner_sub_heading,
    cardPara:data?.dpca_banner_description,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.dpca_banner_image} />
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
              {data?.dcpa_why_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dcpa_why_image} alt="dcpa_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.dcpa_why_content}}
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
                {data?.dcpa_our_heading}
            </h2>
            <div className="complex-chng-des loop reverse">
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.dcpa_our_content}}
              >
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dcpa_our_image} alt="dcpa_our_image_img" />
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
              {data?.dcpa_ready_heading}
            </h2>
            <div className="complex-chng-des loop reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.dcpa_ready_content}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dcpa_ready_image} alt="dcpa_ready_image" />
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="" heading={data?.faq_heading} list={data?.faq_list}/>

       <div className="bg-light">
       <TestimonialV2 />
       </div>       
        <SubmitRFP />
      </div>
    </>
  );
};
