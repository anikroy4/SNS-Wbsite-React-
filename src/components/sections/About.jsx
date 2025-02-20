import React from 'react'
import Image from '../layers/Image'
import SubTitle from '../layers/SubTitle'

const About = () => {
  return (
    <section className="about">
     <div className="container">
          <div className="main">
               <div className="title">
                    <p className="poppins-medium">Who We Are</p>
                    <h2 className="poppins-semibold">About us</h2>
                    <h3 className="poppins-regular">Lorem ipsum dolor sit amet consectetur. Aliquam nisl at nec in pretium morbi integer sagittis. Eu quam nec egestas .</h3>
               </div>
               <div className="bottom flex">  
                <div className="left">
                    <h6 className="poppins-bold">Company Overview</h6>
                    <p className="poppins-regular"><span className="poppins-bold">Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.
                    </p>
                </div>
                {/* <SubTitle title="Company Overview" text="Borderless Chain LLC is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships."/> */}
                
                {/* <div className="right">
                    <img src="images/about.jpg" alt="about.jpg"/>
                </div> */}
                <Image className="right" src="images/about1.jpg" alt="about1.jpg"/>
               </div>
               
               <div className="bottom flex">
                   {/* <div className="right">
                       <img src="images/about2.jpg" alt="about2.jpg"/>
                   </div> */}
                   <Image className="right" src="images/about2.jpg" alt="about2.jpg"/>

                    <div className="left">
                        <h6 className="poppins-bold">Company Overview</h6>
                        <p className="poppins-regular"><span className="poppins-bold">Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.
                        </p>
                    </div>
               </div>

               <div className="bottom flex">
                <div className="left">
                    <h6 className="poppins-bold">Company Overview</h6>
                    <p className="poppins-regular"><span className="poppins-bold">Borderless Chain LLC</span> is a pioneering platform dedicated to fostering global connections and bridging cultural divides. Our mission is to create a space where individuals from all walks of life can come together, share experiences, and build meaningful relationships.
                    </p>
                </div>
                {/* <div className="right">
                    <img src="images/about3.jpg" alt="about3.jpg"/>
                </div> */}
                <Image className="right" src="images/about3.jpg" alt="about3.jpg"/>
               </div>
          </div>
     </div>
</section>


  )
}

export default About