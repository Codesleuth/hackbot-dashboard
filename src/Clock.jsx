import React, { Component, PropTypes as T } from 'react'

class Clock extends Component {

  state = {
        hours: 1,
        minutes: 1,
        seconds: 1
  }

 setTime(){

    var currentdate = new Date();
    var hours = currentdate.getUTCHours();    

      // correct for number over 24, and negatives
      if( hours >= 24 ){ hours -= 24; }
      if( hours < 0   ){ hours += 12; }

      // add leading zero, first convert hours to string
      hours = hours + "";
      if( hours.length == 1 ){ hours = "0" + hours; }

      // minutes are the same on every time zone
      var minutes = currentdate.getUTCMinutes();

      // add leading zero, first convert hours to string
      minutes = minutes + "";
      if( minutes.length == 1 ){ minutes = "0" + minutes; }

      var seconds = currentdate.getUTCSeconds();
      
      this.setState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
  }

  componentWillMount() {
    this.setTime();
  }

  componentDidMount() {
    window.setInterval(function () {this.setTime();}.bind(this), 1000);
  }

  render() {
    const { seconds, hours, minutes } = this.state
      return(      
        <span className="time">{this.state.hours}:{this.state.minutes}:{this.state.seconds}</span>
      )
    }
}

export default Clock
