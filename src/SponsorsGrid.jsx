import React, { Component, PropTypes as T } from 'react'
import './SponsorsGrid.scss'

class SponsorsGrid extends Component {
  static propTypes = {
    sponsors: T.array.isRequired
  }

  render() {
    const { sponsors } = this.props

    return (
      <div className='columns is-multiline is-mobile'>
        {sponsors.map((sponsor, i) => (
          <div key={`sponsor_${i}`} className='column is-6-mobile is-3-tablet is-2-desktop'>
            <div className='card'>
              <header className='card-header'>
                <p className='card-header-title'>
                  {sponsor.name}
                </p>
              </header>
              <div className='card-image logo' style={{ backgroundImage: `url(${sponsor.logo})` }}>
                <figure className='image is-128x128'></figure>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SponsorsGrid
