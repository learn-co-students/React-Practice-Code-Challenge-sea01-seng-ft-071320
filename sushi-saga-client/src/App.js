import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"



class App extends Component {

  state = {
    sushi: [],
    displayIndex: 0,
    eaten: [],
    money: 100,
  }

  fourSushis = () => {
    return this.state.sushi.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  moreSushi = event => {
   let newDisplayIndex = this.state.displayIndex + 4

   this.setState({displayIndex: newDisplayIndex})
  } 

  eat = (sushi) => {
   let newMoney = this.state.money - sushi.price
    if (!this.state.eaten.includes(sushi) && newMoney >=0 ) {
   this.setState({
    money: newMoney,
    eaten: [...this.state.eaten, sushi]
      })
    }
  }
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then((sushi) => {
      this.setState({ sushi: sushi})
    })
  
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi = {this.fourSushis()} more = {this.moreSushi} eat = {this.eat} eaten = {this.state.eaten}/>
        <Table eaten = {this.state.eaten} remainingMoney = {this.state.money}/>
      </div>
    );
  }
}

export default App;