import React from 'react'
import Navbar from '../../Navbar'
import './index.css'

function Home() {
  return (
    <>
    <div>
    <section id='first section'>
    <div className="bg">
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col">        
          <div className="tagline-first">
          Less is more. <br />
          Simplicity is key.
        </div></div>
        </div>
      </div>
    </div>
    </section>

    <section id='second section'>
      <div className="container">
        <div className="row">
          <div className="col">
            <hr style={{marginTop: "70px;", marginBottom: "25px;"}} />
            <div className="row">
              <div className="col"><div className="left-tagline">#YoursToMake</div></div>
              <div className="col"><div className="right-tagline">About Studio</div></div>
            </div>
            <div className="row">
              <div className="main-tagline">
              We’re constantly looking for innovative ways to fit your expectations and beyond.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='third section'>
      <div className="bg-grey">
      <div className="container">
        <div className="row">
          <div className="third-content">
          <div className="col"><div className="selected-projects-tagline">Selected Projects</div></div>
          <div className="col"><div className="right-tagline">View All Works</div></div>
          </div>
        </div>
        
      </div>
      </div>
    </section>
    </div>
    </>
  )
}

export default Home