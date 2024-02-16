'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { LEGAL_AND_COMPLIANCE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";

export default function LegalandCompliance(){
  const { data, isLoading } = useCustomGet(LEGAL_AND_COMPLIANCE);
  var bannerContent = {
    title: ``,
    cardTitle: data?.lac_banner_heading,
    cardPara: data?.lac_banner_content,
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.lac_banner_image} />
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.lac_section_repeater?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <React.Fragment key={i}>
                    {item?.lac_section_heading && (
                      <h2 className="sec-heading">
                        {item?.lac_section_heading}
                      </h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <Link href="/privacypolicy">
                          <img  loading="lazy"  width="" height=""   src={item?.lac_section_image} alt="lac_section_image" />
                        </Link>
                      </div>
                      <div className="cmpx-chng-des ">
                        <Link href="/privacypolicy">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <div
                              className="custom-list"
                              dangerouslySetInnerHTML={{
                                __html: item?.lac_section_content,
                              }}
                            ></div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={i}>
                    {item?.lac_section_heading && (
                      <h2 className="sec-heading">
                        {item?.lac_section_heading}
                      </h2>
                    )}
                    <div className="complex-chng-des chng-des-md reverse mt-5">
                      <div className="cmpx-chng-des ">
                        <Link href="/privacypolicy">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <div
                              className="custom-list"
                              dangerouslySetInnerHTML={{
                                __html: item?.lac_section_content,
                              }}
                            ></div>
                          </div>
                        </Link>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <Link href="/privacypolicy">
                          <img  loading="lazy"  width="" height=""   src={item?.lac_section_image} alt="lac_section_imageimg" />
                        </Link>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            })}
          </Container>
        </section>

        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.lac_tc_repeater?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <React.Fragment key={i}>
                    {item?.lac_tc_heading && (
                      <h2 className="sec-heading">{item?.lac_tc_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <Link href="/term-and-condition">
                          <img  loading="lazy"  width="" height=""   src={item?.lac_tc_image} alt="lac_tc_image2img" />
                        </Link>
                      </div>
                      <div className="cmpx-chng-des ">
                        <Link href="/term-and-condition">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <div
                              className="custom-list"
                              dangerouslySetInnerHTML={{
                                __html: item?.lac_tc_content,
                              }}
                            ></div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment key={i}>
                    {item?.lac_tc_heading && (
                      <h2 className="sec-heading">{item?.lac_tc_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md reverse mt-5">
                      <div className="cmpx-chng-des ">
                        <Link href="/term-and-condition">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <div
                              className="custom-list"
                              dangerouslySetInnerHTML={{
                                __html: item?.lac_tc_content,
                              }}
                            ></div>
                          </div>
                        </Link>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <Link href="/term-and-condition">
                          <img  loading="lazy"  width="" height=""   src={item?.lac_tc_image} alt="lac_tc_image3img" />
                        </Link>
                      </div>
                    </div>
                  </React.Fragment>
                );
              }
            })}
          </Container>
        </section>

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.lac_imp_heading && (
              <h2 className="sec-heading">{data?.lac_imp_heading}</h2>
            )}
            <div className="complex-chng-des chng-des-md ">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.lac_imp_image} alt="lac_tc_image4img" />
              </div>
              <div
                className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{ __html: data?.lac_imp_content }}
              ></div>
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
