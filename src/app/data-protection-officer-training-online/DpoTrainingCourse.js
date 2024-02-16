'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { DPO_TRAINING_ONLINE } from "../services/Url";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import CardHover from "../Features/CardHover";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import ServiceSlider from "../Components/ServiceSlider";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { Statcards } from "../Features/coursePages/Statcards";
import FAQDynamic from "../Components/FAQDynamic";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";

const DpoTrainingCourse = () => {
  const [statData, setStatData] = useState({});

  const { data, isLoading } = useCustomGet(DPO_TRAINING_ONLINE);

  var bannerContent = {
    title: `<h1>${data?.dpoto_banner_main_heading}</h1>`,
    cardTitle: data?.dpoto_banner_heading,
    cardPara: data?.dpoto_banner_description,
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

  useEffect(() => {
    if (data?.dpoto_counter_card?.length > 0) {
      setStatData({
        heading: data?.dpoto_counter_card[0]?.dpoto_counter_card_heading,
        description:
          data?.dpoto_counter_card[0]?.dpoto_counter_card_description,
        heading2: data?.dpoto_counter_card[1]?.dpoto_counter_card_heading,
        description2:
          data?.dpoto_counter_card[1]?.dpoto_counter_card_description,
        heading3: data?.dpoto_counter_card[2]?.dpoto_counter_card_heading,
        description3:
          data?.dpoto_counter_card[2]?.dpoto_counter_card_description,
      });
    }
  }, [data]);

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
  } 
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={data?.dpoto_banner_image} />
      <CourseDescriptionRow course={courseData} />
      <div className="internal-service-page" id="cyber-sec-course">
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
          data={data?.dpoto_syllabus_list}
          heading={data?.dpoto_syllabus_heading}
          padding={""}
        />

        <ModuleList
          data={data?.dpoto_outcomes_list}
          heading={data?.dpoto_outcomes_heading}
          subHeading={data?.dpoto_outcomes_description}
          padding={""}
        />

        <PaymentDetail payData={paymentData} />
        <GuranteeJob />

        <Statcards data={statData} padding={"bottom"} />

        <section className="sec-padding-bottom">
          <Container>
            <div className="complex-chng-des">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dpoto_empower_image} alt="dpoto_empower_image" />
              </div>
              <div className="cmpx-chng-des">
                <h2>{data?.dpoto_empower_heading}</h2>
                <div
                  className="ltd-case-description custom-list mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.dpoto_empower_description,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
        <FAQDynamic
          bg={"#fff"}
          padding="bottom"
          heading={data?.faq_heading}
          list={data?.faq_list}
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
                  img={'/images/editor1.png'}
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
                  img={'/images/indus2.png'}
                  title={"DPO Training for Pharma - Live Online"}
                  detail={
                    "Welcome to IG-Smart Ltd, your trusted partner for Live Online Data Protection Officer (DPO) Training tailored specifically for professionals in the Pharmaceutical industry. As a multi-award winning consultancy with extensive expertise in information governance, data privacy, and cyber security, we offer a comprehensive and interactive live training program designed to equip DPOs in the Pharmaceutical sector with the knowledge and skills they need to safeguard sensitive data and ensure compliance with data protection regulations."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-for-pharma"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default DpoTrainingCourse;