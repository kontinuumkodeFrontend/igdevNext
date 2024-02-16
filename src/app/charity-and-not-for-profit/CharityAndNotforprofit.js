'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { CHARITY_NOT_FOR_PROFIT } from "../services/Url";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";

const CharityAndNotforprofit = () => {
  const { data, isLoading } = useCustomGet(CHARITY_NOT_FOR_PROFIT);

  var bannerContent = {
    title: `<h1>${data?.banner_heading}</h1>`,
    cardTitle:data?.banner_sub_heading,
    cardPara:data?.banner_description,
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
      <div className="internal-service-page" id="cyber-sec-course">

      <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div>
                <h2 className="sec-heading">{data?.cnp_our_heading}</h2>
            </div>
            {data?.cnp_our_card?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cnp_our_card_image} alt="cnp_our_card_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                        {item?.cnp_our_card_heading && (
                          <h3 className="sec-heading text-left mb-0">{item?.cnp_our_card_heading}</h3>
                        )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cnp_our_card_description,
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
                   
                    <div className="complex-chng-des chng-des-md reverse">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                        {item?.cnp_our_card_heading && (
                          <h3 className="sec-heading text-left mb-0">{item?.cnp_our_card_heading}</h3>
                        )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.cnp_our_card_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.cnp_our_card_image} alt="cnp_our_card_image" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Container>
        </section>

        <section>
          <Container>
          <div className="complex-chng-des chng-des-md reverse">
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description mt-md-4 mt-3">
                  {data?.leveraging_heading && (
                    <h2 className="sec-heading text-left mb-0">{data?.leveraging_heading}</h2>
                  )}
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.leveraging_description,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.leveraging_image} alt="leveraging_heading" />
                </div>
              </div>
          </Container>
        </section>  

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div>
                <h2 className="sec-heading">{data?.services_heading}</h2>
            </div>
            {data?.service_card?.map((item, i) => {
              if (i % 2 === 0) {
                return (
                  <div key={i} className="mt-5">
                    
                    <div className="complex-chng-des chng-des-md">
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.services_image} alt="services_image" />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                        {item?.services_heading && (
                          <h3 className="sec-heading text-left mb-0">{item?.services_heading}</h3>
                        )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.services_description,
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
                   
                    <div className="complex-chng-des chng-des-md reverse">
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description mt-md-4 mt-3">
                        {item?.services_heading && (
                          <h3 className="sec-heading text-left mb-0">{item?.services_heading}</h3>
                        )}
                          <div
                            className="custom-list"
                            dangerouslySetInnerHTML={{
                              __html: item?.services_description,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="cmpx-img-card mt-0 img_design">
                        <img  loading="lazy"  width="" height=""   src={item?.services_image} alt="services_image2" />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </Container>
        </section>   

         <section>
          <Container>
          <div className="complex-chng-des chng-des-md">
                <div className="cmpx-img-card mt-0 img_design">
                  <img  loading="lazy"  width="" height=""   src={data?.partner_image} alt="partner_image" />
                </div>
                <div className="cmpx-chng-des ">
                  <div className="ltd-case-description mt-md-4 mt-3">
                  {data?.partner_heading && (
                    <h3 className="sec-heading text-left mb-0">{data?.partner_heading}</h3>
                  )}
                    <div
                      className="custom-list"
                      dangerouslySetInnerHTML={{
                        __html: data?.partner_description,
                      }}
                    ></div>
                        <ul className="social-icons invert my-2" style={{listStyle:"none"}}>
                        <li><a href="https://www.facebook.com/igsmartuk/"><img  loading="lazy"  width="" height=""   decoding="async" src="https://admin.ig-smart.com/wp-content/uploads/2023/12/facebook.png" alt="facebook" /></a></li>
                        <li><a href="https://www.linkedin.com/company/ig-smart/"><img  loading="lazy"  width="" height=""   decoding="async" src="https://admin.ig-smart.com/wp-content/uploads/2023/10/linkedIn.png" alt="linkedIn" /></a></li>
                        <li><a href="https://twitter.com/ig_smart?lang=en"><img  loading="lazy"  width="" height=""   decoding="async" src="https://admin.ig-smart.com/wp-content/uploads/2023/10/twitter.png" alt="twitter" /></a></li>
                        </ul>
                   <div className="btn-group">
                   <Link href="/contact" className="btn-design">Contact</Link>
                   </div>
                  </div>
                </div>
               
              </div>
          </Container>
        </section> 

        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
      </div>
    </>
  );
};

export default CharityAndNotforprofit;
