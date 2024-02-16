'use client'
import React from "react";
import InnerBanner from "../Components/InnerBanner";
import { Container } from "react-bootstrap";

export default function Cookie(){
  const careerBan = "/images/careerBan.png";
  var bannerContent = {
    cardTitle: "COOKIES",
    cardPara: "",
  };

  return (
    <>
      <InnerBanner bannerCnt={bannerContent} banImg={careerBan} />
      <div className="internal-service-page" id="cyber-essen-certi-service">
        <Container>
          <div className="cookie custom-list sec-padding">
            <h3>
              <b>Use of cookies by IG Smart</b>
            </h3>
            <p>
              Cookies are small text files that are placed on your computer by
              websites that you visit. They are widely used in order to make
              websites work, or work more efficiently, as well as to provide
              information to the owners of the site. The table below explains
              the cookies we use and why.
            </p>

            <div className="table-responsive">
              <table className="table my-4">
                <thead>
                  <tr>
                    <th scope="col">Cookie</th>
                    <th scope="col">Name</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Cookie preference</th>
                    <td>civicCookieControl</td>
                    <td>
                      This cookie is used to remember a user’s choice about
                      cookies on ig-smart.com. Where users have previously
                      indicated a preference, that user’s preference will be
                      stored in this cookie.
                    </td>
                  </tr>
                  <tr>
                    <th>Universal Analytics (Google)</th>
                    <td>
                      _ga
                      <br />
                      _gali
                      <br />
                      _gat_UA-1036645-1
                      <br />
                      _gid
                    </td>
                    <td>
                      <p>
                        These cookies are used to collect information about how
                        visitors use our website and WordPress blog. We use the
                        information to compile reports and to help us improve
                        the website. The cookies collect information in an
                        anonymous form, including the number of visitors to the
                        website and blog, where visitors have come to the
                        website from and the pages they visited.
                        <br />
                        <a href="https://support.google.com/analytics/answer/6004245">
                          Read Google’s overview of privacy and safeguarding
                          data
                        </a>
                        .
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th>YouTube cookies</th>
                    <td>
                      PREF*
                      <br />
                      VSC*
                      <br />
                      VISITOR_INFO1_LIVE*
                      <br />
                      remote_sid*
                    </td>
                    <td>
                      <p>
                        We embed videos from our official YouTube channel using
                        YouTube’s privacy-enhanced mode. This mode may set
                        cookies on your computer once you click on the YouTube
                        video player, but YouTube will not store
                        personally-identifiable cookie information for playbacks
                        of embedded videos using the privacy-enhanced mode.
                        <br />
                        Read more at{" "}
                        <a href="https://support.google.com/youtube/answer/171780?hl=en-GB">
                          YouTube’s embedding videos information page
                        </a>
                        .<br />
                        PREF – * Expires after eight months
                        <br />
                        VSC – * expires at the end of your session
                        <br />
                        VISITOR_INFO1_LIVE – *expires after eight months
                        <br />
                        remote_sid – * expires at the end of your session
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="my-4">
              <b>How do I change my cookie settings?</b>
            </h3>
            <p>
              Most web browsers allow some control of most cookies through the
              browser settings. To find out more about cookies, including how to
              see what cookies have been set, visit{" "}
              <a href="https://www.aboutcookies.org/">www.aboutcookies.org</a>{" "}
              or{" "}
              <a href="http://www.allaboutcookies.org/">
                www.allaboutcookies.org
              </a>
            </p>

            <p>Find out how to manage cookies on popular browsers:</p>

            <div>
              <ul className="arrow custom-list">
                <li>
                  <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=en">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy">
                    Microsoft Edge
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies">
                    Microsoft Internet Explorer
                  </a>
                </li>
                <li>
                  <a href="https://www.opera.com/help/tutorials/security/privacy/">
                    Opera
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/kb/ph21411?locale=en_US">
                    Apple Safari
                  </a>
                </li>
              </ul>
            </div>
            <div className="wpb_wrapper">
              <p>
                To find information relating to other browsers, visit the
                browser developer’s website.
              </p>
              <p>
                To opt out of being tracked by Google Analytics across all
                websites, visit{" "}
                <a href="https://tools.google.com/dlpage/gaoptout">
                  http://tools.google.com/dlpage/gaoptout
                </a>
              </p>
              <p>
                We are planning to enhance our cookie tool to allow users to
                more easily change their cookie settings after their initial
                choice.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
