'use client'
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Loader } from "./Loader";
import { useCustomQuery } from "../services/Service";
import { CLIENT_STORIES } from "../services/Url";
import Link from "next/link";
import StoryCard from "./StoryCard";

const Experience = ({ secData }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCustomQuery(CLIENT_STORIES, page);

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <section className="exper-company-sec sec-padding">
        <Container>
          <div className="exper-company-head">
            <h2 className="sec-heading">{secData?.heading}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: secData?.description }}
            ></div>
          </div>
          <div className="client-stories">
            <div className="story-card-wpr">
              {data?.length > 0 &&
                data?.map((item, index) => {
                  if (index < 3) {
                    return (
                      <StoryCard
                        key={index}
                        storyItem={item}
                        url={CLIENT_STORIES}
                      />
                    );
                  }
                })}
            </div>
            <div className="btn_grp btn_center">
              <Link prefetch={true} href={"/clientstory"} className="btn-design">
                Load More
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Experience;
