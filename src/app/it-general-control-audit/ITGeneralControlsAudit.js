'use client'
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { IT_GENERAL_CONTROL_AUDIT } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function ITGeneralControlsAudit() {
  const { data, isLoading } = useCustomGet(IT_GENERAL_CONTROL_AUDIT);

  var bannerContent = {
    title: `<h1>IT General Controls Audit</h1>`,
    cardTitle:data?.itgc_banner_heading,
    cardPara: data?.itgc_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.itgc_banner_image} />
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
           {Object.keys(data || {}).length > 0 && (
          <Container>
            <div className="content-tabs">
              <Tabs
                defaultActiveKey="attend"
                id="uncontrolled-tab-example"
                justify
              >
                <Tab eventKey="attend" title={data?.itgc_tab_heading}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list"
                    dangerouslySetInnerHTML={{__html: data?.itgc_tab_content}}
                    >
                      
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.itgc_tab_heading_1}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{__html: data?.itgc_tab_content_1}}
                    >
                    </div>
                  </div>
                </Tab>              
              </Tabs>
            </div>
          </Container>)}
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
                {data?.itgc_today_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.itgc_today_image} alt="itgc_today_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.itgc_today_content}}
              >
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="bottom" heading={data?.faq_heading} list={data?.faq_list}/>
       <div className="bg-light">
       <TestimonialV2  testimonialCards={data?.itgc_testimonial_card}/>
       </div>
        <SubmitRFP />
      </div>
    </>
  ); 
};


