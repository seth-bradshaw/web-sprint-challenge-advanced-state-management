import axios from 'axios';

export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS'
export const POST_SMURFS_FAILURE = 'POST_SMURFS_FAILURE'
export const ONCHANGE = 'ONCHANGE'
export const GET_SMURFS_START = 'GET_SMURFS_START'
export const POST_SMURFS_START = 'POST_SMURFS_START'
export const CLEAR_FORM = 'CLEAR_FORM'

export const getSmurfData = () => {
    return (dispatch) => {
        dispatch({type:GET_SMURFS_START})
        axios
            .get('http://localhost:3333/smurfs')
            .then((res) => {
                console.log('you have successfully done a api get request', res)
                dispatch({type:GET_SMURFS_SUCCESS, payload: res.data})
            })
            .catch((err) => {
                dispatch({type:GET_SMURFS_FAILURE, payload: err})
            })
    }
}

export const postSmurfData = (smurf) => {
    return (dispatch) => {
        dispatch({type:POST_SMURFS_START})
        axios
            .post('http://localhost:3333/smurfs', smurf)
            .then((res) => {
                dispatch({type:POST_SMURFS_SUCCESS})
            })
            .catch((err) => {
                dispatch({type:POST_SMURFS_SUCCESS, payload: err})
            })
    }
}

export const onChange = (e) => {
    return {type:ONCHANGE, payload: e}
}

export const clearForm = () => {
    return {type:CLEAR_FORM}
}
