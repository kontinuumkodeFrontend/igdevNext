'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  WOOCOMERCE_API_URL,
} from "../../services/Url";
import { Loader } from "../../Components/Loader";
import axios from "axios";
import InnerBanner from "../../Components/InnerBanner";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { CoursePagesID } from "../../services/Constants";

export default function ViewProduct(){
  const dpoImg = "/images/dpoImg2.png";
  const dpoImg2 = "/images/blogBan.png";
  const pathName = usePathname();
  const router = useRouter();
  const navigate =(url)=>{
    router.push(url)
  }
  const pathArr = pathName.split('/')
  let location 
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const courseData = location?.state?.courseData ;
  const payData = location?.state?.payData ;

  useEffect(() => {
    axios
      .get(WOOCOMERCE_API_URL+"/"+ pathArr[2], {
        auth: {
          username: CONSUMER_KEY,
          password: CONSUMER_SECRET,
        },
      })
      .then((response) => {       
          setData(response.data);  
          setIsLoading(false)     
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false)
      });
  }, []);


  var bannerContent = {
    cardTitle: data?.name,
    cardPara: "",
  };

  function removeTextPattern(text) {
    const pattern = /\[vc_row\]\[vc_column\]\[vc_column_text\]/g;
    if(text){
        return text.replace(pattern, "");
    }
  }
  
const checkoutHandler = () => {
    navigate(`/checkout/${pathArr[2]}`, { state: {courseData, payData} });
}

const isStorePage = () => {
  if(CoursePagesID?.includes(pathArr[2])){
    return "Book Now"
  }else{
    return "Buy Now"
  }
}
  return (
    <>
      {isLoading ? <Loader /> : ""}
      <InnerBanner
        bannerCnt={bannerContent}
        banImg={dpoImg2}
      />
      <section
        className="story-head sec-padding-top"
        style={{ backgroundColor: "#fff" }}
      >
        <Container>
            <div className="row">
                <div className="col-md-6">
                    <div className="prt-img mb-md-0 mb-4">
                        <img  loading="lazy"  width="" height="" src={ data?.images?.length > 0 ? data?.images[0]?.src : dpoImg} className="w-100" alt={"dpoImg"} />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="prt-data">
                            <h5>{data?.name}</h5>                          
                            <div className="" dangerouslySetInnerHTML={{__html: data?.short_description}}></div>
                            <div className="mt-3 d-flex align-items-center">
                                <p className="m-0 me-2 fw-bold">Price: </p>
                                <p
                                className="m-0 smpl-prc"                              
                                >{ "£" + data?.regular_price}</p>
                            </div>
                        
                            <div className="mt-3 d-flex align-items-center">
                                <p className="m-0 me-2 fw-bold">Category: </p>
                                {data?.categories?.map((item,i) => {
                                    return(
                                        <p
                                        key={i}
                                        className="m-0"
                                        
                                        >{item?.name}{data?.categories?.length > 1 && ", "}</p>
                                    )
                                })}
                            </div>
                        <button className="btn-design mt-4" onClick={checkoutHandler}>
                          {isStorePage()}
                        </button>
                        
                    </div>
                </div>
            </div>
        </Container>
      </section>
      <section className="sec-padding-bottom pt-5 blog-detail">
        <Container>
        <div
            className="custom-list"
            dangerouslySetInnerHTML={{ __html:removeTextPattern( data?.description) }}
            ></div>
        </Container>
      </section>
    </>
  );
};
