'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import Link from 'next/link';
import { TestimonialV2 } from "../Components/TestimonialV2";

export default function OurLeadership() {
  var bannerContent = {
    title: "<h1>Meet the IG-Smart Team</h1>",
    cardTitle: "Driving Innovation for a Safe & Secure Digital World",
    cardPara:
      "At IG-Smart Ltd, our success story is not just about our services; it's about the dedicated and diverse team behind them. Established in 2009, we've assembled a multidisciplinary group of experts who share our passion for positive global change and sustainable development. Our mission is to empower socially responsible organisations to navigate the digital landscape securely, lawfully, and responsibly. Meet the brilliant minds that make IG-Smart the trailblazing consultancy it is today",
  };

  return (
    <>
      <Banner bannerCnt={bannerContent} banImg={'/images/leaderBan.png'} />
      <section className="about7-team sec-padding">
        <Container>
          <div className="leadership-team">
            <h2 className="sec-heading mb-0">Our People</h2>
            <p className="sub-heading mb-4">
              Our team comprises multidisciplinary data privacy, cyber security,
              clinical safety, digital innovation, & resourcing experts.
            </p>
            <div className="leader-card-wpr">
              <Link prefetch={true} href={"/team-detail/michael"} className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team1" src='/images/team/team1.jpeg' />
                  </div>
                  <div className="leader-details">
                    <h5>Michael Abtar</h5>
                    <h6 className="mb-0">
                      CEO and Founder of Award-Winning Data Privacy
                    </h6>
                    <h6 className="leader-ser">
                    Strategic Board & Government Advisor | International Keynote Speaker | Visionary Team Leader
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'2img" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'3img" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/claire" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team8" src={'/images/team/team8.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Claire Griffin</h5>
                    <h6 className="mb-0">BA (Hons)</h6>
                    <h6 className="leader-ser">
                    Talent & Team Wellness Partner
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'1img" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'22img" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'34img" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/bright" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team7" src={'/images/team/team7.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Dr. Bright G. Mawudor</h5>
                    <h6 className="mb-0">PhD</h6>
                    <h6 className="leader-ser">
                      Senior Cyber Security Consultant
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="img" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon3.svg" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/shaista" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="profile1img" src={'/images/team/team3.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Shaista Peart</h5>
                    <h6 className="mb-0">BA (Hons), CIPPE</h6>
                    <h6 className="leader-ser">
                    Senior Data Protection & Privacy Professional | Healthcare Information Governance Specialist
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/ashantel" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team6" src={'/images/team/team6.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Ashantel Lachhani</h5>
                    <h6 className="mb-0">LLB (Hons) CIPP/E CIPM FIP</h6>
                    <h6 className="leader-ser">
                      Data Protection Luminary | Legal & Compliance Expert |
                      Privacy Advocate
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon3.svg'" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/himanshu" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team4" src={'/images/team/team4.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Himanshu Desai</h5>
                    <h6 className="mb-0">MSc, MBA</h6>
                    <h6 className="leader-ser">
                      Health Informatics Professional | Strategic Leader |
                      Healthcare Transformer
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon3.svg'" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/loice" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team9" src={'/images/team/loice.jpeg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Loice Kerubo Nyaribo</h5>
                    <h6 className="leader-ser">
                      Kenyan-Qualified Advocate | Technology, Media, and
                      Telecommunications Law
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon3.svg'" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>

              <Link prefetch={true} href="/team-detail/marynelle" className="leader-card">
                <div className="leader-profile">
                  <div className="leader-profile-img">
                    <img  loading="lazy"  width="" height=""   alt="team2" src={'/images/team/team2.jpg'} />
                  </div>
                  <div className="leader-details">
                    <h5>Marynelle Li</h5>
                    <h6 className="leader-ser">
                      Executive Assistant & Marketing Coordinator
                    </h6>
                    <div className="about7-social-icons">
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon1.svg'" src={'/images/icon1.svg'} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="" src={"/images/icon2.svg"} />
                      </a>
                      <a href="">
                        <img  loading="lazy"  width="" height=""   alt="/images/icon3.svg'" src={'/images/icon3.svg'} />
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="sec-padding bg-light">
        <div className="container">
          <div className="complex-chng-des chng-des-md content_card">
            <div className="cmpx-img-card simple_Img team-img">
              <img  loading="lazy"  width="" height=""   src={'/images/59-min.jpg'} className="img-fluid cover" alt="/images/icon3.svg" />
            </div>
            <div className="cmpx-chng-des">
              <div
                className="ltd-case-description custom-list"
                style={{ gap: 0 }}
              >
                <h2 className="mb-2">Our Collaborative Approach </h2>
                <p>
                  At IG-Smart Ltd, we believe that true innovation and
                  problem-solving are achieved through collaboration. Our team
                  is a blend of lawyers, data protection officers,
                  technologists, cybersecurity professionals, clinical safety
                  experts, and health informatics specialists. With a wealth of
                  qualifications, including MBA's, MSc's, Post Graduate Diplomas
                  in Law, ISO 27001 certifications, and Certified Ethical
                  Hackers, we approach challenges from every angle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding ">
        <div className="container">
          <div className="complex-chng-des chng-des-md content_card reverse">
            <div className="cmpx-chng-des">
              <div
                className="ltd-case-description custom-list"
                style={{ gap: 0 }}
              >
                <h2 className="mb-2">Diversity Matters</h2>
                <p>
                  Diversity is at the heart of our team. We proudly speak
                  multiple languages, including English, French, Arabic,
                  Gujarati, Urdu, Pilipino, Swahili, Yoruba, Ibo, and Twi. Our
                  diversity fuels creativity and enables us to connect with
                  clients worldwide.
                </p>
              </div>
            </div>
            <div className="cmpx-img-card simple_Img team-img">
              <img  loading="lazy"  width="" height=""   src={'/images/91-min.jpg'} className="img-fluid cover" alt="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding bg-light">
        <div className="container">
          <div className="complex-chng-des chng-des-md content_card">
            <div className="cmpx-img-card simple_Img team-img">
              <img  loading="lazy"  width="" height=""   src={"/images/102-min.jpg"} className="img-fluid cover" alt="simple_Img1" />
            </div>
            <div className="cmpx-chng-des">
              <div
                className="ltd-case-description custom-list"
                style={{ gap: 0 }}
              >
                <h2 className="mb-2">Join Us on the Journey</h2>
                <p>
                  As a team, we've earned accolades such as the Best Cyber
                  Security Consultancy (2019-2023) and GDPR Consultancy of the
                  Year (2020-2023). Our commitment to knowledge leadership,
                  innovation, and excellence drives us forward.
                </p>
                <p>
                  Partner with IG-Smart Ltd for a smarter, safer, and more
                  sustainable digital world. Visit our website or call{" "}
                  <a href="tel:+44 0 20 7167 4268">+44 0 20 7167 4268</a>. For
                  inquiries, reach out to{" "}
                  <a href="mailto:info@ig-smart.com">info@ig-smart.com</a>, and
                  let's embark on a journey toward digital transformation and
                  responsible data stewardship together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
      <TestimonialV2 />
    </>
  );
};
