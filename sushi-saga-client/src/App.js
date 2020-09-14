import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3001/sushis";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    page: [0, 1, 2, 3],
    remaining: 200,
    add: "",
  };

  componentDidMount() {
    this.fetchSushis().then((sushis) => {
      this.setState({
        sushis: sushis,
      });
    });
  }

  fetchSushis() {
    return fetch(API).then((resp) => resp.json());
  }

  moreSushi = () => {
    const page = this.state.page;
    page.shift();

    let i = page.slice(-1)[0] + 1;
    if (!this.state.sushis[i]) {
      i = 0;
    }

    this.setState({
      page: [...page, i],
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      remaining: this.state.remaining + +this.state.add,
      add: "",
    });
  };

  handleClick = (id) => {
    const sushi = this.state.sushis.find((sushi) => sushi.id === id);

    if (this.state.remaining < sushi.price) {
      window.alert("Sorry, you can't afford this sushi!");
      return;
    }

    sushi.eaten = true;

    const remaining = this.state.remaining - sushi.price;

    this.setState({
      remaining: remaining,
      eaten: [...this.state.eaten, sushi.id],
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          page={this.state.page}
          handleClick={this.handleClick}
          moreSushi={this.moreSushi}
        />
        <Table
          eaten={this.state.eaten}
          remaining={this.state.remaining}
          add={this.state.add}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
