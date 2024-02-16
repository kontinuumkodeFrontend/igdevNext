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
import {
  CENTRAL_AND_LOCAL_GOVERNMENT,
  CLIENT_STORIES,
} from "../services/Url";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";

const CentralandLocalGoverment = () => {
  const { data, isLoading } = useCustomGet(CENTRAL_AND_LOCAL_GOVERNMENT);

  var bannerContent = {
    title: `<h1>${data?.clg_banner_main_heading}</h1>`,
    cardTitle: data?.clg_banner_heading,
    cardPara: data?.clg_banner_description,
  };


  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.clg_banner_image} />
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
                <Tab eventKey="attend" title={data?.clg_tab1_heading}>
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.clg_tab1_content,
                      }}
                    ></div>
                  </div>
                </Tab>
                <Tab eventKey="benefits" title={data?.clg_tab2_heading}>
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.clg_tab2_content,
                      }}
                    ></div>
                  </div>
                </Tab>
                <Tab eventKey="instructor" title={data?.clg_tab3_heading}>
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.clg_tab3_content,
                      }}
                    ></div>
                  </div>
                </Tab>
                <Tab eventKey="empower" title={data?.clg_tab4_heading}>
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.clg_tab4_content,
                      }}
                    ></div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>)}
        </section>

        <section className="con-sec">
          <Container>
            <div className="con-sec-inr">
              <div className="con-sec-img">
                <Link href={`/clientstorydetail/${CLIENT_STORIES}/8990`}>
                  <img  loading="lazy"  width="" height=""  
                    src={data?.clg_conclusion_image}
                    alt="clg_conclusion_image"
                    className="img-fluid"
                  />
                </Link>
              </div>
              <div className="con-sec-des custom-list">
                <h2>{data?.clg_conclusion_heading}</h2>
                <div
                  className="ltd-case-description custom-list mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.clg_conclusion_content,
                  }}
                ></div>
                <div className="btn-group mt-2">
                  <Link
                    href={`/clientstorydetail/${CLIENT_STORIES}/8990`}
                    className="link"
                  >
                    Read Story
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <TestimonialV2 customClass="pb-0" />
        <SubmitRFP />
      </div>
    </>
  );
};

export default CentralandLocalGoverment;
