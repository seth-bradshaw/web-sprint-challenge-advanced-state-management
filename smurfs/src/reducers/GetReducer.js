import {GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE, ONCHANGE, GET_SMURFS_START, POST_SMURFS_START, CLEAR_FORM} from '../actions'

const initialState = {
    smurfs: [],
    smurf: {
        name: '',
        age: '',
        height: '',
    },
    error: '',
    isFetching: false,
    isPosting: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_SMURFS_START:
            return {
                ...state,
                isFetching: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state, 
                smurfs: action.payload,
                isFetching: false
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case ONCHANGE:
            console.log(action)
            return {
                ...state, 
                smurf:{
                    ...state.smurf, 
                    [action.payload.target.name]: action.payload.target.value
                }
            };
        case POST_SMURFS_START:
            return {
                ...state,
                isPosting: true
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state, 
                isPosting: false
            }
        case POST_SMURFS_FAILURE:
            return {
                ...state,
                error: action.payload,
                isPosting: false
            }
        case CLEAR_FORM:
            return {
                ...state, 
                smurf: initialState.smurf
            }
        default:
            return state
    }
}