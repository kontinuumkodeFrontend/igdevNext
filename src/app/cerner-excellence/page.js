'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CERNER_EXCELLENCE } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function CernerExcellence() {
  const { data, isLoading } = useCustomGet(CERNER_EXCELLENCE);

  var bannerContent = {
    title: `<h1>${data?.banner_main_heading}</h1>`,
    cardTitle:data?.banner_heading,
    cardPara:data?.banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.banner_image} />
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
            {data?.content_box?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    {item?.cb_heading && (
                      <h2 className="sec-heading">{item?.cb_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cb_image} alt="cb_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cb_content,
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
                    {item?.cb_heading && (
                      <h2 className="sec-heading">{item?.cb_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cb_content,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cb_image} alt="cb_image" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Container>
        </section>


        <section className="sec-padding">
        <div className="container">
        <h2 className="sec-heading">Meet the service lead</h2>
          <div className="complex-chng-des chng-des-md content_card">
            <div className="cmpx-img-card simple_Img team-img">
              <img  loading="lazy"  width="" height=""   src={data?.sl_image} className="img-fluid" alt="sl_image" />
            </div>
            <div className="cmpx-chng-des">
              <div
                className="ltd-case-description custom-list"
                style={{ gap: 0 }}
              >
                <h3>{data?.sl_heading}</h3>
                <div className="ct_card_name mt-2">
                MSc, MBA
                </div>
                <div className="team-designation">
                {data?.sl_heading_copy}
                </div>
               <div dangerouslySetInnerHTML={{__html: data?.sl_content}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
        

      <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            {data?.service_lead_repeater?.length > 0 && data?.service_lead_repeater?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    {item?.service_lead_detail_heading && (
                      <h2 className="sec-heading">{item?.service_lead_detail_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.service_lead_detail_image} alt="service_lead_detail_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.service_lead_detail_content,
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
                    {item?.service_lead_detail_heading && (
                      <h2 className="sec-heading">{item?.service_lead_detail_heading}</h2>
                    )}
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.service_lead_detail_content,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.service_lead_detail_image} alt="service_lead_detail_image" />
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
