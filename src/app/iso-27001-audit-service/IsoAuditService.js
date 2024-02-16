'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CLIENT_STORIES, ISO_27001_AUDIT_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function IsoAuditService(){
  const { data, isLoading } = useCustomGet(ISO_27001_AUDIT_SERVICES);

  var bannerContent = {
    title: data?.iso_banner_heading,
    cardTitle:data?.cyber_banner_sub_heading,
    cardPara:data?.iso_banner_description,
    butnCtn1: data?.iso_banner_button_text,
    butnCtn1Link:data?.iso_banner_button_link,
    butnCtn2: "",
    butnCtn2Link: "",
  };

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.iso_banner_background_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="isoAudit-service">
       
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.iso_certification_heading}
            </h2>
            <div className="complex-chng-des mb-0">
              <div className="cmpx-img-card">
                <img  loading="lazy"  width="" height=""   src={data?.iso_certification_image} alt="iso_certification_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <h3>{data?.iso_certification_sub_heading_1}</h3>
                  <div
                    dangerouslySetInnerHTML={{__html: data?.iso_certification_content_1}}
                  >
                  </div>
                  <h3>
                    {data?.iso_certification_sub_heading_2}
                  </h3>
                  <div
                    dangerouslySetInnerHTML={{__html: data?.iso_certification_content_2}}
                  >
                  </div>
                </div>
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
             {data?.iso_audit_service_heading_}
            </h2>
            <div className="complex-chng-des mb-0">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.iso_audit_service_content}}
                >                 
                </div>
              </div>
              <div className="cmpx-img-card">
                <img  loading="lazy"  width="" height=""   src={data?.iso_audit_service_image} alt="iso_audit_service_image12" />
              </div>
            </div>
          </Container>
        </section>
        <section className="award-sec sec-padding-top">
          <Container>
            <h2 className="sec-heading">
              {data?.iso_isms_heading}
            </h2>
            <div className="complex-chng-des mb-0">
              <div className="cmpx-img-card">
                <img  loading="lazy"  width="" height=""   src={data?.iso_isms_support_image} alt="iso_isms1_support_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.iso_isms_support_content}}
                >                 
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
              {data?.iso_cost_heading}
            </h2>
            <div className="complex-chng-des mb-0">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.iso_cost_description}}
                >
                </div>
              </div>
              <div className="cmpx-img-card img_design">
              <Link prefetch={true} href={`/clientstorydetail/${CLIENT_STORIES}/11329`}>
                <img  loading="lazy"  width="" height=""   src={data?.iso_cost__image} alt="iso_cost__image" />
                </Link>
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="" heading={data?.faq_heading} list={data?.faq_list}/>
        <div className="bg-light">
          <TestimonialV2/>
        </div>
          <SubmitRFP/>
      </div>
    </>
  );
};

