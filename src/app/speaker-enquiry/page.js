'use client'
import React from "react";
import { Container } from "react-bootstrap";
import { SPEAKER_ENQUIRY } from "../services/Url";
import { 
  useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import SubmitRFP from "../Components/SubmitRFP";
import Banner from "../Components/Banner";

export default function SpeakerEnquiry(){
  const { data, isLoading } = useCustomGet(SPEAKER_ENQUIRY);

  var bannerContent = {
    title: ``,
    cardTitle:data?.se_banner_heading,
    cardPara: data?.se_banner_content,
  };


  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.se_banner_image} />
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding pt-sm-5 pt-0"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.se_content_card?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    {item?.se_content_card_heading && (
                      <h2 className="sec-heading">{item?.se_content_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.se_content_card_image} alt="se_content_card_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.se_content_card_content,
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
                    {item?.se_content_card_heading && (
                      <h2 className="sec-heading">{item?.se_content_card_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md reverse">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.se_content_card_content,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.se_content_card_image} alt="se_content_card_image1" />
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
