import React from 'react'
import Button from '../layers/Button'

const Contact = () => {
  return (
    <section class="Contact">
     <div class="title ContactTitle">
          <h6>Contact with us</h6>
          <h2>Get in Touch with Us</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas.</p>
     </div>

       <div class="container">
          <div class="Contact_wrapper">
                 <div class="left ContactLeft">
                       <h2>How Can We Help You?</h2>
                       <p>Lorem ipsum dolor sit amet consectetur. Aliquet consectetur nullam phasellus sit suspendisse.</p>
                       <ul>
                            <li> <i class="fa-solid fa-m"></i> abc.support@gmail.com</li>
                            <li> <i class="fa-solid fa-square-phone"></i> 012345678989</li>
                       </ul>
                       <p><b>Note:</b> Our dedicated support team is available to assist you with any questions or concerns.</p>
                 </div>
                 <div class="right ContactRight">

                    <div class="main">
                          <h3>
                              We’re Here to Answer Your Questions
                          </h3>
                          <form>
                                <label>Name</label>
                                <input type="text"/>

                                <label>Email</label>
                                <input type="email"/>

                                <label>Subject</label>
                                <input type="text"/>

                                <label>Message</label>
                                <input type="text"/>
                          </form>
                          <div class="btn">
                              <button>Submit <i class="fa-solid fa-arrow-right"></i></button>
                          </div>

                          {/* <Button href="#"style="btn" content={"Submit"}> */}
                    </div>
                 </div>
          </div>
       </div>
</section>
  )
}

export default Contact