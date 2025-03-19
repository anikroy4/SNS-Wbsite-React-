import React from 'react'
import Button from '../layers/Button'
import List from '../layers/List'
import ListItem from '../layers/ListItem'

const Footer = () => {
  return (
    <footer className ="footer">
      <div className ="container">
        <div className ="whitebord">
          <h2>Corporate Address & Contact Info</h2>
          <h4>Company Address</h4>
          <p>Lorem ipsum dolor sit amet consectetur. Amet nulla pretium nunc ante tortor. Sapien lacus orci </p>
          <ul>
            <li>
              <a href="mailto:abc.support@gmail.com">
                <img src="src\svg\mail.svg" alt="mail" />
                <span>abc.support@gmail.com</span>
                </a>
            </li>
            <li>
              <a href="tel: 012345678989"
                ><img src="src\svg\call.svg" alt="call" /><span>
                  012345678989</span
                ></a>
            </li>
          </ul>
          {/* <List>
            <ListItem href="mailto:abc.support@gmail.com" style="" src="src\svg\mail.svg" alt="mail.svg" ><span>abc.support@gmail.com</span></ListItem>
            <ListItem href="tel: 012345678989" style="" src="src\svg\call.svg" alt="call.svg" ><span>
            012345678989</span></ListItem>

          </List> */}
          {/* <a href="#" className ="footbtn">Get Start</a> */}
          <Button type="button" href="#" style={"footbtn"} content={"Get Start"}/>
        </div>
      </div>
      <div className ="footnav">
        <a href="#" className="footlogo">Logo</a>
        <div className ="term">
          <a href="#">Term of service</a>
          <a href="#">Privacy and policy</a>
        </div>
        <ul className="social">
          <li><a href="#"><img src="src\svg\linkedin.svg" alt="linkedin"/></a></li>
          <li><a href="#"><img src="src\svg\twitter.svg" alt="twitter"/></a></li>
          <li><a href="#"><img src="src\svg\facebook.svg" alt="facebook"/></a></li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright © (Year) <a href="#">Borderless Chain LLC</a>. All rights reserved.</p>
      </div>
      <img src="images/footshap.png" alt="footshap" className="footshap"/>
     </footer>
  )
}

export default Footer