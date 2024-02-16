'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import ServiceSlider from "../Components/ServiceSlider";
import { useCustomGet } from "../services/Service";
import { CLIENT_STORIES, CYBER_SECURITY_AUDIT } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";
import FAQDynamic from "../Components/FAQDynamic";


export default function CyberSecAudit() {
  const { data, isLoading } = useCustomGet(CYBER_SECURITY_AUDIT);

  var bannerContent = {
    title: data?.cyber_banner_heading,
    cardTitle:data?.cyber_banner_sub_heading,
    cardPara:data?.cyber_banner_text,
  };

  return (
    <>
    {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.cyber_banner_background_image} />
      <div className="internal-service-page" id="cyberSec-service">
        <div className="bg-light">
        <ServiceSlider />
        </div>

        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.security_assessment_heading}
            </h2>
            {
              data?.security_assessment_content_box?.map((item, i) => {
                  if((i % 2) === 0){
                    return(
                      <div key={i} className={i > 1 ? "complex-chng-des mt-lg-4 mt-0 loop reverse" : "complex-chng-des loop reverse"} >

                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.security_assessment_heading}</h3>
                          <div  dangerouslySetInnerHTML={{ __html: item?.security_assessment_description }}>
                            
                          </div>
                        </div>
                      </div> 
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.security_assessment_image} alt="security_assessment_image" />
                      </div>
                    </div>
                    )
                  }else{
                    return(
                      <div className="complex-chng-des loop mt-lg-4 mt-0" key={i}>
                        <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.security_assessment_image} alt="security_assessment_image2" />
                        </div>
                        <div className="cmpx-chng-des ">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <h3>
                               {item?.security_assessment_heading}
                            </h3>
                            <div  dangerouslySetInnerHTML={{ __html: item?.security_assessment_description}}>
                            
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


        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
                {data?.security_audit_heading}
            </h2>
           
            {
              data?.security_audit_content?.map((item, i) => {
                  if((i % 2) === 0){
                    return(
                      <div className={i > 1 ? "complex-chng-des loop mt-lg-4 mt-0 reverse" : "complex-chng-des loop reverse"} key={i}>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>
                           {item?.security_audit_content_heading}
                          </h3>
                          <p>
                           {item?.security_audit_content_description}
                          </p>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.security_audit_content_image} alt="security_audit_content_image3" />
                      </div>
                    </div>
                    )
                  }else{
                    if(i == 1){
                      return(
                        <div className="complex-chng-des mt-lg-4 mt-0" key={i}>
                        <div className="cmpx-img-card img_design">
                         <Link prefetch={true} href={`/clientstorydetail/${CLIENT_STORIES}/11241`}>
                          <img  loading="lazy"  width="" height=""   src={item?.security_audit_content_image} alt="security_audit_content_image34" />
                         </Link>
                        </div>
                        <div className="cmpx-chng-des ">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <h3>
                              {item?.security_audit_content_heading}
                            </h3>
                            <p>
                              {item?.security_audit_content_description}
                            </p>
                          </div>
                        </div>
                      </div>
                      )
                    }else{
                      return(
                        <div className="complex-chng-des mt-lg-4 mt-0" key={i}>
                        <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.security_audit_content_image} alt="security_audit_content_image4" />
                        </div>
                        <div className="cmpx-chng-des ">
                          <div className="ltd-case-description mt-md-4 mt-3">
                            <h3>
                              {item?.security_audit_content_heading}
                            </h3>
                            <p>
                              {item?.security_audit_content_description}
                            </p>
                          </div>
                        </div>
                      </div>
                      )
                    }
                  }
              })
            }
          </Container>
        </section>


        <section className="award-sec sec-padding single-row-text">
          <Container>
            <h2 className="sec-heading">
             {data?.security_practice_heading}
            </h2>
            {
              data?.security_practice_content?.map((item, i) => {
                return(
                  <div className="complex-chng-des mt-lg-4 mt-0" key={i}>
                  <div className="cmpx-chng-des ">
                    <div className="ltd-case-description">
                      <h3>{item?.security_audit_content}</h3>
                      <p>
                        {item?.security_practice_content_description}
                      </p>
                    </div>
                  </div>
                </div>
                )
              })
            }
          </Container>
        </section>
        <FAQDynamic bg={"#fff"} padding="top" heading={data?.faq_heading} list={data?.faq_list}/>
        <TestimonialV2 customClass="pb-md-0 pb-4"/>
        <SubmitRFP getData={data?.get_cards} getHeading={data?.get_heading}/>
      </div>
    </>
  );
};

