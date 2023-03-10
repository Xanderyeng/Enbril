import { React, useState, useRef } from "react";
import { svgLeft } from "../../assets";
import { svgRight } from "../../assets";
import {StarsCanvas} from '../canvas/index'
import {
  elipse,
  SMS,
  contactPhone,
  locationPin,
  userSVG,
  mailSVG,
} from "../../assets/svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
// import handleFormSubmit from "./handler";
import "./contact.css";

const Contact = () => {
  // --------- EMAILJS ---- FORM FUNCTIONS -----------

  const form = useRef();

  const Result = () => {
    return (
      <p className='submit-message fadeInBottom'>
        Message recieved.
        <br />
        We shall be in touch with you Soon!
      </p>
    );
  };

  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault;

    emailjs
      .sendForm(
        "service_tjj7wkn",
        "template_tspwuuo",
        form.current,
        "WdH3o5lrRAnNfbzSF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // e.target.reset();
    showResult(true);
  };

  // HIDE THE RESULT MESSAGE

  setTimeout(() => {
    showResult(false)
  }, 15000)

  // --------- EMAILJS ------ END -------

  const formik = useFormik({
    initialValues: {
      from_name: "",
      email: "",
      message: "",
    },
    // FORM VALIDATION
    validationSchema: Yup.object({
      from_name: Yup.string().required("Name is required").min(4),
      email: Yup.string()
        .email("Invalid email address")
        .required("required")
        .min(8),
      message: Yup.string().min(4),
    }),
    // ON FORM SUBMIT

    onSubmit: sendEmail,
    // onSubmit: (values) => {
    //   console.log(values);
    //   handleFormSubmit();
    // },
  });

  return (
    <section className='section-contact' id="contact">
    <StarsCanvas/>
      <div className='container grid grid--2-cols'>
        {/* Contact Info */}
        <div className='connect-info'>
          <span className='subheading'>
            {svgLeft}
            {"get in touch"}
            {/* {`like what you've seen?`} */}
            {svgRight}
          </span>
          <h2 className='heading-secondary'>
            <p>{`let's connect`}</p>
          </h2>
          <span className='elipse'>{elipse}</span>

          {/* INFO */}

          <div className='info'>
            <span>{contactPhone} +254 779 463 799</span>
            <span>{SMS} hello@enbril.co.ke</span>
            <span>{locationPin} 102B, Machakos</span>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className='connect-form '>
          <form
            className='form-control'
            onSubmit={formik.handleSubmit}
            ref={form}
          >
            <div>
              {/* CONTACT FORM CLIENT NAME */}
              <label>
                {formik.errors.from_name && formik.touched.from_name
                  ? formik.errors.from_name
                  : "Your Name *"}
                {/* your name */}
              </label>

              <div>
                <div className='form-input-box'>
                  {userSVG}
                  <input
                    id='name'
                    className='form-name'
                    type='text'
                    name='from_name'
                    value={formik.values.from_name}
                    // onChange={(e) => setName(e.target.value)}
                    onChange={formik.handleChange}
                    placeholder='Enter your name'
                    required
                  ></input>
                </div>
              </div>
            </div>

            <div>
              {/* CONTACT FORM E-MAIL */}

              <label>
                {formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : `Mail *`}
              </label>
              <div className='form-input-box'>
                {mailSVG}
                <input
                  id='mail'
                  className='form-name'
                  type='email'
                  name='email'
                  value={formik.values.email}
                  // onChange={(e) => setMail(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Enter your email'
                  required
                ></input>
              </div>
            </div>

            <div>
              {/* CONTACT FORM MESSAGE */}

              <label>message</label>
              <div className='form-input-box'>
                <textarea
                  id='message'
                  className='form-message'
                  type='text'
                  value={formik.values.message}
                  // onChange={(e) => setMessage(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Type your message'
                  // style={{ height: "100px"}}
                ></textarea>
              </div>
            </div>
            <button
              disabled={!formik.isValid || !formik.dirty}
              visible={result ? {display: "none"} : null}
              type='submit'
              id='submit'
              className='primary-btn'
            >
              send message
            </button>
            <div> {result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
