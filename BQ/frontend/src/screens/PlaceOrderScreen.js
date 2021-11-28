import React, { useEffect } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from '../components/Message';
import CheckoutSteps from '../components/CheckoutSteps';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orderActions';
import { removeFromCart, removeOrderCreate } from '../actions/cartActions';
import { REMOVE_OR_CR } from '../constants/cartConstant';

const PlaceOrderScreen = ({history,match}) => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems} = cart
    console.log(cartItems)
    var temp =[]
    const brandItems = cartItems.map((x) => {
        if(x.brandName === match.params.brandname){
            temp=[...temp,x]
        }} )
    const brandCartItems = temp

    //Calculate prices
    cart.itemsPrice = brandCartItems.reduce((acc, item) => acc + item.price*item.qty, 0)
    cart.shippingPrice = cart.itemsPrice > 200000 ? 0 : 30000
    cart.totalPrice = cart.itemsPrice + cart.shippingPrice

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        if(success){
            dispatch({type: REMOVE_OR_CR})
            history.push(`/order/${order._id}/${match.params.brandname}`)
            brandCartItems.map((item) => {
                console.log(item.product)
                dispatch(removeFromCart(item.product))
            })
        }
        // eslint-disable-next-line
    },[success])

    const placeOrderHandler = () => {
       
        dispatch(createOrder({
            orderItems: brandCartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            totalPrice: cart.totalPrice,
        })) 
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 brandname={match.params.brandname}/>
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address}, 
                                {cart.shippingAddress.city}, 
                                {cart.shippingAddress.postalCode},{' '}
                            </p>
                            <p>
                            <strong>Bàn : </strong>
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cartItems.length === 0 ? <Message>Your cart is empty</Message>:(
                                <ListGroup variant='flush'>
                                    {brandCartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>
                                                <Col md={4}>
                                                    {item.qty} x {item.price} VND = {item.qty*item.price} VND
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>{cart.itemsPrice} VND</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{cart.shippingPrice} VND</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>{cart.totalPrice} VND</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button 
                                    type='button' 
                                    className='btn-block' 
                                    disable={brandCartItems === 0} 
                                    onClick={placeOrderHandler}
                                    >Place Order</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default PlaceOrderScreen