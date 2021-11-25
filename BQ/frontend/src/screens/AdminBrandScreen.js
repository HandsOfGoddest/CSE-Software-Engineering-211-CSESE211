import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import {  listCate, listBrands } from "../actions/brandActions";
import { Link } from 'react-router-dom'

const AdminBrandScreen = ({ history, match }) => {
    
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const cateList = useSelector((state) => state.cateList || {})
    const { loading: loadingCates, error: errorCates, categoryList} = cateList
    console.log(categoryList)
    console.log(match.params.name)

    useEffect(() => {
      if (!userInfo) {
        history.push("/login");
      }
      else {
        if (!user?.name) {
          dispatch(getUserDetails('profile'));
        } 
        console.log('listcase')
        dispatch(listCate(match.params.name))
        dispatch(listBrands());
        
    }
    }, [dispatch,match, history, userInfo, user]);
  

    const removeCateHandler = (id) => {
        console.log("delete cate")
    }
    
    return(
        loadingCates?<Loader/>:(!user?.isAdmin?<h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1>:(
        <Row style = {{marginTop:"100px"}}>
            <Row>
            {loadingCates ? <Loader/> : errorCates ? <Message variant='danger'>{errorCates}</Message> : (
                <Col>
                    <Row>
                        <Col md={8}>
                            <h2>{`Catagorys of ${match.params.name}`}</h2>
                        </Col>
                        <Col md={4}>
                            <button type="button" class="btn btn-success">Add Category + </button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name Category</th>
                                <th>
                                
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map(cate => (
                                <tr key={cate._id}>
                                    <td>{cate._id}</td>
                                    <td><Link to={`/admin/product/${match.params.name}/${cate.cateName}`}>{cate.cateName}</Link></td>
                                    <td>
                                    <Button type='button' variant='light' onClick={() => removeCateHandler(cate._id)}><i className='fas fa-trash'></i></Button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
                
            )}
            </Row>
        </Row>
        )
    ))}


    
  
  export default AdminBrandScreen;
  