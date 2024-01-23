import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useTheme } from "next-themes";
import FlashMessage from "../FlashMessage";

const Contact = () => {
  const form = useRef();
  const captchaRef = useRef(null);

  const [mounted, setMounted] = useState(false);
  const [token, setToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState([]);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [token]);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the execute function on
    // it. you can use other functions as documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  const showErrorMessage = (error) => toast.error(error, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const showSuccessMessage = () => toast.success("Message Sent Successfully!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    if (submitting)
      return;

    setErrors([]);
    setSubmitting(true);

    const formData = new FormData(form.current);
    const formEntries = Object.fromEntries(formData.entries());

    fetch('/api/contact', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formEntries),
    })
      .then(
          // fetch done
          (response) => response.json(),
          (error) => setErrors([error.message || (error + "")])
      )
      .then(
          // response json() done
          (data) => {
            if (data.status == "SUCCESS") {
              setSent(true);
            } else if (data.errors) {
              setErrors(data.errors);
            } else {
              setErrors([data.message || "Failed to validate human verification"])
            }
          },
          (error) => setErrors([error + ""])
      )
      .catch((error) => setErrors([error + ""]))
      .finally(() => {
        captchaRef.current.resetCaptcha();
        setToken(null);
        setSubmitting(false);
      });
  };

  if (!mounted)
    return <></>;

  if (sent)
    return (
      <>
        <FlashMessage type="confirm" title="Message sent successfully!" />
        <div className="page_text">
          <p>Thank you for sending me a message! Rest assured that I will do my best to answer it as promptly as possible.</p>
          <p>In the meantime, don&apos;t hesitate to view my <a href="https://www.linkedin.com/in/sebboness/">LinkedIn profile</a>.</p>
        </div>
      </>
    )

  return (
    <>
      
                  
      <p>
        I would appreciate it if you could share a bit about who you are, and take a moment to tell me a few
        details about how I can help you in your current or upcoming project. I am looking forward to
        starting a conversation with you.
      </p>
      
      <p>
        I respectfully decline any advertisements.
      </p>

      <div className="fields">
        <form
          className="contact_form"
          id="myForm"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="first">
            <ul>
              <li>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </li>
              {/* END FIRST NAME */}

              <li>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </li>
              {/* END EMAIL */}

              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                ></textarea>
              </li>
              {/* END SUBJECT MESSAGE */}
            </ul>
          </div>

          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
            onLoad={onLoad}
            onVerify={setToken}
            ref={captchaRef}
            theme={theme == "system" ? "dark" : theme}
          />

          <p>
            <small>
              This site is protected by hCaptcha and 
              its <a href="https://www.hcaptcha.com/privacy">Privacy Policy</a><> </>
              and <a href="https://www.hcaptcha.com/terms">Terms of Service</a> apply.
            </small>
          </p>

          {token
            ? <div className="button">
                <button type="submit" className="ib-button">
                  {submitting
                    ? <><i className="fa-solid fa-yin-yang fa-spin"></i> Sending...</>
                    : <>Say hello <i className="fa-regular fa-paper-plane"></i></>}
                </button>
              </div>
            : <></>}
          
          {/* END SUBMIT BUTTON */}
        </form>
        {/* END FORM */}
      </div>
      {/* END FIELDS */}
      {/* END COTACT */}

      {errors && errors.length > 0
        ? <>
          <div className="clear"><br /></div>
          <FlashMessage type="failure" title="Failed to send message :(" errors={errors} />
        </>
        : <></>}
    </>
  );
};

export default Contact;
