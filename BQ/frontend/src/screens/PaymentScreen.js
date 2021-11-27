import React, { useState } from 'react'
import { Form, Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';



const PaymentScreen = ({ history,match }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress} = cart

    if(!shippingAddress){
        history.push(`/shipping/${match.params.brandname}`)
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
     
    const dispatch = useDispatch()

    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(savePaymentMethod( paymentMethod ))
      history.push(`/placeorder/${match.params.brandname}`)
    }

    return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group>
                <Form.Label as='legend'>Select Method</Form.Label>
            
            <Col>
                <Row>
                    <Form.Check 
                    type='radio' 
                    label='PayPal or Credit Card' 
                    id='PayPal' 
                    name='paymentMethod' 
                    value='PayPal'
                    
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                </Row>
                <Row>
                    <Form.Check 
                    type='radio' 
                    label='Trực tiếp' 
                    id='Trực tiếp' 
                    name='paymentMethod' 
                    value='Trực tiếp'
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    ></Form.Check>
                </Row>
            </Col>
            </Form.Group>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
        
        </Form>
    </FormContainer>
    
    )}

export default PaymentScreen