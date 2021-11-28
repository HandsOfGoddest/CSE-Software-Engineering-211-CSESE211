import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { getOrderList, listMyOrders, updateOrder } from "../actions/orderActions";
import { disable } from "colors";

const ClerkScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderList = useSelector((state) => state.orderList);
  const { loading: loadingOrders, error: errorOrders, orders } = orderList;

  const updateOrderStatus = useSelector((state) => state.updateOrderStatus);
  const {success: successUpdateOrder} = updateOrderStatus

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user?.name) {
        dispatch(getUserDetails('profile'));
        dispatch(getOrderList())
      }
      if(successUpdateOrder){
        dispatch(getOrderList())
      }
    }
  }, [dispatch, history, userInfo, user,successUpdateOrder]);

  const confirmHandler = (id) => {
    console.log("cf")
    dispatch(updateOrder(id, "Đã xác nhận"))
  };

  const confirmPayHandler = (id) => {
    console.log("cf")
    dispatch(updateOrder(id, "Đã thanh toán"))
  };

  return(
    loading?<></>:(!user?.isClerk?<h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1>:(<Row style = {{marginTop:"100px"}}>
      <Col md={12}>
        <h2>QUẢN LÝ ĐƠN HÀNG</h2>
        {loadingOrders ? <Loader/> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> : (
<div className="clerk-overlay">
<div className="clerk-list">
                      <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>PAID</th>
                <th>CONFIRM</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid ? <i className='fas fa-check' style={{color: 'green'}}></i>: (
                    <i className='fas fa-times' style={{color: 'red'}}></i>
                  )}</td>
                  <td>{order.status=="Đã giao hàng" ?<i className='fas fa-check' style={{color: 'green'}}></i> : (
                    <i className='fas fa-times' style={{color: 'red'}}></i>
                  )}</td>
                  <td>
                    {order.isPaid?<Button type='button' variant='light' style={{color: 'gray'},{width:'100%'}}>Đã thanh toán</Button>:
                    <Button type='button'  style={{color: 'green'},{width:'100%'}} onClick={() => confirmPayHandler(order._id)}>Thanh toán</Button>
                    }
                  </td>
                  <td>
                    {!order.isPaid?<Button type='button' variant='light' style={{color: 'gray'},{width:'100%'}}>Chưa thanh toán</Button>:
                    order.status === "Chưa xác nhận"?
                    <Button type='button'  style={{color: 'green'},{width:'100%'}} onClick={() => confirmHandler(order._id)}>Xác nhận</Button>:
                    <Button type='button' variant='light' style={{color: 'blue'},{width:'100%'}} >Đã xác nhận</Button>
                    }
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
</div>
        )}
      </Col>
    </Row>
  )
  ))
}

export default ClerkScreen;
