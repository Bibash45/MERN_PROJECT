import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const Register = () => {
  return (
    <Formik>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-5">
            <h2 className="text-center text-muted">Register Form</h2>
            <Form>
              <div className="mb-3">
                <label htmlFor="fname">First Name</label>
                <Field
                  type="text"
                  name="fname"
                  id="fname"
                  className="form-control"
                ></Field>
                <ErrorMessage name="fname">
                   {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="lname">Last Name</label>
                <Field
                  type="text"
                  name="lname"
                  id="lname"
                  className="form-control"
                ></Field>
                <ErrorMessage name="lname">
                   {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                ></Field>
                <ErrorMessage name="email">
                   {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                ></Field>
                <ErrorMessage name="password">
                   {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
                </div>
              <div className="mb-3">
                <label htmlFor="cpassword">Confirm Password</label>
                <Field
                  type="cpassword"
                  name="cpassword"
                  id="cpassword"
                  className="form-control"
                ></Field>
                <ErrorMessage name="cpassword">
                   {msg=><div style={{color:'red'}}>{msg}</div>}
                </ErrorMessage>
              </div>
              
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
