import React from 'react'
import { Container } from 'react-bootstrap'

export const Statcards = ({data, padding}) => {
  return (
    <section className={padding ? `sec-padding-${padding}` : 'sec-padding'}>
        <Container>
        <div className="case-study-cards">
            <div className="case-study-card">
                <img  loading="lazy"  width="" height=""   src={'/images/users-icon.png'} alt="users" />   
                <h3>{data?.heading}</h3>
                <p>{data?.description}</p>
            </div>
            <div className="case-study-card">
            <img  loading="lazy"  width="" height=""   src={'/images/conversions-icon.png'} alt="conversions" />
            <h3> {data?.heading2}</h3>
            <p> {data?.description2}</p>
            </div>
            <div className="case-study-card">
            <img  loading="lazy"  width="" height=""   src={'/images/keyword-icon.png'} alt="keyword" />
            <h3> {data?.heading3}</h3>
            <p> {data?.description3}</p>
            </div>
        </div>
        </Container>
    </section>
  )
}
