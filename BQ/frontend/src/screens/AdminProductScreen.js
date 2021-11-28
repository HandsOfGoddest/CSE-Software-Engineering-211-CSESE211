import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails} from "../actions/userActions";
import { listBrands, listCate, listProductsOfCate} from "../actions/brandActions";
import { Link } from 'react-router-dom'
import {deleteProduct} from  "../actions/productActions";

const AdminScreen = ({ history, match }) => {
  
    const dispatch = useDispatch();
  
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const addOneProduct = useSelector((state) => state.addOneProduct)
    const {success: successAddProduct} = addOneProduct

    const brandList = useSelector((state) => state.brandList || {})
    const { loading: loadingBrands, error: errorBrands, brands} = brandList

    const cateList = useSelector((state) => state.cateList || {})
    const { loading: loadingCates, error: errorCates, categoryList} = cateList

    const productList = useSelector((state => state.productsListOfCate) || {})
    const { loading: loadingProducts, error: errorProducts, productsOfCate} = productList

    const deleteOneProduct = useSelector(state => state.deleteOneProduct)
    const { success: successDeleteProduct} = deleteOneProduct

    useEffect(() => {
      if (!userInfo) {
        history.push("/login");
      }
      else {
        if (!user?.name) {
          dispatch(getUserDetails('profile'));
         
        }  
        dispatch(listProductsOfCate(match.params.pathname, match.params.catename))
    }
    }, [dispatch,match, history, userInfo, user,successAddProduct, successDeleteProduct]);
  

    const removeProductHandler = (id) => {
        dispatch(deleteProduct(id))
        console.log("delete product")
    }



    return (
        loading ? <></> : (!user?.isAdmin ? <h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1> : (
            <Row style={{ marginTop: "100px" }}>
                <Row>
                    {loadingProducts ? <Loader /> : errorProducts ? <Message variant='danger'>{errorProducts}</Message> : (
                        <Col>
                            <div className="admin-categ">
                                <div className="admin-categ-header">
                                   
                                        <button type="button" className="add-brand-btn"><Link to={`/admin/cate/${match.params.pathname}`}>Back </Link></button>
                                   
                                    
                                        <h2>{`Products of Category ${match.params.catename} of Brand ${match.params.pathname}`}</h2>
                                  
                                        <button type="button" className="add-brand-btn"><Link to={`/admin/add/product/${match.params.catename}/${match.params.pathname}`}>Add Product + </Link></button>
                                 
                                </div>
                            </div>
                            <div className="admin-categ">
                                <div className="admin-categ-overlay">
                                    <Col md={10}>
                                        <Table striped bordered hover responsive className='table-sm'>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>Name Product</th>
                                                    <th>Price</th>
                                                    <th>Count In Stock</th>
                                                    <th>Edit</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {productsOfCate.map(product => (
                                                    <tr key={product._id}>
                                                        <td>{product._id}</td>
                                                        <td>{product.name}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.countInStock}</td>
                                                        <td>
                                                            <Button type='button' variant='light' href={`/admin/edit/product/${product._id}/${match.params.pathname}/${match.params.catename}`}><i className='fas fa-edit'></i></Button>
                                                        </td>
                                                        <td>
                                                            <Button type='button' variant='light' onClick={() => removeProductHandler(product._id)}><i className='fas fa-trash'></i></Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </div>
                            </div>
                        </Col>

                    )}
                </Row>
            </Row>
        )
        ))
}




export default AdminScreen;
