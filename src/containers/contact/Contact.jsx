import { React, useState } from "react";
import { svgLeft } from "../../assets";
import { svgRight } from "../../assets";
import { elipse, SMS, contactPhone, locationPin, userSVG, mailSVG } from "../../assets/svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import handleFormSubmit from "./handler";
import "./contact.css";

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    // FORM VALIDATION
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required").min(4),
      email: Yup.string()
        .email("Invalid email address")
        .required("required")
        .min(8),
    }),
       // ON FORM SUBMIT

       onSubmit: handleFormSubmit,
    // onSubmit: (values) => {
    //   console.log(values);
    //   handleFormSubmit();
    // },
  });

  return (
    <section className='section-contact'>
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
            <span>{locationPin} 102B Sweetwaters, Machakos</span>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className='connect-form '>
          <form className='form-control' onSubmit={formik.handleSubmit}>
            <div>
              {/* CONTACT FORM CLIENT NAME */}
              <label>
                {formik.errors.name && formik.touched.name
                  ? formik.errors.name
                  : "Your Name"}
                {/* your name */}
              </label>

              <div>
                <div className='form-input-box'>
                  {userSVG}
                  <input
                    id='name'
                    className='form-name'
                    type='text'
                    name='name'
                    value={formik.values.name}
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
                  : "Mail"}
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
                <input
                  id='message'
                  className='form-message'
                  type='text'
                  value={formik.values.message}
                  // onChange={(e) => setMessage(e.target.value)}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Type your message'
                  // style={{ height: "100px"}}
                ></input>
              </div>
            </div>
            <button
              disabled={!formik.isValid || !formik.dirty}
              type='submit'
              id='submit'
              className='primary-btn'
            >
              send message
            </button>
          </form>
        </div>
      </div>
     
    </section>
  );
};

export default Contact;
