import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getUserDetails} from "../actions/userActions";
import { listBrands, deleteBrand, addNewBrand} from "../actions/brandActions";
import { Link } from 'react-router-dom'

const AdminScreen = ({ history }) => {
  
    const dispatch = useDispatch();
  
    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;
  
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const deleteOneBrand = useSelector((state) => state.deleteOneBrand)
    const {success: successDeleteBrand} = deleteOneBrand

    const addOneBrand = useSelector((state) => state.addOneBrand)
    const {success: successAddBrand} = addOneBrand

    const brandList = useSelector((state) => state.brandList || {})
    const { loading: loadingBrands, error: errorBrands, brands} = brandList

    const cateList = useSelector((state) => state.cateList || {})
    const { loading: loadingCates, error: errorCates, categoryList} = cateList

    

    useEffect(() => {
      if (!userInfo) {
        history.push("/login");
      }
      else {
        if (!user?.name) {
          dispatch(getUserDetails('profile'));
        }  
        dispatch(listBrands());

        
        if(successDeleteBrand){
            dispatch(listBrands());
        }
    }
    }, [dispatch, history, userInfo, user, successDeleteBrand, successAddBrand]);
  

    const removeBrandHandler = (pathName) => {
        console.log("delete brand")
        dispatch(deleteBrand(pathName));
    }

    
    return(
        loading?<></>:(!user?.isAdmin?<h1>BẠN KHÔNG CÓ QUYỀN TRUY CẬP VÀO TRANG NÀY !!! </h1>:(
        <Row style = {{marginTop:"100px"}}>
            <Row>
            {loadingBrands ? <Loader/> : errorBrands ? <Message variant='danger'>{errorBrands}</Message> : (
                <Col>
                    <Row>
                        <Col md={8}>
                            <h2>Brands</h2>
                        </Col>
                        <Col md={4}>
                            <button type="button" className="btn btn-success"><Link to={`/admin/add/brand`}>Add Brand +</Link></button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}>
                            <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name Brand</th>
                                <th>
                                
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {brands.map(brand => (
                                <tr key={brand._id}>
                                    <td>{brand._id}</td>
                                    <td><Link to={`/admin/cate/${brand.pathName}`}>{brand.brandName}</Link></td>
                                    <td>
                                    <Button type='button' variant='light' onClick={() => removeBrandHandler(brand.pathName)}><i className='fas fa-trash'></i></Button>
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


    
  
  export default AdminScreen;
  