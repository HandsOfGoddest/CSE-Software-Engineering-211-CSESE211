import React from "react";
import { Link } from "react-router-dom";
import { Card, CardGroup, Container, Row, Col } from "react-bootstrap";

const Category = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center py-3">BAN MUON GI NEO</Col>
      </Row>
      <CardGroup>
        <Card className="my-3 p-3 rounded">
          <Link to={``}>
            <Card.Img src="/images/cate_favourite.png " width="80" height="100" variant="top" />
          </Link>
          <Card.Body>
            <Link to={``}>
              <Card.Title as="div">
                <strong>Best seller</strong>
              </Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded">
          <Link to={``}>
            <Card.Img src="/images/cg_coffee_web.png " width="80" height="100" variant="top" />
          </Link>
          <Card.Body>
            <Link to={``}>
              <Card.Title as="div">
                <strong>Cà phê</strong>
              </Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded">
          <Link to={``}>
            <Card.Img src="/images/cg_frappu_web.png" width="80" height="100" variant="top" />
          </Link>
          <Card.Body>
            <Link to={``}>
              <Card.Title as="div">
                <strong>Trà/Trà sữa</strong>
              </Card.Title>
            </Link>
          </Card.Body>
        </Card>
        <Card className="my-3 p-3 rounded">
          <Link to={``}>
            <Card.Img src="/images/cg_tea_milk_tea_web.png " width="80" height="100" variant="top" />
          </Link>
          <Card.Body>
            <Link to={``}>
              <Card.Title as="div">
                <strong>Đá xay</strong>
              </Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Category;
