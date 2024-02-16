'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import SubmitRFP from "../Components/SubmitRFP";
import { useCustomGet } from "../services/Service";
import { ISO_27001_PENETRATION_TESTING } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";

export default function PenetrationTestService() {
  const { data, isLoading } = useCustomGet(ISO_27001_PENETRATION_TESTING);

  const bannerContent = {
    title: data?.iso_penetration__banner_heading,
    cardTitle:data?.iso_penetration__banner_sub_heading,
    cardPara:data?.iso_penetration__banner_description,
  };

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.iso_penetration__banner_background_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="pene-testing-service">
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.iso_penetration_testing_heading}
            </h2>
            <div className="eql_spc">
                {
                  data?.iso_penetration_testing_content_box?.map((item, i) => {
                    if((i % 2) === 0) {
                      return(
                        <div className="complex-chng-des mt-lg-4 mt-0">
                          <div className="cmpx-img-card img_design">
                            <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_testing_content_image} alt="iso_penetration_testing_content_image" />
                          </div>
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-md-4 mt-3">
                              <h3>
                                {item?.iso_penetration_testing_content_heading}
                              </h3>
                              <div dangerouslySetInnerHTML={{__html:item?.iso_penetration_testing_content_description}}></div>
                            </div>
                          </div>
                        </div>
                      )
                    }else{
                      return(
                        <div className="complex-chng-des reverse mt-lg-4 mt-0">
                          <div className="cmpx-chng-des">
                            <div className="ltd-case-description mt-md-4 mt-3">
                              <h3>
                                {item?.iso_penetration_testing_content_heading}
                              </h3>
                              <div dangerouslySetInnerHTML={{__html:item?.iso_penetration_testing_content_description}}></div>
                            </div>
                          </div>
                          <div className="cmpx-img-card img_design">
                            <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_testing_content_image} alt="iso_penetration_testing_content_image23" />
                          </div>
                        </div>
                      )
                    }
                  })
                }
            </div>
          </Container>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.iso_penetration_steps_heading}
            </h2>
            {
              data?.iso_penetration_steps_content_box?.map((item, i) => {
                if(i % 2 === 0){
                  return(
                    <div className="complex-chng-des loop mt-lg-4 mt-0" key={i}>
                      <div className="cmpx-img-card img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_steps_content_image} alt="iso_penetration_steps_content_image123" />
                      </div>
                      <div className="cmpx-chng-des">
                        <div className="ltd-case-description mt-md-4 mt-3">
                          <h3>
                            {item?.iso_penetration_steps_content_heading}
                          </h3>
                          <div dangerouslySetInnerHTML={{__html: item?.iso_penetration_steps_content_description}}></div>
                        </div>
                      </div>
                    </div>
                  )
                }else{
                  return(
                    <div className="complex-chng-des loop reverse mt-lg-4 mt-0" key={i}>
                    <div className="cmpx-chng-des">
                      <div className="ltd-case-description mt-md-4 mt-3">
                        <h3>{item?.iso_penetration_steps_content_heading}</h3>
                        <div dangerouslySetInnerHTML={{__html: item?.iso_penetration_steps_content_description}}></div>
                      </div>
                    </div>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_steps_content_image} alt="iso_penetration" />
                    </div>
                  </div>
                  )
                }
              })
            }
          </Container>
        </section>
        <section className="award-sec bg-white sec-padding-top">
          <Container>
            <h2 className="sec-heading">
              {data?.iso_penetration_what_happens_heading}
            </h2>
            {
              data?.iso_penetration_what_happens_content_box?.map((item, i) => {
                if(i % 2 === 0){
                  return(
                    <div className="complex-chng-des loop mt-lg-4 mt-0" key={i}>
                    <div className="cmpx-img-card img_design">
                      <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_what_happens_content_image} alt="iso_penetration_what_happens_content_image" />
                    </div>
                    <div className="cmpx-chng-des">
                      <div className="ltd-case-description mt-md-4 mt-3">
                        <h3>{item?.iso_penetration_what_happens_content_heading}</h3>
                        <div dangerouslySetInnerHTML={{__html: item?.iso_penetration_what_happens_content_description}}></div>
                      </div>
                    </div>
                  </div>
                  )
                }else{
                  return(
                    <div className="complex-chng-des loop reverse mt-lg-4 mt-0" key={i}>
                     <div className="cmpx-chng-des">
                      <div className="ltd-case-description mt-md-4 mt-3">
                        <h3>{item?.iso_penetration_what_happens_content_heading}</h3>
                        <div dangerouslySetInnerHTML={{__html: item?.iso_penetration_what_happens_content_description}}></div>
                      </div>
                    </div>
                    <div className="cmpx-img-card img_design">
                    <img  loading="lazy"  width="" height=""   src={item?.iso_penetration_what_happens_content_image} alt="happens_content_image" />
                    </div>
                  </div>
                  )
                }
              })
            }
          </Container>
        </section>

        <section className="award-sec sec-padding">
          <Container>
            <h2 className="sec-heading">
             {data?.iso_penetration_why_heading}
            </h2>
            <div className="complex-chng-des mt-lg-4 mt-0">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.iso_penetration_why_image} alt="iso_penetration_why_image" />
              </div>
              <div className="cmpx-chng-des ">
                <div className="ltd-case-description mt-md-4 mt-3" 
                dangerouslySetInnerHTML={{__html: data?.iso_penetration_why_description}}>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP/>
      </div>
    </>
  );
};
