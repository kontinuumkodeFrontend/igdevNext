import React from "react";
import { Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <section className="faq-section sec-padding">
        <Container>
          <div className="faq-head">
            <h2 className="sec-heading">Frequently asked questions</h2>
            <p className="sub-heading"></p>
          </div>
          <div className="faq-accordian">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What positions are currently open at IG-Smart Ltd?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We have a variety of positions available, ranging from data
                    privacy consultants to cyber security analysts and clinical
                    systems safety experts. Contact us for the latest job
                    listings.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What qualifications and experience do you look for in
                    potential candidates?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We seek candidates with relevant degrees and certifications
                    in their respective fields, coupled with hands-on experience
                    in data privacy, cyber security, or clinical systems safety.
                    Industry expertise and a proactive approach to
                    problem-solving are highly valued.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How can I apply for a position at IG-Smart Ltd?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    To apply, visit our Careers page and navigate to the
                    specific job listing that interests you. Follow the
                    application instructions provided in the job description.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Do you offer internship or entry-level positions for recent
                    graduates?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Yes, we believe in nurturing fresh talent. We offer
                    internships and entry-level positions tailored to
                    individuals who are passionate about data privacy, cyber
                    security, and clinical systems safety. These opportunities
                    provide invaluable hands-on experience and mentorship.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    What is the work culture like at IG-Smart Ltd?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our work culture is collaborative, innovative, and driven by
                    a shared commitment to excellence. We encourage creativity,
                    continuous learning, and a dynamic exchange of ideas among
                    team members.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    Are remote or flexible work arrangements available?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We value flexibility and understand the importance of
                    work-life balance. Depending on the position and project
                    requirements, we may offer remote or flexible work options.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    How does IG-Smart Ltd support professional development?
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We invest in our team members' growth through training
                    programs, workshops, and access to cutting-edge industry
                    resources. We encourage certifications and offer
                    opportunities to expand expertise in data privacy, cyber
                    security, and clinical systems safety.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingeight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeight"
                    aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                    What sets IG-Smart Ltd apart from other consulting firms?
                  </button>
                </h2>
                <div
                  id="collapseeight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our specialisation in data privacy, cyber security, and
                    clinical systems safety is a unique blend that allows us to
                    offer comprehensive solutions. Our client-focused approach,
                    combined with deep industry knowledge, sets us apart as
                    trusted advisors.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    How does IG-Smart Ltd contribute to the community and
                    industry?
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    We are committed to advancing the field by sharing insights
                    through webinars, seminars, and industry events. We actively
                    contribute to thought leadership, contributing to the growth
                    of data privacy, cyber security, and clinical systems safety
                    domains.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    Can I expect opportunities for career growth and
                    advancement?
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Absolutely. We believe in recognising and rewarding talent.
                    Your contributions will be acknowledged and supported as you
                    progress within IG-Smart Ltd, taking on greater
                    responsibilities and challenges.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    What is the application and interview process like?
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Our application process typically involves submitting your
                    resume and cover letter online. Shortlisted candidates will
                    go through interviews, which may include technical
                    assessments and discussions with team members and
                    management.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwelve">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    How do I stay updated on job openings and company news?
                  </button>
                </h2>
                <div
                  id="collapseTwelve"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwelve"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    To stay informed about job openings, company news, and
                    industry insights, follow us on our social media channels
                    and subscribe to our newsletter on our website's Careers
                    page.
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </Container>
      </section>
    </>
  );
};

export default FAQ;
