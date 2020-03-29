import React, { Component } from 'react';
import {Card, Image} from 'semantic-ui-react'

class Result extends Component {

  renderCharacter = (points) => {
    if (points != null){
      if (points <= 10) {
        return this.imgTag("jerry.jpg", "Jerry", 'You\'re Jerry! Jerry is sometimes misguided by his insecurities, and could be a bit self-centered at times. Despite this, he has the ability to channel his inner strength to conquer his darkest fears, and at the end of the day always does whats best for his family.')
      } else if (points === 11 || points <= 14){
        return this.imgTag("morty.png", "Morty", 'You\'re Morty! Morty is a well-behaved impressionable teenage boy that is easily manipulated from time to time, mostly by his grandfather, Rick. Morty can be easily manipulated by Rick on their adventures, however he stands up for himself when he\'s pushed over the edge, and will so absolutely anything for the people he loves.')
      } else if (points === 15 || points <= 18){
        return this.imgTag("rick.png", "Rick", 'Wuuubba lubba dub dub! Rick is the most billiant man in the whole universe, from creating devices that produce portals to different dimensions to interdimensional cable TV boxes. His brillance gets tampered with frquently due to his alcohol addiction and harsh personal views. He has a tendency to be possessive and dominating towards Morty when they go on adventures, but as much as he hates to admit it, Ricks love for morty and their memories will never die.')
      } else if (points === 19 || points <= 21){
        return this.imgTag("summer.png", "Summer", 'You\'re so totally Summer. Summer is an average teenage girl that loves social media & cares about')
      } else if (points === 22 || points <= 24){
        return this.imgTag("beth.png", "Beth", 'You\'re Beth!')
      }
    } else {
      return null
    }
  }

   imgTag = (url, name, desc) => {
    return (
      <Card>
   <Image src={url} wrapped ui={false} />
   <Card.Content>
     <Card.Header>{name}</Card.Header>
     <Card.Meta>
       <span className='date'>Joined in 2015</span>
     </Card.Meta>
     <Card.Description>
       {desc}
     </Card.Description>
   </Card.Content>
   <Card.Content extra>
   </Card.Content>
 </Card>
    )
  }

  render() {
    console.log(this.props.totalPoints <= 10)
    return (
      <div>
      <h1 className='result'>You are:</h1>
        {this.renderCharacter(this.props.totalPoints)}
      </div>
    );
  }

}

export default Result;
  // {this.renderCharacter(this.props.totalPoints)}
