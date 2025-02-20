import React from 'react'
import Button from '../layers/Button'
import Image from '../layers/Image'

const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <Image className="bannerimoji" src="./src/svg/imojibnr.svg" alt="imojibnr" style="imojibnr"/>
        <p>Welcome to borderless chain</p>
        <h1>Connecting the World. Building a Shared Future.</h1>
        <div className="bnr-btn">
          <Button href="#" content="SNS & Community"/>
          <Button href="#" content="Membership Club"/>
        </div>
        <Image className="bnr-img" src="./images/bannerimage.png" alt="bannerimage" style="bannerimage"/>
      </div>
    </section>
  )
}

export default Banner