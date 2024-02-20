'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { ENTERPRISE_RISK_MANAGMENT_CONSULTANCY } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function EnterpriseRiskManagementConsultancy() {
  const { data, isLoading } = useCustomGet(ENTERPRISE_RISK_MANAGMENT_CONSULTANCY);

  var bannerContent = {
    title: `<h1>${data?.ermc_banner_main_heading}</h1>`,
    cardTitle:data?.ermc_banner_heading,
    cardPara:data?.ermc_banner_content
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.ermc_banner_image} />
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
              {data?.ermc_choose_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ermc_choose_image} alt="ermc_choose_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.ermc_choose_content}}
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
              {data?.ermc_consultancy_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.ermc_consultancy_content}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ermc_consultancy_image} alt="ermc_consultancy_image" />
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
                {data?.ermc_benifit_heading}
            </h2>
            <div className="complex-chng-des chng-des-md ">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ermc_benifit_image} alt="ermc_benifit_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.ermc_benifit_content}}
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
              {data?.ermc_partner_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.ermc_partner_content}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ermc_partner_image} alt="ermc_partner_image" />
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
