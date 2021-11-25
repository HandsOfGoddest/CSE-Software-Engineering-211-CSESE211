import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listBrands } from '../actions/brandActions'

function ListBrand() {
    const dispatch = useDispatch()
    const brandList = useSelector(state => state.brandList)
    const { loading, error, brands } = brandList
    useEffect(() => {
        dispatch(listBrands())
    }, [dispatch])
    console.log(brands)
    return (
        <div>
            a
        </div>
    )
}

export default ListBrand
