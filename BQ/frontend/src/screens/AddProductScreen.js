import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { addNewProduct } from "../actions/productActions";
import axios from "axios";


const AddProductScreen = ({ location, history, match }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [countInStock, setCountInStock] = useState("");
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

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/login')
    } 
    
  }, [dispatch, history, userInfo, user ]);

  

 
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(match.params.catename)
    dispatch(addNewProduct(name, image, description, price, countInStock, match.params.pathname, match.params.catename))
    console.log(match.params.pathname)
    history.push(`/admin/product/${match.params.pathname}/${match.params.catename}`)
  };

  return (
    <FormContainer>
      <h1>Add Product </h1>
      {error && <Message variant="danger">{error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="text">
          <Form.Label> Product Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter brand name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description for product"
            onChange={(e) => setDescription(e.target.value)}
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
        <Image src={image} alt={name} fluid rounded></Image>
        <br></br>
        <Form.Group controlId="text">
          <Form.Label> Price </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="text">
          <Form.Label>Count In Stock </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Count In Stock"
            onChange={(e) => setCountInStock(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Confirm
        </Button>
      </Form>
    </FormContainer>
  );
};

export default AddProductScreen;
