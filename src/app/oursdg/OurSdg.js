'use client'
import React from "react";
import Banner from "../Components/Banner";
import { Container } from "react-bootstrap";
import { useCustomGet } from "../services/Service";
import { SDG } from "../services/Url";
import { Loader } from "../Components/Loader";
import ServiceSlider from "../Components/ServiceSlider";

export default function OurSdg() {
  const { data, isLoading } = useCustomGet(SDG);

  var bannerContent = {
    title: data?.sdg_banner_heading,
    cardTitle:data?.sdg_banner_sub_heading,
    cardPara:data?.sdg_banner_text,
  };

  return (
    <>
    {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.sdg_banner_background_image} />
      <section className="ig-smart-head sec-padding-top">
        <Container>
          <h2 className="sec-heading">
            {
              data?.sdg_section_heading
            }
          </h2>
          <p className="sub-heading">
            {data?.sdg_section_sub_heading}
          </p>
          <div className="header-underline">
          <a href={data?.sdg_section_heading_link}>
          <h4>
            {data?.sdg_section_heading_link_text}
          </h4>
        </a>
          </div>
        </Container>
      </section>
      <section className="ig-smart-img">
        <Container fluid className="p-0">
          <img  loading="lazy"  width="" height=""   src={data?.sdg_section_image} alt="sdg_section_image1img" />
        </Container>
      </section>
      <section className="ig-smart-description">
        <Container>
          <p>
            {data?.sdg_section_description}
          </p>
        </Container>
      </section>
      <section className="goals-section sec-padding">
        <Container>
          <div className="goals-head">
            <h2 className="sec-heading">
              {data?.development_goal_heading}
            </h2>
            <div  dangerouslySetInnerHTML={{ __html: data?.development_goal_text }} >             
            </div>
          </div>
          <div className="ig-goals-list">
            <div className="goals-img">
              <img  loading="lazy"  width="" height=""   src={data?.development_goal_image} alt="development_goal_image" />
            </div>
            <div className="custom-list">
              <ul>
                {
                  data?.development_goal_list?.map((item, i) => {
                    return(
                      <li key={i}>{item?.development_goal_name}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <div className="bg-light"> 
          <ServiceSlider />
      </div>
     
      <section className="ig-smart-section sec-padding-top">
        <Container>
          <div className="goals-head">
            <h2 className="sec-heading">{data?.sdg_about_heading_}</h2>
            <div  dangerouslySetInnerHTML={{ __html: data?.sdg_about_text }} >             
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

