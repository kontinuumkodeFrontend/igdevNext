'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CCPA_AND_CPRA } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function CCPA() {
  const { data, isLoading } = useCustomGet(CCPA_AND_CPRA);

  var bannerContent = {
    title: `<h1>${data?.ccpa_banner_heading}</h1>`,
    cardTitle:data?.ccpa_banner_sub_heading,
    cardPara:data?.ccpa_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.ccpa_banner_image} />
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
              {data?.ccpa_empower_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ccpa_empower_image} alt="ccpa_empower_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.ccpa_expertise_content}}
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
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.ccpa_expertise}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ccpa_expertise_image_2} alt="ccpa_expertise_image_2" />
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
                {data?.ccpa_empower_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ccpa_empower_image} alt="ccpa_empower_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.ccpa_empower_content}}
              >
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
