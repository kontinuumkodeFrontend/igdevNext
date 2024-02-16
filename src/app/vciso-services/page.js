'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { useCustomGet } from "../services/Service";
import { VCISO_SERVICES } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";

export default function Vciso(){
  const { data, isLoading } = useCustomGet(VCISO_SERVICES);
  const bannerContent = {
    title: data?.vciso_banner_heading,
    cardTitle: data?.rm_sub_heading,
    cardPara: data?.vciso_banner_description,
  }


  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.vciso_banner_background_image}
      />
      <div className="internal-service-page" id="vciso-service">
        <ServiceSlider />

        {/* VCISO Service Section */}
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.vciso_services_heading}</h2>
            <div className="eql_spc">
              {data?.vciso_services_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="complex-chng-des " key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.vciso_services_content_image} alt="vciso_services_content_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>
                            {item?.vciso_services_content_heading}
                          </h3>
                          <div dangerouslySetInnerHTML={{__html:item?.vciso_services_content_description}}></div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des reverse" key={i}>
                     <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>
                            {item?.vciso_services_content_heading}
                          </h3>
                          <div dangerouslySetInnerHTML={{__html:item?.vciso_services_content_description}}></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.vciso_services_content_image} alt="vciso_services_content_image2" />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        {/* Flexible Section */}
        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
             {data?.vciso_flexible_heading}
            </h2>
            <div dangerouslySetInnerHTML={{__html: data?.vciso_flexible_description}}></div>
          </Container>
        </section>
        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

