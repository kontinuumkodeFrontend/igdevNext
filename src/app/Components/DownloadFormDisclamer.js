import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {useRouter} from "next/navigation";
import CustomMultiSelect from "./CustomMultiSelect";
import {
  CONTACT_FORM_BASE_URL,
  CONTACT_FORM_LAST_URL,
  SPEAK_TO_ADVISOR_URL,
} from "../services/Url";
import { contactFormApi } from "../services/Service";
import {toast } from 'react-toastify';
import { Loader } from "./Loader";

function DownloadFormDisclamer({ name,data, customClass,setcloseBar, id }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [enable, setEnable] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReason, setIsReason] = useState("");
  const [isOrganisationSize, setIsOrganisationSize] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if(setcloseBar){
      setcloseBar(false)
    }
    setShow(true)
  };

  const handleShowForm = () => {
    if(setcloseBar){
      setcloseBar(false)
    }
    setShow(false)
    setShowForm(true)
  };

  const handleCloseFormToPage = () => {
    if(setcloseBar){
      setcloseBar(false)
    }
    setShow(false)
    navigate(`/product-detail/${id}`)
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      organisationName: "",
      jobTitle: "",
      phoneNumber:"",
      country:"",

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required First Name"),
      lastName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required Last Name"),
      jobTitle: Yup.string(),
      country: Yup.string(),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,14}$/, "Please Enter Valid Number")
        .required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Must be Required Email Address"),
      organisationName: Yup.string().required("Must be Required Message"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("firstname", values?.firstName);
      formData.append("last-name", values?.lastName);
      formData.append("email", values?.email);
      formData.append("organisation", values?.organisationName);
      formData.append("jobtitle", values?.jobTitle);
      formData.append("organisation-size", isOrganisationSize);
      formData.append("phone-number", values?.phoneNumber);
      formData.append("reason-for-contact", isReason);
      formData.append("country", values?.country);
      let url =
        CONTACT_FORM_BASE_URL + SPEAK_TO_ADVISOR_URL + CONTACT_FORM_LAST_URL;
      // setError(false)
      if(!isReason || !isOrganisationSize){
        toast.error("Please Select All Required Fields")
      }else{
        contactFormApi(url, formData, setIsLoading);
        setShow(false)
        setShowForm(false)
        formik.resetForm();
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false)
          const pdfPath = process.env.PUBLIC_URL + '/assets/website.pdf';
          window.open(pdfPath, '_blank');
        }, 1000);
      }     
    },
  });

  const dataArray = [
    {
      label: "Services",
      children: [
        { value: "Audit" },
        { value: "Compliance" },
        { value: "Consulting" },
        { value: "Certification" },
        { value: "Governance" },
        { value: "Risk & Resilience" },
        { value: "Resourcing" },
      ],
    },
    {
      label: "Courses",
      children: [
        { value: "Caldicott Guardian Training - Live Online" },
        { value: "Cyber Security Risk Awareness - Live Online" },
        { value: "Data Asset Owner Training - Live Online" },
        { value: "Data Protection Officer Training - Live Onlin" },
        { value: "DPO Training for Health and Social Care - Live Online" },
        { value: "DPO Training for Pharma - Live Online" },
        { value: "Data Privacy Training for Pharma - Live Online" },
        { value: "GDPR Training - Live Online" },
        { value: "GDPR in the NHS - Live Online" },
        { value: "Information Governance Training Online" },
      ],
    },
    {
      label: "Products",
      children: [
        { value: "Cyber Essentials Certification: Supported-Service" },
        { value: "CYBER ESSENTIALS CERTIFICATION – SELF SERVICE" },
        { value: "Template Privacy Notice" },
        { value: "Cybersecurity Training Course" },
        { value: "Simplifying Privacy & Security for Healthcare Technology" },
        { value: "Information Governance Training Course" },
        { value: "Data Protection Officer Training Course" },
        { value: "GDPR Course" },
        { value: "Data Protection Officer Training, Exam & Certification" },
        { value: "GDPR Training – Foundation Course" },
        { value: "GDPR Training – Introduction" },
        { value: "Data Flow Mapping Workshop" },
        { value: "GDPR Training Workshop" },
        { value: "Data Protection Training for staff" },
        { value: "Data Protection Compliance Assessment" },
        { value: "Cloud Security Assessment" },
      ],
    },
  ];

  return (
    <>
    {isLoading ? <Loader /> : ""}
      <div
        className={customClass ? customClass : "btn-design"}
        onClick={handleShow}
        style={{maxWidth:'unset', display:'inline-flex'}}
      >
        {name}
      </div>

      {showForm ? '': "" }

      <Modal show={show} className="spk_adv_mdl dscmr" onHide={handleShowForm}>
        <Modal.Header className="p-0" >
        <button type="button" className="btn-close" aria-label="Close" onClick={() => {setShow(false); setShowForm(false)}}></button>
        <div className="points mt-sm-4 mt-4">
            <div dangerouslySetInnerHTML={{__html:data}}></div>
            <div className="my-3">
              <input type="checkbox" className="me-2 mt-1" onClick={() => setEnable(!enable)}/>
            <b>Please read this legal disclaimer carefully before using the Clinical Safety Officer Handbook and Compliance Toolkit. By accessing and using the Handbook, you acknowledge and accept these terms and conditions. If you do not agree with any part of this disclaimer, do not use the Handbook.</b>
            </div>
            {
              id ? 
              <button
                className={customClass ? customClass : "btn-design"}
                onClick={handleCloseFormToPage}
                disabled={enable}
                style={{maxWidth:'unset', display:'inline-flex'}}
              >
                Proceed
              </button> :
             <button
                className={customClass ? customClass : "btn-design"}
                onClick={handleShowForm}
                disabled={enable}
                style={{maxWidth:'unset', display:'inline-flex'}}
              >
                Proceed
              </button> 
            }

                      
        </div>
        </Modal.Header>
      </Modal>  

      <Modal show={showForm} className="spk_adv_mdl" onHide={handleClose}>
        <Modal.Header closeBtton className="p-0">
        <button type="button" className="btn-close" aria-label="Close" onClick={() => {setShow(false); setShowForm(false)}}></button>
          <div className="adv_mdl_ctnt">
            <div className="mdl_hdng">
              <h5>{name}</h5>
              <p>
                Speak to an advisor about your organisations requirements and
                have your questions answered, with no obligation.
              </p>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>
                  First name<b className="text-danger"> *</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  name="firstName"
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p className="required mt-1 mb-0">{formik.errors.firstName}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>
                  Last name<b className="text-danger"> *</b>
                </label>
                <input className="form-control" type="text"  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  name="lastName"
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p className="required mt-1 mb-0">{formik.errors.lastName}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>
                  Email<b className="text-danger"> *</b>
                </label>
                <input className="form-control" type="email" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="required mt-1 mb-0">{formik.errors.email}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>
                  Organisation Name<b className="text-danger"> *</b>
                </label>
                <input className="form-control" type="text" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.organisationName}
                  name="organisationName"
                />
                {formik.touched.organisationName && formik.errors.organisationName ? (
                  <p className="required mt-1 mb-0">{formik.errors.organisationName}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>Job Title</label>
                <input className="form-control" type="text" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.jobTitle}
                  name="jobTitle"
                />
                {formik.touched.jobTitle && formik.errors.jobTitle ? (
                  <p className="required mt-1 mb-0">{formik.errors.jobTitle}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>
                  Organisation Size<b className="text-danger"> *</b>
                </label>
                <select className="form-control" onChange={(e) => setIsOrganisationSize(e.target.value)}>
                  <option value="0-10">Micro(0 - 10)</option>
                  <option value="11-*">Micro(11 - *)</option>
                </select>
               
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input className="form-control" type="tel" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  name="phoneNumber"
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <p className="required mt-1 mb-0">{formik.errors.phoneNumber}</p>
                ) : null}
              </div>
              <div className="form-group">
                <label>
                  Reason for Contacting<b className="text-danger"> *</b>
                </label>
                <CustomMultiSelect data={dataArray} valueHandler={setIsReason}/>
                
              </div>
              <div className="form-group">
                <label>Country</label>
                <input className="form-control" type="text" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  name="country"
                />
                {formik.touched.country && formik.errors.country ? (
                  <p className="required mt-1 mb-0">{formik.errors.country}</p>
                ) : null}
              </div>
              <div className="form-group">
                We respect your data and will process it in accordance with our{" "}
                <Link prefetch={true} href="/privacypolicy">Privacy Policy</Link>.
              </div>

              <button type="submit" className="btn-design mt-3">
                Submit Your Details
              </button>
            </form>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default DownloadFormDisclamer;
