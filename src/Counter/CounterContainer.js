import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Counter from './Counter'
import {
  increment,
  decrement,
  reset
} from './actions'

class CounterContainer extends Component {
  render () {
    return (
      <Counter
        currentCount={this.props.currentCount}
        increment={this.props.increment}
        decrement={this.props.decrement}
        reset={this.props.reset}
      />
    )
  }
}

CounterContainer.propTypes = {
  currentCount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func
}

const mapStateToProps = state => {
  return {
    currentCount: state.counter.currentCount
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
