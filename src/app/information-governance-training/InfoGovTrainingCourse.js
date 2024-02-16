'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";
import CardHover from "../Features/CardHover";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { INFORMATION_GOVERNANCE_TRAINING } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import ServiceSlider from "../Components/ServiceSlider";


const InfoGovTrainingCourse = () => {
    const relateCard = "/images/team-bright2.jpg";
    const relateCard2 = "/images/hover3.jpg";
  const { data, isLoading } = useCustomGet(INFORMATION_GOVERNANCE_TRAINING);

  var bannerContent = {
    title: `<h1>${data?.information_governance_training_banner_main_heading}</h1>`,
    cardTitle: data?.information_governance_training_banner_heading,
    cardPara: data?.information_governance_training_banner_description,
    bannerbtn: " Request More Details ",
    bannerbtn2: "Enrol Today​",
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
        banImg={data?.information_governance_training_banner_image}
      />
      <CourseDescriptionRow course={courseData}/>
      <section className=" bg-light service-trusted-by">
        <Container>
          <ServiceSlider />
        </Container>
      </section>
      <div className="internal-service-page" id="cyber-sec-course">
        <section className="award-sec " style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="card-hover-cards">
              {data?.information_governance_training_card?.map((item, i) => {
                return (
                  <CardHover
                    key={i}
                    cardDeatils={{
                      bgImg: item?.information_governance_training_card_image,
                      contentHead:
                        item?.information_governance_training_card_heading,
                      contentBody:
                        item?.information_governance_training_card_description,
                    }}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <IconList
          data={data?.information_governance_training_course_list}
          heading={data?.information_governance_training_course_heading}
          padding={""}
        />

        <ModuleList
          data={data?.information_governance_training_outcome_list}
          heading={data?.information_governance_training_outcome_heading}
          subHeading={""}
          padding={""}
        />

        <IconList
          data={data?.information_governance_training_attend_list}
          heading={data?.information_governance_training_attend_heading}
          padding={""}
        />

        <PaymentDetail payData={paymentData}/>
        <GuranteeJob />

        <section className="sec-padding bg-light">
          <Container>
            <div className="case-study-cards">
              {data?.information_governance_training_counter_card?.map(
                (item, i) => {
                  return (
                    <div className="case-study-card" key={i}>
                      <img  loading="lazy"  width="" height=""  
                        src={
                          item?.information_governance_training_counter_card_icon
                        }
                        alt="information_governance_training_counter_card_icon"
                      />
                      <h3>
                        {
                          item?.information_governance_training_counter_card_heading
                        }
                      </h3>
                      <p>
                        {
                          item?.information_governance_training_counter_card_desciption
                        }
                      </p>
                    </div>
                  );
                }
              )}
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
                <img  loading="lazy"  width="" height=""  
                  src={
                    data?.information_governance_training_prerequisites_image
                  }
                  alt="information_governance_training_prerequisites_image"
                />
              </div>
              <div className="cmpx-chng-des">
                <h5>
                  {data?.information_governance_training_prerequisites_heading}
                </h5>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.information_governance_training_prerequisites_description,
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
                <h2>{data?.information_governance_training_enroll_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.information_governance_training_enroll_description,
                  }}
                ></div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""  
                  src={data?.information_governance_training_enroll_image}
                  alt="information_governance_training_enroll_image"
                />
              </div>
            </div>
          </Container>
        </section>
        {/* ***** */}
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
                  img={relateCard}
                  title={"GDPR Training Online"}
                  detail={
                    "GDPR Training Online. Developed using real-world scenarios by the “GDPR Consultancy of the Year” – 2020 and 2021. Delivered to you live online, in an interactive and engaging manner by IG-Smart Ltd’s world-class GDPR Consultants/Data Protection Officers. We provide GDPR training for employees and executives, as well as specialist Data Protection Officer training and NHS GDPR training for people working with sensitive patient data."
                  }
                  link={false}
                  pageLink="/ig-gdpr-training"
                />
                <RelatedCoursesCard
                  img={relateCard2}
                  title={
                    "DPO Training for Health and Social Care - Live Online"
                  }
                  detail={
                    "Unlock Your Potential as a Healthcare Data Protection Officer (DPO) with Our Tailored Live Online Training! Led by World-Leading Experts, this Interactive Course Equips Participants with Essential Skills for Success."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-for-health-and-socialcare"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default InfoGovTrainingCourse;
