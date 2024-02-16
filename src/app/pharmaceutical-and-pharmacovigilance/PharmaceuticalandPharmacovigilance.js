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
import { CLIENT_STORIES, PHARACEUTIAL_AND_PHARMACOVIGILANCE } from "../services/Url";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";

const PharmaceuticalandPharmacovigilance = () => {
  const { data, isLoading } = useCustomGet(PHARACEUTIAL_AND_PHARMACOVIGILANCE);

  var bannerContent = {
    title: `<h1>${data?.pap_banner_main_heading}</h1>`,
    cardTitle:data?.pap_banner_heading,
    cardPara:data?.pap_banner_content,
  };

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.pap_banner_image} />
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
                <Tab eventKey="attend" title={data?.pap_tab1_heading}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.pap_tab1_content
                    }}>                     
                      </div>
                    </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.pap_tab2_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.pap_tab2_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="instructor" title={data?.pap_tab3_heading}>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.pap_tab3_content
                    }}>                     
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="empower" title={data?.pap_tab4_heading
                }>
                  <div className="cmpx-chng-des ">
                  <div className="ltd-case-description custom-list" dangerouslySetInnerHTML={{
                      __html: data?.pap_tab4_content
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
                <Link href={`/clientstorydetail/${CLIENT_STORIES}/11318`}>
                  <img  loading="lazy"  width="" height=""   src={data?.pap_conclusion_image} alt="pap_conclusion_image" className="img-fluid" />
                </Link>
              </div>
              <div className="con-sec-des custom-list">
                <h2>{data?.pap_conclusion_heading}</h2>
                <div className="ltd-case-description custom-list mt-md-4 mt-3"
                   dangerouslySetInnerHTML={{__html: data?.pap_conclusion_content}}
                >
                </div>
                <div className="btn-group mt-2">
                  <Link href={`/clientstorydetail/${CLIENT_STORIES}/11318`} className="link">Read Story</Link>
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

export default PharmaceuticalandPharmacovigilance;
