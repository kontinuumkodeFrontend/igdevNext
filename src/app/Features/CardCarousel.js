import React from "react";
import Slider from "react-slick";


export const CardCarousel = ({ data }) => {
  const team1 = "/images/team/team1.jpeg";
const team2 = "/images/team/team2.jpg";
const team3 = "/images/team/team3.jpg";
const team4 = "/images/team/team4.jpg";
const team5 = "/images/team/team5.jpg";
const team9 = "/images/team/loice.jpeg";
const team6 = "/images/team/team6.jpg";
const placeholder = "/images/team/placeholder.png";
const team7 = "/images/team/team7.jpg";
const team8 = "/images/team/team8.jpg";
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    centerMode: true,
    slidesToShow: data ? 2 : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dummydata = [
    {
      itgc_card_client_name: "Michael Abtar",
      img: team1,
      itgc_card_client_description:
        "Michael Abtar is a highly accomplished professional with a wealth of experience and a track record of excellence in the fields of data privacy, governance, quality, cyber security, and clinical systems safety. As the CEO and Founder of a multi-award-winning consultancy, Michael has consistently delivered exceptional results and innovative solutions to a diverse range of clients. His qualifications, extensive experience, and notable awards underscore his exceptional expertise and leadership in the industry.",
      designation: "Strategic Board & Government Advisor | International Keynote Speaker | Visionary Team Leader",
      education: "CEO and Founder of Award-Winning Data Privacy",
    },
    {
      itgc_card_client_name: "Claire Griffin",
      img: team8,
      itgc_card_client_description:
        "Claire Griffin is a dedicated and compassionate professional with a diverse background in talent acquisition, coaching, mindfulness training, and executive resourcing. With over two decades of experience, Claire brings a unique blend of skills to her role as IG-Smart Ltd’s Associate Director of Executive Resourcing & Team Wellbeing.",
      designation:
        "Talent & Team Wellness Partner",
      education: "BA (Hons)",
    },
    {
      itgc_card_client_name: "Dr. Bright G. Mawudor",
      img: team7,
      itgc_card_client_description:
        "Just like art, technology is a soaring exercise of human ingenuity. I have always enjoyed bringing to insight imagination through driving technology advancements that form formidable solutions to problems in society.My career goes beyond making money. I believe it's a true expression of my passion, life purpose, and creativity. The result is that I am profoundly engaged, inquisitive, productive, and fulfilled.",
      designation: "Senior Cyber Security Consultant",
      education: "PhD",
    },
    {
      itgc_card_client_name: "Shaista Peart",
      img: team3,
      itgc_card_client_description:
        "Shaista Peart is a Certified Information Privacy Professional with extensive knowledge and experience in data protection and privacy compliance. As a pragmatic strategist, her aim is to equip businesses with risk and compliance strategies necessary for effective corporate governance.",
      designation: "Senior Data Protection & Privacy Professional | Healthcare Information Governance Specialist",
      education: "BA (Hons), CIPPE",
    },
    // {
    //   itgc_card_client_name: "Simon Bliss",
    //   img: team5,
    //   itgc_card_client_description:
    //     "Simon Bliss is a personable, confident, and technically proficient individual with a career spanning 32 years across diverse environments. He has excelled in various roles in software sales, technical strategic selling, consulting, enterprise architecture, and head of consulting, gaining extensive experience in business development, solution architecture, project and program management, and team leadership.Simon is known for his reliability, enthusiasm, and articulate communication skills. He possesses a positive attitude towards account management, business development, proposition development, solutions, technologies, and fostering productive relationships between teams and client decision-makers.",
    //   designation: "Enterprise Architect | IT Management | Technical Seller",
    //   education: "",
    // },
    {
      itgc_card_client_name: "Ashantel Lachhani",
      img: team6,
      itgc_card_client_description:
        "With over a decade of relentless dedication to the legal and compliance arena, I bring forth a profound understanding of data protection laws, including the General Data Protection Regulation (GDPR) and the Privacy and Electronic Communications Directive. My journey has been an odyssey through the realms of healthcare, property, direct marketing, and cutting-edge technologies such as AI and IoT.",
      designation:
        "Data Protection Luminary | Legal & Compliance Expert | Privacy Advocate",
      education: "LLB (Hons) CIPP/E CIPM FIP",
    },
    {
      itgc_card_client_name: "Himanshu Desai",
      img: team4,
      itgc_card_client_description:
        "With over 25 years of healthcare and health informatics expertise, I bring a wealth of knowledge in leadership, team management, and the design and implementation of health informatics solutions across various hospital settings. My journey, which has spanned continents and multiple prestigious institutions, has equipped me with a unique blend of skills that I now seek to leverage in senior leadership roles, focusing on management, organisational strategy, and hospital operational leadership.",
      designation:
        "Health Informatics Professional | Strategic Leader | Healthcare Transformer",
      education: "MSc, MBA",
    },
    {
      itgc_card_client_name: "Loice Kerubo Nyaribo",
      img: team9,
      itgc_card_client_description:
        "Loice Kerubo Nyaribo is a Kenyan-qualified advocate with a Master's Degree in Technology, Media, and Telecommunications Law from Queen Mary University of London. Loice combines her background in commercial law, privacy and data protection law, and technology law with exceptional interpersonal skills to excel in problem-solving and client-oriented roles.",
      designation:
        "Kenyan-Qualified Advocate | Technology, Media, and Telecommunications Law",
      education: "",
    },
    {
      itgc_card_client_name: "Marynelle Li",
      img: team2,
      itgc_card_client_description:
        "Marynelle Li is a dynamic and highly organised professional who excels in her role as an Executive Assistant & Marketing Coordinator. With a background in both administrative support and marketing, Marynelle brings a diverse skill set to her position, making her an invaluable asset to the team.",
      designation: "Executive Assistant & Marketing Coordinator",
      education: "",
    },
  ];
  return (
    <section className="card-carousel-sec">
      <div className="container-fluid p-0 m-0">
        <Slider {...settings}>
          {data &&
            data?.map((item, i) => {
              return (
                <div className="carousel-card" key={i}>
                  <div className="carousel-card-img">
                    <img  loading="lazy"  width="" height=""  
                      src={
                        "https://admin.ig-smart.com/wp-content/uploads/2019/08/expert.png"
                      }
                      alt="expert"
                    />
                  </div>
                  <div className="carousel-card-description">
                    <h4>{item?.itgc_card_client_name}</h4>
                    <p>{item?.itgc_card_client_description}</p>
                  </div>
                </div>
              );
            })}
          {!data &&
            dummydata?.map((item, i) => {
              return (
                <div className="carousel-card" key={i}>
                  <div className="carousel-card-img">
                    <img  loading="lazy"  width="" height=""   src={item?.img} alt="expert" />
                  </div>
                  <div className="carousel-card-description">
                    <h4>{item?.itgc_card_client_name}</h4>
                    <h6 className="card-profession">{item?.designation}</h6>
                    <h6>{item?.education}</h6>
                    <p>{item?.itgc_card_client_description}</p>
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
    </section>
  );
};
