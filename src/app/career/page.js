'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import HireProcess from "../Features/HireProcess";
import FAQ from "../Components/FAQ";
import { CardCarousel } from "../Features/CardCarousel";
import ServiceSlider from "../Components/ServiceSlider";
import { CAREER_URL } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import { IconList } from "../Features/coursePages/IconList";
import CareerCV from "../Components/CareerCV";

export default function Career(){
  const { data, isLoading } = useCustomGet(CAREER_URL);

  var bannerContent = {
    title: `<h1>${data?.career_banner_heading}</h1>`,
    cardTitle: data?.career_banner_sub_heading,
    cardPara: data?.career_banner_description,
    butnCtn1: "Request a proposal",
    butnCtn2: "Learn more",
  };
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.career_banner_background_image}
      />
      <section className=" bg-light service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <section className="meet-people-sec">
        <Container>
          <h2 className="sec-heading">meet our people</h2>
          <p className="sub-heading">
            Meet the brilliant minds behind our success. Passionate about data
            privacy, cyber security, clinical systems safety, our team drives
            innovation, and excellence.
          </p>
        </Container>
      </section>
      <CardCarousel />
      <HireProcess />
      <div className="bg-light">
        <IconList
          data={data?.list_cards}
          heading={data?.icon_box_heading}
          padding={""}
        />
      </div>

      <IconList
        data={data?.culture_list_cards}
        heading={data?.culture_box_heading}
        padding={""}
      />

      <div className="bg-light">
        <IconList
          data={data?.perks_list_cards}
          heading={data?.perks_box_heading}
          padding={""}
        />
      </div>
      <IconList
        data={data?.perks_list_cards_copy}
        heading={data?.positions_box_heading}
        padding={""}
      />
      <FAQ />

      <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.make_heading}</h2>
            <div className="complex-chng-des align-items-center chng-des-md">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.make_image} alt="make_image" />
              </div>
              <div className="cmpx-chng-des align-items-start">
                <div
                  className="ltd-case-description custom-list"
                  dangerouslySetInnerHTML={{
                    __html: data?.make_description,
                  }}
                ></div>
                <div className="my-3">
                  <CareerCV name={"Apply Now"}/>
                </div>
                <div
                  className="ltd-case-description"
                  dangerouslySetInnerHTML={{
                    __html: data?.make_conclusion,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
    </>
  );
};

