import React, {useEffect} from 'react'
import Smurf from './Smurf'
import {useSelector, useDispatch} from 'react-redux'
import {getSmurfData} from '../actions'

export default function SmurfCards() {
    const smurfs = useSelector((state) =>  state.smurfs)
    const error = useSelector((state) => state.error)
    const isPosting = useSelector((state) => state.isPosting)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSmurfData())
    }, [])

    useEffect(() => {
        dispatch(getSmurfData())
    },[isPosting])
    
    return (
        <div>
            {smurfs.map(smurf => <Smurf smurf={smurf} />)}
            {error && <p>Error: {error}</p>}
        </div>
    )
}
