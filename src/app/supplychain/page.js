'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { CLIENT_STORIES, SUPPLY_CHAIN } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import Link from "next/link";
import ServiceSlider from "../Components/ServiceSlider";

export default function SupplyChain(){
  const { data, isLoading } = useCustomGet(SUPPLY_CHAIN);

  var bannerContent = {
    title: `<h1>${data?.sc_banner_main_heading}</h1>`,
    cardTitle:data?.sc_banner_heading,
    cardPara:data?.sc_banner_description,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.sc_banner_image} />
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
              {data?.sc_choose_heading}
            </h2>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des ">               
                <div className="ltd-case-description mt-md-4 mt-3">
                  <div className="custom-list"
                    dangerouslySetInnerHTML={{__html: data?.sc_choose_description}}
                  >                   
                  </div>
                </div>
              </div>
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.sc_choose_image} alt="sc_choose_image" />
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
                {data?.sc_our_heading}
            </h2>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""   src={data?.sc_our_image} alt="sc_our_image1" />
              </div>
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html: data?.sc_our_description}}
              >
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
              {data?.sc_benifits_heading}
            </h2>
            <div className="sub-heading mb-4 text-dark"
              dangerouslySetInnerHTML={{__html: data?.sc_benifits_below_text}}
            ></div>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{__html:data?.sc_benifits_description}}
              >                               
              </div>
              <div className="cmpx-img-card mt-0  img_design">
              <Link href={`/clientstorydetail/${CLIENT_STORIES}/11332`}>
                <img  loading="lazy"  width="" height=""   src={data?.sc_benifits_image} alt="sc_benifits_image3" />
              </Link>
              </div>
            
            </div>
          </Container>
        </section>
       <div className="bg-light">
       <TestimonialV2 />
       </div>
        <SubmitRFP />
      </div>
    </>
  );
};
