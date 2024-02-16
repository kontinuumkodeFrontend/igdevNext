'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { DATA_PROTECTION_OFFICER_TRAINING_FOR_PHARMA } from "../services/Url";
import { useCustomGet } from "../services/Service";
import { Loader } from "../Components/Loader";
import CardHover from "../Features/CardHover";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import ServiceSlider from "../Components/ServiceSlider";
import { Statcards } from "../Features/coursePages/Statcards";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { IconList } from "../Features/coursePages/IconList";
import FAQDynamic from "../Components/FAQDynamic";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";

const DPOTrainingforPharma = () => {
const hover1 = "/images/hover1.jpg";
const hover2 = "/images/hover2.jpg";
const hover3 = "/images/hover3.jpg";
const relateCard = "/images/teamDetail.jpg";
const relateCard2 = "/images/teamSimonIT.jpg";

 const { data, isLoading } = useCustomGet(
    DATA_PROTECTION_OFFICER_TRAINING_FOR_PHARMA
  );

  var bannerContent = {
    title: `<h1>${data?.dpotp_banner_main_heading}</h1>`,
    cardTitle: data?.dpotp_banner_heading,
    cardPara: data?.dpotp_banner_content,
    bannerbtn: " Request More Details ",
    bannerbtn2: "Enrol Today​",
  };

  const statData = {
    heading: "100 years",
    description: "Combined Expertise",
    heading2: "100+",
    description2: "Companies Trained",
    heading3: "20,000+",
    description3: "Employees Trained",
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
      <Banner bannerCnt={bannerContent} banImg={data?.dpotp_banner_image} />
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
          data={data?.dpotp_choose_list}
          heading={data?.dpotp_choose_heading}
          padding={""}
        />

        <ModuleList
          data={data?.dpotp_benifit_list}
          heading={data?.dpotp_benifit_heading}
          subHeading={""}
          padding={""}
        />
        <IconList
          data={data?.dpotp_live_list}
          heading={data?.dpotp_live_heading}
          padding={""}
        />
         <PaymentDetail payData={paymentData}/>
        <GuranteeJob />

        <Statcards data={statData} padding={"bottom"} />
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
                  img={relateCard}
                  title={"Data Asset Owner Training - Live Online"}
                  detail={
                    "Become a Master Data Asset Owner with our Live Online Sessions! Led by leading experts, this immersive course empowers participants to excel in the pivotal role of a Data Asset Owner. Through live online sessions with real-world scenarios and interactive Q&A, attendees will gain the essential knowledge and skills to safeguard and maximise the value of their organisation’s data assets."
                  }
                  link={false}
                  pageLink="/data-assest-owner-training-online"
                />
                <RelatedCoursesCard
                  img={relateCard2}
                  title={"Data Privacy Training for Pharma - Live Online"}
                  detail={
                    "Unlock the Power of Data Privacy in the Pharmaceutical Industry with Our Live Online Training! Led by World-Leading Experts, this Interactive Course Equips Pharma Professionals with Essential Skills to Safeguard Sensitive Information."
                  }
                  link={false}
                  pageLink="/data-privacy-training-for-pharma"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default DPOTrainingforPharma;
