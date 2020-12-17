import React from "react";
import { connect } from 'react-redux';
import { Formik, Form, Field } from "formik";
import { Button, Input } from "antd";
import { authSchema } from "./authValidationSchema";
import { loginUser } from "../../actions/authActions";

const Login = ({ isLoginForm, loginUser }) => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: ""
  };

  const submitLoginForm = async (data) => {
    await loginUser(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={authSchema}
      onSubmit={(val) => submitLoginForm(val)}
    >
      {({
        values,
        resetForm,
        submitForm,
        errors,
        touched,
        dirty,
        setFieldValue
      }) => (
        <Form validateOnChange={true}>
          <div>
            <div className="login">
              {!isLoginForm && (
                <div>
                  <div className="login__label">
                    <label>Name</label>
                  </div>
                  <div>
                    <Field
                      name="name"
                      render={({ field }) => (
                        <>
                          <Input
                            name={field.name}
                            id={field.name}
                            size="large"
                            placeholder="Enter Name"
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                          />
                          <span className="login__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
              )}

              <div>
                <div className="login__label">
                  <label>Email</label>
                </div>
                <div>
                  <Field
                    name="email"
                    render={({ field }) => (
                      <>
                        <Input
                          name={field.name}
                          id={field.name}
                          size="large"
                          placeholder="Enter Email Address"
                          value={field.value}
                          onChange={(e) => field.onChange(e)}
                        />
                        <span className="login__warning">
                          {errors[field.name]}
                        </span>
                      </>
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="login__label">
                  <label>Password</label>
                </div>
                <div>
                  <Field
                    name="password"
                    render={({ field }) => (
                      <>
                        <Input.Password
                          name={field.name}
                          id={field.name}
                          size="large"
                          placeholder="Enter Password"
                          value={field.value}
                          onChange={(e) => field.onChange(e)}
                        />
                        <span className="login__warning">
                          {errors[field.name]}
                        </span>
                      </>
                    )}
                  />
                </div>
              </div>
              {!isLoginForm && (
                <div>
                  <div className="login__label">
                    <label>Confirm Password</label>
                  </div>
                  <div>
                    <Field
                      name="cpassword"
                      render={({ field }) => (
                        <>
                          <Input.Password
                            name={field.name}
                            id={field.name}
                            size="large"
                            placeholder="Enter Password"
                            value={field.value}
                            onChange={(e) => field.onChange(e)}
                          />
                          <span className="login__warning">
                            {errors[field.name]}
                          </span>
                        </>
                      )}
                    />
                  </div>
                </div>
              )}
              <div style={{ width: "max-content", marginLeft: "auto" }}>
                <div />
                <Button
                  type="primary"
                  size="large"
                  onClick={() => submitForm()}
                >
                  {isLoginForm ? "Submit" : "Register"}
                </Button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data))
})
export default connect(null, mapDispatchToProps)(Login);
