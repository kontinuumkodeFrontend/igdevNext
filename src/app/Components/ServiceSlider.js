import React from "react";
import { ImageSlider } from "../Features/ImageSlider";
import { IMAGE_SLIDER } from "../services/Url";
import { useCustomGet } from "../services/Service";

const ServiceSlider = (props) => {
  var imgArr = [];

  const {
    data, 
    isLoading
  } = useCustomGet(IMAGE_SLIDER);

  return (
    <>
      <div className="slider-home-vciso">
        {isLoading ?
          <div className="sec-padding text-center"><div className="spinner-border " role="status">
            <span className="visually-hidden">Loading...</span>
          </div></div> :
          <ImageSlider
            setting={{
              dots: false,
              infinite: true,
              autoplay: true,
              arrows: true,
              speed: 500,
              slidesToShow: 5,
              slidesToScroll: 2,
              autoplaySpeed: 1500,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}
            items={data?.logo_image?.length > 0 ? data?.logo_image : imgArr}
            containerFluid={false}
          />}
      </div>
    </>
  );
};

export default ServiceSlider;
