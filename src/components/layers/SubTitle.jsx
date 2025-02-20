import React from 'react'

const SubTitle = ({ className, TitleStyle, title, ParaStyle, description }) => {
  return (
    <div className={className}>
        <h6 className={TitleStyle}>{title}</h6>
        <p className={ParaStyle}>{description}</p>
    </div>
  )
}

export default SubTitle