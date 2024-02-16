'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useCustomQuery, useCustomGet } from "../services/Service"; 
import { CLIENT_STORIES, CLIENT_STORIES_PAGE } from "../services/Url";
import { TestimonialV2 } from "../Components/TestimonialV2";
import Banner from "../Components/Banner";
import { Loader } from "../Components/Loader";
import StoryCard from "../Components/StoryCard";

export const ClientStory = () => {
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  
  const {
    data: customGetData, 
    isLoading: isCustomGetLoading
  } = useCustomGet(CLIENT_STORIES_PAGE);
  
  const {
    data: storiesData, 
    isLoading: isQueryLoading,
    error:successStoryError
  } = useCustomQuery(CLIENT_STORIES, page);

  const bannerContent = {
    title: `<h1>${customGetData?.client_story_banner_main_heading}</h1>`,
    cardTitle: customGetData?.client_story_banner_heading,
    cardPara: customGetData?.client_story_banner_content,
    butnCtn1: "Request a proposal",
    butnCtn2: "Read More",
  };

  const pagingHandler = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (storiesData && Array.isArray(storiesData)) { 
      setAllData((prevData) => [...prevData, ...storiesData]);
    }
  }, [storiesData, page]);


 
  return (
    <>
      {isCustomGetLoading ? <Loader /> : ""}
      <Banner bannerCnt={bannerContent} banImg={customGetData?.client_story_banner_image} />
      <section className="story-head sec-padding">
        <Container>
          <div className="client-stories">
            <h2 className="sec-heading mb-3">CLIENT SUCCESS STORIES</h2>
            <div className="description max-content mb-4 text-center">
              {/* Your description content */}
            </div>
            <div className="story-card-wpr">
              {allData?.length > 0 && allData?.map((item, index) => (
                <StoryCard key={index} storyItem={item} url={CLIENT_STORIES} />
              ))}
            </div>
            <div className="btn_grp btn_center">
             {
              !successStoryError && 
              <button
                className="btn-design"
                onClick={pagingHandler}
                disabled={isQueryLoading}
              >
                {isQueryLoading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  "Load more success stories"
                )}
              </button>}
              {
                successStoryError && <p className="text-center fw-bold color-primary">! No more Success Stories found</p>
              }
            </div>
          </div>
        </Container>
      </section>
      <TestimonialV2 />
    </>
  );
};
