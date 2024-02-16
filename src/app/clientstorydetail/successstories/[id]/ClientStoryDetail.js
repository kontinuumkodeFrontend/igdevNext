'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { clientDetailsGet } from "@/app/services/Service";
import { TestimonialV2 } from "@/app/Components/TestimonialV2";
import { Loader } from "@/app/Components/Loader";
import InnerBanner from "@/app/Components/InnerBanner";
import { usePathname } from "next/navigation";

export default function ClientStoryDetail() {
  const pathName = usePathname();
  let icon1 ="/images/users.svg";
  let banImg ="/images/bannerImg.png";
  const [data, setData] = useState([]);
  const [card, setCard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let paramArr = pathName.split('/')
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);

  useEffect(() => {
    clientDetailsGet(paramArr[2], setData, setIsLoading, paramArr[3]);
    clientDetailsGet(
      paramArr[2],
      setCard,
      setIsLoading,
      `${paramArr[3]}/?_fields=acf&acf_format=standard`
    );
  }, [paramArr[3]]);

  var bannerContent = {
    cardTitle: card?.acf?.our_client_heading,
    cardPara: data?.acf?.csdp_sub_heading,
  };
  return (
    <>
      {isLoading && <Loader />}
      <InnerBanner
        bannerCnt={bannerContent}
        banImg={
          card?.acf?.story_cover_image ? card?.acf?.story_cover_image : banImg
        }
      />

      {data?.title?.rendered || card?.acf?.our_client_descrition ? (
        <section className="target-seo sec-padding">
          <Container>
            {data?.title?.rendered && (
              <h2 className="sec-heading  text-center">
                {data?.title?.rendered}
              </h2>
            )}
            {card?.acf?.our_client_descrition && (
              <div
                className="sub-heading  text-center custom-list"
                dangerouslySetInnerHTML={{
                  __html: card?.acf?.our_client_descrition,
                }}
              ></div>
            )}
            <div className="simple_Img mt-5 text-center">
              <img  loading="lazy"  width="" height=""  
                src={card?.acf?.our_client_image}
                className="img-fluid"
                alt={"our_client_image"}
              />
            </div>

            {/* Counter Card */}
            {card?.acf?.cs_counter_box && (
              <div className="target-body">
                <div className="case-study-cards">
                  {card?.acf?.cs_counter_box?.length > 0 &&
                    card?.acf?.cs_counter_box?.map((item, i) => {
                      return (
                        <div className="case-study-card" key={i}>
                          <img  loading="lazy"  width="" height=""   src={icon1} alt="icon1" />
                          <h3>{item?.cs_counter_box_number}</h3>
                          <p>{item?.cs_counter_box_heading}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </Container>
        </section>
      ) : (
        ""
      )}
      {card?.acf?.our_challenge_content_box?.length > 0 && (
        <section
          className="award-sec sec-padding single-cstm-cards"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <h2 className="sec-heading">{data?.security_assessment_heading}</h2>
            {card?.acf?.our_challenge_content_box?.length > 0 &&
              card?.acf?.our_challenge_content_box?.map((item, i) => {
                if (i % 2 === 0) {
                  return (
                    <div
                      key={i}
                      className={
                        i > 1
                          ? "complex-chng-des chng-des-md reverse loop mt-lg-5 mt-3 content_card"
                          : "complex-chng-des chng-des-md content_card reverse loop"
                      }
                    >
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description custom-list">
                          {item?.our_challenge_headiing && (
                            <h3>{item?.our_challenge_headiing}</h3>
                          )}
                          {item?.our_challenge_content && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.our_challenge_content,
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                      <div className="cmpx-img-card simple_Img">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.our_challenge_image}
                          className="img-fluid"
                          alt="our_challenge_image"
                        />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="complex-chng-des chng-des-md  mt-lg-5 mt-3 content_card"
                      key={i}
                    >
                      <div className="cmpx-img-card simple_Img">
                        <img  loading="lazy"  width="" height=""  
                          src={item?.our_challenge_image}
                          className="img-fluid"
                          alt="our_challenge_image2"
                        />
                      </div>
                      <div className="cmpx-chng-des ">
                        <div className="ltd-case-description custom-list">
                          {item?.our_challenge_headiing && (
                            <h3>{item?.our_challenge_headiing}</h3>
                          )}
                          {item?.our_challenge_content && (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item?.our_challenge_content,
                              }}
                            ></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
          </Container>
        </section>
      )}

      <div className="bg-light">
        <TestimonialV2 />
      </div>
    </>
  );
};
