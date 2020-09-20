import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

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



  render() {
    return (
      <div className="app">
        <SushiContainer
          sushi={this.state.sushi}
          sushiToDisplay={this.state.sushiToDisplay}
          handelMoreSushi={this.handelMoreSushi}
          updateBalance={this.updateBalance}
          balance={this.state.balance}
        />

        <Table balance={this.state.balance} />
      </div>
    );
  }
}

export default App;