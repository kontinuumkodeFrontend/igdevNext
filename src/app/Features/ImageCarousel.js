import React from "react";
import Slider from "react-slick";

export const ImageCarousel = (props) => {
  var settings = {
    dots: props?.setting?.dots,
    arrows: props?.setting?.arrow,
    infinite: true,
    autoPlay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 381,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="img-carousel-sec sec-padding health-care-logo">
      <div className="container">
        <Slider {...settings}>
          {
            props?.items?.map((item, i) => {
              return(
                <div className="carousel-img" key={i}>
                  <img  loading="lazy"  width="" height=""   src={item?.sdg_brand_image_item} alt="sdg_brand_image_item" />
                </div>      
              )
            })
          }          
        </Slider>
      </div>
    </section>
  );
};
