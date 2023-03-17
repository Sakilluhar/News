import React from 'react'
import spinner from '../images/Spinner16.gif'

import  '../CSS/Spinner.css'


function Spinner() {
  return (

    <div>
      <img  src={spinner} alt="LOADING..." id='spinner' />

    </div>
  )
}

export default Spinner
