import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsOfCate } from '../actions/brandActions'
import { Row, Col } from "react-bootstrap";
import Product from './Product';
function AfterPickCategory({ match }) {
    const dispatch = useDispatch()
    const productsListOfCate = useSelector(state => state.productsListOfCate)
    const { loading, error, productsOfCate } = productsListOfCate     
    useEffect(() => {
        dispatch(listProductsOfCate(match.params.pathName, match.params.catePathName))
    }, [dispatch])
    return (
        <div>
        <Row>
          { productsListOfCate &&
          (productsListOfCate).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        </div>
    )
}

export default AfterPickCategory
