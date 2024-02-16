'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { GDPR_DATA_MAPPING_AND_INVENTORY } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function GDPRDataMappingAndInventory() {
  const { data, isLoading } = useCustomGet(GDPR_DATA_MAPPING_AND_INVENTORY);

  var bannerContent = {
    title: `<h1>${data?.gdmi_banner_heading}</h1>`,
    cardTitle:data?.gdmi_banner_sub_heading,
    cardPara:data?.gdmi_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.gdmi_banner_image} />
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
              {data?.gdmi_why_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdmi_why_image} alt="gdmi_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.gdmi_why_content}}
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
              {data?.gdmi_our_heading}
            </h2>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.gdmi_our_content}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdmi_our_image} alt="gdmi_our_image" />
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
                {data?.gdmi_regulations_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdmi_regulations_image} alt="gdmi_regulations_image" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.gdmi_regulations_content}}
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
              {data?.gdmi_unlock_heading}
            </h2>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.gdmi_unlock_content}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdmi_unlock_image} alt="gdmi_unlock_image" />
              </div>
            </div>
          </Container>
        </section>
        
       <div className="bg-light">
       <TestimonialV2 />
       </div>
       <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container className="text-center">
            <h2 className="sec-heading">
              {data?.gdmi_contact_heading}
            </h2>
            <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.gdmi_contact_content}}
              ></div>
            </Container>
        </section>
        <SubmitRFP />
      </div>
    </>
  );
};
