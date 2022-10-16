import React from 'react'
import './Infobar.css'

import closeIcon from '../../icons/closeIcon.png'
import onlineIcon from '../../icons/onlineIcon.png'
const Infobar = ({room}) => {


  
  return (
    <div className='infoBar'>
    <div className="leftInnerContainer">
    <img src={onlineIcon} alt="" className="onlineIcon" />
    <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        <a href="/"><img src={closeIcon}  /></a>
    </div>

</div>
  )
  
}

export default Infobar