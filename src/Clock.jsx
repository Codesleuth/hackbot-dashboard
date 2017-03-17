import React, { Component, PropTypes as T } from 'react'
import moment from 'moment'

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
    window.setInterval(function () {this.setTime();}.bind(this), 1000);
  }

  render() {
    const { currentdate } = this.state
      return(  
        <nav className='level-right'>
          <div className='level-item has-text-right'>
            <div>              
              <h1 className='title is-1'><span className="time">{currentdate}</span></h1>
            </div>
          </div>
        </nav>
      )
    }
}

export default Clock
