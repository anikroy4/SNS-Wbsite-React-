import React from 'react'
import Button from '../layers/Button'
import List from '../layers/List'
import ListItem from '../layers/ListItem'

const Navbar = () => {
  return (
    <nav className="nav">
    <div className="container">
      <div className="navwraper"> 
        <div className="logo">
          <a href="#">logo</a>
        </div>
        <div className="navigator">
          <ul className="navlist">
            <li><a href="#">home</a></li>
            <li><a href="#">about us</a></li>
            <li><a href="#">mission & vision</a></li>
            <li><a href="#">testimonial</a></li>
            <li><a href="#">join us</a></li>
            <li><a href="#">contact</a></li>
          </ul>
        </div>
        <div className="navbtn">
          {/* <select name="oftion" id="oftion">
            <option value="#" selected="selected">japanese</option>
            <option value="#">united kingdom</option>
            <option value="#">american</option>
            <option value="#">singapore</option>
            <option value="#">bangla</option>
          </select> */}
          <Button type="button" style="oftion" content="japanese"/>
          <Button type="button" style="getstart" content="get start"/>
        </div>
      </div>
    </div>
    <div className="navcollapse">
      <img src="svg/close.svg" alt="close" className="close"/>
      <img src="images/about2.jpg" alt="about2" className="profile"/>
      <List style="collapselist">
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="home" href="index.html"/>
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="about us" href="#about"/>
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="mission & vision" href="#mission"/>
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="testimonial" href="#testimonial"/>
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="join us" href="#join"/>
        <ListItem ListItemStyle="collapselistitem" ListInnerItem="contact" href="#contact"/>
      </List>
    </div>
  </nav>
  )
}

export default Navbar