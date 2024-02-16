'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ReadMore from "../Features/ReadMore";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { BUSINESS_CONTINUITY } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function BusinessConService(){
  const { data, isLoading } = useCustomGet(BUSINESS_CONTINUITY);

  const bannerContent = {    
    title: data?.business_continuity_banner_heading,
    cardTitle: data?.business_continuity_banner_sub_heading,
    cardPara:data?.business_continuity_banner_description,
    butnCtn1: "Request a proposal",
    butnCtn2: "Learn More",
  };

  return (
    <>
    {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.business_continuity_banner_background_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="business-con-service">

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.business_continuity_benifits_image} alt="business_continuity_benifits_image" />
              </div>
              <div className="cmpx-chng-des">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <h2>{data?.business_continuity_benifits_heading}</h2>
                  <div className="custom-list"
                  dangerouslySetInnerHTML={{__html: data?.business_continuity_benifits_list}}
                   >                    
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="indi-service-sec" style={{backgroundColor: '#fff'}}>
          <Container>
            <h2 className="sec-heading">
              {data?.business_continuity_service_work_heading}
            </h2>
            <div className="indi-service-cards">
              {
                data?.business_continuity_service_work_cards?.map((item, i) => {
                  return(
                    <div className="indi-service-card" key={i}>
                    <div className="gdpr-card-no">
                      <h2>0{i+1}</h2>
                    </div>
                    <div className="gdpr-icon">
                      <img  loading="lazy"  width="" height=""   src={item?.business_continuity_service_card_image} alt="business_continuity_service_card_image" />
                    </div>
                    <h5>{item?.business_continuity_service_card_heading}</h5>
                      <ReadMore
                        className="readmore"
                        des={item?.business_continuity_service_card_description}
                      />
                  </div>
                  )
                })
              }
            </div>
          </Container>
        </section>
        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP/>
      </div>
    </>
  );
};

