import React from 'react'
import Navbar from './Navbar'
import './Home.css'
import VideoLooper from 'react-video-looper'

import stadium from '../Components/assets/trends.png'

const Home = () => {
  return (
    <body>
      <link href='https://fonts.googleapis.com/css?family=Cairo' rel='stylesheet'></link>
    <div class="home">
      <Navbar/>
      <container>
      <div class="vid"><video className='VideoTag' autoPlay loop  width="90%" height="650">
      
      </video></div>

       
        
      <div class="clearfix">
      <br></br>
      <p class="text">Welcoming to the thrill of a live IPL Auction!!<br></br>
         Have you wondered what would you do if you get a chance to build your own IPL team?? <br></br>
         if not, here is a chance to put yourself in the shoes of a bidder and build your dream IPL team that you always wanted to lift the coveted trophy.<br></br> 
         If you love cricket and if you followed IPL, this event is a must for you.<br></br>
          Participate in the IPL auction and form teams of cricketers based on thrie matching compatibility.</p>
      </div>
      
      <div class="spon"><p><b>OUR SPONSORS:</b></p>
        <br></br>
        <img src={stadium}></img>
        </div>
      </container>
    </div>
</body>
    

  )
}

export default Home