import React from "react";
import { Container } from "react-bootstrap";

const FAQDynamic = ({heading,description, list,bg,padding, conclusion}) => {
  return (
    <>
      <section className={padding ? `faq-section sec-padding-${padding}`:"faq-section sec-padding"} style={{backgroundColor:`${bg}`}}>
        <Container>
          <div className="faq-head">
          <div className="max-content">
            <h2 className="sec-heading">{heading}</h2>
            <div className="text-center" dangerouslySetInnerHTML={{__html:description}}></div>
          </div>            
            <p className="sub-heading">
            
            </p>
          </div>
          <div className="faq-accordian">
            <div className="accordion" id="accordionExample">
            {list?.length > 0 ? (
              list.map((item, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header" id={`heading${i}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${i}`}
                      aria-expanded="true"
                      aria-controls={`collapse${i}`}
                    >
                      {item?.faq_list_heading}
                    </button>
                  </h2>
                  <div
                    id={`collapse${i}`}
                    className={`accordion-collapse collapse${i === 0 ? ' show' : ''}`}
                    aria-labelledby={`heading${i}`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: item?.faq_description }}>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No FAQ items available</p>
            )}

            </div>
          </div>
           <p>
              <strong dangerouslySetInnerHTML={{__html: conclusion}}>
                
              </strong>
           </p>
        </Container>
      </section>
    </>
  );
};

export default FAQDynamic;
