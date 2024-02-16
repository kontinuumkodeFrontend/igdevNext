import React from "react";
import { Container } from "react-bootstrap";

const InnerBanner = (props) => {
  return (
    <section
      className={"inner-bnr banner-section"}
      style={{
        backgroundImage: `url(${props.banImg})`,
        backgroundPosition: "right",
      }}
    >
      <Container>
        <div className="banner_header">
          {props?.banImg ? (
            <h1 className="fw-bold  mb-3 text-uppercase">
              {props?.bannerCnt?.cardTitle}
            </h1>
          ) : (
            <h1 className="fw-bold  mb-3 text-uppercase" style={{color: '#0000'}}>Heading</h1>
          )}
          <div
            className="fz-18"
            dangerouslySetInnerHTML={{ __html: props?.bannerCnt?.cardPara }}
          ></div>
        </div>
      </Container>
    </section>
  );
};

export default InnerBanner;
