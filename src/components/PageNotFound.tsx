import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import constants from '../constants/SystemConstants'

const PageNotFound = () => (
  <Fragment>
    <div className='notFoundContainer'>
      <div className='notFound'>
        <img className='notFoundLogo' src={logo} alt={constants.AUTO1_TEXT} />
        <h2 className='notFoundTextDark notFoundTextExtraLarge'>
          {constants.NOT_FOUND_TEXT}
        </h2>
        <p className='notFoundTextMedium notFoundTextDark'>{constants.PAGE_NOT_EXIST}</p>
        <p className='notFoundTextMedium notFoundTextDark'>{constants.GO_BACK_TEXT}
          <Link className='notFoundLink' to='/'> {constants.HOMEPAGE_TEXT}</Link>
        </p>
      </div>
    </div>

  </Fragment>
)

export default PageNotFound
