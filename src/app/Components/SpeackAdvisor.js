'use client'
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import CustomMultiSelect from "./CustomMultiSelect";
import {
  CONTACT_FORM_BASE_URL,
  CONTACT_FORM_LAST_URL,
  SPEAK_TO_ADVISOR_URL,
} from "../services/Url";
import { contactFormApi } from "../services/Service";
import {toast } from 'react-toastify';
import { Loader } from "./Loader";

function SpeackAdvisor({ name, customClass,setcloseBar }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReason, setIsReason] = useState("");
  const [isError, setIsError] = useState(false);
  const [isOrganisationSize, setIsOrganisationSize] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => {
    if(setcloseBar){
      setcloseBar(false)
    }
    setShow(true)
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

      if(!isReason || !isOrganisationSize){
        toast.error("Please Select All Required Fields")
        setIsError(true)
      }else{
        setShow(false)
        setIsError(false)
        contactFormApi(url, formData, setIsLoading);
        formik.resetForm();
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

      <Modal show={show} className="spk_adv_mdl" onHide={handleClose}>
        <Modal.Header closeButton className="p-0">
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
                <label>Job Title </label>
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
                <option value="" selected disabled>Select Organisation Size</option>
                  <option value="0-10">Micro(0 - 10)</option>
                  <option value="11-*">Micro(11 - *)</option>
                </select>
                {(!isOrganisationSize && isError) && (
                  <p className="required mt-1 mb-0">Please Select Organisation Size</p>
                )}
              </div>
              <div className="form-group">
                <label>Phone number <b className="text-danger"> *</b></label>
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
                {(!isReason && isError) && (
                  <p className="required mt-1 mb-0">Please Enter Reason</p>
                )}
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

export default SpeackAdvisor;
