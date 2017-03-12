import React, { Component, PropTypes as T } from 'react'
import './SponsorsGrid.scss'

class SponsorsGrid extends Component {
  static propTypes = {
    sponsors: T.array.isRequired
  }

  render() {
    const { sponsors } = this.props

    return (
      <div className='columns is-multiline is-mobile is-gapless'>
        {sponsors.filter(sponsor => sponsor.challenge).map((sponsor, i) => (
          <div key={`sponsor_${i}`} className='column is-4-mobile is-3-tablet is-1-desktop'>
            <div className='logo' style={{ backgroundImage: `url(${sponsor.logo})` }}>
              <figure className='image is-64x64'></figure>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default SponsorsGrid
