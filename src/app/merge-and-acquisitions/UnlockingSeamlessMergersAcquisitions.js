'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { MERGE_AND_ACQUISITION } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import SubmitRFP from "../Components/SubmitRFP";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";

const UnlockingSeamlessMergersAcquisitions = () => {
  const { data, isLoading } = useCustomGet(MERGE_AND_ACQUISITION);

  var bannerContent = {
    title: `<h1>${data?.usma_banner_main_heading}</h1>`,
    cardTitle:data?.usma_banner_heading,
    cardPara: data?.usma_banner_content,
  }

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.usma_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.usma_cards?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className={i === 0 ? "" : "mt-5"}>
                    {item?.usma_card_heading && (
                      <h2 className="sec-heading">{item?.usma_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.usma_card_image} alt="usma_card_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.usma_card_content,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i} className={i === 0 ? "" : "mt-5"}>
                    {item?.usma_card_heading && (
                      <h2 className="sec-heading">{item?.usma_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md reverse">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.usma_card_content,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.usma_card_image} alt="usma_card_image" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
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
export default UnlockingSeamlessMergersAcquisitions;
