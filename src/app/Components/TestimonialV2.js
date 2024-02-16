'use client'
import React, { useState } from "react";
import Slider from "react-slick";
import { BaseUrl, TRAINING_TESTIMONIAL } from "../services/Url";
import Link from 'next/link';
import { useQuery } from "react-query";

export const TestimonialV2 = (props) => {
  const [page, setPage] = useState(1);

  var settings = {
    dots: false,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  const fetchTrainingTestimonials = async (page) => {
    const completeUrl = BaseUrl + TRAINING_TESTIMONIAL + `?_embed&page=${page}`;
    const response = await fetch(completeUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.json();
    } else if (response.status === 400) {
      throw new Error("No more records");
    } else if (response.status === 401) {
      throw new Error("Please Login again");
    } else {
      throw new Error(await response.json());
    }
  };

  const { data, isLoading, isError, error } = useQuery(
    ["trainingTestimonials", page],
    () => fetchTrainingTestimonials(page)
  );

  return (
    <section
      className={`testimonial-sec ${props.customClass} sec-padding-top sec-padding-bottom`}
    >
      <div className="container">
        <div className="privacy-content text-center max-content">
          <span className="fw-semibold sm-heading">
            What our customers say about us
          </span>
          <h2 className="fw-bold sub-hm-heading">Client Testimonials</h2>
        </div>
        {isLoading ? (
          <div className="sec-padding text-center">
            <div className="spinner-border " role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {props?.testimonialCards?.length > 0
              ? props?.testimonialCards?.map((item, i) => {
                  let text = `${item?.content?.rendered?.substring(0, 150)}...`;
                  return (
                    <div className="client_testimonial_card" key={i}>
                      <div className="ct_card_img">
                        <img  loading="lazy"  width="" height=""   src={'/images/home/testimonialComment.png'} alt="comment" />
                      </div>
                      <div className="ct_card_ctnt">
                        <div className="ct_card_desc">
                          {" "}
                          {item?.psa_testimonial_card_heading}
                        </div>
                        <p className="ct_card_name">
                          {item?.psa_testimonial_client_name}
                        </p>
                        <p className="ct_card_designation ">
                          {" "}
                          {item?.psa_testimonial_card_designation}{" "}
                        </p>
                        <Link prefetch={true} href={"/clientstory"} className="testimonial_btn">
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  );
                })
              : data?.map((item, i) => {
                  let text = `${item?.content?.rendered?.substring(0, 150)}...`;
                  return (
                    <div className="client_testimonial_card" key={i}>
                      <div className="ct_card_img">
                        <img  loading="lazy"  width="" height=""  
                          src={
                            item?._embedded
                              ? item?._embedded["wp:featuredmedia"]["0"]
                                  .source_url
                              : '/images/home/testimonialComment.png'
                          }
                          alt="comment"
                        />
                      </div>
                      <div className="ct_card_ctnt">
                        <div
                          className="ct_card_desc"
                          dangerouslySetInnerHTML={{ __html: text }}
                        ></div>
                        <p className="ct_card_name">{item?.title?.rendered}</p>
                        <p className="ct_card_designation ">
                          {" "}
                          {item?.acf?.job_title}{" "}
                          <b>{item?.acf?.organisation_name}</b>{" "}
                        </p>
                        <Link
                          href={
                            item?.acf?.link_with_casestudy
                              ? `/clientstorydetail/successstories/${item?.acf?.link_with_casestudy}`
                              : ""
                          }
                          className="testimonial_btn"
                        >
                          View Case Study
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </Slider>
        )}
      </div>
    </section>
  );
};
