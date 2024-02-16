'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { DPO_TRAINING_HEALTH_SOCIAL_CARE } from "../services/Url";
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


const DPOHealthCare = () => {
let relateCard ="/images/teamSimonCC.jpg";
let relateCard2= "/images/indus2.png";

  const { data, isLoading } = useCustomGet(
    DPO_TRAINING_HEALTH_SOCIAL_CARE
  );

  var bannerContent = {
    title: `<h1>${data?.dpohsc_banner_main_heading}</h1>`,
    cardTitle: data?.dpohsc_banner_heading,
    cardPara: data?.dpohsc_banner_content,
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
      <Banner bannerCnt={bannerContent} banImg={data?.dpohsc_banner_image} />

      <CourseDescriptionRow course={courseData}/>

      <div className="internal-service-page" id="cyber-sec-course">
        <ServiceSlider />

        <section className="award-sec" style={{ backgroundColor: "#fff" }}>
          <Container>
            <div className="card-hover-cards">
              {data?.dpohsc_hover?.map((item, i) => {
                return (
                  <CardHover
                    key={i}
                    cardDeatils={{
                      bgImg: item?.dpohsc_hover_card_image,
                      contentHead: item?.dpohsc_hover_card_heading,
                      contentBody: item?.dpohsc_hover_card_description,
                    }}
                  />
                );
              })}
            </div>
          </Container>
        </section>

        <IconList
          data={data?.dpohsc_syllabus_list}
          heading={data?.dpohsc_syllabus_heading}
          padding={""}
        />

        <ModuleList
          data={data?.dpohsc_outcomes_list}
          heading={data?.dpohsc_outcomes_heading}
          subHeading={""}
          padding={""}
        />

        <IconList
          data={data?.dpohsc_attend_list}
          heading={data?.dpohsc_attend_heading}
          padding={""}
        />
        <PaymentDetail payData={paymentData}/>

        <GuranteeJob />

        <Statcards data={statData} padding={"bottom"} />

        {/* ***** */}

        <section
          className="award-sec sec-padding-bottom"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="complex-chng-des chng-des-md">
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dpohsc_prerequisites_image} alt="dpohsc_prerequisites_image" />
              </div>
              <div className="cmpx-chng-des">
                <h2>{data?.dpohsc_prerequisites_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.dpohsc_prerequisites_description,
                  }}
                ></div>
              </div>
            </div>
          </Container>
        </section>
        <section className="award-sec sec-padding bg-light">
          <Container>
            <div className="complex-chng-des chng-des-md reverse">
              <div className="cmpx-chng-des">
                <h2>{data?.dpohsc_enroll_heading}</h2>
                <div
                  className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{
                    __html: data?.dpohsc_enroll_content,
                  }}
                ></div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.dpohsc_enroll_image} alt="dpohsc_enroll_image" />
              </div>
            </div>
          </Container>
        </section>
        {/* ***** */}
        <FAQDynamic
          bg={"#fff"}
          padding="top"
          heading={data?.faq_heading}
          list={data?.faq_list}
        />
        <TestimonialV2 customClass="pb-0" />
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
                  title={"Data Protection Officer Training - Live Online"}
                  detail={
                    "Unlock Your Potential as a Data Protection Officer (DPO) with our Live Online Training. Led by industry experts, this interactive course equips participants with the essential skills and knowledge to excel in the critical role of a DPO. Through real-world scenarios and interactive Q&A sessions, attendees will gain a deep understanding of data protection principles and their practical application in diverse organisational settings."
                  }
                  link={false}
                  pageLink="/data-protection-officer-training-online"
                />
              </div>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
};

export default DPOHealthCare;
