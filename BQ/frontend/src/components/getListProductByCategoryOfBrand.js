import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsOfBrand } from '../actions/brandActions'
import { Row, Col } from "react-bootstrap";
import Product from './Product';
function AfterPickCategory({ match }) {
    const dispatch = useDispatch()
    const productListOfBrand = useSelector(state => state.productListOfBrand)
    const { loading, error, ProductsOfBrand } = productListOfBrand     
    useEffect(() => {
        dispatch(listProductsOfBrand(match.params.id))
    }, [dispatch])
    // const listProductSortByCate = ProductsOfBrand.find(item => item.category == match.params.category)
    // SearchByMatch.param.category
    let products = []
    for (let i=0; i<ProductsOfBrand.length; i++) {
        if (ProductsOfBrand[i].category == match.params.category) products.push(ProductsOfBrand[i])
    }
    return (
        <div>
        <Row>
          { products &&
          (products).map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        </div>
    )
}

export default AfterPickCategory
