'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { INCIDENT_RESPONSE_AND_MANAGMENT_SERVICE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function IncidentResponseAndManagementServices(){
  const { data, isLoading } = useCustomGet(INCIDENT_RESPONSE_AND_MANAGMENT_SERVICE);

  var bannerContent = {
    title:`<h1>${data?.irms_banner_heading}</h1>`,
    cardTitle:data?.irms_banner_sub_heading,
    cardPara:data?.irms_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.irms_banner_image} />
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
              {data?.irms_key_heading}
            </h2>
            <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.irms_key_image} alt="irms_key_image" />
              </div>
            <div className="complex-chng-des chng-des-md">              
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.irms_key_content}}
                  >             
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
              {data?.irms_conclusion_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.irms_conclusion_content}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.irms_conclusion_image} alt="irms_conclusion_image" />
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
