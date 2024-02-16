'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { CLIENT_STORIES, INFORMATION_GOVERNANCE_CONSULTANCY_SERVICES } from "../services/Url";
import Link from "next/link";

export default function InfoGovConService(){
  const { data, isLoading } = useCustomGet(INFORMATION_GOVERNANCE_CONSULTANCY_SERVICES);

  var bannerContent = {
    title: `<h1>${data?.igcs_banner_main_heading}</h1>`,
    cardTitle: data?.igcs_banner_heading,
    cardPara: data?.igcs_banner_description,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerClass="fade-none"
        bannerCnt={bannerContent}
        banImg={data?.igcs_banner_background_image}
      />
      <div className="internal-service-page" id="info-gov-con-service">
        <div className="bg-light">
        <ServiceSlider />
        </div>

        {data?.igcs_content_box_wpr?.map((item, i) => {
          if (i % 2 === 0) {
            return (
              <section
                className="award-sec sec-padding-top"
                style={{ backgroundColor: "#fff" }}
                key={i}
              >
                <Container>
                  <h2 className="sec-heading">
                    {item?.igcs_content_box_heading}
                  </h2>
                  <div className="complex-chng-des chng-des-md reverse">
                    <div className="cmpx-chng-des ">
                      <div
                        className="ltd-case-description mt-md-4 mt-3"
                        dangerouslySetInnerHTML={{
                          __html: item?.igcs_content_box_description,
                        }}
                      ></div>
                    </div>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.igcs_content_box_image} alt="igcs_content_box_image" />
                    </div>
                  </div>
                </Container>
              </section>
            );
          } else {
            return (
              <section
                className="award-sec sec-padding-top "
                style={{ backgroundColor: "#fff" }}
                key={i}
              >
                <Container>
                  <h2 className="sec-heading">
                    {item?.igcs_content_box_heading}
                  </h2>
                  <div className="complex-chng-des chng-des-md">
                    <div className="cmpx-img-card img_design">
                     {data?.igcs_content_box_wpr?.length === i+1 ?
                      <Link href={`/clientstorydetail/${CLIENT_STORIES}/8990`}>
                         <img  loading="lazy"  width="" height=""   src={item?.igcs_content_box_image} alt="igcs_content_box_image" />
                      </Link>:
                       <img  loading="lazy"  width="" height=""   src={item?.igcs_content_box_image} alt="igcs_content_box_1image" />
                     }
                    </div>
                    <div className="cmpx-chng-des ">
                      <div
                        className="ltd-case-description mt-md-4 mt-3"
                        dangerouslySetInnerHTML={{
                          __html: item?.igcs_content_box_description,
                        }}
                      ></div>
                    </div>
                  </div>
                </Container>
              </section>
            );
          }
        })}

        <TestimonialV2 />
        <SubmitRFP />
      </div>
    </>
  );
};
