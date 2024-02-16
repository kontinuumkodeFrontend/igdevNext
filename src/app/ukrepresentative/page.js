'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { UK_REPRESENTATIVE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";

export default function UKRepresentative(){
  const { data, isLoading } = useCustomGet(UK_REPRESENTATIVE);

  var bannerContent = {
    title: `<h1>${data?.ukr_banner_main_heading}</h1>`,
    cardTitle:data?.ukr_banner_heading,
    cardPara:data?.ukr_banner_description,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.ukr_banner_image} />
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
                {data?.ukr_choose_heading}
            </h2>
            
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html: data?.ukr_choose_description}}
              >
              </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.ukr_our_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.ukr_our_description}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ukr_our_image} alt="ukr_our_image" />
              </div>
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.ukr_protection_heading}
            </h2>
            <div className="complex-chng-des">
            <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ukr_protection_image} alt="ukr_protection_image1" />
              </div>
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.ukr_protection_description}}
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
