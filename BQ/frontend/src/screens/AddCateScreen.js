import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewBrand, addNewCate } from "../actions/brandActions";
import axios from "axios";

const AddCateScreen = ({ location, history, match }) => {
  const [cateName, setCateName] = useState("");
  const [catePathName, setCatePathName] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const {  user } = userDetails;
 
  const uploadFileHandle = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
    console.log(formData)
    try {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        const { data } = await axios.post('/api/upload', formData, config)
        setImage(data)
        setUploading(false)
    } catch (error) {
        setUploading(false)
    }
  }

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
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
            value={image}
          ></Form.Control>
          <Form.Control type='file' id='image-file' label='Choose file' custom onChange={uploadFileHandle}></Form.Control>
          {uploading && <Loader />}
        </Form.Group>
        <br></br>
        <Image src={image} alt="image" fluid rounded></Image>
        <br></br>
        <Button type="submit" variant="primary">
          Confirm
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddCateScreen;
