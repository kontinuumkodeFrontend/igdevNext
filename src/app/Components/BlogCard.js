import React from "react";
import Link from "next/link";
import { WebShare } from "./WebShare";

const BlogCard = (props) => {
const BaseUrl = window.location.origin
  return (
    <div className="blog-card">
      <Link href={`/blogdetail/${props?.id}`}>
        {" "}
        <img  loading="lazy"  width="" height=""   src={props?.img} alt="blogdetail" />
      </Link>
      <Link href={`/blogdetail/${props?.id}`}>
        {" "}
        <h4>{props?.description}</h4>
      </Link>
      <p>
        {props?.date}{" "}
        <WebShare title={props?.description} url={`${BaseUrl}/blogdetail/${props?.id}`} />
      </p>
    </div>
  );
};

export default BlogCard;
