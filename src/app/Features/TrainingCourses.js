import React from "react";

const TrainingCourse = (props) => {
  return (
    <div className="training-course-card">
      <div className="img-quick-view">
        <img  loading="lazy"  width="" height=""   src={props.courseData.img} alt="courseData"/>
        <button>Quick View</button>
      </div>
      {(props.courseData.sale.length) > 0 && (
        <div className="sale-icon">{props.courseData.sale}</div>
      )}
      <div className="training-course-des">
        <p className="category">{props.courseData.category}</p>
        <a href="">
          <h5>{props.courseData.title}</h5>
        </a>
        <div className="price">
          <h4>
          {(props.courseData.price1) != 0 && (
            <span>{props.courseData.price1}</span>
          )}
            {props.courseData.price2}
          </h4>
        </div>
        <a href="javascript:void(0);">
          <h6>Learn More</h6>
        </a>
      </div>
    </div>
  );
};

export default TrainingCourse;
