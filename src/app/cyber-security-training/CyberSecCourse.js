'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";
import CardHover from "../Features/CardHover";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { Statcards } from "../Features/coursePages/Statcards";
import ServiceSlider from "../Components/ServiceSlider";
import FAQDynamic from "../Components/FAQDynamic";
import { useCustomGet } from "../services/Service";
import { CYBER_SECURITY_RISK_AWARENESS } from "../services/Url";
import { Loader } from "../Components/Loader";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";

const CyberSecCourse = () => {
  const { data, isLoading } = useCustomGet(
    CYBER_SECURITY_RISK_AWARENESS
  );

  var bannerContent = {
    title: `<h1>${data?.banner_heading}</h1>`,
    cardTitle: data?.banner_sub_heading,
    cardPara: data?.banner_description,
    bannerbtn: "Request More Details ",
    bannerbtn2: "Enrol Today​",
  };

  const statData = {
    heading: data?.stat_card[0].sc_no,
    description: data?.stat_card[0].sc_heading,
    heading2: data?.stat_card[1].sc_no,
    description2: data?.stat_card[1].sc_heading,
    heading3: data?.stat_card[2].sc_no,
    description3: data?.stat_card[2].sc_heading,
  };

  const courseData = {
    heading: data?.heading,
    format: data?.format,
    price: data?.price,
    duration: data?.duration,
    commitment: data?.commitment,
  };

  const paymentData = {
    heading: data?.heading,
    payText: data?.pay_text,
    startDate: data?.start_date,
    endDate: data?.bulk_end_date?.length > 0 ? data?.bulk_end_date:  data?.end_date,
    dyanamic :data?.bulk_end_date?.length > 0 ? false : true,
    price:data?.price,
    discount: data?.discount,
    id: data?.product_id,
    seats:data?.seats,
    frequency:data?.commitment
  };
  
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.banner_image} />
      <CourseDescriptionRow course={courseData} />
      <section className="service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <div className="internal-service-page" id="cyber-sec-course">
        <section
          className="award-sec"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.ss_heading}</h2>
            <div className="cmpx-chng-des ">
              <div
                className="ltd-case-description text-center"
                dangerouslySetInnerHTML={{ __html: data?.ss_description }}
              ></div>
            </div>
          </Container>
        </section>
        <section
          className="award-sec pt-4 sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="card-hover-cards">
              {data?.hover_cards?.map((item, i) => {
                return (
                  <CardHover
                  key={i}                  
                    cardDeatils={{
                      bgImg: item?.hc_image,
                      contentHead: item?.hc_heading,
                      contentBody: item?.hc_content,
                    }}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <section
          className="award-sec sec-padding bg-light"
          style={{ backgroundColor: "#fff" }}
        >
           {Object.keys(data || {}).length > 0 && (
          <Container>
            <div className="content-tabs">
              <Tabs
                defaultActiveKey="attend"
                id="uncontrolled-tab-example"
                justify
              >
                <Tab
                  eventKey="attend"
                  title={data?.ss_tab_heading ? data?.ss_tab_heading : ""}
                >
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description"
                      dangerouslySetInnerHTML={{ __html: data?.ss_tab_content }}
                    ></div>
                  </div>
                </Tab>
                <Tab
                  eventKey="benefits"
                  title={data?.ss_tab_heading_2 ? data?.ss_tab_heading_2 : ""}
                >
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description"
                      dangerouslySetInnerHTML={{
                        __html: data?.ss_tab_content_2,
                      }}
                    ></div>
                  </div>
                </Tab>
                <Tab
                  eventKey="prerequisites"
                  title={data?.ss_tab_heading_3 ? data?.ss_tab_heading_3 : ""}
                >
                  <div className="cmpx-chng-des ">
                    <div
                      className="ltd-case-description"
                      dangerouslySetInnerHTML={{
                        __html: data?.ss_tab_content_3,
                      }}
                    ></div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Container>)}
        </section>

        <PaymentDetail payData={paymentData} />
        <GuranteeJob />

        <Statcards data={statData} />

        <FAQDynamic
          bg={"#fff"}
          padding="bottom"
          heading={data?.faq_heading}
          list={data?.faq_list}
          description={data?.faq_description}
          conclusion={data?.faq_conclusion}
        />
        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <SubmitRFP />
        <section className="story-head sec-padding">
          <Container>
            <div className="client-stories">
              <h2 className="sec-heading">Related Courses</h2>
              <div className="story-card-wpr">
                <RelatedCoursesCard
                  img={'/images/hover2.jpg'}
                  title={"Data Asset Owner Training - Live Online"}
                  detail={
                    "Become a Master Data Asset Owner with our Live Online Sessions! Led by leading experts, this immersive course empowers participants to excel in the pivotal role of a Data Asset Owner. Through live online sessions with real-world scenarios and interactive Q&A, attendees will gain the essential knowledge and skills to safeguard and maximise the value of their organisation’s data assets."
                  }
                  link={false}
                  pageLink="/data-assest-owner-training-online"
                />
                <RelatedCoursesCard
                  img={'/images/hover3.jpg'}
                  title={"GDPR Training Online"}
                  detail={
                    "GDPR Training Online. Developed using real-world scenarios by the “GDPR Consultancy of the Year” – 2020 and 2021. Delivered to you live online, in an interactive and engaging manner by IG-Smart Ltd’s world-class GDPR Consultants/Data Protection Officers. We provide GDPR training for employees and executives, as well as specialist Data Protection Officer training and NHS GDPR training for people working with sensitive patient data."
                  }
                  link={false}
                  pageLink="/ig-gdpr-training"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default CyberSecCourse;
