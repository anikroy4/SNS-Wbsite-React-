import React from 'react'

const Image = ({className, src, alt, style}) => {
  return (
    <div className={className}>
        <img src={src} alt={alt} className={style}/>
    </div>
  )
}

export default Image