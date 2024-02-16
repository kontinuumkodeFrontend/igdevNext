'use client'
import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";
import { APPLICATION_SECURITY_AUDIT } from "../services/Url";

export default function MainASA() {
  const { data, isLoading } = useCustomGet(APPLICATION_SECURITY_AUDIT); 

  var bannerContent = {
    title: `<h1>${data?.asa_banner_main_heading}</h1>`,
    cardTitle:data?.asa_banner_heading,
    cardPara: data?.asa_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.asa_banner_image} />
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
                <Tab eventKey="attend" title={data?.asa_tab_heading}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list"
                    dangerouslySetInnerHTML={{__html: data?.asa_tab_content}}
                    >
                      
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.asa_tab_heading_2}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{__html: data?.asa_tab_content_2}}
                    >
                    </div>
                  </div>
                </Tab>              
              </Tabs>
            </div>
          </Container>
        )}
        </section>

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
                {data?.asa_security_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.asa_security_image} alt="asa_security_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.asa_security_content}}
              >
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="bottom" heading={data?.faq_heading} list={data?.faq_list}/>
       <div className="bg-light">
       <TestimonialV2 />
       </div>
        <SubmitRFP />
      </div>
    </>
  ); 
};


