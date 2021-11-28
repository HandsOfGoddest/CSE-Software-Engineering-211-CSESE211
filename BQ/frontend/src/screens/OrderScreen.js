import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from 'react-paypal-button-v2'
import { Link } from "react-router-dom";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getOrderDetails, payOrder } from "../actions/orderActions";
import { ORDER_PAY_RESET } from "../constants/orderConstants";

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const [sdkReady, setSdkReady] = useState(false)

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading:loadingPay, success:successPay } = orderPay;

  console.log("order",order);

  if (!loading) {
    //Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(0);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }

  useEffect(() => {
    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get('/api/config/paypal')
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if(!order || successPay || order._id !== orderId){
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(orderId));
    } else if(!order.isPay){
      if(!window.paypal){
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }
  
  }, [dispatch,orderId,successPay,order]);

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2> Hóa đơn </h2>
              <p>
                <strong>Name: </strong> {order.user.name}
              </p>
              <p>
                <strong>Email: </strong> <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Địa chỉ: </strong>
                {order.shippingAddress.address},{order.shippingAddress.city} ,
                {order.shippingAddress.postalCode},{" "}
                {order.shippingAddress.country}
              </p>
              {order.status ==="Đã giao hàng"?(
                  <Message variant = 'success'>Delivered {order.deliveredAt}</Message>
              ):(
                  <Message variant = 'danger'>Not Delivered</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2> Hình thức thanh toán</h2>
              <p>
              <strong>Hình thức: </strong>
              {order.paymentMethod}
              </p>
              {order.isPaid?(
                  <Message variant = 'success'>Paid </Message>
              ):(
                  <Message variant = 'danger'>Not Paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Sản phẩm mua</h2>
              {order.orderItems.length === 0 ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>

                        <Col md={5}>
                          {item.qty} x{item.price} VND = {item.qty * item.price}{" "}
                          VND
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Tổng hóa đơn</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col> Items </Col>
                  <Col>{order.itemsPrice} VND</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col> Thuế GTGT </Col>
                  <Col>{order.shippingPrice} VND</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>{order.totalPrice} VND</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (order.paymentMethod === "PayPal")&& (
                <ListGroup.Item>
                  {loadingPay && <Loader/> }
                  {!sdkReady ? <Loader/> : (
                    <PayPalButton amount={order.totalPrice}
                    onSuccess={successPaymentHandler}/>
                  )}
                </ListGroup.Item>
              )}
              {order.paymentMethod === "Trực tiếp" && (
                <Message variant = 'success' ><div style={{width:"100%"}}><p style={{textAlign:"center"}}>PLEASE PAY FOR RECEPTIONIST</p></div></Message>
              )}
            </ListGroup>
            
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;