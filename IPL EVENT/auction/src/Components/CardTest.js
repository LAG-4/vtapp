import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import StatsCardPlayers from './StatsCardPlayers';
import Man from './StatsCardPlayers';
import elitePic from '../Components/assets/elite.png'
import { read, utils, writeFile } from 'xlsx';
import React, { useState } from "react";
import Stats from '../Components/assets/internal/testPlayersCardStats.xlsx'

// const reader = read.readFile(Stats, { raw: false })
// const reader = new FileReader();
// reader.readAsArrayBuffer(Stats);
//  {
//    Stats.length
//    ?
//    Stats.map((Man, index) => (
//        <tr key={index}>
//            <th scope="row">{ index + 1 }</th>
//            <td>{ Man.Name }</td>
//            <td>{ Man.Runs}</td>
//            <td>{ Man.Balls }</td>
//            <td>{ Man.BatScore }</td>
//            <td>{ Man.WicketsTaken }</td>
//            <td>{ Man.MatchesPlayed }</td>
//            <td>{ Man.BallScore }</td>
//            <td>{ Man.PlayerImage }</td>
         
//        </tr> 
//    ))
//    :
//    <tr>
//        <td colSpan="5" className="text-center">no data found</td>
//    </tr> 
// }

function BasicExample() {
  return (     
    
      
           
     <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={elitePic} />
        <Card.Body>
          <Card.Title>Virat Kohli</Card.Title>
          <Card.Text>
            runs = 54461
            matches = 556
          </Card.Text>
          <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="" onClick="added">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </Card.Body>
      </Card> 
    
  );
}

export default BasicExample;