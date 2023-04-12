import React from 'react'
import './index.css'
import VostureLogo from '../../assets/vosture-logo.svg'

function Navbar() {
  return (
    <>
    <div className="nav">
      <ul className='first'>
        <li><img src={VostureLogo} alt="Vosture" /></li>
        <li>Bandung, 13:59:59</li>
        <li><ul className="three">
          <li>Work</li>
          <li>Studio</li>
          <li>Contact</li>
          </ul>
        </li>
        <li>vosturestudio@gmail.com</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar