'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { DATA_PRIVACY_TRAINING_FOR_PHARMA } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import CardHover from "../Features/CardHover";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import ServiceSlider from "../Components/ServiceSlider";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { Statcards } from "../Features/coursePages/Statcards";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";

export default function DPforPharma() {
  const relateCard = "/images/teamDetail.jpg";
  const relateCard2 = "/images/team-Clair2.jpg";
  const hover1 = "/images/hover1.jpg";
  const hover2 = "/images/hover2.jpg";
  const hover3 = "/images/hover3.jpg";

  const { data, isLoading } = useCustomGet(
    DATA_PRIVACY_TRAINING_FOR_PHARMA
  );

  var bannerContent = {
    title: `<h1>${data?.data_privacy_training_banner_main_heading}</h1>`,
    cardTitle: data?.data_privacy_training_banner_heading,
    cardPara: data?.data_privacy_training_banner_content,
    bannerbtn: " Request More Details ",
    bannerbtn2: "Enrol Today​",
  };

  const cardContent = [
    {
      bgImg: hover1,
      contentHead: "Live Online Sessions",
      contentBody: "",
    },
    {
      bgImg: hover2,
      contentHead: "Interactive Q&A",
      contentBody: "",
    },
    {
      bgImg: hover3,
      contentHead: "Real-World Scenarios",
      contentBody: "",
    },
  ];

  const statData = {
    heading: "100 years",
    description: "Combined Expertise",
    heading2: "100+",
    description2: "Companies Trained",
    heading3: "20,000+",
    description3: "Employees Trained",
  };

  const courseData = {
    heading: data?.heading,
    format: data?.format,
    price:data?.price,
    duration: data?.duration,
    commitment: data?.commitment
  }
  
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
  }
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner
        bannerCnt={bannerContent}
        banImg={data?.data_privacy_training_banner_image}
      />
      <CourseDescriptionRow course={courseData}/>
      <div className="internal-service-page" id="record-mang-service">
        <ServiceSlider />
        <section className="award-sec" style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="card-hover-cards">
              {cardContent?.map((item, i) => {
                return (
                  <CardHover
                    key={i}
                    cardDeatils={{
                      bgImg: item?.bgImg,
                      contentHead: item?.contentHead,
                      contentBody: item?.contentBody,
                    }}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <IconList
          data={data?.data_privacy_training_syllabus_list}
          heading={data?.data_privacy_training_syllabus_heading}
          padding={""}
        />

        <ModuleList
          data={data?.data_privacy_training_outcomes_list}
          heading={data?.data_privacy_training_outcomes_heading}
          subHeading={""}
          padding={""}
        />
        <IconList
          data={data?.data_privacy_training_attend_list}
          heading={data?.data_privacy_training_attend_heading}
          padding={""}
        />
        <PaymentDetail payData={paymentData}/>
        <GuranteeJob />

        <Statcards data={statData} padding="bottom" />

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">
              {data?.data_privacy_training_prerequisites_heading}
            </h2>
            <div className="complex-chng-des">
              <div className="cmpx-img-card mt-0  img_design">
                <img  loading="lazy"  width="" height=""  
                  src={data?.data_privacy_training_prerequisites_image}
                  alt="data_privacy_training_prerequisites_image"
                />
              </div>
              <div
                className="cmpx-chng-des custom-list "
                dangerouslySetInnerHTML={{
                  __html: data?.data_privacy_training_prerequisites_content,
                }}
              ></div>
            </div>
          </Container>
        </section>

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
                  img={relateCard2}
                  title={"DPO Training for Pharma - Live Online"}
                  detail={
                    "Welcome to IG-Smart Ltd, your trusted partner for Live Online Data Protection Officer (DPO) Training tailored specifically for professionals in the Pharmaceutical industry. As a multi-award winning consultancy with extensive expertise in information governance, data privacy, and cyber security, we offer a comprehensive and interactive live training program designed to equip DPOs in the Pharmaceutical sector with the knowledge and skills they need to safeguard sensitive data and ensure compliance with data protection regulations."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-for-pharma"
                />
                <RelatedCoursesCard
                  img={relateCard}
                  title={"Data Asset Owner Training - Live Online"}
                  detail={
                    "Become a Master Data Asset Owner with our Live Online Sessions! Led by leading experts, this immersive course empowers participants to excel in the pivotal role of a Data Asset Owner. Through live online sessions with real-world scenarios and interactive Q&A, attendees will gain the essential knowledge and skills to safeguard and maximise the value of their organisation’s data assets."
                  }
                  link={false}
                  pageLink="/data-assest-owner-training-online"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

