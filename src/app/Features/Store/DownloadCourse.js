import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Link from 'next/link';
import { toast } from "react-toastify";
import { pdfDownload } from "../../services/Service";
import { DOWNLOAD_PDF_API } from "../../services/Url";
import {PDFButton} from "../../Components/PDFButton";

export const DownloadCourse = ({ link }) => {
  const bannerImg = "/images/aboutUS.png";
  const [show, setShow] = useState(false);
  const [pdf, setPdf] = useState();
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [orderId, setOrderId] = useState();
  const [codeInput, setCodeInput] = useState();

  const downloadHandler = () => {
    const body = {
      order_id: orderId,
      code: codeInput,
    };
    if (codeInput) {
      pdfDownload(DOWNLOAD_PDF_API, body, setPdf, setLoader);
      setError(false);
    } else {
      toast.error("Please enter the fields");
      setError(true);
    }
  };

  return (
    <section
      className="award-sec sec-padding-top"
      style={{ backgroundColor: "#fff" }}
    >
   
      <Container>
        <h2 className="sec-heading">Download Now</h2>
        <div className="complex-chng-des chng-des-md reverse">
          <div className="cmpx-chng-des ">
            <div className="ltd-case-description custom-list">
              <ul>
                <li>CTA Button: "Download Your Cookie Policy Template" </li>
                <li>
                  Secure Download: "Your download is secure and backed by our
                  satisfaction guarantee."
                </li>
              </ul>
              {show ? (
                <div className="dwl_bx">
                  {!pdf && <p className="fw-bold">
                    Enter the Order id and Unique code here for your download.
                  </p>}
                  {!loader ? (
                    <>{!pdf &&
                    <>
                      <div className="d-flex flex-wrap gap-3">
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setOrderId(e.target.value)}
                          minLength={5}
                          maxLength={5}
                          placeholder="Order ID"
                        />
                        <input
                          type="text"
                          className="form-control"
                          onChange={(e) => setCodeInput(e.target.value)}
                          minLength={6}
                          maxLength={6}
                          placeholder="Unique Code"
                        />
                      </div>
                      <p className="dwl_ln">
                        To download, please complete the payment here{" "}
                        <Link prefetch={true} href={link}>Pay Now</Link>
                      </p>
                    </>}</>
                  ) : (
                    <div className="sec-padding text-center">
                      <div className="spinner-border " role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}

                  {pdf && (
                    <div className="d-flex flex-wrap align-items-center gap-3">
                       <span className="fw-bold text-success">Your Download is Ready, Please Click on Icon</span>
                       <PDFButton link={pdf}/>
                    </div>
                  )}
                  {!pdf && (
                    <button
                      className="buy_now mt-3 mb-2"
                      onClick={downloadHandler}
                    >
                      Download
                    </button>
                  )}
                </div>
              ) : (
                <button className="buy_now ms-4" onClick={() => setShow(!show)}>
                  Download
                </button>
              )}
            </div>
          </div>
          <div className="cmpx-img-card mt-0 img_design">
            <img  loading="lazy"  width="" height=""  
              src={bannerImg}
              style={{ objectPosition: "right" }}
              alt="bannerImg"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
