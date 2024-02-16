'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { BUISNESS_CONTINUITY_AND_DISASTER_RECOVERY_AUDIT} from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";

export default function BusinessContinuityandDisasterRecoveryAudit(){
  const { data, isLoading } = useCustomGet(BUISNESS_CONTINUITY_AND_DISASTER_RECOVERY_AUDIT);

  var bannerContent = {
    title: `<h1>${data?.bcdra_banner_main_heading}</h1>`,
    cardTitle:data?.bcdra_banner_heading,
    cardPara:data?.bcdra_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.bcdra_banner_image} />
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
              {data?.bcdra_why_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.bcdra_why_image} alt="bcdra_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.bcdra_why_content}}
                  >             
                  </div>
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
                {data?.bcdra_solution_heading}
            </h2>
            <div className="complex-chng-des loop reverse">
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.bcdra_solution_content}}
              >
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.bcdra_solution_image} alt="bcdra_solution_image" />
              </div>
            </div>
          </Container>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.bcdra_tailoring_heading}
            </h2>
            <div className="complex-chng-des reverse">
            <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.bcdra_tailoring_image} alt="bcdra_tailoring_image" />
              </div>
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.bcdra_tailoring_content}}
              >                               
              </div>
              
            </div>
          </Container>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.bcdra_today_heading}
            </h2>
            <div className="complex-chng-des">
          
              <div className="cmpx-chng-des custom-list"
                dangerouslySetInnerHTML={{__html:data?.bcdra_today_content}}
              >                               
              </div>   
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.bcdra_today_image} alt="bcdra_today_image" />
              </div>          
            </div>
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="bottom" heading={data?.faq_heading} list={data?.faq_list}/>
       <div className="bg-light">
       <TestimonialV2 />
       </div>       
        <SubmitRFP />
      </div>
    </>
  );
};

