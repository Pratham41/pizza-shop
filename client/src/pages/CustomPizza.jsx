import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listOfCheese,
  listOfMeat,
  listOfPizzaBase,
  listOfSauces,
  listOfVeggies,
} from "../redux/actions/pizza";
import {
  Col,
  Container,
  Row,
  Form,
  Card,
  ListGroup,
  Button,
} from "react-bootstrap";
import Loader from "../components/Loader";

const CustomPizza = () => {
  const dispatch = useDispatch();
  const listCheese = useSelector((state) => state.listCheese);
  const { loadingCheese, allCheese, errorCheese } = listCheese;

  const listMeat = useSelector((state) => state.listMeat);
  const { loadingMeat, allMeat, errorMeat } = listMeat;

  const listBase = useSelector((state) => state.listBase);
  const { loadingBases, allPizzaBases, errorBases } = listBase;

  const listSauce = useSelector((state) => state.listSauce);
  const { loadingSauces, allSauces, errorSauces } = listSauce;

  const listVeggies = useSelector((state) => state.listVeggies);
  const { loadingVeggies, allVeggies, errorVeggies } = listVeggies;

  const selectedItems = useSelector((state) => state.selectedItems);
  const { values } = selectedItems;

  useEffect(() => {
    dispatch(listOfCheese());
    dispatch(listOfMeat());
    dispatch(listOfPizzaBase());
    dispatch(listOfSauces());
    dispatch(listOfVeggies());
  }, [dispatch]);

  const getTotalCount = () => {
    let totalCount = values && Object.keys(values).length;
    if (values?.veggies) {
      totalCount += values?.veggies.length - 1;
    }
    if (values?.meat) {
      totalCount += values?.meat.length - 1;
    }
    console.log("total count ", totalCount);
    return totalCount;
  };

  const getUniqueArray = (array) => {
    console.log("aaray", array);
    const key = "name";

    const arrayUniqueByKey = [
      ...new Map(array.map((item) => [item[key], item])).values(),
    ];
    debugger;
    return arrayUniqueByKey;
  };

  return (
    <Container>
      <h1 className="text-dark my-4 text-center">
        <i className="fa-solid fa-pizza-slice"></i> Pizza's
      </h1>
      {errorBases && <h4 className="text-center text-danger">{errorBases}</h4>}
      {errorCheese && (
        <h4 className="text-center text-danger">{errorCheese}</h4>
      )}
      {errorMeat && <h4 className="text-center text-danger">{errorMeat}</h4>}
      {errorSauces && (
        <h4 className="text-center text-danger">{errorSauces}</h4>
      )}
      {errorVeggies && (
        <h4 className="text-center text-danger">{errorVeggies}</h4>
      )}

      {loadingCheese && <Loader />}
      {loadingBases && <Loader />}
      {loadingMeat && <Loader />}
      {loadingSauces && <Loader />}
      {loadingVeggies && <Loader />}

      <Row>
        <Col md={7} lg={7}>
          <Form.Label>Select Pizza Base</Form.Label>
          <Form.Select
            onChange={(e) =>
              dispatch({
                type: "SELECT_REQUEST",
                payload: { values: { base: e.target.value } },
              })
            }
          >
            {allPizzaBases?.map((base) => (
              <option key={base._id} name="base" value={base.size}>
                {base.size}
              </option>
            ))}
          </Form.Select>
          <Form.Label>Select Sauce</Form.Label>
          <Form.Select
            onChange={(e) =>
              dispatch({
                type: "SELECT_REQUEST",
                payload: { values: { sauce: e.target.value } },
              })
            }
          >
            {allSauces?.map((sauce) => (
              <option key={sauce._id} name="sauce" value={sauce.name}>
                {sauce.name}
              </option>
            ))}
          </Form.Select>
          <Form.Label>Select Cheese</Form.Label>
          <Form.Select
            onChange={(e) =>
              dispatch({
                type: "SELECT_REQUEST",
                payload: { values: { cheese: e.target.value } },
              })
            }
          >
            {allCheese?.map((cheese) => (
              <option key={cheese._id} name="cheese" value={cheese.name}>
                {cheese.name}
              </option>
            ))}
          </Form.Select>
          <Form.Group>
            <Form.Label>Select Veggies</Form.Label>
            <br />
            {allVeggies?.map((veg) => (
              <Form.Check
                key={veg._id}
                as="input"
                value={veg}
                name="veggies"
                onChange={(e) => {
                  const newVeggies = values?.veggies
                    ? [...values?.veggies]
                    : [];
                  console.log("nw", newVeggies);
                  console.log("hjhj", values?.veggies);
                  console.log(e.target.value);
                  console.log("name", e.target.name);
                  console.log("veg", veg);

                  dispatch({
                    type: "SELECT_REQUEST",
                    payload: {
                      values: {
                        veggies: getUniqueArray([...newVeggies, veg]),
                      },
                    },
                  });
                }}
                inline
                type="checkbox"
                label={veg.name}
              />
            ))}
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Meat</Form.Label>
            <br />

            {allMeat?.map((meat) => (
              <Form.Check
                key={meat._id}
                as="input"
                value={meat.name}
                name="meat"
                onChange={(e) => {
                  const newMeat = values?.meat ? [...values?.meat] : [];
                  console.log("nw", newMeat);
                  console.log("hjhj", values?.meat);
                  dispatch({
                    type: "SELECT_REQUEST",
                    payload: {
                      values: {
                        meat: [...new Set([...newMeat, e.target.value])],
                      },
                    },
                  });
                }}
                inline
                type="checkbox"
                label={meat.name}
              />
            ))}
          </Form.Group>
        </Col>
        <Col
          md={5}
          lg={5}
          style={{ borderLeft: "1px solid grey" }}
          className="my-2 py-2 text-center"
        >
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Total Price:</Col>
                  <Col>
                    <strong>700</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total Items:</Col>
                  <Col>{getTotalCount()}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn btn-dark rounded">Place Order</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomPizza;
