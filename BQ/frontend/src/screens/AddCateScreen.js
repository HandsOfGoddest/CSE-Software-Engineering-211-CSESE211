import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewBrand, addNewCate } from "../actions/brandActions";

const AddCateScreen = ({ location, history, match }) => {
  const [cateName, setCateName] = useState("");
  const [catePathName, setCatePathName] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;
 

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {

    }
    
  }, [dispatch, history, userInfo, redirect, user ]);

  

 
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addNewCate(
      cateName,
      catePathName,
      match.params.pathname,
      image
    ))
    console.log(match.params.pathname)
    history.push(`/admin/cate/${match.params.pathname}`)
  };

  return (
    <FormContainer>
      <h1>Add Category </h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="text">
          <Form.Label> Category Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand name"
            onChange={(e) => setCateName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label> Category pathName </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pathbrand name"
            onChange={(e) => setCatePathName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label> Image URL </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Confirm
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCateScreen;
