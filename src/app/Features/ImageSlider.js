import React from "react";
import Slider from "react-slick";

export const ImageSlider = ({setting, items, containerFluid}) => {

  return (
    <section className="img-carousel-sec sec-padding">
      <div className={containerFluid ? "container-fluid" : "container"}>
        <Slider {...setting}>
          {
            items?.map((item, i) => {
              return(
                <div className="carousel-img" key={i}>
                  <img  loading="lazy"  width="" height=""   src={item?.logo_image_item} alt="logo_image_item" />
                </div>      
              )
            })
          }          
        </Slider>
      </div>
    </section>

  );
};