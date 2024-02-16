'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  STORE,
  WOOCOMERCE_API_URL,
} from "../services/Url";
import { get } from "../services/Service";
import { Loader } from "../Components/Loader";
import axios from "axios";
import RelatedCoursesCard from "../Features/RelatedCoursesCard";
import { toast } from "react-toastify";
import InnerBanner from "../Components/InnerBanner";

export default function Store(){
  const dpoImg2 = "/images/dpoImg2.png";
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [noproducts, setNOProducts] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    get(STORE, setData, setIsLoading);

    axios
      .get(WOOCOMERCE_API_URL+"?page="+page, {
        auth: {
          username: CONSUMER_KEY,
          password: CONSUMER_SECRET,
        },
      })
      .then((response) => {
        if(response.data.length > 0){
          let arr = []
          arr = products.concat(response.data);
          setProducts(arr)
        }else{
          toast.error('no data found');
          setNOProducts(false)
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [page]);

  const pagingHandler = () => {
    setPage(page+1);
  }

  var bannerContent = {
    cardTitle: "Course",
    cardPara: "",
  };

  return (
    <>
      {isLoading ? <Loader /> : ""}
      <InnerBanner
        bannerCnt={bannerContent}
        banImg={data?.store_banner_background_image}
      />
      <section
        className="story-head sec-padding"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
          <div className="client-stories">
            <div className="story-card-wpr store_cards">
              {products?.map((item, index) => {
                return (
                  <RelatedCoursesCard
                    key={item?.id}
                    img={
                      item?.images?.length > 0 ? item?.images[0]?.src : dpoImg2
                    }
                    title={item?.name}
                    detail={item?.description}
                    price={item?.price_html}
                    hideDec={true}
                    id={item?.id}
                    link={true}
                  />
                );
              })}
            </div>
            {noproducts && <div className="btn_grp btn_center">
              <button className="btn-design" onClick={pagingHandler}>
                  {isLoading ? 
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                      </div> :
                    "Load more Course"
                  }
              </button>
          </div>}
          </div>
        </Container>
      </section>
    </>
  );
};
