import React from 'react';
import HubspotForm from "react-hubspot-form";

export const HubspotSection = () => {
  return (
    <section className="hubspot-form sec-padding bg-light">
        <div className="container">
          <h2 className="sec-heading">Unlock Exclusive Insights!</h2>
          <p className="text-center mb-4">
            <b>
              Elevate your data & IT governance, risk and compliance game with
              our Insights
            </b>
            <br />
            🔐 Data Privacy, 📈 Information Governance, 🛡️ Cybersecurity, 🌐
            Clinical Systems Safety, 📚 White Papers & Reports, 📢 Marketing &
            Promotions.
            <br />
            Subscribe now for game-changing insights. Your success starts here.
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="hubspot-form-img">
                <img  loading="lazy"  width="" height=""   src={'/images/Emailspana.svg'} alt="story" />
              </div>
            </div>
            <div className="col-md-6">
              <HubspotForm
                portalId="143160255"
                formId="45215cd7-849b-42fd-a691-922ac0d78433"
                loading={<div>Loading...</div>}
              />
              <p>
                Stay in the Know! By subscribing to our newsletter, you're
                joining a community of savvy individuals. Rest easy knowing that
                your data will be treated with care, in full accordance with our
                privacy policy.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}
