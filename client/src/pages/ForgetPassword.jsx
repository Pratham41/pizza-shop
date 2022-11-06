import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import {
  register,
  sendOtpAction,
  verifyOtpAction,
} from "../redux/actions/user";
import ToastNotification from "../components/ToastNotification";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [showOtpButton, setShowOtpButton] = useState(false);
  const [showOtpSendToastForgetPassword, setShowOtpSendToastForgetPassword] = useState(false);
  const [showOtpVerifyToastForgetPassword, setShowOtpVerifyToastForgetPassword] = useState(false);

  let navigate = useNavigate(true);
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const sendOtp = useSelector((state) => state.sendOtp);
  const { loadingSendOtp, errorSendOtp, successSendOtp } = sendOtp;

  const verifyOtp = useSelector((state) => state.verifyOtp);
  const { loadingVerifyOtp, errorVerifyOtp, successVerifyOtp } = verifyOtp;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();

    // dispatch(register(name, email, password, isEmailVerified));
    setEmail("");
    setPassword("");
  };

  const verifyEmailHandler = (e) => {
    e.preventDefault();
    dispatch(sendOtpAction(email));
  };

  const verifyOtpHandler = (e) => {
    e.preventDefault();
    dispatch(verifyOtpAction(email, otp));
  };

  useEffect(() => {
    if (successSendOtp) {
      setShowOtpBox(!showOtpBox);
      setShowOtpButton(!showOtpButton);
      setShowOtpSendToastForgetPassword(!showOtpSendToastForgetPassword);
    }
  }, [successSendOtp]);

  useEffect(() => {
    if (successVerifyOtp) {
      setIsEmailVerified(!isEmailVerified);
      setShowOtpBox(!showOtpBox);
      setShowOtpVerifyToastForgetPassword(!showOtpVerifyToastForgetPassword);
    }
  }, [successVerifyOtp]);

  return (
    <>
      <ToastNotification
        onCloseHandler={() => setShowOtpSendToastForgetPassword(false)}
        showCondition={showOtpSendToastForgetPassword}
        toastVariant="success"
        toastHeader="Success"
        toastBody="OTP sent to email id !"
      />

      <ToastNotification
        onCloseHandler={() => setShowOtpVerifyToastForgetPassword(false)}
        showCondition={showOtpVerifyToastForgetPassword}
        toastVariant="success"
        toastHeader="Success"
        toastBody="Email verification successfull !"
      />

      <FormContainer>
        <h1 className="my-2 text-center text-dark">Forget Password</h1>
        {error && <h4 className="text-center text-danger">{error}</h4>}
        {errorSendOtp && (
          <h4 className="text-center text-danger">{errorSendOtp}</h4>
        )}
        {errorVerifyOtp && (
          <h4 className="text-center text-danger">{errorSendOtp}</h4>
        )}

        {loading && <Loader />}
        {loadingSendOtp && <Loader />}
        {loadingVerifyOtp && <Loader />}
        <Form onSubmit={submitHandler} className="">
          <Form.Group controlId="email" className="mt-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              autoComplete="off"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          {!showOtpButton && (
            <Button
              type="button"
              onClick={verifyEmailHandler}
              className="mt-2 btn btn-sm btn-danger"
            >
              Verify Email
            </Button>
          )}

          {showOtpBox && (
            <Form.Group controlId="otp" className="mt-2">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              ></Form.Control>
              <Button
                type="button"
                onClick={verifyOtpHandler}
                className="mt-2 btn btn-sm btn-success"
              >
                Verify OTP
              </Button>
            </Form.Group>
          )}

          <Form.Group controlId="password" className="mt-2">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              autoComplete="off"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>

          <Button type="submit" className="mt-4 btn btn-primary">
            Save
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account ? <Link to="/login">Sign In</Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default ForgetPassword;
