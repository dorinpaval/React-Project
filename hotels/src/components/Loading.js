import React from 'react'
import loading from '../images/gif/loading-arrow.gif'

export default function  Loading() {
  return (
    <div className='loading'>
      <h3>The information is loading...</h3>
      <img src={loading} alt='loading' />
    </div>
  )
}