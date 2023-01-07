/* eslint-disable */
import React from 'react';
import '../styles/Messages.css'

const Messages = ({children}) => {
  return (
    <div className='Messages'>
      <p>{children}</p>
    </div>
  )
}

export default Messages
