'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { EU_REPRESENTATIVE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";

export default function EURepresentative(){
  const { data, isLoading } = useCustomGet(EU_REPRESENTATIVE);

  var bannerContent = {
    title: `<h1>${data?.eu_banner_main_heading}</h1>`,
    cardTitle:data?.eu_banner_heading,
    cardPara:data?.eu_banner_description,
    butnCtn1: '',
    butnCtn1Link:'',
    butnCtn2: "",
    butnCtn2Link: ""
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.eu_banner_image} />
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.eu_choose_heading}
            </h2>
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.eu_choose_description}}
                  >                   
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
                {data?.eu_our_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.eu_our_image} alt="eu_our_image" />
              </div>
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html: data?.eu_our_description}}
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
              {data?.eu_protection_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.eu_protection_description}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.eu_protection_image} alt="eu_protection_image" />
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
