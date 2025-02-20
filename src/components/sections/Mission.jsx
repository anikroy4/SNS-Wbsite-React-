import React from 'react'
import Image from '../layers/Image'

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
          <div className="title missionTitle">
              <p>Our Commitment to Mission and Vision</p>
          </div>

          <div className="flex">
              <div className="left missionLeft">
                  <ul className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47" fill="none">
                        <circle cx="23.5" cy="23.5" r="23.5" fill="#008EFF"/>
                        <path d="M17.5471 17.367L17.5467 27.4168C17.5467 29.4934 19.1628 31.1925 21.2058 31.3251L21.4633 31.3334L28.3792 31.3345C28.0563 32.2467 27.1861 32.9001 26.1633 32.9001H20.68C18.0843 32.9001 15.98 30.7958 15.98 28.2001V19.5834C15.98 18.5601 16.6342 17.6895 17.5471 17.367ZM29.2967 14.1001C30.5945 14.1001 31.6467 15.1522 31.6467 16.4501V27.4168C31.6467 28.7146 30.5945 29.7668 29.2967 29.7668H21.4633C20.1655 29.7668 19.1133 28.7146 19.1133 27.4168V16.4501C19.1133 15.1522 20.1655 14.1001 21.4633 14.1001H29.2967ZM29.2967 15.6668H21.4633C21.0307 15.6668 20.68 16.0175 20.68 16.4501V27.4168C20.68 27.8494 21.0307 28.2001 21.4633 28.2001H29.2967C29.7293 28.2001 30.08 27.8494 30.08 27.4168V16.4501C30.08 16.0175 29.7293 15.6668 29.2967 15.6668Z" fill="white"/>
                      </svg>
                      <li>
                        <h3>Mission</h3>
                        <p>At Borderless Chain, we aim to connect and empower communities through a secure and inclusive platform. 
                            We bridge cultural gaps and drive growth with innovative technology, fostering global connections and empowerment for all.</p>
                    </li>
                  </ul>


                  <ul className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                        <circle cx="25" cy="25" r="25" fill="#FABB18"/>
                        <path d="M35.2143 24.2143C32.7145 24.2114 30.318 23.2172 28.5504 21.4496C26.7828 19.682 25.7886 17.2855 25.7857 14.7857C25.7857 14.5773 25.7029 14.3775 25.5556 14.2301C25.4082 14.0828 25.2084 14 25 14C24.7916 14 24.5918 14.0828 24.4444 14.2301C24.2971 14.3775 24.2143 14.5773 24.2143 14.7857C24.2114 17.2855 23.2172 19.682 21.4496 21.4496C19.682 23.2172 17.2855 24.2114 14.7857 24.2143C14.5773 24.2143 14.3775 24.2971 14.2301 24.4444C14.0828 24.5918 14 24.7916 14 25C14 25.2084 14.0828 25.4082 14.2301 25.5556C14.3775 25.7029 14.5773 25.7857 14.7857 25.7857C17.2855 25.7886 19.682 26.7828 21.4496 28.5504C23.2172 30.318 24.2114 32.7145 24.2143 35.2143C24.2143 35.4227 24.2971 35.6225 24.4444 35.7699C24.5918 35.9172 24.7916 36 25 36C25.2084 36 25.4082 35.9172 25.5556 35.7699C25.7029 35.6225 25.7857 35.4227 25.7857 35.2143C25.7886 32.7145 26.7828 30.318 28.5504 28.5504C30.318 26.7828 32.7145 25.7886 35.2143 25.7857C35.4227 25.7857 35.6225 25.7029 35.7699 25.5556C35.9172 25.4082 36 25.2084 36 25C36 24.7916 35.9172 24.5918 35.7699 24.4444C35.6225 24.2971 35.4227 24.2143 35.2143 24.2143ZM25 31.1551C24.4444 29.7657 23.6123 28.5038 22.5543 27.4457C21.4962 26.3877 20.2343 25.5556 18.8449 25C20.2343 24.4444 21.4962 23.6123 22.5543 22.5543C23.6123 21.4962 24.4444 20.2343 25 18.8449C25.5556 20.2343 26.3877 21.4962 27.4457 22.5543C28.5038 23.6123 29.7657 24.4444 31.1551 25C29.7657 25.5556 28.5038 26.3877 27.4457 27.4457C26.3877 28.5038 25.5556 29.7657 25 31.1551Z" fill="white"/>
                      </svg>
                      <li>
                        <h3>Vision</h3>
                        <p className="bottom">Borderless Chain aims to be a global leader in supporting youth, empowering communities, and enhancing collaboration. We envision a world where everyone thrives, bridging cultural gaps and promoting social justice for a sustainable future.</p>
                    </li>
                  </ul>
              </div>
              {/* <div className="right missionRight">
                    <img src="/images/serviceimage.png" alt="serviceimage.png"/>
              </div> */}
              <Image className="right missionRight" src="/images/serviceimage.png" alt="serviceimage.png" />
          </div>
      </div>
    </section>
  )
}

export default Mission