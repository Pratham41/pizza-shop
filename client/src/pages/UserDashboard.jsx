import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listOfRegularPizza } from "../redux/actions/pizza";
import {  Col, Container, Row } from "react-bootstrap";
import Pizzas from "../components/Pizzas";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const listRegularPizza = useSelector((state) => state.listRegularPizza);
  const { loading, allPizzas, error } = listRegularPizza;

  useEffect(() => {
    dispatch(listOfRegularPizza());
  }, [dispatch]);

  return (
    <Container >
      <h1 className="text-dark my-4 text-center">
        <i className="fa-solid fa-pizza-slice"></i> Pizza's
      </h1>
      {error && <h4 className="text-center text-danger">{error}</h4>}
      {loading && <Loader />}

      <Row>
        <Col md={9} lg={9}>
          <Row>
            {allPizzas?.map((pizza) => (
              <Col key={pizza._id} sm={12} md={6} lg={4} xl={3}>
                <Pizzas pizza={pizza} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={3} lg={3} className="customPizzaColumn my-2 py-2 text-center">
          
        <Link className="btn btn-dark rounded" to="/customPizza">
        <i className="fa-solid fa-plus "></i>  Create Custom Pizza
        </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDashboard;
