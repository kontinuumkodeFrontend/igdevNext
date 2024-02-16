import React from 'react'
import { Container } from 'react-bootstrap'

export const IconList = ({heading, data, padding}) => {
  let isPadding = padding ? `sec-padding-${padding}` : `sec-padding` ;
  return (
    <section className={`include-sec ${isPadding}`}>
        <Container>
        <h2 className="sec-heading">
           {heading}
        </h2>
        <div className="icon-list">
           {data?.map((item, i) => 
            { return(
                <div className="IL-card" key={i}>
                    <div className="IL-icon">
                        <img  loading="lazy"  width="" height=""   src={item?.list_image} alt="list_image" />
                    </div>
                    <div>
                        <p className="mb-1">
                        <b>{item?.list_heading}</b>
                        </p>
                        <div dangerouslySetInnerHTML={{__html: item?.list_description}}></div>
                    </div>
                </div>
             )}
           )}
        </div>
        </Container>
    </section>

  )
}
