import React from 'react'
import { useState } from 'react'

const MainImage = (props) => {
  return (
    <>
      <img src={props.image} className="main-image" alt="Main" />
    </>
  )
}

export default MainImage
