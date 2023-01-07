/* eslint-disable react/destructuring-assignment */
import React from 'react'

// eslint-disable-next-line 
const Button = (props) =>{
  return (
        // eslint-disable-next-line react/button-has-type
        <button >
        {props.children}
        </button>
  )
}

export default Button
