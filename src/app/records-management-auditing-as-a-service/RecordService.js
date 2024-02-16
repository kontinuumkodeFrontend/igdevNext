'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CLIENT_STORIES, RECORDS_MANAGMENT_AUDITING_AS_A_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function RecordService(){
  const { data, isLoading } = useCustomGet(RECORDS_MANAGMENT_AUDITING_AS_A_SERVICES);

  const bannerContent = {
    title: data?.rm_heading,
    cardTitle:data?.rm_sub_heading,
    cardPara:data?.rm_banner_description,
    butnCtn1: data?.rm_banner_button_text,
    butnCtn1Link:data?.rm_banner_button_link,
    butnCtn2: "",
    butnCtn2Link: "",
  };

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.rm_background_image} />
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
              {data?.rmaaas_offers_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={'/images/recordImg3.png'} alt="recordImg3" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list">
                    <ul>
                      {
                        data?.rmaaas_offers_content_list?.map((item, i) => {
                          return(
                           <li key={i}>
                             <p>
                              {item?.rmaaas_offers_list_item}
                            </p>
                           </li>
                          )
                        })
                      }                      
                    </ul>
                  </div>
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
            <h2 className="sec-heading">
              {data?.out_source_records_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-chng-des ">
                <p>
                    {data?.out_source_records_description}
                </p>
                <div className="ltd-case-description mt-md-4 mt-3">
                  <p>{data?.out_source_records_list_heading}</p>
                  <div className="custom-list">
                    <ul>
                      {
                        data?.out_source_records_list?.map((item, i) => {
                          return(
                            <li key={i}>
                                <p>
                                  {
                                    item?.out_source_records_list_item
                                  }
                                </p>
                            </li>
                          )
                        })
                      }                                          
                    </ul>
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={'/images/recordImg1.png'} alt="recordImg1" />
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
                {data?.resilience_evidence_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0  img_design">
              <Link prefetch={true} href={`/clientstorydetail/${CLIENT_STORIES}/11241`}>
                <img  loading="lazy"  width="" height=""   src={data?.resilience_image} alt="resilience_image" />
              </Link>
              </div>
              <div className="cmpx-chng-des "
                dangerouslySetInnerHTML={{__html: data?.resilience_evidence_content}}
              >
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="" heading={data?.faq_heading} list={data?.faq_list}/>
       <div className="bg-light">
       <TestimonialV2 />
       </div>
        <SubmitRFP />
      </div>
    </>
  );
};
