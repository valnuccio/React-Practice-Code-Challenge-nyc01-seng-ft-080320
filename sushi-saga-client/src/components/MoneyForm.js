import React from 'react'

class MoneyForm extends React.Component {
  
state={
  money:""
}

updateMoneyOnScreen = (e) =>{
  this.setState({money: e.target.value})
}

addMoney = (e) =>{
  e.preventDefault()
  this.props.addToBudget(this.state.money)
  this.setState({money:""})
}
  render(){
    return (
    <div>
        <h2>Add Money Here</h2>
        <form onSubmit={this.addMoney}>
          <input type="number" value={this.state.money} onChange={this.updateMoneyOnScreen}></input>
          <input type="submit" value="Add to Wallet"></input>
        </form>
    </div>
    )
  }
}

export default MoneyForm