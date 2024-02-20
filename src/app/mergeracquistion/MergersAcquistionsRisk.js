'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { MERGE_AQUISTION } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function MergersAcquistionsRisk(){
  const { data, isLoading } = useCustomGet(MERGE_AQUISTION);

  var bannerContent = {
    title: `<h1>${data?.mar_banner_main_heading}</h1>`,
    cardTitle:data?.mar_banner_heading,
    cardPara:data?.mar_banner_description,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.mar_banner_image} />
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
              {data?.mar_choose_heading}
            </h2>
            <div className="complex-chng-des">
                <div className="ltd-case-description custom-list mt-md-4 mt-3" dangerouslySetInnerHTML={{__html: data?.mar_choose_description}}>
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
                {data?.mar_our_process_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.mar_our_process_image} alt="mar_our_process_image" />
              </div>
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html: data?.mar_our_process_description}}
              >
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
              {data?.mar_protection_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.mar_protection_description}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.mar_protection_image} alt="mar_protection_image" />
              </div>
            </div>
          </Container>
        </section>
       <div className="bg-light">
       <TestimonialV2 />
       </div>
        <SubmitRFP />
      </div>
    </>
  );
};
