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
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
        )
      })
    )
  }
}

export default PlayerCard