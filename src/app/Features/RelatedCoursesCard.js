import React from "react";
import Link from "next/link";

const RelatedCoursesCard = (props) => {
  function removeTextPattern(text) {
    const pattern = /\[vc_row\]\[vc_column\]\[vc_column_text\]/g;
    return text.replace(pattern, "");
  }

  function limitWords(text, limit) {
    const cleanedContent = removeTextPattern(text);
    const words = cleanedContent.split(" ");
    if (words.length <= limit) {
      return cleanedContent;
    } else {
      const limitedText = words.slice(0, limit).join(" ");
      return limitedText + "...";
    }
  }

  return (
    <>
      <div className="story-card">
        <img  loading="lazy"  width="" height=""   src={props.img} alt={props.title} />
        <div className="story-card-body">
          <h5>{props.title}</h5>
          <div
            className="custom-list"
            dangerouslySetInnerHTML={{ __html: limitWords(props?.detail, 15) }}
          ></div>
          {props?.price && (
            <div className="mt-3 d-flex align-items-center">
              <p className="m-0 me-2 fw-bold">Price: </p>
              <p
                className="m-0"
                dangerouslySetInnerHTML={{ __html: props?.price }}
              ></p>
            </div>
          )}
          {props?.link && (
            <Link
              href={`/product-detail/${props?.id}`}
              className="btn-design mt-4"
            >
              Learn More
            </Link>
          )}
          {props?.pageLink && (
            <Link
              href={props?.pageLink}
              className="btn-design mt-4"
            >
              Learn More
            </Link>
          )}
          
        </div>
      </div>
    </>
  );
};

export default RelatedCoursesCard;
