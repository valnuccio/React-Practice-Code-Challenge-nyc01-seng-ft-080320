import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';


// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state={
    api:[],
    eatenArray:[],
    budget:100,
    addMoney:false,
  }

  emptyPlater = (sushiObj) => {

    if(sushiObj.sushi.price <= this.state.budget){
        let newArray=[...this.state.eatenArray, sushiObj]
        
        let newBudget= this.state.budget - sushiObj.sushi.price

        let sushiId= sushiObj.sushi.id

        let passedValue={eaten: true}

        let options={
          method:'PATCH',
          headers:{
            'content-type':'application/json',
            'accepts':'application/json'
          },
          body:JSON.stringify({passedValue})
        }

        fetch(API+sushiId, options)
        .then(res=>res.json())
        .then(data=>{
          fetch(API)
          .then(res=>res.json())
          .then(data=>this.setState({api:data,eatenArray:newArray, budget:newBudget }))
        })


        // this.setState({numEaten: this.state.numEaten+1})
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  

  

  

  addThatForm =() =>{
    this.setState({addMoney:true})
  }

  addToBudget=(value)=>{
    let newValue = parseInt(value) + this.state.budget
    this.setState({budget:newValue})
  }

  render() {
    console.log(this.state.api)
    
    
    return (
      <div className="app">
        <SushiContainer api={this.state.api} addMoney={this.addThatForm} emptyPlater={this.emptyPlater} money={this.state.budget}/>
        <Table plates={this.state.eatenArray} money={this.state.budget}/>
        {this.state.addMoney===true? <MoneyForm addToBudget={this.addToBudget}/>:null}
      </div>
    );
  }
}

export default App;