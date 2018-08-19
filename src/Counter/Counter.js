import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  render () {
    return (
      <div className='counter-wrapper'>
        <div>{this.props.currentCount}</div>
        <button onClick={this.props.increment}>Plus</button>
        <button onClick={this.props.decrement}>Minus</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    )
  }
}

Counter.propTypes = {
  currentCount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func
}

export default Counter
