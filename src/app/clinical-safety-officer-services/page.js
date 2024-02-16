'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CSO_SERVICES } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";
import { FeatureTable } from "../Features/coursePages/FeatureTable";

export default function CsoService() {
  const { data, isLoading } = useCustomGet(CSO_SERVICES);

  const bannerContent = {
    title: data?.clinical_banner_heading,
    cardTitle:data?.clinical_banner_sub_heading,
    cardPara:data?.clinical_banner_description,
  }

  return (
    <>
     {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.clinical_banner_background_image} />
      <div className="internal-service-page" id="cso-service">
      {/* EXPERIENCED CLINICIANS Section */}
        <section
          className="award-sec sec-padding-top single-row-text"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.experienced_clinicals_heading}
            </h2>
            <div className="complex-chng-des mt-lg-4 mt-0">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description" dangerouslySetInnerHTML={{__html:data?.experienced_clinicals_description}}>                
                </div>
              </div>
            </div>
          </Container>
        </section>

      {/* WHY CHOOSE IG-SMART Section */}
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.experienced_clinicals_box_image} alt="experienced_clinicals_box_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description">
                  <h3>{data?.experienced_clinicals_box_heading}</h3>
                  <div dangerouslySetInnerHTML={{__html:data?.experienced_clinicals_box_description}}></div>
                </div>
              </div>
            </div>
            <div className="complex-chng-des chng-des-md reverse mt-md-5 mt-3">
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description">
                  <h3>{data?.experienced_clinicals_box_heading2}</h3>
                  <div dangerouslySetInnerHTML={{__html:data?.experienced_clinicals_box_description_2}}></div>
                </div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.experienced_clinicals_box_image2} alt="iexperienced_clinicals_box_image2mg" />
              </div>
            </div>
          </Container>
        </section>


        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
              {data?.cso_why_choose_heading}
            </h2>

            {
              data?.cso_content_box?.map((item, i) => {
                if((i % 2) === 0 ){
                  return(
                    <div className="complex-chng-des chng-des-md" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cso_content_box_image} alt="cso_content_box_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description">
                          <h3>{item?.cso_content_box_heading}</h3>
                          <div className="ltd-case-description" dangerouslySetInnerHTML={{__html:item?.cso_content_box_descrption}}>                  
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }else{
                  return(
                    <div className="complex-chng-des chng-des-md reverse mt-md-5 mt-3" key={i}>
                    <div className="cmpx-chng-des ">
                      <div className="ltd-case-description">
                        <h3>{item?.cso_content_box_heading}</h3>
                        <div className="ltd-case-description" dangerouslySetInnerHTML={{__html:item?.cso_content_box_descrption}}>                  
                        </div>
                      </div>
                    </div>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.cso_content_box_image} alt="cso_content_box_image" />
                    </div>
                  </div>
                  )
                }
              })
            } 
          </Container>
        </section>

        {/*  */}
        <section className="sec-padding-top service-trusted-by">
          <Container>
            <h2 className="sec-heading" style={{marginBottom:'-30px'}}>{data?.cso_our_service_heading}</h2>
           <ServiceSlider />
           </Container>
        </section>
        <FAQDynamic bg={""} padding="" heading={data?.faq_heading} list={data?.faq_list} conclusion={data?.faq_conclusion}/>
         {/* {
          data?.feature_tables?.length > 0 && 
          data?.feature_tables?.map((item, i) => {
            return(
              <FeatureTable data={item} bg={((i+1) % 2) != 0 && "bg-light"} key={i} sn={i} />
            )
          })
        } */}
        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

