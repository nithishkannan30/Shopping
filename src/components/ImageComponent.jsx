import React from 'react'

const ImageComponent = ({image,title}) => {
  return (
    <div className='image-container'>
       <img src={image} alt="img"/>
       <p>{title.length>15?
       title.slice(0,15)+"... ":title}</p>
       <button type="button" className='btn'>Add to cart</button>
    </div>
  )
}

export default ImageComponent
