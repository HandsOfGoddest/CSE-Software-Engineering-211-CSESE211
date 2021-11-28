import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShippingAddress } from '../actions/cartActions';



const ShippingScreen = ({ history,match }) => {
    const cart = useSelector(state => state.cart)
    console.log(cart)
    const { shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)
     
    const dispatch = useDispatch()
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(saveShippingAddress({ address, city, postalCode, country }))
      history.push(`/payment/${match.params.brandname}`)
    }

    return (
    <FormContainer>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập địa chỉ"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>Thành phố</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập thành phố"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <h1>On The Spot</h1>
        <Form.Group controlId="country">
          <Form.Label>Bàn</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số bàn"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>



        <Button type='submit' variant='primary'>
          Continue
        </Button>
        
        </Form>
    </FormContainer>
    
    )}

export default ShippingScreen