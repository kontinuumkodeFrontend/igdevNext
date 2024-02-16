'use client'
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import SubmitRFP from "../Components/SubmitRFP";
import { GDPR_AUDITORS_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";
import FAQDynamic from "../Components/FAQDynamic";

export default function GdprAudit(){
  const { data, isLoading } = useCustomGet(GDPR_AUDITORS_SERVICES);
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  var bannerContent = {
    title: data?.gdpr_banner_heading,
    cardTitle: data?.gdpr_banner_sub_heading,
    cardPara: data?.gdpr_banner_text,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.gdpr_banner_background_image}
      />
      <div className="internal-service-page" id="gdpr-service">
        <div className="bg-light">
          <ServiceSlider />
        </div>
        <section className="award-sec gdpr-des sec-padding-top">
          <Container>
            <div className="complex-chng-des mb-0">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdpr_about_image} alt="gdpr_about_image" />
              </div>
              <div
                className="cmpx-chng-des"
                dangerouslySetInnerHTML={{
                  __html: data?.gdpr_about_description,
                }}
              ></div>
            </div>
          </Container>
        </section>
        <section className="indi-service-sec sec-padding">
          <Container>
            <h2 className="sec-heading">{data?.gdpr_service_work_heading}</h2>
            <div className="indi-service-cards">
              {data?.gdpr_service_work_cards?.map((item, i) => {
                return (
                  <div className="indi-service-card" key={i}>
                    <div className="gdpr-card-no">
                      <h2>0{i + 1}</h2>
                    </div>
                    <div className="gdpr-icon">
                      <img  loading="lazy"  width="" height=""   src={item?.gdpr_service_card_image} alt="gdpr_service_card_image" />
                    </div>
                    {isReadMore
                      ? item?.gdpr_service_card_heading.slice(0, 40)
                      : item?.gdpr_service_card_heading}

                    <h6 onClick={toggleReadMore} className="mt-3">
                      Read More
                      <img  loading="lazy"  width="" height=""   alt="arrow" src={'/images/ArrowRight.svg'} />
                    </h6>
                  </div>
                );
              })}
            </div>
            <div
              className="sub-heading sec-padding-top"
              dangerouslySetInnerHTML={{
                __html: data?.gdpr_service_work_description,
              }}
            ></div>
          </Container>
        </section>
        <FAQDynamic
          bg={"#fff"}
          padding="bottom"
          heading={data?.faq_heading}
          list={data?.faq_list}
        />
        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <section className="indi-service-sec sec-padding-top">
          <Container>
            <h2 className="sec-heading">
              Request Your GDPR Audit Services Proposal
            </h2>
            <p className="sub-heading">
              <Link prefetch={true} href="/contact">
                <span>Contact us</span>
              </Link>{" "}
              to request your GDPR audit services Proposal. Our GDPR auditors
              will listen carefully to what your organisations requirements are,
              and then clearly articulate what IG-Smart Ltd will do to enable
              your organisation to achieve its audit objectives.
            </p>
          </Container>
        </section>
        <SubmitRFP />
      </div>
    </>
  );
};

