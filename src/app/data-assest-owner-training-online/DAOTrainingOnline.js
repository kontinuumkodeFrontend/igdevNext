'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { useCustomGet } from "../services/Service";
import { DATA_ASSEST_OWNER_TRAINING } from "../services/Url";
import CardHover from "../Features/CardHover";
import ServiceSlider from "../Components/ServiceSlider";
import { IconList } from "../Features/coursePages/IconList";
import { ModuleList } from "../Features/coursePages/ModuleList";
import { Statcards } from "../Features/coursePages/Statcards";
import { GuranteeJob } from "../Features/coursePages/GuranteeJob";
import { PaymentDetail } from "../Features/coursePages/PaymentDetail";
import { CourseDescriptionRow } from "../Features/coursePages/CourseDescriptionRow";
import FAQDynamic from "../Components/FAQDynamic";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";


const DAOTrainingOnline = () => {
  const {
    data, 
    isLoading 
  } = useCustomGet(DATA_ASSEST_OWNER_TRAINING);

  var bannerContent = {
    title: `<h1>${data?.daot_banner_main_heading}</h1>`,
    cardTitle:data?.daot_banner_heading,
    cardPara:data?.daot_banner_description,
    bannerbtn: " Request More Details",
    bannerbtn2: "Enrol Today​",
  };

  const cardContent = [
    {
      'bgImg': '/images/hover1.jpg',
      'contentHead': "Live Online Sessions",
      'contentBody': ""
    },
    {
      'bgImg': '/images/hover2.jpg',
      'contentHead': "Interactive Q&A",
      'contentBody': ""
    },
    {
      'bgImg': '/images/hover3.jpg',
      'contentHead': "Real-World Scenarios",
      'contentBody': ""
    }
  ]

  const statData = {
    heading:"100 years",
    description: "Combined Expertise", 
    heading2:"100+",
    description2: "Companies Trained", 
    heading3:"20,000+",
    description3: "Employees Trained" 
  }

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
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.daot_banner_image} />
      <CourseDescriptionRow course={courseData}/>
      <div className="internal-service-page" id="cyber-sec-course">
      <ServiceSlider />

        <section
          className="award-sec"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="card-hover-cards">
              {
                cardContent?.map((item, i) => {
                  return (
                    <CardHover key={i} cardDeatils={{
                      bgImg: item?.bgImg,
                      contentHead: item?.contentHead,
                      contentBody: item?.contentBody
                    }} />
                  )
                })
              }
            </div>
          </Container>
        </section>
  
        
        <IconList
          data={data?.daot_course_list}
          heading={data?.daot_course_heading}
          padding={""}
        />

        <ModuleList
          data={data?.daot_outcomes_list}
          heading={data?.daot_outcomes_heading}
          subHeading = {data?.daot_outcomes_description}
          padding={""}
        />
        <PaymentDetail payData={paymentData}/>

        <GuranteeJob />

        <Statcards data={statData}/>

          <section className="award-sec sec-padding bg-light">
          <Container>
            <div className="complex-chng-des reverse">
              <div className="cmpx-chng-des">
                <h2>{data?.daot__partner_heading}</h2>
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.daot__partner_description}}
                >                 
                </div>
              </div>
              <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.daot_partner_image} alt="daot_partner_image" />
              </div>
            </div>
          </Container>
        </section> 

        <section className="award-sec sec-padding-top" style={{backgroundColor: '#fff'}}>
          <Container>
            <div className="complex-chng-des">
            <div className="cmpx-img-card img_design">
                <img  loading="lazy"  width="" height=""   src={data?.daot_about_image} alt="daot_about_image" />
              </div>
              <div className="cmpx-chng-des">
                <h2>{data?.daot_about_heading}</h2>
                <div className="ltd-case-description mt-md-4 mt-3"
                  dangerouslySetInnerHTML={{__html: data?.daot_about_description}}
                >                 
                </div>
              </div>
             
            </div>
          </Container>
        </section>   
        <FAQDynamic bg={"#fff"} padding="top" heading={data?.faq_heading} list={data?.faq_list}/>
        <TestimonialV2 customClass="pb-0"/>
        <SubmitRFP />
        <section
          className="story-head sec-padding"
        >
          <Container>
            <div className="client-stories">
              <h2 className="sec-heading">Related Courses</h2>
              <div className="story-card-wpr">
                    <RelatedCoursesCard
                      img={'/images/recordImg3.png'}
                      title={"Cyber Security Training Online"}
                      detail={"Cyber security training online courses, developed by, IG-Smart Ltd the UK’s “Best Cyber Security Consultancy Firm” – 2019, 2020, and 2020. Delivered live by using real-world scenarios and ethical hacking demonstrations to optimise your cyber security awareness. "}
                      link={false}
                      pageLink="/cyber-security-training"
                    />
                    <RelatedCoursesCard
                      img={'/images/coursesBan.png'}
                      title={"GDPR Training Online"}
                      detail={"GDPR Training Online. Developed using real-world scenarios by the “GDPR Consultancy of the Year” – 2020 and 2021. Delivered to you live online, in an interactive and engaging manner by IG-Smart Ltd’s world-class GDPR Consultants/Data Protection Officers. We provide GDPR training for employees and executives, as well as specialist Data Protection Officer training and NHS GDPR training for people working with sensitive patient data."}
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

export default DAOTrainingOnline;
