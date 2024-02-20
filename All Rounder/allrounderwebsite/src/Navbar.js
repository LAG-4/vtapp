import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import all from './Components/assets/5.png'
import bowl from './Components/assets/4.png'
import bat from './Components/assets/3.png'
import elite from './Components/assets/2.png'
import home from './Components/assets/1.png'

const Navbar = () => {
  return (
    <nav>
      <div>
      <link href='https://fonts.googleapis.com/css?family=Cairo' rel='stylesheet'></link>
        <p class="logo">LIT-DAC</p>
      </div>



      <div class="name">
        <h2>IPL-DATABID<br></br><h3> Player's Auction</h3></h2>
        </div>
      <div class="icons">
      <ul>
        <li>
       <a href="http://localhost:3000/"><img src={home} className='Eliteicon' alt="no img" /></a>
      </li>
      <li>
        <a href="http://localhost:3001/"><img src={elite} className='Eliteicon' alt="no img" /></a>
      </li>
      <li>
        <a href="http://localhost:3002/"><img src={bat} className='Eliteicon' alt="no img" /></a>
    </li>
    <li>
        <a href="http://localhost:3003/"><img src={bowl} className='Eliteicon' alt="no img" /></a>
    </li>
    <li>
        <a href="http://localhost:3004/"><img src={all} className='Eliteicon' alt="no img" /></a>
    </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar;
