import React from "react";
import { Container } from "react-bootstrap";
import SpeackEnquiry from "../../Components/SpeackEnquiry";
import Link from 'next/link';

export const CourseTable = ({ data, sn, padding, bg }) => {
  let checkMark = "/images/check-mark.png"
  let isPadding = padding ? `sec-padding-${padding}` : `sec-padding`;
  return (
    <section className={`course_tbl_sec ${isPadding} ${bg}`}>
      <Container>
       <div className="row">
          <div className="col-md-8">
            <h2 className="sec-heading text-left">
              {data?.cft_heading}
            </h2>
            <div className="mb-5">
              <h5>{data?.cft_sub_heading}</h5>
              <div dangerouslySetInnerHTML={{__html:  data?.cft_description}}></div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="prdt_img">
              <img  loading="lazy"  width="" height=""   src={data?.product_image} alt="product_image" className="img-fluid"/>
            </div> 
          </div>
       </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{width:'80px'}}></th>
                <th><h3>{data?.cft_heading}</h3></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {data?.cft_table?.length > 0 &&
                 data?.cft_table?.map((item, i) => {
                    return(
                        <tr key={i}>
                            <td><img  loading="lazy"  width="" height=""   src={checkMark} alt="check-img" /></td>
                            <td>
                                <div className="cft_tbl_ctnt" dangerouslySetInnerHTML={{__html: item?.row_2_item}}></div>
                            </td>
                            <td>
                                {/* <img  loading="lazy"  width="" height=""   src={item?.row_3_item} alt="row_3_item"/> */}
                            </td>
                        </tr>    
                    )
                 })   
                }
            </tbody>
          </table>
          <div className="d-flex justify-content-between">
            <div className="tbl_price">
            <h5 className="mb-0"><b>Price :</b></h5> <div>{data?.cft_price}</div>
          </div>

          {/* <button className="btn-design mb-4">Buy Now</button> */}
          {
            sn === 3 ?            
            <Link prefetch={true} href={"/product-detail/25610"} className="btn-design mb-4">Buy Now</Link>:
            <div className="mb-4"><SpeackEnquiry  name={"Buy Now"}/></div>
          }
          
          </div>
          <div className="cft_term" dangerouslySetInnerHTML={{__html: data?.cft_term_and_condition}}></div>
        </div>
      </Container>
    </section>
  );
};
