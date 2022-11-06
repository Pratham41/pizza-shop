import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Pizzas = ({ pizza }) => {
  return (
    <>
      <LinkContainer to={`/pizza/${pizza._id}`}>
        <Row>
          <Col className="my-2 py-2">
            <Card className=" shadow rounded text-center bg-light">
              <Card.Img
                src="https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"
                variant="top"
              />
              <Card.Body>
                <Card.Title className="" as="h6">
                  {pizza.name}
                </Card.Title>
                <hr />
                <Card.Text as="div">size : {pizza.size}</Card.Text>
                {/* <Card.Text as="div">{pizza.type}</Card.Text>
                <Card.Text as="div">{pizza.available_stock}</Card.Text> */}
                <hr />
                <Card.Text as="h3">₹{pizza.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </LinkContainer>
    </>
  );
};

export default Pizzas;
