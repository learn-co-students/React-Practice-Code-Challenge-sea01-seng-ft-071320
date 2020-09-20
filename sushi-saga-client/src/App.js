import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushi: [],
    money: 100,
    displayIndex: 0,
  };

  componentDidMount() {
    fetch(API)
      .then((response) => response.json())
      .then((sushis) => this.setState({ sushis: sushis }));
  }

  eatSushi = (chosenSushi) => {
    console.log(this.state.money);
    const newMoney = this.state.money - chosenSushi.price;

    if (!this.state.eatenSushi.includes(chosenSushi) && newMoney >= 0) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, chosenSushi],
        money: newMoney,
      });
    }
  };
  displayFourSushis = () => {
    return this.state.sushis.slice(
      this.state.displayIndex,
      this.state.displayIndex + 4
    );
  };

  moreSushi = (event) => {
    console.log("hello");
    let newDisplayIndex = this.state.displayIndex + 4;

    this.setState({
      displayIndex: newDisplayIndex,
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          moreSushi={this.moreSushi}
          sushis={this.displayFourSushis()}
          eatSushi={this.eatSushi}
          eatenSushi={this.state.eatenSushi}
        />
        <Table balance={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
