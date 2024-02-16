'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import SubmitRFP from "../Components/SubmitRFP";
import { useCustomGet } from "../services/Service";
import { CLIENT_STORIES, DATA_PROTECTION_CONSULTANCY2 } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";

export default function DataProConService(){
  const { data, isLoading } = useCustomGet(DATA_PROTECTION_CONSULTANCY2);

  var bannerContent = {
    title:  `<h1>${data?.csas_banner_main_heading}</h1>`,
    cardTitle:data?.csas_banner_heading,
    cardPara: data?.csas_banner_description ,
  };

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.csas_banner_background_image} />
      <div className="internal-service-page" id="data-pro-con-service">
        
        {/* Service Slider Section  */}
        <ServiceSlider images={data?.csas_brand_logo_list}/>

        {/* PRAGMATISM Section */}
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.csas_pragmatism_heading}
            </h2>
            <div className="cmpx-chng-des mb-4">
              <div className="ltd-case-description mt-md-4 mt-3">
                <p>
                  {data?.csas_pragmatism_description}
                </p>
              </div>
            </div>
            {
              data?.csas_pragmatism_content_box?.map((item, i) => {
                if((i % 2) === 0){
                  return(
                    <div className="complex-chng-des reverse loop mt-lg-5 mt-0" key={i}>                     
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.csas_pragmatism_content_heading}</h3>
                          <p>
                            {item?.csas_pragmatism_content_description}
                          </p>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.csas_pragmatism_content_image} alt="csas_pragmatism_content_image" />
                      </div>
                    </div> 
                  )
                }else{
                  return(
                    <div className="complex-chng-des loop mt-lg-5 mt-0" key={i}>
                      <div className="cmpx-img-card">
                      <img  loading="lazy"  width="" height=""   src={item?.csas_pragmatism_content_image} alt="csas_pragmatism_content_image2" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>{item?.csas_pragmatism_content_heading}</h3>
                          <p>
                            {item?.csas_pragmatism_content_description}
                          </p>
                        </div>
                      </div>
                    </div> 
                  )
                }
              })
            }
          </Container>
        </section>

        {/* Service Section */}
        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
              {data?.csas_service_heading}
            </h2>

            {
              data?.csas_service_content_box?.map((item, i) => {
                if((i % 2) === 0){
                  return(
                    <div className="complex-chng-des reverse loop mt-lg-5 mt-3" key={i}>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description">
                          <h3>
                            {item?.csas_service_content_box_heading}
                          </h3>
                          <div dangerouslySetInnerHTML={{__html: item?.csas_service_content_box_description}}></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card img_design">
                        {
                          data?.csas_service_content_box?.length === i+1 ?
                          <Link href={`/clientstorydetail/${CLIENT_STORIES}/11306`}>
                            <img  loading="lazy"  width="" height=""   src={item?.csas_service_content_box_image} alt="csas_service_content_box_image" />
                          </Link>:
                          <img  loading="lazy"  width="" height=""   src={item?.csas_service_content_box_image} alt="csas_service_content_box_image2" />
                        }
                        
                      </div>
                    </div>
                  )
                }else{
                  return(
                    <div className="complex-chng-des loop mt-lg-5 mt-3" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.csas_service_content_box_image} alt="csas_service_content_box_image3" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description">
                          <h3>
                            {item?.csas_service_content_box_heading}
                          </h3>
                          <div dangerouslySetInnerHTML={{__html: item?.csas_service_content_box_description}}></div>
                        </div>
                      </div>                      
                    </div>
                  )
                }
              })
            }
          </Container>
        </section>

        {/* Testimonial Section */}
        <TestimonialV2 customClass="pb-0"/>

        {/* Contact Section */}
        <SubmitRFP/>
      </div>
    </>
  );
};

