'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { GDPR_NHS_CONSULTANCY } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import { useCustomGet } from "../services/Service";

export default function GdprNhsConsultancy() {
  const { data, isLoading } = useCustomGet(GDPR_NHS_CONSULTANCY);

  var bannerContent = {
    title: data?.gnc_banner_heading,
    cardTitle: data?.cyber_banner_sub_heading,
    cardPara: data?.gnc_banner_description,
    butnCtn1: data?.gnc_banner_button_text,
    butnCtn1Link: data?.gnc_banner_button_link,
    butnCtn2: "",
    butnCtn2Link: "",
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.gnc_banner_background_image}
      />
        <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="gdprnhsconseultancy">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.gnc_simplified_heading}</h2>
            <div className={"complex-chng-des"}>
            <div className="img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gnc_simplified_image} alt="gnc_simplified_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.gnc_simplified_description,
                    }}
                  ></div>
                </div>
              </div>             
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding"
        >
          <Container>
            <h2 className="sec-heading">{data?.gnc_pragmatic_heading}</h2>
            <div className={"complex-chng-des"}>
            
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.gnc_simplified_description,
                    }}
                  ></div>               
              </div>             
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.gnc_partner_heading}</h2>

                <div className="img_design cmpx-img-card">
                  <img  loading="lazy"  width="" height=""   src={data?.gnc_partner_image} alt="gnc_partner_image" />
                </div>
            <div className="complex-chng-des" >
                  <div className="ltd-case-description mt-md-4 mt-3"
                    dangerouslySetInnerHTML={{__html:data?.gnc_pragmatic_content_box}}
                   >                    
                  </div>
              </div>
          </Container>
        </section>

        
        <TestimonialV2 />
        <SubmitRFP getData={data?.get_cards} getHeading={data?.get_heading} />
      </div>
    </>
  );
};

