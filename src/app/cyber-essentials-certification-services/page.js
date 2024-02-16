'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { CERTIFICATION_CYBER_ESSENTIALS_CERTIFICATION_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import Link from "next/link";
import SpeackAdvisor from "../Components/SpeackAdvisor";
import { CourseTable } from "../Features/coursePages/CourseTable";

export default function CyberEssenCertiService(){
  const { data, isLoading } = useCustomGet(CERTIFICATION_CYBER_ESSENTIALS_CERTIFICATION_SERVICES);

  var bannerContent = {
    title: `<h1>${data?.ccecs_banner_main_heading}</h1>`,
    cardTitle:data?.ccecs_banner_heading,
    cardPara:data?.ccecs_banner_content,
  };

  return (
    <>
     {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.ccecs_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="cyber-essen-certi-service">
        <section className="award-sec sec-padding">
          <Container>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des align-items-start">
                  <h2 className="sec-heading text-left">
                    {data?.ccecs_simplify_heading}
                  </h2>
                <div className="ltd-case-description">
                  <div dangerouslySetInnerHTML={{__html: data?.ccecs_simplify_content}}></div>
                </div>
              <SpeackAdvisor name={"Request a Proposal"} customClass="btn-design d-inline-block"/>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.ccecs_simplify_image} alt="ccecs_simplify_image" />
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
              {data?.ccecs_cyber_heading}
            </h2>
            <div className="cmpx-chng-des ">
              <div className="ltd-case-description mt-md-4 mt-3"
              dangerouslySetInnerHTML={{__html: data?.ccecs_cyber_content}}>               
              </div>
            </div>
          </Container>
        </section>
       {
        data?.card_repeater?.length > 0 && 
        data?.card_repeater?.map((item, i) => {
          return(
            <CourseTable data={item} bg={((i+1) % 2) === 0 && "bg-light"} key={i} sn={i} />
          )
        })
       }
        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
             {data?.ccecs_partner_heading}
            </h2>
            <p className="sub-heading">
              {data?.ccecs_partner_sub_heading}
              <Link href="/clientstory">
                <span>case studies</span>
              </Link>{" "}
              and client testimonials below to learn more):
            </p>
            {
              data?.ccecs_partner_cards?.map((item, i) => {
               if(i % 2 === 0){
                return(
                  <div className="complex-chng-des loop reverse" key={i}>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description custom-list"
                  dangerouslySetInnerHTML={{__html: item?.ccecs_partner_card_content}}
                >
                </div>
              </div>
              <div className="cmpx-img-card img_design mt-0">
                <img  loading="lazy"  width="" height=""   src={item?.ccecs_partner_card_image} alt="ccecs_partner_card_image" />
              </div>
            </div>
                )
               }else{
                return(
                  <div className="complex-chng-des loop" key={i}>
                    <div className="cmpx-img-card img_design mt-0">
                <img  loading="lazy"  width="" height=""   src={item?.ccecs_partner_card_image} alt="ccecs_partner_card_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description custom-list mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: item?.ccecs_partner_card_content}}
                >
                </div>
              </div>
              
            </div>
                )
               }
              })
            }
          </Container>
        </section>

        <TestimonialV2 />

        <section className="faq-section mt-5 sec-padding">
          <Container>
            <div className="faq-head">
              <h2 className="sec-heading">Frequently asked questions</h2>
            </div>
            <div className="faq-accordian">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                     {data?.ccecs_faq_tab1}
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description custom-list"
                         dangerouslySetInnerHTML={{__html: data?.ccecs_faq_tab1_content}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      {data?.ccecs_faq_tab2}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                      <div className="ltd-case-description custom-list"
                         dangerouslySetInnerHTML={{__html: data?.ccecs_faq_tab1_content}}>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      {data?.ccecs_faq_tab3}
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <p>
                            The IASME Consortium (IASME) is the Cyber Essentials
                            accrediting body that manages the Cyber Cyber
                            Essentials Certification process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <SubmitRFP />
      </div>
    </>
  );
};

