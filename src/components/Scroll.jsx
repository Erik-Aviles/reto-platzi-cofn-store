/* eslint-disable react/destructuring-assignment */
import React from 'react';

// eslint-disable-next-line 
const Scroll = (props) => {
    return( 
    <div style={{overflowY: 'scroll', height:'70vh'}}>
      {props.children}
    </div>	
  );
}

export default Scroll;