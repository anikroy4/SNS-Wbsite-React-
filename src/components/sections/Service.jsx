import React from 'react'
import List from '../layers/List'
import ListItem from '../layers/ListItem'
// import { FaSquareCheck } from 'react-icons/fa6'

const Service = () => {
  return (

    <section className="service">
        <div className="container">
            <div className="title">
                <p>Services</p>
                <h6>What We Offer</h6>
              </div>
              <div className="main flex">
                    <div className="box active">
                          <div className="content">
                            <img src="images/service.jpg" alt="service.jpg"/>
                            <div className="heading flex">
                              <h2>SNS & Community Site  <i className="fa-solid fa-arrow-up-right-from-square"></i></h2>                     
                            </div>
                            <ul>
                                <li>
                                    <i className="fa-regular fa-square-check"></i>
                                  <span> Connect with People from Around the World:</span> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.
                                </li>
                                <li>
                                    <i className="fa-regular fa-square-check"></i>
                                  <span>  Discover New Opportunities:</span> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.
                                </li>
                                <li>
                                    <i className="fa-regular fa-square-check"></i>
                                  <span>Build a Global Network:</span> Expand your horizons and create lasting relationships with people from all corners of the globe.
                                </li>
                                
                            </ul>
                            {/* <List>
                              <ListItem>
                                <i className="fa-regular fa-square-check"></i>
                                <FaSquareCheck className='fa-regular'/> 
                                <p> <span> Connect with People from Around the World:</span> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.
                              </ListItem>
                            </List> */} 

                          </div>
                    </div>
                    <div className="box box2">
                          <div className="content">
                            <img src="images/service.jpg" alt="service.jpg"/>
                          <div className="heading flex">
                            <h2>SNS & Community Site  <i className="fa-solid fa-arrow-up-right-from-square"></i></h2>                     
                          </div>
                          <ul>
                              <li>
                                  <i className="fa-regular fa-square-check"></i>
                                <span> Connect with People from Around the World:</span> Our platform brings together individuals from diverse backgrounds, fostering meaningful connections and collaborations.
                              </li>
                              <li>
                                  <i className="fa-regular fa-square-check"></i>
                                <span>  Discover New Opportunities:</span> Whether you're seeking business partnerships, job opportunities, or simply new friends, our matchmaking features can help you find what you're looking for.
                              </li>
                              <li>
                                  <i className="fa-regular fa-square-check"></i>
                                <span>Build a Global Network:</span> Expand your horizons and create lasting relationships with people from all corners of the globe.
                              </li>
                              
                          </ul>

                          </div>
                    </div>
              </div>
        </div>
    </section>



  )
}

export default Service