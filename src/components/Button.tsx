import React from 'react'
import {ButtonProps} from '../utils/interface'

const Button = (props:ButtonProps) => (
  <button className='btn' onClick={props.handleClick}>{props.text}</button>
)

export default Button
