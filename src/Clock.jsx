import React, { Component } from 'react'
import moment from 'moment'

class Clock extends Component {
  state = {
    currentdate: moment.duration(0)
  }

  timer = null

  setTime() {
    this.setState({
      currentdate: moment().format('HH:mm:ss')
    })
  }

  componentWillMount() {
    this.setTime()
  }

  componentDidMount() {
    this.timer = setInterval(this.setTime.bind(this), 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { currentdate } = this.state
    return (
      <span>{currentdate}</span>
    )
  }
}

export default Clock
