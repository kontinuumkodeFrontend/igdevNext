'use client'
import React from "react";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { DCB0160_URL } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { IconList } from "../Features/coursePages/IconList";
import ServiceSlider from "../Components/ServiceSlider";
import { Container } from "react-bootstrap";
import FAQDynamic from "../Components/FAQDynamic";

export default function DCB0160(){
  const { data, isLoading } = useCustomGet(DCB0160_URL);

  var bannerContent = {
    title: `<h1>${data?.banner_heading}</h1>`,
    cardTitle: data?.banner_sub_heading,
    cardPara: data?.banner_description,
  }

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="record-mang-service">
        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.why_sec_image} alt="why_sec_image" />
              </div>
              <div className="cmpx-chng-des ">
              <h3 className="color-primary text-left mb-0">
                  {data?.why_sec_heading}
                </h3>
                <div className="ltd-case-description">
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.why_sec_content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-chng-des ">
              <h3 className="color-primary text-left mb-0">
                  {data?.our_sec_heading}
                </h3>
                <div className="ltd-case-description ">
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.our_sec_content,
                    }}
                  ></div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.our_sec_image} alt="our_sec_image" />
              </div>
            </div>
          </div>
        </section>

        <IconList
          data={data?.key_sec_list}
          heading={data?.key_sec_heading}
          padding={"bottom"}
        />

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.choose_sec_image} alt="choose_sec_image" />
              </div>
              <div className="cmpx-chng-des ">
              <h3 className="color-primary text-left mb-0">
                  {data?.choose_sec_heading}
                </h3>
                <div className="ltd-case-description">
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.choose_sec_content,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <div className="container">
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-chng-des ">
              <h3 className="color-primary text-left mb-0">
                  {data?.contact_sec_heading}
                </h3>
                <div className="ltd-case-description ">
                  <div
                    className="custom-list"
                    dangerouslySetInnerHTML={{
                      __html: data?.contact_sec_description,
                    }}
                  ></div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0 img_design">
                <img  loading="lazy"  width="" height=""   src={data?.contact_sec_image} alt="contact_sec_image" />
              </div>
            </div>
          </div>
        </section>
        <FAQDynamic bg={""} padding="" heading={data?.faq_heading} list={data?.faq_list} conclusion={data?.faq_conclusion}/>
        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <SubmitRFP />
      </div>
    </>
  );
};
