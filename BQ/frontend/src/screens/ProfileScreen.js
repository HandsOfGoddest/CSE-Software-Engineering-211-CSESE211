import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { listMyOrders, updateOrder } from "../actions/orderActions";

const ProfileScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const updateOrderStatus = useSelector((state) => state.updateOrderStatus);
  const { success: successUpdateOrder } = updateOrderStatus

  console.log(user)
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user?.name) {
        dispatch(getUserDetails('profile'));
        dispatch(listMyOrders())

      } else {
        setName(user.name);
        setEmail(user.email);
        setUserName(user.userName);
        setGender(user.gender);
        setPhoneNumber(user.phoneNumber);
        setdateOfBirth(user.dateOfBirth);
      }
      if (successUpdateOrder) {
        dispatch(listMyOrders())
      }
    }
  }, [dispatch, history, userInfo, user, successUpdateOrder]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("MẬT KHẨU KHÔNG KHỚP");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password, userName, phoneNumber, gender, dateOfBirth }));
    }
  };

  const confirmHandler = (id) => {
    console.log("cf")
    dispatch(updateOrder(id, "Đã giao hàng"))
  };

  return (
    <Row style={{ marginTop: "100px" }}>
      <Col md={3}>
        <div className="prof-overlay">
          <div className="prof-in4">
            <div className="prof-user">
              <h6>USER PROFILE</h6>
              {message && <Message variant="danger">{message}</Message>}
              {error && <Message variant="danger">{error}</Message>}
              {success && (
                <Message variant="success">

                  Cập nhật thay đổi thành công</Message>
              )}
              {loading && <Loader />}
              <img src="images/avt.png" alt="avt" />

                </div>
              <Form onSubmit={submitHandler}>

                <Form.Group controlId="userName">
                  <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="userName"
                  placeholder="user Name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="name">
                <Form.Label>Tên người dùng</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Nhập tên người dùng"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  type="gender"
                  placeholder="Gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="phoneNumber"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="dateOfBirth">
                <Form.Label>Date Of Birth </Form.Label>
                <Form.Control
                  type="dateOfBirth"
                  placeholder="Date Of Birth"
                  value={dateOfBirth}
                  onChange={(e) => setdateOfBirth(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Địa chỉ Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Nhập mật khẩu mới</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Xác nhận mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Xác nhận mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Button type="submit" variant="primary">
                Cập nhật
              </Button>
            </Form>
          </div>
        </div>
      </Col>
      <Col md={9}>
        <div className="bill-overlay">
          <div className="bill-list">
            <h2>Đơn hàng đã đặt</h2>
            {loadingOrders ? <Loader /> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> : (
              <Table striped bordered hover responsive className='table-sm'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>TOTAL</th>
                    <th>PAID</th>
                    <th>DELIVERED</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order._id}>
                      <td>{order._id}</td>
                      <td>{order.totalPrice}</td>
                      <td>{order.isPaid ? <i className='fas fa-check' style={{ color: 'green' }}></i> : (
                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                      )}</td>
                      <td>{order.status == "Đã giao hàng" ? <i className='fas fa-check' style={{ color: 'green' }}></i> : (
                        <i className='fas fa-times' style={{ color: 'red' }}></i>
                      )}</td>
                      <td>
                        <LinkContainer to={`/order/${order._id}`}>
                          <Button type='button' variant='light' style={{ color: 'gray' }, { width: '50%' }}>Details</Button>
                        </LinkContainer>
                      </td>
                      <td>
                        {!order.isPaid ?
                          <Button type='button' variant='light' style={{ color: 'gray' }, { width: '100%' }}>Chưa thanh toán</Button> :
                          order.status === "Chưa xác nhận" ?
                            <Button type='button' style={{ color: 'green' }, { width: '100%' }} >Chưa được xác nhận</Button> :
                            !(order.status === "Đã giao hàng") ?
                              <Button type='button' style={{ color: 'green' }, { width: '100%' }} onClick={() => confirmHandler(order._id)}>Đã nhận hàng</Button> :
                              <Button type='button' variant='light' style={{ color: 'blue' }, { width: '100%' }} >Đã nhận hàng</Button>
                        }

                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default ProfileScreen;
