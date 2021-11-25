import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listCate } from '../actions/brandActions'

function ListCategory({ match }) {
    const dispatch = useDispatch()
    const cateList = useSelector(state => state.cateList)
    const { loading, error, categoryList } = cateList
    useEffect(() => {
        dispatch(listCate(match.params.brandPathName))
    }, [dispatch])
    console.log(categoryList)
    return (
        <div>
            a
        </div>
    )
}

export default ListCategory
