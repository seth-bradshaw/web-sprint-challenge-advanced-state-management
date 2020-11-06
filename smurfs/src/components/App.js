import React from "react";
import {useSelector} from 'react-redux'
import SmurfCards from './SmurfCards'
import SmurfForm from './SmurfForm'
import "./App.css";

export default function App() {
  return (
    <div>
      <div className='smurfFormDiv'>
        <h2>Add a new Smurf!</h2>
        <SmurfForm />
      </div>
      <div className='smurfCardDiv'>
        <SmurfCards />
      </div>
    </div>
  )
}

