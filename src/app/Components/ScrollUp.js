import React, { useState, useEffect } from "react";
import upArrow from "../Assets/Images/up-arrow.png";
import { useLocation  } from "react-router-dom";
import { logPageView } from "./GoogleAnalytics";

export const ScrollUp = ({link}) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollY + windowHeight >= (documentHeight / 2)) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    logPageView();
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, [window]);

  return (
    <div className={`up_arw ${visible ? '' : 'd-none'}`}>
      <div onClick={() => scrollToTop()}>
        <img  loading="lazy"  width="" height=""   src={upArrow} alt="upArrow" className="img-fluid" />
      </div>
    </div>
  );
};
