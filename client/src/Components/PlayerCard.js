import React, { Component } from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

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

          {/* image? */}



        </div>
          
        </Card>
        )
      })
    )
  }
}

export default PlayerCard