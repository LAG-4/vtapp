import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

import FilmCard from './FilmCard';

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        playerInfo: [],
        fetching: false,
        error: false
      }
    }
  
    componentDidMount() {
      this.setState({ fetching: true })
  
      fetch("https://api.apispreadsheets.com/data/qh8uGyMRK7wkzINU/").then(res=>{
        if (res.status === 200){
          // SUCCESS
          res.json().then(data => {
            const yourData = data.data
            this.setState(
                {
                  playerInfo: yourData,
                  fetching: false
                }
            )
          }).catch(err => this.setState({ error: true, fetching: false }))
        }
        else{
          this.setState({ error: true, fetching: false })
          // ERROR
        }
      }).catch(err => this.setState({ error: true, fetching: false }))
    }
    
    render() {
      let body;
      if(this.state.playerInfo.length===0 && !this.state.fetching && !this.state.error){
              body = <h1> ... </h1>
      } else {
          if(this.state.fetching){
              body = <h1> ... </h1>
          }
          else{
              if(this.state.error){
                  body = <h1> There was an error getting your request</h1>
              }
              else{
                  body = this.state.playerInfo.map(x => <FilmCard         name={x.Name}
                                                                            runsGiven={x.RunsConceded}
                                                                            bowlingAverage={x.BowlingAverage}
                                                                            wicketstaken={x.Wickets}
                                                                            strikerRate={x.Strike_rate}
                                                                            economy={x.Economy}
                                                                            playerimage={x.BowlerImages}
                                                                            baseprice={x.BasePrice}
                                                                            />
                                                                            )
  
              }
          }
  
      }
  
      return (
         <div>
          <link href='https://fonts.googleapis.com/css?family=Cairo' rel='stylesheet'></link>
            <Navbar></Navbar>
            <p><center> Bowlers list</center></p>         
             {body}
         </div>
      )
    }
  }
  
  

export default App;