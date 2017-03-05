import React, { Component, PropTypes as T } from 'react'
import moment from 'moment'

function zeroPad(num) {
  const str = num.toString()
  return str.length > 2 ? str : ('00' + str).substring(str.length)
}

class Timer extends Component {
  static propTypes = {
    start: T.instanceOf(Date).isRequired,
    end: T.instanceOf(Date).isRequired
  }

  state = {
    isTeeMinus: false,
    timer: moment.duration(0)
  }

  updateTimer() {
    const { start, end } = this.props
    const epochStart = moment(start).valueOf()
    const epochEnd = moment(end).valueOf()
    const now = moment().valueOf()

    this.setState({
      isTeeMinus: now < epochStart,
      timer: now < epochStart ? moment.duration(epochStart - now, 'milliseconds') : moment.duration(epochEnd - now, 'milliseconds')
    })
  }

  componentDidMount() {
    setInterval(this.updateTimer.bind(this), 1000)
    this.updateTimer()
  }

  render() {
    const { isTeeMinus, timer } = this.state
    const totalHours = timer.hours() + timer.days() * 24
    const value = `${isTeeMinus ? 'T-' : ''}${zeroPad(totalHours)}:${zeroPad(timer.minutes())}:${zeroPad(timer.seconds())}`
    return (
      <span>{value}</span>
    )
  }
}

export default Timer
