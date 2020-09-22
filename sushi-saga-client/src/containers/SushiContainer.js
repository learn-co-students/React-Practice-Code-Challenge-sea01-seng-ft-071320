import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'


const SushiContainer = (props) => {

  return (
    < Fragment >
      <div className="belt">
        {props.sushi.slice(`${props.sushiToDisplay}`, `${props.sushiToDisplay + 4}`).map(sushi =>
          <Sushi
            key={sushi.id}
            sushi={sushi}
            updateBalance={props.updateBalance}
            balance={props.balance}
            eatSushi={props.eatSushi}
          />)}
        <MoreButton sushiToDisplay={props.sushiToDisplay} handelMoreSushi={props.handelMoreSushi} />
      </div>
    </Fragment >
  )
}

export default SushiContainer