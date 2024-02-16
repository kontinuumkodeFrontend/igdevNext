import React from "react";
import { Container } from "react-bootstrap";
import SpeackAdvisor from "./SpeackAdvisor";
import Link from "next/link";

const BannerEbook = ({bannerCnt}) => {
  return (
    <section
      className={"ebanner-section"}
      style={{ backgroundImage: `url('${bannerCnt?.backgroundImage}')` }}
    >
      <Container>
        <div className="ebk-inr">
          <div className="book_bk">
            <img  loading="lazy"  width="" height=""    src={bannerCnt?.image} alt={'bannerCnt.image'} className="w-100" />
          </div>

          <div className="banner-box ebanner-box">
          <h1 className="fw-bold mb-3 h2">{bannerCnt?.heading}</h1>
            <div className="banner-description align-items-start">
              <h2 className="fw-bold h4">{bannerCnt?.smallHeading}</h2>
              <div>
                <p className="my-4">{bannerCnt?.description}</p>
              </div>
              <div className="prd_price">
                {bannerCnt?.price}
              </div>
              <div className="bttn-group">
                {bannerCnt?.btnLink ? <Link prefetch={true} className="btn-design px-4 green" href={bannerCnt?.btnLink}>Buy Now</Link>:
                <SpeackAdvisor name={"Request a Proposal"} />}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BannerEbook;
