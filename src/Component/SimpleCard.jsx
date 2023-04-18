import React, {component} from 'react'
import './SimpleCard.css';
import Image from './Image';
import Title from './Title';
import Description from'./Description';

class Simplecard extends React.Component{
  
      image='https://media.istockphoto.com/id/182175040/photo/birthday-cake.jpg?b=1&s=170667a&w=0&k=20&c=AByvM0YYQKEtINBnq0WiL5z2-EnLkqe5ViibE8T4jrE='
      title = "Birthday Card"
      desc = 'Happy Birthday to my Sunshine, You are six years today, May you grow like Jesus grew in wisdom, stature , favor'



     render() {
      return(
      <div>
        <div className='card_container'>
        <div className='image_container'>
          <Image picture={this.image}/>
        </div>
        <div className='titleDesc_container'>
          <Title heading={this.title}/>
          <Description text={this.desc}/>
        </div>
        </div>
        



      </div>
      );
     }
     
  }


export default Simplecard
