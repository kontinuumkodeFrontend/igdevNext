'use client'
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import {
  ORDER_CONSUMER_KEY,
  ORDER_CONSUMER_SECRET,
  PAYMENT_API,
  WOOCOMERCE_API_URL,
} from "../../services/Url";
import { Loader } from "../../Components/Loader";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import InnerBanner from "../../Components/InnerBanner";
import Link from 'next/link';
import { useRouter, usePathname } from "next/navigation";
import { CountryDropdown } from "react-country-region-selector";
import { toast } from "react-toastify";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import moment from "moment";
import { CoursePagesID } from "../../services/Constants";
import CryptoJS from 'crypto-js';
import Cookies from 'js-cookie';


export default function Checkout() {
const orderSummeryImg = "/images/orderSummery.jpg";
const dpoImg = "/images/dpoImg2.png";

const orderSummeryBanner = "/images/orderSummeryBanner.jpg";
  const router = useRouter();
  const pathName = usePathname();
  let pathArr = pathName.split('/')
  const id = pathArr[2];
  const [data, setData] = useState();
  const navigate = (url) => {
    router.push(url)
  }
  const [isLoading, setIsLoading] = useState(true);
  const [additionalForm, setAdditionalForm] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [productDiscount, setProductDiscount] = useState(0);
  const [countDisable, setCountDisable] = useState(true);
  const [countIncDisable, setCountIncDisable] = useState(false);
  const [orderSuccessData, setOrderSuccessData] = useState({});
  const [orderSum, setOrderSum] = useState(false);
  const [orderSumData, setOrderSumData] = useState({});
  const [paymentMode, setPaymentMode] = useState("COD");
  const [courseData, setCourseData] = useState(null);
  const [payData, setPayData] = useState(null);
  const discountedProducts = ['31325', '31323', '31321', '31319', '31318', '31316', '31314', '31312', '31221']

  useEffect(() => {
    if (discountedProducts?.includes(id)) {
      const encryptedData = Cookies.get('encryptedData');
      if (encryptedData) {
        const bytes = CryptoJS.AES.decrypt(encryptedData, 'encryption_key');
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setCourseData(decryptedData?.courseData);
        setPayData(decryptedData?.payData);
      }
    }else{
      Cookies.remove('encryptedData');
    }
  }, [id])
  

  const paymentMethods = [
    // { id: 1, title: "COD", description: "Cash On Delivery" },
    { id: 2, title: "Cards", description: "Pay with your Card" },
  ];

  

  useEffect(() => {
    if (!payData) {
      const foundItem = discountedProducts?.find(item => item === id);
      if (foundItem) {
        setProductDiscount(33.33);
      } else {
        setProductDiscount(0);
      }
    }

     /* Check Additional Form Requirment */
     if (CoursePagesID.includes(id)) {
      setAdditionalForm(true);
     }
  }, [id, payData, discountedProducts]);
  

  useEffect(() => {
    axios
      .get(WOOCOMERCE_API_URL + "/" + id, {
        auth: {
          username: ORDER_CONSUMER_KEY,
          password: ORDER_CONSUMER_SECRET,
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        setPrice(response?.data?.price)
        setTotalPrice(response?.data?.price)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
      if(typeof window !== 'undefined'){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
  }, []);


  var bannerContent = {
    cardTitle: orderSum ? "Order Summery" : "Checkout",
    cardPara: "",
  };

  const decrementHandler = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setCountIncDisable(false);
    } else {
      setCountDisable(true);
    }
  };
  const incrementHandler = () => {
    if (count < 5) {
      setCount((prev) => prev + 1);
      setCountDisable(false);
    
    } else {
      setCountIncDisable(true);
    }
  };

  const discountPriceHandler = () => {
    if(payData && payData?.discount > 0){
      const intNumber = payData?.discount;
      const newPrice = (intNumber/100) * price * count
      const total = price * count - parseInt(newPrice)
      setTotalPrice(total)
    }else if(productDiscount > 0 && !payData){
      // const intNumber = parseInt(productDiscount);
      const intNumber = payData?.discount
      const newPrice = (intNumber/100) * price * count
      const total = price * count - parseInt(newPrice)
      setTotalPrice(total)
    }else{}
  }

  useEffect(() => {
    discountPriceHandler()
  }, [count])
  

  const cancelHandler = () => {
    navigate("/");
  };

  const createOrder = async (orderData) => {
    const apiUrl = "https://admin.ig-smart.com/wp-json/wc/v3/orders";
    setIsLoading(true);
    try {
      const response = await axios.post(apiUrl, orderData, {
        auth: {
          username: ORDER_CONSUMER_KEY,
          password: ORDER_CONSUMER_SECRET,
        },
      });
      if(response?.status === 201) {
          toast.success("Order Placed Successfully");
          setOrderSum(true);
          setOrderSuccessData(response?.data);
          Cookies.remove('encryptedData');
          setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }

    } catch (error) {
      console.error("Error creating order:", error);
      setIsLoading(false);
    }
  };
  
  /**********/
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    
  /**********/ 

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      country: "",
      streetAdress: "",
      town: "",
      state: "",
      pincode: "",
      phone: "",
      mobile: "",
      email: "",
      fax: "",
      vat: "",
      course: "",
      hearAboutIGS: "",
      refStudentName: "",
      foodAllergies: "",
      jobTitle: "",
      currentRole: "",
      careerBackground: "",
      technicalStrength: "",
      technicalWeekness: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(25, "Must be 25 characters or less")
        .required("Must be Required First Name"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Must be Required Last Name"),
      country: Yup.string().required("Must be Required Country Name"),
      companyName: Yup.string().required("Must be Required Organisation Name"),
      streetAdress: Yup.string().required("Must be Required Street Address"),
      town: Yup.string().required("Must be Required Town/City"),
      state: Yup.string().required("Must be Required State Name"),
      pincode: Yup.string().required("Must be Required Pincode/ZIP"),
      phone: Yup.string()
        .matches(/^[0-9]{10,14}$/, "Please Enter Valid Number")
        .required("Phone Number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Must be Required Email Address"),
      course: Yup.string(),
      jobTitle: Yup.string(),
      currentRole: Yup.string(),
    }),
    onSubmit:async  (values) => {
      setIsLoading(true)
      setLoading(true);
      let newTotal = payData ? totalPrice : (productDiscount > 0 && !payData) ? totalPrice : price * count

      if(paymentMode === "COD"){

        const orderdata = {
          payment_method: "cod",
          payment_method_title: "Cash On delivery",
          set_paid: false,
          status:'processing',
          currency:'GBP',
          billing: {
            first_name: values?.firstName,
            last_name: values?.lastName,
            company: values?.companyName,
            country: values?.country,
            address_1: values?.streetAdress,
            city: values?.town,
            state: values?.state,
            postcode: values?.pincode,
            mobilephone: values?.mobile,
            email: values?.email,
            fax: values?.fax,
            vat: values?.vat,
            course_attending: values?.course,
            hear_about_training: values?.hearAboutIGS,
            food_needs: values?.foodAllergies,
            current_job: values?.jobTitle,
            current_role: values?.currentRole,
            enter_student_name: values?.refStudentName,
            socialmedia_profile: values?.streetAdress,
            technical_strength: values?.technicalStrength,
            technical_weakness: values?.technicalWeekness,
          },
          shipping: {
            first_name: values?.firstName,
            last_name: values?.lastName,
            company: values?.companyName,
            country: values?.country,
            address_1: values?.streetAdress,
            city: values?.town,
            state: values?.state,
            postcode: values?.pincode,
            phone: values?.phone,
            mobilephone: values?.mobile,
            email: values?.email,
            fax: values?.fax,
            vat: values?.vat,
            course_attending: values?.course,
            hear_about_training: values?.hearAboutIGS,
            food_needs: values?.foodAllergies,
            current_job: values?.jobTitle,
            current_role: values?.currentRole,
            enter_student_name: values?.refStudentName,
            socialmedia_profile: values?.streetAdress,
            technical_strength: values?.technicalStrength,
            technical_weakness: values?.technicalWeekness,
          },           
          line_items: [
            {
              product_id: data?.id,
              quantity: count,
              total: newTotal.toString(),
              subtotal: newTotal.toString()              
            },
          ]
        };
        setOrderSumData(orderdata);
        createOrder(orderdata);
        setLoading(false);
        setIsLoading(false);
      }else if(stripe && elements){
        const orderdata = {
          payment_method: "card",
          payment_method_title: "Card",
          set_paid: false,
          status:'completed',
          currency:'GBP',
          billing: {
            first_name: values?.firstName,
            last_name: values?.lastName,
            company: values?.companyName,
            country: values?.country,
            address_1: values?.streetAdress,
            city: values?.town,
            state: values?.state,
            postcode: values?.pincode,
            mobilephone: values?.mobile,
            email: values?.email,
            fax: values?.fax,
            vat: values?.vat,
            course_attending: values?.course,
            hear_about_training: values?.hearAboutIGS,
            food_needs: values?.foodAllergies,
            current_job: values?.jobTitle,
            current_role: values?.currentRole,
            enter_student_name: values?.refStudentName,
            socialmedia_profile: values?.streetAdress,
            technical_strength: values?.technicalStrength,
            technical_weakness: values?.technicalWeekness,
          },
          shipping: {
            first_name: values?.firstName,
            last_name: values?.lastName,
            company: values?.companyName,
            country: values?.country,
            address_1: values?.streetAdress,
            city: values?.town,
            state: values?.state,
            postcode: values?.pincode,
            phone: values?.phone,
            mobilephone: values?.mobile,
            email: values?.email,
            fax: values?.fax,
            vat: values?.vat,
            course_attending: values?.course,
            hear_about_training: values?.hearAboutIGS,
            food_needs: values?.foodAllergies,
            current_job: values?.jobTitle,
            current_role: values?.currentRole,
            enter_student_name: values?.refStudentName,
            socialmedia_profile: values?.streetAdress,
            technical_strength: values?.technicalStrength,
            technical_weakness: values?.technicalWeekness,
          },
          line_items: [
            {
              product_id: data?.id,
              quantity: count,
              total: newTotal.toString(),
              subtotal: newTotal.toString()
            },
          ],
        };
        
        try {
          const { token, error } = await stripe.createToken(elements.getElement(CardElement));
          if (error) {
            toast.error(error.code)
            setIsLoading(false)
            setLoading(false)
          } else {
            const response = await fetch(PAYMENT_API, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                amount:newTotal , 
                stripeToken: token.id,
                product_id: data?.id,
                email: values?.email
              }),
            });

            if (response.ok) {
              setOrderSumData(orderdata);
              createOrder(orderdata);            
            } else {
              toast.error("Your Payment is failed try again")
              setLoading(false);
              setIsLoading(false)
            }
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
        setIsLoading(false)
      }
      
    }

  
  },
});

  const OrderSummery = () => {
    return (
      <section className="sec-padding">
        <Container>
          <div className="order-img">
            <img  loading="lazy"  width="" height=""   src={orderSummeryImg} className="img-fluid" alt="orderSummeryImg" />
          </div>
          <div className="orderDetail">
            <div>
              <label>ORDER NUMBER</label>
              <p>#{orderSuccessData?.number}</p>
            </div>
            <div>
              <label>DATE</label>
              <p>{moment(data?.date_paid).format('LLL')}</p>
            </div>
            <div>
              <label>TOTAL</label>
              <p>{orderSuccessData?.total}</p>
            </div>
            <div>
              <label>PAYMENT METHOD</label>
              <p>{orderSuccessData?.payment_method_title}</p>
            </div>
          </div>

          <div className="table-hdr">Order details</div>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th style={{ width: "80%" }}>Product</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Link
                      href={`/product-detail/${
                        orderSuccessData &&
                        orderSuccessData?.line_items[0]?.product_id
                      }`}
                    >
                      {orderSuccessData &&
                        orderSuccessData?.line_items[0]?.name}
                    </Link>
                  </td>
                  <td className="text-center">
                    {orderSuccessData &&
                      orderSuccessData?.line_items[0]?.quantity}
                  </td>
                  <td className="text-center">
                    £
                    {orderSuccessData && `${orderSuccessData?.line_items[0]?.price} * ${orderSuccessData?.line_items[0]?.quantity}`}
                  </td>
                </tr>
                <tr>
                  <td scope="th" colSpan={2}>
                    Subtotal
                  </td>
                  <td className="text-center">
                    £
                    {orderSuccessData && `${orderSuccessData?.line_items[0]?.price * orderSuccessData?.line_items[0]?.quantity}`}
                  </td>
                </tr>
                <tr>
                  <td scope="th" colSpan={2}>
                  Subtotal discount
                  </td>
                  <td className="text-center">
                    
                    {orderSuccessData && `- £${orderSuccessData?.discount_total}`}
                  </td>
                </tr>
                <tr>
                  <td scope="th" colSpan={2}>
                    VAT
                  </td>
                  <td className="text-center">
                    £0
                  </td>
                </tr>

                <tr>
                  <td scope="th" colSpan={2}>
                    Payment method
                  </td>
                  <td className="text-center">
                    {orderSuccessData?.payment_method_title &&
                      orderSuccessData?.payment_method_title}
                  </td>
                </tr>

                <tr>
                  <td scope="th" colSpan={2}>
                    Total
                  </td>
                  <td className="text-center">
                    £
                    {orderSuccessData && orderSuccessData?.line_items[0]?.total}
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped table-bordered mt 3">
              <tbody>
                {orderSumData?.billing?.mobilephone && (
                  <tr>
                    <td>Mobile Phone</td>
                    <td>{orderSumData?.billing?.mobilephone}</td>
                  </tr>
                )}
                {orderSumData?.billing?.fax && (
                  <tr>
                    <td>Fax</td>
                    <td>{orderSumData?.billing?.fax}</td>
                  </tr>
                )}
                {orderSumData?.billing?.vat && (
                  <tr>
                    <td>VAT</td>
                    <td>{orderSumData?.billing?.vat}</td>
                  </tr>
                )}

                {orderSumData?.billing?.course_attending && (
                  <tr>
                    <td>Course or seminar attending:</td>
                    <td>{orderSumData?.billing?.course_attending}</td>
                  </tr>
                )}
                {orderSumData?.billing?.hear_about_training && (
                  <tr>
                    <td>How did you hear about IG Smart?</td>
                    <td>{orderSumData?.billing?.hear_about_training}</td>
                  </tr>
                )}

                {orderSumData?.billing?.enter_student_name && (
                  <tr>
                    <td>
                      If you were referred by a IG Smart Training student,
                      please enter their name
                    </td>
                    <td>{orderSumData?.billing?.enter_student_name}</td>
                  </tr>
                )}

                {orderSumData?.billing?.food_needs && (
                  <tr>
                    <td>Please specify any food allergies or special needs</td>
                    <td>{orderSumData?.billing?.food_needs}</td>
                  </tr>
                )}

                {orderSumData?.billing?.current_job && (
                  <tr>
                    <td>What is your current job title?</td>
                    <td>{orderSumData?.billing?.current_job}</td>
                  </tr>
                )}

                {orderSumData?.billing?.current_role && (
                  <tr>
                    <td>Please describe your current role</td>
                    <td>{orderSumData?.billing?.current_role}</td>
                  </tr>
                )}

                {orderSumData?.billing?.socialmedia_profile && (
                  <tr>
                    <td>
                      E.g. URL of your LinkedIn profile or please describe your
                      career background
                    </td>
                    <td>{orderSumData?.billing?.socialmedia_profile}</td>
                  </tr>
                )}

                {orderSumData?.billing?.technical_strength && (
                  <tr>
                    <td>
                      Please describe technical strengths you may have in
                      relation to the course or seminar you are attending
                    </td>
                    <td>{orderSumData?.billing?.technical_strength}</td>
                  </tr>
                )}

                {orderSumData?.billing?.technical_weakness && (
                  <tr>
                    <td>
                      Please describe any technical weaknesses you may have in
                      relation to the course or seminar you are attending
                    </td>
                    <td>{orderSumData?.billing?.technical_weakness}</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="shipDetail">
              <div>
              Organisation Name:<span> {orderSuccessData?.shipping?.company}</span>
              </div>
              <div>
                Full Name:
                <span>
                  {" "}
                  {orderSuccessData?.shipping?.first_name +
                    " " +
                    orderSuccessData?.shipping?.last_name}
                </span>
              </div>
              <div>
                City:<span> {orderSuccessData?.shipping?.city}</span>
              </div>
              <div>
                State: <span>{orderSuccessData?.shipping?.state}</span>
              </div>
              <div>
                PinCode: <span>{orderSuccessData?.shipping?.postcode}</span>
              </div>
              <div>
                Country: <span>{orderSuccessData?.shipping?.country}</span>
              </div>
              <div>
                Phone Number:<span> {orderSuccessData?.shipping?.phone}</span>
              </div>
              <div>
                Email: <span>{orderSumData?.shipping?.email}</span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link href={"/"} className="btn-design mt-3">
              Go To Home
            </Link>
          </div>
        </Container>
      </section>
    );
  };

  return (
    <div className="order-page">
      {isLoading ? <Loader /> : ""}
      <InnerBanner bannerCnt={bannerContent} banImg={orderSummeryBanner} />

      {orderSum ? (
        <OrderSummery />
      ) : (
        <>
          <section
            className="story-head sec-padding-top pb-3"
            style={{ backgroundColor: "#fff" }}
          >
            <Container>
              <h4 className="fw-600">Product Detail</h4>
              <div className="prdct-rw">
                <div className="prt-img">
                  <img  loading="lazy"  width="" height=""  
                    src={
                      data?.images?.length > 0 ? data?.images[0]?.src : dpoImg
                    }
                    className="w-100"
                    alt={"prtorderSummeryImg"}
                  />
                </div>
                <div className="prt-data">
                  <h5>{data?.name}</h5>
                  <div
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: data?.short_description,
                    }}
                  ></div>
                  <div className="mt-3 d-flex align-items-center">
                    <div className="m-0 me-2 ">
                      <h5 className="mb-0 fw-bold">Total Price:</h5>{" "}
                    </div>
                    <p className="m-0 smpl-prc">
                    {payData?.discount > 0 && count >= 2 ?
                      <><del>{`£${parseInt(data?.price) * count}`}</del>{" "}<span>£{totalPrice}</span></> :
                      !payData && count >= 2 && productDiscount > 0 ?
                      <><del>{`£${parseInt(data?.price) * count}`}</del>{" "}<span>£{totalPrice}</span></> :
                      `£${data?.price * count}`
                    }
                    
                    </p>
                  </div>
                    <b className="mt-1 text-danger">
                      {(payData?.discount > 0 && count >= 2) ? `You have get discount of ${payData?.discount}% beacuse you buy  minimum 2 course` : ""}
                      {(!payData && count >= 2 && productDiscount > 0) ? `You have get discount of ${productDiscount}% beacuse you buy  minimum 2 course` : ""}
                    </b>
                    
                  <div className="basket-count">
                    <button
                      className="decrement-btn"
                      disabled={countDisable}
                      onClick={decrementHandler}
                    >
                      -
                    </button>
                    <div className="count-text">{count}</div>
                    <button
                      className="incment-btn"
                      disabled={countIncDisable}
                      onClick={incrementHandler}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div
                  className="btnClose MuiBox-root css-0"
                  onClick={cancelHandler}
                >
                  <svg
                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    data-testid="CloseIcon"
                  >
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </div>
              </div>
            </Container>
          </section>
          <section
            className="story-head sec-padding-bottom"
            style={{ backgroundColor: "#fff" }}
          >
            <Container>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  {/* Basic Details */}
                  <div className={additionalForm ? "col-md-6" : "col-12"}>
                    <h4 className="mb-4">Billing details</h4>
                    <div className="row">
                      <div className="form-group mb-3 col-md-6">
                        <label>
                          First name<span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="firstName"
                          id="firstName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.firstName}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-md-6">
                        <label>
                          Last Name <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          id="lastName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.lastName}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>Organisation name <span className="required">*</span></label>
                        <input
                          className="form-control"
                          type="text"
                          name="companyName"
                          id="companyName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.companyName}
                        />
                         {formik.touched.companyName && formik.errors.companyName ? (
                          <p className="required mt-1 mb-0" >{formik.errors.companyName}</p>
                        ) : null}
                      </div>
                      <div className="form-group col-md-12 mb-3">
                        <label htmlFor="country">
                          Country <span className="required">*</span>
                        </label>
                        <CountryDropdown
                          name="country"
                          id="country"
                          classes="countryPicker form-control"
                          onBlur={formik.handleBlur}
                          value={formik.values.country}
                          onChange={(val) => {
                            formik.setFieldValue("country", val);
                          }}
                        />
                        {formik.touched.country && formik.errors.country ? (
                          <p className="required mt-1 mb-0" >{formik.errors.country}</p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Street address<span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="streetAdress"
                          id="streetAdress"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.streetAdress}
                        />
                        {formik.touched.streetAdress &&
                        formik.errors.streetAdress ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.streetAdress}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Town / City<span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="town"
                          id="town"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.town}
                        />
                        {formik.touched.town && formik.errors.town ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.town}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          State / County <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="state"
                          id="state"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.state}
                        />
                        {formik.touched.state && formik.errors.state ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.state}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Postcode / ZIP <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="pincode"
                          id="pincode"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.pincode}
                        />
                        {formik.touched.pincode && formik.errors.pincode ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.pincode}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="number"
                          name="phone"
                          id="phone"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phone}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.phone}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>Mobile Phone (optional) </label>
                        <input
                          className="form-control"
                          type="number"
                          name="mobile"
                          id="mobile"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.mobile}
                        />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Email address <span className="required">*</span>
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          name="email"
                          id="email"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <p className="required mt-1 mb-0">
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>Fax (optional)</label>
                        <input
                          className="form-control"
                          type="text"
                          name="fax"
                          id="fax"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.fax}
                        />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>VAT (optional)</label>
                        <input
                          className="form-control"
                          type="text"
                          name="vat"
                          id="vat"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.vat}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className={additionalForm ? "col-md-6" : "col-12 d-none"}>
                    <h4 className="mb-4">Additional information</h4>
                    <div className="row">
                      <div className="form-group mb-3 col-12">
                        <label>
                          Course or seminar attending
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="course"
                          id="course"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.course}
                        />
                        
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          How did you hear about IG Smart? (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="hearAboutIGS"
                          id="hearAboutIGS"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.hearAboutIGS}
                        />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          If you were referred by a IG Smart Training student,
                          please enter their name (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="refStudentName"
                          id="refStudentName"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.refStudentName}
                        />
                      </div>

                      <div className="form-group mb-3 col-12">
                        <label>
                          Please specify any food allergies or special needs
                          (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="foodAllergies"
                          id="foodAllergies"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.foodAllergies}
                        />
                      </div>

                      <div className="form-group mb-3 col-12">
                        <label>
                          What is your current job title?{" "}
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="jobTitle"
                          id="jobTitle"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.jobTitle}
                        />
                       
                      </div>

                      <div className="form-group mb-3 col-12">
                        <label>
                          Please describe your current role{" "}
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="currentRole"
                          id="currentRole"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.currentRole}
                        />                       
                      </div>

                      <div className="form-group mb-3 col-12">
                        <label>
                          E.g. URL of your LinkedIn profile or please describe
                          your career background (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="careerBackground"
                          id="careerBackground"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.careerBackground}
                        />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Please describe technical strengths you may have in
                          relation to the course or seminar you are attending
                          (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="technicalStrength"
                          id="technicalStrength"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.technicalStrength}
                        />
                      </div>
                      <div className="form-group mb-3 col-12">
                        <label>
                          Please describe any technical weaknesses you may have
                          in relation to the course or seminar you are attending
                          (optional)
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="technicalWeekness"
                          id="technicalWeekness"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.technicalWeekness}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="payment-options">
                    <ul className="payment-methods">
                      {paymentMethods.map((method) => (
                        <li key={method.id} className="payment-method">
                          <label>
                            <input
                              type="radio"
                              name="paymentMethod"
                              defaultValue={method.title}
                              checked={method.title === paymentMode}
                              onChange={(e) => setPaymentMode(e.target.value)}
                            />
                            <span className="method-title">
                              {" "}
                              {method.title}
                            </span>
                            <span className="method-description">
                              {" "}
                              {method.description}
                            </span>
                          </label>
                        </li>
                      ))}
                    </ul>
                    {
                      paymentMode === 'COD' ?
                      // <div className="payDesc">Book now and pay later.</div>
                      '':
                      <>
                       <div className="payDesc">Pay via Cards</div>
                      <div className="py-4 px-3 mb-2 bg-white">
                        <CardElement />
                      </div>
                      </>
                    }
                    <p className="text-left">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href={"/privacypolicy"}>privacy policy</Link>. By proceeding you confirm you have read them and agree to be bound by them.</p>
                  </div>
                </div>
                {
                paymentMode === 'COD' ?
                <button type="submit" className="btn-design mt-3">
                  Place Order
                </button>:
                <><button type="submit" disabled={!stripe || loading} className="btn-design mt-3">
                      Pay Now
                    </button>
                 </>
                }
              </form>
            </Container>
          </section>
        </>
      )}
    </div>
  );
};
