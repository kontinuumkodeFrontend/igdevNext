'use client'
import React from "react";
import { Container } from "react-bootstrap";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { useCustomGet } from "../services/Service";
import { CLIENT_STORIES, NHS_INFORMATION_GOVERNANCE_CONSULTANCY } from "../services/Url";
import InnerBanner from "../Components/InnerBanner";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";

export default function NhsInformationGovernanceConsultancy(){
  const { data:pageData, isLoading } = useCustomGet(NHS_INFORMATION_GOVERNANCE_CONSULTANCY);

  var bannerContent = {
    cardTitle: pageData?.nhs_igc_banner_heading,
    cardPara:'',
  };
  
  return (
    <>
      { 
        isLoading ? 
        <Loader /> :''
      }
      <InnerBanner bannerCnt={bannerContent} banImg={pageData?.nhs_igc_banner_background_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="gdpr-service">
        {/* NHS Section */}
        <section className="award-sec sec-padding gdpr-des">
            <Container>
            <div className="complex-chng-des chng-des-md">
                <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={pageData?.nhs_igc_sec_image} alt="nhs_igc_sec_image" />
                </div>
                <div
                className="mpx-chng-des"                
                >
                <h2 className="sec-heading text-start mb-0">
                  {pageData?.nhs_igc_sec_heading}
                </h2>         
                <div dangerouslySetInnerHTML={{__html:pageData?.nhs_igc_sec_content}}> 
                  </div>       
                </div>
            </div>
            </Container>
        </section>

        {/* Toolkit Section */}
        <section
          className="award-sec "
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
               {pageData?.nhs_igc_toolkit_heading}
            </h2>
            <div className="cmpx-chng-des ">
              <div className="ltd-case-description"
                 dangerouslySetInnerHTML={{__html:pageData?.nhs_igc_toolkit_description}}>                
              </div>
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding-bottom mt-3"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des">
                <div className="ltd-case-description">
                  <div className="custom-list mt-2"
                    dangerouslySetInnerHTML={{__html: pageData?.nhs_igc_toolkit_list}}
                  >
                  </div>
                </div>
              </div>
              <div className="cmpx-chng-des">
                <div className="cmpx-img-card img_design">
                   <img  loading="lazy"  width="" height=""   src={pageData?.nhs_igc_toolkit_image} alt="nhs_igc_toolkit_image2" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Right Section */}
        <section
          className="award-sec sec-padding"
         >
          <Container>
            <h2 className="sec-heading">
              {pageData?.nhs_igc_right__sec_heading}
            </h2>
            <div className="cmpx-chng-des ">
              <div className="ltd-case-description"
              dangerouslySetInnerHTML={{__html: pageData?.nhs_igc_right__sec_content}}>               
              </div>
            </div>

            {
              pageData?.nhs_igc_challenge_sec_card?.map((item, i) => {
                
                  if(i % 2 === 0 ){
                    return(
                      <div className="complex-chng-des chng-des-md  mt-md-5 mt-3" key={i}>
                        <div className="cmpx-chng-des">
                        <div className="cmpx-img-card img_design">
                          <img  loading="lazy"  width="" height=""   src={item?.nhs_igc_challenge_sec_card_image} alt="nhs_igc_challenge_sec_card_image3" />
                        </div>
                      </div>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <h2>{item?.nhs_igc_challenge_sec_card_heading}</h2>
                          <div className="custom-list mt-2"
                            dangerouslySetInnerHTML={{__html: item?.nhs_igc_challenge_sec_card_content}}
                          >                            
                          </div>
                        </div>
                      </div>                      
                    </div>
                    )
                  }else{
                    return(
                      <div className="complex-chng-des chng-des-md reverse mt-md-5 mt-3" key={i}>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description">
                          <h2>{item?.nhs_igc_challenge_sec_card_heading}</h2>
                          <div className="custom-list mt-2"
                            dangerouslySetInnerHTML={{__html: item?.nhs_igc_challenge_sec_card_content}}
                          >                            
                          </div>
                        </div>
                      </div>
                      <div className="cmpx-chng-des">
                        <div className="cmpx-img-card img_design">
                          <img  loading="lazy"  width="" height=""   src={item?.nhs_igc_challenge_sec_card_image} alt="nhs_igc_challenge_sec_card_image" />
                        </div>
                      </div>
                    </div>
                    )
                  }
                
              })
            }
          </Container>
        </section>

        {/* Patient Section */}
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
          <h2 className="sec-heading">
          {pageData?.nhs_igc_patient_sec_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des">
                <div className="ltd-case-description">
                  <div className="custom-list" dangerouslySetInnerHTML={{__html: pageData?.nhs_igc_patient_sec_description}}>
                  
                  </div>
                </div>
              </div>
              <div className="cmpx-chng-des">
                <div className="cmpx-img-card img_design">
                <Link href={`/clientstorydetail/${CLIENT_STORIES}/10307`}>
                   <img  loading="lazy"  width="" height=""   src={pageData?.nhs_igc_patient_sec_image} alt="nhs_1igc_patient_sec_image" />
                </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Brand Slider */}
       
        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <SubmitRFP />
      </div>
    </>
  );
};
