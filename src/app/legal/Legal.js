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
import { CLIENT_STORIES, SERVICE_LEGAL } from "../services/Url";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";

const Legal = () => {
  const { data, isLoading } = useCustomGet(SERVICE_LEGAL);

  var bannerContent = {
    title: `<h1>${data?.sl_banner_main_heading}</h1>`,
    cardTitle:data?.sl_banner_heading,
    cardPara:data?.sl_banner_content,
    butnCtn1: "Request a proposal",
    butnCtn2: "Read More",
  };


  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.sl_banner_image} />
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
                <Tab eventKey="attend" title={data?.sl_tab1_heading}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.sl_tab1_content
                    }}>                     
                      </div>
                    </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.sl_tab2_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.sl_tab2_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="instructor" title={data?.sl_tab3_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.sl_tab3_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="empower" title={data?.sl_tab4_heading
                }>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.sl_tab4_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>)}
        </section>

        <section className="sec-padding-bottom">
          <Container>
            <div className="con-sec-inr">
              <div className="con-sec-img">
                <Link href={`/clientstorydetail/${CLIENT_STORIES}/11329`}>
                  <img  loading="lazy"  width="" height=""   src={data?.sl_conclusion_image} alt="sl_conclusion_image" className="img-fluid" style={{objectPosition:"top"}}/>
                </Link>
              </div>
              <div className="con-sec-des custom-list">
                <h2>{data?.sl_conclusion_heading}</h2>
                <div className="ltd-case-description custom-list mt-md-4 mt-3"
                   dangerouslySetInnerHTML={{__html: data?.sl_conclusion_content}}
                >
                </div>
                <div className="btn-group mt-2">
                  <Link href={`/clientstorydetail/${CLIENT_STORIES}/11329`} className="link">Read Story</Link>
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

export default Legal;
