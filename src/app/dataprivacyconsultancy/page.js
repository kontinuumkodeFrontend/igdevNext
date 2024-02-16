'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { DATA_PRIVACY_CONSULTANCY } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function DataPrivacyConsultancy() {
  const { data, isLoading } = useCustomGet(DATA_PRIVACY_CONSULTANCY);

  var bannerContent = {
    title: `<h1>${data?.data_privacy_banner_main_heading}</h1>`,
    cardTitle:data?.data_privacy_banner_heading,
    cardPara:data?.data_privacy_banner_content
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.data_privacy_banner_image} />
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
              {data?.data_privacy_choose_heading}
            </h2>
            <div className="complex-chng-des chng-des-md mb-0">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.data_privacy_choose_image} alt="data_privacy_choose_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.data_privacy_choose_content}}
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
            <h2 className="sec-heading">
              {data?.data_privacy_consultancy_heading}
            </h2>
            <div className="complex-chng-des reverse chng-des-md mb-0">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.data_privacy_consultancy_content}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.data_privacy_consultancy_image} alt="data_privacy_consultancy_image" />
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
                {data?.data_privacy_benifit_heading}
            </h2>
            <div className="complex-chng-des chng-des-md mb-0">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.data_privacy_benifit_image} alt="data_privacy_benifit_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.data_privacy_benifit_content}}
              >
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
              {data?.data_privacy_partner_heading}
            </h2>
            <div className="complex-chng-des reverse chng-des-md mb-0">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.data_privacy_partner_content}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.data_privacy_partner_image} alt="imdata_privacy_benifit_imageg" />
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
