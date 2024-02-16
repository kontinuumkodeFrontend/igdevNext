import React from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import axios from "axios";

import {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  WOOCOMERCE_API_URL,
} from "../services/Url";

export const BundleProduct = () => {
  function fetchProduct(id) {
    return axios
      .get(`${WOOCOMERCE_API_URL}/${id}`, {
        auth: {
          username: CONSUMER_KEY,
          password: CONSUMER_SECRET,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  const { data: product1, isLoading: isLoading1 } = useQuery("product1", () => fetchProduct(31119));
  const { data: product2, isLoading: isLoading2 } = useQuery("product2", () => fetchProduct(31118));
  const { data: product3, isLoading: isLoading3 } = useQuery("product3", () => fetchProduct(31115));

  return (
    <section className="bdl_Pdt_sec sec-padding">
      <div className="container">
        <div className="max-width-heading text-center mb-md-5 mb-4">
          <h2 className="sec-heading mb-2">
            Unlock Comprehensive Compliance Solutions & Exclusive Discounts Today!
          </h2>
          <p>Explore IG-Smart Ltd’s exclusive bundle options designed to meet your specific needs</p>
        </div>
        <div className="bdl_cards">
          {isLoading1 || isLoading2 || isLoading3 ? (
            <div className="sec-padding text-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            [product1, product2, product3].map((product, index) => (
              <div className="bdl_pdt_card" key={product.id}>
                <div className="bdl_upr_hdg">
                  <h5>{product.name}</h5>
                </div>
                <div className="sale">
                { 
                  product.id === 31119 ?"15%" :
                  product.id === 31118 ?"25%" :                
                  "20%"
                }
                </div>
               
                <div className="bdl_ctnt">
                  <div className="bdl_price_wpr">
                    <h4 className="bdl_price mb-0">£{product.price}</h4>
                    <span>+VAT</span>
                  </div>
                  <h5 className="mt-1 mb-0">
                    <del>£{product.regular_price}</del>
                  </h5>
                  { 
                  product.id === 31119 ?<p className="mt-3 text-danger text-center fw-bold">Save 15% off individual product prices!</p> :
                  product.id === 31118 ?<p className="mt-3 text-danger text-center fw-bold">Save 20% off individual product prices!</p> :                
                  <p className="mt-3 text-danger text-center fw-bold">Save 30% off individual product prices!</p>
                }
                  
                  <ul>
                    {product.id === 31119 ? (
                      <>
                        <li>ISO 27001 Information Security Management System Toolkit</li>
                        <li>GDPR Compliance Toolkit</li>
                      </>
                    ) : product.id === 31118 ? (
                      <>
                        <li>Clinical Safety Officer Handbook and DCB1029 and DCB1060 Compliance Toolkit</li>
                        <li>GDPR Compliance Toolkit</li>
                        <li>NHS Data Security & Protection Toolkit</li>
                      </>
                    ) : (
                      <>
                        <li>ISO 27001 Information Security Management System Toolkit</li>
                        <li>NHS Data Security & Protection Toolkit</li>
                        <li>GDPR Compliance Toolkit</li>
                      </>
                    )}
                  </ul>
                  <Link prefetch={true} className="buy_now" href={`/checkout/${product.id}`}>
                    Buy Now
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="text-center mt-3">
          <b>
            Don't miss out on these exclusive offers! Elevate your compliance journey and enhance your organization's security and data protection today.
          </b>
        </div>
      </div>
    </section>
  );
};
