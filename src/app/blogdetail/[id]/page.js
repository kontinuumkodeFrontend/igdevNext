'use client'
import React, { useEffect, useState } from "react";
import InnerBanner from "@/app/Components/InnerBanner";
import { TestimonialV2 } from "@/app/Components/TestimonialV2";
import { Loader } from "@/app/Components/Loader";
import { POSTS1 } from "@/app/services/Url";
import { usePathname } from "next/navigation";
import { getAll } from "@/app/services/Service";
import { SingleBlogSidebar } from "@/app/Features/SingleBlogSidebar";


export default function BlogDetail(){
  const banImg = "/images/bannerImg.png";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);  
  const pathName = usePathname();
  let pathArr =pathName.split('/');

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathName])

  useEffect(() => {
    getAll( `${POSTS1}/${pathArr[2]}?_embed`, setData, setIsLoading)
  }, [pathName]);

  var bannerContent = {
    cardTitle:data?.title?.rendered,
    cardPara: ''
  };

  useEffect(() => {
    limitWords()
  }, [data])

  function removeTextPattern(text) {
    const pattern = /\[vc_row\]\[vc_column\]\[vc_column_text\]/g;
    return text.replace(pattern, "");
  }
  
    function limitWords(text) {
      if (text) {
        const cleanedContent = removeTextPattern(text);
        return cleanedContent;
      } else {
        return ""; 
      }
    }

  return (
    <>
    {
      isLoading && <Loader />
    }
      <InnerBanner bannerCnt={bannerContent} banImg={data?.acf?.banner_image ? data?.acf?.banner_image : banImg} />

      <div className="blogdetail-sec sec-padding">
        <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div
                  className="custom-list"
                  dangerouslySetInnerHTML={{ __html: limitWords(data && data?.content?.rendered) }}
                >                  
                </div>
              </div>
              <div className="col-lg-4 mt-lg-0 mt-4">
                <SingleBlogSidebar titleData={data?.title?.rendered}/>
              </div>
            </div>
        </div>
      </div>

      <div className="bg-light">
      <TestimonialV2 />
      </div>
    </>
  );
};
