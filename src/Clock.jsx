import React, { Component, PropTypes as T } from 'react'
import moment from 'moment'
import './Clock.scss'

class Clock extends Component {

  currentdate = null

  state = {    
      currentdate: moment.duration(0)
  }

 setTime(){
    var now = moment().format('h:mm:ss a')

    this.setState({
        currentdate: now
    });
  }

  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    window.setInterval(this.setTime.bind(this), 1000)
  }

  render() {
    const { currentdate } = this.state
      return(                   
          <span className="clock">{currentdate}</span>       
      )
    }
}

export default Clock
