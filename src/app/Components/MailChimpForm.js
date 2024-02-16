// import MailchimpSubscribe from "react-mailchimp-subscribe"

// const url = process.env.REACT_APP_MAILCHIMP;

// const SimpleForm = () => <MailchimpSubscribe url={url}/>

// export const MailChimpForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <>
//         {status === "success" ? '' : <SimpleForm onSubmitted={formData => subscribe(formData)} />}
//         {status === "error" && <div style={{ color: "red !important" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "sending" && <div style={{ color: "#fff" }}>Sending...</div>}
//         {status === "success" && <div style={{ color: "#fff" }} className="text-center fw-bold">Subscribed !</div>}
//       </>
//     )}
//   />
// )


import React, { useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

// const url = process.env.REACT_APP_MAILCHIMP;
const url ='https://ig-smart.us21.list-manage.com/subscribe/post?u=2b6cb0bad724ea143d7f22c88&amp;id=8174a742e6&amp;f_id=00d9f6e6f0';

export const MailChimpForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (formData, subscribe) => {
    subscribe(formData)
      .then(() => {
        setSubmitted(true);
        setErrorMessage('');
      })
      .catch((err) => {
        setErrorMessage(err.message || 'Something went wrong.');
      });
  };

  return (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <>
          {status === "success" ? (
            <div style={{ color: "#fff" }} className="text-center fw-bold">
              Subscribed!
            </div>
          ) : (
            <>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.email.value;
                  if (email && email.indexOf("@") > -1) {
                    handleSubscribe({ EMAIL: email }, subscribe);
                  } else {
                    setErrorMessage("Please enter a valid email address.");
                  }
                }}
              >
                <input type="email" name="email" required />
                <button type="submit">Subscribe</button>
              </form>
              {status === "error" && (
                <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message || errorMessage }} />
              )}
              {status === "sending" && (
                <div style={{ color: "#fff" }}>Sending...</div>
              )}
            </>
          )}
        </>
      )}
    />
  );
};


