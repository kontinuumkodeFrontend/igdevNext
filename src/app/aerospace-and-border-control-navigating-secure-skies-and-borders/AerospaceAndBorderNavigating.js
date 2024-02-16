'use client'
import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Components/Banner";
import SubmitRFP from "../Components/SubmitRFP";
import { useCustomGet } from "../services/Service";
import { TestimonialV2 } from "../Components/TestimonialV2";
import { Loader } from "../Components/Loader";
import { AEROSPACE_AND_BORDER_CONTROL_ANVIGATING } from "../services/Url";
import ServiceSlider from "../Components/ServiceSlider";

const AerospaceAndBorderNavigating = () => {
  const { data, isLoading } = useCustomGet(AEROSPACE_AND_BORDER_CONTROL_ANVIGATING);

  var bannerContent = {
    title: `<h1>${data?.abcn_banner_heading}</h1>`,
    cardTitle:data?.abcn_banner_sub_heading,
    cardPara:data?.abcn_banner_content,
  }

  return (
    <>
      {
        isLoading ? 
        <Loader /> :''
      }
      <Banner bannerCnt={bannerContent} banImg={data?.abcn_banner_image} />
      <section className=" bg-light service-trusted-by">
          <Container>
           <ServiceSlider />
           </Container>
        </section>
      <div className="internal-service-page" id="record-mang-service">
      
        <section
          className="award-sec sec-padding-top"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
           {
            data?.abcn_elevating_content_box?.map((item, i) => {
                if(i % 2 === 0){
                  return( <React.Fragment key={i}>
                         {item?.abcn_elevating_heading && <h2 className="sec-heading">
                            {item?.abcn_elevating_heading}
                            </h2>}
                            <div className="complex-chng-des chng-des-md">
                            <div className="cmpx-img-card mt-0 img_design">
                                <img  loading="lazy"  width="" height=""   src={item?.abcn_elevating_image} alt="abcn_elevating_image" />
                            </div>
                            <div className="cmpx-chng-des ">
                                <div className="ltd-case-description mt-md-4 mt-3">
                                <div className="custom-list"
                                    dangerouslySetInnerHTML={{__html: item?.abcn_elevating_content}}
                                >             
                                </div>
                                </div>
                            </div>
                            </div>
                    </React.Fragment>)
                }else{
                    return(<React.Fragment key={i}>
                    {item?.abcn_elevating_heading && <h2 className="sec-heading">
                            {item?.abcn_elevating_heading}
                            </h2>}
                       <div className="complex-chng-des chng-des-md reverse mt-4">
                       <div className="cmpx-chng-des ">
                           <div className="ltd-case-description mt-md-4 mt-3">
                           <div className="custom-list"
                               dangerouslySetInnerHTML={{__html: item?.abcn_elevating_content}}
                           >             
                           </div>
                           </div>
                       </div>
                       <div className="cmpx-img-card mt-0 img_design">
                           <img  loading="lazy"  width="" height=""   src={item?.abcn_elevating_image} alt="abcn_elevating_image" />
                       </div>
                       
                       </div>
               </React.Fragment>) 
                }
            })
           }
          </Container>
        </section>

        

        <section
          className="award-sec sec-padding con-sec"
          style={{ backgroundColor: "#fff" }}
        >
          <Container>
            <div className="con-sec-inr">
              <div className="con-sec-img">
                  <img  loading="lazy"  width="" height=""   src={data?.abcn_unlocking_image} alt="abcn_unlocking_image" className="img-fluid" />
              </div>
              <div className="con-sec-des custom-list">
              {data?.abcn_unlocking_heading && <h2>{data?.abcn_unlocking_heading}</h2>}
                <div className="ltd-case-description custom-list mt-md-4 mt-3"
                   dangerouslySetInnerHTML={{__html: data?.abcn_unlocking_content}}
                >
                </div>             
              </div>             
            </div> 
          </Container>
        </section>
       <div className="bg-light">
       <TestimonialV2 />
       </div>
        <SubmitRFP />
      </div>
    </>
  );
};
export default AerospaceAndBorderNavigating;
