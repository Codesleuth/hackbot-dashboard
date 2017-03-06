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

  timer = null

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
      timer: now < epochStart ? moment.duration(epochStart - now) : moment.duration(epochEnd - now)
    })
  }

  componentWillMount() {
    this.updateTimer()
  }

  componentDidMount() {
    this.timer = setInterval(this.updateTimer.bind(this), 1000)
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  render() {
    const { isTeeMinus, timer } = this.state
    const totalHours = timer.hours() + timer.days() * 24
    return (
      <span>
        <span>{isTeeMinus && 'T-'}</span>
        <span>{zeroPad(totalHours)}</span>:
        <span>{zeroPad(timer.minutes())}</span>:
        <span>{zeroPad(timer.seconds())}</span>
      </span>
    )
  }
}

export default Timer
