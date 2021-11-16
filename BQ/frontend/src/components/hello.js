import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsOfBrand } from '../actions/brandActions'

function Hello({match}) {
    const dispatch = useDispatch()
    const productListOfBrand = useSelector(state => state.productListOfBrand)
    const { loading, error, listProductOfBrand } = productListOfBrand
    useEffect(() => {
        dispatch(listProductsOfBrand(match.params.id))
    }, [dispatch])
    return (
        <div>
            <h1 id="a">A</h1>
        </div>
    )
}

export default Hello
