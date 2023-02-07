import React from 'react'

const SubImages = (props) => {
  return (
    <div className="sub-image-container d-flex justify-content-between">
      <img
        src="image-product-1.jpg"
        className="sub-image-selected"
        alt="Sub"
        onClick={() => props.changeImage('image-product-1.jpg')}
      />
      <img
        src="image-product-2.jpg"
        className="sub-image"
        alt="Sub"
        onClick={() => props.changeImage('image-product-2.jpg')}
      />
      <img
        src="image-product-3.jpg"
        className="sub-image"
        alt="Sub"
        onClick={() => props.changeImage('image-product-3.jpg')}
      />
      <img
        src="image-product-4.jpg"
        className="sub-image"
        alt="Sub"
        onClick={() => props.changeImage('image-product-4.jpg')}
      />
    </div>
  )
}

export default SubImages
