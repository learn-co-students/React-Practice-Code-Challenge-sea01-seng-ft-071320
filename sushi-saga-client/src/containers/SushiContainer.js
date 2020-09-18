import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map((sushi) => (
              <Sushi sushi={sushi} key={sushi.id} eat={props.eat} taken={props.eaten.includes(sushi)} />
          ))
        }
        <MoreButton more = {props.more}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer