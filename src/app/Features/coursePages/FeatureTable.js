import React from "react";
import { Container } from "react-bootstrap";
import SpeackEnquiry from "../../Components/SpeackEnquiry";

export const FeatureTable = ({ data, sn, padding, bg }) => {
  const checkMark = "/images/check-mark.png";
  let isPadding = padding ? `sec-padding-${padding}` : `sec-padding`;

  return (
    <section className={`course_tbl_sec ${isPadding} ${bg}`}>
      <Container>
        <h2 className="tbl-hdg text-left mb-4">
          {data?.ft_heading}
        </h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th
                  colSpan={2}
                  style={{
                    borderTopLeftRadius: "10px",
                    paddingLeft: "30px !important",
                  }}
                >
                  <h3 className="mb-0">{data?.ft_heading}</h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.ft_table?.length > 0 &&
                data?.ft_table?.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td style={{ width: "40%" }}>
                        <div className="d-flex align-items-start">
                          <img  loading="lazy"  width="" height=""  
                            src={checkMark}
                            alt="check-img"
                            className="me-2"
                          />
                          {item?.ft_td1}
                         
                        </div>
                      </td>
                      {data?.ft_table?.length === i + 1 ? (
                        <td className="p-0">
                          <table>
                            <tbody>
                              <td>{item?.ft_td2}</td>
                              <td>{item?.ft_td3}</td>
                              <td>
                                {item?.ft_td4}
                                <div className="re-design-btn">
                                  <SpeackEnquiry name={"Request a Proposal"} />
                                </div>
                              </td>
                            </tbody>
                          </table>
                        </td>
                      ) : (
                        <td></td>
                      )}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
};
