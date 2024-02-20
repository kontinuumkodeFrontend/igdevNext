'use client'
import React, { useState, useEffect } from "react";
import { useRouter  } from "next/navigation";
import { logPageView } from "./GoogleAnalytics";

export const ScrollUp = ({link}) => {
  const upArrow = "/images/up-arrow.png";
  const pathname = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    logPageView();
  }, [pathname]);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  
  useEffect(() => {
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
  
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      };
    }
  }, []);

  return (
    <div className={`up_arw ${visible ? '' : 'd-none'}`}>
      <div onClick={() => scrollToTop()}>
        <img  loading="lazy"  width="" height=""   src={upArrow} alt="upArrow" className="img-fluid" />
      </div>
    </div>
  );
};
