import React, { Component } from 'react'

class Stats extends Component {
  render() {
    const { teams, hackers, challenges } = this.props
    return (
      <nav className='level'>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Challenges</p>
            <p className='title is-1'>{challenges || '-'}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Teams</p>
            <p className='title is-1'>{teams || '-'}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Hackers</p>
            <p className='title is-1'>{hackers || '-'}</p>
          </div>
        </div>
        <div className='level-item has-text-centered'>
          <div>
            <p className='heading'>Time Left</p>
            <p className='title is-1'>00:00:00</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default Stats
