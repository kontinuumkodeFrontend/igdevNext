'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import {
  CLIENT_STORIES,
  CYBER_SECURITY_CONSULTANCY_SERVICES,
} from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";

export default function CyberSecConService() {
  const { data, isLoading } = useCustomGet(CYBER_SECURITY_CONSULTANCY_SERVICES);

  var bannerContent = {
    title: data?.cscs_banner_heading,
    cardTitle: data?.cscs_banner_sub_heading,
    cardPara: data?.cscs_banner_description,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.cscs_banner_background_image}
      />
      <div className="internal-service-page" id="cyber-sec-con-service">
        {/* Brand Logos */}
        <ServiceSlider images={data?.cscs_brand_logo_list} />

        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">{data?.cscs_consultants_heading}</h2>
            <div className="eql_spc">
              {data?.cscs_consultants_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="complex-chng-des reverse" key={i}>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.cscs_consultants_content_heading}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.cscs_consultants_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.cscs_consultants_content_image}
                          alt="cscs_consultants_content_image"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.cscs_consultants_content_image}
                          alt="cscs_consultants_content_image1"
                        />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.cscs_consultants_content_heading}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html:
                                item?.cscs_consultants_content_description,
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

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="max_ctnt mb-5">
              <h2 className="sec-heading">{data?.cscs_why_leading_heading}</h2>
              <p className="sub-heading">
                {data?.cscs_why_leading_description}
              </p>
            </div>

            <div className="eql_spc">
              {data?.cscs_why_leading_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div className="complex-chng-des reverse" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.cscs_why_leading_content_image}
                          alt="cscs_why_leading_content_image3"
                        />
                      </div>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.cscs_why_leading_content_heading}</h3>
                          <div className="custom-list">
                            <ul>
                              <li>
                                <p>
                                  {item?.cscs_why_leading_content_description}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.cscs_why_leading_content_heading}</h3>
                          <div className="custom-list">
                            <ul>
                              <li>
                                <p>
                                  {item?.cscs_why_leading_content_description}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.cscs_why_leading_content_image}
                          alt="cscs_why_leading_content_image4"
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        <section className="award-sec sec-padding-top">
          <Container>
            <h2 className="sec-heading">{data?.cscs_pragmatic_heading}</h2>
            <div className="complex-chng-des">
              <div className="cmpx-chng-des">
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.cscs_pragmatic__description,
                  }}
                ></div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.cscs_pragmatic_image} alt="cscs_pragmatic_image5" />
              </div>
            </div>
          </Container>
        </section>

        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">{data?.cscs_qualified_heading}</h2>

            <div className="eql_spc">
              {data?.cscs_qualified_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  if (data?.cscs_qualified_content_box?.length === i + 1) {
                    return (
                      <div className="complex-chng-des reverse" key={i}>
                        <div className="cmpx-img-card img_design">
                          <Link
                            href={`/clientstorydetail/${CLIENT_STORIES}/11300`}
                          >
                            <img  loading="lazy"  width="" height=""  
                              src={item?.cscs_qualified_content_image}
                              alt="cscs_qualified_content_image6"
                            />
                          </Link>
                        </div>
                        <div className="cmpx-chng-des">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <h3>{item?.cscs_qualified_content_heading}</h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  item?.cscs_qualified_content_description,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className="complex-chng-des" key={i}>
                        <div className="cmpx-img-card img_design">
                          <img  loading="lazy"  width="" height=""  
                            src={item?.cscs_qualified_content_image}
                            alt="cscs_qualified_content_image7"
                          />
                        </div>
                        <div className="cmpx-chng-des">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <h3>{item?.cscs_qualified_content_heading}</h3>
                            <div
                              dangerouslySetInnerHTML={{
                                __html:
                                  item?.cscs_qualified_content_description,
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                } else {
                  return (
                    <div className="complex-chng-des" key={i}>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.cscs_qualified_content_heading}</h3>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: item?.cscs_qualified_content_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.cscs_qualified_content_image}
                          alt="cscs_qualified_content_image8"
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </Container>
        </section>

        <TestimonialV2 customClass="pb-0" />

        <SubmitRFP />
      </div>
    </>
  );
};
