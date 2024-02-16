'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";

import SubmitRFP from "../Components/SubmitRFP";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { IG_GDPR_TRAINING } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import CardHover from "../Features/CardHover";

import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import ServiceSlider from "../Components/ServiceSlider";

const GdprTrainingCourse = () => {
  const { data, isLoading } = useCustomGet(IG_GDPR_TRAINING);
  const hover1 =  "/images/hover1.jpg";
  const hover2 =  "/images/hover2.jpg";
  const hover3 =  "/images/hover3.jpg";
  const relateCard =  "/images/team-bright2.jpg";
  const relateCard2 =  "/images/teamStar.jpg";
  var bannerContent = {
    title: data?.igt_banner_heading,
    cardTitle: data?.igt__banner_sub_heading,
    cardPara: data?.igt_banner_description,
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
        banImg={data?.igt_banner_background_image}
      />
      <CourseDescriptionRow course={courseData}/>
      <section className="service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <div className="internal-service-page" id="cyber-sec-course">
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
          data={data?.igt_course_list}
          heading={data?.igt_course_heading}
          padding={""}
        />

        <ModuleList
          data={data?.igt_outcome_list}
          heading={data?.igt_course_copy2}
          subHeading={""}
          padding={""}
        />

        <IconList
          data={data?.igt_attend_list}
          heading={data?.igt__attend_copy}
          padding={""}
        />

        <PaymentDetail payData={paymentData}/>
        <GuranteeJob />

        <section className="sec-padding bg-light">
          <Container>
            <div className="case-study-cards">
              {data?.igt__counter_list?.map((item, i) => {
                return (
                  <div className="case-study-card" key={i}>
                    <img  loading="lazy"  width="" height=""   src={item?.igt_counter_icon} alt="igt_counter_icon" />
                    <h3>{item?.igt_counter_heading_} +</h3>
                    <p>{item?.igt_counter_description}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ***** */}

        <section
          className="award-sec sec-padding"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.igt_prerequisites_image} alt="igt_prerequisites_image" />
              </div>
              <div className="cmpx-chng-des">
                <h2>{data?.igt_prerequisites_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.igt_prerequisites_description,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>

        <section className="award-sec sec-padding bg-light">
          <Container>
            <div className="complex-chng-des">
              <div className="cmpx-chng-des">
                <h2>{data?.igt_enroll_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.igt_enroll_description,
                  }}
                ></div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.igt_enroll_image} alt="igt_enroll_image" />
              </div>
            </div>
          </Container>
        </section>
        <div className="bg-light">
          <TestimonialV2 />
        </div>
        <SubmitRFP />
        {/* ***** */}

        <section className="story-head sec-padding">
          <Container>
            <div className="client-stories">
              <h2 className="sec-heading">Related Courses</h2>
              <div className="story-card-wpr">
                <RelatedCoursesCard
                  img={relateCard}
                  title={"Data Protection Officer Training - Live Online"}
                  detail={
                    "Unlock Your Potential as a Data Protection Officer (DPO) with our Live Online Training. Led by industry experts, this interactive course equips participants with the essential skills and knowledge to excel in the critical role of a DPO. Through real-world scenarios and interactive Q&A sessions, attendees will gain a deep understanding of data protection principles and their practical application in diverse organisational settings."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-online"
                />
                <RelatedCoursesCard
                  img={relateCard2}
                  title={"Cyber Security Training Online"}
                  detail={
                    "Cyber security training online courses, developed by, IG-Smart Ltd the UK’s “Best Cyber Security Consultancy Firm” – 2019, 2020, and 2020. Delivered live by using real-world scenarios and ethical hacking demonstrations to optimise your cyber security awareness. "
                  }
                  link={false}
                  pageLink="/cyber-security-training"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default GdprTrainingCourse;
