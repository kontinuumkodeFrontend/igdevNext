import React from 'react'
import { Container } from 'react-bootstrap'
import SpeackAdvisor from '../../Components/SpeackAdvisor'
import SpeackEnquiry from '../../Components/SpeackEnquiry'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export const PaymentDetail = ({payData, courseData}) => {
  const router = useRouter()
  const navigate = (url) => {
    router.push(url)
  };

  return (
    <section className="payment-plan-sec">
    <Container>
      <div className="payment-plan-details">
        <div className="payment-plan-date">
          <h6>Next course commences:</h6>
          <h4>{payData?.dyanamic ? moment(payData?.endDate, "DDMMYYYY").format('Do MMMM YYYY'):payData?.endDate}</h4>
          <h6 className="header-yellow">Limited Space Available {payData?.seats ? ': ' +payData?.seats :''}</h6>
          <h6>Payment plans avaialble</h6>
          <p className='my-0' >Frequency {payData?.frequency ? ': ' +payData?.frequency :''}</p>
          <p>
            {payData?.payText}
          </p>
          <div className='d-flex justify-content-start'><SpeackAdvisor name={"Speak to an advisor"}/></div>
        </div>
        <div className="payment-plan-offer">
          <h4>Early bird price until {moment(payData?.startDate, "DDMMYYYY").format('Do MMMM YYYY')}</h4>
          <h2 className="sec-heading">{payData?.price}</h2>
          <h5>Payment plans avaialble</h5>
          {
            !payData ?
            <Link prefetch={true} href={`/product-detail/${payData?.id}`} className='btn-design'>Buy Now</Link> :
            <div onClick={() => navigate(`/product-detail/${payData?.id}`, { state: {courseData, payData} })} className="btn-design">Buy Now</div>
          }
        </div>
      </div>
    </Container>
  </section>
  )
}
