import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import {
  CONTACT_FORM_BASE_URL,
  CONTACT_FORM_LAST_URL,
  CAREER_REQUEST_PROPOSAL,
} from "../services/Url";
import { contactFormApi } from "../services/Service";
import { Loader } from "./Loader";

function CareerCV({ name, customClass,setcloseBar }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      phoneNumber:"",
      coverLetter: "",
      areaOfInterest:"",
      cvFile: null

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required First Name"),
      lastName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required Last Name"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Must be Required Email Address"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,14}$/, "Please Enter Valid Number")
        .required("Phone Number is required"),
      coverLetter: Yup.string()
        .required("Must be Required Cover Letter"),
      areaOfInterest: Yup.string()
        .required("Must be Required Area of Interest"),
        cvFile: Yup.mixed()
        .test('file', 'Please select a PDF or DOC file', (value) => {
          if (value) {
            const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            return allowedFileTypes.includes(value.type);
          }
          return true; 
        })
        .test('fileSize', 'File size is too large', (value) => {
          if (value) {
            return value.size <= 5 * 1024 * 1024;
          }
          return true; 
        })
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("FirstName", values?.firstName);
      formData.append("LastName", values?.lastName);
      formData.append("email-334", values?.email);
      formData.append("tel-735", values?.phoneNumber);
      formData.append("textarea-92", values?.coverLetter);
      formData.append("Areaofinterest", values?.areaOfInterest);
      formData.append("file-877", values?.cvFile);

      let url =
        CONTACT_FORM_BASE_URL + CAREER_REQUEST_PROPOSAL + CONTACT_FORM_LAST_URL;      
        contactFormApi(url, formData, setIsLoading);
        setShow(false)
        formik.resetForm();
          
    },
  });

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
            <div className="mdl_hdng mb-4">
              <h5>Request a Proposal </h5>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>
                  First Name<b className="text-danger"> *</b>
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
                  Last Name<b className="text-danger"> *</b>
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
                <label>Phone number<b className="text-danger"> *</b></label>
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
                  Cover Letter<b className="text-danger"> *</b>
                </label>
                <textarea 
                  className="form-control"
                  onBlur={formik.handleBlur}
                  name="coverLetter"
                  onChange={formik.handleChange}
                  value={formik.values.coverLetter}
                ></textarea>
                {formik.touched.coverLetter && formik.errors.coverLetter ? (
                  <p className="required mt-1 mb-0">{formik.errors.coverLetter}</p>
                ) : null}
              </div>

              <div className="form-group">
                <label>Area of Interest<b className="text-danger"> *</b></label>
                <input className="form-control" type="text" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.areaOfInterest}
                  name="areaOfInterest"
                />
                {formik.touched.areaOfInterest && formik.errors.areaOfInterest ? (
                  <p className="required mt-1 mb-0">{formik.errors.areaOfInterest}</p>
                ) : null}
              </div>
             
              <div className="form-group">
                <label>CV<b className="text-danger"> *</b></label>
                <input
                  className="form-control"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(event) => {
                    formik.setFieldValue('cvFile', event.currentTarget.files[0]);
                  }}
                  onBlur={formik.handleBlur}
                  name="cvFile"
                />
                {formik.touched.cvFile && formik.errors.cvFile ? (
                  <p className="required mt-1 mb-0">
                    {formik.errors.cvFile}
                  </p>
                ) : null
                }
              </div>

              <div className="form-group">
                We respect your data and will process it in accordance with our{" "}
                <Link prefetch={true} href="/privacypolicy">Privacy Policy</Link>.
              </div>

              <button type="submit" className="btn-design mt-3">
                Submit
              </button>
            </form>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default CareerCV;
