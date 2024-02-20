import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import "./FilmCard.css"
import Navbar from './Navbar.js';


class FilmCard extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
           
            
    
          
            
                <div class="Card">
                    <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'></link>
                    <div>
                 <img src={this.props.playerimage} className= 'Litdac-Logo' />
                 </div>
                    <div class="lab">
                    <div class="mc">NAME:
                    <div class="bc">
                     {this.props.name}</div>
                     </div>
                 </div>
                 <div class="lab">
                 <div class="mc">RUNS Taken:
                 <div class="bc">
                     {this.props.runsTaken}</div>
                 </div></div>
                 
                 
                 <div class="lab">
                 <div class="mc">STRIKE RATE:
                 <div class="bc">
                     {this.props.strikerRate}</div>
                 </div></div>
                 
                 <div class="lab">
                 <div class="mc">Bowling AVG:
                 <div class="bc">
                     {this.props.bowlingAverage}</div>
                 </div></div>

                 <div class="lab">
                 <div class="mc">Wickets Taken:
                 <div class="bc">
                     {this.props.Wicketstaken}</div>
                 </div></div>

                 <div class="lab">
                 <div class="mc">Economy:
                 <div class="bc">
                     {this.props.economy}</div>
                 </div></div>
                 
                 <div class="lab">
                  <div class="mc"> BASEPRICE:  <div class="bc">{this.props.baseprice}</div></div>
                 </div>
                 <center>
                 <form class="form-inline">
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
    <option selected>UNSOLD</option>
    <option value="1">CSK</option>
    <option value="2">RCB</option>
    <option value="3">MI</option>
    <option value="3">DC</option>
    <option value="3">PK</option>
    <option value="3">LSG</option>
    <option value="3">KKR</option>
    <option value="3">RR</option>
    <option value="3">SRH</option>
    <option value="3">GT</option>
  </select>

  <div class="custom-control custom-checkbox my-1 mr-sm-2"></div>
</form></center>
                 </div>
                 
        )
    }
}

export default FilmCard;