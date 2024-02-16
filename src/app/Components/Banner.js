import React from "react";
import { Container } from "react-bootstrap";
import SpeackAdvisor from "./SpeackAdvisor";
import { usePathname } from 'next/navigation'

const Banner = (props) => {
    const pathName = usePathname()

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <section className={(props.bannerClass) ? `${props.bannerClass} banner-section`: 'banner-section'} style={{backgroundImage: `url(${props.banImg})`, backgroundPosition: 'right'}}>
            <Container>
                <div className="banner_header mn_bnr">
                    {props?.banImg ? <div dangerouslySetInnerHTML={{ __html: props?.bannerCnt?.title }}></div> : <h1 style={{color: '#0000'}}>Heading</h1>}  
                </div>
               
                    <div className="banner-box">
                    <div className="banner-description align-items-start">
                        {props.bannerCnt.cardTitle ? <h2>{props.bannerCnt.cardTitle}</h2> : <h2 style={{color: '#0000'}}>props.bannerCnt.cardTitle</h2>}
                          <div>
                            <p dangerouslySetInnerHTML={{ __html: props?.bannerCnt?.cardPara}} className="my-4"></p>
                        </div>
                      
                        <div className="bttn-group">
                            {pathName.includes('blog') && <button onClick={() => scrollToSection('hubspot')} className="btn-design">Subscribe</button> }
                            {!pathName.includes('blog') && <SpeackAdvisor name={props?.bannerCnt?.bannerbtn ? props?.bannerCnt?.bannerbtn : "Request a Proposal"} />}
                        </div>
                    </div>
                </div>
               
            </Container>
        </section>);
}

export default Banner;