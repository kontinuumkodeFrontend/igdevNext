'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { EXCUTIVE_RESOURCING } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

const ExecutiveResourcing = () => {
  const { data, isLoading } = useCustomGet(EXCUTIVE_RESOURCING);

  var bannerContent = {
    title:`<h1>${data?.banner_main_heading}</h1>`,
    cardTitle:data?.banner_heading,
    cardPara:data?.banner_content,
  }


  return (
    <>
     {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="cso-service">

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.banner_image} alt="banner_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description custom-list">
                  <h3>{data?.why_ig_smart_heading}</h3>
                  <div dangerouslySetInnerHTML={{__html:data?.why_ig_smart_content}}></div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md">
              
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description custom-list">
                  <h3>{data?.your_path_heading}</h3>
                  <div dangerouslySetInnerHTML={{__html:data?.your_path_content}}></div>
                </div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.your_path_image} alt="your_path_image" />
              </div>
            </div>
          </Container>
        </section>


        <section
          className="award-sec sec-padding-bottom "
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md ">
            <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.partner_image} alt="partner_image" />
              </div>
              <div className="cmpx-chng-des mrg-comp">
                <div className="ltd-case-description custom-list">
                  <h3>{data?.partner_heading}</h3>
                  <div dangerouslySetInnerHTML={{__html:data?.partner_content}}></div>
                </div>
              </div>
              
            </div>
          </Container>
        </section>

        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

export default ExecutiveResourcing;
