'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";
import CardHover from "../Features/CardHover";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { GDPR_NHS_TRAINING } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import ServiceSlider from "../Components/ServiceSlider";

const GdprNhsTrainingCourse = () => {
  const relateCard = "/images/indus1.png";
  const relateCard2 = "/images/indus2.png";
  const { data, isLoading } = useCustomGet(GDPR_NHS_TRAINING);

  var bannerContent = {
    title: data?.gdpr_nhs_heading,
    cardTitle: data?.gdpr_nhs,
    cardPara: data?.gdpr_nhs_description,
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
        banImg={data?.gdpr_nhs_background_image}
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
              {data?.gdpr_nhs_card_box?.map((item, i) => {
                return (
                  <CardHover
                    key={i}
                    cardDeatils={{
                      bgImg: item?.gdpr_nhs_card_image,
                      contentHead: item?.gdpr_nhs_card_heading,
                      contentBody: item?.gdpr_nhs_card_description,
                    }}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <IconList
          data={data?.gdpr_nhs_course_list}
          heading={data?.gdpr_nhs_course_heading}
          padding={""}
        />

        <ModuleList
          data={data?.gdpr_nhs_outcome_list}
          heading={data?.gdpr_nhs_outcome_heading}
          subHeading={""}
          padding={""}
        />

        <IconList
          data={data?.gdpr_nhs_attend_list}
          heading={data?.gdpr_nhs_attend_heading}
          padding={""}
        />

        <PaymentDetail payData={paymentData}/>
        <GuranteeJob />

        <section className="sec-padding bg-light">
          <Container>
            <div className="case-study-cards">
              {data?.gdpr_nhs_counter_cards?.map((item, i) => {
                return (
                  <div className="case-study-card" key={i}>
                    <img  loading="lazy"  width="" height=""   src={item?.gdpr_nhs_counter_card_icon} alt="gdpr_nhs_counter_card_icon" />
                    <h3>{item?.gdpr_nhs_counter_card_heading}</h3>
                    <p>{item?.gdpr_nhs_counter_card_description}</p>
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
                <img  loading="lazy"  width="" height=""   src={data?.gdpr_nhs_prerequisites_image} alt="gdpr_nhs_prerequisites_image" />
              </div>
              <div className="cmpx-chng-des">
                <h2>{data?.gdpr_nhs_prerequisites_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.gdpr_nhs_prerequisites_description,
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
                <h2>{data?.gdpr_nhs_enroll_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.gdpr_nhs_enroll_description,
                  }}
                ></div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.gdpr_nhs_enroll_image} alt="gdpr_nhs_enroll_image" />
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
                {/* {products?.map((item, index) => {
                      if(index < 2){
                        return(<RelatedCoursesCard
                      key={item?.id}
                      img={
                        item?.images?.length > 0 ? item?.images[0]?.src : cardImg2
                      }
                      title={item?.name}
                      detail={item?.short_description}
                      price={item?.price_html}
                      hideDec={true}
                      id={item?.id}
                      link={true}
                    />)
                      }else{
                        return ''
                      }
                    })} */}

                <RelatedCoursesCard
                  img={relateCard}
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
                  img={relateCard2}
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

export default GdprNhsTrainingCourse;
