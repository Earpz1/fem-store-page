import React from 'react'
import MainImage from './MainImage'
import SubImages from './SubImages'
import { useState } from 'react'

const ProductImages = () => {
  const [mainImage, setMainImage] = useState('image-product-1.jpg')

  const changeImage = (image) => {
    setMainImage(image)
  }

  return (
    <div className="image-container d-flex flex-column align-items-center">
      <MainImage image={mainImage} />
      <SubImages changeImage={changeImage} />
    </div>
  )
}

export default ProductImages
