import React from 'react'
import { Container } from 'react-bootstrap';

export const ModuleList = ({heading, data, subHeading, padding}) => {
    let isPadding = padding ? `sec-padding-${padding}` : `sec-padding` ;
  return (
    <section className={`what-you-learn-sec ${isPadding} bg-light`}>
    <Container>
      <h2 className="sec-heading text-center">{heading}</h2>
      <div dangerouslySetInnerHTML={{__html: subHeading}} className='text-center'></div>
      <div className="module-cards mb-0">
        {
            data?.map((item, i) => {
                return(
                    <div className="module-card " key={i}>
                        <div className="module-head">
                            <img  loading="lazy"  width="" height=""   src={'/images/blueStar.svg'} alt="blueStar" />
                            <h6>Module {i+1}</h6>
                        </div>
                        <h5>{item?.list_heading}</h5>
                        <div dangerouslySetInnerHTML={{__html: item?.list_description}}></div>
                    </div>
                )
            })
        }
      </div>

      <div className="more-details d-none">
        <p className="sub-heading">
          Request More Details To View The Syllabus
        </p>
        <button className="btn-design">Request more details</button>
      </div>
    </Container>
  </section>
  )
}
