import React from 'react'
import Button from '../layers/Button'
import Image from '../layers/Image'

const Join = () => {
  return (
    <section className="join">
     <div className="title">
          <h6>join</h6>
          <h2>Become Part of Our Global Community</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas.</p>
     </div>
   <div className="container">
           <div className="flex">
                 <div className="content">
                    <div className="heading flex joinFirst">
                         <h2>SNS & Community Site  <i className="fa-solid fa-arrow-up-right-from-square"></i></h2>                     
                        </div>
                        <ul>
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>
                                   <b> Connect with Millions:</b>         
                              </p>
                              <span>Engage with a global network of like-minded individuals, expanding your professional and personal circles.</span>     
                            </li>
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>
                                   <b> Discover Opportunities:</b>         
                              </p>
                            <span>  Unlock new business ventures, find friends, and access resources for personal growth.</span>
                            </li>                   
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>           
                                       <b> Experience Inclusivity:</b>         
                              </p>
                            <span>  Be part of a supportive community that values every member and fosters a welcoming environment.  </span> 
                            </li>                   
                        </ul>
                 </div>
                 {/* <div className="middle">
                    <img src="images/mobile.png" alt="mobile.png"/>
                 </div> */}
                 <Image className="middle" src="images/mobile.png" alt="mobile.png" />
                 <div className="content joinLast">
                    <div className="heading flex">
                         <h2>Join Our Exclusive Club <i className="fa-solid fa-arrow-up-right-from-square"></i></h2>                     
                        </div>
                        <ul>
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>
                                   <b> Access Exclusive Benefits:</b>         
                              </p>
                              <span>Enjoy unique privileges and personalized support, with exclusive opportunities tailored to enhance your experience.</span>     
                            </li>
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>
                                   <b> Network with Influencers:</b>         
                              </p>
                            <span>   Connect with industry leaders and build valuable relationships with pioneers.</span>
                            </li>                   
                            <li>
                                 <p>
                                   <i className="fa-regular fa-square-check"></i>           
                                       <b>Make a Positive Impact:</b>         
                              </p>
                            <span> Contribute to meaningful causes and support initiatives that drive positive change.  </span> 
                            </li>                   
                        </ul>
                 </div>
               </div>
               <Button style="btn" content="Join Now" />
          </div>
  </section>
  )
}

export default Join