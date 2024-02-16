import React from "react";
import { RWebShare } from "react-web-share";

export const WebShare = ({ url, title }) => {
  const share = "/images/share.png";
  
  return (
    <RWebShare
      data={{
        text: `${title + " " + url}`,
        url: url,
        title: "Share on Social media",
      }}
      onClick={() => console.log("shared successfully!", url)}
    >
      <button
        onClick={(e) => {e.preventDefault()}}
        style={{
          background: "#0000",
          border: "0",
        }}
        title="share link"
      >
        <img  loading="lazy"  width="" height=""  
          src={share}
          className="w-100"
          alt="share"
        />
      </button>
    </RWebShare>
  );
};
