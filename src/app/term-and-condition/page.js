'use client'
import React from "react";
import InnerBanner from "../Components/InnerBanner";
import { Container } from "react-bootstrap";

export default function TermAndCondition() {
  const careerBan = "/images/careerBan.png";
  var bannerContent = {
    cardTitle: "Terms and Conditions of Website Use",
    cardPara: "",
  };
  return (
    <>
      <InnerBanner bannerCnt={bannerContent} banImg={careerBan} />
      <div className="internal-service-page" id="cyber-essen-certi-service">
        <Container>
          <div className="privacy custom-list sec-padding">
            <h5 className="text-center mb-5">
              <b>
                These Terms and Conditions ('Agreement') govern your use of
                [Your Company Name] ('Company') website, including any content,
                services, products, and materials available on or through the
                website. By accessing or using the website, you agree to abide
                by these terms. Please read this Agreement carefully before
                using the website.
              </b>
            </h5>
            <h5 className="mb-3">
              <b>1. Acceptance of Terms</b>
            </h5>
            <p className="mt-3">
              By accessing and using the website, you agree to these Terms and
              Conditions. If you do not agree with any part of this Agreement,
              you are prohibited from using the website.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>2. Services Offered</b>{" "}
            </h5>
            <p className="mt-3">
              The Company provides management consultancy services specializing
              in data privacy, cyber security, and clinical systems and device
              safety advice, training, audit, gap analysis, and support
              services. The Company also offers online training, policies,
              procedures, toolkits, and templates ("Products").
            </p>

            <h5 className=" mt-4 mb-3">
              <b>3. User Obligations</b>
            </h5>
            <p className="mt-3">
              You agree to use the website and its content only for lawful
              purposes and in accordance with these Terms. You will not engage
              in any activity that may harm the website or compromise its
              security.
            </p>
            <h5 className=" mt-4 mb-3">
              <b>4. Intellectual Property</b>
            </h5>
            <p className="mt-3">
              All content, trademarks, logos, and intellectual property on the
              website are owned by the Company or its licensors. You may not
              use, modify, or distribute any content without prior written
              consent.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>5. Privacy and Data Protection</b>
            </h5>
            <p className="mt-3">
              The Company's Privacy Policy outlines how user data is collected,
              used, and protected. By using the website, you consent to the
              practices outlined in the Privacy Policy.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>6. Use of Products</b>
            </h5>
            <p className="mt-3">
              Products purchased from the website are subject to specific terms
              and conditions, which will be provided at the time of purchase.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>7. Disclaimer of Warranties</b>
            </h5>
            <p className="mt-3">
              The website and its content are provided "as is" without any
              warranties, express or implied. The Company does not warrant that
              the website will be error-free or that access will be
              uninterrupted.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>8. Limitation of Liability</b>
            </h5>
            <p className="mt-3">
              The Company shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising from your
              use of the website or its content.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>9. Third-Party Links</b>
            </h5>
            <p className="mt-3">
              The website may contain links to third-party websites. The Company
              is not responsible for the content, privacy practices, or
              availability of such sites.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>10. Termination</b>
            </h5>
            <p className="mt-3">
              The Company reserves the right to terminate or suspend your access
              to the website at any time, without notice, for any reason.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>11. Governing Law</b>
            </h5>
            <p className="mt-3">
              This Agreement shall be governed by and construed in accordance
              with the laws of England and Wales. Any legal actions arising from
              or related to this Agreement shall be subject to the exclusive
              jurisdiction of the courts of England and Wales.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>12. Changes to Terms</b>
            </h5>
            <p className="mt-3">
              The Company reserves the right to modify or update these Terms and
              Conditions at any time. Any changes will be effective immediately
              upon posting on the website.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>13. Entire Agreement</b>
            </h5>
            <p className="mt-3">
              This Agreement constitutes the entire agreement between you and
              the Company regarding your use of the website and supersedes any
              prior agreements.
            </p>

            <h5 className=" mt-4 mb-3">
              <b>14. Contact Information</b>
            </h5>
            <p className="mt-3">
              For any questions or concerns about these Terms and Conditions,
              please contact us at{" "}
              <a href="mailto:info@ig-smart.com">info@ig-smart.com </a>
              By using this website, you acknowledge that you have read,
              understood, and agreed to abide by these Terms and Conditions. If
              you do not agree to these terms, please do not use the website.
              Your use of the website signifies your acceptance of this
              Agreement.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};
