'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { INSURANCE_AND_LOSS_ADJUSTMENT } from "../services/Url";
import ServiceSlider from "../Components/ServiceSlider";

const InsuranceAndLossAdjustment = () => {
  const { data, isLoading } = useCustomGet(INSURANCE_AND_LOSS_ADJUSTMENT);

  var bannerContent = {
    title: `<h1>${data?.iala_banner_main_heading}</h1>`,
    cardTitle:data?.iala_banner_heading,
    cardPara:data?.iala_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.iala_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="cyber-sec-course">

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
                <Tab eventKey="attend" title={data?.iala_tab1_heading}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.iala_tab1_content
                    }}>                     
                      </div>
                    </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.iala_tab2_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.iala_tab2_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="instructor" title={data?.iala_tab3_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.iala_tab3_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="empower" title={data?.iala_tab4_heading
                }>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.iala_tab4_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>)}
        </section>

        <section className="sec-padding-bottom con-sec">
          <Container>
            <div className="con-sec-inr">
              <div className="con-sec-img">
                <img  loading="lazy"  width="" height=""   src={data?.iala_conclusion_image} alt="iala_conclusion_image" className="img-fluid"/>
              </div>
              <div className="con-sec-des custom-list">
                <h2>{data?.iala_conclusion_heading}</h2>
                <div
                   dangerouslySetInnerHTML={{__html: data?.iala_conclusion_content}}
                >
                </div>  
              </div>             
            </div>           
          </Container>
        </section>   

        <TestimonialV2 customClass="p-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

export default InsuranceAndLossAdjustment;
