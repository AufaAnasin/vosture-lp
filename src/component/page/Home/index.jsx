import React from 'react'
import Card from '../../Card'
import Navbar from '../../Navbar'
import './index.css'

// CardImage

import ImageOne from '../../../assets/selected-projects/imageone.png'
import ImageTwo from '../../../assets/selected-projects/imagetwo.png'
import ImageThree from '../../../assets/selected-projects/imagethree.png'
import ImageFour from '../../../assets/selected-projects/imagefour.png'

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
        <hr style={{marginTop: "70px;", marginBottom: "25px;"}} />
        <div className="row third">
          <div className="col">
            <Card imageCard={ImageOne} titleCard="Noir Gear" descCard="Photography, Branding, Tech" />
          </div>
          <div className="col">
            <Card imageCard={ImageTwo} titleCard="Oldham Gentleman" descCard="Photography, Branding, Tech" />
          </div>
          <div className="col">
            <Card imageCard={ImageThree} titleCard="MCE Watches" descCard="Jewerly, Photography, Ads" />
          </div>
          <div className="col">
            <Card imageCard={ImageFour} titleCard="Schouten" descCard="Flatlays, Cloth, Collaboration" />
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