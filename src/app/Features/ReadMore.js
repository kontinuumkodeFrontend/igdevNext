import React, { useState } from "react";
const ReadMore = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? props.des.slice(0, 108) : props.des}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? (
            <span>Read More</span>
        ) : (
          <span>Read Less</span>
        )}
      </span>
    </p>
  );
};

export default ReadMore;
