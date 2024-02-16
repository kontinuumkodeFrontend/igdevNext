import React from "react";

export const CourseDescriptionRow = ({course}) => {
  return (
    <section className="course-detail-sec">
      <div className="container">
        <div className="course-detail-box">
          <div className="course-info">
            <p>What you will learn? </p>
            <h6>{course?.heading}</h6>
          </div>
          <div className="course-info">
            <p>Duration</p>
            <h6>{course?.duration}</h6>
          </div>          
          <div className="course-info">
            <p>Price</p>
            <h6>{course?.price}</h6>
          </div>
          <div className="course-info">
            <p>Format</p>
            <h6>{course?.format}</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
