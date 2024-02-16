'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import { POSTS, POST_ACF } from "../services/Url";
import { get, postGet } from "../services/Service";
import moment from "moment";
import { Loader } from "../Components/Loader";
import BlogCard from "../Components/BlogCard";
import { usePathname } from "next/navigation";
import { HubspotSection } from "../Components/HubspotSection";

const Blog = () => {
  const pathName = usePathname();
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({});
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  var bannerContent = {
    title: `<h1>${postData?.blog_banner_main_heading}</h1>`,
    cardTitle: postData?.blog_banner_heading,
    cardPara: postData?.blog_banner_description,
    butnCtn1: "Request a proposal",
    butnCtn2: "",
  };

  useEffect(() => {
    postGet(POSTS, setData, page, data, setIsLoading)  
  }, [page]);
  
  useEffect(() => {
    get(POST_ACF, setPostData,setIsLoading)
  }, []);

  const paginationHandler = () => {
    setPage(page+1)
  }

  return (
    <>
    {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={postData?.blog_banner_image} />
      <section className="blog-head sec-padding">
        <Container>
          <div className="blog-posts">
            <h2 className="sec-heading">{postData?.blogs_cards_heading}</h2>
            <div className="row">
              {data?.map((item, index) => {
                return (
                  <div className="col-lg-4 col-md-6" key={index}>
                    <BlogCard
                      key={index}
                      id={item?.id}
                      img={item?._embedded["wp:featuredmedia"]["0"].source_url}
                      description={item?.title?.rendered}
                      date={moment(item.date).format("MMMM Do YYYY, h:mm:ss a")}
                    />                    
                  </div>
                );
              })}
            </div>
            
          </div>
          <div className="blog-action mt-5">
              <button className="btn-design" onClick={paginationHandler}>Show More</button>
            </div>
        </Container>
      </section>
     <div id="hubspot">
        <HubspotSection />
     </div>
    </>
  );
};

export default Blog;
