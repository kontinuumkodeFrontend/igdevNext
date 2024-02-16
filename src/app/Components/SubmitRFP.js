'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { contactTabs } from "../services/Constants";
import Form from "react-bootstrap/Form";
import { contactFormApi } from "../services/Service";
import { CONTACT_FORM_BASE_URL, CONTACT_FORM_LAST_URL, CONTACT_FORM_URL, ENQUIRY_FORM_URL, REQUEST_PROPOSAL_FORM_URL } from "../services/Url";

const SubmitRFP = (props) => {
  const [activeTab, setActiveTab] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const [enquiryName, setEnquiryName] =useState('');
  const [enquiryEmail, setEnquiryEmail] =useState('');
  const [enquiryNumber, setEnquiryNumber] =useState();
  const [enquiryCompanyName, setEnquiryCompanyName] =useState('');
  const [enquiryMessage, setEnquiryMessage] =useState('');

  const [purposalName, setPurposalName] =useState('');
  const [purposalEmail, setPurposalEmail] =useState('');
  const [purposalNumber, setPurposalNumber] =useState();
  const [purposalCompanyName, setPurposalCompanyName] =useState('');
  const [purposalMessage, setPurposalMessage] =useState('');
  const [purposalEmployeNumber, setPurposalEmployeNumber]=useState();
  const [purposalService, setPurposalService] =useState('');
  
  const [contactName, setContactName] =useState('');
  const [contactEmail, setContactEmail] =useState('');
  const [contactNumber, setContactNumber] =useState();
  const [contactMessage, setContactMessage] =useState('');
 
  useEffect(() => {
    if(isLoading === false){
      setEnquiryCompanyName('');
      setEnquiryEmail('');
      setEnquiryMessage('');
      setEnquiryName('');
      setEnquiryNumber('');
      setPurposalCompanyName('');
      setPurposalEmail('');
      setPurposalEmployeNumber('');
      setPurposalMessage('');
      setPurposalName('');
      setPurposalNumber('');
      setPurposalService('');
      setContactName('');
      setContactEmail()
      setContactNumber('')
      setContactMessage('');

    }
    setError(false);
  }, [isLoading, activeTab])

  const enquiryHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData();     
    formData.append("your-name", enquiryName);
    formData.append("your-email", enquiryEmail);
    formData.append("your-number", enquiryNumber);
    formData.append("your-company", enquiryCompanyName);
    formData.append("your-message", enquiryMessage);
    let url = CONTACT_FORM_BASE_URL + ENQUIRY_FORM_URL + CONTACT_FORM_LAST_URL
    if(!enquiryName || !enquiryEmail || !enquiryMessage || !enquiryNumber){
      setError(true);
    }else{
      setError(false)
      contactFormApi(url, formData, setIsLoading)
    }
  }

  const purposalHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData();     
    formData.append("your-name", purposalName);
    formData.append("your-email", purposalEmail);
    formData.append("your-number", purposalNumber);
    formData.append("your-company", purposalCompanyName);
    formData.append("your-message", purposalMessage);
    formData.append("menu-187", purposalService);
    formData.append("number-925", purposalEmployeNumber);
    // formData.append("g-recaptcha-response", recaptchaResponse);
    let url = CONTACT_FORM_BASE_URL + REQUEST_PROPOSAL_FORM_URL + CONTACT_FORM_LAST_URL
    if(!purposalName || !purposalEmail || !purposalMessage || !purposalNumber || !purposalCompanyName || !purposalService || !purposalEmployeNumber){
      setError(true);
    }else{
      setError(false)
      contactFormApi(url, formData, setIsLoading)
    }
  }

  const contactHandler = (e) => {
    e.preventDefault();
    
    const formData = new FormData();     
    formData.append("your-name", contactName);
    formData.append("your-email", contactEmail);
    formData.append("your-number", contactNumber);
    formData.append("your-message", contactMessage);
    // formData.append("g-recaptcha-response", recaptchaResponse);
    let url = CONTACT_FORM_BASE_URL + CONTACT_FORM_URL + CONTACT_FORM_LAST_URL
    if(!contactName || !contactEmail || !contactMessage || !contactNumber){
      setError(true);
    }else{
      setError(false)
      contactFormApi(url, formData, setIsLoading)
    }
  }

const submitEnquiryHandler = () => {
  if(activeTab === contactTabs?.submit){
    setActiveTab('')
  }else{
    setActiveTab(contactTabs?.submit)
  }
} 

const proposalEnquiryHandler = () => {
  if(activeTab === contactTabs?.propsal){
    setActiveTab('')
  }else{
    setActiveTab(contactTabs?.propsal)
  }
}

const callbackEnquiryHandler = () => {
  if(activeTab === contactTabs?.callback){
    setActiveTab('')
  }else{
    setActiveTab(contactTabs?.callback)
  }
}

  return (
    <>
      <div className="submit-rfp">
        <section className={props?.customClass ? `get-in-touch-sec sec-padding ${props?.customClass}` : "get-in-touch-sec sec-padding"}>
          <Container>
            <h2 className="sec-heading">{props?.getHeading}</h2>
            <div className="get-in-touch-cards">
              <div
                className={
                  activeTab === contactTabs?.submit
                    ? "get-in-touch-card cardWhite active"
                    : "get-in-touch-card cardWhite"
                }
                onClick={submitEnquiryHandler}
              >
                <img  loading="lazy"  width="" height=""   src={'/images/home/openMail.png'} alt="mail" />
                <h4>Submit An Enquiry</h4>
              </div>
              <div
                className={
                  activeTab === contactTabs?.propsal || activeTab === '' 
                    ? "get-in-touch-card cardWhite active"
                    : "get-in-touch-card cardWhite"
                }
                onClick={proposalEnquiryHandler}
              >
                <img  loading="lazy"  width="" height=""   src={'/images/home/mechanicalGears.png'} alt="setting" />
                <h4>Request Proposal</h4>
              </div>
              <div
                className={
                  activeTab === contactTabs?.callback
                    ? "get-in-touch-card cardWhite active"
                    : "get-in-touch-card cardWhite"
                }
                onClick={callbackEnquiryHandler}
              >
                <img  loading="lazy"  width="" height=""   src={'/images/home/phoneCall.png'} alt="phn" />
                <h4>Request Callback </h4>
              </div>
            </div>
          </Container>
        </section>
       {
        activeTab ?
     <div className="container sec-padding-bottom">        
        {activeTab === contactTabs?.submit ? (
          <div className="cstm-card"> 
          <h4 className="text-uppercase mb-3">Submit An Enquiry</h4>             
            <form onSubmit={(e) => enquiryHandler(e)}>  
              <div className="row">
                <div className="form-group mb-3 col-md-6">
                  <label>Name <span className="required">*</span></label>
                  <input className="form-control" type="text"
                     name="name" value={enquiryName || ''} onChange={(e) => setEnquiryName(e?.target?.value)}
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Email<span className="required">*</span></label>
                  <input className="form-control" type="email" value={enquiryEmail || ''} onChange={(e) => setEnquiryEmail(e?.target?.value)}/>
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Phone Number<span className="required">*</span></label>
                  <input
                    className="form-control"
                    type="number"
                    value={enquiryNumber || ''}
                    onChange={(e) => setEnquiryNumber(e?.target?.value)}
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Your Organisation/Company Name</label>
                  <input className="form-control" type="text" value={enquiryCompanyName || ''} onChange={(e) => setEnquiryCompanyName(e?.target?.value)}/>
                </div>
                <div className="form-group w-100 mb-3">
                  <label>Reason for Contacting<span className="required">*</span></label>
                  <textarea className="form-control mx-100" value={enquiryMessage || ''} onChange={(e) => setEnquiryMessage(e?.target?.value)}></textarea>
                </div>
              </div>              

              <button type="submit" className="btn-design mt-3"> 
                Submit
              </button>
              {
                error ? <p className="required mt-3">Please Enter Required Fileds </p> :''
              }
            </form>
          </div>
        ) : activeTab === contactTabs?.propsal ? (
          <div className="cstm-card">
            <h4 className="text-uppercase mb-3">Request Proposal</h4> 
            <form onSubmit={(e) => purposalHandler(e)}>
              <div className="row">
                <div className="form-group mb-3 col-md-6">
                  <label>Name<span className="required">*</span></label>
                  <input className="form-control" type="text" value={purposalName} onChange={(e) => setPurposalName(e.target.value)}/>
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Email<span className="required">*</span></label>
                  <input className="form-control" type="email" value={purposalEmail} onChange={(e) => setPurposalEmail(e.target.value)} />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Telephone Number<span className="required">*</span></label>
                  <input
                    className="form-control"
                    type="number"
                    value={purposalNumber} onChange={(e) => setPurposalNumber(e.target.value)} />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Your Company/Organisation Name<span className="required">*</span></label>
                  <input className="form-control" type="text" value={purposalCompanyName} onChange={(e) => setPurposalCompanyName(e.target.value)}/>
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Number of Employees<span className="required">*</span></label>
                  <input className="form-control" type="number" value={purposalEmployeNumber} onChange={(e) => setPurposalEmployeNumber(e.target.value)}/>
                </div>
                <div className="form-group col-md-6 mb-3">
                  <label>Services<span className="required">*</span></label>
                  <Form.Select aria-label="Default select example" value={purposalService} onChange={(e) => setPurposalService(e.target.value)}>
                    <option value="Service/s">Service/s</option>
                    <option value="GDPR Consultancy">GDPR Consultancy</option>
                    <option value="DPO Services">DPO Services</option>
                    <option value="GDPR Gap Analysis">
                      GDPR Gap Analysis
                    </option>
                    <option value="GDPR Audit">GDPR Audit</option>
                    <option value="Data Protection Impact Assessment">
                      Data Protection Impact Assessment
                    </option>
                    <option value="Cybersecurity Consultancy">
                      Cybersecurity Consultancy
                    </option>
                    <option value="Vulnerability Scanning">
                      Vulnerability Scanning
                    </option>
                    <option value="Penetration Testing">
                      Penetration Testing
                    </option>
                    <option value="ISO 22301/Business Continuity Gap Analysis Services">
                      ISO 22301/Business Continuity Gap Analysis Services
                    </option>
                    <option value="ISO 27001 Gap Analysis">
                      ISO 27001 Gap Analysis
                    </option>
                    <option value="ISO 27001:2013 Implementation">
                      ISO 27001:2013 Implementation
                    </option>
                    <option value="ISO 27001 Audit">ISO 27001 Audit</option>
                    <option value="GDPR Training">GDPR Training</option>
                    <option value="Data Protection Officer Training">
                      Data Protection Officer Training
                    </option>
                    <option value="Information Governance Training">
                      Information Governance Training
                    </option>
                    <option value="Cyber Security Training">
                      Cyber Security Training
                    </option>
                  </Form.Select>
                </div>
                <div className="form-group w-100 mb-3">
                  <label>Decription <span className="required">*</span></label>
                  <textarea placeholder="Describe the categories and volumes of personal data that your organisations processes and what the purposes of processing are" className="form-control mx-100" value={purposalMessage} onChange={(e) => setPurposalMessage(e.target.value)}></textarea>
                </div>
              </div>
             
              <button type="submit" className="btn-design mt-3">
                Submit
              </button>
              {
                error ? <p className="required mt-3">Please Enter Required Fileds </p> :''
              }
            </form>
          </div>
        ) : activeTab === contactTabs?.callback ? (
          <div className="cstm-card">
             <h4 className="text-uppercase mb-3">Request Callback</h4> 
          <form onSubmit={(e) => contactHandler(e)}>
            <div className="row">
              <div className="form-group mb-3 col-md-6">
                <label>Name<span className="required">*</span></label>
                <input className="form-control" type="text" value={contactName} onChange={(e) => setContactName(e.target.value)}/>
              </div>
              <div className="form-group mb-3 col-md-6">
                <label>Email<span className="required">*</span></label>
                <input className="form-control" type="email"  value={contactEmail} onChange={(e) => setContactEmail(e.target.value)}/>
              </div>
              <div className="form-group mb-3 col-md-6">
                <label>Phone Number<span className="required">*</span></label>
                <input
                  className="form-control"
                  type="number"
                  maxLength={10}
                  value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>                
              <div className="form-group w-100 mb-3">
                <label>Message<span className="required">*</span></label>
                <textarea className="form-control mx-100" value={contactMessage} onChange={(e) => setContactMessage(e.target.value)}></textarea>
              </div>
            </div>
            {/* <ReCAPTCHA
                sitekey="Your client site key"
                onChange={onChange}
              /> */}
            <button type="submit" className="btn-design mt-3">
              Submit
            </button>
            {
                error ? <p className="required mt-3">Please Enter Required Fileds </p> :''
              }
          </form>
        </div>
        ) : (
          ""
        )}
      </div> :''
       } 
      </div>
    </>
  );
};

export default SubmitRFP;
