import React, { Fragment } from 'react';
import MoneyForm from './MoneyForm'

class Sushi extends React.Component {

  state={
    eaten:false,
    addMoney:false
  }


  eatingSushi = () =>{
    let sushiObj=this.props;
  if(this.props.money >= this.props.sushi.price){
    
    this.props.emptyPlater(sushiObj)
    this.setState({eaten:true})
    // this.props.eaten(sushiObj)
    // this.setState({eaten: !this.state.eaten})
  } else {
    
    this.props.addMoney(sushiObj)
    alert("you don't have enough money, ya butt! add some more!")
    

  }
  }

  render(){
  return (
    
    <div className="sushi">
      <div className="plate" >
        { this.state.eaten===false?  <img src={this.props.sushi.img_url} alt="sushi" width="100%"  onClick={this.eatingSushi}/> : null }
        
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
      
    </div>
  )
 }
}

export default Sushi