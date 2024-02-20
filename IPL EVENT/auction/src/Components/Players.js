import React from 'react'
import Constructor from 'react'
import Navbar from './Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardTest from './CardTest'
import BasicExample from './CardTest';
import ws from './StatsCardPlayers';
// const names = ["V Kohli","S Dhawan","RG Sharma","SK Raina","DA Warner","MS Dhoni"];
// const listItems = numbers.map(('V Kohli') =>
//   <li>{number}</li>
// );

  const Players = () => {
    return ( <div>
        <Navbar/>
        <p> Players </p>  
        {/* <tbody>
        for (let i; i< Man.length; i++){
          <BasicExample/>
        }
        </tbody> */}
        <div class="row">
       <div class="col"><CardTest/></div>
        <div class="col"><CardTest/></div>
        <div class="col"><CardTest/></div>
        </div>
        <div class="row">
       <div class="col"><CardTest/></div>
        <div class="col"><CardTest/></div>
        <div class="col"><CardTest/></div>
        </div>
  </div>)
  }
// const Players = () => {

// class Projects extends CardTest {
//   constructor(props) {
//       super(props);
//       this.state = { activeTab: 1 };
//   }

//    toggleCategories() {
//       if (this.state.activeTab === 1) {
//           for (let data of Man) {
//               return (
                  
//                   <div className='projects-grid'>
//                     <Navbar/>
//                       <Card shadow={4} style={{ minWidth: '450', margin: 'auto' }}>
//                           <Card.Title style={{height: '250px', background: data.PlayerImage }}>data.Name</Card.Title>
//                           <Card.Text>
//                               {data.Runs}
//                           </Card.Text>
//                           <Card.Actions border>
//                               <Button colored>GitHub</Button>
//                               <Button colored>Live Demo</Button>
//                           </Card.Actions>
//                       </Card>
//                   </div>
//               )
//           }
//       }
//   }
// }
//  }
  
 
 


export default Players 
