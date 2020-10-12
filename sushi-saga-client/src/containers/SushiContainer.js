import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component{

state={
  displayBottom:0,
  displayTop:4
}


  renderSushi = (x, y) => {
    if(this.props.api.length > 0){
     return this.props.api.slice(x,y).map(object=><Sushi key={object.id} addMoney={this.props.addMoney} sushi={object} money={this.props.money} emptyPlater={this.props.emptyPlater}/>)
    }
  }

  moreSushi = () => {
    
    
    let displayEnding= this.props.api.length-4
      if(this.state.displayBottom < displayEnding ){
        this.setState({
          displayBottom: this.state.displayBottom+4,
          displayTop: this.state.displayTop + 4
      })} else {
        this.setState({displayBottom:0, displayTop:4})
      }
  }
  

render(){
  
  return (
    
      <div className="belt">
        {
        this.renderSushi(this.state.displayBottom, this.state.displayTop)
        }
        <MoreButton addMoreSushi={this.moreSushi} />
      </div>
   
  )
}

}
export default SushiContainer