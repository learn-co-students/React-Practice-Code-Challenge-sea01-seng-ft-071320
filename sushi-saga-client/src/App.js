import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Wallet from './containers/Wallet';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    sushiToDisplay: 0,
    balance: 100
  }

  handelMoreSushi = () => {
    if (this.state.sushiToDisplay >= 96) {
      this.setState({
        sushiToDisplay: 0
      })
    } else {
      this.setState({
        sushiToDisplay: this.state.sushiToDisplay += 4
      })
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({ sushi: sushi }))
  }

  updateBalance = (price) => {
    this.setState({ balance: this.state.balance -= price })
  }

  eatSushi = (id, price) => {
    const newBlalance = this.state.balance - price
    if (newBlalance >= 0) {
      this.setState({ balance: newBlalance })
      const newSushi = this.state.sushi.map((s => {
        const newS = { ...s }
        if (id === s.id) {
          newS.eaten = true

        }
        return newS
      }))
      this.setState({ sushi: newSushi })

    }
  }

  updateBalance = (value) => {
    const newBalance = (+this.state.balance) + (+value)
    this.setState({ balance: newBalance })

  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          sushiToDisplay={this.state.sushiToDisplay}
          handelMoreSushi={this.handelMoreSushi}
          updateBalance={this.updateBalance}
          balance={this.state.balance}
          eatSushi={this.eatSushi}
        />

        <Table balance={this.state.balance} sushi={this.state.sushi} />
        <Wallet updateBalance={this.updateBalance} />
      </div>
    );
  }
}

export default App;