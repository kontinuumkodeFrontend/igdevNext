import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { toast } from "react-toastify";
import { BaseUrl, TEAM_SHOWCASE_POST } from "../services/Url";
import axios from "axios";

const Team = (props) => {
  const mailIcon = "/images/mailIcon.svg";
  const linkedInIcon = "/images/linkedInIcon.svg";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    clientGet1(TEAM_SHOWCASE_POST, setData, page, setIsLoading);
  }, [page]);

  const clientGet1 = async (url, setData, page, setIsLoading) => {
    setIsLoading(true);
    var headers;
    headers = {
      "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8",
    };

    const completeUrl = BaseUrl + url;
    try {
      const res = await fetch(
        "https://admin.ig-smart.com/wp-json/wp/v2/team_showcase_post?_embed&page=1",
        {
          method: "GET",
          headers,
        }
      );
      const response = await res.json();
      let httpsStatus = res?.status;
      if (httpsStatus === 200) {
        setData(response);
      } else if (res?.status === 400) {
        toast.error("No more records");
      } else if (httpsStatus === 401) {
        toast.error("Please Login again");
        localStorage?.clear();
      } else {
        toast.error(response?.message);
      }
      setIsLoading(false);
    } catch (error) {
      return setIsLoading(false);
    }
  };

  const handleUpload = (e) => {
    axios({
      url: "https://admin.ig-smart.com/wp-json/wp/v2/team_showcase_post?_embed&page=1",
      method: "GET",
    })
      .then((res) => {})

      .catch((err) => {});
  };

  return (
    <>
      <section
        className={
          props.bgWhite
            ? "digital-team-sec sec-padding-bottom bgWhite"
            : "digital-team-sec sec-padding greyBg"
        }
      >
        <Container>
          <h2 className="sec-heading">{props.title}</h2>
          <p className="sub-heading">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics.
          </p>
          <div className="digital-team-details">
            <div className="digital-team-member">
              <img
                loading="lazy"
                width=""
                height=""
                src={
                  "https://admin.ig-smart.com/wp-content/uploads/2018/12/michael-abtar-150x150.jpeg"
                }
                alt="michael-abtar"
              />
              <div className="digital-member-description">
                <div className="member-detail">
                  <h5>Michael Abtar LLB (Hons)</h5>
                  <p>Pg. Dip Law, Cert. DPO, Managing Director</p>
                </div>
                <div className="digital-team-social-icons">
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="firstIcon"
                      src={mailIcon}
                      alt="mailIcon"
                    />
                  </a>
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="secondIcon"
                      src={linkedInIcon}
                      alt="linkedInIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="digital-team-member">
              <img
                loading="lazy"
                width=""
                height=""
                src={
                  "	https://admin.ig-smart.com/wp-content/uploads/2018/12/claire-griffin-100x100.jpeg"
                }
                alt="claire-griffin"
              />
              <div className="digital-member-description">
                <div className="member-detail">
                  <h5> Claire Griffin</h5>
                  <p>BA (Hons), Assoc. Director Business Development</p>
                </div>
                <div className="digital-team-social-icons">
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="firstIcon"
                      src={mailIcon}
                      alt="mailIcon"
                    />
                  </a>
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="secondIcon"
                      src={linkedInIcon}
                      alt="linkedInIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="digital-team-member">
              <img
                loading="lazy"
                width=""
                height=""
                src={
                  "https://admin.ig-smart.com/wp-content/uploads/2018/12/bright-150x150.png"
                }
                alt="bright"
              />
              <div className="digital-member-description">
                <div className="member-detail">
                  <h5>Dr. Bright. G. Mawudor. Jnr</h5>
                  <p>Dr. Bright. G. Mawudor. Jnr, PhD – Cyber Security</p>
                </div>
                <div className="digital-team-social-icons">
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="firstIcon"
                      src={mailIcon}
                      alt="mailIcon"
                    />
                  </a>
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="secondIcon"
                      src={linkedInIcon}
                      alt="linkedInIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="digital-team-member">
              <img
                loading="lazy"
                width=""
                height=""
                src={
                  "https://admin.ig-smart.com/wp-content/uploads/2018/12/janice-150x150.png"
                }
                alt="janice"
              />
              <div className="digital-member-description">
                <div className="member-detail">
                  <h5>Janice Johnson</h5>
                  <p>MSc, Beng (Hons), FdEng, CISSP, CEH, Cert. DPO</p>
                </div>
                <div className="digital-team-social-icons">
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="firstIcon"
                      src={mailIcon}
                      alt="mailIcon"
                    />
                  </a>
                  <a>
                    <img
                      loading="lazy"
                      width=""
                      height=""
                      className="secondIcon"
                      src={linkedInIcon}
                      alt="linkedInIcon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Team;
