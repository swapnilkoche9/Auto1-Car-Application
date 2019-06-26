import React from 'react'
import logo from '../assets/logo.png'
import constants from '../constants/SystemConstants'

const Header = () => (
  <div className='header'>
    <div className='headerLeft'>
      <img className='headerLogo' src={logo} alt= {constants.AUTO1_TEXT}/>
    </div>
    <div className='headerRight'>
      <a href='#purchase' className='headerLink'>{constants.PURCHASE}</a>
      <a href='#myOrders' className='headerLink'>{constants.MY_ORDERS}</a>
      <a href='#Sell' className='headerLink'>{constants.SELL}</a>
    </div>
  </div>
)

export default Header
