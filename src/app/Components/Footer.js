'use client'
import React from "react";
import { Container } from "react-bootstrap";
import CookieConsent from "react-cookie-consent";
import Link from 'next/link';
import Script from 'next/script'

const Footer = () => {
  return (
    <footer className="footer-section">
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></Script>
      <CookieConsent
        location="bottom"
        enableDeclineButton
        flipButtons
        buttonText="Allow all cookies"
        declineButtonText="Use necessary cookies only"
        cookieName="myAwesomeCookieName3"
        expires={999}
      >
        <div className="cookie">
          <div className="cookie_inr">
            <div className="cookie_ctnt">
              <h5>This website uses cookies</h5>
              <p>
                Unlock Your Tailored Insights: Enhance Your Experience and
                Expertise! 🚀 Embrace a personalised journey through data
                privacy, cyber security, compliance, and technology. Allow all
                cookies for exclusive, industry-specific insights that cater to
                your interests. Join us in fostering a safer digital world. Tap
                'Allow' for a smarter online adventure! Your data will be
                respected and processed in accordance with our{" "}
                <Link prefetch={true} href="/privacypolicy" className="color-secondry">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link prefetch={true} href="/cookie" className="color-secondry">
                  Cookie Policy
                </Link>
                .​
              </p>
            </div>
          </div>
        </div>
      </CookieConsent>
      <Container>
        <div className="row">
          <div className="col-lg-3 col-sm-6">
            <p className="fz-28">About Us</p>
            <ul className="ftr-service-list">
              <li>
                <Link prefetch={true} href="/ourvalue">Our Values & Mission</Link>
              </li>
              <li>
                <Link prefetch={true} href="/ourteam">Our Team</Link>
              </li>
              <li>
                <Link prefetch={true} href="/oursdg">Our SDG's</Link>
              </li>
              <li>
                <Link prefetch={true} href="/career">Careers</Link>
              </li>
              <li>
                <Link prefetch={true} href="/investor">Investors</Link>
              </li>
              <li>
                <Link prefetch={true} href="/media-enquiry">Media Enquiries</Link>
              </li>
              <li>
                <Link prefetch={true} href="/speaker-enquiry">Speaker Enquiries</Link>
              </li>
              <li>
                <Link prefetch={true} href="/legal-and-compliance">Legal & Compliance</Link>
              </li>
              <li>
                <Link prefetch={true} href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6">
            <p className="fz-28">Our Services</p>
            <ul className="ftr-service-list">
              <li>
                <Link prefetch={true} href="/gdpr-auditors-services">
                  GDPR Consultancy services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/gdpr-nhs-training">GDPR Training Online</Link>
              </li>
              <li>
                <Link prefetch={true} href="/nhs-information-governance-consultancy">
                  NHS DSP Toolkit Compliance services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/dpo-services">Outsourced DPO services</Link>
              </li>
              <li>
                <Link prefetch={true} href="/iso-27001-audit-service">
                  ISO 27001 Internal Audit services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/iso-27001-certification-services">
                  ISO 27001 Certification services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/cyber-essentials-certification-services">
                  Cyber Essentials Certification services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/cyber-security-consultancy-services">
                  Cyber Security Consultancy services
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-protection-consultancy-2">
                  Data Protection Consultancy services
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6">
            <p className="fz-28">Our Courses</p>
            <ul className="ftr-service-list">
              <li>
                <Link prefetch={true} href="/caldicott-guardian-training">
                  Caldicott Guardian Training
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/cyber-security-training">
                  Cyber Security Risk Awareness
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-assest-owner-training-online">
                  Data Asset Owner Training
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-protection-officer-training-online">
                  {" "}
                  Data Protection Officer Training
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-protection-officer-training-for-health-and-socialcare">
                  {" "}
                  DPO Training for Health and Social Care
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-protection-officer-training-for-pharma">
                  DPO Training for Pharma
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/data-privacy-training-for-pharma">
                  Data Privacy Training for Pharma
                </Link>
              </li>
              <li>
                <Link prefetch={true} href="/ig-gdpr-training">GDPR Training</Link>
              </li>
              <li>
                <Link prefetch={true} href="/store">Buy Course</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6">
            <p className="fz-28">Get In Touch</p>
            <ul className="ftr-get-list">
              <li>
                <Link
                  href={
                    "https://www.google.com/maps/place/20,+22+Wenlock+Rd,+London+N1+7GU,+UK/data=!4m2!3m1!1s0x48761b5f57e02493:0x3b1943bd88438f58?sa=X&ved=2ahUKEwiFrf-Uhrb_AhULRmwGHamWBLQQ8gF6BAgREAI"
                  }
                >
                  20-22 Wenlock Road, London N1 7TA
                </Link>
              </li>
              <li>
                <a href="tel:+44 (0) 20 7167 4268">+44 (0) 20 7167 4268</a>
              </li>
              <li>
                <a href="mailto: info@ig-smart.com">info@ig-smart.com</a>
              </li>
            </ul>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0127265867472!2d-0.0965643231303309!3d51.531326408954754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5f57e02493%3A0x3b1943bd88438f58!2s20%2C%2022%20Wenlock%20Rd%2C%20London%20N1%207GU%2C%20UK!5e0!3m2!1sen!2sin!4v1685613074391!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="IGS"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
      <div className="copyright">
        <Container>
          <div className="copy_inr">
            <div className="copy_inr_txt">
              IG Smart Ltd © 2023. All Rights Reserved.
              <Link prefetch={true} href="/term-and-condition">Terms of Use</Link>,
              <Link prefetch={true} href="/privacypolicy">Privacy Policy</Link>
              and <Link prefetch={true} href="/cookie"> Cookies</Link>
            </div>
            <div className="social-wpr">
              <div>Follow Us On:</div>
              <ul className="social-icons">
                <li>
                  <Link prefetch={true} href="https://www.facebook.com/igsmartuk/">
                    <img  loading="lazy"  width="" height=""   src={'/images/fbIcon.svg'} alt={'fbIcon'} />
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="https://www.linkedin.com/company/ig-smart/">
                    <img  loading="lazy"  width="" height=""   src={'/images/linkedIn.svg'} alt={'linkedIn'} />
                  </Link>
                </li>
                <li>
                  <Link prefetch={true} href="https://twitter.com/ig_smart?lang=en">
                    <img  loading="lazy"  width="" height=""   src={'/images/twitter.svg'} alt={'twitter'} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
