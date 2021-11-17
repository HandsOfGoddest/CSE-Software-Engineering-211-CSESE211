import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProductsOfBrand } from '../actions/brandActions'

function Hello({match}) {
    // const dispatch = useDispatch()
    // const productListOfBrand = useSelector(state => state.productListOfBrand)
    // const { loading, error, listProductOfBrand } = productListOfBrand     //Now list is in listProductOfBrand
    // useEffect(() => {
    //     dispatch(listProductsOfBrand(match.params.id))
    // }, [dispatch])
    return (
        <div>
            <h1 id="a">A</h1>
            <input type="date"></input>
            <input type="time"></input>
            <button onClick={console.log(7)}>"7:00 - 9:00"</button>
        </div>
    )
}

export default Hello
