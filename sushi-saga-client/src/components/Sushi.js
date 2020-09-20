import Component from 'react'
import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    hasEaten: false
  }
  handelEatSushi = () => {

    if (this.props.balance > this.props.sushi.price) {
      this.setState({ hasEaten: true })
      this.props.updateBalance(this.props.sushi.price)
    } else {
      alert("No free meals!")
    }
  }



  render() {
    const { name, img_url, price, id } = this.props.sushi
    return (
      <Fragment >
        <div className="sushi" >
          <div className="plate"
            onClick={this.handelEatSushi}>
            {this.state.hasEaten ? null : <img src={img_url} width="100%" />}
          </div>
          <h4 className="sushi-details">
            {name} - ${price}
          </h4>
          <p> {id}</p>
        </div>
      </Fragment>
    )
  }
}

export default Sushi