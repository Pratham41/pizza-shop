import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { login } from "../redux/actions/user";

const Login = () => {
  let navigate = useNavigate(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <FormContainer>
      <h1 className="my-2 text-center text-dark">Sign In</h1>
      {error && <h4 className="text-center text-danger">{error}</h4>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler} className="">
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="mt-4 btn btn-primary">
          Sign In
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          New User ? <Link to="/register">Register</Link>
        </Col>
        <Col>
          Trouble ? <Link to="/forgetpassword">Forget Password ?</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
