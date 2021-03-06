import React, { Component } from 'react'
import {
  Card, CardText,
  CardTitle
} from 'reactstrap';

import IMG from './search-128.png'

class PlayerCard extends Component{
  render() {
    return(
      this.props.players.map(player => {
        return(
          <Card key={player.id} body outline color="primary">
          <CardTitle><h3 className="display-4">{player.name}</h3></CardTitle>

          <CardText>
              <p 
              style={{textAlign:'center', fontSize:'2em'}} 
              className="lead text-muted">
                {player.country}
              </p>
          </CardText>

          <div style={{display: 'flex', flexWrap:'wrap', justifyContent: 'flex-end'}}>

          <h2>{player.searches}</h2>

          <img style={{width: '40px', height: '40px'}} src={IMG}/>

          {/* image? */}



        </div>
          
        </Card>
        )
      })
    )
  }
}

export default PlayerCard