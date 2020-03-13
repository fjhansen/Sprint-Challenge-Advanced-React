import React, { Component } from 'react';

import PlayerCard from './Components/PlayerCard';
import Header from './Components/Header';


import './App.css';

import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    this.state={
      // message: "testing app state!",
      players: [],
      
    }
  }
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => {
      console.log('D A T A: ', Object.values(res.data));
      this.setState({
        players: res.data
      })
     
    })
  }
  render(){
    return(
      <div className="main">
        {/* <h1>{this.state.message}</h1> */}
        <Header/>
        <div className="cardbox">
        <PlayerCard players={this.state.players}/>
        </div>
      </div>
    )
  }
}

export default App;
