import React from 'react'
// import Button from './Button'

const ListItem = ({ListInnerItem,ListItemStyle, style, href, func }) => {
  return (
    href ?
    <li className={ListItemStyle}>
      <a href={href} onClick={func} className={style} >{ListInnerItem}</a> 
      {/* <a href={href} onClick={func} className={style} src={src} alt={alt}>{ListInnerItem}</a>  */}
    </li>
    :
    <li className={ListItemStyle}>
      {ListInnerItem}
    </li>



   
  )
}

export default ListItem