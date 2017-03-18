import React, { Component, PropTypes as T } from 'react'

class Stats extends Component {
  static propTypes = {
    teams: T.number,
    hackers: T.number
  }

  render() {
    const { teams, hackers } = this.props
    return (
      <div className='stats'>
        <nav className='level'>
          <div className='level-item has-text-centered'>

          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Teams</p>
              <p className='title'>{teams || '-'}</p>
            </div>
          </div>
          <div className='level-item has-text-centered'>
            <div>
              <p className='heading'>Hackers</p>
              <p className='title'>{hackers || '-'}</p>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Stats
