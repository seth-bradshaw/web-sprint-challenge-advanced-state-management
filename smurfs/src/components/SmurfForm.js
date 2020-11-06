import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {postSmurfData, onChange, clearForm} from '../actions'

export default function SmurfForm() {
    const smurf = useSelector((state) => state.smurf)
    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postSmurfData(smurf))
        dispatch(clearForm())
    }
    

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type='text' onChange={(e) => dispatch(onChange(e))} name='name' value={smurf.name} />
                </label>
                <label>Age:
                    <input type='text' onChange={(e) => dispatch(onChange(e))} name='age' value={smurf.age}/>
                </label>
                <label>Height:
                    <input type='text' onChange={(e) => dispatch(onChange(e))} name='height' value={smurf.height}/>
                </label>
                <button>Click me</button>
            </form>
        </div>
    )
}
