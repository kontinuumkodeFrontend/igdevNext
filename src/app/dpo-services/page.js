'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { DPO_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { FeatureTable } from "../Features/coursePages/FeatureTable";

export default function DpoService() {
  const { data, isLoading } = useCustomGet(DPO_SERVICES);

  var bannerContent = {
    title: data?.dpo_banner_heading,
    cardTitle: data?.dpo_banner_sub_heading,
    cardPara: data?.dpo_banner_description,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      {/* BannerSection */}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.dpo_banner_background_image}
      />

      <div className="internal-service-page" id="dpo-service">
        {/* Brand Logo Slider */}
        <ServiceSlider />

        {/* DPO SERVICES Section */}
        <section
          className="award-sec dpo-service-sec"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.dpo_services_heading}</h2>
            <div className="eql_spc sec-padding-bottom">
              {data?.dpo_services_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="complex-chng-des reverse" key={i}>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.dpo_services_content_heading}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.dpo_services_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.dpo_services_content_image} alt="dpo_services_content_image" />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.dpo_services_content_image} alt="dpo_services_content_image2" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.dpo_services_content_heading}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.dpo_services_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        {/* Why choose Section */}
        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">{data?.why_choose_heading}</h2>

            <div className="eql_spc">
              {data?.why_choose_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div
                      className="complex-chng-des reverse chng-des-md"
                      key={i}
                    >
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.why_choose_content_heading}</h3>
                          <div
                            className="par_gap"
                            dangerouslySetInnerHTML={{
                              __html: item?.why_choose_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      {item?.why_choose_content_image}
                      <div className="cmpx-img-card">
                        <img  loading="lazy"  width="" height=""   src={item?.why_choose_content_image} alt="why_choose_content_image 123" />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-img-card">
                        <img  loading="lazy"  width="" height=""   src={item?.why_choose_content_image} alt="why_choose_content_image2" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.why_choose_content_heading}</h3>
                          <div
                            className="par_gap"
                            dangerouslySetInnerHTML={{
                              __html: item?.why_choose_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        <section className="award-sec sec-padding-bottom">
          <Container>
            <h2 className="sec-heading mb-md-5">
              {data?.key_features_heading}
            </h2>

            <div className="eql_spc">
              {data?.key_features_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div
                      className="complex-chng-des chng-des-md reverse"
                      key={i}
                    >
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.key_features_content_heading}</h3>
                          <div className="custom-list">
                            <ul>
                              {item?.key_features_content_description?.map(
                                (list, index) => {
                                  return (
                                    <li key={index}>
                                      <p>
                                        {list?.key_features_content_list_item}
                                      </p>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.key_features_content_image} alt="key_features_content_image" />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des chng-des-md" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.key_features_content_image} alt="key_features_content_image3" />
                      </div>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.key_features_content_heading}</h3>
                          <div className="custom-list">
                            <ul>
                              {item?.key_features_content_description?.map(
                                (list, index) => {
                                  return (
                                    <li key={index}>
                                      <p>
                                        {list?.key_features_content_list_item}
                                      </p>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        {/* How Much Section */}
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.service_cost_heading}</h2>
            <div className="eql_spc">
              {data?.service_cost_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="complex-chng-des chng-des-md" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.service_cost_content_image} alt="service_cost_content_image77" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.service_cost_content_heading}</h3>
                          <div
                            className="par_gap"
                            dangerouslySetInnerHTML={{
                              __html: item?.service_cost_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.service_cost_content_heading}</h3>
                          <div
                            className="par_gap"
                            dangerouslySetInnerHTML={{
                              __html: item?.service_cost_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.service_cost_content_image} alt="service_cost_content_image778" />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        {/* {
        data?.feature_tables?.length > 0 && 
        data?.feature_tables?.map((item, i) => {
          return(
            <FeatureTable data={item} bg={((i+1) % 2) != 0 && "bg-light"} key={i} sn={i} />
          )
        })
       } */}

        {/* Testimonial Section */}
          <TestimonialV2 />
        {/* Get In Touch Section */}
        <div className="bg-light">
        <SubmitRFP />
        </div>
      </div>
    </>
  );
};

