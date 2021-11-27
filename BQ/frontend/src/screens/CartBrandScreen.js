import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card  } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart, } from '../actions/cartActions'
import ListBrandCart from '../components/ListBrandCart'

const CartBrandScreen = ({match, location, history}) => {
    const productId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]):1

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin);
    const {  userInfo } = userLogin;


    const cart = useSelector((state) => state.cart)
    const { cartItems} = cart
    console.log(cartItems)
    var temp =[]
    const brandItems = cartItems.map((x) => {
        if(x.brandName === match.params.brandname){
            temp=[...temp,x]
        }} )
    const brandCartItems = temp


    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty,match])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        if(!userInfo){
            history.push('/login')
        }
        else{
            history.push(`/shipping/${match.params.brandname}`)
        }
        
    }

    return (<Col>
    <Row>
        <ListBrandCart/>
    </Row>
    <Row>
        <Col md={8}><h1>Shopping Cart</h1>
            </Col>
        <Col md={8}>
            
            {brandCartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> : (
                <ListGroup variant = 'flush'>
                    {brandCartItems.map(item => (
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded></Image>
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                </Col>
                                <Col md={2}>{item.price} VND</Col>
                                <Col md={2}>
                                <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                {[...Array(item.countInStock).keys()].map((x) => (
                                    <option key={x+1} value={x+1}>
                                    {x + 1}
                                    </option>
                                ))}
                                </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}><i className='fas fa-trash'></i></Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            )}
        </Col>
        <Col md={4}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Subtotal ({brandCartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                        {brandCartItems.reduce((acc, item) => acc + item.qty*item.price, 0).toFixed(2)} VND
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button type='button' className='btn-block' disable={brandCartItems.length === 0} onClick={checkoutHandler}>
                            Check out
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </Col>
    )
}

export default CartBrandScreen