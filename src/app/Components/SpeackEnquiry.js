'use client'
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CONTACT_FORM_BASE_URL,
  CONTACT_FORM_LAST_URL,
  CONTACT_PAGE_FORM_URL,
  SPEAK_TO_ADVISOR_URL,
} from "../services/Url";
import { contactFormApi } from "../services/Service";
import { Loader } from "./Loader";

function SpeackEnquiry({ name, customClass }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber:"",
      subject:"",
      message:"",

    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required First Name"),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10,14}$/, "Please Enter Valid Number")
        .required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Must be Required Email Address"),
      subject: Yup.string().required("Must be Required Message"),
      message: Yup.string().required("Must be Required Message"),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("your-name", values?.firstName);
      formData.append("your-email", values?.email);
      formData.append("your-number", values?.phoneNumber);
      formData.append("text-352", values?.subject);
      formData.append("your-message", values?.message);
      let url =
        CONTACT_FORM_BASE_URL + CONTACT_PAGE_FORM_URL + CONTACT_FORM_LAST_URL;     
        contactFormApi(url, formData, setIsLoading);
        setShow(false)
        formik.resetForm();
    },

    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("your-name", values?.fullName);
      formData.append("your-email", values?.userEmail);
      formData.append("your-number", values?.phone);
      formData.append("text-352", values?.subject);
      formData.append("your-message", values?.message);
      let url =
        CONTACT_FORM_BASE_URL + CONTACT_PAGE_FORM_URL + CONTACT_FORM_LAST_URL;
      // setError(false)
      contactFormApi(url, formData, setIsLoading);
      setShow(false)
      formik.resetForm();
    }
  });



  return (
    <>
    {isLoading ? <Loader /> : ""}
      <div
        className={customClass ? customClass : "btn-design"}
        onClick={handleShow}
      >
        {name}
      </div>

      <Modal show={show} className="spk_adv_mdl" onHide={handleClose}>
        <Modal.Header closeButton className="p-0">
          <div className="adv_mdl_ctnt w-100">
            <div className="mdl_hdng mb-4">
              <h5>Make A Enquiry</h5>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label>
                  Name<b className="text-danger"> *</b>
                </label>
                <input
                  className="form-control"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  name="name"
                />
                {formik.touched.name && formik.errors.name ? (
                  <p className="required mt-1 mb-0">{formik.errors.name}</p>
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
                <label>Subject</label>
                <input className="form-control" type="text" onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  name="subject"
                />
                {formik.touched.subject && formik.errors.subject ? (
                  <p className="required mt-1 mb-0">{formik.errors.subject}</p>
                ) : null}
              </div>

              <div className="form-group">
              <label>Message</label>
              <textarea
                    placeholder="Message"
                    rows={5}
                    className="form-control mw-100"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                    name="message"
                  ></textarea>
                  {formik.touched.message && formik.errors.message ? (
                    <p className="required  mb-0">
                      {formik.errors.message}
                    </p>
                  ) : null}
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

export default SpeackEnquiry;
