'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { CLIMATE_CHANGE_AND_ENVIORMENT } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import SubmitRFP from "../Components/SubmitRFP";
import Banner from "../Components/Banner";

const ClimateChangeAndEnviorment = () => {
  const { data, isLoading } = useCustomGet(CLIMATE_CHANGE_AND_ENVIORMENT);

  var bannerContent = {
    title: `<h1>${data?.cce_banner_main_heading}</h1>`,
    cardTitle:data?.cce_banner_heading,
    cardPara: data?.cce_banner_content,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.cce_banner_image} />
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.cce_cards?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    {item?.cce_card_heading && (
                      <h2 className="sec-heading">{item?.cce_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cce_card_image} alt="cce_card_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cce_card_content,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={i}  className="mt-5">
                    {item?.cce_card_heading && (
                      <h2 className="sec-heading">{item?.cce_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md reverse">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cce_card_content,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cce_card_image} alt="cce_card_image" />
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
export default ClimateChangeAndEnviorment;
