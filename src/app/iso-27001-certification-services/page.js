'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { CERTIFICATION_ISO_SERVICE } from "../services/Url";
import SpeackAdvisor from "../Components/SpeackAdvisor";

export default function IsoCertiService(){
  const { data, isLoading } = useCustomGet(CERTIFICATION_ISO_SERVICE);

  const bannerContent = {
    title:  `<h1>${data?.isoc_banner_main_heading}</h1>`,
    cardTitle:data?.isoc_banner_heading,
    cardPara:data?.isoc_banner_content,
  };
  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.isoc_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="isoCerti-service">
        <section className="award-sec sec-padding">
          <Container>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <h2 >{data?.isoc_award_winning_heading}</h2>
                  <div dangerouslySetInnerHTML={{__html: data?.isoc_award_winning_content}}></div>
                  <div className="mt-md-4 mt-3">
                   <SpeackAdvisor customClass="d-inline-flex btn-design" name="Request a Proposal"/>
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.isoc_award_winning_image  } alt="isoc_award_winning_image" />
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
              {data?.isoc_why_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card">
                <img  loading="lazy"  width="" height=""   src={data?.isoc_why_image} alt="isoc_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.isoc_why_content}}
                >
                </div>
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
             {data?.isoc_certification_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.isoc_certification_content}}
              >               
              </div>
              <div className="cmpx-img-card">
                <img  loading="lazy"  width="" height=""   src={data?.isoc_certification_image} alt="isoc_certification_image" />
              </div>
            </div>
          </Container>
        </section>

        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
              {data?.isoc_your_buisness_heading}
            </h2>
            {
              data?.isoc_your_buisness_cards?.map((item, i) => {
                if(i % 2 === 0){
                  return(
                    <div className="complex-chng-des loop chng-des-md reverse" key={i}>
                    <div className="cmpx-chng-des ">
                      <div className="ltd-case-description">
                        <h3> 
                          {item?.isoc_your_buisness_card_heading} 
                        </h3>
                        <div dangerouslySetInnerHTML={{__html: item?.isoc_your_buisness_card_content}}>                          
                        </div>
                      </div>
                    </div>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.isoc_your_buisness_card_image} alt="isoc_your_buisness_card_image" />
                    </div>
                  </div> 
                  )
                }else{
                 return(
                  <div className="complex-chng-des chng-des-md my-md-5 my-3" key={i}>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.isoc_your_buisness_card_image} alt="isoc_your_buisness_card_image2" />
                    </div>
                    <div className="cmpx-chng-des ">
                      <div className="ltd-case-description mt-md-4 mt-3">
                        <h3>
                          {item?.isoc_your_buisness_card_heading}
                        </h3>
                        <div dangerouslySetInnerHTML={{__html: item?.isoc_your_buisness_card_content}}>                          
                        </div>
                      </div>
                    </div>                    
                  </div> 
                 )
                }
              })
            }
          </Container>
        </section>
        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

