'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CLINICAL_GOVERNANCE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function ClinicalGovernance() {
  const { data, isLoading } = useCustomGet(CLINICAL_GOVERNANCE);

  const bannerContent = {
    title: `<h1>${data?.clinical_governance_banner_heading}</h1>`,
    cardTitle: data?.clinical_governance_banner_sub_heading,
    cardPara: data?.clinical_governance_banner_decription,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.clinical_governance_banner_background_image}
      />
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
              {data?.clinical_governance_why_choose_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""  
                  src={data?.clinical_governance_why_choose_image}
                  alt="clinical_governance_why_choose_image"
                />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.clinical_governance_why_choose,
                    }}
                  ></div>
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
            <h2 className="sec-heading mb-0">
              {data?.clinical_governance_our_clinic_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-chng-des ">
                <p>{data?.out_source_records_description}</p>
                <div className="ltd-case-description mt-md-4 mt-3">
                  <p>{data?.out_source_records_list_heading}</p>
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.clinical_governance_our_clinic_description,
                    }}
                  ></div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""  
                  src={data?.clinical_governance_our_clinic_image}
                  alt="clinical_governance_why_choose"
                />
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
              {data?.clinical_governance_benifits_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.clinical_governance_benifits_image} alt="clinical_governance_benifits_image" />
              </div>
              <div
                className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{
                  __html: data?.clinical_governance_benifits_description,
                }}
              ></div>
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.clinical_governance_partner_heading}
            </h2>
            <div className="complex-chng-des">
              <div
                className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{
                  __html: data?.clinical_governance_partner_decription,
                }}
              ></div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.clinical_governance_partner_image} alt="clinical_governance_partner_image" />
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
