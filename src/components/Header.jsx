import React from 'react'
import { useState } from 'react'
function Header(props) {

  
  return (
      <header style={{backgroundColor:'blue'}}>
         <div className="container">
             <h2>
                 {props.text}
             </h2>
         </div>

      </header>
  )
  }

Header.defaultProps={
    text:'A7a'
}
 


export default Header