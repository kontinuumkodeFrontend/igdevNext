'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import ServiceSlider from "../Components/ServiceSlider";
import { CALDICOTT_GURDIAN_TRAINING } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import CardHover from "../Features/CardHover";
import { TestimonialV2 } from "../Components/TestimonialV2";
import SubmitRFP from "../Components/SubmitRFP";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { Statcards } from "../Features/coursePages/Statcards";
import FAQDynamic from "../Components/FAQDynamic";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";

export default function CaldiGuardianCourse(){
  const { data, isLoading } = useCustomGet(CALDICOTT_GURDIAN_TRAINING);

  var bannerContent = {
    title: `<h1>${data?.cgt_banner_main_heading}</h1>`,
    cardTitle: data?.cgt_banner_heading,
    cardPara: data?.cgt_banner_description,
    bannerbtn: " Request More Details ",
    bannerbtn2: "Enrol Today​",
  };

  const cardContent = [
    {
      bgImg: '/images/hover1.jpg',
      contentHead: "Live Online Sessions",
      contentBody: "",
    },
    {
      bgImg: '/images/hover2.jpg',
      contentHead: "Interactive Q&A",
      contentBody: "",
    },
    {
      bgImg: '/images/hover3.jpg',
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
      <Banner bannerCnt={bannerContent} banImg={data?.cgt_banner_image} />
      <CourseDescriptionRow course={courseData}/>
      <div className="internal-service-page" id="caldi-guard-course">
        <ServiceSlider />

        <section className="award-sec " style={{ backgroundColor: "#fff" }}>
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
          data={data?.cgt_clear_list}
          heading={data?.cgt_clear_heading}
          padding={""}
        />

        <ModuleList
          data={data?.cgt_outcomes_list}
          heading={data?.cgt_outcomes_heading}
          subHeading={""}
          padding={""}
        />

        <PaymentDetail payData={paymentData} courseData={courseData}/>
        <GuranteeJob />
        <Statcards data={statData} />

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.cgt_prerequisites_heading}</h2>
            <div className="complex-chng-des align-items-center">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.cgt_prerequisites_image} alt="cgt_prerequisites_image" />
              </div>
              <div className="cmpx-chng-des">
                <div
                  className="ltd-case-description custom-list mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.cgt_prerequisites_description,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>

        <FAQDynamic
          bg={"#fff"}
          padding=""
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
                  img={'/images/indus3.png'}
                  title={
                    "DPO Training for Health and Social Care - Live Online"
                  }
                  detail={
                    "Unlock Your Potential as a Healthcare Data Protection Officer (DPO) with Our Tailored Live Online Training! Led by World-Leading Experts, this Interactive Course Equips Participants with Essential Skills for Success."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-for-health-and-socialcare"
                />
                <RelatedCoursesCard
                  img={'/images/homeBanner.png'}
                  title={"Information Governance Training - Live Online"}
                  detail={
                    "Elevate Your Information Governance Knowledge Remotely with Our Expert-Led Live Online Training! This Interactive Course Equips Participants with Essential Skills to Effectively Manage and Secure Information in Today’s Complex Digital Landscape."
                  }
                  link={false}
                  pageLink="/Information Governance Training Online"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

