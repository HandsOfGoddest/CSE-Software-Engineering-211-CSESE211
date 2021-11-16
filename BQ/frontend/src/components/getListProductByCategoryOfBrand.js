import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsOfBrand } from '../actions/brandActions'
function AfterPickCategory({ match }) {
    const dispatch = useDispatch()
    const productListOfBrand = useSelector(state => state.productListOfBrand)
    const { loading, error, listProductOfBrand } = productListOfBrand     //Now list is in listProductOfBrand
    useEffect(() => {
        dispatch(listProductsOfBrand(match.params.id))
    }, [dispatch])
    const listProductSortByCate = listProductOfBrand.find(item => item.category == match.params.category)
    // SearchByMatch.param.category

    return (
        <div>
            <h1>B</h1>
        </div>
    )
}

export default AfterPickCategory
