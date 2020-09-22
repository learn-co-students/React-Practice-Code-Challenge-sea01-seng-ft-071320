import React from 'react'

class Wallet extends React.Component {
    state = {
        value: 0
    }

    handleOnChange = (e) => {
        this.setState({ value: e.target.value })
    }
    addMoneyToBalance = () => {
        const addValue = this.state.value
        this.props.updateBalance(addValue)

        this.setState({ value: 0 })
    }


    render() {

        return (
            <div className="wallet" >
                <input type="text" value={this.state.value} onChange={(e) => this.handleOnChange(e)} />
                <button onClick={this.addMoneyToBalance}> Add money to wallet </button>

            </div>
        )
    }
}

export default Wallet