'use client'
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { contactFormApi } from "../../services/Service";
import {
  CONTACT_FORM_BASE_URL,
  CONTACT_FORM_LAST_URL,
  CONTACT_PAGE_FORM_URL,
} from "../../services/Url";
import { Loader } from "../../Components/Loader";

export const GuranteeJob = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: "",
      userEmail: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required Full Name"),
      subject: Yup.string().required("Must be Required Subject"),
      phone: Yup.string()
        .matches(/^[0-9]{10,14}$/, "Please Enter Valid Number")
        .required("Phone Number is required"),
      userEmail: Yup.string()
        .email("Invalid email address")
        .required("Must be Required Email Address"),
      message: Yup.string().required("Must be Required Message"),
    }),
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
      contactFormApi(url, formData, setIsLoading);
      formik.resetForm();
    },
  });
  return (
    <section className="graduate-jobs-sec sec-padding">
       {isLoading ? <Loader /> : ""}
      <div className="container">
        <h2 className="sec-heading">Our graduates get jobs they love</h2>
        <p className="sub-heading">
          We’ve help thousands of students to seamlessly navigate governance,
          risk, security & compliance roles and responsibilities
        </p>
        <div className="request-for-more-details">
          <div className="row">
            <div className="col-md-6  col-sm-12">
              <div className="custom-list">
                <h2 className="sec-heading">Request more details</h2>
                <p className="sub-heading">Submit your contact details to get:</p>
                <ul>
                  <li>The full course syllabus</li>
                  <li>Your questions answered, by phone or email</li>
                  <li>Helpful career advice with no obligations</li>
                </ul>
                <p className="fw-bold">
                  “I’m happy to announce that the exam is passed and I am
                  evaluated and found worthy the title CDPO (Certified Data
                  Protection Officer) for the next three years. I would like to
                  thank Michael Abtar – CEO IG Smart for a well-conducted and
                  insightful course”
                </p>
                <div className="sm-prfl">
                  <div className="sm-prfl-img">
                    <img  loading="lazy"  width="" height=""   src={'/images/clientImg.png'} alt="profile" />
                  </div>
                  <div className="sm-prfl-ctnt">
                    <div className="sm-prfl-name fw-bold">Tor-Ståle Hansen</div>
                    <span>Group Chief Information Security Officer </span>
                    <br />
                    <span>At Capgemini</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6  col-sm-12 ">
              <div className="d-flex justify-content-center">
                <form
                  className="request-form"
                  data-hs-cf-bound="true"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    type="text"
                    id="fullname"
                    placeholder="Full Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.fullName}
                    name="fullName"
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <p className="required  mb-0">
                      {formik.errors.fullName}
                    </p>
                  ) : null}
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userEmail}
                    name="userEmail"
                  />
                  {formik.touched.userEmail && formik.errors.userEmail ? (
                    <p className="required  mb-0">
                      {formik.errors.userEmail}
                    </p>
                  ) : null}
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    name="phone"
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <p className="required  mb-0">{formik.errors.phone}</p>
                  ) : null}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.subject}
                    name="subject"
                  />
                  {formik.touched.subject && formik.errors.subject ? (
                    <p className="required  mb-0">
                      {formik.errors.subject}
                    </p>
                  ) : null}
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
                  <button className="btn-design" type="submit">
                    Request more details
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
