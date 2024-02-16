import React from "react";
import Link from 'next/link';

export const PDFButton = ({link}) => {
  const documentation = "/images/documentation.png";

  return (
    <div className={`dwl-pdf`}>
      <Link prefetch={true} href={link} target="_blank">
        <img  loading="lazy"  width="" height=""   src={documentation} alt="documentation" className="img-fluid" />
      </Link>
    </div>
  );
};
