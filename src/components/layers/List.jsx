import React from 'react'

const List = ({ListItem, style}) => {
  return (
    <ul className={style}>{ListItem}</ul>
  )
}

export default List